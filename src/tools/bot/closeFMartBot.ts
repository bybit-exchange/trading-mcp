// closeFMartBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const closeFMartBot = {
  name: 'closeFMartBot',
  description: "Closes (stops) a running futures Martingale trading bot. The bot will\ncancel all pending orders and close the position.\n\nThe bot_id can be obtained from the createFMartBot response or from\ngetFMartDetail. Only bots in a running state can be closed.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this to stop a running Martingale bot. The bot_id is required and\ncan be found in the createFMartBot response. The stop_type indicates\nthe reason for closing. After closing, use getFMartDetail to check the\nfinal PnL and close reason.",
  inputSchema: z.object({
    bot_id: z.number().int(),
    stop_type: z.enum(["F_MART_BOT_STOP_TYPE_STOP_TYPE_UNKNOWN_UNSPECIFIED", "F_MART_BOT_STOP_TYPE_STOP_TYPE_INIT_ERROR", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_USER", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_LIQ", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_SYMBOL_OFFLINE", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_SL", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_SYSTEM", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_USER_BANNED", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_TP_SINGLE_ROUND", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_ORDER_COST", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_REDUCE_ONLY", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_BUST_PRICE", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_NEGATIVE_ARBITRAGE", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_COMPLIANCE", "F_MART_BOT_STOP_TYPE_STOP_TYPE_BY_ADL"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fmartingalebot/close", input);
  },
};
