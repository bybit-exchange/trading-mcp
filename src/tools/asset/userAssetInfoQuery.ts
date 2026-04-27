// userAssetInfoQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const userAssetInfoQuery = {
  name: 'userAssetInfoQuery',
  description: "Query coin balances across a single account type. Supports querying sub UID balance with master API key.\n- `accountType` is required\n- For UNIFIED account, `coin` is required (comma-separated, max varies by config)\n- `memberId` is used to query sub account balance (master API key only)",
  inputSchema: z.object({
    accountType: z.string(),
    coin: z.string().optional(),
    memberId: z.number().int().optional(),
    withBonus: z.enum(["0", "1"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/transfer/query-account-coins-balance", input);
  },
};
