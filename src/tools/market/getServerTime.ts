// getServerTime.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getServerTime = {
  name: 'getServerTime',
  description: "Query Bybit server time, returned in both seconds and nanoseconds precision.\n\nUse this endpoint when you need to:\n- Synchronize your local clock with Bybit server time before constructing authenticated requests\n- Verify timestamp alignment to avoid request timestamp errors (error code `10002`)\n\nReturns `timeSecond` (Unix timestamp in seconds) and `timeNano` (nanosecond precision).\n\n**Do not use** this endpoint for market data — use `getTickers` or `getMarketKline` instead.\n\n**Notes:**\n- During periods of extreme market volatility, this endpoint may experience increased latency\n- No authentication required\n\nAgent hint: Use this endpoint to obtain the current Bybit server time for clock synchronization.\nCall this before placing orders if you suspect your local clock is out of sync with the server.\nThis is a utility endpoint — do not use it for market data; use getTickers or getMarketKline instead.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/time", input);
  },
};
