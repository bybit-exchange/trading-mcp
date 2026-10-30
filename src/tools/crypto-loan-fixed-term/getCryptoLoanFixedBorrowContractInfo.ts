// getCryptoLoanFixedBorrowContractInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getCryptoLoanFixedBorrowContractInfo = {
  name: 'getCryptoLoanFixedBorrowContractInfo',
  description: "Query active borrow contracts (loans).\n\n**Rate limit:** 5 requests per UID",
  inputSchema: z.object({
    orderId: z.string().optional(),
    loanId: z.string().optional(),
    orderCurrency: z.string().optional(),
    term: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/borrow-contract-info", input, context);
  },
};
