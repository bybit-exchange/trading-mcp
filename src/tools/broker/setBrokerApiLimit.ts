// setBrokerApiLimit.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const setBrokerApiLimit = {
  name: 'setBrokerApiLimit',
  description: "Set API rate limit for specified UIDs under exchange broker account.\n\n**Rate limit:** 1 req per second.\n\n**Rules:**\n- Only exchange broker accounts can call this endpoint.\n- If the UID calling this endpoint is a master account, the UIDs specified in the `uids` parameter must belong to its subaccounts. The master account itself cannot set a custom rate limit and can only use the default rate limit.\n- If the UID requesting this endpoint is a subaccount, the UID can only be itself in `uids`.",
  inputSchema: z.object({
    list: z.array(z.object({ uids: z.string(), bizType: z.enum(["SPOT", "DERIVATIVES", "OPTIONS"]), rate: z.number().int() })).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/broker/apilimit/set", input);
  },
};
