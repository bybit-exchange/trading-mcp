// getEarnYieldHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getEarnYieldHistory = {
  name: 'getEarnYieldHistory',
  description: "Query yield history. Supports `FlexibleSaving` and `OnChain`.",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "OnChain"]),
    productId: z.number().int().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/earn/yield", input, context);
  },
};
