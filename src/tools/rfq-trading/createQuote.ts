// createQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createQuote = {
  name: 'createQuote',
  description: "Submit a quote for an existing RFQ. The quoter provides prices for the RFQ legs\nin buy and/or sell directions. At least one of `quoteBuyList` or `quoteSellList` must be provided.\n\n- **quoteBuyList**: Maker execution matches the leg direction\n- **quoteSellList**: Maker execution is opposite to the leg direction\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: Use this to respond to an RFQ with pricing. Provide at least one of quoteBuyList or quoteSellList.\nYou cannot quote your own RFQ. For spot products, ensure collateral is enabled.",
  inputSchema: z.object({
    rfqId: z.string(),
    quoteLinkId: z.string().optional(),
    anonymous: z.boolean().default(false).optional(),
    expireIn: z.number().int().min(10).max(120).default(60).optional(),
    quoteBuyList: z.array(z.record(z.unknown())).optional(),
    quoteSellList: z.array(z.record(z.unknown())).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/create-quote", input);
  },
};
