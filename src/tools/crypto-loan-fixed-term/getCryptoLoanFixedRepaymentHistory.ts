// getCryptoLoanFixedRepaymentHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getCryptoLoanFixedRepaymentHistory = {
  name: 'getCryptoLoanFixedRepaymentHistory',
  description: "Query loan repayment records.\n\n**Rate limit:** 5 requests per UID",
  inputSchema: z.object({
    repayId: z.string().optional(),
    loanCurrency: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/repayment-history", input, context);
  },
};
