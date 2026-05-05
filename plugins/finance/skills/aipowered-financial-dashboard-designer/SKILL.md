---
id: aipowered-financial-dashboard-designer
title: Financial Dashboard Designer
type: skill
category: business-finance
tags: [dashboard, kpis, metrics, cfo, reporting]
ribbon: new
preview: A skill that designs a CFO/founder dashboard — the 8 metrics that actually drive decisions, refreshed weekly, with target bands and the early-warning thresholds that matter.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Financial Dashboard Designer

A skill for replacing the 47-tab finance Notion page with a dashboard a founder or CFO actually opens on Monday morning. Most companies track everything and act on nothing. This skill picks the 8 metrics that drive weekly decisions for this stage and business model, defines them precisely, sets target bands, and writes the early-warning rule for each. Eight is not a hard cap — it's the discipline that forces the cuts that matter.

## When to use this skill

- A founder is reporting "everything looks fine" but can't say which metric tipped first when something broke
- Board meetings are ad-hoc spreadsheets every month
- A new CFO or finance hire is rebuilding the reporting stack
- Headcount is past 20 and "vibes-based" finance has stopped scaling

## When NOT to use this skill

- For deep accounting close work — different tool
- For one-off analyses (cohort study, cap table model) — single-purpose
- Pre-product-market fit — measure 2-3 things, not 8

## How to run

Three phases: pick, define, instrument.

### Phase 1 — Pick the 8

Stage and model determine the list. For an early-stage SaaS company:

1. **MRR / ARR** — the headline; absolute and % MoM growth
2. **Net new ARR** — gross new − churn − contraction; the truer signal
3. **Net dollar retention** — the leading indicator of how big the company can become
4. **Logo churn %** — counts customers, not dollars; catches small-customer rot before it hits revenue
5. **Burn** and **runway months** — cash out per month and end-cash divided by burn
6. **Burn multiple** — burn / net new ARR; the efficiency number investors track
7. **CAC payback** — months for gross profit on a new customer to repay CAC
8. **Pipeline coverage** — open pipeline / quarter quota; <3x means the next quarter is at risk

For a marketplace, swap MRR for GMV and take-rate; for commerce, swap NDR for repeat-purchase rate and AOV. Don't import the SaaS list verbatim into a different model.

### Phase 2 — Define each metric precisely

Every metric needs:

- **Definition** — what's in the numerator and denominator, in one sentence
- **Source** — where the number lives (Stripe, HubSpot, QuickBooks, payroll), and who owns the input
- **Cadence** — refresh weekly for most, monthly for NDR (it lags)
- **Target band** — green / yellow / red with numbers, not vibes
- **Early-warning rule** — the threshold that triggers a conversation

Example for **CAC payback**:
- Definition: (CAC for cohort N) / (gross profit per month per customer in that cohort)
- Source: HubSpot CAC + Stripe revenue + COGS from QuickBooks
- Target: green <12 months, yellow 12-18, red >18
- Early-warning: two months in a row above 15 triggers a sales-efficiency review

### Phase 3 — Instrument and ritualise

Build it once, in one place. A spreadsheet that auto-pulls from sources is fine; a BI tool (Metabase, Looker, Hex) is better past Series A. The dashboard has:

- **Top row**: 8 KPIs with current value, prior period, target band colour
- **Below**: trend chart per KPI, last 12-13 weeks
- **Comments column**: one sentence per KPI from the owner each week

Then the ritual:

- **Monday 9am** — owner refreshes; founder reads in 5 minutes
- **Monthly** — review target bands; recalibrate quarterly
- **Quarterly** — kill any metric nobody discussed; replace with what's missing

The dashboard you don't change in a year is dead. The one with 47 metrics is dead too — same thing.

## Hand-off

Deliver: the 8 KPIs with definitions, target bands, and early-warning rules; the dashboard mockup; the Monday ritual. Offer to revisit after the first board meeting — that's when you'll learn which two metrics to swap.
