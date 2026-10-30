import { performance } from 'node:perf_hooks';

/**
 * Simple token-bucket rate limiter keyed by endpoint path.
 * Default: 10 requests / second per endpoint (configurable per path).
 * Endpoints with strict per-second limits use a rolling window.
 */

interface Bucket {
  tokens: number;
  maxTokens: number;
  lastRefillMs: number;
  refillIntervalMs: number; // how often one token is added
}

const DEFAULT_MAX_TOKENS = 10;

// Per-endpoint overrides (rps → interval)
const ENDPOINT_LIMITS: Record<string, number> = {
  '/v5/market/kline': 50,
  '/v5/market/orderbook': 50,
  '/v5/market/tickers': 20,
};

const ROLLING_WINDOW_LIMITS: Record<string, number> = {
  '/v5/spot-margin-trade/fixedborrow-interest-accrued': 5,
  '/v5/spot-margin-trade/fixedborrow-order-cancel': 1,
  '/v5/referral/campaign/rewards': 5,
  '/v5/referral/commission/records': 5,
  '/v5/referral/user/identity-profile': 5,
  '/v5/referral/user/invitations': 5,
};

export class RateLimiter {
  private buckets = new Map<string, Bucket>();
  private requestTimes = new Map<string, number[]>();

  private getBucket(endpoint: string): Bucket {
    if (!this.buckets.has(endpoint)) {
      const rps = ENDPOINT_LIMITS[endpoint] ?? DEFAULT_MAX_TOKENS;
      this.buckets.set(endpoint, {
        tokens: rps,
        maxTokens: rps,
        lastRefillMs: Date.now(),
        refillIntervalMs: Math.floor(1000 / rps),
      });
    }
    return this.buckets.get(endpoint)!;
  }

  /**
   * Waits until a token is available for the given endpoint.
   */
  async acquire(endpoint: string, signal?: AbortSignal): Promise<void> {
    signal?.throwIfAborted();
    const windowLimit = ROLLING_WINDOW_LIMITS[endpoint];
    if (windowLimit !== undefined) {
      return this.acquireRollingWindow(endpoint, windowLimit, signal);
    }
    const bucket = this.getBucket(endpoint);
    while (true) {
      signal?.throwIfAborted();
      const now = Date.now();
      const elapsed = now - bucket.lastRefillMs;
      const tokensToAdd = Math.floor(elapsed / bucket.refillIntervalMs);
      if (tokensToAdd > 0) {
        bucket.tokens = Math.min(bucket.maxTokens, bucket.tokens + tokensToAdd);
        // Advance lastRefillMs by exactly the consumed intervals to preserve
        // fractional time and prevent drift.
        bucket.lastRefillMs += tokensToAdd * bucket.refillIntervalMs;
      }
      if (bucket.tokens > 0) {
        bucket.tokens--;
        return;
      }
      await waitForSlot(bucket.refillIntervalMs, signal);
    }
  }

  private async acquireRollingWindow(endpoint: string, limit: number, signal?: AbortSignal): Promise<void> {
    let times = this.requestTimes.get(endpoint);
    if (!times) {
      times = [];
      this.requestTimes.set(endpoint, times);
    }
    while (true) {
      signal?.throwIfAborted();
      // Monotonic time prevents wall-clock corrections from freeing slots early.
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) times.shift();
      if (times.length < limit) {
        times.push(now);
        return;
      }
      // Check again after waking; concurrent callers must compete for real slots.
      await waitForSlot(Math.ceil(times[0] + 1000 - now), signal);
    }
  }
}

function waitForSlot(ms: number, signal?: AbortSignal): Promise<void> {
  signal?.throwIfAborted();
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
    };
    const onAbort = () => {
      cleanup();
      reject(signal?.reason ?? new Error('Request aborted'));
    };
    const timer = setTimeout(() => { cleanup(); resolve(); }, ms);
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

export const rateLimiter = new RateLimiter();
