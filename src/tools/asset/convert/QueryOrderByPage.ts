// QueryOrderByPage.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QueryOrderByPage = {
  name: 'QueryOrderByPage',
  description: "Aggregates asset account and OBU account data, queries conversion history orders by cursor pagination.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ_WRITE\n- Rate limit: 600/min for same group\n- Old path: /asset/v2/private/exchange/query-exchange-order",
  inputSchema: z.object({
    cursor: z.string().optional(),
    limit: z.number().int().optional(),
    toCoin: z.string().optional(),
    fromCoin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/order-record", input);
  },
};
