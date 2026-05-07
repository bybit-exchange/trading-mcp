// getTokenHistoricalApr.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenHistoricalApr = {
  name: 'getTokenHistoricalApr',
  description: "Query product's historical APR data.\n\n**Rate Limit:** 50 req/s (IP)\n\nNo authentication required.",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
    range: z.enum(["1", "2", "3"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/token/history-apr", input);
  },
};
