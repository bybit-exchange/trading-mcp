// queryFixedBorrowContracts.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryFixedBorrowContracts = {
  name: 'queryFixedBorrowContracts',
  description: "Query fixed-rate borrow contracts (matched loan details).\n\n**Rules:**\n- Supports cursor-based pagination\n- Can filter by orderId, orderCurrency, or term\n- Default page size is 10, maximum is 100\n- Returns matched contract details including principal, interest, and status\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderCurrency: z.string().optional(),
    term: z.string().optional(),
    limit: z.string().default("10").optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/fixedborrow-contract-info", input);
  },
};
