---
id: aipowered-runway-modeller
title: Runway Modeller
type: skill
category: cashflow
tags: [runway, startup, burn, mrr, cashflow]
ribbon: new
preview: A skill that builds a startup runway model from MRR, headcount, and burn — names the cliff date and three real levers to extend it before the panic phase begins.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Runway Modeller

A skill for turning a startup's bank balance, MRR, and headcount into a runway model with a date on it. Most early-stage founders carry a vibes-based number in their head ("we have like 14 months") that's wrong by ±4. This skill produces the actual cliff date, the burn multiple, and three levers ranked by reversibility — so the founder knows what to pull, and when, before the round needs to close.

## When to use this skill

- A founder is fundraising and a partner asked "what's your runway?"
- The board is asking for a cash plan and the spreadsheet is a Notion page
- Headcount is about to grow and the math hasn't been redone
- A revenue line just changed (churn spike, big customer, pricing change)

## When NOT to use this skill

- For public-company financial modelling — different beast
- For a 5-year forecast — past 18 months in early-stage is fan-fiction
- When the user doesn't have last 6 months of bank statements — go get them first

## How to run

Build it in four sections. The model is one tab, not eight.

### 1. Starting position

Get:

- **Cash in bank** today (across all accounts)
- **Last 6 months of net burn** (cash out minus cash in, monthly)
- **Current MRR** and **net new MRR** the last 3 months (gross new − churn)
- **Headcount**, fully loaded (salary × 1.25-1.30 for benefits/payroll tax)
- **Expected receivables** in next 60 days that aren't booked yet

If they confuse revenue with cash collected, fix it before continuing. Annual contracts paid up front skew runway in your favour — name that.

### 2. Build the monthly model

Project 18 months forward. Per month:

- Cash inflow: MRR × (1 + growth rate) − churn, plus any non-recurring (services, grants)
- Cash outflow: payroll, software, GPU/infra, marketing, rent, "other"
- Net burn = outflow − inflow
- End cash = start cash − net burn

Use **three scenarios**: base (current trajectory), upside (close two pipeline deals), downside (one big customer churns, one hire planned doesn't work out). Name the **cliff date** in each: the month cash hits zero or hits the 6-month-runway covenant if they have one.

Calculate **burn multiple** = net burn / net new ARR. Under 1 is excellent (Series B+), 1-2 is good, 2-3 is concerning, above 3 means you're spending $3 to add $1 of recurring revenue — fix this or you won't raise.

### 3. The three levers

Rank levers by reversibility (easy to undo first):

1. **Marketing/contractor spend** — fastest to cut, easiest to restart. Buys 1-3 months
2. **Hiring freeze** — kills planned offers, doesn't touch existing team. Buys 3-6 months
3. **Headcount reduction** — last resort, hardest to reverse, hits morale. Buys 6+ months but costs trust

Don't touch product engineers first — that's the asset. Don't cut sales if you're sales-led — that's the engine. Marketing experiments and contractors go before FTEs.

### 4. The trigger plan

Set tripwires: "If end-of-quarter cash is below $X, we freeze hiring." "If we're below 9 months runway by month N, we start the round." Don't wait until you have 4 months — partners can smell desperation, and term sheets take 6 weeks.

## Hand-off

Deliver: cliff date in three scenarios, burn multiple, the three levers ranked, and the tripwire plan. Offer to update monthly. Push the founder to start fundraising at 12 months runway, not 6 — the round closes faster when you don't need it.
