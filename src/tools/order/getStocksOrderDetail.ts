// getStocksOrderDetail.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getStocksOrderDetail = {
  name: 'getStocksOrderDetail',
  description: "根据系统订单号或客户端幂等 ID 查询单笔股票买卖订单的完整状态、参数与成交明细。\n用于 MM 侧对账、状态轮询与失败原因定位。`orderNo` 与 `clientOrderId` 二选一。",
  inputSchema: z.object({
    orderNo: z.string().optional(),
    clientOrderId: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rwa/stocks/order/detail", input);
  },
};
