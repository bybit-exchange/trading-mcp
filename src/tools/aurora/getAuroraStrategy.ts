// getAuroraStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAuroraStrategy = {
  name: 'getAuroraStrategy',
  description: "Returns the full Aurora AI strategy (params + backtest metrics) identified\nby the encoded `aurora_id` that was previously returned by one of the\nrecommendation endpoints.\n\nRate limit: 20 requests per second per UID per path.\n\nAgent hint: Use this to refetch an Aurora strategy you have its `aurora_id` for —\nfor example to refresh the backtest metrics or re-display params. If you\ndo not yet have an `aurora_id`, call one of the recommendation endpoints\nfirst (`/v5/aurora/home`, `/v5/aurora/creation`, `/v5/aurora/explore`,\n`/v5/aurora/easy`).",
  inputSchema: z.object({
    aurora_id: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/aurora/info", input);
  },
};
