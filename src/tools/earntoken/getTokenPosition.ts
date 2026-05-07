// getTokenPosition.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getTokenPosition = {
  name: 'getTokenPosition',
  description: "Query user's BYUSDT Token position and yield summary.\n\n**Rate Limit:** 20 req/s (UID)",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/token/position", input);
  },
};
