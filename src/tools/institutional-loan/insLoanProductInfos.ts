// insLoanProductInfos.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const insLoanProductInfos = {
  name: 'insLoanProductInfos',
  description: "Get institutional loan product information including leverage, risk lines, and trading pair whitelists.\n\n**Rules:**\n- Public endpoint, allows guest access\n- Optional productId filter; if omitted, returns all products\n- Rate limit: 100 requests/s per path\n\n**Service:** margin-server-web",
  inputSchema: z.object({
    productId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/ins-loan/product-infos", input);
  },
};
