// cancelSpreadOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelSpreadOrder = {
  name: 'cancelSpreadOrder',
  description: "Cancel a single spread trading order by its order ID or custom order link ID.\n\n**Usage Scenarios:**\n- Cancel an open limit order that has not yet been fully filled.\n- Use either `orderId` (system-assigned) or `orderLinkId` (user-defined) to identify the order.\n\n**Important:**\n- Either `orderId` or `orderLinkId` must be provided.\n- The response is an acknowledgement only. The cancellation is processed asynchronously.\n  Monitor the WebSocket stream for final order status confirmation.\n\nAgent hint: POST endpoint requiring authentication. Either orderId or orderLinkId is required.\nResponse is asynchronous -- the acknowledgement does not guarantee cancellation.\nUse the WebSocket stream to confirm final status.",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spread/order/cancel", input);
  },
};
