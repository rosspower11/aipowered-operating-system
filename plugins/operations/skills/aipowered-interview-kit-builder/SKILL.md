---
id: aipowered-interview-kit-builder
title: Interview Kit Builder
type: skill
category: hiring
tags: [hiring, interviews, rubrics, calibration]
ribbon: new
preview: Designs a 4-stage interview loop with rubrics, calibration questions, and a no-hire signal you'll actually use.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Interview Kit Builder

A skill for designing an interview loop that ships real signal — not four rounds of "tell me about yourself." Most loops are vibe checks dressed up as rubrics. This one names the four things you're testing, gives every interviewer a question bank and a rubric, and writes the no-hire signal in a way the team will actually act on.

## When to use this skill

- Opening a new role and the team has no loop, only a JD
- Re-building a loop where every candidate gets a "yes" or every loop ends in disagreement
- For a senior or executive role that needs structured deep-dives, not a single panel
- When debrief calls drag for an hour because nobody wrote anything down

## When NOT to use this skill

- For an internal transfer — different artifact (role expectations + skip-level)
- For a contractor — a paid trial beats a four-stage loop
- For a referral hire that's already de-risked — don't over-engineer it

## How to run

### Step 1 — Inputs

Pull from the hiring manager:

1. **The role's outcome** — what does success look like at 12 months?
2. **The 4 traits being tested** — pick exactly four. Examples: ownership, craft, judgment, customer obsession. Generic traits ("smart") aren't testable.
3. **Hard skills bar** — what they have to be able to do on day one.
4. **The deal-breakers** — behaviors or signals that mean "no" no matter how good the rest is.

If the team can't pick four traits, the role isn't defined. Push back before designing the loop.

### Step 2 — Design the 4 stages

Each stage tests one or two traits, with a single owner:

**Stage 1 — Recruiter screen (30 min, recruiter)**
Tests: motivation, comp, hard-skills bar.
Outcome: pass/fail on bar + comp. No subjective signal.

**Stage 2 — Hiring manager deep-dive (60 min, HM)**
Tests: outcome ownership, judgment.
Format: one project deep-dive — pick the most relevant from their resume. Drill until you understand what *they* did, what the team did, and what they'd do differently.

**Stage 3 — Craft round (90 min, IC peer)**
Tests: craft, depth.
Format: real work sample. A take-home with a debrief, a live exercise, or pair on a real problem. No whiteboard riddles.

**Stage 4 — Cross-functional + values (45 min each, 2 interviewers)**
Tests: collaboration, the fourth trait.
Format: behavioral, structured around the trait. Two interviewers, same trait, different angles.

### Step 3 — Write the rubric

For every stage:

- 3–5 specific signals per trait. "Showed ownership" is not a signal. "Named a decision they made and the trade-off they accepted" is.
- A 1–4 scale, with anchors. 4 = strong yes, 3 = lean yes, 2 = lean no, 1 = strong no. No 5-point scales — they let people hide in the middle.
- A no-hire signal per stage. The thing that, if observed, kills the loop regardless of other rounds.

### Step 4 — Calibrate

- Run the loop on one current employee who's strong in the role and one who isn't. Score them. If the rubric doesn't separate them, the rubric is broken.
- Every interviewer writes scores *before* the debrief. Discussion happens after, not during.
- Debrief is 30 minutes max. Each interviewer gives their score, evidence, and recommendation in 3 minutes. Hiring manager calls it.

### Step 5 — Output

```
# {Role} — Interview Kit

**Outcome:** {one sentence}
**Traits tested:** {4, named}
**Hard-skills bar:** {list}
**Deal-breakers:** {list}

## Loop
| Stage | Owner | Trait(s) | Format | No-hire signal |
|---|---|---|---|---|
| 1 | Recruiter | Bar + comp | 30 min screen | … |
| 2 | HM | Ownership + judgment | 60 min deep-dive | … |
| 3 | IC peer | Craft | 90 min work sample | … |
| 4a/b | XFN | Collaboration + {trait} | 45 min each | … |

## Rubric (per stage)
{Signals + 1–4 scale + anchors}

## Debrief
{Format + decision rule}
```

## Hand-off

End with a one-line message the hiring manager can paste into the team channel: `Loop locked for {role}. 4 stages, {N} interviewers. Kit: {link}. First debrief: {date}.` Offer to draft the candidate-facing prep email so candidates know what to expect — strong candidates self-select toward loops that respect their time.
