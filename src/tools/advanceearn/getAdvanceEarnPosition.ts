// getAdvanceEarnPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAdvanceEarnPosition = {
  name: 'getAdvanceEarnPosition',
  description: "Query your active positions. Requires **Earn** permission on the API key.\n\n**Rate Limit:** 10 req/s (UID)\n\n**DiscountBuy notes:** Only returns active/settling positions (status = `Active` or `Settling`).\nThe `coin` parameter filters by **underlying asset** (e.g., `coin=BTC` returns BTC-underlying positions).",
  inputSchema: z.object({
    category: z.enum(["DualAssets", "SmartLeverage", "DoubleWin", "DiscountBuy"]),
    productId: z.number().int().optional(),
    coin: z.string().optional(),
    limit: z.number().int().min(1).max(20).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/advance/position", input);
  },
};
