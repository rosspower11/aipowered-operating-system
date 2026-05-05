---
id: aipowered-on-page-optimiser
title: On-Page Optimiser
type: skill
category: seo
tags: [seo, on-page, optimisation, serp]
ribbon: new
preview: Audits a published URL against the SERP and search intent, returns a rewrite plan with internal-link suggestions, schema fixes, and a prioritised cut list.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# On-Page Optimiser

A skill for taking a single published URL that's underperforming — page 2, falling rankings, low CTR — and returning a concrete rewrite plan: what to cut, what to add, what to internally link, and what schema to fix. Use this when a page should rank but doesn't, or when a top-3 page is slipping and nobody knows why.

## When to use this skill

- A page targets a clear keyword but ranks 8–25
- A page ranked top-3 and has dropped within the last 90 days
- CTR is below 2% on a top-10 ranking — the title and meta are losing
- A page targets two intents at once and doesn't satisfy either

## When NOT to use this skill

- For brand-new pages with no ranking data (use Long-form Writer + Keyword Clusterer)
- For a sitewide audit (this is one URL at a time)
- When the page targets a keyword the site has no authority for — no on-page fix saves it

## How to run

Work in four steps. Open the URL and the top-10 SERP side by side throughout.

### Step 1 — Diagnose intent mismatch

Pull up the top 10 results for the target keyword. Tag each by format: ultimate guide, listicle, tool, case study, comparison, video, forum thread. The dominant format is the intent — if 7 of 10 are listicles and the page is a 3,000-word essay, no on-page fix beats reformatting.

If intent is wrong, stop and recommend a structural rewrite, not optimisation.

### Step 2 — Run the gap audit

Compare the page to the SERP on five dimensions:

1. **Coverage** — what subtopics do the top 5 cover that the page misses? List them.
2. **Depth** — average word count of top 5 vs the page. Within 20% is fine, 50% short is a problem.
3. **Freshness** — top results updated in the last 12 months? If yes and the page hasn't been, it's a freshness signal issue.
4. **E-E-A-T** — author bylines, citations, original data, screenshots. Note what's missing.
5. **Schema** — Article, FAQ, HowTo, Product. Check the page source vs what the SERP rewards.

### Step 3 — Build the fix list

Output a prioritised list, P0 first:

- **P0 — Title and meta** — if CTR is the problem, fix this first. Rewrite to match SERP intent and add the missing differentiator. 50–60 chars title, 140–155 char meta.
- **P0 — H1 and intro** — first 100 words must answer the query directly. No throat-clearing.
- **P1 — Coverage gaps** — add the missing subtopics from Step 2. New H2s, 200–300 words each.
- **P1 — Original asset** — one of: a chart, screenshot series, embedded calculator, or proprietary data point. Without one, the page tops out at #4.
- **P2 — Internal links** — link in 3–5 supporting articles using exact-match or near-match anchors. Link out from 2 stronger pages on the site.
- **P2 — Schema** — add the type the SERP rewards. Validate in Search Console.

### Step 4 — Cut what's dead

The page probably has 200–500 words that are filler — restated intros, generic closings, "in conclusion." Mark them for deletion. A tighter page beats a longer page when intent is informational with a transactional twist.

## Hand-off

Deliver the diagnosis, the prioritised fix list with effort estimates (S/M/L), the rewritten title and meta, and the list of internal links to add. Offer to draft the new H2 sections. Re-check rankings at 14 and 28 days post-publish; don't keep iterating before then — Google needs time.
