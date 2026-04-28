// getMyAds.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMyAds = {
  name: 'getMyAds',
  description: "Get the list of my P2P advertisements.",
  inputSchema: z.object({
    itemId: z.string().optional(),
    status: z.string().optional(),
    side: z.string().optional(),
    tokenId: z.string().optional(),
    page: z.string().optional(),
    size: z.string().optional(),
    currencyId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/p2p/item/personal/list", input);
  },
};
