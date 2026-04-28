// getCryptoLoanFlexibleRepaymentHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFlexibleRepaymentHistory = {
  name: 'getCryptoLoanFlexibleRepaymentHistory',
  description: "Query historical flexible repayment records with pagination.\n\n**Features:**\n- Query by repayment ID or currency\n- Pagination support\n- View repayment details including principal and interest\n- Rate limit: 5 requests per UID\n\n**Use Cases:**\n- Track repayment history\n- Verify repayment transactions\n- Calculate total interest paid",
  inputSchema: z.object({
    repayId: z.string().optional(),
    loanCurrency: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-flexible/repayment-history", input);
  },
};
