// postCryptoLoanFixedRepayCollateral.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedRepayCollateral = {
  name: 'postCryptoLoanFixedRepayCollateral',
  description: "Repay loan by converting collateral to loan currency.\n\n**Rate limit:** 1 request per UID",
  inputSchema: z.object({
    loanId: z.number().int(),
    loanCurrency: z.string(),
    collateralCoin: z.string(),
    amount: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/repay-collateral", input);
  },
};
