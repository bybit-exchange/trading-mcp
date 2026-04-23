// getPreUpgradeExecutionList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPreUpgradeExecutionList = {
  name: 'getPreUpgradeExecutionList',
  description: "Query pre-upgrade execution (trade) records. After the account is upgraded to a Unified account, use this endpoint to get the executions which occurred before the upgrade.\n- Supports querying executions for: Spot / USDT perpetual / USDC contract / Inverse contract / Options\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 7 days by default\n- Only `startTime` provided: returns from startTime to startTime + 7 days\n- Only `endTime` provided: returns from endTime - 7 days to endTime\n- Both provided: endTime - startTime must be <= 7 days\n\n**Gaia route:** `V5_OPENAPI_QUERY_PRE_UPGRADE_EXECUTION_LIST`",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option", "spot"]),
    symbol: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    baseCoin: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    execType: z.enum(["Trade", "AdlTrade", "Funding", "BustTrade", "Delivery", "Settle", "BlockTrade", "MovePosition", "FutureSpread", "UNKNOWN"]).optional(),
    limit: z.number().int().min(1).max(100).default(50).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/pre-upgrade/execution/list", input);
  },
};
