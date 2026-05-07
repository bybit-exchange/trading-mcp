import { z } from 'zod';
import { subscriptionManager } from '../../client/subscription-manager.js';
import type { WsCategory } from '../../client/ws-client.js';

export const startSubscription = {
  name: 'startSubscription',
  description: [
    '开启一个持久 WebSocket 订阅，后台持续积累消息。',
    '返回 subscriptionId，用于后续 readMessages / stopSubscription 调用。',
    '订阅在 5 分钟内未被 readMessages 访问时自动关闭。',
    '同一 topic 可同时存在多个独立订阅。',
  ].join(' '),
  inputSchema: z.object({
    category: z.enum(['linear', 'spot', 'inverse', 'option', 'private', 'spread', 'misc'])
      .describe('WS 端点分类'),
    topic: z.string()
      .describe('完整 topic 字符串，如 "orderbook.50.BTCUSDT" 或 "execution.linear"'),
    requiresAuth: z.boolean().default(false).optional()
      .describe('私有频道（execution、order、position、wallet 等）设为 true'),
    maxMessages: z.number().int().min(1).max(5000).default(500).optional()
      .describe('单个订阅的消息缓冲上限，超出时丢弃最旧的消息（默认 500）'),
  }),
  handler: async (input: Record<string, unknown>) => {
    const id = subscriptionManager.start({
      category: input.category as WsCategory,
      topic: input.topic as string,
      requiresAuth: (input.requiresAuth as boolean) ?? false,
      maxMessages: (input.maxMessages as number) ?? 500,
    });
    return {
      subscriptionId: id,
      topic: input.topic,
      status: 'connecting',
      message: 'Subscription started. Call readMessages to retrieve accumulated data.',
    };
  },
};
