// QuerySmallAssetConvertOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QuerySmallAssetConvertOrder = {
  name: 'QuerySmallAssetConvertOrder',
  description: "Paginated query of small asset conversion history records. Supports filtering by order number and time range.\n- API key permission: Convert\n- Rate limit: 10/s",
  inputSchema: z.object({
    accountType: z.enum(["eb_convert_uta", "eb_convert_funding"]).optional(),
    quoteId: z.string().optional(),
    cursor: z.string().optional(),
    size: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/covert/small-balance-history", input);
  },
};
