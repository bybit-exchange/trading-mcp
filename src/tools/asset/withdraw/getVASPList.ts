// getVASPList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const getVASPList = {
  name: 'getVASPList',
  description: "Query the list of available VASPs (Virtual Asset Service Providers).\n- Used for Travel Rule compliance when withdrawing to exchanges.\n- The returned list is based on the user's compliance zone (determined by UID).\n- Use `\"others\"` as `vaspEntityId` for exchanges not in the list.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/asset/withdraw/vasp/list", input);
  },
};
