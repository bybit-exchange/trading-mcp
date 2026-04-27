// getPreUpgradeOrderHistory.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPreUpgradeOrderHistory = {
  name: 'getPreUpgradeOrderHistory',
  description: "Query pre-upgrade order history. After the account is upgraded to a Unified account, use this endpoint to get the orders which occurred before the upgrade.\n- Supports querying orders for: Spot / USDT perpetual / USDC contract / Inverse contract / Options\n\n**Unified account covers:** USDT perpetual / USDC contract / Inverse contract / Options / Spot\n**Classic account covers:** USDT perpetual / Inverse contract / Spot\n\n**Data access rules:**\n- All statuses: last 7 days\n- Filled orders only: beyond 7 days\n- USDC Perpetual & Options: recent 6 months (older data via GUI download)\n\n**Time range rules:**\n- Without both `startTime` and `endTime`: returns last 7 days by default\n- Only `startTime` provided: returns from startTime to startTime + 7 days\n- Only `endTime` provided: returns from endTime - 7 days to endTime\n- Both provided: endTime - startTime must be <= 7 days\n\n**Gaia route:** `V5_OPENAPI_QUERY_PRE_UPGRADE_ORDER_HISTORY`",
  inputSchema: z.object({
    category: z.enum(["linear", "inverse", "option", "spot"]),
    symbol: z.string().optional(),
    baseCoin: z.string().optional(),
    orderId: z.string().optional(),
    orderLinkId: z.string().optional(),
    orderFilter: z.enum(["Order", "StopOrder"]).optional(),
    orderStatus: z.string().optional(),
    startTime: z.number().int().optional(),
    endTime: z.number().int().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/pre-upgrade/order/history", input);
  },
};
