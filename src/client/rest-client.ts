import { buildAuthHeaders, toQueryString } from '../utils/auth.js';
import { rateLimiter } from '../utils/rate-limiter.js';
import { commonHeaders } from '../version.js';

const MAINNET = 'https://api.bybit.com';
const TESTNET = 'https://api-testnet.bybit.com';
const REQUEST_TIMEOUT_MS = 10_000;

function withTimeout(ms: number): { signal: AbortSignal; clear: () => void } {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, clear: () => clearTimeout(timer) };
}

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
  const data = (await res.json()) as { retCode?: number; retMsg?: string };
  if (data.retCode !== undefined && data.retCode !== 0) {
    throw new Error(`Bybit API error ${data.retCode}: ${data.retMsg ?? 'unknown'}`);
  }
  return data;
}

class RestClient {
  async get(path: string, params: Record<string, unknown>): Promise<unknown> {
    await rateLimiter.acquire(path);
    const { baseUrl } = getConfig();
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(url, { headers: commonHeaders(), signal });
      return handleResponse(res);
    } finally { clear(); }
  }

  async getAuth(path: string, params: Record<string, unknown>): Promise<unknown> {
    const { baseUrl, apiKey, apiSecret } = getConfig();
    assertCredentials(apiKey, apiSecret);
    await rateLimiter.acquire(path);
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const headers = { ...commonHeaders(), ...buildAuthHeaders(qs, apiKey!, apiSecret!) };
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(url, { headers, signal });
      return handleResponse(res);
    } finally { clear(); }
  }

  async post(path: string, body: Record<string, unknown>): Promise<unknown> {
    await rateLimiter.acquire(path);
    const { baseUrl } = getConfig();
    const bodyStr = JSON.stringify(body);
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: { ...commonHeaders(), 'Content-Type': 'application/json' },
        body: bodyStr,
        signal,
      });
      return handleResponse(res);
    } finally { clear(); }
  }

  async postAuth(path: string, body: Record<string, unknown>): Promise<unknown> {
    const { baseUrl, apiKey, apiSecret } = getConfig();
    assertCredentials(apiKey, apiSecret);
    await rateLimiter.acquire(path);
    const bodyStr = JSON.stringify(body);
    const headers = {
      ...commonHeaders(),
      'Content-Type': 'application/json',
      ...buildAuthHeaders(bodyStr, apiKey!, apiSecret!),
    };
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body: bodyStr, signal });
      return handleResponse(res);
    } finally { clear(); }
  }
}

function assertCredentials(apiKey?: string, apiSecret?: string): void {
  if (!apiKey || !apiSecret) {
    throw new Error('BYBIT_API_KEY and BYBIT_API_SECRET must be set for authenticated requests.');
  }
}

export const restClient = new RestClient();
