// QueryOrderFromOpenApi.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QueryOrderFromOpenApi = {
  name: 'QueryOrderFromOpenApi',
  description: "Paginated query of conversion order list via OpenAPI, supports asset account and OBU account data.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ_WRITE\n- Rate limit: 600/min for same group\n- Old path: /asset/v2/private/exchange/exchange-order-query",
  inputSchema: z.object({
    accountType: z.enum(["0", "1"]).optional(),
    cursor: z.string().optional(),
    limit: z.number().int().optional(),
    toCoin: z.string().optional(),
    fromCoin: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    type: z.enum(["0", "1", "2"]).optional(),
    exchangeStatus: z.enum(["0", "1", "2", "3", "4"]).optional(),
    direction: z.enum(["next", "prev"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/query-order-list", input);
  },
};
