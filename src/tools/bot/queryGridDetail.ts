// queryGridDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryGridDetail = {
  name: 'queryGridDetail',
  description: "Retrieves comprehensive details of a spot grid bot including symbol,\nprice range, investment amount, profit metrics (total profit, grid\nprofit, APR), arbitrage count, status, stop-loss/take-profit settings,\ntrailing stop configuration, and close reason (if closed).\n\nUse this when you need to check the current state, performance, or\nconfiguration of a specific grid bot. The grid_id is obtained from\ncreateGridBot response or grid list queries.\n\nRate limit: 10 qps per UID.\n\nAgent hint: Use this to answer questions about a specific grid bot's performance\nor status. The grid_id is a numeric ID returned by createGridBot.",
  inputSchema: z.object({
    grid_id: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.post("/v5/grid/query-grid-detail", input);
  },
};
