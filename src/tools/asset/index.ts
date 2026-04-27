// asset/index.ts — auto-generated, do not edit
import { accountCoinBalanceQuery } from './accountCoinBalanceQuery.js';
import { getAssetOverview } from './getAssetOverview.js';
import { getDeliveryRecord } from './getDeliveryRecord.js';
import { getPortfolioMargin } from './getPortfolioMargin.js';
import { getSettlementRecord } from './getSettlementRecord.js';
import { getTotalMembersAssets } from './getTotalMembersAssets.js';
import { interTransferListQuery } from './interTransferListQuery.js';
import { queryCoinChainInfo } from './queryCoinChainInfo.js';
import { queryFundingDetailApi } from './queryFundingDetailApi.js';
import { subMemberListQuery } from './subMemberListQuery.js';
import { transferCoinListQuery } from './transferCoinListQuery.js';
import { universalTransferListQuery } from './universalTransferListQuery.js';
import { userAssetInfoQuery } from './userAssetInfoQuery.js';
import { assetConvertTools } from './convert/index.js';
import { assetDepositTools } from './deposit/index.js';
import { assetWithdrawTools } from './withdraw/index.js';

export const assetTools = [
  accountCoinBalanceQuery,
  getAssetOverview,
  getDeliveryRecord,
  getPortfolioMargin,
  getSettlementRecord,
  getTotalMembersAssets,
  interTransferListQuery,
  queryCoinChainInfo,
  queryFundingDetailApi,
  subMemberListQuery,
  transferCoinListQuery,
  universalTransferListQuery,
  userAssetInfoQuery,
  ...assetConvertTools,
  ...assetDepositTools,
  ...assetWithdrawTools,
];
