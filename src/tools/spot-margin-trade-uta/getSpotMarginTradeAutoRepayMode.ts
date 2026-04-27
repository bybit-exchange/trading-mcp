// getSpotMarginTradeAutoRepayMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotMarginTradeAutoRepayMode = {
  name: 'getSpotMarginTradeAutoRepayMode',
  description: "Retrieve the current automatic repayment mode settings for margin trading accounts.\n- Unified account only\n- When `currency` is not passed, returns settings for all currencies",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/get-auto-repay-mode", input);
  },
};
