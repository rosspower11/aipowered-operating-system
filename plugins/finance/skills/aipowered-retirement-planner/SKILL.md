---
id: aipowered-retirement-planner
title: Retirement Planner
type: skill
category: investing
tags: [retirement, savings, withdrawal, 4-percent-rule, planning]
ribbon: new
preview: A skill that models a retirement runway — savings rate vs. spending, withdrawal strategy, and the 5-year windows where small changes compound into entirely different outcomes.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Retirement Planner

A skill for answering the only retirement question that matters: "Am I on track, and if not, what's the smallest change that fixes it?" Most retirement calculators are either too simple (one big number 30 years out) or too complex (Monte Carlo with 47 inputs). This skill builds a model honest enough to be useful, names the years where small adjustments matter most, and stops short of pretending to predict 2055.

## When to use this skill

- A 30-50 year old wants to know if their savings rate is enough
- Someone within 10 years of retirement needs a withdrawal strategy
- A FIRE pursuer wants the math checked, including healthcare and sequence risk
- A windfall (inheritance, equity event, business sale) just landed and the plan needs updating

## When NOT to use this skill

- For estate planning — different specialist (attorney + CPA)
- For Social Security claiming optimisation alone — useful, but a narrower tool fits better
- When the user has high-interest debt — pay that first; the math doesn't lose

## How to run

Three phases: where they stand, what they need, what to change.

### Phase 1 — Inputs

Get:

1. **Current age** and **target retirement age**
2. **Current liquid net worth** (excluding home equity unless they plan to downsize)
3. **Current annual savings** (401k + match + IRA + taxable contributions)
4. **Current annual spending** (real number, not aspirational)
5. **Expected retirement spending** (often 70-85% of pre-retirement, but flag healthcare if early-retiring)
6. **Social Security estimate** (from ssa.gov, in today's dollars at full retirement age)
7. **Pension or other guaranteed income** if any

Use real (inflation-adjusted) returns: 5% for stocks, 1.5% for bonds is conservative. 7% real for a 90/10 portfolio is plausible — flag the assumption.

### Phase 2 — The model

Apply the **Rule of 25**: target nest egg = annual spending in retirement × 25 (the inverse of the 4% safe withdrawal rate). For early retirees (pre-60), use 30x — sequence-of-returns risk is brutal in the first 5 years and the 4% rule was built on a 30-year horizon.

Run the projection:

- Project liquid net worth forward each year: `(start + savings) × (1 + real return)`
- Show the year they cross the target number
- Compare to target retirement age — name the gap, in years and dollars
- **Withdrawal phase**: model years 1-30 of retirement, drawing the target spend, growing the portfolio at expected return. Flag if probability of running out before 95 looks high

### Phase 3 — The levers

Three levers, ranked by leverage:

1. **Savings rate** — going from 15% to 25% of income compounds harder than any return assumption. The years between 35-50 are where a 10pp increase changes everything; after 55 it's mostly about not screwing up
2. **Retirement spend** — dropping target spending by $10k/year reduces the target nest egg by $250k. This is the most underused lever
3. **Working longer** — every extra year does triple duty: more savings, fewer withdrawal years, larger Social Security

Sequence risk windows: the 5 years before and 5 years after retirement are the danger zone. A 30% drawdown in year 1 of retirement with 4% withdrawals can permanently impair the portfolio. Build a 2-3 year cash bucket for the early years.

Don't optimise asset allocation past the goal. If they're on track, a 70/30 portfolio is fine — chasing 8% real returns with leveraged ETFs to retire 18 months earlier is a bad trade.

## Hand-off

Deliver: the projection chart, the gap (or surplus) to target, the three levers with dollar impact, and the sequence-risk plan if within 10 years of retirement. Re-run annually or when income changes materially. This is general guidance, not personalised financial, tax, or legal advice — for big moves, talk to a licensed advisor.
