// getPremiumIndexPriceKline.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPremiumIndexPriceKline = {
  name: 'getPremiumIndexPriceKline',
  description: "Query historical premium index price klines, representing the basis between mark price and index price\nused in funding rate calculations for USDT and USDC perpetual contracts.\n\nUse this endpoint when you need to:\n- Analyze historical funding rate basis for perpetual contracts\n- Research the relationship between mark price and index price over time\n- Build charts of the premium index (values are typically small positive or negative decimals)\n\n**Supported Products:** USDT perpetual, USDC perpetual\n\nEach kline entry is a 5-element array: `[startTime, open, high, low, close]`.\nData is returned in reverse chronological order (most recent first).\n\n**Do not use** this endpoint for trading/mark/index price candles — use the respective kline endpoints.\n\n**Notes:**\n- Data is returned in reverse chronological order (most recent first)\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical premium index candles used in funding rate calculation.\nThe premium index represents the spread between mark price and index price.\nFor trading price candles use getMarketKline; for mark price use getMarkPriceKline; for index price use getIndexPriceKline.",
  inputSchema: z.object({
    category: z.enum(["linear"]).default("linear").optional(),
    symbol: z.string(),
    interval: z.enum(["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "W", "M"]),
    start: z.number().int().optional(),
    end: z.number().int().optional(),
    limit: z.number().int().min(1).max(1000).default(200).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/premium-index-price-kline", input);
  },
};
