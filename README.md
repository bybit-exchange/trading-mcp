<div align="center">

# Bybit MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 20.6+](https://img.shields.io/badge/node-20.6+-blue.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-compatible-purple.svg)](https://modelcontextprotocol.io)
[![Tools](https://img.shields.io/badge/Tools-190-orange.svg)](#-available-tool-categories)
[![Bybit V5 API](https://img.shields.io/badge/Bybit-V5%20API-green.svg)](https://bybit-exchange.github.io/docs/v5/intro)

**A production-ready MCP server for Bybit — 200 tools covering market data, trading, positions, account management, assets, and real-time WebSocket streams**

[Quick Start](#-quick-start) •
[Features](#-features) •
[Configuration](#-configuration-reference) •
[Tools Reference](#-available-tool-categories) •
[Troubleshooting](#-troubleshooting) •
[Contributing](#-contributing)

[中文文档](./README.zh.md)

</div>

---

## Overview

Bybit MCP Server enables AI assistants like **Claude**, **Cursor**, **VS Code**, and other MCP-compatible clients to interact directly with the Bybit cryptocurrency exchange. Query live market data, manage your account, and monitor real-time streams — all through natural language.

### Why Bybit MCP?

- **Complete V5 Coverage** — 200 tools across market data, trading, positions, account, asset, user, and WebSocket categories
- **Secure by Design** — API credentials are read from environment variables at runtime, never hardcoded
- **Read-Only Mode** — All 22 market data tools work without any API key
- **Real-Time Streams** — 26 WebSocket tools for live orderbook, tickers, positions, and more
- **Zero-Install Start** — Run instantly with `npx bybit-official-trading-server@latest`
- **Universal Compatibility** — Works with Claude Desktop, Cursor, VS Code, and any MCP client

---

## Features

<table>
<tr>
<td width="50%">

### Market Data
- **Prices & Tickers** — Real-time spot and derivatives prices
- **Orderbook** — Configurable depth snapshots
- **Klines** — Historical OHLCV candlestick data
- **Funding Rates** — Current and historical rates
- **Open Interest** — Long/short ratio, ADL indicators
- **Risk Limits** — Volatility index, delivery prices, insurance pool

</td>
<td width="50%">

### Account & Asset
- **Wallet Balance** — Unified account overview
- **Transaction Log** — Full trade and funding history
- **Fee Rates** — Maker/taker rates by instrument
- **Collateral** — Settings, Greeks, MMP state
- **Asset Overview** — Portfolio margin, delivery/settlement records
- **Multi-Account** — Aggregated parent and sub-account assets

</td>
</tr>
<tr>
<td width="50%">

### User & Sub-Accounts
- **API Key Info** — Permissions, VIP level, rate limits
- **Sub-Account Management** — List and query sub-accounts
- **Member Types** — Account type queries per member
- **Referral & Affiliate** — Invitation and referral queries

</td>
<td width="50%">

### WebSocket Real-Time
- **Public Streams** — Orderbook, tickers, klines, trades, liquidations
- **Private Streams** — Executions, positions, wallet updates
- **Options** — Greeks snapshots
- **Block Trading** — RFQ updates
- **Spread Trading** — Spread instrument streams
- **Snapshot Model** — Single-call, no persistent connections needed

</td>
</tr>
</table>

---

## Quick Start

**Step 1 — Get your Bybit API credentials** *(skip if you only need market data)*

**Option A — HMAC-SHA256 (standard, recommended for most users)**

1. Log in to [Bybit](https://www.bybit.com) and go to **Account & Security → API Management**
2. Click **Create New Key**, select **System-generated API Key**
3. Set the permissions you need (read-only is recommended for safety)
4. Save the **API Key** and **API Secret** — the secret is shown only once
5. Use `BYBIT_API_KEY` + `BYBIT_API_SECRET` in your config

**Option B — RSA-SHA256 (self-generated key pair)**

1. Generate an RSA key pair locally:
   ```bash
   openssl genrsa -out bybit_private.pem 2048
   openssl rsa -in bybit_private.pem -pubout -out bybit_public.pem
   chmod 600 bybit_private.pem
   ```
2. Log in to [Bybit](https://www.bybit.com) and go to **Account & Security → API Management**
3. Click **Create New Key**, select **Self-generated API Key**
4. Paste the contents of `bybit_public.pem` into the public key field
5. Save the **API Key** shown after creation
6. Use `BYBIT_API_KEY` + `BYBIT_API_PRIVATE_KEY_PATH` (absolute path to `bybit_private.pem`) in your config

**Step 2 — Connect to your AI assistant**

Choose the section below that matches your tool (Claude Desktop, Cursor, or VS Code).

**Step 3 — Verify the connection**

After configuring, restart your AI assistant and ask:
> *"What's the current BTCUSDT price?"*

If you get a live price back, the server is connected and working.

**Step 4 — Let the AI learn the full capability in one prompt** *(optional but recommended)*

Paste the following into your AI assistant to have it read the official documentation and start helping you trade:

```
Please read https://raw.githubusercontent.com/bybit-exchange/trading-mcp/main/README.md save it as a mcp, and help me trade on Bybit.
```

The AI will read the README, understand all available tools, and be ready to assist with market data queries, account management, and more.

---

## Configuration Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `BYBIT_API_KEY` | For auth endpoints | — | Your Bybit API key |
| `BYBIT_API_SECRET` | HMAC mode | — | Your Bybit API secret (HMAC-SHA256 signing) |
| `BYBIT_API_PRIVATE_KEY_PATH` | RSA mode | — | Absolute path to your RSA private key PEM file (RSA-SHA256 signing) |
| `BYBIT_TESTNET` | No | `false` | Set to `true` to use the testnet |

Market data tools work without credentials. Authenticated tools require `BYBIT_API_KEY` plus **exactly one** signing credential:

- **HMAC-SHA256** (default) — set `BYBIT_API_SECRET`. Works with **System-generated API keys**.
- **RSA-SHA256** — set `BYBIT_API_PRIVATE_KEY_PATH` pointing to a PEM file on disk. Required for **Self-generated (user-uploaded) RSA key pairs**. The server adds `X-BAPI-SIGN-TYPE: 2` automatically.

> **Quick rule:** chose "System-generated" on Bybit → use HMAC. Chose "Self-generated" → use RSA.
>
> Setting both `BYBIT_API_SECRET` and `BYBIT_API_PRIVATE_KEY_PATH` at the same time is an error — the server will refuse to start.

---

## Usage with Claude Desktop

> **First-time setup:** Claude Desktop will show an authorization prompt the first time each tool is called. Click **"Always allow"** to permanently approve it — you won't be asked again.

**1. Find your config file**

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

Open the file in any text editor (create it if it doesn't exist).

**2. Add the MCP server config**

HMAC mode (System-generated API key):

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_SECRET": "your_api_secret"
      }
    }
  }
}
```

RSA mode (Self-generated API key):

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_PRIVATE_KEY_PATH": "/absolute/path/to/bybit_private.pem"
      }
    }
  }
}
```

> Replace the values with your actual Bybit credentials. Use one signing mode only — do not set both `BYBIT_API_SECRET` and `BYBIT_API_PRIVATE_KEY_PATH`.
> If the file already has other MCP servers, add the `"bybit"` block inside the existing `"mcpServers"` object.

**3. Restart Claude Desktop**

Quit and reopen Claude Desktop. The Bybit tools will be available automatically on next launch.

**For testnet:**

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
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

## Usage with Cursor

**1. Find your config file**

| Platform | Path |
|----------|------|
| macOS / Linux | `~/.cursor/mcp.json` |
| Windows | `%USERPROFILE%\.cursor\mcp.json` |

Create the file if it doesn't exist.

**2. Add the MCP server config**

HMAC mode (System-generated API key):

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_SECRET": "your_api_secret"
      }
    }
  }
}
```

RSA mode (Self-generated API key):

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_PRIVATE_KEY_PATH": "/absolute/path/to/bybit_private.pem"
      }
    }
  }
}
```

**3. Restart Cursor**

After saving the file, restart Cursor. The Bybit MCP server will be listed under **Settings → MCP**.

---

## Usage with VS Code

**1. Find or create your MCP config**

In your project root (or workspace), create `.vscode/mcp.json`.

HMAC mode (System-generated API key):

```json
{
  "servers": {
    "bybit": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_SECRET": "your_api_secret"
      }
    }
  }
}
```

RSA mode (Self-generated API key):

```json
{
  "servers": {
    "bybit": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "your_api_key",
        "BYBIT_API_PRIVATE_KEY_PATH": "/absolute/path/to/bybit_private.pem"
      }
    }
  }
}
```

**2. Enable MCP in VS Code settings**

Open VS Code Settings (`Cmd+,` / `Ctrl+,`), search for `mcp`, and ensure **MCP support** is enabled for your AI extension (e.g. GitHub Copilot).

**3. Reload the window**

Run **Developer: Reload Window** from the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) to pick up the new config.

---

## Available Tool Categories

| Category | Auth | Tools | Description |
|----------|------|------:|-------------|
| `market` | No | 22 | Klines, orderbook, tickers, funding rates, open interest, volatility, risk limits, long/short ratio, delivery price, insurance pool, and more |
| `account` | Yes | 18 | Wallet balance, transaction log, fee rates, margin mode, collateral switch, hedging mode, price limit, MMP modify and reset, option Greeks, DCP config, SMP group, account instruments, and more |
| `trade` | Yes | 12 | Create, amend, cancel orders, batch order operations, open orders, order history, spot borrow quota, DCP, and order pre-check |
| `rfq-trading` | Yes | 15 | Create/cancel RFQs and quotes, execute quotes, accept non-LP quotes, RFQ config, realtime and historical RFQs/quotes, trade history, public trades |
| `position` | Yes | 11 | Position list, leverage, position mode, trading stop, auto-add margin, add/reduce margin, closed PnL, closed positions, move positions, and risk limit confirmation |
| `asset` | Yes | 5 | Asset overview, portfolio margin, delivery/settlement records, aggregated parent+sub account assets |
| `user` | Yes | 16 | API key info & permissions, sub-account listing and management, create/update/delete API keys, freeze sub-accounts, delete sub-accounts, sign agreement, member account types, referral/invitation queries |
| `spread-trading` | Mixed | 11 | Spread instruments, orderbook, tickers, recent trades, create/amend/cancel spread orders, open orders, order history, trade history |
| `pre-upgrade` | Yes | 6 | Pre-upgrade order history, execution list, closed PnL, transaction log, delivery and settlement records |
| `bot` | Yes | 18 | Futures combo bot, futures grid bot, futures martingale bot, spot grid bot, spot DCA bot — create, close, detail, validate, and parameter limits |
| `copy-trading-classic` | Yes | 2 | Classic copy trading: recommended leader leaderboard, create follower binding |
| `copy-trading-tradfi` | Yes | 2 | TradFi copy trading (MT5): recommended provider leaderboard, create follower binding |
| `strategy` | Yes | 6 | TWAP, Chase Limit, Iceberg strategy orders — create, list, sub-order list, stop |
| `earn` | Yes | 6 | Earn product queries, stake/redeem orders, order history, positions, yield history, hourly yield |
| `advanceearn` | Yes | 4 | Advance Earn (dual-currency): product queries, place order, positions, order history |
| `p2p` | Yes | 10 | P2P ad management and order queries: create/update/remove ads, browse online ads, query personal ads and details, order list, order detail, pending orders, mark order as paid |
| `alpha` | Yes | 10 | On-chain trading: trade quote, purchase, redeem, pay token list, order list, token list, token prices, token details, asset list, asset detail |
| `websocket` | Mixed | 26 | Real-time snapshots via subscribe-snapshot pattern: orderbook, tickers, klines, trades, liquidations, executions, positions, wallet, option Greeks, RFQ block trades, spread trading |

**Total: 200 tools**

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
- Two signing modes are supported: **HMAC-SHA256** (default, via `BYBIT_API_SECRET`) and **RSA-SHA256** (via `BYBIT_API_PRIVATE_KEY_PATH`) per Bybit's V5 API specification
- For RSA mode, store the PEM file with `chmod 600` and never commit it to source control
- Never share your API secret or commit it to source control
- Use API keys with minimal required permissions (read-only where possible)

---

## Troubleshooting

### MCP Server Not Loading / "No MCP servers configured"

If you've configured the server but your AI assistant shows no tools or "No MCP servers configured":

#### 1. Check the correct configuration file

Claude Code reads MCP server config from `~/.claude.json` (per-project), **not** from `~/.claude/settings.json`. The recommended way to add the server is via CLI:

```bash
claude mcp add bybit -- npx -y bybit-official-trading-server@latest
```

This writes the config to the correct location.

#### 2. Use the full path to `node` / `npx` if needed

Some environments spawn subprocesses without loading your shell profile (`.zshrc` / `.zprofile`), so `PATH` may not include the Node.js bin directory. Find the full path and use it explicitly:

```bash
# Find your npx path
which npx
# Example: /usr/local/bin/npx
```

#### 3. Restart your AI assistant after configuration changes

MCP servers connect at session startup. After adding or changing config, you must **exit and restart** your AI assistant for changes to take effect.

#### 4. Verify the server starts correctly

Test that the server can start and respond to MCP protocol:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"0.1"}}}' | npx -y bybit-official-trading-server@latest
```

#### 5. Don't run the server manually

Your AI client manages the MCP server process itself via stdio. A manually started server instance is **completely separate** — the client won't connect to it. Let the client handle the lifecycle automatically.

### Quick Diagnosis Checklist

| Symptom | Cause | Fix |
|---------|-------|-----|
| No tools shown after config | Config in wrong file | Use `claude mcp add` CLI command |
| Config exists but tools don't load | `npx` / `node` not found in PATH | Use absolute path to `npx` |
| Tools loaded before but not now | Session not restarted after config change | Restart your AI assistant |
| Authentication errors | Missing or incorrect API credentials | Check `BYBIT_API_KEY` and `BYBIT_API_SECRET` (HMAC) or `BYBIT_API_PRIVATE_KEY_PATH` (RSA) |

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

## Risk Warning

Cryptocurrency trading involves substantial risk of loss. Please read the following before use:

- **Protect Your API Credentials** — Use IP allowlists and grant only the minimum permissions required; disable withdrawal access unless explicitly needed
- **Test Before You Trade** — Validate your setup on [Bybit Testnet](https://testnet.bybit.com/) before connecting to your live account (set `BYBIT_TESTNET=true`)
- **You Are in Control** — All actions are initiated by you or your AI assistant; review orders carefully before execution
- **Bybit Terms Apply** — Use of this server is subject to [Bybit's Terms of Service](https://www.bybit.com/en/terms-service/terms-of-use)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Resources

| Resource | Description |
|----------|-------------|
| [Bybit V5 API Docs](https://bybit-exchange.github.io/docs/v5/intro) | Official Bybit API documentation |
| [Bybit Testnet](https://testnet.bybit.com/) | Practice trading with test funds |
| [MCP Specification](https://modelcontextprotocol.io/) | Model Context Protocol spec |
| [npm Package](https://www.npmjs.com/package/bybit-official-trading-server) | Published npm package |

---

## License

MIT
