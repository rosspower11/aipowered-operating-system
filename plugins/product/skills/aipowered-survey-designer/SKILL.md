---
id: aipowered-survey-designer
title: Survey Designer
type: skill
category: research
tags: [survey, research, quant, bias]
ribbon: new
preview: Writes an unbiased survey question by question — defends each one, kills leading wording, sets the answer scale.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Survey Designer

A skill for designing surveys that produce data you can act on, not data that confirms what you already wanted to hear. Use this when interviews have surfaced a hypothesis and you need to size it, or when you have a list of users large enough that quant beats qual. The output is a fielded survey with every question defended in a one-line comment, plus the analysis plan written before the data lands.

## When to use this skill

- A qualitative finding from interviews needs to be sized across a larger population
- Pricing research is needed before a launch and you have a panel to draw from
- A churn cohort needs to be asked one focused question at exit
- An NPS programme is being set up and the verbatim follow-up needs structure

## When NOT to use this skill

- When the sample is under 30 — interviews give you more signal per response
- For deep behavioural understanding — surveys flatten nuance; do JTBD interviews instead
- When the goal is to validate a decision already made — that's not research, it's theatre

## How to run

### Phase 1 — One sentence, one decision

Write the decision the survey is going to inform. "We will ship X if 40% of respondents say Y." If the survey result wouldn't change the decision, don't run the survey. Note the threshold; this stops post-hoc rationalisation.

### Phase 2 — Sample plan

Who's eligible, how they're recruited, how many you need for the confidence you want, and who's excluded and why. A 1,000-response survey to your loudest power users tells you about your loudest power users — name that limit.

### Phase 3 — Question by question

Aim for 8 to 12 questions, not 30. Every question must:

1. **Earn its place** — in the comment, write what decision it informs. If it doesn't inform a decision, cut it.
2. **Avoid leading wording** — "How much do you love feature X?" is dead. Replace with "When did you last use feature X?" or a behavioural anchor.
3. **Use a defensible scale** — 5-point Likert for attitude, behavioural anchors ("daily / weekly / monthly / less often / never") for frequency, ranges for money. Never a 1-10 scale unless you're measuring NPS.
4. **Allow "don't know" or "n/a"** — forcing a position invents data.
5. **Be answerable in under 15 seconds** — long questions get skipped or guessed.

### Phase 4 — Order and skip logic

Demographics last, not first. Sensitive questions in the middle, after rapport, before fatigue. Skip logic where it makes sense — never make someone answer about a feature they don't use. The total survey should take under 4 minutes; pilot it on three people and time them.

### Phase 5 — Analysis plan, before fielding

Write the analysis plan before the data lands. Which questions cross-tab against which. Which result confirms the hypothesis, which disconfirms it, which is "too noisy to act on." This document is what stops you from data-fishing once results arrive.

### Phase 6 — Pilot

Five respondents, in person if possible, talking aloud. Watch which questions they re-read, which they shrug at, which they answer differently than you expected. Rewrite anything that confused two or more pilots.

## Hand-off

Deliver the survey, the per-question rationale, the sample plan, and the pre-registered analysis plan as one artefact. Offer to write the launch email and the reminder, then to run the analysis only against the pre-registered plan — discoveries outside the plan are hypotheses for the next round, not findings.
