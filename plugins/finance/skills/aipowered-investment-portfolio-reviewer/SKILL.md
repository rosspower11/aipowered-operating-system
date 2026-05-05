---
id: aipowered-investment-portfolio-reviewer
title: Investment Portfolio Reviewer
type: skill
category: investing
tags: [investing, portfolio, rebalance, allocation, tax-efficiency]
ribbon: new
preview: A skill that reviews a portfolio against goals, risk tolerance, and tax efficiency — flags concentration risk, asset location problems, and the rebalance moves that matter.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Investment Portfolio Reviewer

A skill for taking a portfolio that's drifted — too much employer stock, three robo-advisors competing with each other, bonds in a Roth — and reshaping it back to something defensible. This is not stock picking. It's the boring, durable work of allocation, asset location, and concentration risk. Done once a year, it's worth more than every podcast about which AI stock to buy.

## When to use this skill

- The user has 3+ accounts (401k, IRA, taxable, HSA) and no shared view across them
- A single position is more than 10% of the total portfolio
- A life event (job change, marriage, inheritance, kids) changed the goal but not the portfolio
- The user hasn't rebalanced in 18+ months

## When NOT to use this skill

- For active trading or stock-picking — wrong tool
- For options strategies, crypto allocation tactics, or alternative assets — different specialist
- When the user has less than 12 months of emergency fund — fix that first, investing comes after

## How to run

Three passes: see the whole picture, diagnose, prescribe.

### Pass 1 — Aggregate

Pull every position across every account into one table:

- Account type (Taxable / Traditional / Roth / HSA / 529)
- Holding (ticker or fund)
- Value
- % of total portfolio
- Asset class (US equity, international equity, bonds, real estate, cash, other)
- Cost basis (for taxable only)

Calculate: total net worth in liquid investments, % allocation by asset class, % in any single position.

### Pass 2 — Diagnose

Run the four checks:

1. **Concentration** — any single position above 10%? Employer stock above 5%? Both are red flags. Employer stock especially: your salary already correlates with the company; doubling down is leverage on a single point of failure
2. **Allocation vs. goal** — match age and goal to a target. Aggressive: 90/10 stocks/bonds. Moderate: 70/30. Conservative: 50/50. Within 10 years of needing the money, derisk — the 4% rule is fragile in the first 5 years of retirement and a 60/40 crash early can permanently dent the trajectory
3. **Asset location** — bonds belong in tax-deferred (Traditional 401k/IRA), stocks belong in Roth and taxable, REITs belong in tax-deferred. A 60/40 portfolio with bonds in the Roth and stocks in the 401k is leaving real money on the floor
4. **Cost drag** — any fund with expense ratio > 0.25%? Active funds underperform their index roughly 80% of the time over 15 years. Move to index equivalents unless there's a specific reason

### Pass 3 — Prescribe

Deliver a one-page rebalance plan:

- **Target allocation** (US/Intl/Bonds/Other) with %
- **Trades to make** — sells and buys, in priority order
- **Tax-aware sequencing** — rebalance inside tax-advantaged accounts first (no tax cost), only realise gains in taxable when necessary or when harvesting losses pairs with it
- **Ongoing rule** — rebalance when allocation drifts more than 5 percentage points from target, or annually in January, whichever comes first
- **Concentration plan** — if employer stock is too high, sell on a schedule (e.g. 25% per quarter) to reduce timing risk

Don't trade for the sake of trading. The best portfolio is one you'll hold through a 30% drawdown without panic-selling.

## Hand-off

Deliver the aggregated table, the four diagnoses with red flags called out, and the rebalance plan. Schedule a 12-month follow-up. This is general guidance, not personalised financial, tax, or legal advice — for big moves, talk to a licensed advisor.
