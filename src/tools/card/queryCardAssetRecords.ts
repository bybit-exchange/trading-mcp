// queryCardAssetRecords.ts — manual tool (no upstream YAML yet)
// Source: https://bybit-exchange.github.io/docs/v5/bybit-card/asset-records
//
// MIGRATION TODO: when the upstream YAML for this endpoint becomes
// available, add
//   queryCardAssetRecords  # POST /v5/card/transaction/query-asset-records
// to ALLOWED_OPERATION_IDS in scripts/generate-all.sh. The next
// `npm run generate` will overwrite this file with auto-generated
// output; the matching RESPONSE_TRANSFORMS entry in
// src/generator/tool-patches.ts will then apply the same uid/pan6
// strip to the generated handler — no behavioural change.
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const queryCardAssetRecords = {
  name: 'queryCardAssetRecords',
  description:
    'Query Bybit Card asset (transaction) records for the authenticated account.\n\n' +
    'POST /v5/card/transaction/query-asset-records — paginated, supports filters by ' +
    'status code, card-number last digits (pan4), merchant name (fuzzy), query type ' +
    '(SIDE_QUERY_AUTH/FINANCIAL/REFUND), transaction or order ID (exact), card token, ' +
    'and time range.\n\n' +
    'Privacy: the MCP layer removes the internal `uid` and the card BIN `pan6` from ' +
    'each record before returning. The card last-four (`pan4`), merchant info, amounts, ' +
    'fees, status, and timestamps are returned unchanged.\n\n' +
    'Agent hint: use `pan4` to identify the user-facing card. Do not ask the user for ' +
    '`uid` or `pan6` — they are not exposed.',
  inputSchema: z.object({
    statusCode: z.enum(['0', '1', '2']).optional(),
    limit: z.number().int().min(1).max(500).default(100).optional(),
    page: z.number().int().min(1).default(1).optional(),
    pan4: z.string().optional(),
    createBeginTime: z.number().int().optional(),
    createEndTime: z.number().int().optional(),
    merchName: z.string().optional(),
    type: z
      .enum(['SIDE_QUERY_AUTH', 'SIDE_QUERY_FINANCIAL', 'SIDE_QUERY_REFUND'])
      .optional(),
    txnId: z.string().optional(),
    cardToken: z.string().optional(),
    orderNo: z.string().optional(),
  }),
  handler: async (input: Record<string, unknown>) => {
    const result = (await restClient.postAuth(
      '/v5/card/transaction/query-asset-records',
      input,
    )) as any;
    result?.result?.data?.forEach((r: any) => {
      delete r.uid;
      delete r.pan6;
    });
    return result;
  },
};
