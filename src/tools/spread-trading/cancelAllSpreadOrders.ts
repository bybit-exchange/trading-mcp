// cancelAllSpreadOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelAllSpreadOrders = {
  name: 'cancelAllSpreadOrders',
  description: "Cancel all open spread trading orders, optionally filtered by symbol.\n\n**Usage Scenarios:**\n- Cancel all open spread orders across all symbols by setting `cancelAll` to `true`.\n- Cancel all open orders for a specific spread symbol by providing `symbol`.\n- Emergency risk management: quickly flatten all open spread orders.\n\n**Important:**\n- When `symbol` is provided, `cancelAll` is disregarded and only orders matching\n  the symbol are cancelled.\n- When `symbol` is omitted and `cancelAll` is `true`, all open orders across all\n  symbols are cancelled.\n- The response is asynchronous; monitor the WebSocket for final status confirmation.\n\nAgent hint: POST endpoint requiring authentication. When symbol is provided, cancelAll is ignored.\nWhen symbol is omitted and cancelAll=true, all orders are cancelled.\nResponse is asynchronous -- use WebSocket to confirm.",
  inputSchema: z.object({
    symbol: z.string().optional(),
    cancelAll: z.boolean().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spread/order/cancel-all", input);
  },
};
