---
id: aipowered-pipeline-reviewer
title: Pipeline Reviewer
type: skill
category: pipeline
tags: [pipeline, deal-review, forecasting, hygiene]
ribbon: new
preview: Walks a deal-by-deal pipeline pass — surfaces stalled deals, missing next steps, and at-risk forecast commits, then prescribes the move that gets each one unstuck.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Pipeline Reviewer

A skill for running a real pipeline review — the kind where deals get unstuck, not just discussed. Use this when the rep can't tell you the next step on half their open deals, when forecast accuracy is below 70%, or before a board meeting where the CRO needs to defend the number. Output is a deal-by-deal verdict with one clear action per deal.

## When to use this skill

- Weekly 1:1 between rep and manager, or weekly forecast call across a team
- Before a quarterly board meeting where the pipeline number will be defended
- After a soft quarter, to figure out whether the issue is top-of-funnel, conversion, or hygiene
- When a rep is swearing the quarter will land and the manager doesn't believe them
- Onboarding a new manager who needs to learn the book in 48 hours

## When NOT to use this skill

- The pipeline has fewer than 8 open deals — just talk through them
- CRM data is so bad the review will be fiction (fix hygiene first, review second)
- Pure forecasting exercises with no intent to act on individual deals — use the forecaster instead

## How to run

### Phase 1 — Data pull and sanity check

Ask for the pipeline export: deal name, stage, amount, close date, last activity date, next step, champion, and economic buyer. If "next step" is blank on more than 30% of deals, stop and call it out — the review will be theatre until that's fixed. If close dates are clustered on the last day of the quarter, flag it. That's a hope, not a commit.

### Phase 2 — Triage every deal into one of four buckets

Run each deal through this filter, fast:

1. **On track** — clear next step in the next 7 days, champion engaged in last 14 days, decision criteria documented
2. **Slipping** — next step exists but is "follow up" or "send proposal" with no date held; champion last replied 14–30 days ago
3. **Stalled** — no next step, or champion has gone dark for 30+ days, or stage hasn't moved in 45+ days
4. **At risk** — committed in forecast but missing one of: economic buyer met, paper process started, mutual close plan signed

Don't be polite. A deal with "send pricing" as the next step from three weeks ago is stalled, not slipping.

### Phase 3 — Prescribe the next move

Per deal, one action. Not three, not "explore options." Examples by bucket:

- **Slipping** → schedule the next meeting before leaving the review. If the rep can't, the deal moves to stalled.
- **Stalled** → break-up email or multi-thread to a second contact. If neither works in 7 days, push close date or remove from forecast.
- **At risk** → name the missing MEDDPICC letter and the meeting that fills it this week.

### Phase 4 — Forecast call

Recompute commit, best case, and pipeline coverage after the review. If the rep's commit is more than 80% of their open at-risk deals, that's not a forecast — that's a wish. Push them to recommit.

### Phase 5 — Manager debrief

End with three questions for the manager: which 2 deals would you personally jump on this week? Which rep needs coaching, not pipeline pressure? What pattern across deals points to a product or pricing issue, not a sales issue?

## Hand-off

Output a table — deal, bucket, missing letter, prescribed action, owner, due date — plus a recomputed forecast number with confidence band. End with the one deal the manager should personally inspect this week, and why.
