// getCryptoLoanFlexibleBorrowHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFlexibleBorrowHistory = {
  name: 'getCryptoLoanFlexibleBorrowHistory',
  description: "Query historical flexible borrow records with pagination.\n\n**Features:**\n- Query by order ID or currency\n- Pagination support\n- View borrow details and status\n- Rate limit: 5 requests per UID",
  inputSchema: z.object({
    orderId: z.string().optional(),
    loanCurrency: z.string().optional(),
    limit: z.number().int().optional(),
    cursor: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/crypto-loan-flexible/borrow-history", input);
  },
};
