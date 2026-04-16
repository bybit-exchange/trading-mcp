// getTransactionLog.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTransactionLog = {
  name: 'getTransactionLog',
  description: "Query unified account wallet transaction logs. Supports filtering by category,\ncurrency, transaction type, and time range. Returns up to 2 years of historical data.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to retrieve detailed wallet transaction history. Filter by category\n(spot/linear/option/inverse), currency, or type. Time range defaults to last 24h.\nMax 7-day span when both startTime and endTime are given. Use cursor for pagination.\nLimit max is 50 per page.",
  inputSchema: z.object({
    accountType: z.enum(["UNIFIED"]).optional(),
    category: z.enum(["spot", "linear", "option", "inverse"]).optional(),
    currency: z.string().optional(),
    baseCoin: z.string().optional(),
    type: z.string().optional(),
    transSubType: z.enum(["movePosition"]).optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/transaction-log", input);
  },
};
