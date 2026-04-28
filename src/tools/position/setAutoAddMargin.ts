// setAutoAddMargin.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setAutoAddMargin = {
  name: 'setAutoAddMargin',
  description: "Toggle the auto-add-margin feature for a position. When enabled, the system automatically\nadds margin from available balance to prevent liquidation. Only works in isolated margin mode.\n\nAgent hint: Use this to toggle auto-add-margin on isolated margin positions. Set autoAddMargin to 1 (enable) or 0 (disable).\nOnly works for linear contracts in isolated margin mode. In hedge mode, specify positionIdx (1=buy, 2=sell).",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string(),
    autoAddMargin: z.enum(["0", "1"]),
    positionIdx: z.enum(["0", "1", "2"]).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/set-auto-add-margin", input);
  },
};
