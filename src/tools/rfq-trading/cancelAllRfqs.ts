// cancelAllRfqs.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelAllRfqs = {
  name: 'cancelAllRfqs',
  description: "Cancel all active RFQs for the authenticated account.\nReturns an array of cancellation results, one per RFQ.\nWhen an inquirer cancels, all corresponding quotes become invalid.\nWhen a quoter cancels, the inquiry remains unaffected but the quote becomes invalid.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This endpoint cancels all active RFQs at once. No request body is needed.\nThe response returns an array of results showing which RFQs were cancelled.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/cancel-all-rfq", input);
  },
};
