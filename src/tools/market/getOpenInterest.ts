// getOpenInterest.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOpenInterest = {
  name: 'getOpenInterest',
  description: "Query historical open interest data for derivative contracts at specified time intervals.\nReturns the total outstanding position size across all market participants.\n\nUse this endpoint when you need to:\n- Track changes in open interest over time as a market sentiment indicator\n- Analyze open interest trends relative to price movements for research\n- Retrieve open interest time series at intervals of 5min, 15min, 30min, 1h, 4h, or 1d\n\n**Supported Products:** USDT contract, USDC contract, Inverse contract\n\nSupports cursor-based pagination via `nextPageCursor`.\n\n**Do not use** this endpoint for current open interest — use `getTickers` which includes\n`openInterest` and `openInterestValue` in real-time.\n\n**Notes:**\n- Data may experience increased latency during extreme market volatility\n- Supports cursor-based pagination\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical open interest time series data.\nRequired parameters: category, symbol, and intervalTime (5min/15min/30min/1h/4h/1d).\nFor current open interest value, use getTickers which includes openInterest in real-time.\nFor pagination, pass nextPageCursor from the previous response into the cursor parameter.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    intervalTime: z.enum(["5min", "15min", "30min", "1h", "4h", "1d"]),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(200).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/open-interest", input);
  },
};
