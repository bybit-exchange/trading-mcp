// tax/index.ts — auto-generated, do not edit
import { batchCreateTaxReports } from './batchCreateTaxReports.js';
import { batchQueryTaxReports } from './batchQueryTaxReports.js';
import { createTaxReport } from './createTaxReport.js';
import { getRegisterTime } from './getRegisterTime.js';
import { getTaxReportStatus } from './getTaxReportStatus.js';
import { getTaxReportUrl } from './getTaxReportUrl.js';

export const taxTools = [
  batchCreateTaxReports,
  batchQueryTaxReports,
  createTaxReport,
  getRegisterTime,
  getTaxReportStatus,
  getTaxReportUrl,
];
