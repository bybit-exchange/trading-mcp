// getTokenDailyYield.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenDailyYield = {
  name: 'getTokenDailyYield',
  description: "Query user's daily yield distribution records.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(100).default(5).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/token/yield", input);
  },
};
