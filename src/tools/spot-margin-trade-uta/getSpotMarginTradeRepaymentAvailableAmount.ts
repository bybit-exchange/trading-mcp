// getSpotMarginTradeRepaymentAvailableAmount.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotMarginTradeRepaymentAvailableAmount = {
  name: 'getSpotMarginTradeRepaymentAvailableAmount',
  description: "Retrieve the available amount that can be repaid for a specific cryptocurrency in spot margin trading.\n- Unified account only\n- Repayment amount = min(spot coin available balance, coin borrow amount)",
  inputSchema: z.object({
    currency: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/repayment-available-amount", input);
  },
};
