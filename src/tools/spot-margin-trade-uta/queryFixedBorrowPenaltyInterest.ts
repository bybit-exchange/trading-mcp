// queryFixedBorrowPenaltyInterest.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';
import type { ToolExecutionContext } from '../../utils/tool-context.js';

export const queryFixedBorrowPenaltyInterest = {
  name: 'queryFixedBorrowPenaltyInterest',
  description: "Query fixed-rate borrow penalty interest records for the authenticated Unified account. Optionally filter by orderId or one orderCurrency. limit is a string from \"1\" to \"100\" (default \"10\"). Without a cursor, covers the latest 30 days; records are ordered by creation time and record ID descending. Forward the opaque nextPageCursor unchanged to fetch the next page; an empty cursor means no further page. loanAmt is outstanding principal, interest is the actual penalty deducted, and interestRate is the annual penalty rate; these are decimal strings. ts is Unix milliseconds as a string. Locally limited to 5 requests per rolling second per path within one MCP process. Business failures surface as MCP tool errors.",
  inputSchema: z.object({
    orderId: z.string().optional(),
    orderCurrency: z.string().optional(),
    limit: z.string().regex(/^(100|[1-9][0-9]?)$/).default("10").optional(),
    cursor: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>, context: ToolExecutionContext = {}) => {
    return restClient.getAuth("/v5/spot-margin-trade/fixedborrow-interest-accrued", input, context);
  },
};
