import crypto from 'crypto';
import fs from 'fs';

export type SignConfig =
  | { type: 'hmac'; secret: string }
  | { type: 'rsa'; privateKey: string };

/**
 * Resolves RSA/HMAC sign config from environment variables.
 * RSA takes priority over HMAC when both are set (e.g. system env has BYBIT_API_SECRET
 * while MCP config injects BYBIT_API_PRIVATE_KEY_PATH). A warning is emitted to stderr
 * so users can clean up stale vars, but the server continues normally.
 */
export function resolveSignConfig(): SignConfig {
  const secret = process.env.BYBIT_API_SECRET;
  const rsaPath = process.env.BYBIT_API_PRIVATE_KEY_PATH;

  const hasHmac = !!secret;
  const hasRsa = !!rsaPath;

  if (hasRsa) {
    if (hasHmac) {
      console.error(
        '[trading-mcp] WARNING: Both BYBIT_API_SECRET and BYBIT_API_PRIVATE_KEY_PATH are set. ' +
        'RSA mode takes precedence. Remove BYBIT_API_SECRET to suppress this warning.',
      );
    }
    if (!fs.existsSync(rsaPath)) {
      throw new Error(`BYBIT_API_PRIVATE_KEY_PATH points to a non-existent file: ${rsaPath}`);
    }
    const privateKey = fs.readFileSync(rsaPath, 'utf-8');
    if (!privateKey.includes('-----BEGIN')) {
      throw new Error('RSA private key does not look like a valid PEM. Check BYBIT_API_PRIVATE_KEY_PATH.');
    }
    return { type: 'rsa', privateKey };
  }

  if (hasHmac) {
    return { type: 'hmac', secret: secret! };
  }

  throw new Error(
    'No auth credentials found. Set BYBIT_API_SECRET (HMAC) or BYBIT_API_PRIVATE_KEY_PATH (RSA).',
  );
}

export function signHmac(rawStr: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(rawStr).digest('hex');
}

export function signRsa(rawStr: string, privateKey: string): string {
  return crypto.createSign('RSA-SHA256').update(rawStr).sign(privateKey, 'base64');
}

export function toQueryString(params: Record<string, unknown>): string {
  return Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join('&');
}

export type AuthHeaders = Record<string, string>;

export function buildAuthHeaders(
  paramStr: string,
  apiKey: string,
  signConfig: SignConfig,
  recvWindow = '5000',
): AuthHeaders {
  const timestamp = Date.now().toString();
  const rawStr = `${timestamp}${apiKey}${recvWindow}${paramStr}`;
  const signature = signConfig.type === 'rsa'
    ? signRsa(rawStr, signConfig.privateKey)
    : signHmac(rawStr, signConfig.secret);
  const headers: AuthHeaders = {
    'X-BAPI-API-KEY': apiKey,
    'X-BAPI-TIMESTAMP': timestamp,
    'X-BAPI-SIGN': signature,
    'X-BAPI-RECV-WINDOW': recvWindow,
  };
  if (signConfig.type === 'rsa') {
    headers['X-BAPI-SIGN-TYPE'] = '2';
  }
  return headers;
}
