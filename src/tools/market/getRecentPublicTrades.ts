// getRecentPublicTrades.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRecentPublicTrades = {
  name: 'getRecentPublicTrades',
  description: "Query recent public trading history for a symbol, returning execution records with\nprice, size, taker direction, timestamp, and sequence number.\n\nUse this endpoint when you need to:\n- Inspect recent trade flow and execution prices for a symbol\n- Retrieve trade records for display or analysis purposes\n- Correlate trades with orderbook data using the `seq` (cross sequence) field\n\n**Supported Products:** Spot, USDT contract, USDC contract, Inverse contract, Option\n\nReturns up to 1000 records (spot: up to 60) in reverse chronological order.\n`symbol` is required for `spot`, `linear`, and `inverse`. For `option`, `baseCoin` defaults to `BTC`.\n\n**Do not use** this endpoint for current price or 24h stats — use `getTickers` instead.\n**Do not use** this endpoint for orderbook depth — use `getOrderbook` instead.\n\n**Notes:**\n- `symbol` is required for `spot`, `linear`, and `inverse` categories\n- For `option`, `baseCoin` defaults to `BTC` if not provided\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve recent public trade execution history for a symbol.\nFor current price or 24h stats, use getTickers instead.\nFor current bid/ask depth, use getOrderbook instead.\nSymbol is required for spot/linear/inverse; for option queries, use the baseCoin parameter.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    optionType: z.enum(["Call", "Put"]).optional(),
    limit: z.number().int().min(1).max(1000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/recent-trade", input);
  },
};
