// wsOrderAmend.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';

export const wsOrderAmend = {
  name: 'wsOrderAmend',
  description: "Amend an unfilled or partially filled order via WebSocket. Either orderId or orderLinkId is required. Pass only the fields to change; omit unchanged fields. Response is acknowledgment only.\n\nIMPORTANT: This tool places/modifies real orders via WebSocket. Confirm symbol, side, quantity, and price with the user before calling. Response is an acknowledgment only; use subscribeOrder or REST endpoints to verify actual order status.",
  inputSchema: z.object({
  category: z.enum(['spot', 'linear', 'inverse', 'option']).describe("Product type."),
  symbol: z.string().describe("Trading pair or contract name."),
  orderId: z.string().describe("System-generated order ID. Either orderId or orderLinkId is required.").optional(),
  orderLinkId: z.string().max(36).describe("User-defined order ID.").optional(),
  orderIv: z.string().describe("Implied volatility (option only).").optional(),
  triggerPrice: z.string().describe("Modified trigger price for conditional orders.").optional(),
  qty: z.string().describe("Modified order quantity. Omit if unchanged.").optional(),
  price: z.string().describe("Modified order price. Omit if unchanged.").optional(),
  tpslMode: z.enum(['Full', 'Partial']).describe("TP/SL mode.").optional(),
  takeProfit: z.string().describe("Modified take-profit price. Pass \"0\" to cancel existing TP.").optional(),
  stopLoss: z.string().describe("Modified stop-loss price. Pass \"0\" to cancel existing SL.").optional(),
  tpTriggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Take-profit trigger price type.").optional(),
  slTriggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Stop-loss trigger price type.").optional(),
  triggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Trigger price type for conditional orders.").optional(),
  tpLimitPrice: z.string().describe("Limit price after take-profit triggers (Partial mode).").optional(),
  slLimitPrice: z.string().describe("Limit price after stop-loss triggers (Partial mode).").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return wsClient.tradeRequest({ op: 'order.amend', args: [input] });
  },
};
