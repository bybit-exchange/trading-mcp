// getBorrowHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getBorrowHistory = {
  name: 'getBorrowHistory',
  description: "Query interest and borrowing records for the unified account. Supports filtering\nby currency and time range with pagination.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to review borrowing costs and interest history. Filter by currency\n(USDC, USDT, BTC, ETH). Default returns 30 days if no time range is specified.\nMax 30-day span. Use cursor for pagination, limit max 50 per page.",
  inputSchema: z.object({
    currency: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/borrow-history", input);
  },
};
