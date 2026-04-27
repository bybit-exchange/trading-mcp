// getAwardInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAwardInfo = {
  name: 'getAwardInfo',
  description: "Get basic information of a specified voucher, including coin, denomination unit, product line, total amount, and distributed amount.\n\n**Rate Limit:** 50 req/s",
  inputSchema: z.object({
    id: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/broker/award/info", input);
  },
};
