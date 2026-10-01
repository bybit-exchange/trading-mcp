// editEarnAutoSavings.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const editEarnAutoSavings = {
  name: 'editEarnAutoSavings',
  description: "Enable or disable Flexible Saving auto savings for one coin or all supported coins.\nOmit `coin` to change the global setting. When enabling, `purchaseImmediately=true`\nasynchronously attempts to subscribe the available Funding Account balance; the\ndefault only saves the setting. `purchaseImmediately` is ignored when disabling.\nThis endpoint requires Earn write permission and is limited to 5 requests per second per UID.",
  inputSchema: z.object({
    coin: z.string().optional(),
    isSelected: z.boolean(),
    purchaseImmediately: z.boolean().default(false).optional(),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/earn/flexible-saving/auto-savings", input);
  },
};
