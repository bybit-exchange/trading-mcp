// queryCoinChainInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryCoinChainInfo = {
  name: 'queryCoinChainInfo',
  description: "Query coin information, including chain configuration, deposit and withdrawal status.\n- Returns all supported coins when `coin` is not specified\n- Each coin includes its supported chain list with deposit/withdraw configuration\n- Chain status (`chainDeposit` / `chainWithdraw`): `\"0\"` = suspended, `\"1\"` = normal\n- `remainAmount` represents the maximum withdrawal amount per transaction (takes the max value across all chains)\n- Results are filtered by compliance wall whitelist",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/coin/query-info", input);
  },
};
