// subscribeKline.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribeKline = {
  name: 'subscribeKline',
  description: "订阅 K 线推送",
  inputSchema: z.object({
    interval: z.enum(["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "W", "M"]),
    symbol: z.string(),
    category: z.enum(["linear", "spot", "inverse"]).default("linear").optional(),
    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = `kline.${input.interval}.${input.symbol}`;
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
