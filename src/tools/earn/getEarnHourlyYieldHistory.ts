// getEarnHourlyYieldHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getEarnHourlyYieldHistory = {
  name: 'getEarnHourlyYieldHistory',
  description: "Query hourly yield details. Only supports `FlexibleSaving`.\n- Maximum query range is 7 days",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving"]),
    productId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/hourly-yield", input);
  },
};
