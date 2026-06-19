// getRwaProductList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRwaProductList = {
  name: 'getRwaProductList',
  description: "Query the list of RWA products, including base APR, bonus APR, NAV, stake limits,\nprecision, and other product metadata.\n\n**Rate Limit:** 20 req/s (IP)\n\nNo authentication is sent by this MCP tool, so the `userQuota` field is always empty in the response. Per-user quota cannot be retrieved here.",
  inputSchema: z.object({
    coin: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/rwa/product", input);
  },
};
