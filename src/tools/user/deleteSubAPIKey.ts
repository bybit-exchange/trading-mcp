// deleteSubAPIKey.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const deleteSubAPIKey = {
  name: 'deleteSubAPIKey',
  description: "Delete (invalidate) a sub-account's API key. Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only **master account** can delete sub-account API keys\n- **Sub-accounts CANNOT use this endpoint**\n- Must specify both `subuid` and the API key to delete\n- Deletion is **IRREVERSIBLE** - the API key will be permanently invalidated\n- API key cache is cleared immediately after deletion\n- Notification is sent to dependent services\n\n**What happens when deleting:**\n1. ✅ Verify parent-child relationship between master and sub-account\n2. ✅ Set API key status to invalid in database\n3. ✅ Clear all cached data for this API key\n4. ✅ Send event notifications to dependent services\n5. ✅ If API key has BlockTrade permission, special cleanup is performed\n6. ❌ API key cannot be recovered - must create a new one if needed\n\n**Process Flow:**\n1. Validate sub-account belongs to master account\n2. Verify API key exists and belongs to sub-account\n3. Update API key status to invalid\n4. Clear caches (Redis, local cache)\n5. Send notifications (Kafka events)\n6. Cleanup BlockTrade related data if applicable\n\n**Security:**\n- Master account API key required for authentication\n- Cannot delete API keys of other master accounts' sub-accounts\n- Deletion takes effect immediately across all systems\n\n**Use Cases:**\n- Rotating sub-account API keys for security\n- Revoking compromised sub-account API keys\n- Cleaning up unused sub-account API keys\n- Removing API keys with incorrect permissions",
  inputSchema: z.object({
    subuid: z.number().int(),
    apikey: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/delete-sub-api", input);
  },
};
