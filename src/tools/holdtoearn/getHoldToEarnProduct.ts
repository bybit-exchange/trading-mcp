// getHoldToEarnProduct.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getHoldToEarnProduct = {
  name: 'getHoldToEarnProduct',
  description: "Query available Hold-to-Earn product listings.\nNo authentication required.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.get("/v5/earn/hold-to-earn/product", input, context);
  },
};
