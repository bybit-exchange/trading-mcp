// accountCoinBalanceQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const accountCoinBalanceQuery = {
  name: 'accountCoinBalanceQuery',
  description: "Query the balance of a specific coin in a specific account type. Supports querying sub UID balance with master API key.\n- `accountType` and `coin` are required\n- `memberId` is required when querying sub UID balance with master API key\n- `toMemberId` + `toAccountType` are required for cross-account transferable balance queries\n- `withLtvTransferSafeAmount=1` requires `toAccountType` to be set",
  inputSchema: z.object({
    accountType: z.string(),
    coin: z.string(),
    memberId: z.number().int().optional(),
    toMemberId: z.number().int().optional(),
    toAccountType: z.string().optional(),
    withBonus: z.enum(["0", "1"]).default("0").optional(),
    withTransferSafeAmount: z.enum(["0", "1"]).default("0").optional(),
    withLtvTransferSafeAmount: z.enum(["0", "1"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/transfer/query-account-coin-balance", input);
  },
};
