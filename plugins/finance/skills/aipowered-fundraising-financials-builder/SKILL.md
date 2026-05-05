---
id: aipowered-fundraising-financials-builder
title: Fundraising Financials Builder
type: skill
category: business-finance
tags: [fundraising, pitch-deck, projections, vc, financials]
ribbon: new
preview: A skill that builds the financial slides for a fundraising deck — historical, projection, use of funds — defendable in a partner meeting without spreadsheet panic.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Fundraising Financials Builder

A skill for producing the three financial slides every venture deck needs — and producing them in a form that survives a partner meeting. Most founder decks die on slide 9: numbers that don't tie, projections with no logic, and a "use of funds" pie chart that says "growth." This skill builds the historical, the projection, and the use of funds with the assumptions visible enough to defend, but tight enough to fit on three slides.

## When to use this skill

- Preparing a seed, Series A, or Series B deck and the financials section is empty
- Lead investor asked for a model and you have a Notion doc instead
- Refreshing financials between intro and partner meeting (numbers go stale fast)
- Briefing a CFO or fractional finance hire on what investors will actually scrutinise

## When NOT to use this skill

- For a full operating model — this skill builds the deck slides; pair with a separate model build
- For LBO or PE-style modelling — different conventions
- Pre-revenue without clear unit economics — you're pitching vision, not financials

## How to run

Three slides. Each one earns its place.

### Slide 1 — Historical

Last 24 months, monthly. Show:

- **Revenue** (MRR or ARR if SaaS, GMV if marketplace, bookings if ramping)
- **Gross margin %** — flag if below industry norm (SaaS: 70-85%; marketplace take-rate 15-30%; commerce 30-50%)
- **Net new ARR** per month (gross new − churn − contraction)
- **Net dollar retention** if you have it (>110% is the bar for Series A SaaS)
- **Burn** and **months of runway**
- **Headcount** trajectory

Truth-check: does revenue tie to the bank? Does churn match the customer table? Investors run these checks in 90 seconds.

### Slide 2 — Projection

Three years forward, by quarter for year 1, annual after. Build it bottoms-up:

- Pipeline → close rate → new ARR → minus churn → ending ARR
- Headcount plan tied to revenue (don't hire 30 people without revenue to support them)
- Burn that maps to runway with the round closed

Use **two scenarios**: plan and stretch. Don't show a downside in the deck — show it in the model and have it ready in Q&A.

Reasonable growth multipliers for early-stage SaaS: T3D2 (triple-triple-double-double-double — 3x in years 1 and 2, 2x in years 3-5) is the bar for top-quartile. Below 2x year-over-year at $1M ARR, the round gets harder.

Sanity-check the projection:

- **Magic number** = (net new ARR × 4) / S&M spend last quarter; >0.75 is healthy
- **CAC payback** < 18 months for venture-scale
- **Burn multiple** = burn / net new ARR; <1 is great, 1-2 is good, >3 is concerning

If your projection implies a magic number of 2.5 in year 2, an investor will ask why and you'd better have an answer. Aggressive but defensible beats hockey-stick fantasy every time.

### Slide 3 — Use of funds

Round size, runway it buys, and what gets built. Structure:

- **Round size** ($X to extend runway to N months — typically 18-24)
- **Allocation** by category: ~50-60% engineering/product, 25-35% go-to-market, 10-15% G&A. Adjust by stage
- **Milestones** the round delivers: ARR target, headcount target, product milestones — the milestones the next round will be raised against

Don't say "growth" without saying which growth. "$3M to take ARR from $1.5M to $5M, hire 8 engineers and a head of sales, ship enterprise tier by Q3" is the shape investors expect.

## Hand-off

Deliver the three slides plus the source spreadsheet behind them, with assumptions tab visible. Brief the founder on the three numbers a partner will dig into (growth rate, NDR, burn multiple). Refresh monthly during an active raise — stale financials kill momentum.
