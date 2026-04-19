# GitHub Actions npm Auto-Publish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a GitHub Actions workflow that publishes `bybit-official-trading-server` to npmjs.com automatically when a version tag (e.g. `2.0.9`) is pushed.

**Architecture:** A single workflow file listens for tag pushes matching the semver pattern, validates that the tag matches `package.json`'s `version` field, builds the project, then publishes to npm using a secret token.

**Tech Stack:** GitHub Actions, Node.js 20, npm, tsup (existing build tool)

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `.github/workflows/publish.yml` | Full publish pipeline: trigger, validate, build, publish |

---

### Task 1: Scaffold the workflow file with trigger and version validation

**Files:**
- Create: `.github/workflows/publish.yml`

- [ ] **Step 1: Create the `.github/workflows/` directory and workflow file**

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/publish.yml` with the following content:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - '[0-9]+.[0-9]+.[0-9]+'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci

      - name: Validate tag matches package.json version
        run: |
          PKG_VERSION=$(node -p "require('./package.json').version")
          TAG_VERSION="${GITHUB_REF_NAME}"
          if [ "$PKG_VERSION" != "$TAG_VERSION" ]; then
            echo "Error: tag '$TAG_VERSION' does not match package.json version '$PKG_VERSION'"
            exit 1
          fi
          echo "Version check passed: $TAG_VERSION"

      - name: Build
        run: npm run build

      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- [ ] **Step 2: Verify the validation script logic locally**

Run this to simulate what the workflow's validation step does (replace `2.0.9` with the current version in your `package.json`):

```bash
PKG_VERSION=$(node -p "require('./package.json').version")
TAG_VERSION="2.0.9"
if [ "$PKG_VERSION" != "$TAG_VERSION" ]; then
  echo "FAIL: tag '$TAG_VERSION' != package.json '$PKG_VERSION'"
else
  echo "PASS: $TAG_VERSION"
fi
```

Expected output: `PASS: 2.0.9`

Now test the failure case:

```bash
PKG_VERSION=$(node -p "require('./package.json').version")
TAG_VERSION="9.9.9"
if [ "$PKG_VERSION" != "$TAG_VERSION" ]; then
  echo "FAIL: tag '$TAG_VERSION' != package.json '$PKG_VERSION'"
else
  echo "PASS: $TAG_VERSION"
fi
```

Expected output: `FAIL: tag '9.9.9' != package.json '2.0.9'`

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/publish.yml
git commit -m "ci: add GitHub Actions workflow to publish to npm on version tag"
```

---

### Task 2: Configure GitHub Secret and do a dry-run verification

**Files:**
- No code changes — manual configuration steps

- [ ] **Step 1: Add `NPM_TOKEN` to GitHub repository secrets**

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NPM_TOKEN`
4. Value: paste the Granular Access Token generated on npmjs.com (Read and write, All packages, 90-day expiry)
5. Click **Add secret**

- [ ] **Step 2: Push the branch and open a PR to merge into main**

```bash
git push origin dev-mcp
```

Open a PR from `dev-mcp` → `main` on GitHub and merge it.

- [ ] **Step 3: Test the workflow with the current version tag**

After merging, push a tag that matches the current `package.json` version:

```bash
git checkout main
git pull
git tag 2.0.9
git push origin 2.0.9
```

- [ ] **Step 4: Verify the workflow ran successfully**

Go to GitHub repo → **Actions** tab → find the **"Publish to npm"** workflow run triggered by tag `2.0.9`.

Expected: all steps green, final step shows something like:
```
npm notice Publishing to https://registry.npmjs.org/
+ bybit-official-trading-server@2.0.9
```

If the package was already published at this version, npm will error with `403 You cannot publish over the previously published versions`. That's expected — it means the workflow is working correctly. For a real new version, it will succeed.

---

## Future Release Workflow

Once this is in place, the process for every new release is:

```bash
# 1. After the internal sync lands on main (package.json version already updated):
git checkout main && git pull

# 2. Push the version tag — this triggers the publish workflow:
git tag 2.0.10
git push origin 2.0.10
```

That's it. GitHub Actions handles the rest.

---

## Token Rotation Reminder

Granular npm tokens expire after **90 days**. When the token expires, the workflow will fail at the publish step with a 401 error. To fix: generate a new token on npmjs.com and update the `NPM_TOKEN` secret in GitHub.
