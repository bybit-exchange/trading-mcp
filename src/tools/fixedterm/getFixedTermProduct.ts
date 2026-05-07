// getFixedTermProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFixedTermProduct = {
  name: 'getFixedTermProduct',
  description: "Query fixed term product information, including tiered APY, min/max stake amount, product status, etc.\nNo authentication required.\n\n**Rate limit:** 50 req/s (IP)",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/fixed-term/product", input);
  },
};
