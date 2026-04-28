// getPreUpgradeSettlementRecord.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getPreUpgradeSettlementRecord = {
  name: 'getPreUpgradeSettlementRecord',
  description: "Query pre-upgrade USDC session settlement records. After the account is upgraded to a Unified account, use this endpoint to get the settlement data which occurred before the upgrade.\n- Only supports querying USDC perpetual settlement records\n- Category must be `linear`\n\n**Gaia route:** `V5_OPENAPI_QUERY_PRE_UPGRADE_SETTLEMENT_RECORD`",
  inputSchema: z.object({
    category: z.enum(["linear"]),
    symbol: z.string().optional(),
    limit: z.number().int().min(1).max(50).default(20).optional(),
    cursor: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/pre-upgrade/asset/settlement-record", input);
  },
};
