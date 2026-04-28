// getDistributionRecord.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getDistributionRecord = {
  name: 'getDistributionRecord',
  description: "Query voucher distribution records for a specified user, including claim status, validity period, consumed amount, etc.\n\n**Rate Limit:** 50 req/s",
  inputSchema: z.object({
    accountId: z.string(),
    awardId: z.string(),
    specCode: z.string(),
    withUsedAmount: z.boolean().default(false).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/broker/award/distribution-record", input);
  },
};
