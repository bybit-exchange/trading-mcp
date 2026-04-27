// queryWithdrawRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const queryWithdrawRecords = {
  name: 'queryWithdrawRecords',
  description: "Query withdrawal records.\n- Master UID API key only.\n- Max 30-day range per query. If `startTime` and `endTime` are not provided, defaults to the last 30 days.\n- `endTime - startTime` must be less than 30 days.\n- Business rules :\n  - Uses read replica by default\n  - withdrawType=0 returns on-chain withdrawal records (includes web3, batch release, AML and other internal types, all mapped to 0)\n  - withdrawType=1 returns internal transfer records\n  - withdrawType=2 returns all records\n  - AML custody wallet liquidation records (type 1040) will replace txID, toAddress, tag fields with liquidation info\n  - Records pending manual review requiring material submission will show status as \"MoreInformationRequired\"",
  inputSchema: z.object({
    withdrawID: z.string().optional(),
    txID: z.string().optional(),
    coin: z.string().optional(),
    withdrawType: z.enum(["0", "1", "2"]).default("0").optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/withdraw/query-record", input);
  },
};
