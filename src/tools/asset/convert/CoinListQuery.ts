// CoinListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const CoinListQuery = {
  name: 'CoinListQuery',
  description: "Query convertible coin list under specified account type and conversion direction.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ\n- Rate limit: 30/user/s, 1500/path/s globally\n- Requires compliance review (CONVERSION product)",
  inputSchema: z.object({
    accountType: z.enum(["eb_convert_funding", "eb_convert_uta", "eb_convert_spot", "eb_convert_contract", "eb_convert_inverse"]),
    side: z.enum(["0", "1"]).optional(),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/query-coin-list", input);
  },
};
