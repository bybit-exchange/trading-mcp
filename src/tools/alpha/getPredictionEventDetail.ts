// getPredictionEventDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPredictionEventDetail = {
  name: 'getPredictionEventDetail',
  description: "Get detailed information about a prediction event, including all associated markets,\noutcome tokens, current prices, and trading statistics.\n\nUse `slug` for human-readable event lookups (takes priority over `eventId`).\nSet `hasMoreMarkets=true` to include markets from related \"more-markets\" sub-events.\n\nAI agent should call this before placing orders to get the full list of outcome token IDs\nand current prices for a specific event.\n\nAgent hint: Use this endpoint to get all details of a specific prediction event including tokenIds for trading.\nPrefer using slug when available (more stable than eventId).\nCall this before buy/sell to confirm current market prices and available tokenIds.\nDo NOT use getPredictionMarketList for individual event details — use this endpoint.",
  inputSchema: z.object({
    eventId: z.string().optional(),
    slug: z.string().optional(),
    hasMoreMarkets: z.boolean().default(false).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/alpha/prediction/event-detail", input);
  },
};
