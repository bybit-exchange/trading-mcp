// getSpotMarginTradeState.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const getSpotMarginTradeState = {
  name: 'getSpotMarginTradeState',
  description: "Query the Spot margin status and leverage of the unified account.\n- Unified account only",
  inputSchema: z.object({

  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/spot-margin-trade/state", input, context);
  },
};
