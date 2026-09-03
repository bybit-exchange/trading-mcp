// getAccountInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAccountInfo = {
  name: 'getAccountInfo',
  description: "Query account margin mode, UTA status, DCP status, and other configuration info",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/info", input);
  },
};
