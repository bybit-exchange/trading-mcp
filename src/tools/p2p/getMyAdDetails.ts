// getMyAdDetails.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMyAdDetails = {
  name: 'getMyAdDetails',
  description: "Get details of a specific P2P advertisement.",
  inputSchema: z.object({
    itemId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/item/info", input);
  },
};
