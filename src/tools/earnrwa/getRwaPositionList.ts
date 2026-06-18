// getRwaPositionList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getRwaPositionList = {
  name: 'getRwaPositionList',
  description: "Query the user's RWA holding positions, including effective shares,\nin-flight stake/redeem amounts, accrued bonus, current NAV, and hold value.\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/earn/rwa/position", input);
  },
};
