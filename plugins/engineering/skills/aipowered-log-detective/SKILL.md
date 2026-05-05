---
id: aipowered-log-detective
title: Log Detective
type: skill
category: debugging
tags: [logs, debugging, observability, intermittent]
ribbon: new
preview: Mines a log set for the pattern behind an intermittent bug — flags signal vs noise and names the next thing to instrument before guessing again.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Log Detective

A skill for finding the pattern behind a bug that only shows up sometimes. Reads a log set, separates signal from noise, and tells you what to instrument before the next reproduction. Use it on intermittent failures, flaky CI, weird production blips, or anything where the symptom is real but the cause won't sit still.

## When to use this skill

- A test fails 1 in 50 runs in CI and nobody's caught it
- Production errors that spike for 90 seconds and disappear
- A user reports a bug that you can't reproduce locally
- An incident where the trace points at a symptom (timeout) but not the cause
- Logs that "feel weird" — latency creeping up, retries climbing — without an alert firing

## When NOT to use this skill

- Bugs that reproduce on demand — fix them, don't mine logs
- A new feature you launched 10 minutes ago — read the diff first
- Log sets you don't have access to — get access first

## How to run

### Step 1 — Define the question

Write down the question in one sentence before opening the logs. "Why does `POST /orders` return 502 for 0.5% of requests in EU traffic?" is a question. "What's wrong with orders?" is not. The question scopes which logs matter and lets you stop reading when you've answered it.

### Step 2 — Bound the time window

Find the first and last occurrence of the symptom. Pull logs from 5 minutes before the first to 5 minutes after the last. Don't grep the whole month — context noise will drown the signal. If you only have one occurrence, expand backwards to find a second one before drawing conclusions; n=1 lies.

### Step 3 — Build a frequency table, not a transcript

Don't read logs line by line. Aggregate first:
- `grep ERROR | sort | uniq -c | sort -rn` (or the equivalent in your log tool)
- Group by error message, status code, route, user-id, region.
- The top three rows are usually the answer or the lie. If the top error is "Connection refused" 80x and "Timeout" 800x, timeout is the symptom and you're hunting upstream.

In Datadog/Splunk: facet on `service`, `status`, and one custom tag (user, region, version). Read the rare values, not the common ones — outliers usually carry the signal.

### Step 4 — Correlate across services

Take a single failing request id (or trace id) and follow it across services. The bug is usually at a boundary — service A timing out a call to B, B hitting a connection pool limit, B retrying and saturating the DB. Note where latency spikes between hops. If you don't have trace ids, that's your first instrumentation gap.

### Step 5 — Separate signal from noise

For each log line you're considering: does this happen on healthy requests too? If yes, it's noise. Confirm by sampling 10 healthy requests in the same window. A WARN that fires constantly is invisible — log volume without selectivity is theatre.

### Step 6 — State what to instrument next

If you can't conclude from the logs you have, name the missing data:
- "No trace id propagated from gateway to worker — add `x-trace-id` in `gateway/middleware.ts:55`."
- "No timing on the DB call — add a span around `db.query` in `repositories/orders.ts:120`."
- "No user-region tag — add it to the structured logger context."

Don't recommend "add more logging". Be specific about which line, which field, and what question it answers.

### What to avoid

- Don't conclude from a single occurrence. Find a second one.
- Don't blame "the network" without showing connection counts, retries, or DNS evidence.
- Don't paste raw log dumps as the answer. The reader wants the pattern.

## Hand-off

Return: the question, the time window, the pattern (with counts), the most likely cause, and the next thing to instrument. If you couldn't conclude, say so plainly and list the gaps. A clean "I don't know yet, here's what's missing" beats a confident wrong guess.
