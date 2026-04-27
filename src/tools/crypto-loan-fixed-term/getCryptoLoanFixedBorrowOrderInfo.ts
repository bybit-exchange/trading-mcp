// getCryptoLoanFixedBorrowOrderInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedBorrowOrderInfo = {
  name: 'getCryptoLoanFixedBorrowOrderInfo',
  description: "Query borrow order details and history.\n\n**Rate limit:** 5 requests per UID",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderCurrency: z.string().optional(),
    state: z.string().optional(),
    term: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-fixed/borrow-order-info", input);
  },
};
