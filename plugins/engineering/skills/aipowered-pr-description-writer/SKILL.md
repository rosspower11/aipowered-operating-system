---
id: aipowered-pr-description-writer
title: PR Description Writer
type: skill
category: review
tags: [pull-request, code-review, documentation, git]
ribbon: new
preview: Generates a real PR description from a diff — what changed, why, how to test, and what could break — so reviewers stop guessing your intent.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# PR Description Writer

A skill for turning a diff into a description a reviewer will actually read. Covers what changed, why it changed, how to verify it locally, and what could break in production. Use it when the diff is non-trivial and the title alone won't tell the reviewer enough to do useful work.

## When to use this skill

- A PR touches more than 3 files or 100 lines
- A change crosses module boundaries (API + DB, frontend + backend)
- The work is a refactor, migration, or anything with rollout risk
- You're picking up someone else's branch and need to write the description from scratch
- The change is feature-flagged or partially shipped

## When NOT to use this skill

- One-line typo fixes — the diff is the description
- Drafts you don't intend to merge (use a draft PR with a one-liner)
- Branches with messy history that need rebasing first — clean the diff before describing it

## How to run

### Step 1 — Get the actual diff

Run `git diff origin/main...HEAD` (or the equivalent target branch). Read it. Don't write from commit messages alone — they lie or skip context. If the diff is over ~800 lines, ask the user which subset matters; padding the description with file lists is noise.

### Step 2 — Structure the description in five sections

Use this exact shape:

1. **Summary (2–4 sentences)** — what changed in plain English. Lead with the user-visible or system-visible effect, not the file names. "Auth tokens now refresh on focus" beats "Refactored `useAuth.ts`".
2. **Why** — the problem this solves. Link the ticket if there is one. If there isn't, say what triggered the work (incident, customer report, perf measurement).
3. **How** — the approach in 3–6 bullets. Name the load-bearing files (`api/auth/refresh.ts:88`, `db/migrations/2026_05_03_tokens.sql`). Call out anything counter-intuitive.
4. **How to test** — concrete steps a reviewer can run. Real commands, real URLs, real seed data. "Test auth flow" is not a test plan. "Run `pnpm dev`, log in, leave tab idle 10 min, switch back — token should refresh without re-login" is.
5. **Risk** — what could break, what's the rollback, what's behind a flag. If there's a migration, say whether it's reversible.

### Step 3 — Cut anything that isn't load-bearing

Delete sentences that just restate the diff. Delete "this PR adds...". Delete sections that say "N/A" — just remove them. A short, honest description beats a templated one.

### Step 4 — Flag what you couldn't verify

If you wrote the description from a diff alone (no ability to run code), say so at the bottom: "Description generated from diff; test plan not executed." Reviewers should know what's been claimed vs. confirmed.

### Common failure modes

- Writing "Refactored X for clarity" with no specifics. Either name what got clearer or don't claim it.
- Listing every file changed. The diff already does that.
- Skipping the risk section because the change "feels safe". Migrations and auth changes are never safe by feel.

## Hand-off

Return the description as markdown ready to paste into the PR body. If the user wants it via `gh pr edit --body`, format accordingly. Flag any sections you couldn't fill — empty "Why" or "How to test" sections are a signal the author needs to add context, not template noise.
