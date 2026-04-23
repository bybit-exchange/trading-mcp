// getTradeHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTradeHistory = {
  name: 'getTradeHistory',
  description: "Query RFQ trade execution history with optional filtering by IDs, trader type, and status.\nSupports cursor-based pagination. Results include detailed per-leg execution information.\n\nField query priority: rfqId > rfqLinkId, quoteId > quoteLinkId.\nThe `rfqLinkId` and `quoteLinkId` parameters restrict results to the last 3 months.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: Use this to check trade execution results after calling Execute Quote.\nContains detailed per-leg info including orderId, execFee, markPrice, and rejection details.\nrfqLinkId and quoteLinkId only search the last 3 months.",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    rfqLinkId: z.string().optional(),
    quoteId: z.string().optional(),
    quoteLinkId: z.string().optional(),
    traderType: z.enum(["quote", "request"]).default("quote").optional(),
    status: z.enum(["Filled", "Failed"]).optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/trade-list", input);
  },
};
