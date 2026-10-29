// listEarnCoupons.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const listEarnCoupons = {
  name: 'listEarnCoupons',
  description: "Query the user's interest-rate coupons (`interestCards`) and Dual Assets reward cards\n(`awardCards`, e.g. trial funds / zero-cost vouchers) for the given product category.\n\nReturned cards include all states: `InUse`, `NotUse`, `Expired`, and `AlreadyUsed`.\nTo apply a coupon when placing an order, pass its `awardId` and `specCode` in the\n`interestCard` field of the corresponding place-order request:\n- `FlexibleSaving` → [POST /v5/earn/place-order](#tag/Earn/operation/placeEarnOrder)\n- `DualAssets` → POST /v5/earn/advance/place-order\n\n**Rate Limit:** 10 req/s (UID)",
  inputSchema: z.object({
    category: z.enum(["FlexibleSaving", "DualAssets"]),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/earn/coupons", input, context);
  },
};
