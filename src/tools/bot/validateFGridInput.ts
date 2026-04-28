// validateFGridInput.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const validateFGridInput = {
  name: 'validateFGridInput',
  description: "Validates the input parameters for creating a futures grid bot and returns\nthe allowable ranges for each parameter (investment, profit, grid count,\nprice bounds, leverage, TP/SL, etc.).\n\nUse this endpoint before calling /v5/fgridbot/create to ensure\nparameters are within valid bounds. The response includes a check_code that\nindicates which parameter is out of range if validation fails.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Call this endpoint first to get valid parameter ranges before creating a grid bot.\nIf check_code is non-zero, the specific validation error is indicated by the code value.",
  inputSchema: z.object({
    symbol: z.string(),
    cell_number: z.number().int(),
    min_price: z.string(),
    max_price: z.string(),
    leverage: z.string(),
    grid_type: z.enum(["0", "1", "2"]),
    grid_mode: z.enum(["0", "1", "2", "3"]),
    stop_loss_price: z.string().optional(),
    take_profit_price: z.string().optional(),
    tp_sl_type: z.enum(["0", "1", "2", "3", "4"]).optional(),
    entry_price: z.string().optional(),
    stop_loss_per: z.string().optional(),
    take_profit_per: z.string().optional(),
    trailing_stop_per: z.string().optional(),
    init_margin: z.string().optional(),
    move_up_price: z.string().optional(),
    move_down_price: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fgridbot/validate", input);
  },
};
