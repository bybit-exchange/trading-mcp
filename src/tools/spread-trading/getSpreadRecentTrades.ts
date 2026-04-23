// getSpreadRecentTrades.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadRecentTrades = {
  name: 'getSpreadRecentTrades',
  description: "Query recent public spread trading history for a specific spread combination symbol.\nReturns execution records including price, quantity, taker direction, timestamp, and\ncross sequence number.\n\nUse this endpoint when you need to:\n- Inspect recent trade flow and execution prices for a spread symbol\n- Retrieve trade records for display or analysis purposes\n- Correlate trades with other data streams using the `seq` (cross sequence) field\n\nReturns up to 1000 records sorted in reverse chronological order (most recent first).\n\n**Do not use** this endpoint for current best bid/ask or 24h stats — use `getSpreadTickers` instead.\n**Do not use** this endpoint for order book depth — use `getSpreadOrderbook` instead.\n\n**Notes:**\n- Records are returned most recent first\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve recent public execution history for a spread symbol.\nThe `symbol` parameter is required — obtain valid symbols from getSpreadInstrumentsInfo if unknown.\nFor current price or 24h stats, use getSpreadTickers instead.\nFor current bid/ask depth, use getSpreadOrderbook instead.",
  inputSchema: z.object({
    symbol: z.string(),
    limit: z.number().int().min(1).max(1000).default(500).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spread/recent-trade", input);
  },
};
