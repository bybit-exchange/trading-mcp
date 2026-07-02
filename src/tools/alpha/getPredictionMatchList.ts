// getPredictionMatchList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionMatchList = {
  name: 'getPredictionMatchList',
  description: "Query all matches for a sports event with their current status and prediction market info.\n\nReturns match details including teams, scheduled time, match status (Live/Upcoming/Ended),\nand associated prediction markets for each match.\n\nAI agent can use this to show the user available matches to bet on,\nand then use the eventId to get detailed market info before trading.\n\nAgent hint: Use this to get all matches for FIFA 2026 (eventType=1).\nEach match has an associated eventId — use it with getPredictionEventDetail to get tokenIds.\nFilter by matchStatus: 1=Live, 2=Upcoming, 3=Ended.\nDo NOT show Ended matches for trading unless the user explicitly asks.",
  inputSchema: z.object({
    eventType: z.enum(["1"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/sports/match-list", input);
  },
};
