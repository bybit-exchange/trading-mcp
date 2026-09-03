// getCryptoLoanFlexibleAvailableInventory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFlexibleAvailableInventory = {
  name: 'getCryptoLoanFlexibleAvailableInventory',
  description: "Query available lending pool inventory for flexible loan.\n\n**Rules:**\n- Only allows querying coins supported by flexible crypto loan\n- The queried coin must exist\n- Coin name must be uppercase\n- Available inventory = min(platform total lendable amount, user remaining borrow limit)\n- Precision: borrow precision, rounded down",
  inputSchema: z.object({
    currency: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-flexible/available-inventory", input);
  },
};
