// getAdvanceEarnProductExtraInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAdvanceEarnProductExtraInfo = {
  name: 'getAdvanceEarnProductExtraInfo',
  description: "Get real-time quotes (target prices and APY) for a specific Dual Assets product.\nQuotes are sourced from institutional market makers and update frequently (second-level).\nNo authentication required.\n\n**Rate Limit:** 50 req/s (IP)\n\n**Tip:** For real-time updates, subscribe to the WebSocket topic `earn.dualassets.offers`\ninstead of polling this endpoint. Use this endpoint for initial load or fallback.",
  inputSchema: z.object({
    category: z.enum(["DualAssets", "SmartLeverage", "DoubleWin", "DiscountBuy"]),
    productId: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/earn/advance/product-extra-info", input);
  },
};
