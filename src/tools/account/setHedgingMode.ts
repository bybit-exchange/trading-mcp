// setHedgingMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setHedgingMode = {
  name: 'setHedgingMode',
  description: "Enable or disable PM include spot hedging mode",
  inputSchema: z.object({
    setHedgingMode: z.enum(["ON", "OFF"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-hedging-mode", input);
  },
};
