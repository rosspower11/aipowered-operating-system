---
id: aipowered-adr-writer
title: ADR Writer
type: skill
category: architecture
tags: [adr, decisions, architecture, documentation]
ribbon: new
preview: Captures an architecture decision — context, options, choice, consequences — so future you and the next hire don't relitigate the same trade-off in six months.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# ADR Writer

A skill for writing an Architecture Decision Record that's actually useful six months later. Captures the real trade-off and the option you didn't pick, not the one you did. Use it after a meaningful technical decision — a database choice, a queue, an auth model, a migration approach — when there's a real chance someone will second-guess it later.

## When to use this skill

- After a design discussion where two or more options were on the table
- Picking infrastructure with a long lock-in (database, message broker, cloud provider)
- Choosing between build vs. buy vs. fork for a non-trivial component
- Deprecating an existing pattern across the codebase
- A senior engineer is leaving and the decisions live in their head

## When NOT to use this skill

- Routine library upgrades (write a CHANGELOG note instead)
- Decisions you'll know are wrong in 30 days — write a comment in the code
- Anything where there was no real alternative — an ADR with one option is theatre

## How to run

### Step 1 — Get the actual context

Ask: what triggered this decision? A bug, a scaling wall, a new product requirement, a CVE? The trigger is the most important sentence in the ADR. Without it, the reader can't tell whether the decision still applies. If the user can't articulate the trigger, the decision probably isn't ready to be written down.

### Step 2 — Use the four-section template

Keep file naming consistent: `docs/adr/0007-postgres-over-dynamodb.md`. Use the next available number; don't gap or reuse.

1. **Context** — 3–6 sentences. What's the system today, what changed, why does this need a decision *now*. Name the constraints (latency budget, budget budget, team size, deadline).
2. **Options considered** — minimum 2, ideally 3. For each: one paragraph. Pros, cons, and the *honest* reason it's not the choice. "Too much work" is a valid reason if it's true.
3. **Decision** — one paragraph. The choice and the single most important reason. Not five reasons — one. If you can't pick one, the decision isn't actually made.
4. **Consequences** — what becomes easier, what becomes harder, what we're now committed to. Include the migration path and rollback if relevant. Be honest about lock-in.

### Step 3 — Add the metadata block

At the top: `Status: Accepted` (or `Proposed`, `Superseded by 0014`), `Date: 2026-05-05`, `Deciders: <names>`. Without deciders, no one owns it.

### Step 4 — Pressure-test the doc

Read it back. Two questions:
- Could a new hire read this in five minutes and understand why we didn't pick the obvious option?
- Six months from now, when the world changes, will the reader know which assumption to re-check?

If either is no, the Context or Options sections are too thin. Most ADRs fail at "Options considered" — the writer documents the choice they wanted and lists strawmen for the rest. Don't do that.

### What to avoid

- Don't pad with "we considered many options" — name them or drop the sentence.
- Don't write the decision as a foregone conclusion. The losing options should be plausible.
- Don't draw ASCII diagrams. They go stale and nobody updates them.
- Don't include code snippets unless the decision *is* about a code shape (e.g. function vs. class).

## Hand-off

Return the ADR as a single markdown file at `docs/adr/<NNNN>-<slug>.md`. Include the status line at the top. If consequences include follow-up work (migrations, deprecations), list them as a TODO block at the bottom so they can be tracked in the actual issue tracker.
