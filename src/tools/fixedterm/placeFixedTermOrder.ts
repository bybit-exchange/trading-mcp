// placeFixedTermOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const placeFixedTermOrder = {
  name: 'placeFixedTermOrder',
  description: "Place a staking order for a fixed term product.\n\n**Notes:**\n- `autoInvest` parameter is only effective when `category` is `FundPool`\n- `orderLinkId` must be unique for idempotency for specific user and category.\n\n**Rate limit:** 5 req/s (UID)\n\nAgent hint: IMPORTANT: This locks funds into a fixed-term earn product. Before executing, you MUST ask the user to explicitly confirm the product, amount, and lock-up period. Do not execute automatically.",
  inputSchema: z.object({
    productId: z.string(),
    category: z.enum(["FixedTermSaving", "FundPool", "FundPoolPremium"]),
    coin: z.string(),
    amount: z.string(),
    accountType: z.enum(["FUND", "UNIFIED"]),
    orderLinkId: z.string(),
    autoInvest: z.boolean().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/fixed-term/place-order", input);
  },
};
