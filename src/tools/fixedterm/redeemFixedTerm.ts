// redeemFixedTerm.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const redeemFixedTerm = {
  name: 'redeemFixedTerm',
  description: "Early redemption for a fixed term position.\n\n**Notes:**\n- FundPool products with `allowEarlyRedemption=true` support early redemption with discounted APY (`earlyRedemptionApy`)\n- FixedTermSaving products (if allowed) support early redemption with zero redemption earnings\n- Positions within the `redemptionLimitDuration` window cannot be redeemed early\n\n**Rate limit:** 5 req/s (UID)",
  inputSchema: z.object({
    productId: z.string(),
    category: z.enum(["FixedTermSaving", "FundPool", "FundPoolPremium"]),
    positionId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/fixed-term/redeem", input);
  },
};
