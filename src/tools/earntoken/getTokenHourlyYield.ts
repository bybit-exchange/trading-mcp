// getTokenHourlyYield.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getTokenHourlyYield = {
  name: 'getTokenHourlyYield',
  description: "Query user's hourly yield calculation records (distributed yields).\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    coin: z.enum(["BYUSDT"]),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(100).default(20).optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/earn/token/hourly-yield", input, context);
  },
};
