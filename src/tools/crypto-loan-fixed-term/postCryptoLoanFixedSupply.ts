// postCryptoLoanFixedSupply.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedSupply = {
  name: 'postCryptoLoanFixedSupply',
  description: "Lend crypto to earn fixed interest.\n\n**Rate limit:** 1 request per UID",
  inputSchema: z.object({
    orderCurrency: z.string(),
    orderAmount: z.string(),
    annualRate: z.string(),
    term: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/supply", input);
  },
};
