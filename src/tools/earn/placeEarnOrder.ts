// placeEarnOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const placeEarnOrder = {
  name: 'placeEarnOrder',
  description: "Place a Stake or Redeem order.\n\n**Notes:**\n- During peak market lending demand, principal redemption may be delayed; expected to be processed within 48 hours\n- Redemption requests cannot be cancelled once submitted\n- OnChain products may take several days to complete",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    orderType: z.enum(["Stake", "Redeem"]),
    accountType: z.enum(["FUND", "UNIFIED"]),
    amount: z.string(),
    coin: z.string(),
    productId: z.string(),
    orderLinkId: z.string(),
    redeemPositionId: z.string().optional(),
    toAccountType: z.enum(["FUND", "UNIFIED"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/place-order", input);
  },
};
