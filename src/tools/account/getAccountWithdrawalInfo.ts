// getAccountWithdrawalInfo.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getAccountWithdrawalInfo = {
  name: 'getAccountWithdrawalInfo',
  description: "Query available withdrawal balance for specified coin(s) in the Unified account.\n- The `coinName` parameter is **required** and accepts one or more coin names separated by commas (max 20 coins).\n- Returns the available withdrawal amount for each queried coin.",
  inputSchema: z.object({
    coinName: z.string(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/account/withdrawal", input, context);
  },
};
