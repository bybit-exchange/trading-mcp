// setPriceLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setPriceLimit = {
  name: 'setPriceLimit',
  description: "Configure price limit action behavior per product category. Controls whether\norders exceeding price limits are auto-adjusted or rejected.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to control how orders are handled when they exceed price limits.\nSet modifyEnable=true for auto-adjustment, false for rejection. Settings for\nlinear or inverse apply to all futures. Use getUserSettings to check current config.",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "spot"]),
    modifyEnable: z.boolean(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-limit-px-action", input);
  },
};
