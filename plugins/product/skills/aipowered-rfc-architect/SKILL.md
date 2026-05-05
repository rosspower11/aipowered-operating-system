---
id: aipowered-rfc-architect
title: RFC Architect
type: skill
category: specs
tags: [rfc, architecture, decisions, async]
ribbon: new
preview: Turns an engineering decision into a tight RFC — context, options, recommendation, dissent — built for async review.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# RFC Architect

A skill for writing RFCs that get decided in a comment thread, not a meeting. Use this when an engineering or cross-team decision is non-trivial, partially reversible, and needs more than one voice on it. The output is a document a senior engineer can scan in 10 minutes and either approve, reject, or push back on with a specific objection.

## When to use this skill

- A choice between two or three architectures will lock in for 12 months or more
- A team has been debating an approach in Slack for a week and needs to land it
- A new system touches more than one team and they need a written commitment
- A reversible-but-expensive call needs a record so the next person knows why

## When NOT to use this skill

- For trivial decisions — a one-line ADR or a Linear comment is enough
- For pure product scope — that's a PRD, different shape
- When the decision-maker is one person who's already decided — write the rationale, don't fake the process

## How to run

### Phase 1 — State the decision

One sentence at the top, in the form "Should we do X or Y?" Not "Thoughts on X?" If the decision can't be phrased as a binary or trinary choice, the RFC isn't ready — go back to scoping.

### Phase 2 — Context (≤200 words)

What system are we changing, what problem forced this RFC, and what's the deadline. Include the *cost of not deciding* — RFCs without a deadline rot. Link the relevant code, the relevant Linear/Jira ticket, and the prior discussion if there is one.

### Phase 3 — Options

Two or three options. Never one (a one-option RFC is a memo). Never four (you haven't done the thinking). For each option:

- **Sketch** — two paragraphs and one diagram if it earns its place.
- **Pros** — three bullets, concrete.
- **Cons** — three bullets, concrete. If the cons are softer than the pros, you haven't tried hard enough.
- **Cost** — engineering weeks, ballpark, ranged. "2 to 4 weeks" not "TBD."

### Phase 4 — Recommendation

Pick one. Write the recommendation in the doc, not in a "let's discuss" hedge. The recommendation has three parts: which option, the strongest reason, and the condition under which you'd flip. Senior reviewers want to see the author's neck on the line.

### Phase 5 — Dissent register

The killer section most RFCs skip. Name the strongest objection to your recommendation in the author's own voice. If you can't articulate the counter-argument, you're not ready to write the recommendation. Then either rebut it or concede that it's a real cost you're choosing to pay.

### Phase 6 — Open questions and reviewers

A numbered list of the things still uncertain, each with an owner. Then name the reviewers explicitly — not "the team," but two or three people whose sign-off the decision needs. Set a comment-by date.

### Style

- One opinion per section.
- No "it depends" — if it depends, name what it depends on.
- Diagrams that fit on a phone screen or not at all.
- Prior art linked, not summarised — let reviewers click through.

## Hand-off

Drop the RFC into the team's RFC folder, post the link in the relevant channel with the comment-by date and the named reviewers, and silence yourself in the thread for the first 24 hours. Authors who reply to every comment shape the discussion away from the dissent the doc needs.
