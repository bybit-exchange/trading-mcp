// cancelAllOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelAllOrders = {
  name: 'cancelAllOrders',
  description: "Cancel all open orders matching the specified criteria.\n\n- For linear/inverse: must provide at least `symbol`, `baseCoin`, or `settleCoin`\n- For options: cancel all option orders without any additional filter\n- For spot: defaults to cancelling all regular orders\n- Use `orderFilter` to target specific order types (normal, TP/SL, stop, OCO)\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to cancel all open orders for a category/symbol at once. For cancelling a single order, use cancelOrder instead.\nTradFi: use category=spot to cancel all xStock orders, category=linear for equity/commodity perpetuals.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    orderFilter: z.enum(["Order", "tpslOrder", "StopOrder", "OcoOrder", "BidirectionalTpslOrder", "OpenOrder"]).optional(),
    stopOrderType: z.enum(["Stop"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/cancel-all", input);
  },
};
