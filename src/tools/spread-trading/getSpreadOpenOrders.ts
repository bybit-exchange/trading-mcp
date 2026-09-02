// getSpreadOpenOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadOpenOrders = {
  name: 'getSpreadOpenOrders',
  description: "Query real-time open orders for spread trading combinations.\nReturns active (unfilled or partially filled) spread combination orders.",
  inputSchema: z.object({
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(20),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/order/realtime", input);
  },
};
