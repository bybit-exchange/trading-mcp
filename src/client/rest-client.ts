import { buildAuthHeaders, toQueryString } from '../utils/auth.js';
import { rateLimiter } from '../utils/rate-limiter.js';

const MAINNET = 'https://api.bybit.com';
const TESTNET = 'https://api-testnet.bybit.com';

// Important: env vars are read at call time (not at import time) so that
// tests and late-init callers can set them after the module is loaded.
function getConfig() {
  return {
    baseUrl: process.env.BYBIT_TESTNET === 'true' ? TESTNET : MAINNET,
    apiKey: process.env.BYBIT_API_KEY,
    apiSecret: process.env.BYBIT_API_SECRET,
  };
}

async function handleResponse(res: Response): Promise<unknown> {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

class RestClient {
  async get(path: string, params: Record<string, unknown>): Promise<unknown> {
    await rateLimiter.acquire(path);
    const { baseUrl } = getConfig();
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const res = await fetch(url);
    return handleResponse(res);
  }

  async getAuth(path: string, params: Record<string, unknown>): Promise<unknown> {
    const { baseUrl, apiKey, apiSecret } = getConfig();
    assertCredentials(apiKey, apiSecret);
    await rateLimiter.acquire(path);
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const headers = buildAuthHeaders(qs, apiKey!, apiSecret!);
    const res = await fetch(url, { headers });
    return handleResponse(res);
  }

  async post(path: string, body: Record<string, unknown>): Promise<unknown> {
    await rateLimiter.acquire(path);
    const { baseUrl } = getConfig();
    const bodyStr = JSON.stringify(body);
    const res = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyStr,
    });
    return handleResponse(res);
  }

  async postAuth(path: string, body: Record<string, unknown>): Promise<unknown> {
    const { baseUrl, apiKey, apiSecret } = getConfig();
    assertCredentials(apiKey, apiSecret);
    await rateLimiter.acquire(path);
    const bodyStr = JSON.stringify(body);
    const headers = {
      'Content-Type': 'application/json',
      ...buildAuthHeaders(bodyStr, apiKey!, apiSecret!),
    };
    const res = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body: bodyStr });
    return handleResponse(res);
  }
}

function assertCredentials(apiKey?: string, apiSecret?: string): void {
  if (!apiKey || !apiSecret) {
    throw new Error('BYBIT_API_KEY and BYBIT_API_SECRET must be set for authenticated requests.');
  }
}

export const restClient = new RestClient();
