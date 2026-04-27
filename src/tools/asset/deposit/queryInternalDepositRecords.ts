// queryInternalDepositRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const queryInternalDepositRecords = {
  name: 'queryInternalDepositRecords',
  description: "Query deposit records occurring **within the Bybit platform** (not on blockchain).\n- Accessible via **Master or Sub Member** API Key\n- Max **30-day** window between start/end times; defaults to last 30 days\n- `status` field filters: `0` = all, `1` = Processing, `2` = Success, `3` = Failed",
  inputSchema: z.object({
    txID: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    coin: z.string().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(50).optional(),
    status: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/deposit/query-internal-record", input);
  },
};
