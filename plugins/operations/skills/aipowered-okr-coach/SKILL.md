---
id: aipowered-okr-coach
title: OKR Coach
type: skill
category: planning
tags: [okrs, planning, goals, outcomes]
ribbon: new
preview: Writes OKRs that aren't KPIs in disguise — outcomes, not output, with kill criteria.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# OKR Coach

A skill for writing OKRs that move the business — not OKRs that look like a status report with checkboxes. Most teams ship "ship X" and "launch Y" as key results; that's a roadmap, not an outcome. This skill writes objectives with teeth, key results that are measurable and falsifiable, and the kill criteria that say when an OKR has lost.

## When to use this skill

- Quarterly planning where the team needs three to five OKRs that aren't a wish list
- For a function (sales, product, growth) translating company OKRs into team OKRs
- When an OKR cycle has gone stale — everyone hits 0.7 and nothing changed
- Before a leadership review where OKRs need to be defended

## When NOT to use this skill

- For a roadmap — different artifact, different cadence
- For a personal development goal — OKRs aren't the right shape
- For a research bet with no measurable outcome yet — use a hypothesis doc instead

## How to run

### Step 1 — Inputs

Pull from the team:

1. **The strategic frame** — what does the company need to be true in 12 months?
2. **Where this team plugs in** — what's their lever?
3. **Last cycle's OKRs + scores** — what landed, what didn't, what got gamed.
4. **Constraints** — headcount, budget, dependencies on other teams.
5. **The honest answer to "what would surprise the CEO?"** — the metric the team is afraid to commit to.

### Step 2 — Draft the objective

Rules for the objective:

- One sentence. Outcome-shaped, not output-shaped.
- "Become the default tool for X" beats "ship the X feature."
- The objective is qualitative. If it's a number, it's a key result.
- No more than three objectives per team per quarter. Two is better.

Bad: "Ship the new onboarding flow."
Good: "New users hit value in their first session."

### Step 3 — Draft key results

Three per objective. Rules:

- Measurable, with a baseline and a target. "Increase activation from 32% to 50%" — not "improve activation."
- Outcome metrics, not activity metrics. "Calls booked" is activity; "qualified pipeline created" is outcome.
- One key result has to be a leading indicator the team can move this quarter.
- No "ship X" key results. Shipping is a milestone, not an outcome.

### Step 4 — Add kill criteria

Every OKR gets a one-line kill criterion: what's true in week 6 that says we abandon this OKR? This is the part most teams skip.

Example: "If activation hasn't moved 5 points by week 6, we kill this OKR and re-scope around retention."

### Step 5 — Output format

```
## Team: {team} — Q{N}
**Strategic frame:** {one sentence}

### O1: {objective}
- KR1: {metric, baseline → target}
- KR2: {metric, baseline → target}
- KR3: {metric, baseline → target}
- Kill criterion: {what we'd see by week 6 to abandon}
- Owner: {single name}
- Dependencies: {team or person}
```

### Step 6 — Quality check

- Could a competitor read this and know what the team is betting on?
- Is there a single owner per OKR? "The team" is not an owner.
- Could the team hit 0.7 on every KR and the company be in the same place? If yes, the OKRs are output, not outcome.

## Hand-off

End with a one-line commit the owner can paste into their team channel: `Q{N} OKRs locked. {N} objectives, {M} key results, {K} kill criteria. Owner: {name}. Doc: {link}.` Offer to draft a weekly OKR check-in template that surfaces drift before week 6.
