// queryFixedBorrowMarket.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryFixedBorrowMarket = {
  name: 'queryFixedBorrowMarket',
  description: "Query the fixed-rate borrow market (supply order book) to see available lending offers.\n\n**Rules:**\n- `orderCurrency` is required\n- Results can be sorted by annual rate (`apy`), term (`term`), or available quantity (`quantity`)\n- Default sort is ascending; set `sort` to `1` for descending\n- Maximum 100 results per request\n- Unified account only\n\n**Service:** bizasset-uta-loan-prod",
  inputSchema: z.object({
    orderCurrency: z.string(),
    term: z.string().optional(),
    orderBy: z.enum(["apy", "term", "quantity"]),
    sort: z.enum(["0", "1"]).default("0").optional(),
    limit: z.number().int().default(10).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spot-margin-trade/fixedborrow-order-quote", input);
  },
};
