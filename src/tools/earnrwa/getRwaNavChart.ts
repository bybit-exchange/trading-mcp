// getRwaNavChart.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRwaNavChart = {
  name: 'getRwaNavChart',
  description: "Query historical NAV (Net Asset Value) data points for an RWA product.\n\n**Rate Limit:** 20 req/s (IP)\n\nNo authentication required.\n\n**Notes:**\n- `startTime` defaults to 7 days before `endTime`.\n- `endTime` defaults to current time.\n- Time span (`endTime - startTime`) must not exceed 180 days.",
  inputSchema: z.object({
    productId: z.number().int(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
  }).refine(
    (d) => d.startTime === undefined || d.endTime === undefined || (d.endTime - d.startTime) <= 15_552_000_000,
    { message: 'endTime - startTime must not exceed 180 days' }
  ),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/rwa/nav-chart", input);
  },
};
