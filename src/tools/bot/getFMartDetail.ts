// getFMartDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFMartDetail = {
  name: 'getFMartDetail',
  description: "Retrieves comprehensive details for a specific futures Martingale bot, including\nconfiguration (symbol, mode, leverage, price trigger, add position settings),\ncurrent display status, PnL metrics (realized, unrealized, total), position info\n(size, average price, balances), round progress (completed rounds, current round,\ncurrent adds), margin balances, and timestamps.\n\nThe bot_id is a numeric ID obtained from createFMartBot or bot listing endpoints.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this endpoint to check the status and performance of a Martingale bot.\nThe response contains all PnL fields, position details, round progress\n(completed_rounds, current_round, current_added_pos_num), and close reason\nif the bot has stopped. Prefer this over other endpoints when answering\nquestions about a specific bot's performance.",
  inputSchema: z.object({
    bot_id: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/fmartingalebot/detail", input);
  },
};
