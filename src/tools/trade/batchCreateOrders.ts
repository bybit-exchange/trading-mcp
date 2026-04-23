// batchCreateOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const batchCreateOrders = {
  name: 'batchCreateOrders',
  description: "Place multiple orders in a single API call.\n\n- Max 20 orders per request for futures/options, 10 for spot\n- Each order is validated independently; partial success is possible\n- Check `retExtInfo.list[].code` for per-order status\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to place multiple orders at once. Check retExtInfo.list for per-order success/failure codes.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    request: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/create-batch", input);
  },
};
