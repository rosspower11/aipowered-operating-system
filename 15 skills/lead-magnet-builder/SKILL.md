---
name: lead-magnet-builder
description: Recommend and build a full lead magnet from a short interview about the user's audience and paid offer. Picks the best-fit format (checklist, mini-guide, template, or 5-email mini-course), drafts the strategy first for user approval, then writes the full lead magnet content as a .docx plus opt-in landing page copy and a launch social post. Use this skill whenever the user mentions a "lead magnet", "freebie", "opt-in", "free download", "PDF download", "email list builder", "list growth", "grow my email list", "warm up my audience", "newsletter signup bribe", "free guide", "free checklist", "free template", "free mini-course", "free training", "starter pack", "tripwire", "build a funnel", "nurture sequence", or asks "what should I give away to get emails", "what freebie should I make", "how do I convert followers into subscribers", "how do I turn my followers into paying customers", or any request to monetize an audience through a giveaway. Also triggers if the user already has a paid offer and wants something to put in front of it. Not for paid product creation (use a course builder skill instead) or for cold outreach lead lists (use apollo:prospect).
---

# Lead Magnet Builder

This skill turns "I need to grow my list" into a finished lead magnet, a landing page, and a launch post, in about 15 minutes. The user describes their audience and their paid offer, the skill picks the format most likely to convert into that offer, drafts the strategy for approval, then writes the whole thing.

The flow has two halves: **strategy first**, then **full draft**. The user approves the angle before any long-form writing happens, so they're never rejecting 8 pages of finished content.

## What this skill does in one run

1. Quick frame: explain the two-stage flow and what they'll walk away with.
2. Interview about the audience and the paid offer (one AskUserQuestion turn, 4–5 questions).
3. Recommend the best-fit lead magnet format with a one-paragraph "why".
4. Confirm or let the user override the format choice.
5. Draft the full lead magnet as a .docx in the user's workspace.
6. Generate opt-in landing page copy (headline, subhead, 3–5 bullets, CTA button text).
7. Generate one launch social post (matched to a platform the user names).
8. Hand back all three artefacts with a one-line nudge on what to do next.

## Step 0 · Open with the frame

Before any questions, write 3–4 lines:

> Let's build your lead magnet. I'll ask you about your audience and your paid offer, then recommend the format most likely to convert. You approve the angle, I write the full thing: lead magnet, landing page copy, and one launch post. About 15 minutes start to finish. Ready?

If the user already named their audience and offer in the opening message, jump to Step 1 with what you have and only ask the missing pieces.

## Step 1 · Interview (one AskUserQuestion turn)

Use AskUserQuestion once, stacked questions:

1. **Who's your audience?** (free text, be specific. "Founders" is too broad. "Bootstrapped SaaS founders doing $0–$50k MRR who handle their own sales calls" is what you want.)
2. **What's the paid offer this lead magnet feeds into?** (free text, name + price point + what it actually does. e.g. "Closer's Playbook, £1,200, group programme that teaches a 12-stage closing call script")
3. **What's the one transformation the audience is trying to make?** (Save time / Make more money / Get clients / Build skills / Quit a job / Other)
4. **What platforms will you promote this on?** (LinkedIn / X / Short-form video / Instagram / Email / Other), multi-select
5. **Any constraints?** (free text, optional, e.g. "must be readable in 5 minutes", "must fit on 1 page", "I already have a 50-email list, want to triple it", "need it ready by Friday")

If the user just says "I want a lead magnet" with no context, ask all 5 in one turn. If they've already given you any, skip those.

## Step 2 · Recommend a format

Based on their answers, pick the format most likely to convert into their paid offer. Use this matching logic, but explain your reasoning in your own words. Don't just paste the table.

| Audience trait | Best-fit format | Why |
| --- | --- | --- |
| Time-poor operators, decision-makers, executives | **Checklist / 1-page PDF** | Skimmable in 90 seconds, high perceived value, low cognitive load, converts because they get the "win" instantly |
| Aspiring practitioners who want to learn a skill | **Mini-guide / playbook** (5–10 pages) | Builds authority, demonstrates depth, audience feels they've already learned something before they buy |
| People copying what works (creators, founders building) | **Template / swipe file / framework** | Reusable asset, gets bookmarked, audience builds dependency on your stuff |
| Audiences with a longer consideration cycle (B2B, high-ticket) | **5-email mini-course** | Builds trust over a week, lets you sell on email 5, dramatically higher LTV than single-asset magnets |

**Default if torn:**
- If paid offer is **under £500 / $500**, lean toward checklist or template (low-friction match).
- If paid offer is **£500 / $500 to £3,000 / $3,000**, lean toward mini-guide.
- If paid offer is **above £3,000 / $3,000**, lean toward mini-course (5 emails). The trust ladder needs more rungs.

Write 1 paragraph (~4–6 lines) explaining:
- Which format you picked
- Why it fits this specific audience and offer
- What the audience will get out of it
- What it sets up for the paid offer

## Step 3 · Confirm the format

Use AskUserQuestion with one question:

> *Going with [format]? Or want a different one?*, Yes, build it / Build it as a [other format] instead / Show me what 2 formats would look like side-by-side / Other

If "side-by-side", briefly outline what each would look like (3-bullet outline each), then re-ask.

## Step 4 · Draft the full lead magnet

