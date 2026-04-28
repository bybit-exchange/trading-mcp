// queryBrokerAccountInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBrokerAccountInfo = {
  name: 'queryBrokerAccountInfo',
  description: "Use exchange broker master account to query account information.\n\n**Rate limit:** 10 req per second.\n\n**Rules:**\n- Requires exchange broker master account authentication.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/broker/account-info", input);
  },
};
