---
name: morning-content-brief
description: Set up (or update) a recurring scheduled task that delivers a fresh, current-events-based content brief every morning — 5 ready-to-post content ideas tailored to the user's niche, voice, and platforms. Use this skill whenever the user mentions a "morning content brief", "daily content ideas", "wake up with content ideas", "creator routine", "what should I post today", "post ideas based on the news", "daily creator brief", "content calendar autopilot", or any request to automate a recurring stream of post ideas from current events. Also use it if the user says they feel "overwhelmed by the news" and wants to turn that into content, or asks for a "scheduled task" that gives them content ideas. Don't use it for one-off content drafting (use marketing:draft-content) or for a single brainstorm without a schedule.
---

# Morning Content Brief

This skill installs a recurring scheduled task that wakes up every morning and gives the user 5 fresh content ideas based on current events in their niche.

The user typically encounters this skill from a short demo video — they want the same thing the demo showed: a button they press once, then content ideas waiting for them each morning.

## What this skill does in one run

1. Checks whether a `daily-content-brief` scheduled task already exists.
2. Gathers (or refreshes) the user's preferences: niche, voice/style, platforms, delivery time.
3. Creates (or replaces) the scheduled task with a carefully crafted prompt that will run daily.
4. Confirms back to the user when it'll fire and what they'll get.

The whole interaction should feel like one short setup — not a long interview. Keep it snappy.

## Step 1 — Check for an existing task

Call `mcp__scheduled-tasks__list_scheduled_tasks`. Look for a task with `taskId` of `daily-content-brief`.

- **If it exists:** ask the user "I see you already have a daily content brief set up. Want to update it (new niche, time, platforms) or leave it as-is?" If they want to update, continue. If not, stop and confirm the current schedule.
- **If it doesn't exist:** continue.

## Step 2 — Gather preferences

Ask the user these four things. Use the `AskUserQuestion` tool when available so they can click answers; otherwise ask in chat. Combine into as few turns as possible — ideally one turn with all four questions.

1. **Niche / topics** — what should the morning brief focus on? (e.g., "AI tools for solopreneurs", "fintech & startups", "fitness & longevity", "real estate investing"). Free text.
2. **Voice / style** — one short sentence describing how they sound. (e.g., "casual, builder-energy, lots of specifics; I'm Ross, an AI educator making short-form videos"). Free text. If they're stuck, offer to infer it from past posts they paste in.
3. **Platforms** — pick 1–3 from: LinkedIn, X / Twitter, Short-form video (TikTok / Reels / YouTube Shorts), Instagram, Threads, Blog / newsletter. Multi-select.
4. **Delivery time** — what local time should it run? Default suggestion: 7:00 AM, weekdays only. Let them pick a different time or "every day" if they prefer.

If the user wants to skip these and "just use sensible defaults," use: niche = "AI, tech, and builder culture", voice = "curious, specific, builder-energy, first-person", platforms = LinkedIn + X, time = 7:00 AM weekdays.

## Step 3 — Build the scheduled task prompt

This is the most important part of the skill. The prompt you create here is what Claude will see every morning — it has no memory of this conversation, so it must be fully self-contained.

Use the template under "Scheduled task prompt template" near the bottom of this file as your starting point. Substitute these four placeholders with what the user gave you in Step 2:

- `{{NICHE}}` — verbatim text describing topics
- `{{VOICE}}` — verbatim text describing voice/style
- `{{PLATFORMS}}` — comma-separated platform list
- `{{USER_FIRST_NAME}}` — if known from context (e.g., from the user's name in the env or earlier in the conversation), otherwise leave the greeting generic

Don't paraphrase the template body — it's been written to give the morning agent enough scaffolding to produce a strong brief from a cold start.

## Step 4 — Convert local time to a cron expression

Cron is evaluated in the user's local time (per the scheduled-tasks MCP docs), so no UTC conversion is needed.

- Weekdays at H:MM → `MM H * * 1-5`
- Every day at H:MM → `MM H * * *`
- Examples: 7:00 AM weekdays → `0 7 * * 1-5`. 6:30 AM every day → `30 6 * * *`.

## Step 5 — Create the scheduled task

Call `mcp__scheduled-tasks__create_scheduled_task` with:

- `taskId`: `daily-content-brief`
- `description`: `Daily morning content brief — 5 post ideas based on current events`
- `cronExpression`: the cron you built in Step 4
- `prompt`: the filled-in template from Step 3
- `notifyOnCompletion`: `true` (so the user gets pinged each morning)

If a task with that ID already exists and the user chose to update it, the tool may error on duplicate; in that case, vary the `taskId` slightly (e.g. `daily-content-brief-v2`) and tell the user the old one can be deleted from their Scheduled tasks list.

## Step 6 — Confirm back

Tell the user, briefly:

- That the task is set up
- When it'll run next (in plain English — "tomorrow morning at 7:00 AM" not "next cron tick")
- What they'll see each morning (5 content ideas, with hook + angle + a short draft for each, tied to that day's news in their niche)
- That they can run this skill again any time to change the niche, voice, platforms, or time

Keep this confirmation to 3–4 lines. Don't lecture about scheduled tasks.

## Why this skill exists

