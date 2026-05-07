// queryFixedBorrowOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryFixedBorrowOrders = {
  name: 'queryFixedBorrowOrders',
  description: "Query fixed-rate borrow order history.\n\n**Rules:**\n- Supports cursor-based pagination\n- Can filter by orderId, orderCurrency, state, or term\n- Default page size is 10, maximum is 100\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderCurrency: z.string().optional(),
    state: z.enum(["1", "2", "3", "4"]).optional(),
    term: z.string().optional(),
    limit: z.string().default("10").optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/fixedborrow-order-info", input);
  },
};
