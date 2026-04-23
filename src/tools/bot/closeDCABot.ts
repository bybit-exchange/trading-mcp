// closeDCABot.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const closeDCABot = {
  name: 'closeDCABot',
  description: "Closes a running DCA bot. You must specify a close_mode to determine\nhow remaining assets are settled:\n- 1 (DCA_BIT_MODE): settle in BIT\n- 2 (DCA_BASE_MODE): convert all to base tokens\n- 3 (DCA_QUOTE_MODE): convert all to quote token\n\nThe bot must be in a closeable state. Bots that are currently in the\nmiddle of an investment cycle may not be closeable (status_code=503).\n\nRate limit: 3 qps per UID.\n\nAgent hint: Use close_mode=3 (DCA_QUOTE_MODE) if the user wants to convert\neverything back to the quote coin (e.g., USDT).",
  inputSchema: z.object({
    bot_id: z.number().int(),
    close_mode: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/dca/close-bot", input);
  },
};
