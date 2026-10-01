// listEarnAutoSavings.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const listEarnAutoSavings = {
  name: 'listEarnAutoSavings',
  description: "Query the user's Flexible Saving auto savings settings and current APR by coin.\nOmit `coins` to return all supported coins; specify up to 50 coin names to filter the result.\nThis endpoint requires Earn read permission and is limited to 10 requests per second per UID.",
  inputSchema: z.object({
    coins: z.array(z.string()).max(50).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/flexible-saving/auto-savings", input);
  },
};
