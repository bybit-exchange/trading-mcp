// getAds.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAds = {
  name: 'getAds',
  description: "Get online P2P advertisements.",
  inputSchema: z.object({
    tokenId: z.string(),
    currencyId: z.string(),
    side: z.enum(["0", "1"]),
    page: z.string().optional(),
    size: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const result = await restClient.postAuth("/v5/p2p/item/online", input) as any;
        result?.result?.items?.forEach((item: any) => { delete item.remark; });
    return result;
  },
};
