// ConvertExecute.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const ConvertExecute = {
  name: 'ConvertExecute',
  description: "Confirm and execute a conversion based on quote ID. The exchange is async;\ncheck the final status by calling the query result API.\nMake sure you confirm the quote before it expires.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_WRITE\n- Rate limit: 5/user/s, 100/path/s globally\n- Requires KYC verification",
  inputSchema: z.object({
    quoteTxId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/asset/exchange/convert-execute", input);
  },
};
