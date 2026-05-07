// setFixedTermAutoInvest.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setFixedTermAutoInvest = {
  name: 'setFixedTermAutoInvest',
  description: "Enable or disable auto-reinvestment for a fixed term position.\n\n**Notes:**\n- Only applicable for FundPool products that support auto-reinvestment (`allowAutoReinvest=true`)\n\n**Rate limit:** 5 req/s (UID)",
  inputSchema: z.object({
    productId: z.string(),
    category: z.enum(["FixedTermSaving", "FundPool", "FundPoolPremium"]),
    positionId: z.string(),
    status: z.enum(["Enable", "Disable"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/fixed-term/position/auto-invest", input);
  },
};
