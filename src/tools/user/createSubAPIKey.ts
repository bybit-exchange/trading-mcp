// createSubAPIKey.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const createSubAPIKey = {
  name: 'createSubAPIKey',
  description: "Create a new API key for a sub-account. Use master account's API key.\n\n**Important notes:**\n- The API key must have at least one of the following permissions:\n  - Account Transfer\n  - Subaccount Transfer\n  - Withdrawal\n- Only **master API key** can call this endpoint\n- **The secret cannot be queried after creation** - store it securely\n- 🚨 **90-Day Expiration Rule**: API keys without IP binding will be **invalid after 90 days**\n\n**Supported Sub-account Types:**\n- Normal sub-accounts (type=1)\n- Demo sub-accounts\n- Custodial sub-accounts (type=6) that are bound to trading teams\n- Escrow fund sub-accounts (for trading teams)\n\n**Rate Limits:**\n- Default: 1 request per second per master account\n- Whitelisted accounts: Higher QPS limits may apply\n\n**API Key Limits:**\n- Maximum 20 API keys per sub-account (excluding custody and tax API keys)\n- Each API key is randomly generated (18 chars for key, 36 chars for secret)\n\n**Permissions System:**\n- Sub-accounts have restricted permissions compared to master accounts\n- Wallet permissions: Cannot use \"SubMemberTransfer\" or \"Withdraw\"\n- UTA accounts: Automatically include \"DerivativesTrade\" permission\n- Demo accounts: Only specific permissions are allowed\n- CT Broker sub-accounts: Cannot have Options, Spot, BlockTrade, or Exchange permissions\n- Escrow fund sub-accounts: Cannot have Wallet permissions\n- ReadOnly mode: All permissions are read-only\n\n**Special Account Types:**\n- **UTA required**: Non-UTA accounts cannot create API keys (except whitelisted classic brokers)\n- **Demo accounts**: Have specific permission restrictions defined in configuration\n- **Islamic accounts**: Normal API key creation with UTA support\n- **Copy Trade upgraded accounts**: Have special permission rules\n\n**EU Site Validation:**\n- Additional validation for EU site API key creation\n- App name validation for application-type API keys\n\n**NFT Permissions:**\n- NFT permissions are deprecated and automatically removed from requests",
  inputSchema: z.object({
    subuid: z.number().int(),
    readOnly: z.enum(["0", "1"]),
    ips: z.string().optional(),
    permissions: z.record(z.unknown()),
    note: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/create-sub-api", input);
  },
};
