// getLaunchpoolUserCurrentStaking.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLaunchpoolUserCurrentStaking = {
  name: 'getLaunchpoolUserCurrentStaking',
  description: "Returns the authenticated user's active Launchpool staking positions,\nincluding a USD-denominated portfolio summary and per-position details\n(staked amount, accumulated reward, auto-redeem date).\n\nAI agent can use this to show a user their current staking portfolio at a glance.\n\nAgent hint: Use this endpoint to show a user their current staking overview.\ntotalInvestmentUsd, totalEarningsUsd, and todayEarningsUsd give a quick\nportfolio snapshot. The list gives per-position details including the\nauto-redeem date.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-x/launchpool/user/current-staking", input);
  },
};
