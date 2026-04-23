// stopStrategy.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const stopStrategy = {
  name: 'stopStrategy',
  description: "Terminates an active strategy and cancels all associated pending orders.\n\n**When to use:**\n- Stop strategy before it completes naturally\n- React to changing market conditions\n- Cancel strategy that has unfavorable execution\n- Emergency stop for risk management\n\n**What happens when you stop:**\n1. Strategy status → Terminated\n2. All pending orders → Canceled immediately\n3. Partially filled orders → Cancel remaining unfilled portion\n4. Filled orders → No change (remain as filled)\n5. Strategy execution stats → Preserved for history\n\n**Important notes:**\n- Stopped strategies cannot be restarted\n- To continue, create a new strategy with remaining size\n- Strategy terminateType will be set to \"UserStop\" (1)\n- All child orders are canceled, not just active ones\n- Rate limit: 10 requests per second per UID\n\nAgent hint: Use this endpoint when user wants to stop a running strategy.\nCommon requests: \"stop my strategy\", \"cancel TWAP\", \"stop strategy X\".\nRequires strategyId - if not provided, query strategy list first.",
  inputSchema: z.object({
    strategyId: z.string(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/strategy/stop", input);
  },
};
