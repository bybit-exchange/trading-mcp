// getDeliveryRecord.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getDeliveryRecord = {
  name: 'getDeliveryRecord',
  description: "Query delivery records of USDC futures, Inverse futures, and Options.\n- Unified account covers: USDT futures / USDC contract / Inverse futures / Options\n- Classic account covers: Inverse futures\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 30 days by default\n- Only `startTime` provided: returns from startTime to startTime + 30 days\n- Only `endTime` provided: returns from endTime - 30 days to endTime\n- Both provided: endTime - startTime must be ≤ 30 days",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    expDate: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/delivery-record", input);
  },
};
