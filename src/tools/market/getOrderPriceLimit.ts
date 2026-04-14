// getOrderPriceLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOrderPriceLimit = {
  name: 'getOrderPriceLimit',
  description: "Retrieve the current allowable price range for order placement, including the maximum\nbuy price limit (`buyLmt`) and minimum sell price limit (`sellLmt`).\n\nUse this endpoint when you need to:\n- Validate that a limit order price falls within the allowed range before submission\n- Avoid order rejection due to price-out-of-range errors\n- Check real-time price limits to construct valid orders near the market price\n\n**Supported Products:** Spot, USDT contract, Inverse contract\n\nReturns `buyLmt` (maximum allowable bid price) and `sellLmt` (minimum allowable ask price).\n\n**Do not use** this endpoint for tick size or price precision — use `getInstrumentsInfo` instead.\n\n**Notes:**\n- No authentication required\n\nAgent hint: Use this endpoint to validate that a limit order price is within the allowed range before placing an order.\ncategory defaults to linear. symbol is required.\nCall this before submitting a limit order if you receive price-out-of-range errors.\nFor tick size and price precision constraints, use getInstrumentsInfo instead.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse"]).default("linear").optional(),
    symbol: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/market/price-limit", input);
  },
};
