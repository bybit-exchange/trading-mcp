// getLaunchpoolProjectList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLaunchpoolProjectList = {
  name: 'getLaunchpoolProjectList',
  description: "Returns a paginated list of Launchpool activities filtered by status.\nOptionally narrow results by activity coin or project code.\nEach item includes a `pools` array with APR and staking totals per pool.\n\nAgent hint: Use this endpoint to browse Launchpool activities by status. Filter by\nactivityCoin to find pools for a specific coin. Each project has multiple\npools with different stakeCoin options. Use cursor + limit for pagination.",
  inputSchema: z.object({
    status: z.number().int().min(0).max(2),
    activityCoin: z.string().optional(),
    projectId: z.string().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(10).default(10).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spot-x/launchpool/project/list", input);
  },
};
