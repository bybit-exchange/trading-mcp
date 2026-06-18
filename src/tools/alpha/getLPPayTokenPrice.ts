// getLPPayTokenPrice.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLPPayTokenPrice = {
  name: 'getLPPayTokenPrice',
  description: "Query current USD prices for one or more payment tokens.\nSupports batch queries to get multiple token prices in a single request.\n\nUse this to calculate USD value of stake amounts or show price info to users.\n\nAgent hint: Use this endpoint to get token prices for calculating stake values in USD.\nCan query multiple tokens at once by passing an array of tokenCode values.\nUseful for showing users the USD value of their stake before confirming.",
  inputSchema: z.object({
    tokenCode: z.array(z.string()),
    chainCode: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/lp/pay-token-price", input);
  },
};
