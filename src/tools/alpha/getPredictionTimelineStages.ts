// getPredictionTimelineStages.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionTimelineStages = {
  name: 'getPredictionTimelineStages',
  description: "Query the tournament stages timeline for a sports prediction event.\nReturns all stages (Group Stage, Round of 32, Round of 16, Quarter-finals, Semi-finals, Final)\nwith their current status.\n\nAI agent uses this to understand the current tournament phase and navigate\nto the relevant stage for predictions.\n\nAgent hint: Use this to get the tournament stage timeline for FIFA 2026 (eventType=1).\nReturns which stages are Done/Active/Upcoming.\nUse stageCode from here in getPredictionGroupStageDetail to get group standings.",
  inputSchema: z.object({
    eventType: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/alpha/prediction/sports/timeline-stages", input);
  },
};
