// QuerySmallAssetList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QuerySmallAssetList = {
  name: 'QuerySmallAssetList',
  description: "Query small-balance coins eligible for dust conversion in the account, and supported to-coins.\n- API key permission: Convert\n- Rate limit: 10/s\n- Only supports Unified wallet (eb_convert_uta)\n- Conversion transaction range: 1.0e-8 to 200 USDT",
  inputSchema: z.object({
    accountType: z.string(),
    fromCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/covert/small-balance-list", input);
  },
};
