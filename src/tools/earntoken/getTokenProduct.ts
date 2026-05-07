// getTokenProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenProduct = {
  name: 'getTokenProduct',
  description: "Query BYUSDT Token product details, including user's FlexibleSaving balance,\nremaining quota, APR, and other product information.\n\n**Rate Limit:** 20 req/s (IP)\n\nNo authentication required.",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/token/product", input);
  },
};
