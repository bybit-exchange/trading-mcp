// acceptNonLpQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const acceptNonLpQuote = {
  name: 'acceptNonLpQuote',
  description: "Enable acceptance of non-LP quotes for a specific RFQ.\nThis allows the inquirer to receive and execute quotes from normal counterparties\nin addition to liquidity providers.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: Use this endpoint to allow non-LP counterparties to quote on your RFQ.\nOnly the RFQ creator can call this endpoint. Pass the rfqId of the target RFQ.",
  inputSchema: z.object({
    rfqId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/accept-other-quote", input);
  },
};
