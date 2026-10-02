// getRegisterTime.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRegisterTime = {
  name: 'getRegisterTime',
  description: "Query the current user's registration time, used to determine the start time range for tax reporting.\nInternally queries user's first registration date via the big data API.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":false,"destructiveHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/fht/compliance/tax/v3/private/registertime", input);
  },
};
