---
id: aipowered-refactor-planner
title: Refactor Planner
type: skill
category: architecture
tags: [refactor, migration, planning, risk]
ribbon: new
preview: Breaks a refactor into safe, shippable PRs with explicit risk callouts and a rollback plan per step — so the migration stops being one giant scary branch.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Refactor Planner

A skill for turning a vague "we should refactor this" into a sequence of small, mergeable, reversible PRs. Each step ships green, each step is rollback-able, and the team isn't blocked on a four-week branch. Use this before you write any code on a non-trivial migration — replacing an ORM, splitting a service, swapping an auth provider, removing a deprecated pattern.

## When to use this skill

- A refactor touching 20+ files or crossing module boundaries
- Replacing a dependency the whole codebase imports (axios → fetch, moment → date-fns)
- Splitting a monolith module or extracting a service
- Migrating data shape or API contract while keeping the system live
- Anyone has said "we should rewrite this" — turn that into a plan instead

## When NOT to use this skill

- Single-file cleanups — just do them
- Refactors with no users yet (pre-launch code) — fast-forward, don't plan
- "Refactors" that are actually feature work in disguise — separate them first

## How to run

### Step 1 — Define done

Write the end state in 1–2 sentences. "All callers of `getUserLegacy()` removed and the function deleted" is a done definition. "Cleaner user code" is not. If you can't write the done condition, you don't have a refactor — you have a vibe.

### Step 2 — Map the dependency graph

Identify what depends on what. Use `grep` or `rg` to find every call site. Note which modules are leaves (nothing else depends on them) and which are roots (lots of things do). You refactor leaves first; roots last. If you flip that order, every change cascades.

### Step 3 — Slice into PRs

Each PR must satisfy four rules:

1. **Mergeable on its own** — the system passes CI and runs in prod after this PR alone.
2. **Reversible** — a single revert returns to a known-good state.
3. **Under ~400 lines of diff** — bigger PRs don't get reviewed properly.
4. **Has a checkpoint** — a test, a metric, or a manual smoke check that proves the step worked.

Typical safe shape:
- **PR 1: Introduce the new thing alongside the old.** Add the new module/function/table. Wire it up under a feature flag or behind an unused entry point. No callers switched yet.
- **PR 2…N: Migrate callers one cluster at a time.** Group by ownership or by risk. Auth callers in one PR, billing callers in the next. Never mix high-risk and low-risk migrations in the same PR.
- **PR N+1: Cut the old thing.** Delete the legacy code path. This is the only PR that's truly destructive — it deserves its own review.

### Step 4 — Risk and rollback per step

For each PR in the plan, write:
- **Risk** — what breaks if this PR is wrong (one sentence). Be honest. "Logged-out users see 500" is real risk; "potential edge case" is not.
- **Rollback** — `git revert` is fine for code; for data migrations, name the down-migration or the recovery query. If rollback isn't clean, the step is too big.

### Step 5 — Ship the plan, then the code

Post the plan as an issue or doc before the first PR. Reviewers should see the shape before they see commits. If the plan stays unchanged through PR 3, great. If you're rewriting the plan after every PR, the slicing was wrong — stop and re-slice.

### What to avoid

- Don't plan ten PRs in advance — three to five concrete steps and a sketch of the rest.
- Don't ship a "preparatory refactor" PR that has no behaviour change and is 1,200 lines. Split it.
- Don't combine the cutover and the cleanup in one PR. Ship the switch, watch it, then delete.

## Hand-off

Return the plan as a numbered list of PRs with title, scope, risk, and rollback per step. Include the done condition at the top. The user should be able to open the first PR from the plan without re-reading the whole document.
