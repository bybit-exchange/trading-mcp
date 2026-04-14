// getRpiOrderbook.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRpiOrderbook = {
  name: 'getRpiOrderbook',
  description: "Retrieve orderbook depth data that explicitly shows RPI (Retail Price Improvement) order sizes\nat each price level, alongside regular non-RPI order sizes.\n\nUse this endpoint when you need to:\n- Identify the RPI liquidity available at each price level separately from non-RPI liquidity\n- Distinguish between RPI and non-RPI order flow for market microstructure analysis\n- Access the full orderbook including RPI orders (which are excluded from the standard orderbook)\n\n**Supported Products:** Spot, USDT contract, Inverse contract\n\nEach price level returns a 3-element array: `[price, non-RPI size, RPI size]`.\nReturns up to 50 levels per side.\n\n**Do not use** this endpoint if you only need regular orderbook depth — use `getOrderbook` instead.\n\n**Notes:**\n- Each price level returns `[price, non-RPI size, RPI size]`\n- No authentication required\n\nAgent hint: Use this endpoint when you specifically need RPI (Retail Price Improvement) order sizes in the orderbook.\nFor standard orderbook depth without RPI breakdown, use getOrderbook instead.\nThe response format differs from getOrderbook: each level has 3 values [price, non-RPI size, RPI size].",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse"]).optional(),
    symbol: z.string(),
    limit: z.number().int().min(1).max(50),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/rpi_orderbook", input);
  },
};
