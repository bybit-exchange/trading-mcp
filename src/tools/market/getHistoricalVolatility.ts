// getHistoricalVolatility.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getHistoricalVolatility = {
  name: 'getHistoricalVolatility',
  description: "Query historical implied volatility data for options with hourly granularity.\nReturns the Bybit-calculated historical volatility index for the specified base coin.\n\nUse this endpoint when you need to:\n- Research historical implied volatility trends for options trading or risk management\n- Compare volatility across different averaging periods (e.g., 7-day vs 30-day)\n- Retrieve up to 2 years of hourly volatility data for backtesting or analysis\n\n**Supported Products:** Option only\n\n`startTime` and `endTime` must be provided together or both omitted (defaults to most recent 1 hour).\nMaximum query range per request is 30 days.\n\n**Do not use** this endpoint for current implied volatility — use `getTickers` with `category=option`\nwhich includes `markIv`, `bid1Iv`, and `ask1Iv` for specific contracts.\n\n**Notes:**\n- Returns the most recent 1 hour of data by default\n- Maximum query range per request is 30 days\n- `startTime` and `endTime` must be provided together or omitted together\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical implied volatility for options (hourly granularity).\ncategory must be \"option\". baseCoin defaults to BTC if omitted.\nFor current implied volatility of specific contracts, use getTickers with category=option.\nstartTime and endTime must both be provided or both omitted; maximum range is 30 days per request.",
  inputSchema: z.object({
    category: z.enum(["option"]),
    baseCoin: z.string().optional(),
    quoteCoin: z.enum(["USD", "USDT"]).optional(),
    period: z.number().int().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/historical-volatility", input);
  },
};
