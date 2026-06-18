// getLPPayTokenList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPPayTokenList = {
  name: 'getLPPayTokenList',
  description: "Query available payment tokens that can be used for LP staking.\nReturns token details and user's available balance for each.\n\nCall this before staking to show users which tokens they can use.\n\nAgent hint: Use this endpoint to show users which tokens they can use for staking.\nReturns user's balance for each token, helping them decide what to stake.",
  inputSchema: z.object({
    chainCode: z.string().optional(),
    tokenAddress: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/pay-token-list", input);
  },
};
