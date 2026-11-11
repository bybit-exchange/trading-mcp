// setTradeAutoRepay.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const setTradeAutoRepay = {
  name: 'setTradeAutoRepay',
  description: "Enable (autoRepay=\"1\") or disable (autoRepay=\"0\") trade auto repayment for the authenticated Unified account. Requires explicit client approval. When enabled, a coin credited by an eligible spot trade can repay its own flexible-rate liability without asset conversion; the amount depends on the trade credit, available balance, and outstanding liability. This account-wide switch is disabled by default and separate from scheduled auto repayment configured by setAutoRepayMode. Repayment runs only in Cross and Portfolio margin modes. Isolated accounts can save the setting, but no trade auto repayment runs while they remain in Isolated mode. A successful response reports the saved switch in result.autoRepay, not a completed repayment. autoRepay must be the string \"0\" or \"1\"; 34022101 means invalid autoRepay. Locally limited to 5 requests per rolling second per path within one MCP process. Business failures surface as MCP tool errors.",
  inputSchema: z.object({
    autoRepay: z.enum(["0", "1"]),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":false,"openWorldHint":true},
  requiresApproval: true,
  approvalTarget: "/v5/spot-margin-trade/set-trade-auto-repay",
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.postAuth("/v5/spot-margin-trade/set-trade-auto-repay", input, context);
  },
};
