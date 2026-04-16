// getInstrumentsInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getInstrumentsInfo = {
  name: 'getInstrumentsInfo',
  description: "Query instrument specifications for active trading pairs across spot, USDT contracts,\nUSDC contracts, inverse contracts, and options markets, including price precision,\nquantity limits, leverage ranges, and contract details.\n\nUse this endpoint when you need to:\n- Discover available trading pairs and their current trading `status`\n- Retrieve `tickSize`, `minOrderQty`, `maxOrderQty` for order validation before placement\n- Get leverage filter range (`minLeverage`, `maxLeverage`) for a contract\n- Check `deliveryTime` for futures/options expiry information\n\nResponse schema differs per `category`. Supports cursor-based pagination via `nextPageCursor`.\n\n**Do not use** this endpoint for real-time price data — use `getTickers` instead.\n\n**Notes:**\n- Response schema differs per `category`; see schema definitions for details\n- Supports cursor-based pagination\n- No authentication required\n\nAgent hint: Use this endpoint to discover trading pairs and their constraints before constructing orders.\nCall this to retrieve tickSize, minOrderQty, and maxOrderQty for a symbol.\nDo not use this for real-time prices — use getTickers for current price and 24h stats.\nFor pagination, pass nextPageCursor from the previous response into the cursor parameter.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    status: z.enum(["Trading", "PreLaunch", "Delivering"]).optional(),
    baseCoin: z.string().optional(),
    limit: z.number().int().min(1).max(1000).default(500).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/instruments-info", input);
  },
};
