// getSpreadTradeHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getSpreadTradeHistory = {
  name: 'getSpreadTradeHistory',
  description: "Query spread trading execution (trade) history, including individual leg execution details.\n\n**Usage Scenarios:**\n- Review fills and execution prices for completed spread trades.\n- Audit fees per leg (use `execFeeV2` for spot legs, `execFee` for futures legs).\n- Reconcile execution data across both legs of a spread order.\n- Query executions within a specific time range (max 7-day window).\n\n**Time Range Logic:**\n- Neither `startTime` nor `endTime`: returns last 7 days of history.\n- `startTime` only: returns data from `startTime` to `startTime + 7 days`.\n- `endTime` only: returns data from `endTime - 7 days` to `endTime`.\n- Both provided: `endTime - startTime` must be <= 7 days.\n\n**Important:**\n- In self-trade cases, both maker and taker single-leg trades are returned.\n- For spot legs, use `execFeeV2` instead of `execFee` (which is deprecated for spot).\n\nAgent hint: GET endpoint requiring authentication. All parameters are optional. Time range limited\nto 7 days max. Response includes a nested legs array with per-leg execution details.\nFor spot legs use execFeeV2 (execFee is deprecated for spot). Self-trade cases return\nboth maker and taker legs.",
  inputSchema: z.object({
    symbol: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/spread/execution/list", input);
  },
};
