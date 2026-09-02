// getMarketSession.ts — auto-generated, do not edit
import { z } from 'zod';
import { restClient } from '../../client/rest-client.js';

export const getMarketSession = {
  name: 'getMarketSession',
  description: "获取股市当前所处时段、下次开盘时间以及不可交易时间段列表（节假日 / 早收盘）。\n`symbol` 不传时返回通用日历（适用于全部 US 股票）。",
  inputSchema: z.object({
    symbol: z.string().optional(),
  }),
  annotations: {"readOnlyHint":true,"openWorldHint":true},
  handler: async (input: Record<string, unknown>) => {
    return restClient.getAuth("/v5/rwa/stocks/market/session", input);
  },
};
