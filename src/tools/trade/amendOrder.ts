// amendOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const amendOrder = {
  name: 'amendOrder',
  description: "Modify an existing open order. You can update price, quantity, trigger price, take-profit, and stop-loss parameters.\n\n- Either `orderId` or `orderLinkId` must be provided to identify the target order\n- Only unfilled or partially filled orders can be amended\n- For options, `orderIv` can be amended (pass actual value, e.g., 0.1 for 10%)\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to modify price, quantity, or TP/SL of an existing open order.\nTradFi: use category=spot for xStock tokens, category=linear for equity/commodity perpetuals.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderIv: z.string().optional(),
    triggerPrice: z.string().optional(),
    qty: z.string().optional(),
    price: z.string().optional(),
    tpslMode: z.enum(["Full", "Partial"]).optional(),
    takeProfit: z.string().optional(),
    stopLoss: z.string().optional(),
    tpTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    slTriggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    triggerBy: z.enum(["LastPrice", "IndexPrice", "MarkPrice"]).optional(),
    tpLimitPrice: z.string().optional(),
    slLimitPrice: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/amend", input);
  },
};
