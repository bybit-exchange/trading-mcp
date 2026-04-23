// getQuotesRealtime.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getQuotesRealtime = {
  name: 'getQuotesRealtime',
  description: "Query quotes in real-time from the RFQ engine. Returns all non-final quotes\nsorted in descending order by `createdAt`.\n\nPriority order when multiple identifiers are provided: quoteId > quoteLinkId > rfqId.\nThe `quoteLinkId` parameter is invalid when `traderType` is \"request\".\n\n**Rate Limit:** 50 requests per second.\n\n**Note:** During extreme market volatility, this interface may experience increased latency.\n\nAgent hint: Use this for real-time quote data. For historical data, use Get Quotes (quote-list) instead.\nPriority: quoteId > quoteLinkId > rfqId. quoteLinkId is ignored when traderType is \"request\".",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    quoteId: z.string().optional(),
    quoteLinkId: z.string().optional(),
    traderType: z.enum(["quote", "request"]).default("quote").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/quote-realtime", input);
  },
};
