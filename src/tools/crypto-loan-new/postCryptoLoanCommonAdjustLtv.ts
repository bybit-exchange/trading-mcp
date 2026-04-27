// postCryptoLoanCommonAdjustLtv.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanCommonAdjustLtv = {
  name: 'postCryptoLoanCommonAdjustLtv',
  description: "Adjust the amount of collateral for a specific currency to manage the LTV ratio.\n\n**Features:**\n- Private endpoint (authentication required)\n- Add collateral to reduce LTV and lower liquidation risk\n- Remove collateral to free up assets (if LTV allows)\n- Returns an adjustId for tracking the adjustment operation\n- Rate limit: 1 request per time window per UID\n\n**Use Cases:**\n- Add collateral when approaching liquidation threshold\n- Remove excess collateral when LTV is safe\n- Rebalance collateral portfolio\n- Manage risk by adjusting collateral levels\n\n**Important:**\n- direction: 1 = Add collateral, 2 = Remove collateral\n- Removing collateral requires sufficient margin to maintain safe LTV\n- Cannot remove collateral if it would trigger liquidation\n- Users without active loans cannot adjust collateral",
  inputSchema: z.object({
    currency: z.string(),
    amount: z.string(),
    direction: z.enum(["1", "2"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-common/adjust-ltv", input);
  },
};
