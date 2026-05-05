---
id: aipowered-stack-trace-triager
title: Stack Trace Triager
type: skill
category: debugging
tags: [debugging, stack-trace, errors, triage]
ribbon: new
preview: Turns a stack trace into ranked hypotheses, a repro plan, and the next file to read — without guessing, hand-waving, or pasting the same Stack Overflow answer.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Stack Trace Triager

A skill for turning a stack trace into a ranked list of plausible causes, a way to reproduce it, and the next concrete file to read. Use it when an exception lands in your logs or PagerDuty and you need to triage in five minutes, not thirty. Works on any language with a real trace; works less well on opaque "Internal Server Error" with no frames.

## When to use this skill

- Production exception you've never seen before
- Sentry/Rollbar alert with a trace you don't recognise
- CI failure with a trace from a flaky test
- A junior pasted a trace into Slack and the team's about to start guessing
- You inherited an oncall rotation and need to triage faster

## When NOT to use this skill

- You already know the cause — just fix it
- The trace is from your own commit you wrote five minutes ago — read your diff
- There is no trace, only a vague "it broke" — push back and ask for one

## How to run

### Step 1 — Read the trace top to bottom, then bottom to top

The top frame is where it threw. The bottom frame is what called in. The middle is usually noise from frameworks (`express`, `asyncio`, `tokio::runtime`). Mark which frames are *your code* (`src/...`, `app/...`) and which are library code. Your code is where you'll fix it; library code tells you which API you misused.

Example: a `TypeError: Cannot read properties of undefined (reading 'id')` at `services/orders/finalize.ts:88` called from `api/routes/orders.ts:42` — the bug is at line 88, the trigger is line 42. Both matter.

### Step 2 — Name the failure mode

Common patterns and what they actually mean:
- `undefined is not an object` / `NoneType has no attribute` — a value upstream is missing or async hasn't resolved. Look for missing `await`, optional chaining, or a DB query returning null.
- `EADDRINUSE` / `port already in use` — process didn't shut down cleanly, or two replicas in the same env.
- `ECONNRESET` / `connection reset` — upstream hung up. Usually timeout, occasionally TLS.
- `Maximum call stack exceeded` / `RecursionError` — recursion without a base case, or a getter calling itself.
- `Deadlock detected` — two transactions taking row locks in different orders.
- `Out of memory` — a single request loading too much, or a leak. Check what's in `Array.from`, `.map` on large data, or unbounded caches.

If you can't name the failure mode, say so. Don't paper over it.

### Step 3 — Rank hypotheses

List 2–4 hypotheses in descending order of likelihood. For each:
- **Hypothesis** — one sentence (e.g. "User has no default address; `address.id` reads on undefined").
- **Why this rank** — what evidence in the trace, code, or environment supports it.
- **How to confirm** — the one log line, query, or unit test that would prove or disprove it.

Don't list every theoretical cause. Three good hypotheses beat ten lazy ones.

### Step 4 — Write the repro plan

The minimum sequence to make the bug happen on demand. If it's a unit test, name the test file and the inputs. If it's a request, give `curl` with the body. If it's environmental (only happens in staging), say what's different about staging — DB version, env var, replica count.

### Step 5 — Point at the next file

End with one line: "Next: read `<file>:<line>` and check `<specific condition>`." Don't suggest "investigate further". Be concrete.

### What to avoid

- Don't paste Stack Overflow answers. The trace is in *this* codebase.
- Don't recommend "add try/catch" without naming what the catch should do. Swallowed errors are worse than thrown ones.
- Don't blame "race condition" without identifying the two racing operations.

## Hand-off

Return: failure mode, ranked hypotheses, repro plan, next file to read. Keep it under 300 words. The receiver should be able to start fixing or reproducing within two minutes of reading.
