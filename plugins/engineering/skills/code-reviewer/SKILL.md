---
id: code-reviewer
title: Code Reviewer
type: skill
category: review
tags: [code-review, quality, security, refactoring]
preview: A skill that reviews a diff or file with the judgement of a senior engineer — flagging risk, suggesting cuts, and never bikeshedding.
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Code Reviewer

A skill for reviewing code the way a senior engineer would: focused on risk and design, not formatting. Use this on a diff before you raise the PR, on a file you're refactoring, or on a stranger's code you've inherited.

## When to use this skill

- Pre-PR self-review on a meaningful change (more than ~50 lines)
- Reviewing an open PR where you want a sharper second opinion before commenting
- Auditing a hot path, a security-sensitive module, or a piece of code you don't trust
- Triaging a legacy file before deciding whether to refactor or rewrite

## When NOT to use this skill

- For pure style/formatting nits (a linter is the right tool)
- For tiny diffs (1-2 line fixes) where review overhead beats the value
- For full-codebase audits — this skill reviews units, not whole repos

## How to run

### Step 1 — Frame the review

Ask the user (or look at PR description / commit message) for:

- **Intent** — what this change is *supposed* to do
- **Scope** — files in scope and files explicitly out of scope
- **Constraints** — runtime, language version, framework, performance budget, anything load-bearing

If intent is unclear, stop and ask. Reviewing without knowing what the code is *for* produces nitpicks, not insight.

### Step 2 — Read three times

1. **First pass — does it do what it says?** Trace the happy path. Does the diff actually achieve the stated intent?
2. **Second pass — what could break it?** Edge cases, error paths, concurrency, partial failures, large inputs, empty inputs.
3. **Third pass — what should be deleted?** Premature abstractions, dead branches, comments that lie, copy-paste blocks, hand-rolled helpers that duplicate stdlib.

### Step 3 — Report findings in three buckets

Don't mix these — the structure is the value:

- **Must fix** — bugs, security issues, breakage of stated intent. Be precise. Cite file and line.
- **Should fix** — design issues, missed edge cases, complexity that can be cut. Justify the cost of *not* fixing.
- **Consider** — opinions and preferences. Mark them as opinion. The author is free to ignore.

For each item, provide: location (`file.ts:42`), the issue in one sentence, and a suggested change in 1–3 lines of code or pseudocode.

### Step 4 — Surface the strongest signal

End with one paragraph: the single most important thing the author should change before merging, and why. If there's nothing — say so. "Looks good to merge" is a valid answer when it's true. Don't pad reviews with manufactured concerns.

## What to avoid

- Don't bikeshed naming unless the name is actually misleading.
- Don't rewrite the change in your head and review the rewrite. Review what's there.
- Don't recommend adding tests, error handling, or validation unless you can name the specific case that's missing. "Add tests" is a non-comment.
- Don't recommend speculative future-proofing. "What if we need to scale this 10x?" is not a review comment.
- Never claim the code "looks good" if you didn't actually trace the logic. Say what you read and what you didn't.

## Hand-off

If this is pre-PR review, hand back the prioritised list. If this is on a real PR, hand back the comments in a format the user can paste directly (e.g. GitHub suggested-change blocks). Include the one-paragraph summary at the top, every time.
