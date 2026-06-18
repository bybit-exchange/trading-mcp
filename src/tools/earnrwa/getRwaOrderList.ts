// getRwaOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRwaOrderList = {
  name: 'getRwaOrderList',
  description: "Query RWA order history. Supports exact lookup by `orderId` or `orderLinkId`,\nor paginated listing filtered by `orderType` / `productId` / time range.\n\n**Rate Limit:** 10 req/s (UID)\n\n**Notes:**\n- When `orderId` or `orderLinkId` is provided, exact lookup is performed and\n  other filters are ignored.\n- For paginated listing: `startTime` defaults to 7 days ago, `endTime` defaults\n  to now; the earliest accessible time is 180 days ago.",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderType: z.enum(["Stake", "Redeem"]).optional(),
    productId: z.number().int().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/rwa/order", input);
  },
};
