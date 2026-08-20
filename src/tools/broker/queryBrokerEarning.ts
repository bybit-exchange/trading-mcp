// queryBrokerEarning.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryBrokerEarning = {
  name: 'queryBrokerEarning',
  description: "Use exchange broker master account to query earnings and rebate information.\n\n**Rate limit:** 10 req per second.\n\n**Rules:**\n- The data can support up to past 1 month until T-1. To extract data from over a month ago, please contact your Relationship Manager.\n- `begin` and `end` must be provided together or not at all; latest 7 days data are returned by default.\n- Exchange broker master account required.\n\n**Error codes:**\n\n| retCode | retMsg | Description |\n|---------|--------|-------------|\n| 0 | OK | Success |\n| 10001 | Invalid parameter | Request parameter is illegal |\n| 10016 | Server Error | Internal server error |\n| 3500402 | Parameter verification failed for 'limit'. | `limit` out of range (1~1000) |\n| 3500403 | Only available to exchange broker main-account | Caller is not an exchange broker master account |\n| 3500404 | Invalid Cursor | Malformed cursor value |\n| 3500406 | Out of query time range. | Date exceeds supported query range (past 1 month) |\n| 3500407 | Parameter \"begin\" and \"end\" need to be input in pairs. | `begin` and `end` must be provided together |",
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
