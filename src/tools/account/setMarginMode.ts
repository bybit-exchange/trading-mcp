// setMarginMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setMarginMode = {
  name: 'setMarginMode',
  description: "Switch account margin mode (portfolio margin, etc.)",
  inputSchema: z.object({
    setMarginMode: z.enum(["ISOLATED_MARGIN", "REGULAR_MARGIN", "PORTFOLIO_MARGIN"]),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":false,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-margin-mode", input);
  },
};
