// batchCreateOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const batchCreateOrders = {
  name: 'batchCreateOrders',
  description: "Place multiple orders in a single API call.\n\n- Max 20 orders per request for futures/options, 10 for spot\n- Each order is validated independently; partial success is possible\n- Check `retExtInfo.list[].code` for per-order status\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to place multiple orders at once. Check retExtInfo.list for per-order success/failure codes.\nTradFi: use category=spot for xStock batch orders, category=linear for equity/commodity perpetuals.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    request: z.array(z.object({ symbol: z.string(), side: z.enum(["Buy", "Sell"]), orderType: z.enum(["Market", "Limit"]), qty: z.string(), price: z.string().optional(), isLeverage: z.enum(["0", "1"]).default("0").optional(), marketUnit: z.enum(["baseCoin", "quoteCoin"]).optional(), timeInForce: z.enum(["GTC", "IOC", "FOK", "PostOnly"]).default("GTC").optional(), triggerDirection: z.enum(["1", "2"]).optional(), orderFilter: z.enum(["Order", "tpslOrder", "StopOrder"]).default("Order").optional(), triggerPrice: z.string().optional(), triggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(), orderIv: z.string().optional(), positionIdx: z.enum(["0", "1", "2"]).optional(), orderLinkId: z.string().optional(), takeProfit: z.string().optional(), stopLoss: z.string().optional(), tpTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(), slTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(), tpslMode: z.enum(["Full", "Partial"]).optional(), tpOrderType: z.enum(["Market", "Limit"]).optional(), slOrderType: z.enum(["Market", "Limit"]).optional(), tpLimitPrice: z.string().optional(), slLimitPrice: z.string().optional(), reduceOnly: z.boolean().optional(), closeOnTrigger: z.boolean().optional(), smpType: z.string().optional(), mmp: z.boolean().optional() })),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/create-batch", input);
  },
};
