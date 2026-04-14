/**
 * Simple token-bucket rate limiter keyed by endpoint path.
 * Default: 10 requests / second per endpoint (configurable per path).
 */

interface Bucket {
  tokens: number;
  maxTokens: number;
  lastRefillMs: number;
  refillIntervalMs: number; // how often one token is added
}

const DEFAULT_MAX_TOKENS = 10;
const DEFAULT_REFILL_INTERVAL_MS = 100; // 10 req/s → 1 token per 100 ms

// Per-endpoint overrides (rps → interval)
const ENDPOINT_LIMITS: Record<string, number> = {
  '/v5/market/kline': 50,
  '/v5/market/orderbook': 50,
  '/v5/market/tickers': 20,
};

export class RateLimiter {
  private buckets = new Map<string, Bucket>();

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
  async acquire(endpoint: string): Promise<void> {
    const bucket = this.getBucket(endpoint);
    while (true) {
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
      await new Promise((r) => setTimeout(r, bucket.refillIntervalMs));
    }
  }
}

export const rateLimiter = new RateLimiter();
