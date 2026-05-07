// claimLiquidityInterest.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const claimLiquidityInterest = {
  name: 'claimLiquidityInterest',
  description: "Claim all available interest for the specified product in one click.\n\n- Pass `productId=-1` to claim all products at once\n- Yield is credited to the user's default account; `accountType` cannot be specified\n- Each product has at most one active position, so `positionId` is not required\n\n**Rate Limit:** 5 req/s (UID)",
  inputSchema: z.object({
    productId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/liquidity-mining/claim-interest", input);
  },
};
