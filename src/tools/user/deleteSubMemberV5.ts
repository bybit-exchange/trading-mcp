// deleteSubMemberV5.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const deleteSubMemberV5 = {
  name: 'deleteSubMemberV5',
  description: "Delete a sub-account. Use master account's API key.\n\n**Important notes:**\n- Only **master account** can call this endpoint\n- **This operation is IRREVERSIBLE** - deleted accounts cannot be recovered\n- Sub-account must meet deletion requirements:\n  - No open positions\n  - No open orders\n  - No pending operations\n  - Asset balance must be zero (transfer assets to master account first)\n- All API keys associated with the sub-account will be deleted\n- Sub-account login credentials will be invalidated\n\n**Required Permissions:**\n- Master API key with appropriate permissions\n\n**Pre-deletion Requirements:**\n- Transfer all assets to master account or other accounts\n- Close all open positions\n- Cancel all open orders\n- Complete all pending operations\n- Ensure no active copy trading or trading bot activities\n\n**Restrictions:**\n- Cannot delete if sub-account has enrolled in series games\n- Cannot delete if sub-account is designated for Copy Trading use\n- Cannot delete if sub-account has Trading Bot opened\n- Magpie verified accounts have additional verification requirements\n- Copy Pro accounts cannot be deleted\n\n**Forbidden Deletion Cases:**\n- Sub-account with non-zero balance\n- Sub-account with open positions\n- Sub-account with open orders\n- Sub-account with active copy trading\n- Sub-account with active trading bot\n- Sub-account enrolled in competitions",
  inputSchema: z.object({
    subuid: z.number().int(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/del-submember", input);
  },
};
