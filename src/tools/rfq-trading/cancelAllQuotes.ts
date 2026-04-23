// cancelAllQuotes.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelAllQuotes = {
  name: 'cancelAllQuotes',
  description: "Cancel all active quotes for the authenticated account.\nReturns an array of results with the cancellation status of each quote.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This endpoint cancels all active quotes at once. No request body parameters are needed.\nThe response lists each cancelled quote with its success/failure status.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/cancel-all-quotes", input);
  },
};
