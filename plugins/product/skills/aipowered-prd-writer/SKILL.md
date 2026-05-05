---
id: aipowered-prd-writer
title: PRD Writer
type: skill
category: specs
tags: [prd, specs, product, requirements]
ribbon: new
preview: A skill that turns a one-line product idea into a tight, decision-ready PRD with scope, non-goals, open questions, and acceptance criteria.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# PRD Writer

A skill for writing PRDs that get read and shipped, not skimmed and ignored. Use this when a feature or initiative needs to move from "we should do X" to "here is what X is, what it isn't, and what done looks like."

## When to use this skill

- A feature has been agreed in principle and now needs a written spec
- A roadmap item is fuzzy and needs to be tightened before estimation
- Engineering keeps asking "what about edge case Y?" and the PM needs to either answer or explicitly defer
- A multi-team initiative needs one source of truth so design, eng, and GTM are pointing at the same thing

## When NOT to use this skill

- For pure exploration ("should we even do this?") — use a research or strategy skill first
- For one-engineer, one-day changes (a Linear ticket is the right artefact)
- For visual design specs — this skill writes the *what* and *why*, not the *how it looks*

## How to run

A good PRD is short, opinionated, and answers the questions the team will actually ask. Write in this order — don't reorder, don't skip.

### Section 1 — Context (≤120 words)

- What problem are we solving? Specifically. Not "users want better X."
- Whose problem? Which segment, which job-to-be-done.
- Why now? What changed that makes this the right moment.
- What's the evidence? One sentence with the strongest data point.

### Section 2 — Goal & non-goals

- **Goal** — one sentence, with a measurable outcome where possible. ("Reduce time to first value from 14 minutes to under 5.")
- **Non-goals** — three to five things this is *not* solving. This is the most important part of the doc; defend it.

### Section 3 — User & flow

- The primary user, in two sentences. Role, context, what they're trying to do *right before* they hit this feature.
- The happy path as a numbered list, no more than 7 steps. If it's longer than 7, the scope is too big.
- Two named edge cases that matter and how they're handled.

### Section 4 — Solution sketch

- Two or three paragraphs, no diagrams unless they earn their place.
- Lead with the user-facing change, then the system change behind it.
- Call out anything novel (new data model, new dependency, new third-party).

### Section 5 — Acceptance criteria

A checklist. Each item is testable and unambiguous. "Fast" doesn't count; "p95 under 200ms" counts. 5–10 items.

### Section 6 — Open questions

A numbered list of every question that's still open, with an owner and a "needed by" date. Resist the urge to answer them yourself if you don't know — naming them is the job.

### Section 7 — Risks & mitigations

The two or three biggest risks (technical, GTM, legal, behavioural), each with a one-line mitigation. If a risk has no mitigation, name it that way — don't invent one.

## Style rules

- No business-speak. "Drive engagement" is meaningless; "increase the number of users who return on day 7" is real.
- No passive voice when an actor is clear.
- No diagrams that you wouldn't redraw on a whiteboard.
- One opinion per paragraph.

## Hand-off

End with a one-paragraph TL;DR at the top (yes, write it last, paste it first), so a director-level reader gets the doc in 30 seconds. Offer to write the kick-off Slack message that links the doc once it's approved.
