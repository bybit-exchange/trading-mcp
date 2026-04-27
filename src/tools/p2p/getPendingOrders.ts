// getPendingOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPendingOrders = {
  name: 'getPendingOrders',
  description: "Get a list of pending P2P orders. Returns 90 days of orders by default. Orders are accessible up to 180 days in the past.",
  inputSchema: z.object({
    status: z.number().int().optional(),
    beginTime: z.string().optional(),
    endTime: z.string().optional(),
    tokenId: z.string().optional(),
    side: z.number().int().optional(),
    page: z.number().int(),
    size: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/order/pending/simplifyList", input);
  },
};
