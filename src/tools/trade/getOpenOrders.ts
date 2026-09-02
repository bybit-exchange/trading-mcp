// getOpenOrders.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getOpenOrders = {
  name: 'getOpenOrders',
  description: "Query unfilled or partially filled orders in **real-time**. To query older order records, please use the order history endpoint.\n- Unified account covers: Spot / USDT perpetual / USDC contract / Inverse contract / Options\n- Classic account covers: Spot / USDT perpetual / Inverse contract\n\n**Behaviour:**\n- Returns open (unfilled / partially filled) orders by default (`openOnly=0`)\n- Set `openOnly=1` to also return last 500 closed orders\n- When querying by `orderId` or `orderLinkId`, `openOnly` is ignored\n- Results are sorted by `createdTime` from newest to oldest\n- After server restarts, Unified-account closed orders should be queried via the order history endpoint\n\n**Priority of filter parameters:** `orderId` > `orderLinkId` > `symbol` > `baseCoin`\n\n**Gaia route:** `V5_OPENAPI_QUERY_ORDER_REALTIME`\n**Handler:** `v5OpenApiQueryRealTimeOrderAction` → `V5OpenApiQueryRealTimeOrderAction.java`\n**Request convertor:** `V5OpenapiOrderRequestConvertor.java`\n**Response convertor:** `V5AssetUnifyOpenApiRealTimeOrderResponseConvertor.java`\n\nAgent hint: TradFi: use category=spot to query open xStock orders, category=linear for equity/commodity perpetual orders.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    settleCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    openOnly: z.enum(["0", "1"]).default("0"),
    orderFilter: z.enum(["Order", "StopOrder", "tpslOrder", "OcoOrder", "BidirectionalTpslOrder"]).optional(),
    limit: z.number().int().min(1).max(50).default(20),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/order/realtime", input);
  },
};
