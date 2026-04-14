// getFeeGroupInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getFeeGroupInfo = {
  name: 'getFeeGroupInfo',
  description: "Query the tiered fee structure for Pro-level and Market Maker clients, organized by\nsymbol groups, including taker/maker fee rates and maker rebates per client tier.\n\nUse this endpoint when you need to:\n- Look up the fee rates applicable to a specific group ID for Pro or Market Maker clients\n- Understand which symbols belong to which fee group (e.g., G1 for major coins)\n- Compare taker/maker fee rates and maker rebates across Pro tiers (Pro 1–6) or MM tiers (MM 1–3)\n\nReturns a list of fee groups, each with their symbol list and fee rate table.\n\n**Notes:**\n- Applicable to Pro-level and Market Maker clients only\n- `productType=contract` is the only supported value\n- No authentication required\n\nAgent hint: Use this endpoint to retrieve fee group structures for Pro or Market Maker clients.\nproductType is required (only \"contract\" is supported). Optionally filter by groupId (1–8).\nThis endpoint is only relevant for Pro-level or Market Maker accounts.\nFor standard account fee rates, use the Account getFeeRate endpoint instead.",
  inputSchema: z.object({
    productType: z.enum(["contract"]),
    groupId: z.enum(["1", "2", "3", "4", "5", "6", "7", "8"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/fee-group-info", input);
  },
};
