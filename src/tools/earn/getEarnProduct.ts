// getEarnProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getEarnProduct = {
  name: 'getEarnProduct',
  description: "Query earn product information, including estimated APR, min/max stake amount, product status, etc.\nNo authentication required.",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/product", input);
  },
};
