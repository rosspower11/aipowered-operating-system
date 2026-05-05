---
id: aipowered-system-mapper
title: System Mapper
type: skill
category: architecture
tags: [architecture, onboarding, systems, code-reading]
ribbon: new
preview: Reads a repo and produces a one-page architecture map for a new joiner — major pieces, request flow, and the footguns nobody warned them about.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# System Mapper

A skill for producing the architecture map a new engineer needs in week one: what the major pieces are, how a request flows through them, and the footguns that aren't obvious from reading the code top-down. Use it on unfamiliar repos, inherited services, or your own codebase when onboarding takes longer than it should.

## When to use this skill

- A new engineer joins a service with no architecture doc
- You're inheriting a service from a team that's left or pivoted
- An auditor or partner needs a high-level view of how the system fits together
- You're about to make a cross-cutting change and want to confirm your mental model
- The README explains how to run it but not how it works

## When NOT to use this skill

- A 200-line script — read the code, no map needed
- A microservice doing one thing well — a one-paragraph description beats a map
- A repo that already has a current architecture doc you trust — update it instead

## How to run

### Step 1 — Read the entry points first

Find the actual entry point: `main.ts`, `server.py`, `cmd/<service>/main.go`, `index.js`. Read it cover to cover. From there, follow the imports — the import graph is the architecture, not what the README claims it is. Note the framework, the routing layer, and the persistence layer in the first 20 minutes.

### Step 2 — Identify the major pieces

Walk the top-level folders. For each, write one sentence: what it does, what depends on it. Don't just list folders — name responsibilities. "`api/` — HTTP handlers, depends on `services/` and `db/`" is useful. "`api/` — API code" is not.

Common shapes to look for:
- **Layered**: `api/` → `services/` → `repositories/` → `db/`. Common in TypeScript/Python services.
- **Vertical slices**: `features/users/`, `features/billing/`. Each owns its own routing, services, data access.
- **Hexagonal**: `domain/`, `adapters/`, `application/`. Less common, but if you see `ports/` it's this.

Name the shape. New joiners orient faster against a named pattern than against bespoke prose.

### Step 3 — Trace one real request end-to-end

Pick a representative endpoint — login, fetch-user, create-order. Walk the call stack:
1. Where does it land? (`api/routes/auth.ts:42`)
2. What middleware runs? (auth, rate limit, logging)
3. Which service method? (`services/auth/login.ts:88`)
4. What does it read/write? (`db/users.ts`, Redis session)
5. What does it return, and to whom?

This is the most useful section in the whole map. New joiners spend their first week reverse-engineering this for one endpoint. Do it once for them.

### Step 4 — Name the footguns

Every codebase has 3–5. Examples that show up over and over:
- A singleton that's actually mutable global state and breaks tests
- A "manager" class that owns 40% of the logic
- An ORM hook that fires on save and writes to a queue (so saves have side effects)
- An env var that defaults to something dangerous in dev
- A retry loop without a circuit breaker

Find them by skimming `*Manager.ts`, `*Service.ts`, anything called `core`, and any file with a comment that starts "TODO" or "HACK". List 3–5. Cite line numbers.

### Step 5 — Keep it to one page

Hard limit: one printed page. If it doesn't fit, you've drifted into documentation, not orientation. The point is the new joiner reads it once on day one and can ask better questions on day two.

### What to avoid

- Don't draw ASCII diagrams. They lie within a quarter and nobody updates them.
- Don't catalogue every file. The reader can `ls`.
- Don't editorialise on what should be refactored — that's a different document.

## Hand-off

Return the map as a single markdown file: four sections (Major pieces, Request flow, Footguns, Where to read next). Each section gets line citations where useful. Tell the user which directories you read and which you didn't — gaps are useful signal.
