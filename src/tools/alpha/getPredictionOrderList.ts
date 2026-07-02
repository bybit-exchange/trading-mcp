// getPredictionOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionOrderList = {
  name: 'getPredictionOrderList',
  description: "Query the authenticated user's prediction market order history.\nReturns order details including fill status, executed price, and fees.\n\nUse this after placing a buy or sell order to check the final execution status.\nFOK orders will show as FILLED or CANCELLED.\n\nSupports filtering by:\n- `status`: order status (PENDING/FILLED/PARTIALLY_FILLED/CANCELLED/REJECTED)\n- `tokenId`: specific outcome token\n- `eventId`: specific event\n- `side`: BUY (1) or SELL (2)\n- `days`: look back N days (max 90)\n\nAgent hint: Use this to check order fill status after placing buy/sell orders.\nFilter by status=2 (FILLED) or status=4 (CANCELLED) to see order results.\nFOK orders are either fully FILLED or CANCELLED — no partial fills.\nUse days to limit history range (max 90 days).",
  inputSchema: z.object({
    status: z.enum(["1", "2", "3", "4", "5"]).optional(),
    tokenId: z.string().optional(),
    limit: z.number().int().optional(),
    pageIndex: z.number().int().optional(),
    eventId: z.string().optional(),
    side: z.enum(["1", "2"]).optional(),
    days: z.number().int().max(90).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/order-list", input);
  },
};
