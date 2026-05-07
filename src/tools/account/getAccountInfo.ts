// getAccountInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAccountInfo = {
  name: 'getAccountInfo',
  description: "Retrieve unified account configuration including margin mode, account status,\nand feature settings. No parameters required.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check account configuration before performing operations that depend\non margin mode or account type. The unifiedMarginStatus field indicates the UTA\nversion: 4 = UTA 2.0, 5 = UTA 2.0, 6 = UTA Pro. Check marginMode to confirm\nISOLATED_MARGIN, REGULAR_MARGIN, or PORTFOLIO_MARGIN.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/info", input);
  },
};
