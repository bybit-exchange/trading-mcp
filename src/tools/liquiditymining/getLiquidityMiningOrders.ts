// getLiquidityMiningOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLiquidityMiningOrders = {
  name: 'getLiquidityMiningOrders',
  description: "Query Liquidity Mining order history with cursor-based pagination.\nThis endpoint also serves as the single-order detail query.\n\n- Pass `orderId` or `orderLinkId` alone to retrieve a single order (other filters are ignored; `Pending` orders are visible)\n- Without `orderId`/`orderLinkId`, returns a paginated list filtered by the other parameters (`Pending` orders are excluded; `Success`, `Processing`, and `Fail` orders are all included)\n- Default `status` filter (when omitted): returns `Success`, `Processing`, and `Fail` orders\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    productId: z.string().optional(),
    orderType: z.enum(["AddLiquidity", "RemoveLiquidity", "Reinvest", "AddMargin"]).optional(),
    status: z.enum(["Success", "Processing"]).optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/liquidity-mining/order", input);
  },
};
