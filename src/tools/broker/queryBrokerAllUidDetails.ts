// queryBrokerAllUidDetails.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBrokerAllUidDetails = {
  name: 'queryBrokerAllUidDetails',
  description: "Use the master account to query for all your UID-level rate limits, including all master accounts and subaccounts.\n\n**Rate limit:** 1 req per second.\n\n**Rules:**\n- Only exchange broker accounts can call this endpoint.\n- Accounts that have never had a rate limit configured via Set Rate Limit will not appear in the response and will use the default rate limit.",
  inputSchema: z.object({
    uids: z.string().optional(),
    limit: z.number().int().min(1).max(1000).default(1000).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/broker/apilimit/query-all", input);
  },
};
