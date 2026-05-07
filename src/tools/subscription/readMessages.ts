import { z } from 'zod';
import { subscriptionManager } from '../../client/subscription-manager.js';

export const readMessages = {
  name: 'readMessages',
  description: [
    '读取指定订阅已积累的消息。',
    '默认读取全部并清空缓冲区（clearAfterRead=true）；设为 false 可保留消息继续累积。',
    '通过 limit 参数可只取最近 N 条消息。',
    '返回 status 字段可判断连接是否仍然活跃（active / reconnecting / closed）。',
  ].join(' '),
  inputSchema: z.object({
    subscriptionId: z.string()
      .describe('由 startSubscription 返回的订阅 ID'),
    limit: z.number().int().min(1).optional()
      .describe('最多返回最近 N 条消息；不填则返回全部缓冲消息'),
    clearAfterRead: z.boolean().default(true).optional()
      .describe('读取后是否清空缓冲区（默认 true）'),
  }),
  handler: async (input: Record<string, unknown>) => {
    return subscriptionManager.read(
      input.subscriptionId as string,
      input.limit as number | undefined,
      (input.clearAfterRead as boolean) ?? true,
    );
  },
};
