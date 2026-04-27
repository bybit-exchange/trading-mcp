// queryTrade.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryTrade = {
  name: 'queryTrade',
  description: "Query detailed information and status of a specified trade.\n\n**Query Options:**\n- tradeNo: System-generated trade number\n- merchantRequestId: Custom merchant request ID\n\nAt least one of the above parameters must be provided.\n\n**Returned Information:**\n- Trade status (processing/success/failed)\n- Exchange rate information\n- Conversion amounts\n- Creation timestamp\n- User ID\n\n**Use Cases:**\n- Poll for trade status after submission\n- Reconcile trades using merchantRequestId\n- Display trade details to users",
  inputSchema: z.object({
    tradeNo: z.string().optional(),
    merchantRequestId: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/fiat/trade-query", input);
  },
};
