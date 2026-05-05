# Engineering

Plug-ins to ship code with judgement — review, explain, debug, and document without grinding the team.

## When to install

You're a working engineer (or a tech lead) and you want to:

- Get a fast, opinionated second pair of eyes on code before review
- Explain unfamiliar architecture to new joiners or to yourself
- Cut debugging time on intermittent or cross-system bugs
- Keep docs and ADRs short, useful, and actually current

## Categories

| Category | What lives here |
|---|---|
| `review` | Code review, PR feedback, security scans |
| `architecture` | System diagrams, ADRs, refactor planning |
| `debugging` | Stack trace triage, log mining, repro recipes |
| `docs` | READMEs, runbooks, internal docs, comments |

## Skills

### Free

- [Code Reviewer](./skills/aipowered-code-reviewer/SKILL.md) — `aipowered-code-reviewer` — free
  A skill that reviews a diff or file with the judgement of a senior engineer — flagging risk, suggesting cuts, and never bikeshedding.
- [PR Description Writer](./skills/aipowered-pr-description-writer/SKILL.md) — `aipowered-pr-description-writer` — free
  Generates a real PR description from a diff — what changed, why, how to test, and what could break — so reviewers stop guessing your intent.
- [README Writer](./skills/aipowered-readme-writer/SKILL.md) — `aipowered-readme-writer` — free
  Produces a README a new engineer can use in 5 minutes — what it is, how to run it locally, and where to read next when something breaks.

### Pro

- [Security Auditor](./skills/aipowered-security-auditor/SKILL.md) — `aipowered-security-auditor` — pro
  Security-focused review of a PR or file — flags injection, auth, secrets, and dependency risk against OWASP top 10 with named line numbers, not vibes.
- [ADR Writer](./skills/aipowered-adr-writer/SKILL.md) — `aipowered-adr-writer` — pro
  Captures an architecture decision — context, options, choice, consequences — so future you and the next hire don't relitigate the same trade-off in six months.
- [Refactor Planner](./skills/aipowered-refactor-planner/SKILL.md) — `aipowered-refactor-planner` — pro
  Breaks a refactor into safe, shippable PRs with explicit risk callouts and a rollback plan per step — so the migration stops being one giant scary branch.
- [System Mapper](./skills/aipowered-system-mapper/SKILL.md) — `aipowered-system-mapper` — pro
  Reads a repo and produces a one-page architecture map for a new joiner — major pieces, request flow, and the footguns nobody warned them about.
- [Stack Trace Triager](./skills/aipowered-stack-trace-triager/SKILL.md) — `aipowered-stack-trace-triager` — pro
  Turns a stack trace into ranked hypotheses, a repro plan, and the next file to read — without guessing, hand-waving, or pasting the same Stack Overflow answer.
- [Log Detective](./skills/aipowered-log-detective/SKILL.md) — `aipowered-log-detective` — pro
  Mines a log set for the pattern behind an intermittent bug — flags signal vs noise and names the next thing to instrument before guessing again.
- [Runbook Writer](./skills/aipowered-runbook-writer/SKILL.md) — `aipowered-runbook-writer` — pro
  Writes an oncall runbook from an incident — symptoms, checks, fixes, and the escalation that matters — so the next person paged at 3am isn't reverse-engineering history.

## Prompts

- [Architecture Explainer](./prompts/aipowered-architecture-explainer.md) — `aipowered-architecture-explainer` — free
  Reads a codebase or set of files and produces a one-page architecture explanation aimed at a new engineer joining tomorrow.
