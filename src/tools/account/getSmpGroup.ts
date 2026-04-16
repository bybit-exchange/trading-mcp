// getSmpGroup.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSmpGroup = {
  name: 'getSmpGroup',
  description: "Query the Self-Matching Prevention (SMP) group ID associated with the account.\nReturns 0 if the account does not belong to any group.\n\nRate limit: 10 req/s\n\nAgent hint: Use this to check the SMP group assignment. No parameters needed. Returns\nsmpGroup as an integer (0 = no group). SMP groups prevent self-matching\nbetween accounts in the same group.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/smp-group", input);
  },
};
