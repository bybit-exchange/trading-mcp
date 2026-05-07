// getUserPayment.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getUserPayment = {
  name: 'getUserPayment',
  description: "Get your payment methods configured in P2P. The returned `id` field is used as `paymentIds` when posting or updating ads.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/user/payment/list", input);
  },
};
