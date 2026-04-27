// createChaseOrderStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createChaseOrderStrategy = {
  name: 'createChaseOrderStrategy',
  description: "Creates a Chase Order strategy that continuously monitors market price and\nautomatically adjusts order price to improve fill probability.\n\n**When to use:**\n- You need fast execution but want better price than market order\n- Market is volatile and price is changing quickly\n- You want to stay near the top of order book without manual adjustments\n\n**Execution behavior:**\n1. Get current best bid/ask from order book\n2. Calculate chase price = best price ± chase offset (distance or percent)\n3. Place limit order at chase price\n4. Monitor market price continuously\n5. If price moves and current order is no longer competitive:\n   - Cancel existing order\n   - Recalculate chase price\n   - Place new order at better price\n6. Repeat until fully filled or maxChasePrice reached\n\n**Price calculation:**\n- Using chaseDistance: `buy_price = ask - chaseDistance` or `sell_price = bid + chaseDistance`\n- Using chasePercentE4: `buy_price = ask × (1 - chasePercentE4/10000)` or `sell_price = bid × (1 + chasePercentE4/10000)`\n- maxChasePrice protection: strategy stops if this price is exceeded\n\n**Important notes:**\n- Chase strategy will cancel and replace orders frequently - watch API rate limits\n- MUST set maxChasePrice to prevent runaway in extreme volatility\n- Recommended chasePercentE4: 10-50 (0.1%-0.5%) for high liquidity pairs\n- Use chaseDistance for low liquidity pairs with fixed tick sizes\n- Strategy stops when: fully filled, maxChasePrice hit, or manually canceled\n\nAgent hint: Use this endpoint when user needs fast order execution with price tracking.\nBest for \"buy quickly but don't go above $26000\" type requests.\nDo not use for slow execution or when hiding order intent - use TWAP or Iceberg instead.",
  inputSchema: z.object({
    category: z.enum(["UTA_USDT", "UTA_USDC", "UTA_USDC_FUTURE", "UTA_SPOT", "UTA_INVERSE", "UTA_INVERSE_FUTURE", "UTA_USDT_FUTURE"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
    size: z.string(),
    strategyType: z.enum(["chaseOrder"]).default("chaseOrder"),
    chaseDistance: z.string().optional(),
    chasePercentE4: z.number().int().min(1).max(1000).optional(),
    maxChasePrice: z.string().optional(),
    triggerPrice: z.string().optional(),
    reduceOnly: z.boolean().default(false).optional(),
    positionIdx: z.enum(["0", "1", "2"]).default("0").optional(),
    leverageType: z.enum(["0", "1"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/strategy/create", input);
  },
};
