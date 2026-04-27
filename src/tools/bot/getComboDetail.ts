// getComboDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getComboDetail = {
  name: 'getComboDetail',
  description: "Retrieves comprehensive details for a specific futures combo bot, including\nconfiguration (symbols, leverage, rebalancing mode), current display status,\nPnL metrics (total PnL, realized, unrealized, funding fee), portfolio position\ninfo, margin balances (total, available, margin balance), and timestamps.\n\nThe bot_id is a numeric ID obtained from createComboBot or bot listing endpoints.\n\nRate limit: 10 requests per second per UID.\n\nAgent hint: Use this endpoint to check the status and performance of a combo bot.\nThe response contains all PnL fields, position details, rebalancing stats,\nand close reason if the bot has stopped. Prefer this over other endpoints\nwhen answering questions about a specific bot's performance.",
  inputSchema: z.object({
    bot_id: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/fcombobot/detail", input);
  },
};
