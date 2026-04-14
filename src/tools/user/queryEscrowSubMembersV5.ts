// queryEscrowSubMembersV5.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryEscrowSubMembersV5 = {
  name: 'queryEscrowSubMembersV5',
  description: "Query escrow (fund management) sub-accounts in paginated format. Use trading team's API key.\n\n**Important notes:**\n- Returns **escrow sub-accounts** (fund management type) associated with trading teams\n- Supports **pagination** using cursor-based navigation\n- Used specifically for **Private Wealth Management** scenarios\n- Only returns escrow sub-accounts bound to the requesting trading team\n- Trading team accounts can query their managed escrow relationships\n\n**Escrow Sub-accounts:**\n- Type 6 custodial sub-accounts designated for fund management\n- Managed by trading teams on behalf of clients\n- Username displayed as \"Private_Wealth_Management\" for privacy\n- Have special permissions and restrictions\n- Cannot be directly accessed like normal sub-accounts\n- Relationship stored with escrow metadata in extension field\n\n**Pagination:**\n- Uses cursor-based pagination for efficient large dataset handling\n- Default page size: 100 (maximum)\n- Returns `nextCursor` for fetching next page\n- `nextCursor = 0` indicates last page reached\n\n**Required Permissions:**\n- Trading team account API key\n- Appropriate escrow management permissions\n\n**Response includes:**\n- Escrow sub-account UID\n- Account type (always 6 for escrow)\n- Account status\n- Account mode (Classic or UTA)\n- Remark/notes from extension field\n- Next cursor for pagination\n\n**Use Cases:**\n- Trading teams managing client funds\n- Private wealth management operations\n- Institutional custody account listing\n- Fund management auditing\n- Escrow relationship monitoring",
  inputSchema: z.object({
    nextCursor: z.number().int().min(0).default(0).optional(),
    pageSize: z.number().int().min(1).max(100).default(100).optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/escrow_sub_members", input);
  },
};
