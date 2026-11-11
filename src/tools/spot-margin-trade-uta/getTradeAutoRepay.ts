// getTradeAutoRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getTradeAutoRepay = {
  name: 'getTradeAutoRepay',
  description: "Retrieve the authenticated Unified account's saved setting for trade auto repayment. result.autoRepay is \"1\" for enabled or \"0\" for disabled; this does not report whether any individual trade triggered repayment. Trade auto repayment runs only in Cross and Portfolio margin modes; an enabled saved setting has no effect in Isolated mode. This account-wide switch is separate from scheduled auto repayment queried by getSpotMarginTradeAutoRepayMode. Locally limited to 50 requests per rolling second per path within one MCP process. Business failures surface as MCP tool errors.",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/spot-margin-trade/get-trade-auto-repay", input, context);
  },
};
