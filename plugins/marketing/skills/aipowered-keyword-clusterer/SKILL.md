---
id: aipowered-keyword-clusterer
title: Keyword Clusterer
type: skill
category: seo
tags: [seo, keywords, clustering, pillar]
ribbon: new
preview: Groups raw keyword lists into pillar pages and supporting topics with intent and priority scoring, so a 2,000-keyword export becomes a 12-page content map.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Keyword Clusterer

A skill for turning a raw keyword export — Ahrefs, Semrush, GSC — into a clean map of pillar pages and supporting topics, each tagged by intent and ranked by priority. Use this when a team has thousands of keywords and no plan, or when an existing site map is keyword-shaped instead of topic-shaped and is competing with itself in search.

## When to use this skill

- A keyword export has 500+ rows and nothing has been clustered
- An existing site has cannibalisation — multiple pages ranking for the same query
- A new site is being scoped and needs a topic map before any briefs
- A relaunch needs to consolidate thin pages into stronger pillars

## When NOT to use this skill

- For under 100 keywords — cluster them by hand, it's faster
- For pure paid-search keyword work (the intent model is different)
- When the user hasn't defined the ICP — every cluster decision depends on it

## How to run

Work in four steps. The output is a single sheet a writer can brief from.

### Step 1 — Ingest and clean

Take the raw export. Drop:

- Branded queries unless brand-defence is the goal
- Volume under 50/mo unless they're long-tail variants of a head term
- Duplicates and near-duplicates ("how to write a brief" vs "writing a brief" — pick one canonical)

Keep volume, KD, current rank, and current URL columns. Without rank and current URL you can't spot cannibalisation.

### Step 2 — Tag intent

Every keyword gets one of four tags:

- **I** — Informational (how, what, why, guide, examples)
- **C** — Commercial investigation (best, vs, alternatives, review)
- **N** — Navigational (brand + product)
- **T** — Transactional (pricing, buy, free trial, demo)

Mixed-intent queries get the dominant intent based on SERP — check the top 3 results, not your gut.

### Step 3 — Cluster into pillars

Group by topic, not by string match. Use this rule: two keywords belong in the same cluster if a single 2,000-word page could rank for both without forcing it. If you'd need two distinct pages, split them.

Each cluster has:

- **Pillar keyword** — highest-volume head term with informational or commercial intent
- **Supporting keywords** — 5–15 long-tail variants that become subheadings or supporting articles
- **Intent mix** — usually 1 pillar at I, supporting at I and C

Aim for 8–15 clusters total. More than 20 and the site loses focus.

### Step 4 — Score priority

Score each cluster on three dimensions, 1–5:

- **Volume** — total monthly searches across the cluster
- **Difficulty** — average KD weighted by volume (lower is better, score inverts)
- **Business fit** — how close the cluster is to revenue (an "alternatives to X" cluster scores 5, a glossary cluster scores 2)

Multiply the three. Ship clusters with score 60+ first. Park anything under 30.

## Hand-off

Deliver one sheet: cluster name, pillar keyword, supporting keywords, intent mix, total volume, weighted KD, business fit, priority score, recommended URL. Flag any cannibalisation found in Step 1 — those need merge or redirect decisions before new pages ship. Offer to brief the top three pillars next. Stop after 15 clusters; more is procrastination.
