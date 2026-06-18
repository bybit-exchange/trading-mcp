// getRwaProductList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRwaProductList = {
  name: 'getRwaProductList',
  description: "Query the list of RWA products, including base APR, bonus APR, NAV, stake limits,\nprecision, and (when authenticated) the user's remaining quota.\n\n**Rate Limit:** 20 req/s (IP)\n\nNo authentication required (the `userQuota` field is only populated when authenticated).",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/rwa/product", input);
  },
};
