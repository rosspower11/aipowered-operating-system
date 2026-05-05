---
id: aipowered-meddpicc-qualifier
title: MEDDPICC Qualifier
type: skill
category: discovery
tags: [meddpicc, qualification, deal-review, discovery]
ribbon: new
preview: Scores a live deal against MEDDPICC, names which letters are weak, and prescribes the next move to fill the gap — turns the framework from a checklist into a working tool.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# MEDDPICC Qualifier

A skill for scoring a live deal against MEDDPICC honestly — not the "yeah we've got that covered" version. Use this when a rep is committing a deal in forecast, when a deal has been in late stage longer than 30 days, or when a manager suspects the rep is missing a letter and won't admit which one. Output is a per-letter score with named evidence and one prescribed move per gap.

## When to use this skill

- Committing a deal to forecast for the current quarter
- Deal has been in late stage 30+ days and the rep can't articulate why it isn't closed
- Quarterly Win/Loss review on a closed-lost deal to find which letter actually killed it
- Coaching a junior AE through their first 5 enterprise deals
- Before a board-level deal review where the CEO will ask the hard questions

## When NOT to use this skill

- For SMB deals under $25k ARR with single-decision-maker — use BANT, MEDDPICC is overkill
- For a brand-new opp at first-call stage — there's nothing to score yet
- As a checklist exercise to make the CRM look good (the framework only works if the rep is honest)

## How to run

### Phase 1 — Pull the evidence, not the opinion

Ask the rep for one piece of named evidence per letter. Not "we know their metrics" — show me the email where the buyer wrote down what they're trying to measure. If the evidence is "we talked about it on a call", that doesn't count. Verbal-only evidence scores half.

### Phase 2 — Score every letter 0–10

| Letter | What "10" looks like |
|---|---|
| **M** Metrics | Buyer wrote down a quantified outcome with a baseline and a target |
| **E** Economic Buyer | Rep has met the EB in person/zoom, knows their priorities, has their direct line |
| **D** Decision Criteria | Documented, ranked, and signed off by the buying committee |
| **D** Decision Process | Mutual close plan with named attendees and dates through to signature |
| **P** Paper Process | Procurement contact named, redlines started, security review scheduled |
| **I** Identify Pain | Buyer said it in their own words, not the rep's; cost of inaction quantified |
| **C** Champion | Has authority, has access, has been tested with one ask that landed |
| **C** Competition | Named competitor (including "do nothing"), buyer's preference understood, last-mile risk identified |

Anything below 6 on a letter means "weak". Below 4 means "missing".

### Phase 3 — Champion test (run this even if the rep is sure)

Three questions:
1. Has the champion ever said no to the rep on something small?
2. Will the champion forward an email to the EB without the rep asking twice?
3. Does the champion benefit personally if the deal closes?

Less than 2 yeses → the champion is a coach, not a champion. Score the letter accordingly.

### Phase 4 — Prescribe one move per gap

For every letter scoring under 6, write one specific action with an owner and a date. Examples:

- **M weak** → schedule a 30-min metrics workshop with champion this week, ship a one-page success-criteria draft for them to redline
- **EB weak** → ask champion for the intro by name; if no in 5 days, multi-thread cold to EB
- **Paper weak** → request procurement contact this week; if blocked, deal is not commit-grade

### Phase 5 — Total + verdict

Sum the eight scores out of 80. Map to forecast:
- ≥64 — commit
- 56–63 — best case with named risks
- 40–55 — pipeline only
- <40 — re-qualify or close-lost

Don't let the rep negotiate the score up. The point of the framework is that the math is the math.

## Hand-off

Output the 8-letter scorecard with evidence per letter, total out of 80, forecast verdict, and the prescribed move + owner + date for every gap. End with the single weakest letter and what its closure unlocks across the rest of the deal.
