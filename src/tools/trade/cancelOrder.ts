// cancelOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelOrder = {
  name: 'cancelOrder',
  description: "Cancel a single open order by `orderId` or `orderLinkId`.\n\n- Either `orderId` or `orderLinkId` must be provided\n- System prioritises `orderId` when both are provided but conflict\n- For spot orders, `orderFilter` can target specific order types\n- Response is acknowledgment only; confirm via WebSocket order stream\n\nAgent hint: Use this endpoint to cancel a single open order by its orderId or orderLinkId.\nTradFi: use category=spot for xStock tokens, category=linear for equity/commodity perpetuals.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderFilter: z.enum(["Order", "tpslOrder", "StopOrder"]).default("Order").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/cancel", input);
  },
};
