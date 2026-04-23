// queryStrategyList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryStrategyList = {
  name: 'queryStrategyList',
  description: "Retrieve a list of strategies with filtering options and pagination support.\n\n**When to use:**\n- Check status of specific strategy by strategyId\n- Monitor all running strategies\n- Review completed strategies for performance analysis\n- Filter strategies by symbol, type, or time period\n\n**Query modes:**\n1. **Exact lookup**: Provide strategyId to get specific strategy details\n2. **Filtered list**: Use symbol, category, strategyType, status filters\n3. **Time range**: Use beginTimeE0 and endTimeE0 for date range queries\n4. **Paginated**: Use cursor and pageSize for large result sets\n\n**Strategy Status Values:**\n- 2: Running - Strategy is actively executing\n- 3/4: Terminated - Strategy has stopped (check terminateType for reason)\n- 5: Paused - Strategy is temporarily paused\n- 6: Untriggered - Conditional strategy waiting for trigger price\n\n**Important notes:**\n- Strategies are sorted by creation time (newest first)\n- Use cursor for pagination (nextCursor in response)\n- Maximum pageSize: 50\n- Default pageSize: 20\n- Time filters use Unix timestamp in seconds\n\nAgent hint: Use this endpoint when user asks about their strategies, wants to check strategy status,\nor needs to review strategy performance. Common queries: \"show my strategies\",\n\"check TWAP strategy status\", \"what strategies are running on BTCUSDT\".",
  inputSchema: z.object({
    strategyId: z.string().optional(),
    status: z.enum(["2", "3", "4", "5", "6"]).optional(),
    symbol: z.string().optional(),
    category: z.enum(["UTA_USDT", "UTA_USDC", "UTA_USDC_FUTURE", "UTA_SPOT", "UTA_INVERSE", "UTA_INVERSE_FUTURE", "UTA_USDT_FUTURE"]).optional(),
    strategyType: z.enum(["twap", "chaseOrder", "iceberg"]).optional(),
    beginTimeE0: z.number().int().optional(),
    endTimeE0: z.number().int().optional(),
    pageSize: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/strategy/list", input);
  },
};
