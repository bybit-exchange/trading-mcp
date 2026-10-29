// getSpotMarginTradeMaxBorrowable.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getSpotMarginTradeMaxBorrowable = {
  name: 'getSpotMarginTradeMaxBorrowable',
  description: "Retrieve the maximum borrowable amount for a specified cryptocurrency in spot margin trading.\n- Unified account only",
  inputSchema: z.object({
    currency: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/spot-margin-trade/max-borrowable", input, context);
  },
};
