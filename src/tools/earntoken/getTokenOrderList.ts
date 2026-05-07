// getTokenOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenOrderList = {
  name: 'getTokenOrderList',
  description: "Query BYUSDT Token order history. Supports querying by `orderLinkId` or `orderId`.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
    orderLinkId: z.string().optional(),
    orderId: z.string().optional(),
    orderType: z.enum(["Mint", "Redeem"]).optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(100).default(20).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/token/order", input);
  },
};
