// resetMmp.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const resetMmp = {
  name: 'resetMmp',
  description: "Reset MMP freeze state and clear trading history counters. Unfreezes the account\nif currently frozen, or resets counters if not frozen.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to unfreeze an MMP-frozen account or reset the qtyLimit/deltaLimit\ncounters. Only requires baseCoin parameter. After reset, counters go to 0\nregardless of whether the account was frozen or not.",
  inputSchema: z.object({
    baseCoin: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/mmp-reset", input);
  },
};
