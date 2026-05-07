// addMargin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const addMargin = {
  name: 'addMargin',
  description: "Add additional collateral (margin) to a leveraged Liquidity Mining position to avoid liquidation.\n\n**Rate Limit:** 5 req/s (UID)\n\nAgent hint: IMPORTANT: This adds real collateral to an existing liquidity mining position. Before executing, you MUST ask the user to explicitly confirm the position ID and margin amount. Do not execute automatically.",
  inputSchema: z.object({
    productId: z.string(),
    orderLinkId: z.string(),
    positionId: z.string(),
    amount: z.string(),
    quoteAccountType: z.enum(["FUND", "UNIFIED"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/liquidity-mining/add-margin", input);
  },
};
