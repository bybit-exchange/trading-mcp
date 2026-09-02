// getConvertList.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getConvertList = {
  name: 'getConvertList',
  description: "获取当前支持的 Convert 交易对及实时汇率快照，用于提交 Convert 前的报价展示与前端快照校验。\n`symbol` 不传时返回所有可用交易对。",
  inputSchema: z.object({
    symbol: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rwa/stocks/convert/list", input);
  },
};
