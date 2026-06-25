// getPositionSymbolInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPositionSymbolInfo = {
  name: 'getPositionSymbolInfo',
  description: "Query futures leverage info, such as symbol leverage, side, and position mode.\n\n**Covers:** USDT perpetual / USDC contract / Inverse contract\n\n**Note:**\n- Portfolio margin情况下，返回报错",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse"]),
    symbol: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/position/symbol-info", input);
  },
};
