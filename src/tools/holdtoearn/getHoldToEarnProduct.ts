// getHoldToEarnProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getHoldToEarnProduct = {
  name: 'getHoldToEarnProduct',
  description: "Query available Hold-to-Earn product listings.\nNo authentication required.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/hold-to-earn/product", input);
  },
};
