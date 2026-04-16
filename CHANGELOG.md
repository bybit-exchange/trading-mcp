# Changelog

All notable changes to `bybit-official-trading-server` will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
versioned with [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

---

## [2.0.5] - 2026-04-16

### Added
- Per-tool version check: before every tool call, check against remote manifest with 2-minute TTL cache; return actionable upgrade instructions if version is outdated
- `src/version-check.ts`: centralized manifest fetch, TTL cache, startup integrity check, and per-tool check
- `scripts/publish.sh`: one-command build + npm publish
- `scripts/release.sh`: full 7-step release automation (bump → commit → generate → build → manifest → sync)

### Changed
- Startup version mismatch now calls `process.exit(1)` to block start and protect API credentials
- Upgrade messages include step-by-step instructions for users

## [2.0.4] - 2026-04-16

### Added
- `User-Agent: bybit-mcp/<version>` and `X-Referer: bybit-mcp` headers on all HTTP requests and WebSocket connections
- `src/version.ts`: single source of truth for `VERSION` constant and `commonHeaders()`
- `bump-version.sh` now updates `src/version.ts` atomically with `package.json` and `src/server.ts`

### Changed
- `gen-manifest.sh` writes manifest directly to `../github/ai-mcp-manifest` dev branch and pushes, instead of writing a local file

## [2.0.3] - 2026-04-16

### Added
- Detailed installation guide in README (Claude Desktop, Cursor, VS Code) with exact config file paths
- Step-by-step Quick Start section

### Changed
- npm package renamed from `@bybit-exchange/mcp-server` to `bybit-official-trading-server`
- Added `bybit-official-trading-server` bin alias alongside `trading-mcp`
- Added `repository` field to package.json pointing to GitHub

## [2.0.2] - 2026-04-16

### Fixed
- Pass local version to manifest API to avoid false mismatch on older installs
- Distinguish version upgrade hint vs tamper block in integrity check output

## [2.0.0] - 2026-04-16

### Security
- Strip user-controlled `remark` field from `querySubMembers` and `querySubMembersV5`
  responses to prevent indirect prompt injection via custodial sub-account remarks

## [1.0.0] - 2026-04-16

### Added
- Initial release of `bybit-official-trading-server`
- Market data tools: klines, orderbook, tickers, funding rates, open interest,
  historical volatility, insurance pool, risk limits, delivery price,
  long/short ratio, index price components, order price limit, ADL alert,
  fee group info, server time (22 tools, no auth required)
- Account tools: wallet balance, account instruments, fee rate, collateral info,
  MMP state, DCP config, SMP group, withdrawal info, transaction log,
  coin Greeks, user setting config (11 tools, auth required)
- Asset tools: asset overview, total member assets, portfolio margin,
  delivery record, settlement record (5 tools, auth required)
- User tools: query sub-members (v1/v5), escrow sub-members, API key info,
  sub-API key list, member account type, referral queries (7 tools, auth required)
- WebSocket tools: subscribe-snapshot pattern for orderbook, tickers, klines,
  public trades, liquidation, positions, execution (normal/fast), wallet,
  Greeks, order, ADL alert, DCP, price limit, insurance, RFQ (quotes/RFQs/trades/public trades),
  spread (orderbook/tickers/order/execution/public trade), dual assets (26 tools)
- HMAC-SHA256 automatic request signing
- Per-endpoint rate limiting
- Mainnet/testnet switching via `BYBIT_TESTNET` environment variable

[Unreleased]: https://github.com/bybit-exchange/trading-mcp/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/bybit-exchange/trading-mcp/releases/tag/v1.0.0
