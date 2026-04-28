// preCheckOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const preCheckOrder = {
  name: 'preCheckOrder',
  description: "Validate an order before placing it to check margin requirements.\n\n- Futures and options only (linear, option categories)\n- Returns pre/post margin rates (IMR and MMR) in E4 format\n- Request parameters are the same as Create Order\n- Useful for checking if an order would be rejected due to insufficient margin\n- Does not actually place the order\n\nAgent hint: Use this endpoint to validate margin requirements before placing an order. Does not actually create an order. Only works for futures and options.\nTradFi: use to pre-validate margin for equity perpetuals and commodity perpetuals (category=linear) before placing.",
  inputSchema: z.object({
    category: z.enum(["linear", "option"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
    orderType: z.enum(["Market", "Limit"]),
    qty: z.string(),
    price: z.string().optional(),
    isLeverage: z.enum(["0", "1"]).optional(),
    timeInForce: z.enum(["GTC", "IOC", "FOK", "PostOnly"]).optional(),
    positionIdx: z.enum(["0", "1", "2"]).optional(),
    orderLinkId: z.string().optional(),
    takeProfit: z.string().optional(),
    stopLoss: z.string().optional(),
    tpTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    slTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    reduceOnly: z.boolean().optional(),
    tpslMode: z.enum(["Full", "Partial"]).optional(),
    tpLimitPrice: z.string().optional(),
    slLimitPrice: z.string().optional(),
    tpOrderType: z.enum(["Market", "Limit"]).optional(),
    slOrderType: z.enum(["Market", "Limit"]).optional(),
    orderIv: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/pre-check", input);
  },
};
