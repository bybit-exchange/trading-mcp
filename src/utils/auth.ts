import crypto from 'crypto';

/**
 * Builds the HMAC-SHA256 signature string required by Bybit API v5.
 *
 * For GET:  rawStr = timestamp + apiKey + recvWindow + queryString
 * For POST: rawStr = timestamp + apiKey + recvWindow + JSON.stringify(body)
 */
export function sign(rawStr: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(rawStr).digest('hex');
}

/**
 * Converts a plain params object into a URL query string,
 * skipping undefined / null values.
 */
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
  apiSecret: string,
  recvWindow = '5000',
): AuthHeaders {
  const timestamp = Date.now().toString();
  const rawStr = `${timestamp}${apiKey}${recvWindow}${paramStr}`;
  return {
    'X-BAPI-API-KEY': apiKey,
    'X-BAPI-TIMESTAMP': timestamp,
    'X-BAPI-SIGN': sign(rawStr, apiSecret),
    'X-BAPI-RECV-WINDOW': recvWindow,
  };
}
