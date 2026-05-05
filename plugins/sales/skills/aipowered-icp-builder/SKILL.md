---
id: aipowered-icp-builder
title: ICP Builder
type: skill
category: outbound
tags: [icp, targeting, outbound, segmentation]
ribbon: new
preview: Turns a fuzzy "B2B SaaS" target into a specific, testable ICP with named accounts and provable triggers — the kind a rep can prospect against on Monday morning.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# ICP Builder

A skill for turning vague targeting ("we sell to B2B SaaS") into an ICP a rep can actually prospect against. Use this when the founder can't explain why a prospect would buy in one sentence, when reply rates are flat across personas, or when the team is arguing about who's "really" the buyer. Output is a named-account list and a trigger map, not a persona deck.

## When to use this skill

- Pre-launch, before a single cold email goes out, to pin down who gets touched first
- After 3+ months of outbound with reply rates under 2% — the list is probably the problem
- When sales and marketing disagree on who the buyer is
- Expanding into a new segment and the old ICP doesn't translate
- Pitching investors who keep asking "but who exactly is the customer?"

## When NOT to use this skill

- The user already has a working ICP and 50+ closed-won deals — don't re-litigate it
- The actual problem is product-market fit, not targeting (no one is buying from anyone)
- For consumer products — this is a B2B-shaped skill

## How to run

### Phase 1 — Strip the fuzz

Ask for the current ICP statement in one sentence. If it contains "B2B SaaS", "mid-market", "tech-forward", or "innovative" — reject it. Those are not ICPs, they're vibes. Push back: who specifically signed the last three contracts? What was the title, company size, and the trigger that got them to take a meeting?

### Phase 2 — Extract the firmographic spine

Force specificity on five axes:

1. **Industry** — by NAICS code or named vertical (not "SaaS", but "vertical SaaS for dental practices")
2. **Size** — employee count band AND revenue band (e.g. 50–200 FTE / $5–25M ARR)
3. **Geography** — country and time zone, because outbound timing matters
4. **Tech stack** — one tool they must have (Salesforce, HubSpot, Snowflake)
5. **Funding stage** — bootstrapped, Series A, public, etc.

Get a single tight statement out of this. If the user resists narrowing, ask which row they'd cut a $50k check against tomorrow.

### Phase 3 — Buyer + champion split

Two named roles, not one. **Economic buyer** signs the contract; **champion** runs the eval. List both with title, seniority band (manager/director/VP/C-level), and what they get fired for. Champions usually have a number on their head — find it.

### Phase 4 — Triggers, not attributes

Attributes are static (they have Salesforce). Triggers are events (they hired a new VP of RevOps last week). List 3–5 trigger types, each with a public signal source: job posts, funding announcements, leadership changes, product launches, regulatory shifts. A trigger without a public signal isn't a trigger — it's a hope.

### Phase 5 — Named accounts

Hand back 25 named companies that match the ICP and have at least one live trigger in the last 90 days. Include the trigger and the suggested first-touch buyer. This is the deliverable a rep can run with on day one.

## Hand-off

Output a one-page ICP doc — firmographics, two named roles, trigger list with sources, and 25 named accounts with the active trigger noted next to each. End with one anti-pattern: who looks like the ICP but isn't, and how to spot them so reps don't burn cycles.
