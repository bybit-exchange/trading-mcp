// getTickers.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTickers = {
  name: 'getTickers',
  description: "Retrieve the latest price snapshot, best bid/ask price, and 24-hour trading statistics\nacross all supported product types.\n\nUse this endpoint when you need to:\n- Get the current last traded price (`lastPrice`) for a symbol\n- Retrieve best bid/ask price (`bid1Price`, `ask1Price`) and size at level 1\n- Access 24-hour high/low prices, volume, and turnover statistics\n- For options: retrieve implied volatility (`bid1Iv`, `ask1Iv`, `markIv`) and Greeks\n\n**Supported Products:** Spot, USDT contract, USDC contract, Inverse contract, Option\n\nResponse fields differ per `category`. For `option`, either `symbol` or `baseCoin` must be provided.\n\n**Do not use** this endpoint for multi-level orderbook depth — use `getOrderbook` instead.\n**Do not use** this endpoint for historical price data — use `getMarketKline` instead.\n\n**Notes:**\n- Response fields differ per `category`; see schema definitions for details\n- For `option`: either `symbol` or `baseCoin` must be provided\n- No authentication required\n\nAgent hint: Use this endpoint when the user asks about current price, 24h stats, or best bid/ask for any symbol.\nResponse fields vary by category — spot, linear/inverse, and option each return different fields.\nFor options, query by baseCoin to get all option tickers for a given underlying asset.\nFor multi-level depth use getOrderbook; for historical candles use getMarketKline.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    expDate: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/tickers", input);
  },
};
