---
id: aipowered-roadmap-prioritiser
title: Roadmap Prioritiser
type: skill
category: roadmap
tags: [roadmap, prioritisation, rice, wsjf, planning]
ribbon: new
preview: Scores a backlog with RICE or WSJF, surfaces the top quarter, and names the trade-offs you're choosing to make.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Roadmap Prioritiser

A skill for turning a 40-item backlog into a defensible top quarter. Use this when prioritisation has become political, when "everything is P1," or when a leadership review is coming and you need a scoring model that survives scrutiny. The output is a ranked list, the scoring sheet, and a one-page trade-offs memo naming what you're explicitly choosing not to do.

## When to use this skill

- A quarterly planning cycle starts and the backlog has more items than capacity
- Two senior stakeholders disagree on what ships next and need a shared frame
- A founder is making the prioritisation call alone and wants a check on their gut
- A roadmap is being communicated to the board or a customer and needs to hold up

## When NOT to use this skill

- For a single team's two-week sprint planning — too much overhead
- When the strategy itself is undefined — prioritisation can't fix a missing thesis
- For pure technical debt sequencing — engineering should own that ordering

## How to run

### Phase 1 — Pick the model

Default to **RICE** (Reach × Impact × Confidence ÷ Effort) for B2C or growth-stage backlogs where reach varies wildly. Use **WSJF** (Cost of Delay ÷ Job Size) for B2B or platform work where everything reaches the same set of customers and timing matters more than reach. Don't invent a hybrid; pick one and commit. State which and why in one sentence.

### Phase 2 — Normalise the backlog

Every item in one sentence: a user, a verb, an outcome. Cut anything fuzzier than that — "improve onboarding" is not an item, it's a theme. Group obvious duplicates. Aim for 20 to 50 items; if you have more, you have a hygiene problem, not a prioritisation problem.

### Phase 3 — Score

Score every item on every dimension. Use a fixed scale (1, 3, 5, 8 — Fibonacci stops the false precision) and write the rationale in a comment. Confidence is the dimension teams cheat on most — anything below 60% confidence should be pulled into a discovery spike, not estimated as if it were known.

### Phase 4 — Surface the top quarter

Sort by score. Take the top 25% and check three things:

1. **Capacity** — does it fit the team you actually have, not the team you'd like?
2. **Sequencing** — does anything in the top 25% depend on something below the line? If yes, either pull the dependency up or drop the item.
3. **Coherence** — does the top 25% tell a story? If it reads as a list of unrelated wins, the strategy is missing.

### Phase 5 — Name the trade-offs

This is the part most prioritisation exercises skip. For each item that scored well but isn't shipping, write one sentence: what we're not doing, who it disappoints, and what would change our mind. Three to seven of these. This is the document that protects you in six months when someone asks "why didn't we do X."

### Phase 6 — Pre-mortem

One paragraph: if the top quarter ships and nothing moves, what was wrong with our scoring? Usually it's the impact estimates. Note it.

## Hand-off

Deliver the scored sheet, the ranked top quarter, and the trade-offs memo as one artefact. Offer to walk the leadership team through the scoring rationale before the roadmap goes wide — surprises in that meeting are the failure mode this skill is built to prevent.
