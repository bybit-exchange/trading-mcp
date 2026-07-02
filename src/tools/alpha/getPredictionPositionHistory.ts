// getPredictionPositionHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionPositionHistory = {
  name: 'getPredictionPositionHistory',
  description: "Query the authenticated user's historical prediction positions that have been\nclosed (either by manual sell, market resolution, or expiry).\n\nReturns realized P&L and final outcome for each closed position.\n\nAI agent can use this to summarize the user's prediction trading performance.\n\nAgent hint: Use this to see the user's closed prediction position history and realized P&L.\nFor current open positions, use getPredictionPositionList instead.\nresult shows WIN/LOSE/MANUAL_CLOSE and the amount won or lost.",
  inputSchema: z.object({
    limit: z.number().int().optional(),
    pageIndex: z.number().int().optional(),
    direction: z.enum(["prev", "next"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/position-history", input);
  },
};
