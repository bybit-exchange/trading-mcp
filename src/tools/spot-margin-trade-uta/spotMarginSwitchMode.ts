// spotMarginSwitchMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const spotMarginSwitchMode = {
  name: 'spotMarginSwitchMode',
  description: "Enable or disable spot cross margin trading mode, rate limit 5/user/path/s",
  inputSchema: z.object({
    spotMarginMode: z.enum(["0", "1"]),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":false,"openWorldHint":true},
  requiresApproval: true,
  approvalTarget: "/v5/spot-margin-trade/switch-mode",
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/spot-margin-trade/switch-mode", input);
  },
};
