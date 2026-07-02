// getPredictionSideMarketList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionSideMarketList = {
  name: 'getPredictionSideMarketList',
  description: "Query the list of side/related markets for a specific sports event type.\nSide markets are additional prediction markets related to the main event\n(e.g., top scorer, group winners, golden boot).\n\nAI agent can use this to discover additional trading opportunities beyond\nmatch outcome predictions.\n\nAgent hint: Use this to discover side/auxiliary markets for sports events.\neventType=1 refers to FIFA_2026.\nThese are additional markets beyond match outcomes (e.g., top scorer, most goals).",
  inputSchema: z.object({
    eventType: z.enum(["1"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/side-market-list", input);
  },
};
