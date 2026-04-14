// getOrderbook.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOrderbook = {
  name: 'getOrderbook',
  description: "Retrieve orderbook depth data for a trading pair. Returns a snapshot of bids and asks\nacross all supported product types.\n\nUse this endpoint when you need to:\n- Inspect current bid/ask depth before placing an order\n- Retrieve the best bid/ask price and available size at each level\n- Correlate with the WebSocket orderbook stream using the `u` (update ID) and `seq` fields\n\n**Supported Products:** Spot, USDT contract, USDC contract, Inverse contract, Option\n\nReturns up to 500 levels per side for derivatives (spot: up to 200; option: up to 25).\nUse `limit=1` for best bid/ask only.\n\n**Do not use** this endpoint for RPI orders — use `getRpiOrderbook` instead.\n**Do not use** this endpoint for 24h stats or last price — use `getTickers` instead.\n\n**Notes:**\n- RPI orders are not included; use getRpiOrderbook for RPI-inclusive depth\n- Bids are sorted in descending order by price\n- Asks are sorted in ascending order by price\n- No authentication required\n\nAgent hint: Use this endpoint to get current bid/ask depth for a trading pair.\nUse limit=1 (default for spot/option) for best bid/ask only; increase limit for deeper analysis.\nRPI orders are excluded — use getRpiOrderbook if RPI depth is needed.\nDo not use for 24h stats or last price — use getTickers for that.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string(),
    limit: z.number().int().min(1).max(500).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/orderbook", input);
  },
};
