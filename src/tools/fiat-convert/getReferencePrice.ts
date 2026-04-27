// getReferencePrice.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getReferencePrice = {
  name: 'getReferencePrice',
  description: "Query the reference exchange rate for a specified trading pair.\n\nReturns:\n- Buy prices (multiple payment methods)\n- Sell prices (multiple payment methods)\n- Price timestamp\n- Transaction quota information\n\n**Important:** Reference prices are for reference only. Actual trading prices are determined by the quote endpoint.\n\n**Use Cases:**\n- Display approximate exchange rates to users\n- Compare prices across different payment methods\n- Calculate estimated amounts before requesting a quote",
  inputSchema: z.object({
    symbol: z.string(),
    paymentMethod: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fiat/reference-price", input);
  },
};
