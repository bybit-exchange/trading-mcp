// subscribeOrderbook.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribeOrderbook = {
  name: 'subscribeOrderbook',
  description: "订阅订单薄深度快照（subscribe-snapshot 模式）",
  inputSchema: z.object({
    depth: z.enum(["1", "50", "200", "1000"]),
    symbol: z.string(),
    category: z.enum(["linear", "spot", "inverse", "option"]).default("linear").optional(),
    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = `orderbook.${input.depth}.${input.symbol}`;
    const category = (input.category as WsCategory) ?? 'linear';
    return wsClient.snapshot({
      category,
      topic,
      requiresAuth: false,
      messageCount: (input.messageCount as number) ?? 1,
      timeoutMs: (input.timeoutMs as number) ?? 5000,
    });
  },
};
