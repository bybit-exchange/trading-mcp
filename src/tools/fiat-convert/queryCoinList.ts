// queryCoinList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryCoinList = {
  name: 'queryCoinList',
  description: "Query the list of supported fiat currencies and cryptocurrencies.\n\nReturns:\n- Available fiat currencies with limits\n- Supported cryptocurrencies with limits\n- Currency status (enabled/disabled)\n- Precision information for transactions\n\n**Use Cases:**\n- Display available currencies to users before trading\n- Validate currency codes before submitting quotes\n- Show transaction limits for each currency pair",
  inputSchema: z.object({
    side: z.enum(["0", "1"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fiat/query-coin-list", input);
  },
};
