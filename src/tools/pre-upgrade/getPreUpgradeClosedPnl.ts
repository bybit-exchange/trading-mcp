// getPreUpgradeClosedPnl.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPreUpgradeClosedPnl = {
  name: 'getPreUpgradeClosedPnl',
  description: "Query closed PnL records from the classic account before upgrading to unified account.\n\n- Max time span between `startTime` and `endTime` is 7 days\n- If both time params omitted, returns last 7 days\n- Results include entry/exit prices, fees, leverage, and realized PnL\n\nAgent hint: Use this endpoint to query closed position PnL from classic account before unified account upgrade.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/pre-upgrade/position/closed-pnl", input);
  },
};
