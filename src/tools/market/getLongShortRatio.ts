// getLongShortRatio.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getLongShortRatio = {
  name: 'getLongShortRatio',
  description: "Query the net long and short position ratios as percentages of all position holders,\nused as a market sentiment indicator for derivatives markets.\n\nUse this endpoint when you need to:\n- Measure market sentiment by comparing long vs short position holder ratios\n- Track changes in long/short ratio over time as a contrarian or trend-following signal\n- Analyze historical sentiment data at intervals from 5min to 1d\n\n**Supported Products:** USDT contract, Inverse contract\n\n**Calculation:**\n- `buyRatio` = Number of long position holders / Total position holders\n- `sellRatio` = Number of short position holders / Total position holders\n\nRequired parameters: `category`, `symbol`, and `period`.\nSupports cursor-based pagination via `nextPageCursor`.\n\n**Notes:**\n- Supports cursor-based pagination\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve long/short ratio sentiment data for a derivatives symbol.\nRequired parameters: category, symbol, and period (5min/15min/30min/1h/4h/1d).\nUse startTime and endTime (milliseconds) to query a specific time range.\nFor pagination, pass nextPageCursor from the previous response into the cursor parameter.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    period: z.enum(["5min", "15min", "30min", "1h", "4h", "1d"]),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    limit: z.number().int().min(1).max(500).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/account-ratio", input);
  },
};
