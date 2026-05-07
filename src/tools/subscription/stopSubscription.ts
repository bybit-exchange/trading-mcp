import { z } from 'zod';
import { subscriptionManager } from '../../client/subscription-manager.js';

export const stopSubscription = {
  name: 'stopSubscription',
  description: '关闭指定订阅，释放 WebSocket 连接和缓冲区。已关闭的订阅 ID 不可复用。',
  inputSchema: z.object({
    subscriptionId: z.string()
      .describe('由 startSubscription 返回的订阅 ID'),
  }),
  handler: async (input: Record<string, unknown>) => {
    subscriptionManager.stop(input.subscriptionId as string);
    return { subscriptionId: input.subscriptionId, status: 'closed' };
  },
};
