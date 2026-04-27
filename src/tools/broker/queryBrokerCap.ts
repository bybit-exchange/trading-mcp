// queryBrokerCap.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBrokerCap = {
  name: 'queryBrokerCap',
  description: "Get your exchange broker account entity total rate limit usage and cap, across the board.\n\n**Rate limit:** 5 req per second.\n\n**Rules:**\n- Only Main UIDs can query this endpoint.\n- Only exchange broker accounts can call this endpoint.\n- If you never applied for a specific config via account manager, the response will be empty.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/broker/apilimit/query-cap", input);
  },
};
