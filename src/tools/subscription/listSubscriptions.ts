import { z } from 'zod';
import { subscriptionManager } from '../../client/subscription-manager.js';

export const listSubscriptions = {
  name: 'listSubscriptions',
  description: '列出当前所有活跃订阅及其状态和缓冲消息数。用于调试和监控。',
  inputSchema: z.object({}),
  handler: async (_input: Record<string, unknown>) => {
    const subs = subscriptionManager.list();
    return { count: subs.length, subscriptions: subs };
  },
};
