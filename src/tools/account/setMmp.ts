// setMmp.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setMmp = {
  name: 'setMmp',
  description: "Configure Market Maker Protection parameters for options trading. All parameters\nare required. Set frozenPeriod to \"0\" for permanent freeze until manual reset.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to configure MMP for options market making. All five parameters are\nrequired. window and frozenPeriod are in milliseconds. qtyLimit and deltaLimit\nare positive numbers with max 2 decimals. Set frozenPeriod to \"0\" to require\nmanual reset via resetMmp endpoint.",
  inputSchema: z.object({
    baseCoin: z.string(),
    window: z.string(),
    frozenPeriod: z.string(),
    qtyLimit: z.string(),
    deltaLimit: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/mmp-modify", input);
  },
};
