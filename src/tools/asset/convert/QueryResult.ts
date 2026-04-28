// QueryResult.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QueryResult = {
  name: 'QueryResult',
  description: "Query cryptocurrency exchange results using a quote transaction ID.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ\n- Rate limit: 50/path/s globally",
  inputSchema: z.object({
    quoteTxId: z.string(),
    accountType: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/convert-result-query", input);
  },
};
