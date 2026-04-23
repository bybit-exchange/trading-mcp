// getFMartLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFMartLimit = {
  name: 'getFMartLimit',
  description: "Validates the input parameters for creating a futures Martingale bot and\nreturns the allowable ranges for each parameter (price float percentage,\nadd position ratio, add position count, initial margin, round TP percentage,\nstop-loss, entry price, leverage).\n\nUse this endpoint before calling /v5/fmartingalebot/create\nto ensure parameters are within valid bounds. The response includes a check_code\nthat indicates which parameter is out of range if validation fails.\n\nRate limit: 100 requests per second per IP.\n\nAgent hint: Call this endpoint first to get valid parameter ranges before creating a\nMartingale bot. If check_code is non-zero, the specific validation error\nis indicated by the code value. The response ranges tell you the exact\nmin/max values allowed for each parameter.",
  inputSchema: z.object({
    symbol: z.string(),
    martingale_mode: z.string(),
    leverage: z.string(),
    price_float_percent: z.string().optional(),
    add_position_percent: z.string().optional(),
    add_position_num: z.number().int().optional(),
    init_margin: z.string().optional(),
    round_tp_percent: z.string().optional(),
    sl_percent: z.string().optional(),
    entry_price: z.string().optional(),
    need_to_slippage: z.boolean().optional(),
    app_name: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fmartingalebot/getlimit", input);
  },
};
