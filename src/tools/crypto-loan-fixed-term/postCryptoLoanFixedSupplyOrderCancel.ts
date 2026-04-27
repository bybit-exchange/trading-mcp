// postCryptoLoanFixedSupplyOrderCancel.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedSupplyOrderCancel = {
  name: 'postCryptoLoanFixedSupplyOrderCancel',
  description: "Cancel a pending supply (lending) order.\n\n**Rate limit:** 1 request per UID",
  inputSchema: z.object({
    orderId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/supply-order-cancel", input);
  },
};
