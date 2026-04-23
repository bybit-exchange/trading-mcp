// createTwapStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createTwapStrategy = {
  name: 'createTwapStrategy',
  description: "Creates a TWAP strategy that splits a large order into smaller chunks and executes them\nevenly over a specified time period to minimize market impact.\n\n**When to use:**\n- You need to execute a large order without moving the market significantly\n- You want to achieve an average price over a specific time window\n- You need to avoid detection by splitting orders over time\n\n**Execution behavior:**\n1. Total size is divided by (duration / interval) to calculate each order size\n2. Orders are placed at regular intervals (or randomized if isRandom=true)\n3. Each order can be market or limit order based on chase parameters\n4. Strategy stops when duration expires or size is fully executed\n\n**Important notes:**\n- Minimum recommended duration: 300 seconds (5 minutes) for limit orders\n- Set maxChasePrice or triggerPrice for price protection\n- Enable isRandom to prevent strategy pattern detection\n- Rate limit: 10 requests per second per UID\n\nAgent hint: Use this endpoint when user wants to execute a large order over time to reduce market impact.\nThis is ideal for \"buy 10 BTC over the next 5 minutes\" type requests.\nDo not use if user wants immediate execution - use regular order creation instead.",
  inputSchema: z.object({
    category: z.enum(["UTA_USDT", "UTA_USDC", "UTA_USDC_FUTURE", "UTA_SPOT", "UTA_INVERSE", "UTA_INVERSE_FUTURE", "UTA_USDT_FUTURE"]),
    symbol: z.string(),
    side: z.enum(["Buy", "Sell"]),
    size: z.string(),
    strategyType: z.enum(["twap"]).default("twap"),
    duration: z.number().int().min(300).max(86400),
    interval: z.number().int().min(5).default(30).optional(),
    isRandom: z.boolean().default(false).optional(),
    triggerPrice: z.string().optional(),
    maxChasePrice: z.string().optional(),
    chaseDistance: z.string().optional(),
    chasePercentE4: z.number().int().min(1).max(9999).optional(),
    reduceOnly: z.boolean().default(false).optional(),
    positionIdx: z.enum(["0", "1", "2"]).default("0").optional(),
    leverageType: z.enum(["0", "1"]).default("0").optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/strategy/create", input);
  },
};
