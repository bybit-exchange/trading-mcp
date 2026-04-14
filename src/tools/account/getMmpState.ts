// getMmpState.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMmpState = {
  name: 'getMmpState',
  description: "Query Market Maker Protection configuration and freeze status for the specified\nbase coin. Returns MMP parameters and current state.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to check MMP settings and freeze status. The baseCoin parameter is required.\nKey fields: mmpEnabled (whether MMP is active), window (time window in ms),\nfrozenPeriod (freeze duration in ms), qtyLimit, deltaLimit, mmpFrozen (current\nfreeze status), mmpFrozenUntil (freeze expiry timestamp).",
  inputSchema: z.object({
    baseCoin: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/mmp-state", input);
  },
};
