# Design: Automated npm Publishing via GitHub Actions

**Date:** 2026-04-19
**Status:** Approved

## Overview

Replace manual local publishing (`scripts/publish.sh`) with a GitHub Actions workflow that publishes `bybit-official-trading-server` to npmjs.com automatically when a version tag is pushed.

## Trigger

- Event: `push` to tags matching the pattern `[0-9]+.[0-9]+.[0-9]+` (e.g., `2.0.9`)
- No `v` prefix — tags are bare version numbers
- Tags are created manually by the developer after the internal-repo sync lands on the main branch

## Workflow Steps

1. **Checkout** — `actions/checkout@v4`
2. **Setup Node.js 20** — `actions/setup-node@v4` with `registry-url: https://registry.npmjs.org`
3. **Install dependencies** — `npm ci`
4. **Validate version** — assert that the tag name equals the `version` field in `package.json`; fail with a clear error message if they differ
5. **Build** — `npm run build` (runs `tsup`, outputs to `dist/`)
6. **Publish** — `npm publish`, authenticated via `NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}`

## Secret Configuration (one-time, manual)

| Where | Key | Value |
|---|---|---|
| npmjs.com → Access Tokens | — | Generate a new **Automation** token |
| GitHub repo → Settings → Secrets → Actions | `NPM_TOKEN` | Paste the Automation token |

## File Created

`.github/workflows/publish.yml`

## Out of Scope

- Automatic GitHub Release creation
- Automatic version bumping (version is managed by internal repo sync)
- Changelog generation
