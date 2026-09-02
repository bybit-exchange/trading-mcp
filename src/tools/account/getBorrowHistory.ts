// getBorrowHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getBorrowHistory = {
  name: 'getBorrowHistory',
  description: "Get interest records, sorted in reverse order of creation time. Supports up to 2 years of data.\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 30 days by default\n- Only `startTime` provided: returns from startTime to startTime + 30 days\n- Only `endTime` provided: returns from endTime - 30 days to endTime\n- Both provided: endTime - startTime must be ≤ 30 days",
  inputSchema: z.object({
    currency: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/borrow-history", input);
  },
};
