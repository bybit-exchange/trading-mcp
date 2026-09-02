// getTokenSplashProjectList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenSplashProjectList = {
  name: 'getTokenSplashProjectList',
  description: "Returns a paginated list of Token Splash activities filtered by status.\nOptionally narrow results by project code or activity coin.\n\nAI agent can use this to help users browse available Token Splash activities\nor look up a specific project by code.\n\nAgent hint: Use this endpoint to list Token Splash activities. Filter by status\n(0=upcoming, 1=ongoing, 2=ended). Pass projectId to look up a specific\nactivity. Use cursor + limit for pagination.",
  inputSchema: z.object({
    status: z.number().int().min(0).max(2),
    projectId: z.string().optional(),
    activityCoin: z.string().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(10).default(10),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spot-x/token-splash/project/list", input);
  },
};
