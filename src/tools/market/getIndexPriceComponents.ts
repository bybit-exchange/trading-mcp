// getIndexPriceComponents.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getIndexPriceComponents = {
  name: 'getIndexPriceComponents',
  description: "Retrieve the component exchanges and trading pairs that make up a Bybit index price,\nincluding their individual weights, current prices, and multipliers.\n\nUse this endpoint when you need to:\n- Understand which exchanges and spot pairs contribute to a Bybit index price\n- Investigate why an index price differs from individual spot market prices\n- Research the composition and weighting methodology of a specific index\n\nReturns `indexName`, `lastPrice`, `updateTime`, and a `components` array with exchange-level details.\n\n**Do not use** this endpoint for the index price value alone — use `getTickers` which includes `indexPrice`.\n\n**Notes:**\n- No authentication required\n\nAgent hint: Use this endpoint to inspect the composition of a Bybit index price.\nindexName is required (e.g., BTCUSDT, ETHUSDT).\nReturns which exchanges contribute and their weights in the index calculation.\nFor the current index price value alone, use getTickers which includes indexPrice.\nTradFi: use to inspect the reference price composition of commodity perpetuals — indexName=XAUUSDT (gold), XAGUSDT (silver), CLUSDT (crude oil). Not available for xStock tokens (e.g. TSLAXUSDT).",
  inputSchema: z.object({
    indexName: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/index-price-components", input);
  },
};
