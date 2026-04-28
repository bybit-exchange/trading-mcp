// setCollateralSwitch.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setCollateralSwitch = {
  name: 'setCollateralSwitch',
  description: "Enable or disable specified coin as collateral",
  inputSchema: z.object({
    coin: z.string(),
    collateralSwitch: z.enum(["ON", "OFF"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-collateral-switch", input);
  },
};
