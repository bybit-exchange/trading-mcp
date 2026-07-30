// getTokenSplashUserActivityParams.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenSplashUserActivityParams = {
  name: 'getTokenSplashUserActivityParams',
  description: "Returns the authenticated user's participation and trade-task progress for\nToken Splash activities that are still in the reward-distribution window.\n\nOnly activities where the user has registered AND that have not yet reached\ntheir announcement time are included. Deposit-only task types are excluded.\n\nAI agent can use this to show a user their current trading progress and\nestimated reward across active Token Splash activities.\n\nAgent hint: Use this endpoint to fetch the current user's trade progress in Token Splash\nactivities. Filter by projectId or activityCoin to narrow results.\nThe tradeTask object shows how much has been traded, what is required,\nand the estimated reward so far.",
  inputSchema: z.object({
    projectId: z.string().optional(),
    activityCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-x/token-splash/user/activity-params", input);
  },
};
