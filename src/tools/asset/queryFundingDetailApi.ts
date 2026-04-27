// queryFundingDetailApi.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryFundingDetailApi = {
  name: 'queryFundingDetailApi',
  description: "Query transaction records of the funding account.\n- `createTimeFrom` and `createTimeTo` must be used together; the interval cannot exceed **7 days**\n- If neither `createTimeFrom` nor `createTimeTo` is provided, defaults to the last 7 days\n- Supports cursor-based pagination; pass `nextPageCursor` from the previous response as `cursor`",
  inputSchema: z.object({
    createTimeFrom: z.string().optional(),
    createTimeTo: z.string().optional(),
    limit: z.string().optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/fundinghistory", input);
  },
};
