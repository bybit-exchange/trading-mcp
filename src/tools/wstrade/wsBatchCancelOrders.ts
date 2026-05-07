// wsBatchCancelOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';

const wsBatchCancelOrdersItem = z.object({
  symbol: z.string().describe("Trading pair or contract name."),
  orderId: z.string().describe("System-generated order ID. Either `orderId` or `orderLinkId` is required.").optional(),
  orderLinkId: z.string().describe("User-defined order ID. Either `orderId` or `orderLinkId` is required.").optional(),
  orderFilter: z.enum(["Order", "tpslOrder", "StopOrder"]).describe("Order type filter (spot only). `Order`=normal, `tpslOrder`=TP/SL, `StopOrder`=conditional").optional(),
});

export const wsBatchCancelOrders = {
  name: 'wsBatchCancelOrders',
  description: "Batch cancel multiple existing unfilled or partially filled orders in a single WebSocket request on Bybit V5 unified account.\n\nIMPORTANT: This tool places/modifies real orders via WebSocket. Confirm symbol, side, quantity, and price with the user before calling. Response is an acknowledgment only; use subscribeOrder or REST endpoints to verify actual order status.",
  inputSchema: z.object({
  category: z.enum(["spot", "linear", "inverse", "option"]).describe("Product type."),
  request: z.array(wsBatchCancelOrdersItem).min(1).max(20).describe("Array of order cancel objects. Max 20 for futures/options, 10 for spot."),
  }),
  handler: async (input: Record<string, unknown>) => {
    return wsClient.tradeRequest({ op: 'order.cancel-batch', args: [input] });
  },
};
