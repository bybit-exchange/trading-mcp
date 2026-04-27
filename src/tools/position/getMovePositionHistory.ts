// getMovePositionHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMovePositionHistory = {
  name: 'getMovePositionHistory',
  description: "Query the history of position move (block trade) orders.\nReturns order details, execution status, fees, and rejection info.\n\nAgent hint: Use this to check status and history of move position requests. Filter by category, symbol, status, or blockTradeId.\nMax 7-day range per query. Each record shows maker/taker side, execution details, and result codes.\nstatus=Processing means still executing; Filled means complete; Rejected means failed.",
  inputSchema: z.object({
    category: z.enum(["linear", "spot", "option", "inverse"]).optional(),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    status: z.enum(["Processing", "Filled", "Rejected"]).optional(),
    blockTradeId: z.string().optional(),
    limit: z.string().default("20").optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/move-history", input);
  },
};
