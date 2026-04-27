// SmallAssetConvert.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const SmallAssetConvert = {
  name: 'SmallAssetConvert',
  description: "Confirm and execute small asset conversion using the quoteId returned by the get-quote interface.\nThe exchange is async; check final status via the Get Exchange History endpoint.\n- API key permission: Convert\n- Rate limit: 5/s\n- Load balancing: consistent hash strategy",
  inputSchema: z.object({
    quoteId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/asset/covert/small-balance-execute", input);
  },
};
