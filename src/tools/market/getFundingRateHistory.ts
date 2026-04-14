// getFundingRateHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFundingRateHistory = {
  name: 'getFundingRateHistory',
  description: "Query historical funding rate records for perpetual contracts.\nEach symbol has a different funding settlement interval (typically every 4 or 8 hours).\n\nUse this endpoint when you need to:\n- Analyze historical funding rate trends for a specific perpetual contract\n- Calculate total funding cost or income for a position over a time period\n- Compare funding rates across different symbols or time periods\n\n**Supported Products:** USDT contract, Inverse contract\n\nRecords are sorted in reverse chronological order. Use `startTime` and `endTime`\n(milliseconds) to filter a specific time range.\n\n**Do not use** this endpoint for the current funding rate — use `getTickers` which includes\n`fundingRate` and `nextFundingTime` in its response.\n\n**Notes:**\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve historical funding rates for a perpetual contract.\nBoth category and symbol are required parameters.\nProvide startTime and endTime (milliseconds) to narrow the time range.\nFor the current funding rate and next funding time, use getTickers instead.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(200).default(200).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/funding/history", input);
  },
};
