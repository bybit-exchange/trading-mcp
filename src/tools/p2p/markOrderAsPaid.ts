// markOrderAsPaid.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const markOrderAsPaid = {
  name: 'markOrderAsPaid',
  description: "Mark a P2P order as paid.\nNote: \"Balance\" payment method is not supported by the P2P API.",
  inputSchema: z.object({
    orderId: z.string(),
    paymentType: z.string(),
    paymentId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/order/pay", input);
  },
};
