// getPreUpgradeDeliveryRecord.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPreUpgradeDeliveryRecord = {
  name: 'getPreUpgradeDeliveryRecord',
  description: "Query pre-upgrade delivery records for Options. After the account is upgraded to a Unified account, use this endpoint to get the delivery data which occurred before the upgrade.\n- Only supports querying delivery records for USDC Options\n- Supports the recent 6 months Options delivery data\n- Results are sorted by delivery time in descending order\n\n**Gaia route:** `V5_OPENAPI_QUERY_PRE_UPGRADE_DELIVERY_RECORD`",
  inputSchema: z.object({
    category: z.enum(["option"]),
    symbol: z.string().optional(),
    expDate: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/pre-upgrade/asset/delivery-record", input);
  },
};
