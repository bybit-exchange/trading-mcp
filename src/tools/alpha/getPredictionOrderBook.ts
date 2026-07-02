// getPredictionOrderBook.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionOrderBook = {
  name: 'getPredictionOrderBook',
  description: "Query the full order book (bid/ask depth) for prediction outcome tokens.\nReturns all price levels with available quantity.\n\nAI agent can use this to estimate price impact before placing a large order,\nor to display market depth information to users.\n\nMaximum 20 tokenIds per request.\n\nAgent hint: Use this to get the full order book depth for specific tokenIds.\nUseful for estimating price impact of a large order.\nFor just the current best price, use getPredictionTokenPrice instead.\nMaximum 20 tokenIds per request.",
  inputSchema: z.object({
    tokenIds: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/order-book", input);
  },
};
