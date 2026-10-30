// getUserPayment.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getUserPayment = {
  name: 'getUserPayment',
  description: "Get your payment methods configured in P2P. The returned `id` field is used as `paymentIds` when posting or updating ads.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/p2p/user/payment/list", input, context);
  },
};
