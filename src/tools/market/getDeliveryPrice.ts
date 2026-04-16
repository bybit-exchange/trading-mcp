// getDeliveryPrice.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getDeliveryPrice = {
  name: 'getDeliveryPrice',
  description: "Retrieve historical delivery (settlement) prices for expired futures and options contracts,\nincluding the final settlement price and delivery timestamp.\n\nUse this endpoint when you need to:\n- Look up the settlement price of a specific expired futures or options contract\n- Analyze historical delivery prices for research or PnL reconciliation\n- Retrieve paginated delivery records across multiple expired contracts\n\n**Supported Products:** USDT futures, USDC futures, Inverse futures, Option\n\nSupports cursor-based pagination via `nextPageCursor`.\n\n**Do not use** this endpoint for upcoming delivery dates — use `getInstrumentsInfo` which includes\n`deliveryTime` for active contracts.\n\n**Notes:**\n- Supports cursor-based pagination\n- No authentication required\n\nAgent hint: Use this endpoint to look up historical settlement prices for expired futures and options.\nFor option queries, baseCoin defaults to BTC. Use category to filter product type.\nFor delivery time of active (not yet expired) contracts, use getInstrumentsInfo instead.\nUse nextPageCursor from the response for pagination.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    limit: z.number().int().min(1).max(200).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/delivery-price", input);
  },
};
