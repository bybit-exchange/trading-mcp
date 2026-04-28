// getPublicTrades.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPublicTrades = {
  name: 'getPublicTrades',
  description: "Query publicly available RFQ trade data with optional time range filtering\nand cursor-based pagination. The `startTime` and `endTime` window must not exceed 30 days.\n\n**Rate Limit:** 50 requests per second.\n\nAgent hint: This endpoint returns public (anonymized) RFQ trade data. Authentication via API key\nheaders is required. The time window between startTime and endTime must not exceed 30 days.",
  inputSchema: z.object({
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rfq/public-trades", input);
  },
};
