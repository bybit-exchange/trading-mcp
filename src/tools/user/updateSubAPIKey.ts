// updateSubAPIKey.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const updateSubAPIKey = {
  name: 'updateSubAPIKey',
  description: "Update permissions for a sub-account's API key. Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only **master account** can update sub-account API keys\n- **Sub-accounts CANNOT use this endpoint** - must use master account's API key\n- Must specify the `subuid` to identify which sub-account's API key to update\n- Can only update **permissions** - IP whitelist modification is **FORBIDDEN via API**\n- 🚨 **Read-Write API keys CANNOT add or delete FiatP2P, FiatBitPay (formerly FiatBybitPay), and FiatConvertBroker permissions**\n- **Only the API key specified by `apikey` parameter can be modified**\n\n**Critical Restrictions:**\n- ❌ **IP Modification Forbidden**: Cannot modify `ips` via API - must use web interface\n- ❌ **Sensitive Permission Modification Forbidden**: For read-write API keys with sensitive permissions (Withdraw, etc.), cannot modify via API\n- ❌ **Cannot add Withdraw permission** if the API key doesn't already have it\n- ❌ **Withdraw permission requires IP whitelist** - cannot use with wildcard IPs\n- ❌ **Fiat permissions restricted**: Read-Write keys cannot add/delete FiatP2P, FiatBitPay (formerly FiatBybitPay), FiatConvertBroker\n\n**Permission System:**\n- UTA accounts: Automatically include \"DerivativesTrade\" permission\n- Affiliate permission: **Mutually exclusive** with all other permissions\n- NFT permissions are deprecated and automatically removed\n- Fiat permissions (P2P, Pay): Require account validation\n- Block Trade permission: Requires KYC verification and cannot be affiliate user\n\n**Sub-account Restrictions (same as CreateSubAPIKey):**\n- Cannot use: \"SubMemberTransfer\", \"Withdraw\" in Wallet permissions\n- Demo accounts: Only specific permissions allowed\n- CT Broker sub-accounts: Cannot have Options, Spot, BlockTrade, Exchange permissions\n- Escrow fund sub-accounts: Cannot have Wallet permissions\n- Custodial sub-accounts: Cannot have CopyTrading\n\n**Auto-Extension:**\n- Personal API keys with expiration time: Automatically extended by configured months from current time\n- Application API keys: Maintain original expiration time\n\n**What Gets Updated:**\n- ✅ Permissions (with restrictions)\n- ✅ Expiration time (auto-extended for personal keys)\n- ✅ Note (if provided)\n- ✅ Read-only status\n- ❌ IPs (forbidden - must use web interface)\n- ❌ API key / secret (immutable)",
  inputSchema: z.object({
    subuid: z.number().int(),
    apikey: z.string().optional(),
    readOnly: z.enum(["0", "1"]),
    ips: z.string().optional(),
    permissions: z.record(z.unknown()).optional(),
    note: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/update-sub-api", input);
  },
};
