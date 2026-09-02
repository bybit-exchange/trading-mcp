// getConvertDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getConvertDetail = {
  name: 'getConvertDetail',
  description: "根据订单号或幂等键查询单笔 Convert 订单的完整状态与结算结果。\n用于 MM 侧对账、状态轮询与失败原因定位。`orderNo` 与 `requestId` 二选一。",
  inputSchema: z.object({
    orderNo: z.string().optional(),
    requestId: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rwa/stocks/convert/detail", input);
  },
};
