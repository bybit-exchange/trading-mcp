// createIcebergStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createIcebergStrategy = {
  name: 'createIcebergStrategy',
  description: "Creates an Iceberg strategy that splits a large order into multiple smaller child orders,\ndisplaying only one at a time to hide trading intent.\n\n**When to use:**\n- You have a large order and want to hide total size from the market\n- You want to prevent price manipulation based on your order size\n- You need to reduce market impact while maintaining consistent pricing\n- You want to earn maker rebates by using post-only orders\n\n**Execution behavior:**\n1. Calculate child order size:\n   - If subSize provided: orderCount = size / subSize\n   - If orderCount provided: subSize = size / orderCount\n2. Create first child order (limit or chase pricing)\n3. Wait for child order to fill completely\n4. Once filled, create next child order\n5. Repeat until all size is executed\n6. Each child order is independent - can have different prices if chasing\n\n**Important notes:**\n- Recommended subSize: 5%-20% of total size\n- Enable postOnly=1 to get maker fee rebates\n- Set chaseDistance=\"-1\" for aggressive taker execution (hit best bid/ask)\n- Always set maxChasePrice for price protection\n- Strategy executes sequentially - slower than Chase but more stealthy\n- If a child order is partially filled and canceled, strategy continues with remaining amount\n\nAgent hint: Use this endpoint when user wants to hide large order size from the market.\nBest for \"buy 100 BTC without showing the full size\" type requests.\nDo not use for time-sensitive execution - use Chase Order instead.",
  inputSchema: z.object({
    category: z.enum(["UTA_USDT", "UTA_USDC", "UTA_USDC_FUTURE", "UTA_SPOT", "UTA_INVERSE", "UTA_INVERSE_FUTURE", "UTA_USDT_FUTURE"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
    size: z.string(),
    strategyType: z.enum(["iceberg"]).default("iceberg"),
    subSize: z.string().optional(),
    orderCount: z.number().int().min(2).optional(),
    limitPrice: z.string().optional(),
    chaseDistance: z.string().optional(),
    chasePercentE4: z.number().int().min(0).max(999).optional(),
    maxChasePrice: z.string().optional(),
    postOnly: z.enum(["0", "1"]).default("0").optional(),
    reduceOnly: z.boolean().default(false).optional(),
    positionIdx: z.enum(["0", "1", "2"]).default("0").optional(),
    leverageType: z.enum(["0", "1"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/strategy/create", input);
  },
};
