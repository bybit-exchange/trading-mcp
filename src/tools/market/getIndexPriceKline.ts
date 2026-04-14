// getIndexPriceKline.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getIndexPriceKline = {
  name: 'getIndexPriceKline',
  description: "Query historical index price klines derived from the composite spot price across multiple exchanges.\n\nUse this endpoint when you need to:\n- Analyze historical index price movements for research or backtesting\n- Compare index price vs mark price to understand basis spread over time\n- Build charts of the underlying spot market price reference used by Bybit\n\n**Supported Products:** USDT contract, USDC contract, Inverse contract\n\nEach kline entry is a 5-element array: `[startTime, open, high, low, close]`.\nData is returned in reverse chronological order (most recent first).\n\n**Do not use** this endpoint for trading price candles — use `getMarketKline` instead.\n**Do not use** this endpoint for mark price candles — use `getMarkPriceKline` instead.\n\n**Notes:**\n- Data is returned in reverse chronological order (most recent first)\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical index price candles (composite spot price reference).\nFor regular OHLCV trading price candles use getMarketKline.\nFor mark price candles use getMarkPriceKline.\nFor premium index (funding basis) candles use getPremiumIndexPriceKline.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]).default("linear").optional(),
    symbol: z.string(),
    interval: z.enum(["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "W", "M"]),
    start: z.number().int().optional(),
    end: z.number().int().optional(),
    limit: z.number().int().min(1).max(1000).default(200).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/index-price-kline", input);
  },
};
