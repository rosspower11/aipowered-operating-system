---
id: aipowered-deal-forecaster
title: Deal Forecaster
type: skill
category: pipeline
tags: [forecasting, pipeline, board-reporting, revenue]
ribbon: new
preview: Builds a quarterly forecast with confidence bands by deal — best case, commit, worst case — defendable in a board meeting and grounded in MEDDPICC evidence, not gut feel.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Deal Forecaster

A skill for building a forecast you can defend to a board, not just submit to a CRO. Use this when the team's forecast accuracy is below 80%, when "commit" has become a vibe, or before a fundraise where every number on the slide gets stress-tested. Output is three numbers — best case, commit, worst case — each tied to specific deals, evidence, and assumptions.

## When to use this skill

- Building the Q-end forecast that will be presented to the board or to a fundraise lead
- Setting a public number with the CFO that finance will plan cash against
- Onboarding a new VP Sales who needs to inherit a defensible commit
- When the rep's gut forecast and the CRO's adjusted forecast disagree by more than 20%
- After two quarters of missing — to find which deals were always going to slip

## When NOT to use this skill

- Mid-quarter, with 90+ days left — the data is too thin, run a pipeline review instead
- For a rep with fewer than 6 open deals — the math doesn't work, just call deals individually
- For a brand-new motion with no closed-won history to weight stages against

## How to run

### Phase 1 — Pull the deal list

Need: deal name, ARR/ACV, stage, days in stage, close date, decision criteria documented (y/n), economic buyer met (y/n), paper process started (y/n), competitor named (y/n), champion identified (y/n). If half those columns are empty, stop. The forecast will be fiction.

### Phase 2 — Score every deal against MEDDPICC

For each deal, score 0–10 across the eight letters. Total ≥56 means commit-grade. 40–55 means best-case. <40 means it stays out of the forecast no matter what the rep says. No "but I just have a feeling about this one." Feelings are not a number.

### Phase 3 — Build three scenarios

- **Worst case** — only deals scoring ≥64 with verbal close confirmation in the last 14 days. Apply zero stage-based haircut. This is the floor.
- **Commit** — all worst-case deals plus deals scoring 56–63 with all four blocking criteria met (EB, paper, criteria, champion). Haircut by historical stage win rate.
- **Best case** — commit plus deals scoring 40–55 with at least one major risk named (timing, budget, competitor). Haircut by 50% on top of stage win rate.

State the haircut math. If the team has no historical win-rate-by-stage, use industry benchmarks (mid-market SaaS: 35% from late-stage, 12% from mid-stage) and flag that as an assumption.

### Phase 4 — Stress test

Run three challenges:

1. **The "one deal away" test** — if the biggest commit deal slips, does the team still hit plan? If no, the commit is fragile.
2. **The slip-rate test** — what % of deals committed last quarter actually closed? Apply that ratio as a sanity check.
3. **The push test** — for each deal with a close date in the last week of the quarter, ask why it can't slip a week. If there's no real reason (paper signed, PO issued), push it.

### Phase 5 — Document assumptions

Every forecast number ships with the three assumptions it would die under: a competitor wins, the EB leaves, the procurement cycle is longer than told. Name them.

## Hand-off

Output: three numbers (worst/commit/best) with deal-level breakdown, MEDDPICC scores, applied haircuts, and the three assumptions each scenario depends on. End with the single deal whose slip would do the most damage — that's the one the CRO inspects personally this week.
