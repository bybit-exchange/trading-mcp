// getMarkPriceKline.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMarkPriceKline = {
  name: 'getMarkPriceKline',
  description: "Query historical mark price klines used for margin and liquidation calculations in derivative contracts.\n\nUse this endpoint when you need to:\n- Analyze historical mark price movements for risk management or backtesting\n- Chart mark price candles alongside trading price candles for comparison\n- Understand liquidation risk over time based on mark price history\n\n**Supported Products:** USDT contract, USDC contract, Inverse contract\n\nEach kline entry is a 5-element array: `[startTime, open, high, low, close]`.\nData is returned in reverse chronological order (most recent first).\n\n**Do not use** this endpoint for regular trading price candles — use `getMarketKline` instead.\n**Do not use** this endpoint for index price candles — use `getIndexPriceKline` instead.\n\n**Notes:**\n- Data is returned in reverse chronological order (most recent first)\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical mark price candles for contracts.\nMark price is used for margin requirements and liquidation — it differs from the trading price.\nFor regular OHLCV trading price candles use getMarketKline.\nFor index price candles use getIndexPriceKline.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]).default("linear").optional(),
    symbol: z.string(),
    interval: z.enum(["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "W", "M"]),
    start: z.number().int().optional(),
    end: z.number().int().optional(),
    limit: z.number().int().min(1).max(1000).default(200).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/mark-price-kline", input);
  },
};
