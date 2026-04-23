// setDcp.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setDcp = {
  name: 'setDcp',
  description: "Configure the time window for automatic order cancellation when WebSocket connection drops.\n\n- Institutional users only; must be enabled via account manager\n- Supports options, derivatives (futures), and spot products\n- Time window range: 3-300 seconds\n- After setting, activate DCP stream on private WebSocket to enable triggering\n- Allow ~10 seconds for system propagation\n\nAgent hint: Use this endpoint to set the DCP time window. When WebSocket disconnects for longer than this window, all orders for the specified product are automatically cancelled.",
  inputSchema: z.object({
    product: z.enum(["OPTIONS", "DERIVATIVES", "SPOT"]).default("OPTIONS").optional(),
    timeWindow: z.number().int().min(3).max(300),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/order/disconnected-cancel-all", input);
  },
};
