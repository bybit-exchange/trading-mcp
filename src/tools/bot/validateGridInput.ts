// validateGridInput.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const validateGridInput = {
  name: 'validateGridInput',
  description: "Validates the input parameters for creating a spot grid bot, returning\nacceptable ranges for each parameter (investment amount, grid count,\nprice bounds, stop-loss, take-profit, etc.) and a check code indicating\nany validation errors.\n\nUse this endpoint before calling createGridBot to ensure parameters are\nwithin valid ranges. The response includes min/max ranges for every\nconfigurable field, plus a check_code enum that pinpoints the exact\nvalidation issue (if any).\n\nDoes not require authentication (guest mode, rate limit: 100 qps per IP).\n\nAgent hint: Always call this before createGridBot to pre-validate parameters.\nThe check_code field in the response tells you exactly what is wrong.\nA check_code of 0 means all parameters are valid.",
  inputSchema: z.object({
    symbol: z.string(),
    cell_number: z.number().int().min(2),
    min_price: z.string(),
    max_price: z.string(),
    total_investment: z.string(),
    stop_loss: z.string().optional(),
    take_profit: z.string().optional(),
    entry_price: z.string().optional(),
    base_investment: z.string().optional(),
    quote_investment: z.string().optional(),
    invest_mode: z.enum(["0", "1", "2"]).optional(),
    ts_percent: z.string().optional(),
    enable_trailing: z.boolean().default(false).optional(),
    limit_up_price: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/grid/validate-input", input);
  },
};
