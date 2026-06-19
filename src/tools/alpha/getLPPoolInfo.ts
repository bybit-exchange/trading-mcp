// getLPPoolInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPPoolInfo = {
  name: 'getLPPoolInfo',
  description: "Query detailed pool information including APY breakdown, fees, token reserves,\nand historical performance.\n\nUse this after selecting a pool from the pool list to get complete details.\n\nAgent hint: Use this endpoint when user wants detailed information about a specific pool.\nCall this before staking to show the user complete pool details.\npoolAddress is required and must come from getLPPoolList.",
  inputSchema: z.object({
    poolAddress: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/pool-info", input);
  },
};
