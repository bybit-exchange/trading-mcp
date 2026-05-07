// placeTokenOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const placeTokenOrder = {
  name: 'placeTokenOrder',
  description: "Place a Mint (minting) or Redeem (redemption) order for BYUSDT Token.\n\n**Mint**: Transfer USDT from FlexibleSaving account to get BYUSDT\n**Redeem**: Redeem BYUSDT to get USDT in UNIFIED account\n\n**Rate Limit:** 5 req/s (UID)\n\n**Notes:**\n- `orderLinkId` provides idempotency — same ID returns the same order\n- Use Get Order endpoint to track order status\n\nAgent hint: IMPORTANT: This subscribes real tokens into a token earn product. Before executing, you MUST ask the user to explicitly confirm the product, token type, and amount. Do not execute automatically.",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
    orderLinkId: z.string(),
    orderType: z.enum(["Mint", "Redeem"]),
    amount: z.string(),
    accountType: z.enum(["FlexibleSaving", "UNIFIED"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/token/place-order", input);
  },
};
