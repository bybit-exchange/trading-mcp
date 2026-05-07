// getLiquidityMiningProducts.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLiquidityMiningProducts = {
  name: 'getLiquidityMiningProducts',
  description: "Query available Liquidity Mining product listings.\nNo authentication required (guest access supported).\n\n**Rate Limit:** 50 req/s (IP)",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
    quoteCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/liquidity-mining/product", input);
  },
};
