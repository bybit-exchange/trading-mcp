// interTransferListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const interTransferListQuery = {
  name: 'interTransferListQuery',
  description: "Query the internal transfer records between different account types under the same UID.\n**Time range rules:**\n- No time params:  last 30 days (default)",
  inputSchema: z.object({
    transferId: z.string().optional(),
    coin: z.string().optional(),
    status: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/transfer/query-inter-transfer-list", input);
  },
};
