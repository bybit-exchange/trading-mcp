// getUserSettingConfig.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getUserSettingConfig = {
  name: 'getUserSettingConfig',
  description: "Query the user account setting configuration, including margin mode, account mode, spot hedging status, and other account-level settings.\n\n**Notes:**\n- This endpoint requires authentication but no query parameters.\n- Returns the current account configuration for the authenticated user.\n- Maps internally to `/v5/account/info` on the public Bybit API.",
  inputSchema: z.object({

  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/account/user-setting-config", input);
  },
};
