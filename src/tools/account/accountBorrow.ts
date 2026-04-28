// accountBorrow.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const accountBorrow = {
  name: 'accountBorrow',
  description: "Manual borrow for Unified account.\n\n**Rules:**\n- Borrowing via OpenAPI endpoint supports **variable rate borrowing only**\n- This endpoint is for manual borrowing operations only\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    coin: z.string(),
    amount: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/borrow", input);
  },
};
