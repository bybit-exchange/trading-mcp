// setBatchCollateralSwitch.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setBatchCollateralSwitch = {
  name: 'setBatchCollateralSwitch',
  description: "Batch enable or disable multiple coins as collateral\n\nAgent hint: Error handling: 182012 means collateral services are unavailable in the user's region due to regulatory requirements — a region restriction, NOT a parameter problem, so do not retry and do not try a different coin. 182011 means the coin's collateral amount has reached the platform limit — suggest enabling collateral on another asset, or transferring in another supported asset as collateral.",
  inputSchema: z.object({
    request: z.array(z.object({ coin: z.string(), collateralSwitch: z.enum(["ON", "OFF"]) })),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":false,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-collateral-switch-batch", input);
  },
};
