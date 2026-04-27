// setTradingStop.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setTradingStop = {
  name: 'setTradingStop',
  description: "Configure trading stop parameters including take profit, stop loss, and trailing stop.\nSupports both full position and partial position TP/SL modes.\n\nAgent hint: Use this to set TP/SL/trailing stop on an open position. Set tpslMode to Full for entire position or Partial for partial.\nIn Partial mode, tpSize and slSize must be equal. Set any value to \"0\" to cancel it.\npositionIdx is required: 0 for one-way mode, 1 for buy hedge, 2 for sell hedge.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    takeProfit: z.string().optional(),
    stopLoss: z.string().optional(),
    trailingStop: z.string().optional(),
    tpTriggerBy: z.enum(["MarkPrice", "IndexPrice", "LastPrice"]).optional(),
    slTriggerBy: z.enum(["MarkPrice", "IndexPrice", "LastPrice"]).optional(),
    activePrice: z.string().optional(),
    tpslMode: z.enum(["Full", "Partial"]),
    tpSize: z.string().optional(),
    slSize: z.string().optional(),
    tpLimitPrice: z.string().optional(),
    slLimitPrice: z.string().optional(),
    tpOrderType: z.enum(["Market", "Limit"]).optional(),
    slOrderType: z.enum(["Market", "Limit"]).optional(),
    positionIdx: z.enum(["0", "1", "2"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/trading-stop", input);
  },
};
