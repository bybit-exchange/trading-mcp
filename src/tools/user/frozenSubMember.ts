// frozenSubMember.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const frozenSubMember = {
  name: 'frozenSubMember',
  description: "Freeze or unfreeze a sub-account. Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only **master account** can freeze/unfreeze sub-accounts\n- **Sub-accounts CANNOT use this endpoint**\n- Must specify both `subuid` and `frozen` status\n- The API key must have at least one of the following permissions:\n  - Account Transfer\n  - Subaccount Transfer\n  - Withdrawal\n\n**What happens when freezing (frozen=1):**\n1. ✅ Update sub-account status to \"frozen\" in database\n2. ✅ Call ban service to enable login ban (bizType=LOGIN, tag=account:login)\n3. ✅ Remove all API key caches for this sub-account\n4. ✅ Send API key deletion/update notifications to dependent services\n5. ✅ Kick out all active login sessions (unset login)\n6. ❌ Sub-account cannot login or use API keys until unfrozen\n\n**What happens when unfreezing (frozen=0):**\n1. ✅ Update sub-account status to \"normal\" in database\n2. ✅ Call ban service to disable login ban\n3. ✅ Sub-account can login and use API keys again\n\n**Process Flow:**\n1. Parse metadata to get master account ID from request context\n2. Validate frozen parameter (must be 0 or 1)\n3. Verify parent-child relationship (check member_relations table)\n4. Update sub-account status in database\n5. Call ban service (EnableBan for freeze, DisableBan for unfreeze)\n6. If freezing: clear API key caches and terminate sessions\n\n**Security:**\n- Master account API key required for authentication\n- Cannot freeze sub-accounts of other master accounts\n- Cannot freeze deleted sub-accounts (status=soft_delete)\n- Supports normal (type=1) and custodial (type=6) sub-accounts\n\n**Use Cases:**\n- Temporarily suspend a sub-account for security reasons\n- Disable a compromised sub-account immediately\n- Control sub-account access during maintenance\n- Manage sub-account permissions dynamically",
  inputSchema: z.object({
    subuid: z.number().int(),
    frozen: z.enum(["0", "1"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/frozen-sub-member", input);
  },
};
