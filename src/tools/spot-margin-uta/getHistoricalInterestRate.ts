// getHistoricalInterestRate.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getHistoricalInterestRate = {
  name: 'getHistoricalInterestRate',
  description: "Query historical borrowing interest rate data for UTA spot margin.\n- Requires API key with **Spot** permission.\n- `startTime` and `endTime` must be provided together. Maximum span is 30 days.\n- If both are omitted, defaults to the last 7 days.\n- Data available for up to 6 months.\n\nAgent hint: Authenticated endpoint (Spot permission required). Returns historical hourly borrow rates for a specific coin and VIP level. The `currency` parameter is required. If `vipLevel` is omitted, uses the account's current VIP level. startTime/endTime must be used together (max 30-day window); if omitted, defaults to last 7 days. Note: \"No VIP\" must be URL-encoded as \"No%20VIP\".",
  inputSchema: z.object({
    currency: z.string(),
    vipLevel: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/interest-rate-history", input);
  },
};
