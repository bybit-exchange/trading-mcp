// getEarnAprHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getEarnAprHistory = {
  name: 'getEarnAprHistory',
  description: "Query historical daily APR for a product. Supports `FlexibleSaving` and `OnChain`.\n\n**FlexibleSaving:** Returns hourly APR records.\n\n**OnChain:** Returns daily APR records.\n\nResults are returned in **descending** order by date/time. Maximum query range is 182 days.\n\nAuthentication is optional (public endpoint).",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    productId: z.string(),
    startTime: z.number().int(),
    endTime: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/apr-history", input);
  },
};
