// universalTransferListQuery.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const universalTransferListQuery = {
  name: 'universalTransferListQuery',
  description: "Query universal transfer records. Supports both master and sub account API keys.\n- Master API key: can query sub-sub, parent-sub, and sub-parent records where master is the operator\n- Sub account API key: can only query records where the sub account is a sender or receiver\n**Time range rules:**\n- No time params:  last 30 days",
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
    return restClient.getAuth("/v5/asset/transfer/query-universal-transfer-list", input);
  },
};
