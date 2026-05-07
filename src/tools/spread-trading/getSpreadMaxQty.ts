// getSpreadMaxQty.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadMaxQty = {
  name: 'getSpreadMaxQty',
  description: "Query the spread wallet available balance for a given symbol and side.\n\n**Notes:**\n- This endpoint requires authentication.\n- The returned available balance (`ab`) is truncated to 8 decimal places (not rounded).\n- Maps internally to `/siteapi/unified/private/spread-walletbalance`.",
  inputSchema: z.object({
    symbol: z.string(),
    side: z.enum(["1", "2"]),
    orderPrice: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/max-qty", input);
  },
};
