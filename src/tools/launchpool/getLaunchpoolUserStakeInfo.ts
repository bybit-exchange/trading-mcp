// getLaunchpoolUserStakeInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getLaunchpoolUserStakeInfo = {
  name: 'getLaunchpoolUserStakeInfo',
  description: "Returns the authenticated user's staking position and the pool's staking\nconfiguration, including APRs, amount limits, eligibility flags, and\nuser-right selections. The user ID is read from the gateway-injected header.\n\nAgent hint: Use this endpoint when a user needs staking details for a known pool.\nPass its stakePoolCode to inspect the user's position and the pool's\nstaking limits and APRs.",
  inputSchema: z.object({
    stakePoolCode: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/spot-x/launchpool/user/stake-info", input, context);
  },
};