Generate the full content as a .docx in the user's workspace folder. Read the docx skill if available in the environment for how to build the Word document.

Format the content per the chosen type:

### Checklist / 1-page PDF
- A sharp title that names the outcome ("The 7-Step Pre-Call Checklist Every Closer Runs Before Dialing")
- 1-sentence sub-headline explaining who it's for and what they'll get
- 5–10 numbered checkboxes, each with a 1–2 sentence explanation of why it matters and how to do it
- 1 closing line that bridges to the paid offer ("If this helped, the full Closer's Playbook walks you through all 12 stages. Link in bio")
- Designed to fit on a single page when printed

### Mini-guide / playbook (5–10 pages)
- Cover page with title + sub-headline + your name
- Page 2: "Who this is for". A 3-bullet specific reader profile
- 4–6 chapters, each 1 page, each with: a sharp section title, the core teaching point in 2–3 paragraphs, 1 example, and 1 "your turn" prompt
- Final page: bridge to the paid offer + 1 specific CTA

### Template / swipe file / framework
- A clearly-named framework or template (e.g. "The PASTA Hook Framework", "10 Cold Email Templates That Closed $250k of Deals")
- For each piece (template, hook, prompt, etc.): the asset itself + 2–3 sentences on when and how to use it
- 1 "how to use this whole pack" intro
- 1 closing CTA to paid offer

### 5-email mini-course
- Email 1: Welcome + the big problem + the promise (what they'll learn in 5 days)
- Email 2: Foundational concept / mindset shift
- Email 3: The framework / method itself
- Email 4: Common mistakes + how to avoid them
- Email 5: Case study or transformation + soft pitch to the paid offer

Each email should be 200–350 words, in the user's voice. Open with a sharp hook, deliver one teaching point, close with what's coming next (and on email 5, the CTA).

## Style standards across all formats

- Write in the user's voice if loaded (memory, attached doc, prior conversation). Otherwise infer from how they answered the interview.
- Specifics beat clichés. A number, a name, a real moment > an adjective every time.
- No "in a world where", "here's the thing", "let that sink in", "what if I told you", "most people don't realise this but".
- No em dashes. Use commas, periods, colons, or parentheses.
- No emojis in the body. (One in the headline is OK only if it serves the message.)
- Active voice. Short paragraphs. Real sentences over jargon constructions.

## Step 5 · Generate the opt-in landing page copy

After the lead magnet itself, write the landing page copy as a structured block. Include:

1. **Headline** (8–12 words, outcome-focused, names the audience or their pain). 3 variants so the user can pick.
2. **Subhead** (1–2 sentences, expands on the promise, adds specificity).
3. **3–5 bullets** of what's inside / what they'll get / what they'll be able to do after.
4. **CTA button text** (3 short, action-led options, e.g. "Get the playbook", "Send me the checklist", "Start the 5-day course").
5. **One-line trust nudge** (optional. e.g. "Used by 2,400 founders" or "Free, no email follow-up spam").

## Step 6 · Generate one launch social post

Pick the user's primary platform from their answer to question 4. Write one full launch post in the right format:

- **LinkedIn**: 5–8 short paragraphs, first line is the hook, last line is the CTA. Includes 1 specific number or proof point.
- **X**: Either a single tweet ≤280 chars or a 5-tweet thread, first tweet is the hook, last tweet is the CTA.
- **Short-form video script**: 15-second script with hook (3s) + payoff (10s) + CTA (2s). Use the format `[0:00–0:03] hook line | [0:03–0:13] payoff | [0:13–0:15] CTA`.
- **Instagram caption**: 4–6 short paragraphs + CTA, suggest 1 visual (carousel cover or first-slide hook).
- **Email** (if user picked email as primary): a 150-word announcement to their existing list.

If the user picked multiple platforms, default to the first one and offer to generate the others if they want.

## Step 7 · Hand back

Close in 5–6 lines max:

- `computer://` link to the saved lead magnet .docx
- The landing page copy as an inline block they can copy-paste
- The launch social post as a clean block
- A one-line nudge: *"Ship the lead magnet. Post the launch tomorrow. After 50 downloads, run this skill again to test a different format. Sometimes the same audience converts 3x better on a checklist than a guide, or vice versa."*
- Optional next step: *"Want the next 4 emails in the nurture sequence after they download? Just say the word."*

Don't add postamble. The artefacts are the product.

## When the user wants to remix

If the user comes back and says "make the checklist into a mini-guide" or "give me a 5-email version of this":

- Read the existing .docx
- Keep the same core teaching content
- Re-shape it into the new format following the standards in Step 4
- Re-save as `[Title]-[NewFormat]-vN.docx`

Don't regenerate from scratch unless they explicitly ask.

## Why this skill exists

Most creators with engaged audiences don't have an email list because they froze on what to give away. They've got the expertise. They've got the followers. They just keep iterating on the wrong format: a 30-page ebook nobody reads, or a 1-line "subscribe to my newsletter" that converts at 0.4%.

The lead magnet itself is downstream of two things: *who the audience is* and *what the paid offer is*. Get those right and the format almost picks itself. This skill captures both in 5 questions and writes the whole asset (magnet, landing page, launch post) in one go.

The product is the funnel-in-a-folder, not the chat. After 2–3 runs the user starts internalising the matching logic and writes magnets that actually convert, instead of magnets that look like everyone else's.
