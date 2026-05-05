---
id: meeting-notes-distiller
title: Meeting Notes Distiller
type: skill
category: meetings
tags: [meetings, notes, summaries, action-items]
preview: A skill that turns a transcript or messy notes into decisions, owners, and next steps — formatted for the team to act on, not to read.
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Meeting Notes Distiller

A skill for turning meeting noise into a tight artifact the team can actually use. Most meeting notes are unread because they're transcripts; this skill writes notes that look like a decision log.

## When to use this skill

- Right after any meeting where decisions were made or owners were assigned
- For a recurring meeting (weekly leads, sprint review, board prep) where the team has stopped reading the notes
- When the user has a Fireflies / Otter / Zoom transcript and wants to ship the summary in the next 10 minutes
- For multi-hour workshops where the value is buried in 2 hours of context

## When NOT to use this skill

- For 1:1s where the value is in the trust, not the artifact
- For brainstorms where decisions weren't supposed to happen (a synthesis skill is better)
- When the input is pure audio with no transcript — get the transcript first

## How to run

### Step 1 — Inputs

Ask for, or detect from the input:

1. **Meeting type** — recurring leadership? customer call? sprint review? planning session? This shapes the format.
2. **Attendees** — names and (where possible) roles. Lets you attribute decisions and actions.
3. **Goal of the meeting** — one sentence. If unclear, say so and ask.
4. **Source material** — transcript, raw notes, or both. Read both if available.

### Step 2 — Read for signal, not for completeness

Pass through the source twice:

- **Pass 1 — Decisions.** Anything that ends a debate. Phrases like "let's go with", "we agreed", "we'll do X by Y", "approved", "blocked." Capture verbatim where possible.
- **Pass 2 — Actions.** Specific commitments by specific people, with a date if mentioned. Implicit owners ("someone should…") get flagged, not assigned.

Anything that's not a decision, action, or critical context — drop it. Context is *not* a decision.

### Step 3 — Output format

```
# {Meeting name} — {date}

**Goal:** {one sentence}
**Attendees:** {names}

## Decisions
- {Decision 1, in past tense} — {one-line rationale if useful}
- {Decision 2}…

## Actions
| Owner | Action | Due |
|---|---|---|
| Name | Specific deliverable | YYYY-MM-DD |

## Open questions
- {Unresolved question} — owner: {name}, by: {date}

## Context worth keeping
2–4 bullets max. Things that aren't decisions but a future reader will want.
```

### Step 4 — Quality check

Before delivering, verify:

- Every action has an owner and a due date. If either is missing, flag it as `[needs owner]` or `[needs date]` instead of inventing one.
- No filler under "context" — if you can't justify each bullet, cut it.
- The whole artifact fits in one screen on a laptop. If it doesn't, you over-included.

## Style rules

- Past tense for decisions ("decided", "approved").
- Imperative for actions ("send X", "draft Y", "decide Z").
- Names in actions, not pronouns. Never "they will follow up."
- No filler verbs: "circle back", "touch base", "loop in." Replace with what was actually decided to happen.

## Hand-off

End with a one-line Slack-ready summary the user can paste into the team channel: `{meeting} done — N decisions, M actions, K open questions. Notes: {link}`. Offer to draft individual @mentions for each owner if the user wants the actions to land in DMs.
