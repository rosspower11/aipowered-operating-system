---
id: twelve-part-close
title: The 12-Part Close
type: skill
category: closing
tags: [sales, closing, playbook, calls]
ribbon: new
preview: A skill that builds a personalised 12-stage closing call Playbook and scripts every line in the user's own voice.
version: 1.0.0
author: AI Powered
created: 2026-05-20
updated: 2026-05-20
---

# The 12-Part Close

This skill turns a blank page into a finished closing call script. The user picks up where they are now (probably winging calls or losing deals in the silence after price) and walks out with their own 12-stage Playbook in their own voice — ready to keep open beside their screen on every call from now on.

The whole flow takes ~35 minutes the first time. Stages run sequentially, AskUserQuestion-driven, voice-matched. At the end the user gets a clean Markdown Playbook saved to their workspace.

## When to use this skill

- When a founder or closer wants a structured, repeatable closing script instead of winging it
- When win-rate is suffering specifically at the close or price stage
- When a team wants a shared Playbook they can all run on closing calls
- When the user asks for a "closing script", "12-part close", "sales script", "closing call", or "objection-handling script"

## When NOT to use this skill

- For top-of-funnel discovery calls with no intention to close on the same call
- When the real problem is lead quality or offer, not call structure
- When the user just wants a single line for one objection (use a lighter objection-handling prompt instead)
- When the user has <3 calls per month (they won't get enough reps to justify a full Playbook)

## How to run

### Step 0 — Open with the frame

Before any questions, write 4–5 lines explaining what's about to happen:

> You're about to build your own 12-part closing call script. Three acts: Discovery, Emotional Journey, Close. I'll ask you 2–3 quick questions at each stage, then draft your lines in your voice. By the end you'll have a Playbook you can keep open beside your screen on every call. ~35 minutes. Ready?

Wait for confirmation before continuing. If the user says they've already done this and just wants to redo a single stage, jump to that stage and skip the rest.

### Step 1 — Setup questions (one turn, 4 questions)

Use AskUserQuestion to collect the context every stage will reference. One turn, four questions:

1. **Who do you sell to?** (Founders / Coaches / Consultants / Operators / Creators / Other)
2. **What outcome do you deliver in one line?** (free text — they fill in)
3. **How would you describe your voice on calls?** (Warm and direct / Calm and surgical / Playful and disarming / Authoritative and crisp / Other)
4. **What's the price point of the offer you're closing on?** (Under $1k / $1k–$5k / $5k–$15k / $15k+ / Other)

Save these answers — every stage prompt below will reference them. Don't ask them again later.

### Step 2 — Walk through all 12 stages, sequentially

For each of the 12 stages below, do this loop:

1. **Read the stage header** to the user — name, goal, why it matters, the canonical frame lines.
2. **Use AskUserQuestion** with the stage's questions (load them from `assets/stage_prompts.md`).
3. **Draft 2–3 versions** of the line(s) in their voice, referencing their setup answers from Step 1.
4. **Ask which version they want** (or if they want a remix). Lock in the chosen version.
5. **Move to the next stage.** Don't pause for permission between stages — keep momentum.

The 12 stages, grouped into three acts:

**Part 1 · Discovery** — earn the right to the rest of the call.
1. Intro — open warm, then transition fast
2. Set The Call — get them to say why they're really here
3. Big Desire — find the big reason, then the pain underneath
4. The Gap — surface the real reason they haven't moved yet

**Part 2 · Emotional Journey** — make change feel necessary and possible.
5. Admit — get them to say the real reason out loud
6. Consequence — make the cost of inaction visible
7. New Identity — paint the version of themselves on the other side
8. Why Now? — create urgency without pressure

**Part 3 · Close** — present, switch, deliver, land.
9. Pitch — speak to outcomes, not features
10. Switch — hand it back, let them sell themselves
11. Price — say it and let it sit
12. Next Steps — give them clarity about what happens after yes

Full per-stage interview content lives in `assets/stage_prompts.md`. Read it once before you start so you have the whole flow in mind.

### Step 3 — Voice handling

If the user has voice DNA already loaded (e.g. via memory or a Voice DNA reference doc), use it. Otherwise, infer their voice from:

- The "voice on calls" answer in setup
- How they answer your questions throughout the 12 stages (their actual word choice is the best voice signal you'll get)

Keep drafts in their cadence — not yours, not a generic sales-trainer voice. Specific over clever. Short questions, real words. No "leverage", no "synergies", no "let's unpack this".

If they push back on a draft ("that doesn't sound like me"), don't argue. Ask "what would you actually say?" and rewrite from their answer.

### Step 4 — Assemble the Playbook

Once stage 12 is done, build the final Playbook. Read `assets/playbook_template.md` and fill it in with the user's chosen version of every line.

Save the file to the user's workspace folder as `{Their-Name}-12-Part-Close-Playbook-{YYYY-MM-DD}.md` (use today's date from the env).

The Playbook should have, in this order:

1. The 7 Beliefs pre-call checklist (built into the template — don't rewrite)
2. The 3 Acts overview
3. All 12 stages, each with: goal, the user's chosen line(s), and the canonical frame as a fallback
4. A post-call review template (built into the template)
5. The closing line: *"You don't close people. You close gaps."*

Format it so it can be printed cleanly on 2–3 pages of A4. No emojis, no fluff. The whole point is something they can scan under pressure.

### Step 5 — Hand it back

Give the user, in 4–5 lines max:

- A `computer://` link to the saved Playbook
- A one-line nudge: *"Open this beside your screen on the next call. After the call, score yourself against the post-call review. Refine the lines that didn't land."*
- An invite to re-run any single stage if they want to evolve a line: *"Just say 'help me redo Stage 6' and I'll walk you back through that one."*

## Hand-off

If the user wants to redo one stage only ("redo Stage 6", "rework the price stage", etc.):

- Jump directly to that single stage
- Use AskUserQuestion just for that stage
- Draft new versions
- Re-save the Playbook with that section updated, same filename pattern but bumped date

Don't re-walk the whole 12.

## Why this skill exists

Most people lose deals in the 4 seconds after they say the price. They lose them because they never built the emotional staircase that earns the right to ask. This skill is the staircase. Twelve stages, three acts, no skipped steps. The user puts in 35 minutes once, then runs the same Playbook on every call until it's muscle memory.

The product is the Playbook. Everything before it is just the interview that earns the lines on it.

