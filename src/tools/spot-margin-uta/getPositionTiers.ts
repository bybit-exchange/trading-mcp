// getPositionTiers.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPositionTiers = {
  name: 'getPositionTiers',
  description: "Query position tier data for spot margin trading.\n- Returns tier information including borrow limits, margin rates, and max leverage.\n- If `currency` is omitted, returns data for all configured coins.\n- Tiers are ordered from small to large.\n\nAgent hint: Authenticated endpoint. Returns position tier information per coin for spot margin. Each tier includes borrowLimit, positionMMR (maintenance margin rate), positionIMR (initial margin rate), and maxLeverage. Pass `currency` to filter for a specific coin, or omit to get all coins. Margin rates use 8 decimal precision.",
  inputSchema: z.object({
    currency: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/position-tiers", input);
  },
};
