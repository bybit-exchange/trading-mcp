// getEarnOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getEarnOrderHistory = {
  name: 'getEarnOrderHistory',
  description: "Query stake/redeem order history.\n- Returns the most recent 7 days of data by default; maximum query range is 7 days\n- Supports cursor-based pagination",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    productId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/order", input);
  },
};
