# Changelog

All notable changes to `bybit-official-trading-server` will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
versioned with [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

---

## [2.0.5] - 2026-04-16

### Added
- (待填写)

### Changed
- (待填写)

### Fixed
- (待填写)

## [2.0.4] - 2026-04-16

### Added
- (待填写)

### Changed
- (待填写)

### Fixed
- (待填写)

## [2.0.3] - 2026-04-16

### Added
- (待填写)

### Changed
- (待填写)

### Fixed
- (待填写)

## [2.0.2] - 2026-04-16

### Added
- fix

### Changed
- fix

### Fixed
- fix

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
