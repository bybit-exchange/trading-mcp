// querySubMemberDepositRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const querySubMemberDepositRecords = {
  name: 'querySubMemberDepositRecords',
  description: "Query on-chain deposit records for a sub-account using the **main** UID API key.\n- Time range (`endTime` - `startTime`) must be under **30 days**; defaults to last 30 days\n- `subMemberId` is **required**\n- Validates parent-child relationship between master and sub accounts",
  inputSchema: z.object({
    id: z.string().optional(),
    txID: z.string().optional(),
    subMemberId: z.string(),
    coin: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/deposit/query-sub-member-record", input);
  },
};
