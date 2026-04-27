// getRfqs.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRfqs = {
  name: 'getRfqs',
  description: "Query historical RFQs with optional filtering by ID, trader type, and status.\nSupports cursor-based pagination. Results are sorted by `createdAt` descending.\n\nThis data is **not real-time**. Use the Get RFQs (real-time) endpoint for live data.\n\nWhen both `rfqId` and `rfqLinkId` are provided, only `rfqId` is considered.\nThe `rfqLinkId` parameter restricts results to the last 3 months and is invalid when `traderType` is \"quote\".\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This returns historical (non-real-time) RFQ data. Use Get RFQs Realtime for live data.\nSupports pagination via cursor. rfqLinkId only works within the last 3 months.",
  inputSchema: z.object({
    rfqId: z.string().optional(),
    rfqLinkId: z.string().optional(),
    traderType: z.enum(["quote", "request"]).default("quote").optional(),
    status: z.enum(["Active", "Canceled", "Filled", "Expired", "Failed"]).optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/rfq-list", input);
  },
};
