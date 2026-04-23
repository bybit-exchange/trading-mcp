// getSpreadOpenOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadOpenOrders = {
  name: 'getSpreadOpenOrders',
  description: "Query real-time open spread trading orders.\n\n**Usage Scenarios:**\n- Monitor all currently active spread orders.\n- Filter by a specific spread symbol or base coin.\n- Look up a specific order by `orderId` or `orderLinkId`.\n- Paginate through large result sets using the `cursor` parameter.\n\n**Important:**\n- All query parameters are optional, allowing flexible filtering.\n- During extreme market volatility, responses may be delayed.\n\nAgent hint: GET endpoint requiring authentication. All parameters are optional query parameters.\nReturns currently open (New or PartiallyFilled) spread orders. Supports cursor-based\npagination with a max of 50 results per page. May experience latency during high volatility.",
  inputSchema: z.object({
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/order/realtime", input);
  },
};
