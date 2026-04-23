// closeFGridBot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const closeFGridBot = {
  name: 'closeFGridBot',
  description: "Closes (stops) a running futures grid trading bot. The bot will cancel\nall pending grid orders and close positions.\n\nThe bot_id can be obtained from the createFGridBot response or from\ngetFGridDetail. Only bots in a running state can be closed.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this to stop a running grid bot. The bot_id is required and can be\nfound in the createFGridBot response. After closing, use getFGridDetail\nto check the final PnL and close reason.",
  inputSchema: z.object({
    bot_id: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fgridbot/close", input);
  },
};
