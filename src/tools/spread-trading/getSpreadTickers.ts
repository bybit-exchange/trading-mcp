// getSpreadTickers.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadTickers = {
  name: 'getSpreadTickers',
  description: "Retrieve the latest price snapshot, best bid/ask price, and 24-hour trading\nstatistics for a spread combination symbol.\n\nUse this endpoint when you need to:\n- Get the latest traded price (`lastPrice`) of a spread symbol\n- Check 24-hour high/low price range and total trading volume\n- Retrieve best bid/ask price and size at level 1\n\nReturns a list containing one ticker object for the requested symbol.\n\n**Do not use** this endpoint for multi-level order book depth — use `getSpreadOrderbook` instead.\n**Do not use** this endpoint for recent trade execution history — use `getSpreadRecentTrades` instead.\n\n**Notes:**\n- Response may have latency during periods of high market volatility\n- No authentication required\n\nAgent hint: Use this endpoint when the user asks about current price, 24h stats, or best bid/ask for a spread symbol.\nThe `symbol` parameter is required — obtain valid symbols from getSpreadInstrumentsInfo if unknown.\nFor multi-level order book depth, use getSpreadOrderbook instead.\nFor recent trade execution history, use getSpreadRecentTrades instead.",
  inputSchema: z.object({
    symbol: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spread/tickers", input);
  },
};
