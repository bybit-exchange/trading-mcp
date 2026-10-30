// getOrderDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getOrderDetail = {
  name: 'getOrderDetail',
  description: "Get detailed information of a specific P2P order.",
  inputSchema: z.object({
    orderId: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/p2p/order/info", input, context);
  },
};
