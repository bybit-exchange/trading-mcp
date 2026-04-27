// getCryptoLoanFlexibleOngoingCoin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFlexibleOngoingCoin = {
  name: 'getCryptoLoanFlexibleOngoingCoin',
  description: "Query current flexible borrow positions by currency.\n\n**Features:**\n- View current debt and interest\n- Check hourly interest rate\n- Monitor accrued interest\n- Rate limit: 5 requests per UID\n\n**Use Cases:**\n- Check current debt amount\n- Monitor interest accumulation\n- Calculate repayment amount needed",
  inputSchema: z.object({
    loanCurrency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-flexible/ongoing-coin", input);
  },
};
