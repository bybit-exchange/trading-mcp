// switchPositionMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const switchPositionMode = {
  name: 'switchPositionMode',
  description: "Switch between one-way mode (mode=0) and hedge mode (mode=3).\nOnly USDT perpetual supports hedge mode. Either symbol or coin must be provided.\n\nAgent hint: Use this to switch between one-way (mode=0) and hedge/two-way (mode=3) position mode.\nOnly USDT perpetual contracts support two-way mode. Ensure no open positions or orders exist on the symbol before switching.\nEither symbol or coin must be provided; symbol takes priority.",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string().optional(),
    coin: z.string().optional(),
    mode: z.enum(["0", "3"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/position/switch-mode", input);
  },
};
