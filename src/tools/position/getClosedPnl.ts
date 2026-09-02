// getClosedPnl.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getClosedPnl = {
  name: 'getClosedPnl',
  description: "Query user's closed profit and loss records. The results are sorted by `createdTime` in descending order.\n- Unified account covers: USDT perpetual / USDC contract\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 7 days by default\n- Only `startTime` provided: returns from startTime to startTime + 7 days\n- Only `endTime` provided: returns from endTime - 7 days to endTime\n- Both provided: endTime - startTime must be <= 7 days\n\n**Data retention:** Up to 2 years",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/closed-pnl", input);
  },
};
