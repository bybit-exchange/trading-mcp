// removeAd.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const removeAd = {
  name: 'removeAd',
  description: "Cancel/remove a P2P advertisement.",
  inputSchema: z.object({
    itemId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/item/cancel", input);
  },
};
