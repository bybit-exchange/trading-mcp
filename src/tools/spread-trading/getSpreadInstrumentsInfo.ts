// getSpreadInstrumentsInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadInstrumentsInfo = {
  name: 'getSpreadInstrumentsInfo',
  description: "Query instrument specifications for spread combination trading pairs, including\ncontract type, trading status, price tick size, order quantity limits, and component\nleg instrument details.\n\nUse this endpoint when you need to:\n- Discover available spread symbols and their trading constraints before placing orders\n- Validate price precision (`tickSize`) and quantity limits (`minSize`, `maxSize`) for order construction\n- Retrieve the component leg instruments (`legs`) that make up a spread combination\n\nReturns a paginated list of spread instruments. Use `nextPageCursor` from the response\nto retrieve subsequent pages by passing it into the `cursor` parameter.\n\n**Do not use** this endpoint for real-time price data — use `getSpreadTickers` instead.\n\n**Notes:**\n- Response may have latency during periods of high market volatility\n- Supports cursor-based pagination\n- No authentication required\n\nAgent hint: Use this endpoint to discover available spread symbols and their trading constraints.\nCall this before constructing orders to retrieve `tickSize`, `minSize`, and `maxSize`.\nDo not use this for real-time prices — use getSpreadTickers for current price and 24h stats.\nFor pagination, pass the `nextPageCursor` value from the previous response into the `cursor` parameter.",
  inputSchema: z.object({
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    limit: z.number().int().min(1).max(500).default(200).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/spread/instrument", input);
  },
};
