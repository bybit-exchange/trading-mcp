// batchAmendOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const batchAmendOrders = {
  name: 'batchAmendOrders',
  description: "Modify multiple existing open orders in a single API call.\n\n- Max 20 orders per request for futures/options, 10 for spot\n- Each order requires either `orderId` or `orderLinkId`\n- Only unfilled or partially filled orders can be amended\n- Check `retExtInfo.list[].code` for per-order status\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to modify multiple orders at once. For a single order, use amendOrder instead.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    request: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/amend-batch", input);
  },
};
