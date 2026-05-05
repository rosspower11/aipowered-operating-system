---
id: aipowered-design-critic
title: Design Critic
type: skill
category: design
tags: [design, critique, heuristics, review]
ribbon: new
preview: Critiques mocks against the goal and design heuristics — names what's broken, what's bikeshedding, and what to ship.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Design Critic

A skill for critiquing a set of mocks the way a senior designer would — against the user goal first, the design heuristics second, the brand and polish last. Use this when a designer has shared work for review and you want to give feedback that's honest, specific, and bounded. The output is a written critique: what's broken, what's bikeshedding, what's ready to ship.

## When to use this skill

- Mocks are circulated for review and the team needs structured feedback before build
- A founder is reviewing a designer's work and doesn't want to default to "looks great"
- Two mock directions are being compared and a structured pick is needed
- A designer asks for harsh, specific feedback before showing it wider

## When NOT to use this skill

- For wireframes mid-exploration — too early; you'd squash divergence prematurely
- For brand or visual identity work — different muscle, different heuristics
- As a substitute for usability testing on a flow already in production — that needs users, not a critic

## How to run

### Phase 1 — Anchor on the goal

Before opening the mock, write the user goal in one sentence. *Who* is using this, *what* are they trying to do, *what* do they need to leave with. If the brief doesn't make this clear, stop and ask the designer — critique without a goal is taste.

### Phase 2 — First pass: the goal test

Look at each screen for 5 seconds. Without reading every label, can a stranger tell what to do next? If yes, note it. If no, that's the first finding — the primary action isn't visible. Don't move to anything else until this is resolved.

### Phase 3 — Second pass: heuristics

Walk the mock against a short list — Nielsen's heuristics work, or your own house list. The ones that catch the most:

1. **Visibility of system status** — does the user know where they are and what's happening?
2. **Match to the real world** — does the language fit the user's vocabulary, not the team's?
3. **User control and freedom** — can they back out, undo, change their mind?
4. **Consistency** — same word for the same thing, every time.
5. **Error prevention over error messages** — design out the error, don't apologise for it.
6. **Recognition over recall** — show, don't make them remember.

For each violation, name the screen, the heuristic, and the concrete fix. Three to seven of these is usually the right volume; more and you're losing the designer.

### Phase 4 — The bikeshedding list

A separate section. Things that might come up in the review that *don't matter at this stage* — pixel-perfect alignment in a flow whose information architecture is still wrong, colour choices before the layout is agreed, copy tweaks before the screen exists. Naming these explicitly protects the designer from low-value feedback drowning the high-value notes.

### Phase 5 — Ship verdict

End with a one-paragraph call: ship as-is, ship after these specific changes, or rework. If "rework," name the one biggest reason. Critique that ends in "interesting, lots of thoughts" is useless to the designer — pick a verdict.

### Style

- Specific over general. "The CTA loses the hierarchy" beats "the CTA isn't strong."
- Heuristic-named, not opinion-named. "This violates recognition over recall because…" beats "I don't like this."
- Never critique the designer; only the artefact.
- Compliment the strongest move once, briefly. Designers who hear only what's broken stop sharing work.

## Hand-off

Deliver the critique as a written doc, not a Loom — the designer needs to be able to scan it, not transcribe it. Offer to do one follow-up pass after revisions, then stop. Critique loops longer than two rounds become noise.
