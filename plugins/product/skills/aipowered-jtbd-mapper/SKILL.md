---
id: aipowered-jtbd-mapper
title: Jobs-to-be-Done Mapper
type: skill
category: research
tags: [jtbd, synthesis, interviews, research]
ribbon: new
preview: Synthesises 5–10 interview transcripts into a jobs map — situations, motivations, outcomes, with quotes attached.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Jobs-to-be-Done Mapper

A skill for turning a stack of interview transcripts into a jobs map a product team can build against. Use this after interviews, not during; synthesis is its own discipline and conflating it with the interview itself is how research becomes confirmation bias. The output is a map of 3 to 7 jobs, each with the situation that triggers it, the underlying motivation, the desired outcome, and the verbatim quotes that earned its place.

## When to use this skill

- 5 to 10 user interviews are done and the team needs a synthesis a PM can act on
- Discovery has surfaced multiple competing user stories and you need to find the structure
- A new market is being entered and the team needs to know which jobs to build for
- A persona doc has gone stale and a behavioural map would replace it more usefully

## When NOT to use this skill

- With fewer than 5 transcripts — not enough signal; you'll over-fit on outliers
- For features already in flight — JTBD pre-dates scope; for in-flight work, use a usability test
- As a substitute for interviewing — synthesis without primary research is hallucination

## How to run

### Phase 1 — Prep the corpus

Get every transcript into the same format. Strip filler. Tag each transcript with the recruit segment, the date, and a one-line reminder of who this person is. Read all of them in one sitting before extracting anything — the patterns only show up across the set, not within one.

### Phase 2 — Extract job-shaped quotes

A job-shaped quote has three parts: a **situation** (when), a **motivation** (because), and an **outcome** (so that). Pull every quote that has all three, even partially. Aim for 40 to 80 quotes from 5 to 10 transcripts. Don't paraphrase — copy verbatim. Paraphrasing is where bias enters.

Write each quote in the canonical JTBD form: *"When [situation], I want to [motivation], so I can [outcome]."* If you can't reshape the quote into that form, it's not a job — it's a feature request or an opinion. Set those aside in a separate file.

### Phase 3 — Cluster

Print the quotes onto cards or use a digital board. Cluster by **outcome similarity**, not by the surface words used. Two people saying "I want a faster export" and "I want to send the data without thinking" are often the same job. Aim for 3 to 7 clusters; more than 7 means the clusters aren't tight enough.

### Phase 4 — Name the jobs

Each cluster gets a job statement in the canonical form, written from the user's perspective, not the team's. Avoid the product name in the job — the job exists with or without your tool. Name what's *invariant* about the situation, the motivation, and the outcome. Attach the 3 to 5 strongest quotes under each job, with the segment tag, so a reader can audit your synthesis.

### Phase 5 — Forces and frequency

For each job, note the **push** (what makes the situation painful) and the **pull** (what would relieve it). Then estimate the frequency — daily, weekly, monthly, rarely. A high-pull, low-frequency job is a different bet than a low-pull, daily one; both are valid, but the product implications differ.

### Phase 6 — What this rules out

The most useful section. List 3 to 5 features the team has been considering that *don't* map to any job in the synthesis. This is the synthesis earning its keep — saying no to the wrong work.

## Hand-off

Deliver the jobs map, the quote bank, and the rules-out list as one document. Offer to walk product and design through it once, then leave the artefact alone for two weeks — teams that re-synthesise weekly are using the map for politics, not direction.
