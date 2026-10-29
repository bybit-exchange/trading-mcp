import { buildAuthHeaders, resolveSignConfig, toQueryString } from '../utils/auth.js';
import { rateLimiter } from '../utils/rate-limiter.js';
import { commonHeaders } from '../version.js';
import type { ToolExecutionContext } from '../utils/tool-context.js';

const MAINNET = 'https://api.bybit.com';
const TESTNET = 'https://api-testnet.bybit.com';
const REQUEST_TIMEOUT_MS = 10_000;

function withTimeout(ms: number, requestSignal?: AbortSignal): { signal: AbortSignal; clear: () => void } {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: requestSignal ? AbortSignal.any([requestSignal, controller.signal]) : controller.signal, clear: () => clearTimeout(timer) };
}

// Important: env vars are read at call time (not at import time) so that
// tests and late-init callers can set them after the module is loaded.
function getConfig() {
  return {
    baseUrl: process.env.BYBIT_TESTNET === 'true' ? TESTNET : MAINNET,
    apiKey: process.env.BYBIT_API_KEY,
  };
}

async function handleResponse(res: Response): Promise<unknown> {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
  }
  const data = (await res.json()) as { retCode?: number; retMsg?: string; ret_code?: number; ret_msg?: string };
  const code = data.retCode ?? data.ret_code;
  if (code !== undefined && code !== 0) {
    throw new Error(`Bybit API error ${code}: ${data.retMsg ?? data.ret_msg ?? 'unknown'}`);
  }
  return data;
}

class RestClient {
  async get(path: string, params: Record<string, unknown>, context: ToolExecutionContext = {}): Promise<unknown> {
    context.signal?.throwIfAborted();
    await rateLimiter.acquire(path, context.signal);
    context.signal?.throwIfAborted();
    const { baseUrl } = getConfig();
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS, context.signal);
    try {
      signal.throwIfAborted();
      const res = await fetch(url, { headers: commonHeaders(), signal });
      return await handleResponse(res);
    } finally { clear(); }
  }

  async getAuth(path: string, params: Record<string, unknown>, context: ToolExecutionContext = {}): Promise<unknown> {
    context.signal?.throwIfAborted();
    const { baseUrl, apiKey } = getConfig();
    assertApiKey(apiKey);
    const signConfig = resolveSignConfig();
    await rateLimiter.acquire(path, context.signal);
    context.signal?.throwIfAborted();
    const qs = toQueryString(params);
    const url = qs ? `${baseUrl}${path}?${qs}` : `${baseUrl}${path}`;
    const headers = { ...commonHeaders(), ...buildAuthHeaders(qs, apiKey!, signConfig) };
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS, context.signal);
    try {
      signal.throwIfAborted();
      const res = await fetch(url, { headers, signal });
      return await handleResponse(res);
    } finally { clear(); }
  }

  async post(path: string, body: Record<string, unknown>, context: ToolExecutionContext = {}): Promise<unknown> {
    context.signal?.throwIfAborted();
    await rateLimiter.acquire(path, context.signal);
    context.signal?.throwIfAborted();
    const { baseUrl } = getConfig();
    const bodyStr = JSON.stringify(body);
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS, context.signal);
    try {
      signal.throwIfAborted();
      const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: { ...commonHeaders(), 'Content-Type': 'application/json' },
        body: bodyStr,
        signal,
      });
      return await handleResponse(res);
    } finally { clear(); }
  }

  async postAuth(path: string, body: Record<string, unknown>, context: ToolExecutionContext = {}): Promise<unknown> {
    context.signal?.throwIfAborted();
    const { baseUrl, apiKey } = getConfig();
    assertApiKey(apiKey);
    const signConfig = resolveSignConfig();
    await rateLimiter.acquire(path, context.signal);
    context.signal?.throwIfAborted();
    const bodyStr = JSON.stringify(body);
    const headers = {
      ...commonHeaders(),
      'Content-Type': 'application/json',
      ...buildAuthHeaders(bodyStr, apiKey!, signConfig),
    };
    const { signal, clear } = withTimeout(REQUEST_TIMEOUT_MS, context.signal);
    try {
      signal.throwIfAborted();
      const res = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body: bodyStr, signal });
      return await handleResponse(res);
    } finally { clear(); }
  }
}

function assertApiKey(apiKey?: string): void {
  if (!apiKey) {
    throw new Error('BYBIT_API_KEY must be set for authenticated requests.');
  }
}

export const restClient = new RestClient();
