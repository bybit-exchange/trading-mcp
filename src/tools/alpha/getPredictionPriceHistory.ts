// getPredictionPriceHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionPriceHistory = {
  name: 'getPredictionPriceHistory',
  description: "Query historical price data for prediction outcome tokens.\nReturns price time series for chart display.\n\nTwo modes:\n1. By tokenIds: specify up to 20 token IDs directly\n2. By eventId: specify an event to get price history for all its tokens\n\nThe `interval` controls the time range: 1H, 6H, 1D, 1W, 1M, or ALL.\nThe `fidelity` controls how many minutes between data points (0 = auto).\n\nNote: This endpoint has stricter rate limits (2 req/s) due to no caching.\n\nAgent hint: Use this to get price chart history for specific tokens or events.\nUse interval=1D for daily view, interval=1W for weekly trend analysis.\nPrefer querying by tokenIds when you know the specific tokens.\nDo NOT use this for current prices — use getPredictionTokenPrice instead.",
  inputSchema: z.object({
    tokenIds: z.array(z.string()).optional(),
    eventId: z.string().optional(),
    interval: z.enum(["1H", "6H", "1D", "1W", "1M", "ALL"]),
    fidelity: z.number().int().default(0).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/price-history", input);
  },
};
