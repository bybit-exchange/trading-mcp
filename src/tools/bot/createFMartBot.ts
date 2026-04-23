// createFMartBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createFMartBot = {
  name: 'createFMartBot',
  description: "Creates a futures Martingale trading bot. The bot opens an initial position\nand adds to it when price drops (long mode) or rises (short mode) by the\nconfigured price_float_percent. Each add scales position by add_position_percent.\n\nKey parameters include symbol, mode (long/short), leverage, price trigger\npercentage, add position ratio, max add count, initial margin, and round\ntake-profit percentage. Optional parameters include stop-loss, entry price\ntrigger, auto-cycle toggle, and trailing stop.\n\nBefore calling this endpoint, use /v5/fmartingalebot/getlimit\nto validate parameter ranges.\n\nRate limit: 10 requests per second per UID.\nSubject to compliance wall, GEO IP check, and KYC verification.\n\nAgent hint: Always call getFMartLimit first to verify parameters are in range.\nThe martingale_mode determines direction: 1=Long (buys dip), 2=Short (sells rally).\nauto_cycle_toggle=1 means the bot restarts after each round TP.\nThe bot_id in a successful response is needed for getFMartDetail and closeFMartBot.",
  inputSchema: z.object({
    symbol: z.string(),
    martingale_mode: z.string(),
    leverage: z.string(),
    price_float_percent: z.string(),
    add_position_percent: z.string(),
    add_position_num: z.number().int(),
    init_margin: z.string(),
    round_tp_percent: z.string(),
    auto_cycle_toggle: z.string().optional(),
    sl_percent: z.string().optional(),
    entry_price: z.string().optional(),
    source: z.string().optional(),
    followed_bot_id: z.number().int().default(0).optional(),
    block_source: z.string().optional(),
    create_type: z.string().optional(),
    init_bonus: z.string().optional(),
    channel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fmartingalebot/create", input);
  },
};
