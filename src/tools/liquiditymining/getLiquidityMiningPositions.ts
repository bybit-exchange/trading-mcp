// getLiquidityMiningPositions.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLiquidityMiningPositions = {
  name: 'getLiquidityMiningPositions',
  description: "Query active Liquidity Mining positions for the current user.\nAmount fields (`quoteAmount`, `baseAmount`, etc.) are computed dynamically based on real-time prices.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    productId: z.string().optional(),
    baseCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/liquidity-mining/position", input);
  },
};
