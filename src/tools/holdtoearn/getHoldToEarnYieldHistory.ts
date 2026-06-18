// getHoldToEarnYieldHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getHoldToEarnYieldHistory = {
  name: 'getHoldToEarnYieldHistory',
  description: "Query personal yield distribution history for Hold-to-Earn products.\nRequires **Earn** permission on the API key.\n\nResults are sorted by distribution date newest first.\n\n**Pagination:** Cursor-based. Omit `cursor` on the first request;\npass the `nextCursor` from the previous response for subsequent pages.\nAn empty `nextCursor` in the response indicates the last page.",
  inputSchema: z.object({
    timeStart: z.number().int().optional(),
    timeEnd: z.number().int().optional(),
    limit: z.number().int().min(1).max(49).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/hold-to-earn/yield-history", input);
  },
};
