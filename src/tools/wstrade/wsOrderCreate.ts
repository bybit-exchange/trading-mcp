// wsOrderCreate.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';

export const wsOrderCreate = {
  name: 'wsOrderCreate',
  description: "Place a new order via WebSocket on Bybit V5 unified account. Supports Spot, Linear (USDT/USDC perpetual & futures), Inverse, and Option. Response is acknowledgment only; use subscribeOrder or REST to confirm actual status.\n\nIMPORTANT: This tool places/modifies real orders via WebSocket. Confirm symbol, side, quantity, and price with the user before calling. Response is an acknowledgment only; use subscribeOrder or REST endpoints to verify actual order status.",
  inputSchema: z.object({
  category: z.enum(['spot', 'linear', 'inverse', 'option']).describe("Product type."),
  symbol: z.string().describe("Trading pair or contract name."),
  side: z.enum(['Buy', 'Sell']).describe("Order direction."),
  orderType: z.enum(['Market', 'Limit']).describe("Order type."),
  qty: z.string().describe("Order quantity (positive number as string)."),
  isLeverage: z.literal(0).or(z.literal(1)).describe("Whether to borrow (spot margin). 0=spot trading, 1=margin trading.").optional(),
  marketUnit: z.enum(['baseCoin', 'quoteCoin']).describe("Unit for spot market order quantity.").optional(),
  price: z.string().describe("Order price. Required for limit orders; ignored for market orders.").optional(),
  triggerDirection: z.literal(1).or(z.literal(2)).describe("Conditional order trigger direction. 1=rise, 2=fall.").optional(),
  orderFilter: z.enum(['Order', 'tpslOrder', 'StopOrder']).describe("Order type filter (spot only). 'Order'=normal, 'tpslOrder'=TP/SL, 'StopOrder'=conditional.").optional(),
  triggerPrice: z.string().describe("Trigger price for conditional or TP/SL orders.").optional(),
  triggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Price type used to trigger conditional orders.").optional(),
  orderIv: z.string().describe("Implied volatility for option orders, e.g. \"0.1\" = 10%.").optional(),
  timeInForce: z.enum(['GTC', 'IOC', 'FOK', 'PostOnly']).describe("Time-in-force. 'GTC'=Good Till Cancel, 'IOC'=Immediate or Cancel, 'FOK'=Fill or Kill, 'PostOnly'=maker-only.").optional(),
  positionIdx: z.literal(0).or(z.literal(1)).or(z.literal(2)).describe("Position index for hedge mode. 0=one-way, 1=buy-side, 2=sell-side.").optional(),
  orderLinkId: z.string().max(36).describe("User-defined order ID.").optional(),
  takeProfit: z.string().describe("Take-profit price.").optional(),
  stopLoss: z.string().describe("Stop-loss price.").optional(),
  tpTriggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Price type to trigger take-profit.").optional(),
  slTriggerBy: z.enum(['LastPrice', 'IndexPrice', 'MarkPrice']).describe("Price type to trigger stop-loss.").optional(),
  reduceOnly: z.boolean().describe("Reduce-only flag. Valid for futures and options.").optional(),
  closeOnTrigger: z.boolean().describe("Close-on-trigger flag. Valid for linear/inverse futures.").optional(),
  smpType: z.string().describe("Self-match prevention execution type.").optional(),
  mmp: z.boolean().describe("Market maker protection flag. Valid for options only.").optional(),
  tpslMode: z.enum(['Full', 'Partial']).describe("TP/SL mode. 'Full'=entire position, 'Partial'=partial position.").optional(),
  tpLimitPrice: z.string().describe("Limit price when take-profit is triggered (Partial mode).").optional(),
  slLimitPrice: z.string().describe("Limit price when stop-loss is triggered (Partial mode).").optional(),
  tpOrderType: z.enum(['Market', 'Limit']).describe("Order type for take-profit.").optional(),
  slOrderType: z.enum(['Market', 'Limit']).describe("Order type for stop-loss.").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return wsClient.tradeRequest({ op: 'order.create', args: [input] });
  },
};
