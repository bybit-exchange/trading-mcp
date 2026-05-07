// CoinConvertLimitQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const CoinConvertLimitQuery = {
  name: 'CoinConvertLimitQuery',
  description: "Query single conversion min/max limit for specified coin pair under specified account type.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ\n- Rate limit: 100/path/s globally",
  inputSchema: z.object({
    fromCoin: z.string(),
    fromCoinType: z.enum(["0", "1"]).optional(),
    toCoin: z.string(),
    toCoinType: z.enum(["0", "1"]).optional(),
    accountType: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/query-convert-limit", input);
  },
};
