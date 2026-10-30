// getLiquidityMiningProducts.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getLiquidityMiningProducts = {
  name: 'getLiquidityMiningProducts',
  description: "Query available Liquidity Mining product listings.\nNo authentication required (guest access supported).\n\n**Rate Limit:** 50 req/s (IP)",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
    quoteCoin: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.get("/v5/earn/liquidity-mining/product", input, context);
  },
};
