// postCryptoLoanFixedFullyRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedFullyRepay = {
  name: 'postCryptoLoanFixedFullyRepay',
  description: "Repay entire loan principal and interest.\n\n**Rate limit:** 1 request per UID",
  inputSchema: z.object({
    loanId: z.string(),
    loanCurrency: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/fully-repay", input);
  },
};
