// getAdvanceEarnProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAdvanceEarnProduct = {
  name: 'getAdvanceEarnProduct',
  description: "Query available Advance Earn product listings.\nNo authentication required.\n\n**Rate Limit:** 50 req/s (IP)",
  inputSchema: z.object({
    category: z.enum(["DualAssets", "SmartLeverage", "DoubleWin", "DiscountBuy"]),
    coin: z.string().optional(),
    duration: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/advance/product", input);
  },
};
