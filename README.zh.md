# bybit-official-trading-server

将 Bybit REST 和 WebSocket API 封装为 [MCP（模型上下文协议）](https://modelcontextprotocol.io) 工具的服务器，让 AI 助手（Claude、Cursor 等）可以直接用自然语言查询行情数据、管理 Bybit 账户。

[English Documentation](./README.md)

---

## 功能特性

- **行情数据** — K 线、订单薄、Ticker、资金费率、持仓量、风险限额等（22 个工具，无需鉴权）
- **账户管理** — 钱包余额、交易日志、手续费率、抵押品信息、MMP 状态、DCP 配置、SMP 分组等（11 个工具，需要鉴权）
- **资产管理** — 资产总览、组合保证金、交割/结算记录、全账户聚合资产（5 个工具，需要鉴权）
- **用户管理** — API Key 信息、子账户列表、账户类型查询、邀请返佣查询（7 个工具，需要鉴权）
- **WebSocket** — 快照模式实时订阅订单薄、Ticker、K 线、成交、仓位、钱包、RFQ、价差合约等（26 个工具）
- **HMAC-SHA256 签名** — 鉴权请求自动签名，无需手动处理
- **频率限制** — 内置按接口的频率控制
- **主网 / 测试网** — 通过环境变量切换

---

## 环境要求

- **Node.js >= 20.6** — 运行 `node -v` 查看当前版本，如需安装请前往 [nodejs.org](https://nodejs.org/)
- **Bybit 账户** — 仅账户/资产/用户类工具需要，行情类工具无需登录

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
      "args": ["-y", "bybit-official-trading-server"],
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
      "args": ["-y", "bybit-official-trading-server"],
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
      "args": ["-y", "bybit-official-trading-server"],
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
      "args": ["-y", "bybit-official-trading-server"],
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

| 分类 | 是否需要鉴权 | 说明 |
|------|------------|------|
| `market` | 否 | K 线、订单薄、Ticker、资金费率、持仓量、历史波动率、风险限额、多空比、交割价格、保险基金等（22 个工具） |
| `account` | 是 | 钱包余额、交易日志、手续费率、抵押品设置、期权希腊值、MMP 状态、断线保护、防自成交分组、可划转金额等（11 个工具） |
| `asset` | 是 | 资产总览、组合保证金、交割/结算记录、母子账户聚合资产（5 个工具） |
| `user` | 是 | API Key 信息与权限、子账户列表、成员账户类型、邀请返佣查询（7 个工具） |
| `websocket` | 混合 | 订阅-快照模式实时数据：订单薄、Ticker、K 线、成交、强平、仓位、钱包、期权希腊值、RFQ 大宗交易、价差合约等（26 个工具） |

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

## License

MIT
