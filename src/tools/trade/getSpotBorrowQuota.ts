// getSpotBorrowQuota.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpotBorrowQuota = {
  name: 'getSpotBorrowQuota',
  description: "Query the available spot borrow quota for margin trading. This endpoint returns both the maximum tradeable quantity/amount (including borrowable portion) and the actual available quantity/amount without borrowing.\n- Only supports Unified Trade Account (UTA)\n- Only supports `spot` category\n\n**Behaviour:**\n- The response distinguishes between available balance alone versus available balance plus maximum borrowable amounts depending on margin trading status\n- The \"max borrowable\" calculation considers platform limits, UTA account parameters (IMR/MMR), and capital pool availability\n- During extreme market volatility, latency may increase\n\n**Gaia route:** `V5_OPENAPI_QUERY_SPOT_BORROW_CHECK`\n**Handler:** `v5OpenApiQuerySpotBorrowCheckAction` → `V5OpenApiQuerySpotBorrowCheckAction.java`\n**Request convertor:** `V5OpenapiSpotBorrowCheckRequestConvertor.java`\n**Response convertor:** `V5OpenApiSpotBorrowCheckResponseConvertor.java`\n\nAgent hint: TradFi: applies to xStock tokens only (category=spot). Not applicable to equity or commodity perpetuals.",
  inputSchema: z.object({
    category: z.enum(["spot"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/spot-borrow-check", input);
  },
};
