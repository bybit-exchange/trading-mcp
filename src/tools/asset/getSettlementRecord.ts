// getSettlementRecord.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSettlementRecord = {
  name: 'getSettlementRecord',
  description: "Query session settlement records of USDC perpetual contracts.\n- Unified account covers: USDC contract (linear)\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 30 days by default\n- Only `startTime` provided: returns from startTime to startTime + 30 days\n- Only `endTime` provided: returns from endTime - 30 days to endTime\n- Both provided: endTime - startTime must be ≤ 30 days\n\n**Note:** During periods of extreme market volatility, this interface may experience increased latency or temporary delays in data delivery.",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/settlement-record", input);
  },
};
