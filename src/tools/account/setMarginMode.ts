// setMarginMode.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setMarginMode = {
  name: 'setMarginMode',
  description: "Set the account margin mode. Supports ISOLATED_MARGIN, REGULAR_MARGIN, and\nPORTFOLIO_MARGIN. Returns failure reasons if the mode cannot be set.\n\nRate limit: 5 req/s\n\nAgent hint: Use this to change the account's margin mode. The setMarginMode field is required.\nCheck the result.reasons array for failure details. Portfolio margin typically\nrequires a minimum equity threshold (e.g., 1000 USDC). Use getAccountInfo first\nto check the current mode.",
  inputSchema: z.object({
    setMarginMode: z.enum(["ISOLATED_MARGIN", "REGULAR_MARGIN", "PORTFOLIO_MARGIN"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/set-margin-mode", input);
  },
};
