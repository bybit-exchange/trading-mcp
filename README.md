# bybit-official-trading-server

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

- **Node.js >= 20.6** — Check your version with `node -v`. Download from [nodejs.org](https://nodejs.org/) if needed.
- A **Bybit account** — Required only for account/asset/user tools. Market data tools work without an account.

---

## Installation
 
Install globally so the server is always available:

```bash
npm i -g bybit-official-trading-server@latest
```

Or run on-demand with `npx` (no install required):

```bash
npx bybit-official-trading-server@latest
```

> Most AI assistant integrations (Claude Desktop, Cursor, VS Code) use the `npx` approach — the MCP config handles launching the server automatically.

---

## Quick Start

**Step 1 — Get your Bybit API credentials** *(skip if you only need market data)*

1. Log in to [Bybit](https://www.bybit.com) and go to **Account & Security → API Management**
2. Click **Create New Key**, select **System-generated API Key**
3. Set the permissions you need (read-only is recommended for safety)
4. Save the **API Key** and **API Secret** — the secret is shown only once

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
| `BYBIT_API_SECRET` | For auth endpoints | — | Your Bybit API secret |
| `BYBIT_TESTNET` | No | `false` | Set to `true` to use the testnet |

Market data tools work without credentials. Account, asset, user, and WebSocket private channel tools require both `BYBIT_API_KEY` and `BYBIT_API_SECRET`.

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

> Replace `your_api_key` and `your_api_secret` with your actual Bybit credentials.
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

**3. Restart Cursor**

After saving the file, restart Cursor. The Bybit MCP server will be listed under **Settings → MCP**.

---

## Usage with VS Code

**1. Find or create your MCP config**

In your project root (or workspace), create `.vscode/mcp.json`:

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

**2. Enable MCP in VS Code settings**

Open VS Code Settings (`Cmd+,` / `Ctrl+,`), search for `mcp`, and ensure **MCP support** is enabled for your AI extension (e.g. GitHub Copilot).

**3. Reload the window**

Run **Developer: Reload Window** from the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) to pick up the new config.

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
