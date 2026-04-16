// getWalletBalance.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getWalletBalance = {
  name: 'getWalletBalance',
  description: "Query the wallet balance of the unified account, including account-level margin\ninformation and per-coin balance details. Returns equity, wallet balance, margin\nrequirements, unrealised PnL, collateral settings, and borrowing info.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check overall account health (margin ratios, equity) or individual coin\nbalances. Always pass accountType=UNIFIED. Use the coin parameter to filter for\nspecific assets (comma-separated). String numeric fields represent decimal values.",
  inputSchema: z.object({
    accountType: z.enum(["UNIFIED"]),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/wallet-balance", input);
  },
};
