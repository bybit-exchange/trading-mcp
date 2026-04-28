// postCryptoLoanFlexibleRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFlexibleRepay = {
  name: 'postCryptoLoanFlexibleRepay',
  description: "Repay flexible loan with loan currency.\n\n**Features:**\n- Repay anytime without penalty\n- Partial or full repayment supported\n- Interest calculated up to repayment time\n- Rate limit: 1 request per UID\n\n**Use Cases:**\n- Repay loan when have available funds\n- Partial repayment to reduce interest\n- Full repayment to release collateral",
  inputSchema: z.object({
    loanCurrency: z.string(),
    amount: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-flexible/repay", input);
  },
};
