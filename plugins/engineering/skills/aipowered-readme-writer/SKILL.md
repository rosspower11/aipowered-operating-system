---
id: aipowered-readme-writer
title: README Writer
type: skill
category: docs
tags: [readme, documentation, onboarding, setup]
ribbon: new
preview: Produces a README a new engineer can use in 5 minutes — what it is, how to run it locally, and where to read next when something breaks.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# README Writer

A skill for writing the README a new joiner actually needs: what this repo is, how to get it running on their laptop, and where to look when something breaks. Not a feature brochure, not a marketing page. Use it for new repos, repos with a stale README, or internal services where onboarding takes more than a day.

## When to use this skill

- New repo with no README or a one-liner
- Existing README is out of date (commands fail, paths moved)
- Onboarding feedback says "I couldn't get it running"
- Open-sourcing an internal repo and the README needs to make sense to strangers
- A monorepo package that newcomers keep asking about in Slack

## When NOT to use this skill

- A repo with a working, recently-updated README — fix the gaps, don't rewrite
- Generated SDK packages — the generator owns the README
- Throwaway prototypes — a one-line description in `package.json` is enough

## How to run

### Step 1 — Read the repo before writing

Look at `package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod` for scripts, deps, and entry points. Skim the top-level folder structure. Read the existing README if there is one — don't throw away accurate sections. If there's a `Makefile` or `justfile`, those scripts are usually the truth about how the repo is run.

### Step 2 — Write the seven sections, in this order

1. **One-sentence description** — what this repo does and for whom. No "leverages", no "powered by". "API for fetching pricing from upstream vendors" is the bar.
2. **Quick start** — the minimum commands to get it running. Real commands. Test them mentally against the scripts you read. Example: `pnpm install && pnpm dev` or `uv sync && uv run pytest`.
3. **Prerequisites** — runtime versions (`Node 20+`, `Python 3.12`), required services (Postgres 15, Redis), and required env vars. Point at `.env.example` if it exists.
4. **Project layout** — 5–10 lines mapping the top folders to their purpose. Skip anything obvious (`node_modules`, `.git`).
5. **Common tasks** — `pnpm test`, `pnpm lint`, `pnpm db:migrate`. Each with a one-line description of when you'd run it.
6. **Troubleshooting** — the 2–3 things that actually break for new joiners. "Port 5432 already in use" is real; "general issues" is not. Skip this section if you don't know any concrete failure modes.
7. **Where to read next** — links to ADRs, runbooks, the deeper architecture doc. If those don't exist, link to the relevant code entry point (`src/server.ts:1`) instead.

### Step 3 — Cut what you can't verify

If you don't know whether `pnpm dev` actually works in this repo, say so or leave it out. Lying in a README is worse than a sparse README — the new joiner loses trust on day one.

### Step 4 — Make it copy-pasteable

Every command in a fenced code block. No prose-embedded commands. Reviewers and new joiners will copy them; broken whitespace breaks onboarding.

### What to avoid

- Don't write a "Features" section. The code is the feature list.
- Don't include screenshots of the terminal. They go stale and never get updated.
- Don't write installation instructions for tools the reader is expected to have (`brew install git`).

## Hand-off

Return the README as a single markdown file ready to drop at the repo root. If you couldn't verify any commands, list them at the bottom under "Unverified — please check before merging". The author should run the quick-start once on a clean checkout before merging.
