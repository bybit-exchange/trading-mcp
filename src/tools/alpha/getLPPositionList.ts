// getLPPositionList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPPositionList = {
  name: 'getLPPositionList',
  description: "Query the user's liquidity pool positions with real-time valuation.\nReturns position details including staked amount, current value, earned rewards, and APY.\n\nAI agent should call this to show users their LP portfolio or after executing stake/redeem\nto confirm the result.\n\n**Do NOT** use this endpoint to get pool information — use `getLPPoolInfo` instead.\n\nAgent hint: Use this endpoint to show users their LP positions and portfolio performance.\nAfter executeLPStake or executeLPRedeem, poll this to confirm the position was updated.\nDo NOT use this to get pool details — use getLPPoolInfo for that.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/position-list", input);
  },
};
