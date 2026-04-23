// getOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOrderHistory = {
  name: 'getOrderHistory',
  description: "Query historical order records. Supports up to 2 years of data.\n\n- Max time span between `startTime` and `endTime` is 7 days\n- If both time params omitted, returns last 7 days\n- Pagination via `cursor` token\n- Use `orderFilter` to target specific order types\n- Use `orderStatus` to filter by terminal status\n\nAgent hint: Use this endpoint to query completed/cancelled/expired orders. For currently active orders, use getOpenOrders instead.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderFilter: z.enum(["Order", "StopOrder", "tpslOrder", "OcoOrder", "BidirectionalTpslOrder"]).optional(),
    orderStatus: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/history", input);
  },
};
