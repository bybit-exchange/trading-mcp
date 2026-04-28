// getWithdrawableAmountByCoin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const getWithdrawableAmountByCoin = {
  name: 'getWithdrawableAmountByCoin',
  description: "Get the withdrawable amount for a specific coin across different account types.\n- Returns withdrawable amounts for FUND and UTA accounts.\n- Funds may be partially frozen due to on-chain deposits awaiting confirmations or risk review.\n  tags:\n- Asset",
  inputSchema: z.object({
    coin: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/withdraw/withdrawable-amount", input);
  },
};
