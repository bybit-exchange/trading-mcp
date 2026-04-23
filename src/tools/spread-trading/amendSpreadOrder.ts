// amendSpreadOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const amendSpreadOrder = {
  name: 'amendSpreadOrder',
  description: "Amend (modify) the price and/or quantity of an existing spread trading order.\n\n**Usage Scenarios:**\n- Adjust the price of an open limit order without cancelling and re-creating it.\n- Modify the quantity of an unfilled or partially filled order.\n- Use either `orderId` or `orderLinkId` to identify the target order.\n\n**Important:**\n- Either `orderId` or `orderLinkId` is required to identify the order.\n- At least one of `qty` or `price` must be provided.\n- Only unfilled or partially filled orders can be amended.\n- Setting `price=\"\"` (empty string) keeps the existing price unchanged.\n- Setting `price=\"0\"` updates the price to zero.\n- The response is asynchronous; monitor the WebSocket for final status.\n\nAgent hint: POST endpoint requiring authentication. Either orderId or orderLinkId is required to identify\nthe order. At least one of qty or price must be provided. Only unfilled or partially filled\norders can be amended. price=\"\" keeps existing price; price=\"0\" sets price to zero.\nResponse is asynchronous.",
  inputSchema: z.object({
    symbol: z.string(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    qty: z.string().optional(),
    price: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spread/order/amend", input);
  },
};
