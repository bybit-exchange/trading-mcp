// deleteAPIKey.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const deleteAPIKey = {
  name: 'deleteAPIKey',
  description: "Delete (invalidate) a master account's API key. Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only **master account** can delete its own API keys\n- **Sub-accounts CANNOT use this endpoint**\n- Deletion is **IRREVERSIBLE** - the API key will be permanently invalidated\n- **The API key being deleted CANNOT be the same key used to make this API call**\n- Must use a **different** master API key to authenticate this request\n- API key cache is cleared immediately after deletion\n\n**What happens when deleting:**\n1. ✅ API key status is set to invalid in database\n2. ✅ All cached data for this API key is cleared\n3. ✅ Event notification is sent to dependent services\n4. ✅ If API key has BlockTrade permission, special cleanup is performed\n5. ❌ API key cannot be recovered - must create a new one if needed\n\n**Security Best Practices:**\n- Always keep at least 2 API keys: one for daily use, one for management\n- Use a different API key to delete another key\n- Cannot delete the API key currently being used (returns error)\n- Deletion takes effect immediately across all systems\n\n**Use Cases:**\n- Rotating API keys for security\n- Revoking compromised API keys\n- Cleaning up unused API keys\n- Removing API keys with incorrect permissions",
  inputSchema: z.object({
    apikey: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/delete-api", input);
  },
};
