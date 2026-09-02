// getSpreadOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadOrderHistory = {
  name: 'getSpreadOrderHistory',
  description: "Query spread trading order history. Returns closed (filled, cancelled, rejected) spread combination orders.\n\n**Notes:**\n- Fully cancelled orders are stored for up to 24 hours.\n- Single leg orders created via futures spread are accessible through the primary order history endpoint with `createType=CreateByFutureSpread`.\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 7 days by default\n- Only `startTime` provided: returns from startTime to startTime + 7 days\n- Only `endTime` provided: returns from endTime - 7 days to endTime\n- Both provided: endTime - startTime must be ≤ 7 days",
  inputSchema: z.object({
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/order/history", input);
  },
};
