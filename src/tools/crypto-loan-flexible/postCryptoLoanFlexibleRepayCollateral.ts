// postCryptoLoanFlexibleRepayCollateral.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFlexibleRepayCollateral = {
  name: 'postCryptoLoanFlexibleRepayCollateral',
  description: "Repay loan by converting collateral to loan currency.\n\n**Features:**\n- Use pledged collateral to repay loan\n- Auto-convert collateral at market rate\n- Convenient when lacking loan currency\n- Rate limit: 1 request per UID",
  inputSchema: z.object({
    loanCurrency: z.string(),
    collateralCoin: z.string(),
    amount: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-flexible/repay-collateral", input);
  },
};
