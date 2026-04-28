// getQuotes.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getQuotes = {
  name: 'getQuotes',
  description: "Query historical quotes with optional filtering by IDs, trader type, and status.\nSupports cursor-based pagination. Results are sorted by `createdAt` descending.\n\nThis data is **not real-time**. Use the Get Quotes (real-time) endpoint for live data.\n\nPriority when multiple identifiers are provided: quoteId > quoteLinkId > rfqId.\nThe `quoteLinkId` parameter is invalid when `traderType` is \"request\".\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This returns historical (non-real-time) quote data. Use Get Quotes Realtime for live data.\nSupports pagination via cursor. When both quoteId and quoteLinkId are provided, both conditions apply.",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    quoteId: z.string().optional(),
    quoteLinkId: z.string().optional(),
    traderType: z.enum(["quote", "request"]).default("quote").optional(),
    status: z.enum(["Active", "Canceled", "PendingFill", "Filled", "Expired", "Failed"]).optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/quote-list", input);
  },
};
