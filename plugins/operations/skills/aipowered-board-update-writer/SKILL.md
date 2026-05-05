---
id: aipowered-board-update-writer
title: Board Update Writer
type: skill
category: comms
tags: [board, updates, comms, executive]
ribbon: new
preview: Turns a quarter of work into a tight board update — wins, misses, asks — built to be read in 4 minutes.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Board Update Writer

A skill for writing a board update that gets read end-to-end. Most updates are 18 pages of slides and zero asks; the board skims, the meeting drifts, and the founder leaves frustrated. This skill writes a tight update — wins, misses, metrics, asks — in the shape of a memo, not a pitch deck.

## When to use this skill

- Before a quarterly board meeting where the founder needs a written pre-read
- For a monthly investor update where engagement has dropped
- For a one-pager ahead of a financing or major strategic decision
- When the founder has 90 minutes of context and 4 hours to write

## When NOT to use this skill

- For a fundraising deck — different artifact, different audience
- For all-hands comms — the audience is internal, not the board
- For a quick async investor question — answer it in the email

## How to run

### Step 1 — Inputs

Pull from the founder:

1. **Period** — month or quarter.
2. **Headline number** — the one metric the board cares about (ARR, growth, burn, runway).
3. **Wins** — three, max. Things that actually moved the business.
4. **Misses** — two, minimum. If there are no misses, the founder is hiding them.
5. **Asks** — what the board can do this quarter. Names, intros, decisions.
6. **Risk** — the thing keeping the founder up at night.

### Step 2 — Draft the memo

Use this format. No slides.

```
# {Company} Board Update — {Period}

**TL;DR (3 bullets, read in 30 seconds)**
- {Headline win or metric}
- {Biggest miss + what we're doing about it}
- {The single ask of this board}

## Metrics
| Metric | This period | Last period | Plan |
|---|---|---|---|
| ARR | $X | $Y | $Z |
| Net new logos | N | M | P |
| Burn | $X | $Y | $Z |
| Runway (months) | N | M | — |

## Wins (3)
- {Specific win, with the receipt — name the customer, the ship, the number}

## Misses + what we changed
- {Miss}: {one-line cause}. {What's different now.}

## Risk we're watching
{One paragraph. Be specific. "Competition" is not a risk — name the competitor and the deal you lost.}

## Asks
1. {Specific intro to a named person, by date}
2. {Decision the board needs to weigh in on}
3. {Hire we need help on}

## Appendix
{Pipeline, hiring, product roadmap — only if asked.}
```

### Step 3 — Voice rules

- Past tense for what shipped. Imperative for asks.
- Numbers with a denominator. "Up 40%" is meaningless without the base.
- Name the customer, the deal, the hire. Specifics build trust.
- No hedging. "We expect" beats "we are optimistic that."
- No "great quarter" or "exciting times." Show, don't claim.
- Misses before metrics. A board that finds a miss themselves stops trusting the founder.

### Step 4 — Length check

- The memo is under 1,000 words. The board reads in 4 minutes.
- TL;DR is the email subject + first 3 bullets. If those don't stand alone, rewrite.

## Hand-off

End with a Slack/email-ready intro line for the founder to send the board: `{Period} board update attached — TL;DR: {3 bullets}. Asks: {1 line}. Meeting: {date}.` Offer to draft the live-meeting talk track from the same memo so the founder isn't reading slides aloud.
