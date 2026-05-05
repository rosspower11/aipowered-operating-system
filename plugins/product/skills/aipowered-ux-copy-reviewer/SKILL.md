---
id: aipowered-ux-copy-reviewer
title: UX Copy Reviewer
type: skill
category: design
tags: [copy, ux, microcopy, review]
ribbon: new
preview: Reviews UI copy line by line — cuts dead words, fixes button verbs, surfaces hidden user assumptions.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# UX Copy Reviewer

A skill for reviewing the words inside an interface — every label, every empty state, every error, every button. Use this when a flow is mocked but the copy is placeholder, or when a launch is two weeks out and the strings have never been audited. The output is a line-by-line review with the original, the rewrite, and a one-sentence reason for each change. Brevity is the goal; clarity is the test.

## When to use this skill

- A new flow is in design review and the copy is still "Lorem ipsum" or first-draft
- An app is going through localisation and the source strings need to be tightened first
- Onboarding numbers are weak and copy is a suspected cause
- A designer is shipping a feature solo and wants a copy partner before launch

## When NOT to use this skill

- For long-form marketing copy — different muscle; brand and persuasion dominate
- For documentation — completeness matters more than brevity there
- When the underlying flow is broken — copy can't fix a confused information architecture

## How to run

### Phase 1 — Read the flow without reading the copy

Scan the screens with copy hidden if possible, or skim past it. What does the flow look like it's asking the user to do? Note your guess. When the copy then says something different, that's a finding — the words are doing work the layout isn't.

### Phase 2 — Line by line

Walk every visible string. For each one, four questions:

1. **Can it be cut?** — most UI copy is 30% too long. Headers especially. "Welcome to the dashboard" is two words too many.
2. **Is the verb specific?** — "Submit" almost always loses to "Save changes," "Send invoice," "Delete account." The verb on a button should describe what the user is doing, not what the form is doing.
3. **Does it match the user's vocabulary?** — if the user calls it a "team" and the UI calls it a "workspace," the user is doing translation. Stop that.
4. **Does it surface a hidden assumption?** — "We'll send you an email" assumes the user knows which email. "Connect your account" assumes they know what that does. Name the assumption or rewrite around it.

For each string that changes, write a row: original, rewrite, reason. Reasons are short — "removed dead words," "verb made specific," "matched user vocabulary." This is how the designer learns the pattern, not just the fix.

### Phase 3 — Errors and empty states

The two highest-leverage screens in any product. Every error: name what happened, name what to do next, drop the apology. "Something went wrong" is a non-error; replace with the actual cause. Every empty state: tell the user what would fill it and how to get there in one click.

### Phase 4 — Tone audit

Read the rewritten strings as one block. Are they consistent? A product that says "Hey there!" on onboarding and "An error has occurred" on failure is two products. Pick a register — direct, warm, formal — and align the outliers.

### Phase 5 — Defer list

Some strings will need a product decision, not a copy fix. "Activate seat" or "Buy seat" depends on the billing model. List these separately with the decision needed and who owns it.

### Style

- Cut "please" except in genuine asks.
- Cut "successfully" — if it happened, it was successful.
- Cut "in order to" — replace with "to."
- No exclamation marks unless the user just won something.
- Numbers as numerals, not words, in UI.

## Hand-off

Deliver the line-by-line review as a doc the designer can paste from, not a critique they have to interpret. Offer to do one final pass after the rewrites land in the mocks — copy reviewed in isolation reads differently once it's back in the screen.
