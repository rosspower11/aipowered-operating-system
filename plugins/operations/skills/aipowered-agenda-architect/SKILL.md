---
id: aipowered-agenda-architect
title: Agenda Architect
type: skill
category: meetings
tags: [meetings, agendas, planning, decisions]
ribbon: new
preview: Designs an agenda that earns its calendar slot — clear purpose, decisions to make, and a kill-it test for the meeting itself.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Agenda Architect

A skill for writing agendas that earn the time on the calendar. Most agendas are a list of topics; this one names the decisions, the inputs needed, and the outcome — and surfaces whether the meeting should exist at all. If a doc could replace it, the agenda says so.

## When to use this skill

- Before any meeting longer than 30 minutes with more than three people
- For a recurring meeting where attendance is slipping or attendees show up unprepared
- When the user has invited people but can't articulate the decision being made
- For cross-functional syncs where the conversation drifts every week

## When NOT to use this skill

- For a 1:1 — the artifact gets in the way of trust
- For a brainstorm where the constraint is creativity, not structure
- For a quick standup that doesn't need a doc

## How to run

### Step 1 — Inputs

Ask for, or detect:

1. **Meeting purpose** — one sentence, in plain English. If the user can't write it, the meeting probably shouldn't happen.
2. **Attendees and roles** — names plus what each person owns.
3. **Decisions to make** — list them. If there are zero, recommend a memo instead.
4. **Pre-reads** — what people need to read or watch before walking in.
5. **Time available** — total minutes.

### Step 2 — Apply the kill-it test

Before drafting, run the meeting through three questions:

- Is there at least one decision that needs the room?
- Would a written doc plus async comments get there faster?
- Are the right people invited — and only the right people?

If two answers are "no", recommend killing or shrinking the meeting and stop here.

### Step 3 — Draft the agenda

Use this format:

```
# {Meeting} — {date, time}
**Purpose:** {one sentence}
**Decisions to make:** {numbered list}
**Pre-read (15 min):** {linked docs}
**Attendees + role:** {Name — owner of X}

## Run sheet
| Time | Topic | Owner | Outcome |
|---|---|---|---|
| 0–5 | Frame the decision | {name} | Shared context |
| 5–25 | Debate option A vs B | {name} | Decision logged |
| 25–30 | Actions + owners | {name} | Owners named |
```

### Step 4 — Opinion the agenda

- Every block has an owner. No "group discussion" with no driver.
- Every topic ends in an outcome — decision, draft, owner, or "park it."
- If a topic doesn't fit in 20 minutes, split it or move it to async.
- Cap the meeting at 50 minutes. The last 10 stays for actions.
- No "any other business." If it isn't on the agenda, it isn't in the meeting.

## Hand-off

End with a one-line message the user can paste into the calendar invite: `Purpose: {one sentence}. Pre-read: {link}. Decisions on the table: {list}.` Offer to draft individual nudges to attendees who owe a pre-read or a draft before the meeting starts.
