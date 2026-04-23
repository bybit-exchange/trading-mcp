// getSpreadOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadOrderHistory = {
  name: 'getSpreadOrderHistory',
  description: "Query historical spread trading orders including filled, cancelled, and rejected orders.\n\n**Usage Scenarios:**\n- Review past spread trading activity for reconciliation.\n- Look up a specific historical order by `orderId` or `orderLinkId`.\n- Query orders within a specific time range (max 7-day window).\n- Analyze spread order execution across both legs.\n\n**Time Range Logic:**\n- Neither `startTime` nor `endTime`: returns last 7 days of history.\n- `startTime` only: returns data from `startTime` to `startTime + 7 days`.\n- `endTime` only: returns data from `endTime - 7 days` to `endTime`.\n- Both provided: `endTime - startTime` must be <= 7 days.\n\n**Important:**\n- `orderId` and `orderLinkId` take precedence over time-based filtering.\n- Fully cancelled orders are stored for up to 24 hours only.\n\nAgent hint: GET endpoint requiring authentication. All parameters are optional. orderId and orderLinkId\ntake priority over time filters. Time range is limited to 7 days max. Fully cancelled orders\nare retained for only 24 hours. Response includes both-leg details (leg1/leg2 fields).",
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
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/order/history", input);
  },
};
