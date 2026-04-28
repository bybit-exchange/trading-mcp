// getOpenOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOpenOrders = {
  name: 'getOpenOrders',
  description: "Query real-time unfilled or partially filled orders.\n\n- For linear/inverse: at least one of `symbol`, `baseCoin`, or `settleCoin` is required\n- Use `openOnly=1` to include recently terminated orders (up to 500 per category)\n- Supports pagination via `cursor`\n- May experience latency during extreme market volatility\n\nAgent hint: Use this endpoint to list currently active (open) orders. For historical orders, use getOrderHistory instead.\nTradFi: use category=spot to query open xStock orders, category=linear for equity/commodity perpetual orders.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    openOnly: z.enum(["0", "1"]).default("0").optional(),
    orderFilter: z.enum(["Order", "StopOrder", "tpslOrder", "OcoOrder", "BidirectionalTpslOrder"]).optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/realtime", input);
  },
};
