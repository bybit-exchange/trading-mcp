// getClosedPnl.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getClosedPnl = {
  name: 'getClosedPnl',
  description: "Query closed PnL records for the current user. Results include entry/exit prices,\nfees, leverage, and realized PnL for each closed position.\n\nAgent hint: Use this to retrieve historical closed position PnL. Supports up to 730 days of data.\nMax 7-day range per query. Results are sorted newest first. Use cursor for pagination.\nEach record includes entry/exit prices, PnL, fees, and leverage.",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/closed-pnl", input);
  },
};
