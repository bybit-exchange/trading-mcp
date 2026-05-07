// getDoubleWinLeverage.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getDoubleWinLeverage = {
  name: 'getDoubleWinLeverage',
  description: "Query the leverage for a Double Win RFQ product with user-selected price range.\nOnly applicable for RFQ products (`isRfqProduct=true`). For fixed-range products,\nobtain leverage from Get Product Extra Info or the WebSocket topic `earn.doublewin.offers`.\n\nRequires **Earn** permission on the API key.\n\n**Rate Limit:** 1 req/s (UID)\n\n**Notes:**\n- `lowerPrice` and `upperPrice` must satisfy: `lowerPrice < initialPrice < upperPrice`\n- Both prices must be exact multiples of `priceTickSize` (from Get Product Info)\n- The returned `leverage` and `expireTime` are used when placing the Stake order\n- The order must be placed before `expireTime`; after expiration, re-query this endpoint",
  inputSchema: z.object({
    productId: z.number().int(),
    initialPrice: z.string(),
    lowerPrice: z.string(),
    upperPrice: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/advance/double-win-leverage", input);
  },
};
