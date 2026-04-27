// getPositionInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPositionInfo = {
  name: 'getPositionInfo',
  description: "Query real-time position data such as PnL, leverage, liquidation price, and margin info.\nSupports linear (USDT/USDC perpetual and futures), inverse (perpetual and futures), and option contracts.\n\nAgent hint: Use this endpoint to check current open positions. For linear/inverse, specify category and either symbol or settleCoin.\nFor options, use baseCoin to filter by underlying asset. Response includes leverage, liquidation price, unrealized PnL, and margin details.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    limit: z.number().int().min(1).max(200).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/list", input);
  },
};
