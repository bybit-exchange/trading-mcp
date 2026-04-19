# 设计文档：通过 GitHub Actions 自动发布到 npm

**日期：** 2026-04-19
**状态：** 已审批

## 概述

用 GitHub Actions workflow 替代本地手动发布（`scripts/publish.sh`），在推送版本 tag 时自动将 `bybit-official-trading-server` 发布到 npmjs.com。

## 触发条件

- 事件：`push` tag，格式匹配 `[0-9]+.[0-9]+.[0-9]+`（如 `2.0.9`）
- tag 不带 `v` 前缀，直接用纯版本号
- tag 由开发者在 internal 仓库同步完成后手动打

## Workflow 步骤

1. **Checkout** — `actions/checkout@v4`
2. **配置 Node.js 20** — `actions/setup-node@v4`，registry 指向 `https://registry.npmjs.org`
3. **安装依赖** — `npm ci`
4. **校验版本一致性** — 断言 tag 名称与 `package.json` 中的 `version` 字段相同；不一致则报错中断
5. **构建** — `npm run build`（执行 `tsup`，产物输出到 `dist/`）
6. **发布** — `npm publish`，通过 `NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}` 鉴权

## 一次性手动配置

| 位置 | Key | 说明 |
|---|---|---|
| npmjs.com → Access Tokens | — | 生成一个 **Automation** 类型的 token |
| GitHub repo → Settings → Secrets → Actions | `NPM_TOKEN` | 粘贴上面生成的 token |

## 新增文件

`.github/workflows/publish.yml`

## 范围外（不在本次实现中）

- 自动创建 GitHub Release
- 自动 bump 版本号（版本由 internal 仓库同步管理）
- 自动生成 Changelog
