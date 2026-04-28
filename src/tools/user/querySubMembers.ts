// querySubMembers.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const querySubMembers = {
  name: 'querySubMembers',
  description: "Get a complete list of all sub-accounts under the master account. Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only **master account** can call this endpoint\n- **Sub-accounts CANNOT use this endpoint**\n- Returns ALL sub-accounts in a single response (no pagination)\n- Includes comprehensive account information and UTA status\n\n**What information is returned:**\n1. ✅ Sub-account UID and username\n2. ✅ Account type (normal, custodial, demo, escrow fund)\n3. ✅ Account status (normal, banned, frozen, deleted)\n4. ✅ Account mode (Classic, UTA 1.0/2.0, UTA Pro, Unified)\n5. ✅ Remark/notes for each sub-account\n\n**Supported Sub-account Types:**\nThis endpoint returns ALL types of sub-accounts:\n- Normal sub-accounts (type=1, MEMBER_RELATION_TYPE_OWN)\n- Custodial sub-accounts (type=6, MEMBER_RELATION_TYPE_ENTRUST_TRADE)\n- Demo sub-accounts (type=2, MEMBER_RELATION_TYPE_DEMO)\n- Escrow fund sub-accounts (for trading teams)\n\n**Process Flow:**\n1. Parse metadata from request context to get master account ID\n2. Query normal + demo + trading custodial sub-accounts via ListSubMemberForOpenAPI\n   - Queries member_relation table with decrypted login names\n   - Includes types: OWN (1), DEMO (2), ENTRUST_TRADE (6)\n3. Query escrow fund sub-accounts for trading teams via GetEscrowFundSubMember\n   - Queries escrow_fund_member_relation table\n   - Specific for trading team escrow accounts\n4. Merge both lists of sub-accounts\n5. If no sub-accounts found, return empty list\n6. Extract all sub-account IDs for batch queries\n7. Fetch UTA tags (UTA, UNIFIED, UTAPRO, UTAINVERSE) from member_tags table\n8. For each sub-account:\n   - Get basic info (UID, username, type, status, remark)\n   - Calculate accountMode based on UTA tags\n   - Default accountMode = 1 if no tags found\n9. Return complete sub-account list\n\n**Account Mode Determination Logic:**\nThe account mode is determined by checking member tags in the following priority:\n1. If both UTAPRO=SUCCESS and UTAINVERSE=SUCCESS → UTA 2.0 Pro (6)\n2. If UTAINVERSE=SUCCESS → UTA 2.0 (5)\n3. If UTAPRO=SUCCESS → UTA 1.0 Pro (4)\n4. If UTA=SUCCESS → UTA 1.0 (3)\n5. If UNIFIED=SUCCESS → Unified (7)\n6. Otherwise → Classic/Default (1)\n\n**Difference from V5 Query:**\n- This endpoint (V3): Returns ALL sub-accounts in single response, no pagination\n- /v5/user/submembers (V5): Uses cursor-based pagination with pageSize limit\n\n**Use Cases:**\n- Get complete overview of all sub-accounts\n- Check sub-account statuses and configurations\n- Audit UTA upgrade status across all sub-accounts\n- Small to medium-sized sub-account lists (no pagination)",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    const result = await restClient.getAuth("/v5/user/query-sub-members", input) as any;
        result?.result?.subMembers?.forEach((m: any) => { delete m.remark; });
    return result;
  },
};
