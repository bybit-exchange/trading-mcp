// getLaunchpoolUserHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLaunchpoolUserHistory = {
  name: 'getLaunchpoolUserHistory',
  description: "Returns the authenticated user's completed Launchpool staking positions,\nsummarising total reward earned per position. Filter by stake coin, reward\ncoin, and staking time range.\n\nAI agent can use this to show a user their past participation and total\nrewards earned across completed Launchpool activities.\n\nAgent hint: Use this endpoint to retrieve a user's historical Launchpool positions.\nEach record represents one completed staking position with total reward earned.\nstartTime/endTime filter by the staking period (not record creation date)\nand must be 13-digit ms timestamps provided together.",
  inputSchema: z.object({
    stakeCoin: z.string().optional(),
    rewardCoin: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    pageSize: z.number().int().min(1).max(10).default(10).optional(),
    current: z.number().int().min(1).max(100).default(1).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-x/launchpool/user/history", input);
  },
};
