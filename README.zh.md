<div align="center">

# Bybit MCP 服务器

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 20.6+](https://img.shields.io/badge/node-20.6+-blue.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-compatible-purple.svg)](https://modelcontextprotocol.io)
[![Tools](https://img.shields.io/badge/Tools-190-orange.svg)](#-工具分类)
[![Bybit V5 API](https://img.shields.io/badge/Bybit-V5%20API-green.svg)](https://bybit-exchange.github.io/docs/v5/intro)

**生产就绪的 Bybit MCP 服务器 — 200 个工具，覆盖行情数据、交易下单、仓位管理、账户管理、资产查询和 WebSocket 实时推送**

[快速开始](#-快速开始) •
[功能特性](#-功能特性) •
[配置说明](#-配置项说明) •
[工具分类](#-工具分类) •
[常见问题](#-常见问题) •
[参与贡献](#-参与贡献)

[English Documentation](./README.md)

</div>

---

## 简介

Bybit MCP 服务器让 **Claude**、**Cursor**、**VS Code** 等支持 MCP 协议的 AI 助手可以直接与 Bybit 交易所交互。通过自然语言即可查询实时行情、管理账户、监控实时数据流。

### 为什么选择 Bybit MCP？

- **完整的 V5 覆盖** — 200 个工具，涵盖行情、交易、仓位、账户、资产、用户和 WebSocket 七大类
- **安全设计** — API 凭证从环境变量读取，不会硬编码在任何地方
- **免鉴权行情** — 22 个行情工具无需 API Key 即可使用
- **实时数据流** — 26 个 WebSocket 工具，支持订单薄、Ticker、仓位等实时推送
- **零安装启动** — 通过 `npx bybit-official-trading-server@latest` 即刻运行
- **全平台兼容** — 支持 Claude Desktop、Cursor、VS Code 及所有 MCP 客户端

---

## 功能特性

<table>
<tr>
<td width="50%">

### 行情数据
- **价格与 Ticker** — 现货和衍生品实时报价
- **订单薄** — 可配置深度的快照数据
- **K 线** — 历史 OHLCV 蜡烛图数据
- **资金费率** — 当前及历史资金费率
- **持仓量** — 多空比、ADL 指标
- **风险限额** — 波动率指数、交割价格、保险基金

</td>
<td width="50%">

### 账户与资产
- **钱包余额** — 统一账户总览
- **交易日志** — 完整的交易和资金记录
- **手续费率** — 各品种 Maker/Taker 费率
- **抵押品** — 设置、期权希腊值、MMP 状态
- **资产总览** — 组合保证金、交割/结算记录
- **多账户** — 母子账户聚合资产查询

</td>
</tr>
<tr>
<td width="50%">

### 用户与子账户
- **API Key 信息** — 权限、VIP 等级、频率限制
- **子账户管理** — 列表查询与详情
- **账户类型** — 各成员账户类型查询
- **邀请与返佣** — 邀请码和返佣查询

</td>
<td width="50%">

### WebSocket 实时数据
- **公共频道** — 订单薄、Ticker、K 线、成交、强平
- **私有频道** — 成交记录、仓位、钱包更新
- **期权** — 希腊值快照
- **大宗交易** — RFQ 更新推送
- **价差合约** — 价差品种行情流
- **快照模式** — 单次调用，无需维护长连接

</td>
</tr>
</table>

---

## 快速开始

**第一步 — 获取 Bybit API 凭证** *（仅需行情数据可跳过）*

1. 登录 [Bybit](https://www.bybit.com)，进入 **账户与安全 → API 管理**
2. 点击 **创建新密钥**，选择 **系统生成的 API Key**
3. 按需设置权限（建议只开启只读权限）
4. 保存 **API Key** 和 **API Secret**（Secret 仅在创建时显示一次，请妥善保管）

**第二步 — 接入 AI 助手**

根据你使用的工具，参照下方对应章节完成配置（Claude Desktop、Cursor 或 VS Code）。

**第三步 — 验证是否连接成功**

配置完成后重启 AI 助手，发送以下提问：
> *"BTCUSDT 现在的价格是多少？"*

如果返回了实时价格，说明服务器已正常连接。

**第四步 — 一键让 AI 学习全部能力** *（可选，但推荐）*

将以下提示词粘贴给 AI 助手，让它读取官方文档后开始辅助你交易：

```
Please read https://raw.githubusercontent.com/bybit-exchange/trading-mcp/main/README.md save it as a mcp, and help me trade on Bybit.
```

AI 助手会读取 README，了解所有可用工具，随后即可协助你查询行情、管理账户等。

---

## 配置项说明

| 变量名 | 是否必填 | 默认值 | 说明 |
|--------|----------|--------|------|
| `BYBIT_API_KEY` | 鉴权接口必填 | — | Bybit API Key |
| `BYBIT_API_SECRET` | 鉴权接口必填 | — | Bybit API Secret |
| `BYBIT_TESTNET` | 否 | `false` | 设为 `true` 使用测试网 |

行情类工具无需填写 API 凭证。账户、资产、用户类工具以及 WebSocket 私有频道需要同时设置 `BYBIT_API_KEY` 和 `BYBIT_API_SECRET`。

---

## 在 Claude Desktop 中使用

> **首次使用提示：** Claude Desktop 会在每个工具第一次调用时弹出授权确认框。点击 **"Always allow"** 即可永久免授权，后续调用不再弹出。

**1. 找到配置文件**

| 系统 | 路径 |
|------|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

用任意文本编辑器打开（文件不存在时手动创建）。

**2. 添加 MCP 服务器配置**

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "你的 API Key",
        "BYBIT_API_SECRET": "你的 API Secret"
      }
    }
  }
}
```

> 将 `你的 API Key` 和 `你的 API Secret` 替换为实际的 Bybit 凭证。
> 如果文件中已有其他 MCP 服务器配置，将 `"bybit"` 块添加到现有 `"mcpServers"` 对象内即可。

**3. 重启 Claude Desktop**

退出并重新打开 Claude Desktop，Bybit 工具将在下次启动时自动加载。

**使用测试网：**

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "你的测试网 API Key",
        "BYBIT_API_SECRET": "你的测试网 API Secret",
        "BYBIT_TESTNET": "true"
      }
    }
  }
}
```

---

## 在 Cursor 中使用

**1. 找到配置文件**

| 系统 | 路径 |
|------|------|
| macOS / Linux | `~/.cursor/mcp.json` |
| Windows | `%USERPROFILE%\.cursor\mcp.json` |

文件不存在时手动创建。

**2. 添加 MCP 服务器配置**

```json
{
  "mcpServers": {
    "bybit": {
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "你的 API Key",
        "BYBIT_API_SECRET": "你的 API Secret"
      }
    }
  }
}
```

**3. 重启 Cursor**

保存文件后重启 Cursor，可在 **设置 → MCP** 中看到 Bybit 服务器已加载。

---

## 在 VS Code 中使用

**1. 创建 MCP 配置文件**

在项目根目录（或工作区目录）下创建 `.vscode/mcp.json`：

```json
{
  "servers": {
    "bybit": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "bybit-official-trading-server@latest"],
      "env": {
        "BYBIT_API_KEY": "你的 API Key",
        "BYBIT_API_SECRET": "你的 API Secret"
      }
    }
  }
}
```

**2. 开启 VS Code 的 MCP 支持**

打开设置（`Cmd+,` / `Ctrl+,`），搜索 `mcp`，确认你所使用的 AI 插件（如 GitHub Copilot）已开启 MCP 支持。

**3. 重载窗口**

通过命令面板（`Cmd+Shift+P` / `Ctrl+Shift+P`）执行 **Developer: Reload Window**，使配置生效。

---

## 工具分类

| 分类 | 是否需要鉴权 | 工具数 | 说明 |
|------|------------|------:|------|
| `market` | 否 | 22 | K 线、订单薄、Ticker、资金费率、持仓量、历史波动率、风险限额、多空比、交割价格、保险基金等 |
| `account` | 是 | 18 | 钱包余额、交易日志、手续费率、保证金模式、抵押品开关、对冲模式、限价操作、MMP 修改与重置、期权希腊值、断线保护、防自成交分组、可划转金额等 |
| `trade` | 是 | 12 | 下单、改单、撤单、批量下单/改单/撤单、实时订单查询、历史订单、现货借贷额度、断线撤单、下单预检查 |
| `rfq-trading` | 是 | 15 | 创建/取消询价单和报价、执行报价、接受非LP报价、RFQ 配置、实时及历史询价/报价、成交记录、公开成交 |
| `position` | 是 | 11 | 持仓查询、设置杠杆、切换仓位模式、止盈止损、自动追加保证金、手动增减保证金、已平仓盈亏、已平仓仓位、移仓及移仓历史、确认新风险限额 |
| `asset` | 是 | 5 | 资产总览、组合保证金、交割/结算记录、母子账户聚合资产 |
| `user` | 是 | 16 | API Key 查询/创建/修改/删除、子账户创建/冻结/删除/列表、签署协议、成员账户类型、邀请返佣查询 |
| `spread-trading` | 混合 | 11 | 价差合约信息、深度、行情、最新成交、下单、改单、撤单、撤全部、实时订单、历史订单、成交记录 |
| `pre-upgrade` | 是 | 6 | 升级前订单历史、成交记录、已平仓盈亏、交易日志、交割记录、结算记录 |
| `bot` | 是 | 18 | 期货组合Bot、期货网格Bot、期货马丁Bot、现货网格Bot、现货DCA定投Bot — 创建、关闭、详情、校验、参数限制 |
| `copy-trading-classic` | 是 | 2 | 经典跟单：推荐榜单、创建跟单绑定 |
| `copy-trading-tradfi` | 是 | 2 | TradFi 跟单（MT5）：推荐榜单、创建跟单绑定 |
| `strategy` | 是 | 6 | TWAP、Chase Limit、Iceberg 策略订单 — 创建、列表、子订单列表、停止 |
| `earn` | 是 | 6 | 基础理财：查询理财产品、申购/赎回、申购赎回记录、持仓查询、收益历史、小时收益 |
| `advanceearn` | 是 | 4 | 高级理财（双币投资）：查询高级理财产品、下单、持仓查询、订单查询 |
| `p2p` | 是 | 10 | P2P 点对点交易：发布/更新/下架广告、浏览在线广告、查询我的广告及详情、订单列表、订单详情、待处理订单、标记已付款 |
| `alpha` | 是 | 10 | 链上交易：获取报价、买入、赎回、支付代币列表、订单列表、链上代币列表、代币价格、代币详情、Alpha 资产列表、资产详情 |
| `websocket` | 混合 | 26 | 订阅-快照模式实时数据：订单薄、Ticker、K 线、成交、强平、仓位、钱包、期权希腊值、RFQ 大宗交易、价差合约等 |

**合计：200 个工具**

---

## 使用示例

接入 AI 助手后，可以用自然语言提问：

**行情数据：**
- "BTC/USDT 现在多少钱？"
- "给我看一下 ETHUSDT 深度为 50 的订单薄"
- "查一下 BTC 永续合约最近 10 根小时 K 线"
- "前 5 大永续合约当前资金费率分别是多少？"
- "BTCUSDT 当前的未平仓量是多少？"

**账户与资产：**
- "我的钱包余额是多少？"
- "查一下我最近的交易日志"
- "我的 Maker/Taker 费率是多少？"
- "列出我所有账户的聚合资产"
- "查看我的组合保证金状态"

**用户与子账户：**
- "列出我所有的子账户"
- "查看当前 API Key 的权限和 VIP 等级"
- "我的子账户分别是什么账户类型？"
- "查看我通过邀请码邀请的用户"

**WebSocket 实时数据：**
- "订阅 BTCUSDT 订单薄，给我一个快照"
- "获取我账户最新的成交记录"
- "查看我当前的仓位状态"

---

## WebSocket 工具说明

WebSocket 工具与 MCP 的请求/响应模型兼容：

1. 工具建立 WebSocket 连接到 Bybit 行情推送地址
2. 订阅指定频道（私有频道会先完成鉴权握手）
3. 收集指定数量的消息（默认 1 条），或等待 `timeoutMs`（默认 5000 ms）后超时返回
4. 返回快照数据并关闭连接

这样一来，实时数据可在单次工具调用中完整返回，无需维护长连接。

---

## 安全注意事项

- API Key 从环境变量读取，不会硬编码在任何地方
- 所有鉴权请求遵循 Bybit V5 API 规范，使用 HMAC-SHA256 签名
- 请勿泄露 API Secret，也不要将其提交到代码仓库
- 建议为 API Key 设置最小权限（只读权限优先）

---

## 常见问题

### MCP 服务器未加载 / "No MCP servers configured"

如果配置完成后 AI 助手仍然显示没有工具或"No MCP servers configured"：

#### 1. 确认配置文件路径

Claude Code 从 `~/.claude.json`（按项目）读取 MCP 配置，**而非** `~/.claude/settings.json`。推荐通过 CLI 添加：

```bash
claude mcp add bybit -- npx -y bybit-official-trading-server@latest
```

此命令会写入正确的配置文件。

#### 2. 必要时使用 `npx` / `node` 的完整路径

某些环境在启动子进程时不加载 Shell 配置文件（`.zshrc` / `.zprofile`），导致 PATH 中找不到 Node.js。可以查询并使用完整路径：

```bash
# 查找 npx 路径
which npx
# 示例：/usr/local/bin/npx
```

#### 3. 修改配置后重启 AI 助手

MCP 服务器在会话启动时连接。添加或修改配置后，必须**退出并重启** AI 助手才能生效。

#### 4. 验证服务器能正常启动

测试服务器能否启动并响应 MCP 协议：

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"0.1"}}}' | npx -y bybit-official-trading-server@latest
```

#### 5. 不要手动启动服务器

AI 客户端通过 stdio 自行管理 MCP 服务器进程。手动启动的实例是**完全独立**的进程——客户端不会连接到它。让客户端自动管理生命周期即可。

### 快速排查表

| 症状 | 原因 | 解决方法 |
|------|------|---------|
| 配置后没有工具出现 | 配置写入了错误的文件 | 使用 `claude mcp add` CLI 命令 |
| 配置存在但工具未加载 | PATH 中找不到 `npx` / `node` | 使用 `npx` 的绝对路径 |
| 之前有工具现在没有了 | 修改配置后未重启 | 重启 AI 助手 |
| 鉴权接口报错 | API 凭证缺失或有误 | 检查 `BYBIT_API_KEY` 和 `BYBIT_API_SECRET` 环境变量 |

---

## 本地开发

```bash
# 安装依赖
npm install

# 开发模式启动
npm run dev

# 类型检查
npm run typecheck

# 生产构建
npm run build
```

---

## 风险提示

加密货币交易存在重大亏损风险，使用前请注意以下事项：

- **保护 API 凭证** — 启用 IP 白名单，仅授予必要权限；非必要情况下禁用提币权限
- **先测试再交易** — 接入真实账户前，请先在 [Bybit 测试网](https://testnet.bybit.com/)完成验证（设置 `BYBIT_TESTNET=true`）
- **您掌控一切** — 所有操作均由您或 AI 助手主动发起，请在执行前仔细确认订单内容
- **遵守 Bybit 条款** — 使用本服务器须遵守 [Bybit 用户协议](https://www.bybit.com/zh-MY/terms-service/terms-of-use)

---

## 参与贡献

欢迎提交 Pull Request！

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

---

## 相关资源

| 资源 | 说明 |
|------|------|
| [Bybit V5 API 文档](https://bybit-exchange.github.io/docs/v5/intro) | Bybit 官方 API 文档 |
| [Bybit 测试网](https://testnet.bybit.com/) | 用测试资金练习交易 |
| [MCP 协议规范](https://modelcontextprotocol.io/) | Model Context Protocol 规范 |
| [npm 包](https://www.npmjs.com/package/bybit-official-trading-server) | 已发布的 npm 包 |

---

## License

MIT
