// getAdvanceEarnOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAdvanceEarnOrder = {
  name: 'getAdvanceEarnOrder',
  description: "Query your order history. Requires **Earn** permission on the API key.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    category: z.enum(["DualAssets", "SmartLeverage", "DoubleWin", "DiscountBuy"]),
    productId: z.number().int().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(20).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/advance/order", input);
  },
};
