// subscribeRpiOrderbook.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribeRpiOrderbook = {
  name: 'subscribeRpiOrderbook',
  description: "订阅 RPI 订单薄快照",
  inputSchema: z.object({
    symbol: z.string(),
    category: z.enum(["linear", "spot", "inverse"]).default("linear").optional(),
    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = `orderbook.rpi.${input.symbol}`;
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
