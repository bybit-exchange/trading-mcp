// getSpreadOrderbook.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadOrderbook = {
  name: 'getSpreadOrderbook',
  description: "Retrieve spread orderbook depth data for a specific spread combination symbol.\nReturns a snapshot of bid and ask price levels, along with sequence and timestamp\nfields for correlation with WebSocket streams.\n\nUse this endpoint when you need to:\n- Inspect current bid/ask depth before placing a spread order\n- Fetch the best bid/ask price and available size at each level\n- Correlate with the WebSocket orderbook stream using the `u` (update ID) field\n\nReturns up to 25 price levels per side. Use `limit=1` (default) for best bid/ask only;\nincrease `limit` for deeper analysis.\n\n**Do not use** this endpoint for 24h stats or last traded price — use `getSpreadTickers` instead.\n\n**Notes:**\n- Bids are sorted in descending order by price\n- Asks are sorted in ascending order by price\n- The `u` field correlates with the WebSocket orderbook stream update ID\n- No authentication required\n\nAgent hint: Use this endpoint to get current bid/ask depth for a spread symbol.\nThe `symbol` must be a valid spread combination — obtain it from getSpreadInstrumentsInfo if unknown.\nUse `limit=1` (default) for best bid/ask only; increase `limit` for deeper order book analysis.\nDo not use this for 24h stats or last price — use getSpreadTickers for that.",
  inputSchema: z.object({
    symbol: z.string(),
    limit: z.number().int().min(1).max(25).default(1).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spread/orderbook", input);
  },
};
