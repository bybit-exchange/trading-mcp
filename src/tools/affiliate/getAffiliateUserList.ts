// getAffiliateUserList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getAffiliateUserList = {
  name: 'getAffiliateUserList',
  description: "Query the list of all direct client users under the current affiliate account.\nSupports cursor-based pagination. Trading volume, deposit amount, and commission data\nfor 30-day, 365-day, and custom date ranges can be returned on demand.\n\n**Notes:**\n- Must use an API Key with `affiliate` permission bound to a Master UID.\n- For `cursor`, pass `\"\"` or `\"0\"` on the first request; pass the `nextPageCursor` from the previous response for subsequent pages.\n- `need30`, `need365`, and `needDeposit` default to `false`; enable as needed to avoid unnecessary performance overhead.\n- When `startDate` / `endDate` are provided, the response includes custom-range fields (`takerVol`, `makerVol`, `tradeVol`, `tradfiTradeVol`, `commissionsVol`) and **omits** the 30-day / 365-day fields.\n- The commission map always returns five fixed currencies: `BTC`, `ETH`, `MNT`, `USDC`, `USDT`.",
  inputSchema: z.object({
    cursor: z.string().default("").optional(),
    size: z.number().int().min(0).max(1000).default(0).optional(),
    needDeposit: z.boolean().default(false).optional(),
    need30: z.boolean().default(false).optional(),
    need365: z.boolean().default(false).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/affiliate/aff-user-list", input);
  },
};
