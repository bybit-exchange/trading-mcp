// setBatchCollateralSwitch.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setBatchCollateralSwitch = {
  name: 'setBatchCollateralSwitch',
  description: "Batch enable or disable multiple coins as collateral",
  inputSchema: z.object({
    request: z.array(z.string()),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-collateral-switch-batch", input);
  },
};
