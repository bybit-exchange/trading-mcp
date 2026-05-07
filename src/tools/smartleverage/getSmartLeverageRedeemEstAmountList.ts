// getSmartLeverageRedeemEstAmountList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSmartLeverageRedeemEstAmountList = {
  name: 'getSmartLeverageRedeemEstAmountList',
  description: "Query the estimated redemption amount for one or more Smart Leverage / Double Win positions.\nRequires **Earn** permission on the API key.\n\n**Rate Limit:** 10 req/s (UID)\n\n**Important:** This endpoint must be called **before** placing a Redeem order.\nThe server caches the estimation result for **10 minutes**.\nWhen placing the Redeem order, the `estRedeemAmount` field must match the cached value.\n\n- Max 5 position IDs per request\n- Returns success/failure per position individually",
  inputSchema: z.object({
    category: z.enum(["SmartLeverage", "DoubleWin"]),
    positionIds: z.array(z.number().int()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/advance/get-redeem-est-amount-list", input);
  },
};
