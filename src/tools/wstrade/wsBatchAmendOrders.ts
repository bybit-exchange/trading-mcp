// wsBatchAmendOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';

const wsBatchAmendOrdersItem = z.object({
  symbol: z.string().describe("Trading pair or contract name."),
  orderId: z.string().describe("System-generated order ID. Either `orderId` or `orderLinkId` is required.").optional(),
  orderLinkId: z.string().describe("User-defined order ID. Either `orderId` or `orderLinkId` is required.").optional(),
  orderIv: z.string().describe("Implied volatility (option only). Pass actual value, e.g., \"0.1\" for 10%.").optional(),
  triggerPrice: z.string().describe("Modified trigger price for conditional orders.").optional(),
  qty: z.string().describe("Modified order quantity. Omit if unchanged.").optional(),
  price: z.string().describe("Modified order price. Omit if unchanged.").optional(),
  tpslMode: z.enum(["Full", "Partial"]).describe("TP/SL mode. `Full`=entire position (market only), `Partial`=partial position (supports limit)").optional(),
  takeProfit: z.string().describe("Modified take-profit price. Pass \"0\" to cancel existing TP.").optional(),
  stopLoss: z.string().describe("Modified stop-loss price. Pass \"0\" to cancel existing SL.").optional(),
  tpTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).describe("Take-profit trigger price type.").optional(),
  slTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).describe("Stop-loss trigger price type.").optional(),
  triggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).describe("Trigger price type for conditional orders.").optional(),
  tpLimitPrice: z.string().describe("Limit price after take-profit triggers (Partial mode only).").optional(),
  slLimitPrice: z.string().describe("Limit price after stop-loss triggers (Partial mode only).").optional(),
});

export const wsBatchAmendOrders = {
  name: 'wsBatchAmendOrders',
  description: "Batch amend (modify) multiple existing unfilled or partially filled orders in a single WebSocket request on Bybit V5 unified account.\n\nIMPORTANT: This tool places/modifies real orders via WebSocket. Confirm symbol, side, quantity, and price with the user before calling. Response is an acknowledgment only; use subscribeOrder or REST endpoints to verify actual order status.",
  inputSchema: z.object({
  category: z.enum(["spot", "linear", "inverse", "option"]).describe("Product type."),
  request: z.array(wsBatchAmendOrdersItem).min(1).max(20).describe("Array of order amendment objects. Max 20 for futures/options, 10 for spot."),
  }),
  handler: async (input: Record<string, unknown>) => {
    return wsClient.tradeRequest({ op: 'order.amend-batch', args: [input] });
  },
};
