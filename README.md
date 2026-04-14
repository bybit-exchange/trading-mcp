# @bybit-exchange/mcp-server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that exposes Bybit REST and WebSocket APIs as MCP tools, enabling AI assistants (Claude, Cursor, etc.) to query market data and manage accounts on Bybit.

[中文文档](./README.zh.md)

---

## Features

- **Market Data** — Klines, orderbook, tickers, funding rates, open interest, risk limits, and more (22 tools, no auth required)
- **Account** — Wallet balance, transaction logs, fee rates, collateral info, MMP state, DCP config, SMP group, and more (11 tools, auth required)
- **Asset** — Asset overview, portfolio margin, delivery/settlement records, total member assets (5 tools, auth required)
- **User** — API key info, sub-account listing, member account type, referral queries (7 tools, auth required)
- **WebSocket** — Subscribe-snapshot pattern for real-time orderbook, tickers, klines, executions, positions, wallet, RFQ, spread trading, and more (26 tools)
- **HMAC-SHA256 signing** — Automatic request signing for all authenticated endpoints
- **Rate limiting** — Per-endpoint rate limiting built in
- **Mainnet / Testnet** — Switch via environment variable

---

## Requirements

- Node.js >= 18

---

## Installation

```bash
npm install -g @bybit-exchange/mcp-server
```

Or run directly with `npx`:

```bash
npx @bybit-exchange/mcp-server
```

---

## Configuration

Set the following environment variables before starting the server:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `BYBIT_API_KEY` | For auth endpoints | — | Your Bybit API key |
| `BYBIT_API_SECRET` | For auth endpoints | — | Your Bybit API secret |
| `BYBIT_TESTNET` | No | `false` | Set to `true` to use the testnet |

Market data tools work without credentials. Account, asset, user, and WebSocket private channel tools require `BYBIT_API_KEY` and `BYBIT_API_SECRET`.

---

## Usage with Claude Desktop

> **First-time setup:** Claude Desktop will show an authorization prompt the first time each tool is called. Click **"Always allow"** to permanently approve it — you won't be asked again.

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "@bybit-exchange/mcp-server"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_SECRET": "your_api_secret"
      }
    }
  }
}
```

For testnet:

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "@bybit-exchange/mcp-server"],
      "env": {
        "BYBIT_API_KEY": "your_testnet_api_key",
        "BYBIT_API_SECRET": "your_testnet_api_secret",
        "BYBIT_TESTNET": "true"
      }
    }
  }
}
```

---

## Usage with Cursor / VS Code

Add to your MCP settings file:

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "@bybit-exchange/mcp-server"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_SECRET": "your_api_secret"
      }
    }
  }
}
```

---

## Available Tool Categories

| Category | Auth | Description |
|----------|------|-------------|
| `market` | No | Klines, orderbook, tickers, funding rates, open interest, volatility, risk limits, long/short ratio, delivery price, insurance pool, and more (22 tools) |
| `account` | Yes | Wallet balance, transaction log, fee rates, collateral settings, option Greeks, MMP state, DCP config, SMP group, account instruments, and more (11 tools) |
| `asset` | Yes | Asset overview, portfolio margin, delivery/settlement records, aggregated parent+sub account assets (5 tools) |
| `user` | Yes | API key info & permissions, sub-account listing, member account types, referral/invitation queries (7 tools) |
| `websocket` | Mixed | Real-time snapshots via subscribe-snapshot pattern: orderbook, tickers, klines, trades, liquidations, executions, positions, wallet, option Greeks, RFQ block trades, spread trading (26 tools) |

---

## Example Prompts

Once connected to an AI assistant, you can use natural language:

**Market data:**
- "What is the current BTC/USDT price?"
- "Show me the order book for ETHUSDT with depth 50"
- "Get the last 10 BTC perpetual klines on the 1-hour interval"
- "What are the current funding rates for the top 5 perpetual contracts?"
- "What's the open interest for BTCUSDT?"

**Account & Asset:**
- "What's my wallet balance?"
- "Show me my recent transaction log"
- "What are my maker/taker fee rates?"
- "Show me my total assets across all sub-accounts"
- "What's my portfolio margin status?"

**User & Sub-accounts:**
- "List all my sub-accounts"
- "Show me the permissions and VIP level of my current API key"
- "What account types do my sub-accounts use?"
- "Who have I invited through the referral program?"

**WebSocket / Real-time:**
- "Subscribe to the BTCUSDT orderbook and give me a snapshot"
- "Get the latest execution records from my account"
- "What are my current open positions?"

---

## WebSocket Pattern Details

WebSocket tools are compatible with MCP's request/response model:

1. The tool opens a WebSocket connection to Bybit's streaming endpoint
2. Subscribes to the requested channel (with auth handshake for private channels)
3. Collects the specified number of messages (default: 1) or waits up to `timeoutMs` (default: 5000 ms)
4. Returns the collected snapshot and closes the connection

This makes real-time data accessible in a single tool call without managing persistent connections.

---

## Security Notes

- API keys are read from environment variables at call time, never hardcoded
- All authenticated requests use HMAC-SHA256 signing per Bybit's V5 API specification
- Never share your API secret or commit it to source control
- Use API keys with minimal required permissions (read-only where possible)

---

## Local Development

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run dev

# Type check
npm run typecheck

# Build for production
npm run build
```

---

## License

MIT
