---
id: aipowered-user-researcher
title: User Researcher
type: skill
category: research
tags: [interviews, research, discovery, jtbd]
ribbon: new
preview: Designs and scripts a 30-minute interview from a research hypothesis — questions ordered, biases flagged, recruit brief included.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# User Researcher

A skill for turning a vague "let's talk to users" into a 30-minute script that pulls real signal. Use this when you have a hypothesis you want to pressure-test, not when you want validation. The output is a script someone else could run, a recruit brief, and a list of biases you've already removed from the wording.

## When to use this skill

- A new initiative is being scoped and the team is guessing about user behaviour
- A PRD has open questions that only users can answer
- A founder needs to run discovery interviews themselves before hiring a researcher
- A signal is conflicting (analytics say one thing, support tickets say another) and you need to ask humans

## When NOT to use this skill

- For surveys at scale — use the Survey Designer skill instead
- For usability tests on an existing flow — that's a different format, narrower questions
- When the real question is "will they pay" — interviews lie about willingness to pay; run a smoke test

## How to run

### Phase 1 — State the hypothesis (10 minutes)

Write the hypothesis as a falsifiable sentence. "Power users skip onboarding because it's too long" is testable. "Users want a better experience" is not. Then write the disconfirming finding — what would you have to hear to abandon the feature? If you can't name it, the interview will only confirm what you already believe.

### Phase 2 — Recruit brief

Three sentences: who they are, what they've done recently (a behaviour, not a demographic), and why they're not your team or your investors. Specify the minimum sample (5 to 8 for a hypothesis check) and the screen-out criteria. Pay them; unpaid interviewees are a self-selecting bias.

### Phase 3 — Script

Thirty minutes, structured as:

1. **Warm-up (3 min)** — what they did this morning, what tools they had open. Concrete, no abstractions.
2. **Past behaviour (12 min)** — walk me through the last time you [behaviour]. Probe: what did you do *right before* that, what did you do *right after*, where did it break down. Never ask "would you" — only "did you."
3. **Artefact tour (8 min)** — share screen, show me the spreadsheet/doc/tool you actually use. This is where the real workflow lives.
4. **Reactions (5 min)** — only now, show the concept or mock if you have one. Ask what's confusing, not what's good.
5. **Wrap (2 min)** — anything I should have asked? Who else should I talk to?

### Phase 4 — Bias check

Read every question aloud. Cut any that contain "would you," "do you like," "how often" (people lie about frequency), or that name the feature you're hoping to build. Replace with past-tense behaviour questions. Flag any leading wording in a comment for the interviewer.

### Phase 5 — Note template

Two columns: verbatim quote on the left, interpretation on the right. Force the separation — interpretations during the call are how researchers fool themselves.

## Hand-off

Deliver the script, the recruit brief, the bias-check notes, and the blank note template as one document. Offer to run the first interview and debrief, then hand the rest to whoever's running the study. Synthesis is a separate skill — don't try to do it in the same session.
