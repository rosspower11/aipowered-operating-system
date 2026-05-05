---
id: aipowered-security-auditor
title: Security Auditor
type: skill
category: review
tags: [security, owasp, audit, vulnerabilities]
ribbon: new
preview: Security-focused review of a PR or file — flags injection, auth, secrets, and dependency risk against OWASP top 10 with named line numbers, not vibes.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Security Auditor

A skill for reviewing code through a security lens: injection, auth, secrets, dependency risk, and the OWASP top 10. Use it on PRs that touch authentication, data ingress, file handling, or anything network-facing. Not a replacement for SAST tooling — this catches the design-level issues that scanners miss because they require context.

## When to use this skill

- A PR touches auth, sessions, tokens, or password flows
- New endpoints accepting user input — especially file uploads or query strings into SQL
- Adding a new third-party dependency or upgrading one with known CVEs
- Changes to environment-variable handling, secrets loading, or config files
- Any code that constructs a shell command, SQL string, or HTML from user input

## When NOT to use this skill

- Pure UI/styling changes with no data flow
- Internal tooling not exposed to users or untrusted networks
- Code that's already been through a recent security review with no diff to the relevant paths

## How to run

### Step 1 — Map the trust boundary

Identify where untrusted input enters: HTTP handlers, queue consumers, file uploads, webhook endpoints. Mark these as the audit surface. Trace each input one hop into the system. If you can't tell where input comes from, stop and ask.

### Step 2 — Walk the OWASP categories that apply

Don't recite all ten — only the ones the diff actually touches. For each, look for the failure pattern, not the keyword:

- **Injection** — string concatenation into SQL (`db.query("SELECT * FROM users WHERE id = " + id)`), `child_process.exec` with user input, `eval`, template strings into shell. Look at `db/`, `api/handlers/`, anything calling `exec`/`spawn`/`execSync`.
- **Broken auth** — missing `requireAuth` middleware on new routes, JWT verified with `none` algorithm, sessions not invalidated on password change, password reset tokens with no expiry. Check `auth/middleware.ts`, route registrations, and token issuance code.
- **Sensitive data exposure** — secrets logged (`console.log(req.headers)`), PII in error responses, tokens in URLs (will end up in access logs).
- **SSRF** — `fetch(userProvidedUrl)` with no allowlist. Look for outbound HTTP from request handlers.
- **Deserialization** — `JSON.parse` is fine; `pickle.loads`, `yaml.load` (vs `safe_load`), `unserialize` are not.
- **Dependency risk** — diff in `package.json`, `requirements.txt`, `go.mod`. Run the equivalent of `npm audit` or `pip-audit` mentally — flag any new dep with a recent CVE if you know one.

### Step 3 — Check for secrets in the diff

Grep the diff for `AKIA`, `sk-`, `xoxb-`, `-----BEGIN`, `password=`, `api_key=`. Even if it's "just a test value", flag it. Secrets in git history are forever.

### Step 4 — Report by severity, not category

Group findings into **Critical / High / Medium / Low**. For each: file and line (`api/users.ts:42`), the exact failure mode in one sentence, and the minimum fix. Don't hand-wave with "consider hardening". Say what to change.

### What to avoid

- Don't flag theoretical issues without a concrete path to exploit. "This could be vulnerable if..." with no scenario is noise.
- Don't recommend "add input validation" without naming the field and the validator.
- Don't flag CSRF on a stateless JSON API with no cookies — wrong threat model.
- Don't claim something is safe because you didn't see the issue. State what you checked.

## Hand-off

Return findings as a severity-grouped list with line citations and minimum fixes. Include a one-paragraph summary at the top: total issues by severity and the single thing to fix before merge. If you found nothing, say what you audited and what you skipped — silence isn't a clean bill.
