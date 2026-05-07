// getFixedTermPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFixedTermPosition = {
  name: 'getFixedTermPosition',
  description: "Query current fixed term position information.\n\n**Rate limit:** 10 req/s (UID)",
  inputSchema: z.object({
    productId: z.string().optional(),
    category: z.enum(["FixedTermSaving", "FundPool", "FundPoolPremium"]).optional(),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/fixed-term/position", input);
  },
};
