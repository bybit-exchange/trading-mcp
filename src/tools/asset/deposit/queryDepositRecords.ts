// queryDepositRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const queryDepositRecords = {
  name: 'queryDepositRecords',
  description: "Query on-chain deposit records\n- Supports both **main** and **sub** UID API keys\n- Time range (`endTime` - `startTime`) must be under **30 days**; defaults to last 30 days\n- `startTime` / `endTime` are millisecond timestamps but effective at second-level granularity\n- When `id` is provided, it takes highest priority over other filter params\n- `txID` only works for data from **Jan 1, 2024** onward",
  inputSchema: z.object({
    id: z.string().optional(),
    txID: z.string().optional(),
    coin: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/deposit/query-record", input);
  },
};
