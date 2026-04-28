// getEarnPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getEarnPosition = {
  name: 'getEarnPosition',
  description: "Query current staked position information.\n- Flexible saving yield is accumulated hourly and distributed daily at UTC 00:30",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    productId: z.string().optional(),
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/position", input);
  },
};
