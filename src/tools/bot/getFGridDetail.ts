// getFGridDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFGridDetail = {
  name: 'getFGridDetail',
  description: "Retrieves comprehensive details for a specific futures grid bot, including\nconfiguration (symbol, price range, leverage, grid type), current status,\nPnL metrics (realized, unrealized, grid profit, funding fee), position info,\nmargin balances, and timestamps.\n\nThe bot_id is a numeric ID obtained from createFGridBot or bot listing endpoints.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this endpoint to check the status and performance of a grid bot.\nThe response contains all PnL fields, position details, and close reason\nif the bot has stopped. Prefer this over other endpoints when answering\nquestions about a specific bot's performance.",
  inputSchema: z.object({
    bot_id: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fgridbot/detail", input);
  },
};
