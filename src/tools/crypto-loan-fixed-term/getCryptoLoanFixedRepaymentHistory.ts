// getCryptoLoanFixedRepaymentHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedRepaymentHistory = {
  name: 'getCryptoLoanFixedRepaymentHistory',
  description: "Query loan repayment records.\n\n**Rate limit:** 5 requests per UID",
  inputSchema: z.object({
    repayId: z.string().optional(),
    loanCurrency: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/repayment-history", input);
  },
};
