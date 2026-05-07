// addLiquidity.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const addLiquidity = {
  name: 'addLiquidity',
  description: "Inject funds into a Liquidity Mining pool.\n\n- `quoteAmount` and `baseAmount` are conditionally required: at least one must be provided\n- `quoteAccountType` is required when injecting quoteCoin; `baseAccountType` is required when injecting baseCoin\n- `orderLinkId` is used for idempotency; max 40 characters; once used, the same value cannot be reused — resubmission returns an error\n\n**Rate Limit:** 5 req/s (UID)\n\nAgent hint: IMPORTANT: This commits real assets to a liquidity pool. Before executing, you MUST ask the user to explicitly confirm the product, token amounts, and any impermanent-loss risk. Do not execute automatically.",
  inputSchema: z.object({
    productId: z.string(),
    orderLinkId: z.string(),
    quoteAccountType: z.enum(["FUND", "UNIFIED"]).optional(),
    baseAccountType: z.enum(["FUND", "UNIFIED"]).optional(),
    quoteAmount: z.string().optional(),
    baseAmount: z.string().optional(),
    leverage: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/liquidity-mining/add-liquidity", input);
  },
};
