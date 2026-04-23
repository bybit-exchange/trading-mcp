// signAgreement.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const signAgreement = {
  name: 'signAgreement',
  description: "Sign agreement to trade commodity contracts (e.g., metals). Use master account's API key.\n\n**Important notes (from official Bybit V5 documentation):**\n- Only the **master account** can sign the agreement via this endpoint\n- **Subaccounts are NOT supported** - attempting to call this with a subaccount API key will return error `141027`\n- Once the master account has signed, **all subaccounts** will automatically be eligible to trade\n- The API key must have at least one of the following permissions:\n  - Account Transfer\n  - Subaccount Transfer\n  - Withdrawal\n- The `agree` parameter must be `true` - setting to `false` is not supported for signing\n- Currently only supports **Commodity Agreement (category 2)** for metals trading\n\n**What happens when signing:**\n1. ✅ Verify caller is master account (not subaccount)\n2. ✅ Validate agreement category and consent\n3. ✅ Update member data management (MDM) service to set `IsSignCommodityAgreement` flag\n4. ✅ After successful signing, master and all subaccounts can trade commodity contracts\n5. ✅ Agreement status persists permanently (no expiration)\n\n**Process Flow:**\n1. Authenticate request with master account API key\n2. Parse metadata from request context (member ID, etc.)\n3. Check if member is a subaccount (reject if yes)\n4. Validate category is CategoryCommodityAgreement (2)\n5. Validate agree parameter is true\n6. Call MDM service to update member's agreement status\n7. Return success response (empty result object)\n\n**Use Cases:**\n- Enable trading of metals commodity contracts (Gold, Silver, etc.)\n- Complete regulatory agreement requirements\n- Unlock commodity trading for master account and all subaccounts\n- Comply with exchange trading prerequisites\n\n**Security:**\n- Master account API key required for authentication\n- Requires sensitive permissions (Account Transfer / Subaccount Transfer / Withdrawal)\n- Subaccounts cannot sign agreements independently\n- Agreement signing is irreversible and permanent",
  inputSchema: z.object({
    category: z.enum(["2"]),
    agree: z.enum(["true"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/user/agreement", input);
  },
};
