// getCryptoLoanFixedSupplyOrderQuote.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getCryptoLoanFixedSupplyOrderQuote = {
  name: 'getCryptoLoanFixedSupplyOrderQuote',
  description: "Query available borrow orders (demand) in the market",
  inputSchema: z.object({
    orderCurrency: z.string().optional(),
    term: z.string().optional(),
    orderBy: z.string().optional(),
    sort: z.number().int().optional(),
    limit: z.number().int().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.get("/v5/crypto-loan-fixed/supply-order-quote", input);
  },
};
