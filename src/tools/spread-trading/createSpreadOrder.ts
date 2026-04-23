// createSpreadOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createSpreadOrder = {
  name: 'createSpreadOrder',
  description: "Create a new spread trading order.\n\n**Usage Scenarios:**\n- Open a new spread position by placing a limit or market order on a spread combination symbol.\n- Use `orderLinkId` to assign a custom identifier for tracking purposes.\n- Use `timeInForce` to control execution behavior (e.g., PostOnly for maker-only fills).\n\n**Important:**\n- The response is an acknowledgement only. The order may still be rejected asynchronously.\n  Monitor the WebSocket stream for final order status.\n- A maximum of 50 open orders is permitted per account.\n- For limit orders, the `price` parameter is required.\n\nAgent hint: POST endpoint requiring authentication. The symbol must be a valid spread combination symbol\n(e.g., \"SOLUSDT_SOL/USDT\"). Price is required for Limit orders. The response is asynchronous;\nsubscribe to the WebSocket for definitive status updates. Max 50 open orders per account.",
  inputSchema: z.object({
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
    orderType: z.enum(["Limit", "Market"]),
    qty: z.string(),
    price: z.string().optional(),
    orderLinkId: z.string().optional(),
    timeInForce: z.enum(["GTC", "IOC", "FOK", "PostOnly"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spread/order/create", input);
  },
};
