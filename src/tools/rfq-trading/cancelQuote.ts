// cancelQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelQuote = {
  name: 'cancelQuote',
  description: "Cancel an active quote. You must pass one of the following parameters: `quoteId`, `rfqId`, or `quoteLinkId`.\nPriority order when multiple are provided: quoteId > quoteLinkId > rfqId.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: Pass one of quoteId, quoteLinkId, or rfqId to cancel a quote.\nPriority: quoteId > quoteLinkId > rfqId. When rfqId is used, all quotes for that RFQ are cancelled.",
  inputSchema: z.object({
    quoteId: z.string().optional(),
    rfqId: z.string().optional(),
    quoteLinkId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/cancel-quote", input);
  },
};
