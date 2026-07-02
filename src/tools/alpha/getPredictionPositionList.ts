// getPredictionPositionList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionPositionList = {
  name: 'getPredictionPositionList',
  description: "Query the authenticated user's current open prediction positions.\nReturns positions that have not yet been resolved.\n\nEach position includes the number of shares held, current market value,\nunrealized P&L, and the associated event information.\n\nAI agent should call this before placing a sell order to confirm\nthe user holds sufficient shares, and to display the current portfolio.\n\nAgent hint: Use this to check what positions the user currently holds before selling.\nShows open (unresolved) positions only. For historical positions, use getPredictionPositionHistory.\nEach position has a tokenId — use it in sell orders.\nCheck availableSize before selling to ensure the user has enough shares.",
  inputSchema: z.object({
    limit: z.number().int().optional(),
    pageIndex: z.number().int().optional(),
    direction: z.enum(["prev", "next"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/position-list", input);
  },
};
