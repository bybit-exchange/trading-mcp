// getRfqsRealtime.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRfqsRealtime = {
  name: 'getRfqsRealtime',
  description: "Query RFQs in real-time from the RFQ engine. Returns all non-final RFQs sorted\nin descending order by `createdAt`.\n\nIf both `rfqId` and `rfqLinkId` are provided, only `rfqId` is considered.\nThe `rfqLinkId` parameter is invalid when `traderType` is \"quote\".\n\n**Rate Limit:** 50 requests per second.\n\n**Note:** During extreme market volatility, this interface may experience increased latency.\n\nAgent hint: Use this for real-time RFQ data. For historical data, use Get RFQs (rfq-list) instead.\nResults are sorted by createdAt descending. rfqLinkId is ignored when traderType is \"quote\".",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    rfqLinkId: z.string().optional(),
    traderType: z.enum(["quote", "request"]).default("quote").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/rfq-realtime", input);
  },
};
