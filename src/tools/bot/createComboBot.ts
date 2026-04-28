// createComboBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createComboBot = {
  name: 'createComboBot',
  description: "Creates a futures combo trading bot that manages a portfolio of multiple\nfutures symbols. The bot automatically rebalances positions based on the\nconfigured trigger mode (time-based, percentage-based, or both).\n\nRequired parameters include leverage, initial margin, rebalancing mode,\nand at least one symbol setting with target position percentage and side.\n\nBefore calling this endpoint, use /v5/fcombobot/getlimit to\nvalidate parameter ranges. The response bot_id is needed for subsequent\noperations like getComboDetail or closeComboBot.\n\nRate limit: 10 requests per second per UID.\nSubject to compliance wall, GEO IP check, and KYC verification.\n\nAgent hint: Always call getComboLimit first to verify parameters are in range.\nThe symbol_settings array must contain at least one entry with symbol,\ntarget_position_percent, and side. The bot_id in a successful response\nis needed for getComboDetail and closeComboBot.",
  inputSchema: z.object({
    leverage: z.string(),
    init_margin: z.string(),
    adjust_position_mode: z.enum(["0", "1", "2", "3", "4", "5", "6"]),
    adjust_position_percent: z.string().optional(),
    adjust_position_time_interval: z.number().int().optional(),
    symbol_settings: z.array(z.object({ symbol: z.string().optional(), base_token: z.string().optional(), quote_token: z.string().optional(), target_position_percent: z.string().optional(), side: z.enum(["0", "1", "2"]).optional(), symbol_id: z.number().int().optional() })),
    sl_percent: z.string().optional(),
    tp_percent: z.string().optional(),
    source: z.enum(["0", "1", "2"]).optional(),
    block_source: z.enum(["0", "1", "2", "3", "4"]).optional(),
    create_type: z.enum(["0", "1", "2", "3"]).optional(),
    followed_bot_id: z.number().int().default(0).optional(),
    init_bonus: z.string().optional(),
    trailing_stop_percent: z.string().optional(),
    channel: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fcombobot/create", input);
  },
};
