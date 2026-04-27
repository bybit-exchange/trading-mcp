// ConvertHistoryQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const ConvertHistoryQuery = {
  name: 'ConvertHistoryQuery',
  description: "Query all confirmed conversion records. Supports multiple wallet types and comma-separated accountType.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_READ\n- Rate limit: 50/path/s globally",
  inputSchema: z.object({
    accountType: z.string().optional(),
    index: z.number().int().optional(),
    limit: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/exchange/query-convert-history", input);
  },
};
