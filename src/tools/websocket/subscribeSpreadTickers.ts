// subscribeSpreadTickers.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribeSpreadTickers = {
  name: 'subscribeSpreadTickers',
  description: "订阅 Spread 行情快照",
  inputSchema: z.object({

    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = "spread.tickers";
    const category = 'spread' as WsCategory;
    return wsClient.snapshot({
      category,
      topic,
      requiresAuth: false,
      messageCount: (input.messageCount as number) ?? 1,
      timeoutMs: (input.timeoutMs as number) ?? 5000,
    });
  },
};
