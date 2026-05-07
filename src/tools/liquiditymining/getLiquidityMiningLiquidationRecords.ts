// getLiquidityMiningLiquidationRecords.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLiquidityMiningLiquidationRecords = {
  name: 'getLiquidityMiningLiquidationRecords',
  description: "Query liquidation records for Liquidity Mining positions with cursor-based pagination.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    baseCoin: z.string().optional(),
    quoteCoin: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/liquidity-mining/liquidation-records", input);
  },
};
