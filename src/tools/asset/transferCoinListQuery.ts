// transferCoinListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const transferCoinListQuery = {
  name: 'transferCoinListQuery',
  description: "Query the list of coins that can be transferred between the specified account types.\n- `fromAccountType` and `toAccountType` cannot be the same\n- Both account types must be supported types",
  inputSchema: z.object({
    fromAccountType: z.string(),
    toAccountType: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/transfer/query-transfer-coin-list", input);
  },
};
