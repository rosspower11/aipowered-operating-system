---
id: aipowered-personal-tax-optimiser
title: Personal Tax Optimiser
type: skill
category: taxes
tags: [taxes, year-end, retirement, hsa, harvesting]
ribbon: new
preview: A skill that surfaces year-end personal tax-saving moves before December 31st — retirement contributions, HSA, charitable bunching, and tax-loss harvesting, with deadlines named.
tier: free
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Personal Tax Optimiser

A skill for running the year-end tax checklist before the window closes. Most personal tax savings are won between November 1st and December 31st — after that, the only levers left are IRA contributions and the truth. This skill walks the user through the moves that matter for a typical W-2 or 1099 earner, names the deadline for each, and stops at the line where a CPA needs to take over.

## When to use this skill

- It's Q4 and the user wants to know what they should do before year-end
- Income changed materially this year (new job, RSU vest, side income, capital gains)
- The user has never maxed retirement accounts and wants to start
- A taxable brokerage account has losers that could offset gains

## When NOT to use this skill

- For business taxes — use the Business Tax Strategist
- For complex situations: equity comp with AMT, multi-state, foreign income, trust income — push to a CPA
- Before the user knows their approximate income — most decisions hinge on the bracket

## How to run

Work the checklist in order. Each step has a hard deadline.

### 1. Estimate income and bracket

Get: gross W-2 + 1099 + investment gains + other. Estimate AGI. Name the federal bracket (in 2025: 22% kicks in around $48k single / $97k MFJ, 24% around $103k / $207k, 32% around $197k / $394k). State tax matters too — flag if they're in CA, NY, or NJ.

If they're in the 12% bracket or lower, the calculus changes — Roth beats Traditional, capital gains may be 0%, and most "savings" moves don't actually save much. Name that.

### 2. Max tax-advantaged accounts (deadline: December 31st for most)

- **401(k) / 403(b)**: 2025 limit is $23,500 ($31,000 if 50+). Adjust payroll withholding *now* if behind — January's too late
- **HSA**: 2025 limit is $4,300 single / $8,550 family ($1,000 catch-up if 55+). Triple tax-advantaged, criminally underused. Deadline is technically tax day but do it now
- **Traditional/Roth IRA**: 2025 limit is $7,000 ($8,000 if 50+). Deadline is tax day. Phase-outs apply for Roth
- **FSA**: use it or lose it — flag any unspent balance

### 3. Tax-loss harvesting (deadline: December 31st)

If they have a taxable brokerage with unrealised losses, harvest them — up to $3,000 of net losses offsets ordinary income, the rest carries forward. Watch the **30-day wash sale rule** — don't rebuy the same security or a "substantially identical" one. Don't harvest just for the sake of it; if all positions are up, skip.

### 4. Charitable moves (deadline: December 31st)

- **Bunching** — if they're near the standard deduction ($15,000 single / $30,000 MFJ in 2025), bunch two years of giving into one to itemise
- **Donor-advised fund** — get the deduction this year, distribute over time
- **Appreciated stock** — donate stock held >1 year instead of cash; avoid the gain entirely

### 5. Other levers

- **529 contributions** — state deduction in many states (NY, IL, others)
- **Roth conversions** — only if income dipped this year; otherwise defer
- **Estimated tax true-up** — if 1099 income spiked, pay Q4 estimated by Jan 15

Don't optimise tax before income — earn more first. Saving 22% on $5k matters less than a $20k raise.

## Hand-off

Deliver a one-page checklist: bracket, accounts to fund with dollar amounts and deadlines, harvest amount if any, charitable plan. Flag anything that needs a CPA (multi-state, equity comp, business income). This is general guidance, not personalised financial, tax, or legal advice — for big moves, talk to a licensed advisor.
