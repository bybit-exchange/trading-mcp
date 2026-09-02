// cancelStocksOrder.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const cancelStocksOrder = {
  name: 'cancelStocksOrder',
  description: "根据订单号撤销一笔股票买卖订单。\n仅非终态订单（`PENDING` / `PROCESSING`）可撤销；已完成 / 已撤销 / 已过期 / 已拒绝的订单调用将返回错误。\n撤单请求异步派发，接口返回不代表已实际撤销，需通过「查询订单详情」轮询最终状态。",
  inputSchema: z.object({
    orderNo: z.string(),
  }),
  annotations: {"readOnlyHint":false,"destructiveHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.postAuth("/v5/rwa/stocks/order/cancel", input);
  },
};
