// createFGridBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createFGridBot = {
  name: 'createFGridBot',
  description: "Creates a single futures grid trading bot. The bot will automatically\nplace grid orders within the specified price range.\n\nRequired parameters include symbol, grid_mode, price range, grid count,\nleverage, grid type, and initial investment. Optional parameters include\nTP/SL settings, entry price trigger, and trailing stop.\n\nBefore calling this endpoint, use /v5/fgridbot/validate to\nvalidate parameter ranges. The response check_code indicates specific\nvalidation errors if the creation fails.\n\nRate limit: 10 requests per second per UID.\nSubject to compliance wall and KYC verification.\n\nAgent hint: Always call validateFGridInput first to verify parameters are in range.\nIf status_code is non-zero, check the check_code for the specific error.\nThe bot_id in a successful response is needed for subsequent operations\nlike getFGridDetail or closeFGridBot.",
  inputSchema: z.object({
    symbol: z.string(),
    grid_mode: z.string(),
    min_price: z.string(),
    max_price: z.string(),
    cell_number: z.number().int(),
    leverage: z.string(),
    grid_type: z.string(),
    total_investment: z.string(),
    take_profit_per: z.string().optional(),
    stop_loss_per: z.string().optional(),
    entry_price: z.string().optional(),
    source: z.string().optional(),
    followed_grid_id: z.number().int().default(0).optional(),
    toolsDiscoveryParameter: z.string().optional(),
    stop_loss_price: z.string().optional(),
    take_profit_price: z.string().optional(),
    tp_sl_type: z.string().optional(),
    block_source: z.string().optional(),
    create_type: z.string().optional(),
    init_bonus: z.string().optional(),
    business_remark: z.string().optional(),
    trailing_stop_per: z.string().optional(),
    move_up_price: z.string().optional(),
    move_down_price: z.string().optional(),
    channel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fgridbot/create", input);
  },
};
