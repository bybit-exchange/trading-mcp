// wsOrderCancel.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';

export const wsOrderCancel = {
  name: 'wsOrderCancel',
  description: "Cancel a single open order via WebSocket. Either orderId or orderLinkId must be provided. Response is acknowledgment only.\n\nIMPORTANT: This tool places/modifies real orders via WebSocket. Confirm symbol, side, quantity, and price with the user before calling. Response is an acknowledgment only; use subscribeOrder or REST endpoints to verify actual order status.",
  inputSchema: z.object({
  category: z.enum(['spot', 'linear', 'inverse', 'option']).describe("Product type."),
  symbol: z.string().describe("Trading pair or contract name."),
  orderId: z.string().describe("System-generated order ID. Either orderId or orderLinkId is required.").optional(),
  orderLinkId: z.string().max(36).describe("User-defined order ID.").optional(),
  orderFilter: z.enum(['Order', 'tpslOrder', 'StopOrder']).describe("Order type filter (spot only). 'Order'=normal, 'tpslOrder'=TP/SL, 'StopOrder'=conditional.").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return wsClient.tradeRequest({ op: 'order.cancel', args: [input] });
  },
};
