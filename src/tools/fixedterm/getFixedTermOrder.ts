// getFixedTermOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFixedTermOrder = {
  name: 'getFixedTermOrder',
  description: "Query fixed term order history. Supports cursor-based pagination.\n\n**Notes:**\n- When querying by `productId`, `category` must also be provided\n- Returns all order types if `orderType` is not specified\n\n**Rate limit:** 10 req/s (UID)",
  inputSchema: z.object({
    orderType: z.enum(["Stake", "Redeem", "Reinvest"]).optional(),
    productId: z.string().optional(),
    category: z.enum(["FixedTermSaving", "FundPool", "FundPoolPremium"]).optional(),
    orderId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/fixed-term/order", input);
  },
};
