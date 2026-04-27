// getComboLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getComboLimit = {
  name: 'getComboLimit',
  description: "Validates the input parameters for creating a futures combo bot and returns\nthe allowable ranges for each parameter (initial margin, leverage, rebalancing\nthreshold, time interval, TP/SL percentages, trailing stop).\n\nUse this endpoint before calling /v5/fcombobot/create to\nensure parameters are within valid bounds. The response includes a check_code\nthat indicates which parameter is out of range if validation fails.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Call this endpoint first to get valid parameter ranges before creating a combo bot.\nIf check_code is non-zero, the specific validation error is indicated by the code value.\nThe response ranges (init_margin, leverage, sl_percent, tp_percent, etc.) tell you\nthe exact min/max values allowed for each parameter.",
  inputSchema: z.object({
    leverage: z.string(),
    init_margin: z.string(),
    adjust_position_mode: z.enum(["0", "1", "2", "3", "4", "5", "6"]),
    adjust_position_percent: z.string().optional(),
    adjust_position_time_interval: z.number().int().optional(),
    symbol_settings: z.array(z.object({ symbol: z.string().optional(), base_token: z.string().optional(), quote_token: z.string().optional(), target_position_percent: z.string().optional(), side: z.enum(["0", "1", "2"]).optional(), symbol_id: z.number().int().optional() })),
    sl_percent: z.string().optional(),
    tp_percent: z.string().optional(),
    need_to_slippage: z.boolean().optional(),
    app_name: z.string().optional(),
    trailing_stop_percent: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fcombobot/getlimit", input);
  },
};
