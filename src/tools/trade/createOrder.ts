// createOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createOrder = {
  name: 'createOrder',
  description: "Place a new order on the Bybit exchange.\n\n- **Spot:** supports normal orders, TP/SL orders, and conditional (stop) orders via `orderFilter`\n- **Linear/Inverse:** supports one-way and hedge mode via `positionIdx`\n- **Options:** `orderLinkId` is required; implied volatility ordering via `orderIv`\n\nResponse is an acknowledgment only. Use WebSocket order stream to confirm actual order status.\n\nAgent hint: Use this endpoint to place a new buy or sell order for spot, linear, inverse, or option products.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string(),
    isLeverage: z.enum(["0", "1"]).default("0").optional(),
    side: z.enum(["Buy", "Sell"]),
    orderType: z.enum(["Market", "Limit"]),
    qty: z.string(),
    marketUnit: z.enum(["baseCoin", "quoteCoin"]).optional(),
    slippageToleranceType: z.enum(["TickSize", "Percent"]).optional(),
    slippageTolerance: z.string().optional(),
    price: z.string().optional(),
    triggerDirection: z.enum(["1", "2"]).optional(),
    orderFilter: z.enum(["Order", "tpslOrder", "StopOrder"]).default("Order").optional(),
    triggerPrice: z.string().optional(),
    triggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    orderIv: z.string().optional(),
    timeInForce: z.enum(["GTC", "IOC", "FOK", "PostOnly", "RPI"]).default("GTC").optional(),
    positionIdx: z.enum(["0", "1", "2"]).optional(),
    orderLinkId: z.string().optional(),
    takeProfit: z.string().optional(),
    stopLoss: z.string().optional(),
    tpTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    slTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    reduceOnly: z.boolean().optional(),
    closeOnTrigger: z.boolean().optional(),
    smpType: z.string().optional(),
    mmp: z.boolean().optional(),
    tpslMode: z.enum(["Full", "Partial"]).optional(),
    tpLimitPrice: z.string().optional(),
    slLimitPrice: z.string().optional(),
    tpOrderType: z.enum(["Market", "Limit"]).optional(),
    slOrderType: z.enum(["Market", "Limit"]).optional(),
    bboSideType: z.enum(["Queue", "Counterparty"]).optional(),
    bboLevel: z.enum(["1", "2", "3", "4", "5"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/create", input);
  },
};
