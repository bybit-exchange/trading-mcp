// getClosePosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getClosePosition = {
  name: 'getClosePosition',
  description: "Query closed option position data including entry/exit prices, fees, delivery details, and realized PnL.\nOnly applicable to option contracts.\n\nAgent hint: Use this to retrieve closed option positions. Only category=option is supported.\nDefault time range is 24 hours. Max range per query is 7 days. Supports up to 6 months of history.\nReturns entry/exit prices, delivery info, fees, and realized PnL.",
  inputSchema: z.object({
    category: z.enum(["option"]),
    symbol: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/get-closed-positions", input);
  },
};
