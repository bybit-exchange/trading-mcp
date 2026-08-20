// upgradeToUta.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const upgradeToUta = {
  name: 'upgradeToUta',
  description: "Upgrade eligible UTA2.0 account to UTA2.0 Pro status.\n- Account must have unifiedMarginStatus=5 (UTA2.0)\n- Master account users must be VIP or PRO level\n- Ensure there are no open orders before upgrading\n- Avoid upgrading during the 50th minute to 5th minute of each hour",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/account/upgrade-to-uta", input);
  },
};
