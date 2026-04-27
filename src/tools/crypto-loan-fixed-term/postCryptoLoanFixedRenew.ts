// postCryptoLoanFixedRenew.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const postCryptoLoanFixedRenew = {
  name: 'postCryptoLoanFixedRenew',
  description: "Renew an existing loan by creating a new loan to repay the old one.\n\n**Features:**\n- Extend loan term before expiration\n- Add additional collateral if needed\n- Rate limit: 1 request per UID\n\n**Use Cases:**\n- Extend loan term to avoid liquidation\n- Add more collateral to improve LTV",
  inputSchema: z.object({
    loanId: z.string(),
    collateralList: z.array(z.object({ currency: z.string().optional(), amount: z.string().optional() })),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/crypto-loan-fixed/renew", input);
  },
};
