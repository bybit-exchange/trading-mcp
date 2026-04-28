// subscribeExecution.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribeExecution = {
  name: 'subscribeExecution',
  description: "Subscribe to real-time execution (trade fill) updates for your account.",
  inputSchema: z.object({
    category: z.enum(["spot", "linear", "inverse", "option"]).optional(),
    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = (input.category != null ? `execution.${input.category as string}` : `execution`);
    const category = 'private' as WsCategory;
    return wsClient.snapshot({
      category,
      topic,
      requiresAuth: true,
      messageCount: (input.messageCount as number) ?? 1,
      timeoutMs: (input.timeoutMs as number) ?? 5000,
    });
  },
};
