---
id: aipowered-postmortem-author
title: Postmortem Author
type: skill
category: planning
tags: [postmortem, incident, blameless, action-items]
ribbon: new
preview: Writes an incident postmortem that's blameless but specific — timeline, root cause, action items with owners.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Postmortem Author

A skill for writing an incident postmortem the team will actually read and act on. Most postmortems are either blame docs or a sea of euphemism — both make the next incident more likely. This one is blameless about people and ruthless about systems: a real timeline, a real root cause, and action items that name an owner and a date.

## When to use this skill

- After a customer-facing outage, security incident, or data loss event
- After a major project missed a deadline and you need to learn, not blame
- For a regulatory or compliance incident that needs a written record
- When a near-miss happened and the team wants to capture it before memory fades

## When NOT to use this skill

- For a sprint retro — different artifact (use the retro skill)
- For a one-off bug fix that didn't reach customers — log it, don't postmortem it
- For a performance issue with a single person — that's a 1:1, not a postmortem

## How to run

### Step 1 — Inputs

Pull from the incident commander or first responder:

1. **What happened** — one sentence, in plain English, customer-facing impact first.
2. **Timeline** — every event with a timestamp, from first signal to all-clear. Include the human moments: who got paged, who escalated, who made calls.
3. **Customer impact** — number of customers, dollars, data, time.
4. **Detection + response** — how we found out, how long to mitigate, how long to resolve.
5. **What broke** — system, code, config, process. Be specific.
6. **The five whys** — get past the surface cause to the system cause.

### Step 2 — Draft the postmortem

Use this format:

```
# Incident: {short name} — {date}

**Severity:** SEV-{N}
**Duration:** {start time → all-clear time, total}
**Impact:** {customer-facing summary, in numbers}
**Owner of this doc:** {single name}

## TL;DR
{2–3 sentences. What broke, what we did, what we're changing.}

## Timeline (UTC)
| Time | Event | Who |
|---|---|---|
| HH:MM | {Signal observed} | {role/name} |
| HH:MM | {Page fired} | {oncall} |
| HH:MM | {Mitigation deployed} | {name} |
| HH:MM | {All-clear} | {name} |

## Root cause
{One paragraph. The system reason, not the person reason. Use "the deploy pipeline did not gate on X" — not "Sam shipped a bad commit."}

## Why it wasn't caught earlier
{Detection gap, monitoring gap, or process gap. Be specific.}

## What went well
- {Real wins. Fast paging, clean comms, good handoff.}

## What didn't
- {Specific gaps. Tooling, runbook, ownership.}

## Action items
| # | Action | Owner | Due | Type |
|---|---|---|---|---|
| 1 | {Specific fix} | {name} | {date} | Detect / Prevent / Mitigate |
| 2 | … | … | … | … |
```

### Step 3 — Rules

- Blameless about people, specific about systems. "The deploy didn't have a canary" — not "we should be more careful."
- Every action item has a single owner and a date. "The team will" doesn't ship.
- Action items split into Detect / Prevent / Mitigate. Most teams over-index on Prevent.
- No more than 5 action items. A postmortem with 20 action items has zero.
- Past tense for the timeline, future tense only for action items.
- No corporate hedging: "opportunity to improve", "going forward." Cut.

### Step 4 — Quality check

- Could someone outside the team read this and understand what broke?
- Are the action items specific enough that you'd notice if they slipped?
- Does the doc name the system, not the person?
- Is there a follow-up date — 30 days out — to verify action items shipped?

## Hand-off

End with a one-line message the doc owner can post in the incident channel: `Postmortem for {incident} done. SEV-{N}. {N} action items, owners locked, due dates set. Doc: {link}.` Offer to schedule the 30-day action-item review and to draft a customer-facing summary if the incident was external.