People who post content for a living burn a lot of energy every morning deciding *what* to post. The bottleneck isn't usually writing — it's the blank page paired with FOMO about whether they're riding the right wave. A daily brief that surfaces 5 specific, current-events-anchored ideas in their voice removes that decision tax. The user wakes up, scans 5 ideas, picks one, posts. That's the whole product.

Keep that goal in mind when filling out the template: the morning brief has to feel like a friend who reads the news for them and hands them ready-to-use angles, not a generic "here are some trends" summary.

---

## Scheduled task prompt template

Below is the verbatim template to use in Step 3. Substitute `{{NICHE}}`, `{{VOICE}}`, `{{PLATFORMS}}`, and `{{USER_FIRST_NAME}}` with the user's answers. Don't paraphrase the body — it's tuned for cold-start performance.

```
# Morning content brief — daily task

You are running as a scheduled task that fires once each morning. Your job is to deliver {{USER_FIRST_NAME}} a fast, scan-in-90-seconds content brief: **5 post ideas tied to today's news**, tailored to their niche, voice, and platforms.

This is a recurring task — you have no memory of the setup conversation. Everything you need is below.

## Their setup

- **Niche / topics:** {{NICHE}}
- **Voice / style:** {{VOICE}}
- **Platforms:** {{PLATFORMS}}

## What to do, in order

### 1. Find what happened in the last ~24 hours

Use `WebSearch` to pull 5–10 fresh items relevant to the niche. Vary the angle of your searches — don't just run one query. Mix:

- The biggest story in their niche today
- A counter-narrative or under-covered angle
- A new product / launch / funding / paper / release
- A surprising number or chart
- A spicy debate or hot take that's circulating

Use today's date in queries. Bias toward items dated within the last 24–48 hours. If something is more than ~3 days old, skip it — staleness kills the brief.

### 2. Score and pick the top 5

For each candidate item, ask:

- Is it specific (a named company, person, paper, number)? Generic trend pieces are weaker than concrete events.
- Will their audience care? Match it to the niche.
- Does it give a strong angle — a take, a contrarian view, a lesson, a relatable moment?
- Is there a fresh hook, not the obvious one everyone else is posting?

Pick 5. Don't include 5 versions of the same story. Aim for variety in story type and emotional register (one funny, one serious, one wonky, etc.).

### 3. Draft each idea

For every one of the 5, produce:

- **Hook** — the first line, written in their voice. This is the thing that stops the scroll. Specific, no throat-clearing, no "In today's fast-paced world."
- **Angle** — one sentence: what's their unique take or framing?
- **Platform fit** — which of their platforms it's best for, and why (e.g., "X — short and punchy, great for a 1-line take with a screenshot"; "LinkedIn — works as a 4-paragraph reflective post"; "Short-form video — has a visual: the chart").
- **Draft** — a ready-to-post draft sized for the chosen platform. Match their voice.
  - X / Twitter: ≤280 chars for single tweet, or a 3–5 tweet thread with each tweet ≤280 chars.
  - LinkedIn: 80–150 words, line breaks every 1–2 sentences, no hashtags unless their voice uses them.
  - Short-form video: a 15-second script — hook (3s), payoff (10s), CTA (2s).
  - Instagram / Threads: caption + visual suggestion.
  - Blog / newsletter: a 3-bullet outline, not a full post.
- **Source** — one link to the news item it's based on.

### 4. Format the brief

Output in this exact structure. Today's date is the actual date you're running on (use the env date you have access to, or pull it from `bash` with `date '+%A, %B %d'`).

----
# Morning brief — {{Day}}, {{Month Day}}

5 content ideas for today, based on what's happening in {{niche}}.

---

## 1. {{Punchy headline of the angle, ~6-9 words}}

**Hook:** {{first line of the post}}

**Angle:** {{one sentence}}

**Best for:** {{platform}} — {{why}}

**Draft:**
{{ready-to-post draft}}

**Source:** [{{title}}]({{url}})

---

## 2. ...

(repeat for 5)

---

## Bonus: today's wildcard

{{One offbeat / experimental idea — a meme, a personal story prompt, a question to the audience, or something out of left field. One paragraph.}}
----

End with a single line: `Pick one, post it, ship the day. — your morning brief`

## Tone & quality bar

- Write the drafts as if {{USER_FIRST_NAME}} wrote them — first person, their voice, their cadence.
- Avoid clichés: "In a world where…", "Game changer", "Let that sink in", "Here's the thing".
- Avoid generic AI tells: triadic "X, Y, Z" lists, "It's not just X — it's Y", "we don't just X, we Y".
- Specificity beats cleverness. A number, a name, or a quote always beats an adjective.
- If you can't find a strong, fresh, specific source for an idea, drop it and find another. 5 great ideas, not 7 mediocre ones — but you must deliver 5.

## If the news is thin today

If there genuinely isn't enough fresh news in the niche, fill the gap with:

- Evergreen angles tied to a *recent* (still within the week) item
- A "what people are getting wrong about X" post drawing on this week's discourse
- A behind-the-scenes / process post prompt they can fill in

Never pad with generic "5 tips for…" content. Better to deliver 3 strong ideas + a note about the slow news day than 5 weak ones.
```
