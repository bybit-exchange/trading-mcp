// getSpotBorrowQuota.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotBorrowQuota = {
  name: 'getSpotBorrowQuota',
  description: "Query the borrowing quota for spot margin trading.\n\n- Returns max tradeable quantity/amount with and without borrowing\n- Indicates which coin can be borrowed\n- Only applicable to spot category\n\nAgent hint: Use this endpoint to check how much you can trade (including borrowable amount) before placing a spot margin order.",
  inputSchema: z.object({
    category: z.enum(["spot"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/spot-borrow-check", input);
  },
};
