// subscribePosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { wsClient } from '../../client/ws-client.js';
import type { WsCategory } from '../../client/ws-client.js';

export const subscribePosition = {
  name: 'subscribePosition',
  description: "Subscribe to real-time position updates for the Unified Trading Account (UTA).",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option"]).optional(),
    messageCount: z.number().int().min(1).default(1).optional(),
    timeoutMs: z.number().int().min(100).default(5000).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const topic = (input.category != null ? `position.${input.category as string}` : `position`);
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
