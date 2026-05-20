---
id: hook-builder
title: Hook Builder
type: skill
category: content
tags: [hooks, video, short-form, social, scroll-stopper]
ribbon: new
preview: Interview you about your video, generate 5 rated hook options, then refine your pick into 3 sharper variants.
version: 1.0.0
author: AI Powered
created: 2026-05-20
updated: 2026-05-20
---

# Hook Builder

This skill turns a vague "I need a hook" into 5 rated hook options and one refined winner. The user has a video they want to post — or a piece of content they're scripting — and the opening line is the difference between someone watching for 8 seconds versus 0.8.

The whole flow takes about 4–6 minutes. Interview, generate, rate, refine.

Use this skill whenever the user mentions a "hook", "video hook", "opening line", "first 3 seconds", "first 5 seconds", "thumbnail copy", "post opener", "scroll-stopper", "TikTok hook", "Reels hook", "Shorts hook", "LinkedIn hook", "YouTube hook", or asks for help making content "stop the scroll" or "improve hook rate". Also triggers if the user pastes a draft hook for feedback, asks for "5 hooks for this video", or wants to A/B their opener.

## What this skill does in one run

1. Quick frame: 1–2 lines explaining what's about to happen.
2. Interview the user (one AskUserQuestion turn with 4 questions) about the video, the platform, the audience, and the vibe.
3. Generate 5 distinct hook options for that exact video, each in a different stylistic register.
4. Rate every hook out of 5 across 5 categories — Curiosity, Specificity, Emotion, Stakes, Pattern Break — with a one-line reason per score.
5. Ask which hook the user wants to take forward.
6. Refine that hook into 3 sharper variants (tighter, more specific, more pattern-breaking).
7. Hand back the final picks plus a one-line nudge to test them.

## Step 0 — Open with the frame

Before any questions, write 3–4 lines so the user knows what they're getting into:

> Let's build your hook. I'll ask you a few quick things about the video, then generate 5 hook options and rate each one out of 5 across Curiosity, Specificity, Emotion, Stakes, and Pattern Break. You pick your favourite, I'll sharpen it into 3 variants. Ready?

If the user already gave context up-front ("here's the video — it's about X"), skip the warm-up and go straight to interview.

## Step 1 — Interview (one AskUserQuestion turn, 4 questions)

Use AskUserQuestion once. Stack four questions in a single turn so the user clicks through quickly:

1. **What's the video about?** — free text (one sentence is fine).
2. **What platform is this for?** — Short-form video (TikTok / Reels / YouTube Shorts) / LinkedIn / X-Twitter / Instagram (carousel or feed) / YouTube long-form / Newsletter or blog / Other.
3. **Who's the audience?** — Founders / Coaches & consultants / Operators & corporate / Creators & marketers / General consumer / Other.
4. **Vibe?** — Bold and direct / Curious and intriguing / Funny and disarming / Story-led and personal / Authoritative and crisp / Other.

If the user gave you any of these already in their opening message, pre-fill those answers in your head and only ask the missing ones.

## Step 2 — Generate 5 hooks

Draft 5 distinct hooks for this exact video. Each one should pull a different lever — don't deliver 5 versions of the same idea. Spread the hooks across these patterns so the user sees real variety:

1. **Contrarian / pattern break** — the opposite of what people in their niche say.
2. **Specific number / metric** — a sharp, concrete data point or proof.
3. **Story-led** — drop them mid-scene, in a moment.
4. **Question / curiosity gap** — opens a loop their brain has to close.
5. **Promise / payoff** — tells them exactly what they'll get and why it matters.

Each hook should:
- Be 1–2 sentences, max ~25 words. For short-form video, aim for ≤15 words.
- Fit the platform. (LinkedIn hooks can be punchy first lines or open-loop reflections. TikTok/Reels hooks have to land in 3 seconds. X hooks need to fit one screen.)
- Be specific. A name, a number, a quote, a moment — almost always beats an adjective.
- Be in the vibe the user picked.

Avoid these failure modes (they kill hook rate every time):

