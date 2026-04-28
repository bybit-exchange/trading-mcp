// executeQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const executeQuote = {
  name: 'executeQuote',
  description: "Execute (accept) a quote to initiate the multi-leg trade.\nThis endpoint is **asynchronous** - the order is sent to the matching engine.\nTo confirm execution, check the Get Trade History endpoint or monitor the Execution WebSocket topic.\n\nOnly the creator of the RFQ can execute quotes.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This is an asynchronous endpoint. After calling it, poll Get Trade History or listen to the\nExecution WebSocket to confirm the trade was filled. Only the RFQ creator can execute quotes.",
  inputSchema: z.object({
    rfqId: z.string(),
    quoteId: z.string(),
    quoteSide: z.enum(["Buy", "Sell"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rfq/execute-quote", input);
  },
};
