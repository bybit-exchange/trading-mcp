// setDefaultDepositToAccount.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../../client/rest-client.js';

export const setDefaultDepositToAccount = {
  name: 'setDefaultDepositToAccount',
  description: "Set the default account type for receiving on-chain deposit funds.\n- Only **main** UID API key can call this endpoint\n- Sub-accounts are **not** allowed\n- Funds default to `FUND` wallet if not configured\n- UTA 2.0 upgraded users cannot set to `CONTRACT`\n- KYC compliance wall restrictions may limit available account types",
  inputSchema: z.object({
    accountType: z.enum(["UNIFIED", "FUND"]),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/asset/deposit/deposit-to-account", input);
  },
};
