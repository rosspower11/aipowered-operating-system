---
id: aipowered-negotiation-coach
title: Negotiation Coach
type: skill
category: closing
tags: [negotiation, pricing, closing, objections]
ribbon: new
preview: Reads a buyer's counter, returns three responses scored by leverage and risk, and the line you should never cross — so the rep doesn't give away the deal in a Slack to legal at 9pm.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Negotiation Coach

A skill for the moment the buyer comes back with "we need 25% off and net-90." Use this when a rep is staring at a redline, an email, or a procurement ask and isn't sure which lever to pull. Output is three scored responses (concede / trade / hold), the line the rep must not cross, and the script for delivering the chosen response without apologising or talking themselves down.

## When to use this skill

- Procurement has sent back a redlined MSA with discount and term changes
- Buyer asks for a discount in writing or on a call and the rep needs an answer in 24 hours
- Multi-year deal where payment terms, term length, and price are all in play at once
- Renewal negotiation where the buyer is leveraging a competitor offer
- Founder-led deals where the founder has historically conceded too fast and needs guardrails

## When NOT to use this skill

- Earlier than late-stage — if there's no verbal yes on value, this isn't a negotiation, it's discovery
- Sub-$10k deals where the cost of negotiation exceeds the discount in play
- Pure legal redlines (indemnity, liability caps) — that's a contract review, not a price negotiation

## How to run

### Phase 1 — Read the counter, find the real ask

Buyers rarely ask for what they actually want. "25% off" usually means "I need a win to take back to my CFO." "Net-90" usually means "I'm cash-constrained this quarter." Decode the counter into the underlying interest before drafting a response. State the decoded ask explicitly. If the rep can't name it, they're negotiating blind.

### Phase 2 — Map the levers

List every lever in play, both directions:

- **Price** — discount %, ramp pricing, year-1 free month
- **Term** — 1yr / 2yr / 3yr, auto-renew, opt-out windows
- **Payment** — net-30 / net-60 / annual upfront / quarterly
- **Scope** — seats included, modules, support tier
- **Risk** — pilot clause, success criteria, money-back

Each lever has a cost to the seller and a value to the buyer. They're rarely symmetric — that's where trades come from.

### Phase 3 — Three responses, scored

Generate exactly three options:

1. **Concede** — give the buyer most of what they asked. Use only if the deal is at risk of being lost this week and the lifetime value justifies it.
2. **Trade** — give one lever, take one back. The default play. (Discount in exchange for longer term, or annual prepay, or named case study.)
3. **Hold** — restate value, refuse the discount, offer a smaller scope option. Use when the rep has leverage (competitor disqualified, timeline pressure on their side, EB already verbally committed).

For each, score:
- **Leverage impact** — how much does this move the rep's position next round? (1–5)
- **Risk** — probability the deal is lost if this is the response (1–5)
- **Margin impact** — % gross margin change vs. list (numeric)

### Phase 4 — Name the line

The single concession the rep will not make under any circumstance. Examples: no MFN clause, no uncapped liability, no discount below 15% on year one, no payment terms beyond net-60. Write it down before the call. Pre-commitment kills the urge to fold under pressure.

### Phase 5 — Delivery script

Whichever option is chosen, produce a 4–6 sentence script. Rules: no apology language ("sorry, the best I can do…"), no hedging ("I'll need to check with my manager" unless it's true), one clear ask back, one silence after. Pair with one fallback if the buyer pushes again.

## Hand-off

Output the decoded ask, the three options with their scores, the recommended option with reasoning, the line that won't be crossed, and the delivery script. End with the next-round prediction — what the buyer will counter with after this response, so the rep is one move ahead.
