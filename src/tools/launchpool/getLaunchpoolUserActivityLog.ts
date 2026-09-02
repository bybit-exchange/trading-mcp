// getLaunchpoolUserActivityLog.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLaunchpoolUserActivityLog = {
  name: 'getLaunchpoolUserActivityLog',
  description: "Returns the authenticated user's Launchpool staking operation history,\npaginated by page number. Filter by coin, operation type, record status,\nand time range.\n\nAI agent can use this to show a user their staking transaction history\nor investigate specific operation types such as pledges or redemptions.\n\nAgent hint: Use this endpoint to retrieve a user's staking operation history.\nFilter by type to focus on a specific operation (e.g. type=0 for pledges,\ntype=1 for manual redemptions, type=2 for interest credits).\nstartTime and endTime must be provided together as 13-digit ms timestamps.",
  inputSchema: z.object({
    stakeCoin: z.string().optional(),
    type: z.number().int().min(0).max(10).optional(),
    status: z.number().int().min(0).max(2).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    pageSize: z.number().int().min(1).max(10).default(10),
    current: z.number().int().min(1).max(100).default(1),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-x/launchpool/user/activity-log", input);
  },
};
