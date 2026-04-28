// SmallAssetQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const SmallAssetQuote = {
  name: 'SmallAssetQuote',
  description: "Apply for batch conversion quote for a small asset list. Returns quote ID and per-coin conversion details.\n- API key permission: Convert\n- Rate limit: 5/s\n- Only supports Unified wallet (eb_convert_uta)\n- Up to 20 coins per transaction\n- Custody accounts (e.g. Copper, Fireblock) are not supported\n- Actual executed amounts may be less than available balance in UTA\n- Load balancing: consistent hash strategy",
  inputSchema: z.object({
    accountType: z.string(),
    toCoin: z.string(),
    fromCoinList: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/asset/covert/get-quote", input);
  },
};
