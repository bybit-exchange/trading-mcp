// queryTradeHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryTradeHistory = {
  name: 'queryTradeHistory',
  description: "Query historical trade records with pagination support.\n\n**Query Parameters:**\n- Time range filtering supported\n- Pagination support\n- Maximum 100 records per page\n\nResults are sorted by creation time in descending order (newest first).\n\n**Use Cases:**\n- Generate trade reports for users\n- Reconciliation and auditing\n- Export trade history for accounting",
  inputSchema: z.object({
    index: z.number().int().min(1).default(1).optional(),
    limit: z.number().int().min(1).max(100).default(20).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fiat/query-trade-history", input);
  },
};
