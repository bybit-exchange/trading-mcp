// placeRwaOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const placeRwaOrder = {
  name: 'placeRwaOrder',
  description: "Place a Stake (subscription) or Redeem order for an RWA product.\n\n**Stake**: deduct settlement coin from `accountType`, allocate shares at next NAV.\n**Redeem**: lock shares, refund settlement coin to `accountType` after settlement.\n\n**Rate Limit:** 5 req/s (UID)\n\n**Notes:**\n- `orderLinkId` is REQUIRED and must be unique per UID within RWA business scope.\n  Reusing a previous `orderLinkId` returns `180025 ORDER_ALREADY_EXISTS`.\n- For Stake orders: `stakeAmount` is required, `redeemShares` is ignored.\n- For Redeem orders: `redeemShares` is required, `stakeAmount` is ignored.\n- Use Get Order endpoint to track order status.",
  inputSchema: z.object({
    productId: z.number().int(),
    orderType: z.enum(["Stake", "Redeem"]),
    coin: z.string(),
    stakeAmount: z.string().optional(),
    redeemShares: z.string().optional(),
    accountType: z.enum(["FUND", "UNIFIED"]).default("FUND").optional(),
    orderLinkId: z.string(),
  }).refine(
    (d) => d.orderType !== 'Stake' || d.stakeAmount !== undefined,
    { message: 'stakeAmount is required when orderType=Stake' }
  ).refine(
    (d) => d.orderType !== 'Redeem' || d.redeemShares !== undefined,
    { message: 'redeemShares is required when orderType=Redeem' }
  ),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/rwa/place-order", input);
  },
};
