// getOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOrderHistory = {
  name: 'getOrderHistory',
  description: "Query order history. As order creation/cancellation is **asynchronous**, the data returned from this endpoint may delay. To get real-time order information, you could query the open order endpoint or rely on the websocket stream (recommended).\n- Unified account covers: Spot / USDT perpetual / USDC contract / Inverse contract / Options\n- Classic account covers: Spot / USDT perpetual / Inverse contract\n\n**Rules:**\n- **Last 7 days**: supports querying all closed statuses except \"Cancelled\", \"Rejected\", \"Deactivated\"\n- **Last 24 hours**: supports querying \"Cancelled\", \"Rejected\", \"Deactivated\" orders\n- **Beyond 7 days**: only supports querying orders with final filled statuses (Filled, PartiallyFilledCanceled)\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 7 days by default\n- Only `startTime` provided: returns from startTime to startTime + 7 days\n- Only `endTime` provided: returns from endTime - 7 days to endTime\n- Both provided: endTime - startTime must be ≤ 7 days\n\nAgent hint: TradFi: use category=spot for xStock order history, category=linear for equity/commodity perpetual order history.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderFilter: z.enum(["Order", "StopOrder", "tpslOrder", "OcoOrder", "BidirectionalTpslOrder"]).default("Order"),
    orderStatus: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/history", input);
  },
};