- "In a world where…", "Let me tell you about…", "Today I want to talk about…", "Here's the thing…", "What if I told you…", "Most people don't know this but…", "Let that sink in".
- Generic openers that could attach to any video. If you could swap your hook into a different video and it still works, it's too generic.
- Triadic AI tells: "X, Y, Z", "It's not just X — it's Y", "we don't just X, we Y".
- Cliché contrast flips like "not X, it's Y".

## Step 3 — Rate every hook

For each of the 5 hooks, score these 5 categories out of 5 and write a one-line reason for each score. Be honest. If a hook scores a 2 on Specificity because it has zero proof in it, say so.

| Category | What it measures |
| --- | --- |
| **Curiosity** | Does it open a loop the viewer's brain has to close? Could you stop scrolling without seeing what's next? |
| **Specificity** | Is there a number, name, place, quote, or concrete detail? Or is it abstract and floaty? |
| **Emotion** | Does it pull at something — frustration, hope, fear, pride, surprise? Or is it flat? |
| **Stakes** | Is there a clear "what's at risk if I don't watch this"? Time, money, identity, opportunity? |
| **Pattern Break** | Does it look different from what everyone else in this niche is posting? Or is it the obvious opener? |

Present the results as a clean Markdown table the user can scan in 30 seconds. Format:

```
## Your 5 hooks

| # | Hook | Curiosity | Specificity | Emotion | Stakes | Pattern Break | Total |
|---|------|-----------|-------------|---------|--------|---------------|-------|
| 1 | "..." | 4 | 5 | 3 | 4 | 5 | 21/25 |
| 2 | ... | ... | ... | ... | ... | ... | ... |
```

Then directly underneath the table, write a short breakdown — for each hook give a 1-line "why this scored what it scored" so the ratings have receipts.

Don't be tempted to inflate scores to be polite. If 3 of the 5 hooks score 12/25, say so and explain why — that's how the user learns to write better ones.

## Step 4 — Ask which hook they want to refine

Use AskUserQuestion with one question:

> *Which hook do you want to refine into 3 sharper variants?* — Hook 1 / Hook 2 / Hook 3 / Hook 4 / Hook 5 / I want to try a totally different angle / Other.

If they pick "totally different angle", ask them to describe the angle in one sentence and generate 3 fresh hooks in that direction (skip Step 5 below — go straight to refinement on the new ones).

## Step 5 — Refine the winner into 3 variants

Take the chosen hook and produce 3 variants that each push it harder on a specific axis:

- **Variant A — tighter.** Cut every word that isn't pulling weight. Same idea, fewer syllables, sharper rhythm.
- **Variant B — more specific.** Add a number, a name, a quote, a moment that makes it impossible to swap into another video.
- **Variant C — bigger pattern break.** Reframe it so it lands more contrarian, more surprising, or more visually pattern-disrupting on the feed.

For each variant, write one line explaining what you changed and why — so the user can see the move, not just the output.

## Step 6 — Hand it back

Close with 3–4 lines max:

- Recap the top hook + 3 variants in a clean block they can copy.
- A nudge: *"Pick one, post it, watch the first 5 seconds of retention. If hook rate is under 30%, run this skill again and try a different lever — usually Specificity or Pattern Break is the unlock."*
- Optional next step: *"Want me to write the next 5 seconds of script around this hook? Just say the word."*

Don't add long postamble. The hooks are the product.

## Voice handling

If the user has Voice DNA loaded (memory, attached doc, or prior conversation), match it. Otherwise, infer voice from how they answered the interview and from their video description.

Specifics over abstractions. Real words over corporate words. Short questions land harder than long statements. No em dashes — use commas, periods, colons, or parentheses instead.

## Why this skill exists

Hook rate is the single biggest lever on whether content compounds. Every other variable — script, edit, CTA, even the algorithm itself — is downstream of "did they stop scrolling?". Most creators spend 90% of their effort on the 10% of the video almost nobody watches, because they spent 30 seconds on the first line.

This skill flips the ratio. It puts a coach in the room for 5 minutes who's seen what works, gives the user 5 angles instead of 1, scores them honestly, and refines the winner. After 10–20 runs, the user starts internalising the patterns — and that's when their hook rate compounds.
