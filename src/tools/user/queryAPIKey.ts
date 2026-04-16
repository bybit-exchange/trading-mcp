// queryAPIKey.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryAPIKey = {
  name: 'queryAPIKey',
  description: "Query comprehensive information about an API key. Use master or sub-account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- \"Any permission can access this endpoint\" - available to both master and sub-user accounts\n- Can only query the API key that is being used to authenticate the request\n- Returns comprehensive metadata including permissions, account status, VIP level, KYC info\n- **Secrets are NEVER returned for security**\n- IP whitelist is returned in JSON array format\n- Permissions are parsed and returned by category\n\n**What information is returned:**\n1. ✅ API key basic info (ID, key string, note, creation/expiration time)\n2. ✅ IP binding configuration\n3. ✅ Permissions breakdown by 14 categories\n4. ✅ Read-only status\n5. ✅ Key type (personal or third-party)\n6. ✅ Account identification (master/sub, parent UID)\n7. ✅ Account status (UTA/unified account upgrade status)\n8. ✅ Affiliate/referral information (affiliate ID, inviter ID)\n9. ✅ VIP/market maker level\n10. ✅ KYC verification level and region\n\n**Process Flow:**\n1. Parse metadata from request context to get member ID and API key\n2. Query API key information from database\n3. Validate API key status (must be VERIFIED)\n4. Validate API key ownership (memberID must match)\n5. Get account tags (UNIFIED_ACCOUNT_STATE, UTA)\n6. Get master/sub relationship information\n7. Get affiliate/referral information\n8. Get VIP level from loyalty program service\n9. Get KYC level and region from KYC service (with 5-minute cache)\n10. Parse and format permissions\n\n**Permissions Parsing:**\n- Legacy format: \"All\" → [\"Order\", \"Position\"]\n- Legacy format: \"Order\" or \"Position\" → single permission\n- New format: JSON string with permission categories and read-only flag\n- 15 categories: ContractTrade, Spot, Wallet, Options, Derivatives, CopyTrading, BlockTrade, Exchange, NFT, Affiliate, Earn, FiatP2P, FiatBitPay, FiatBybitPay (deprecated), FiatConvertBroker\n\n**Account Status Fields:**\n- `unified`: 1 if UNIFIED_ACCOUNT_STATE tag = \"SUCCESS\", else 0\n- `uta`: 1 if UTA tag = \"SUCCESS\", else 0\n- `isMaster`: true if not a sub-account, false otherwise\n\n**Use Cases:**\n- Check current API key's permissions and configuration\n- Verify API key expiration time\n- Get account VIP level and KYC status\n- Identify master/sub account relationship\n- Check UTA upgrade status",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/user/query-api", input);
  },
};
