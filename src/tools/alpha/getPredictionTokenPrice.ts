// getPredictionTokenPrice.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionTokenPrice = {
  name: 'getPredictionTokenPrice',
  description: "Query current market prices for up to 20 prediction outcome tokens.\nReturns best bid, best ask, and last trade price for each token.\n\nAI agent should call this before placing orders to confirm current market prices.\nPrice represents probability (0-1): a price of 0.65 means ~65% chance of YES.\n\nAgent hint: Use this to get current prices for specific tokenIds before trading.\nPrice is a probability (0 to 1). A YES token at 0.65 means 65% probability of YES outcome.\nAlways check price before buy/sell. Maximum 20 tokenIds per request.\nDo NOT use this for price history — use getPredictionPriceHistory instead.",
  inputSchema: z.object({
    tokenIds: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/token-price", input);
  },
};
