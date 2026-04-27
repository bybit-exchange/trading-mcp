// QuoteApply.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const QuoteApply = {
  name: 'QuoteApply',
  description: "Apply for a conversion quote via OpenAPI, get conversion rate and quote ID.\n- OpenAPI interface, requires API Key authentication\n- ACL permission: RESOURCE_GROUP_EXCHANGE_HISTORY + PERMISSION_WRITE\n- Rate limit: 5/user/s, 200/path/s globally\n- Requires KYC verification",
  inputSchema: z.object({
    requestId: z.string().optional(),
    accountType: z.string(),
    fromCoin: z.string(),
    fromCoinType: z.string().default("crypto").optional(),
    toCoin: z.string(),
    toCoinType: z.string().default("crypto").optional(),
    requestAmount: z.string(),
    requestCoin: z.string(),
    paramType: z.string().optional(),
    paramValue: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/asset/exchange/quote-apply", input);
  },
};
