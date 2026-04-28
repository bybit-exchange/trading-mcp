// getWalletBalance.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getWalletBalance = {
  name: 'getWalletBalance',
  description: "Obtain wallet balance, query asset information of each currency, and each currency carries the risk rate of the current position.\n- By default, non-zero asset or liability currencies are not returned.\n- Unified account covers: UNIFIED\n- For Funding wallet balance, please use a separate endpoint.\n\n**Notes:**\n- Under UTA manual borrow logic, `spotBorrow` represents spot liabilities.\n- During extreme market volatility, the interface may experience increased latency.",
  inputSchema: z.object({
    accountType: z.enum(["UNIFIED"]),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/wallet-balance", input);
  },
};
