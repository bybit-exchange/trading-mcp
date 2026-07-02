// getPredictionGroupStageDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionGroupStageDetail = {
  name: 'getPredictionGroupStageDetail',
  description: "Query detailed standings and match results for a specific tournament stage.\nReturns group tables with team statistics for group stages,\nor bracket information for knockout stages.\n\nUse `stageCode` from `getPredictionTimelineStages` to specify which stage to query.\nValid stageCodes: Groups, R32, R16, QF, SF, Final.\n\nAI agent can use this to provide context about team performance\nwhen helping users make informed prediction bets.\n\nAgent hint: Use this to get group standings or knockout results for a specific tournament stage.\nstageCode must be one of: Groups, R32, R16, QF, SF, Final.\nUse this context to help users make informed betting decisions.\neventType=1 is FIFA_2026.",
  inputSchema: z.object({
    eventType: z.enum(["1"]),
    stageCode: z.enum(["Groups", "R32", "R16", "QF", "SF", "Final"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/sports/group-stage-detail", input);
  },
};
