// getCryptoLoanFixedBorrowOrderQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedBorrowOrderQuote = {
  name: 'getCryptoLoanFixedBorrowOrderQuote',
  description: "Query available supply orders (lending offers) from the market for a specific currency and term.\n\n**Features:**\n- Public endpoint (no authentication required)\n- View available lending offers before placing borrow order\n- Sort by rate or amount\n- Filter by currency and term\n- Rate limit: 1000 requests per time window\n\n**Use Cases:**\n- Check available rates before borrowing\n- Find best lending offers in the market\n- Compare rates across different terms\n\n**Important:**\n- Results show actual supply orders from lenders\n- Rates may change as orders are filled\n- Use these rates when creating borrow orders",
  inputSchema: z.object({
    orderCurrency: z.string().optional(),
    term: z.string().optional(),
    orderBy: z.enum(["annualRate", "qty"]).optional(),
    sort: z.enum(["1", "2"]).optional(),
    limit: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/crypto-loan-fixed/borrow-order-quote", input);
  },
};
