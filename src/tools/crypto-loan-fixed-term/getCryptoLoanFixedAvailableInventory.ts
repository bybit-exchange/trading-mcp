// getCryptoLoanFixedAvailableInventory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedAvailableInventory = {
  name: 'getCryptoLoanFixedAvailableInventory',
  description: "Query available lending pool inventory for fixed-term loan.\n\n**Rules:**\n- Only allows querying coins supported by fixed-term crypto loan\n- The queried coin must exist\n- Coin name must be uppercase\n- Available inventory = min(market available + financial trial (50M), user remaining borrow limit)\n- Precision: borrow precision, rounded down\n- The financial trial must also meet the financial rate requirement: request rate >= financial borrow rate",
  inputSchema: z.object({
    currency: z.string(),
    term: z.string(),
    annualRate: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/available-inventory", input);
  },
};
