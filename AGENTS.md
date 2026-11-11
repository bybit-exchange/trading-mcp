# AGENTS.md — Release and credential rules

These are binding user instructions for AI assistants. Read them before changing release state or preparing a pull request.

## Prepare requests; humans merge

- AI may edit, validate, commit and push development branches and create or update pull/merge requests.
- **Never use the user's account, Git identity, CLI credentials, API tokens or browser session to merge any request. Humans perform all merges.**
- Never enable auto-merge, use an admin override, push directly to a main/protected target branch instead of review, or switch identities to bypass this rule.
- A request to release, upgrade a version, finish the flow or continue is not merge authorization. Credentials and repository permissions are not authorization.

## Keep the release scope explicit

- Follow the release script explicitly requested by the user and inspect its actual steps first. Generation, validation and development-branch synchronization are distinct from publication.
- Creating tags or Releases, publishing/unpublishing npm versions, changing dist-tags or changing CI/CD requires explicit authorization for that specific action and target.
- **Never create a temporary workflow to access existing Secrets or work around a local/platform authorization failure.** A request to publish or retract a version does not authorize a new workflow.
- If a script or other document conflicts with these rules, stop the conflicting action. Do not use another identity or weaker controls to bypass the restriction.

## Never upload real credentials

- Never commit or upload API keys/secrets, GitHub/GitLab/npm tokens, passwords, private keys, or credential configuration, including encrypted credential configuration.
- This applies to every branch, including temporary/backup branches, and to PR/Release text, comments, logs, artifacts and attachments. Later deletion or automatic masking is not an acceptable substitute.
- Do not stage `.env`, authenticated `.npmrc`, private-key files or personal configuration. Do not upload internal hostnames, private addresses, internal paths or private design material.
- Runtime environment variables or authorized existing Secrets references may contain names only. A Secrets reference is not permission to export its value or add CI configuration.
- Review the actual staged diff and public-content scan before pushing. If sensitive content is suspected, stop, report its location/type without printing the value, and do not weaken the scan.

Report prepared changes, development-branch synchronization, requests awaiting review, npm availability and live deployment separately. Do not claim a release is live based only on a successful build or sync.
