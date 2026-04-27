// queryStrategyOrderList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryStrategyOrderList = {
  name: 'queryStrategyOrderList',
  description: "Retrieve a list of child orders created by a strategy with detailed execution information.\n\n**When to use:**\n- View all orders spawned by a specific strategy\n- Check why a strategy order was rejected or canceled\n- Analyze execution prices and timing of strategy orders\n- Monitor real-time order status during strategy execution\n- Debug strategy execution issues\n\n**Order Status Values:**\n- 1: Created - Order placed but not yet filled\n- 2: PartiallyFilled - Order partially executed\n- 3: Filled - Order fully executed\n- 4: Cancelled - Order was canceled\n- 5: Rejected - Order rejected by exchange\n\n**Important notes:**\n- strategyId is REQUIRED - must provide the parent strategy ID\n- Orders are sorted by creation time (newest first)\n- Use pagination for strategies with many orders\n- Maximum pageSize: 50, default: 20\n- Error codes in response indicate order rejection reasons\n- parentOrderId links replacement orders in chase strategies\n\nAgent hint: Use this endpoint when user wants to see individual orders created by a strategy.\nCommon queries: \"show me the orders for strategy X\", \"why did my TWAP fail\",\n\"what prices did my iceberg orders fill at\".\nRequires strategyId - if user doesn't provide it, ask them or query strategy list first.",
  inputSchema: z.object({
    strategyId: z.string(),
    status: z.enum(["1", "2", "3", "4", "5"]).optional(),
    symbol: z.string().optional(),
    BeginTimeE0: z.number().int().optional(),
    EndTimeE0: z.number().int().optional(),
    pageSize: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
    StrategyType: z.enum(["twap", "chaseOrder", "iceberg"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/strategy/order-list", input);
  },
};
