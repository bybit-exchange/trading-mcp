// getMarketKline.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMarketKline = {
  name: 'getMarketKline',
  description: "Query historical klines (OHLCV candlestick data) including open, high, low, close, volume, and turnover.\n\nUse this endpoint when you need to:\n- Build price charts with open/high/low/close/volume/turnover data\n- Perform technical analysis on historical market prices\n- Retrieve data for a specific time range using `start` and `end` parameters\n\n**Supported Products:** Spot, USDT contract, USDC contract, Inverse contract\n\nEach kline entry is a 7-element array: `[startTime, open, high, low, close, volume, turnover]`.\nData is returned in reverse chronological order (most recent first). Returns up to 1000 records per request.\n\n**Do not use** this endpoint for mark price candles — use `getMarkPriceKline` instead.\n**Do not use** this endpoint for index price candles — use `getIndexPriceKline` instead.\n\n**Notes:**\n- Data is returned in reverse chronological order (most recent first)\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve OHLCV candlestick data for charting or technical analysis.\nProvide start and end timestamps (milliseconds) to query a specific time range.\nFor mark price candles use getMarkPriceKline; for index price candles use getIndexPriceKline.\nFor premium index (funding basis) candles use getPremiumIndexPriceKline.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse"]).default("linear").optional(),
    symbol: z.string(),
    interval: z.enum(["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "W", "M"]),
    start: z.number().int().optional(),
    end: z.number().int().optional(),
    limit: z.number().int().min(1).max(1000).default(200).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/kline", input);
  },
};
