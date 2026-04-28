// queryBrokerEarning.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBrokerEarning = {
  name: 'queryBrokerEarning',
  description: "Use exchange broker master account to query earnings and rebate information.\n\n**Rate limit:** 10 req per second.\n\n**Rules:**\n- The data can support up to past 1 month until T-1. To extract data from over a month ago, please contact your Relationship Manager.\n- `begin` and `end` must be provided together or not at all; latest 7 days data are returned by default.\n- Exchange broker master account required.",
  inputSchema: z.object({
    bizType: z.enum(["SPOT", "DERIVATIVES", "OPTIONS", "CONVERT"]).optional(),
    begin: z.string().optional(),
    end: z.string().optional(),
    uid: z.string().optional(),
    limit: z.number().int().min(1).max(1000).default(1000).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/broker/earnings-info", input);
  },
};
