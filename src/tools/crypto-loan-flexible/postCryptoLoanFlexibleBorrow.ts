// postCryptoLoanFlexibleBorrow.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFlexibleBorrow = {
  name: 'postCryptoLoanFlexibleBorrow',
  description: "Borrow crypto with flexible hourly interest rates.\n\n**Features:**\n- Private endpoint (authentication required)\n- Hourly floating interest rate\n- Repay anytime without penalty\n- Interest calculated hourly based on actual borrowing duration\n- Support multiple collateral currencies\n- Rate limit: 1 request per time window per UID\n\n**Use Cases:**\n- Short-term borrowing with flexible repayment\n- Avoid fixed-term commitment\n- Take advantage of hourly rate changes\n\n**Important:**\n- Interest rate may change hourly\n- Calculate LTV to ensure sufficient collateral\n- Check loanable-data endpoint for current rates",
  inputSchema: z.object({
    loanCurrency: z.string(),
    loanAmount: z.string(),
    collateralList: z.array(z.object({ currency: z.string(), amount: z.string() })),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-flexible/borrow", input);
  },
};
