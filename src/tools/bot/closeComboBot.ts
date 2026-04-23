// closeComboBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const closeComboBot = {
  name: 'closeComboBot',
  description: "Closes (stops) a running futures combo trading bot. The bot will cancel\nall pending orders and close all positions across the portfolio.\n\nThe bot_id can be obtained from the createComboBot response or from\ngetComboDetail. Only bots in a running state can be closed.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this to stop a running combo bot. The bot_id is required and can be\nfound in the createComboBot response. The stop_type indicates the reason\nfor closing. After closing, use getComboDetail to check the final PnL\nand close reason.",
  inputSchema: z.object({
    bot_id: z.number().int(),
    stop_type: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fcombobot/close", input);
  },
};
