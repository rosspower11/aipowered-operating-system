---
id: aipowered-pricing-architect
title: Pricing Architect
type: skill
category: business-finance
tags: [pricing, value-based, willingness-to-pay, packaging, saas]
ribbon: new
preview: A skill that sets product pricing using value-based, competitive, and willingness-to-pay analysis — with packaging tiers and the experiment plan to validate it in market.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Pricing Architect

A skill for going from "what should we charge?" to a defensible price, packaging structure, and a 90-day experiment plan. Most early-stage products underprice by 2-5x because the founder priced from cost or fear, not value. This skill walks the value the product creates, what competitors charge, and what customers will actually pay — then writes the test plan to find the right number in market, not in a slack thread.

## When to use this skill

- Pre-launch and the price field on the website is still blank
- Sales is winning every deal — that's a sign of underpricing, not skill
- A new tier or seat-based model is being added to existing pricing
- Churn is fine but expansion revenue is flat — packaging may be the issue

## When NOT to use this skill

- For commodity goods where price is set by market — different problem
- For pure marketplace pricing (rideshare, Airbnb) — dynamic pricing is its own discipline
- Before product-market fit — you're pricing fiction

## How to run

Three angles, then synthesis, then test plan.

### 1. Value-based — what is the product worth?

Quantify the customer outcome:

- **Time saved** × **fully-loaded hourly cost** × **users** = annual value
- **Revenue gained** the product is responsible for
- **Cost replaced** if you displace a tool or workflow
- **Risk reduced** (compliance, downtime, churn) — softer but real

A common rule: charge 10-25% of the value created. If the product saves a 50-person team $500k/year, $50-125k/year is defensible. Below 10% you leave money on the table; above 25% the buyer feels gouged when they do the math.

### 2. Competitive — what does the market expect?

Pull pricing from 5-10 competitors and adjacent tools. Build a table: vendor, entry price, mid-tier price, enterprise hint, what's included. Don't just price 10% under the leader — anchor on the value tier. **If you're cheaper than everyone, buyers assume you're worse.** Premium positioning needs premium price.

### 3. Willingness-to-pay — what will they actually pay?

Run a Van Westendorp price sensitivity check on 10-20 prospects:

- "At what price would this be so expensive you wouldn't consider it?"
- "At what price would this be expensive but worth considering?"
- "At what price would this be a great deal?"
- "At what price would this be so cheap you'd doubt the quality?"

The intersection of "expensive but worth it" and "great deal" curves is the **acceptable price range**. Don't average — read the spread.

### 4. Synthesis — pick the price and the packaging

Default to **three tiers** — Good, Better, Best. Behavioural pricing literature: most buyers self-select the middle tier when offered three. Make:

- **Good** — narrow, real value, priced low enough to remove friction (~30-50% of mid)
- **Better** — the tier you want most customers on, priced where the math works
- **Best** — enterprise/premium, 2-3x the mid-tier, with security/SSO/SLA gating

Charge per the value metric — seats if value scales with users, usage if it scales with consumption, outcomes if you can measure them. Avoid pricing that punishes growth (per-API-call tiers that explode silently lose customers fast).

Watch unit economics: target **LTV/CAC > 3** and **CAC payback < 12 months** in the mid-tier. If pricing breaks those, the model is wrong.

### 5. The 90-day experiment

- Days 1-30: launch new pricing on the website, hold sales discounts steady
- Days 31-60: A/B the mid-tier price ±20%, measure conversion and ACV
- Days 61-90: pick the winner, migrate existing customers with grandfathering plan

## Hand-off

Deliver: value math, competitive table, willingness-to-pay range, three-tier packaging with prices, and the 90-day test plan. Most companies should re-price annually — pricing is an asset, not a tattoo.
