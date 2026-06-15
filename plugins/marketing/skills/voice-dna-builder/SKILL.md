---
id: voice-dna-builder
title: Voice DNA Builder
type: skill
category: brand
tags: [voice, brand, writing, style-guide, content]
ribbon: new
preview: Turn a handful of real posts and emails into a written Voice DNA document so every piece Claude writes sounds like the user wrote it.
version: 1.0.0
author: AI Powered
created: 2026-06-07
updated: 2026-06-07
---

# Voice DNA Builder

Most people can spot AI copy in two lines, and the reason is simple: nobody ever told the AI how they actually sound. A person's voice already exists in the things they have written. This skill finds it, names it, and writes it down with the receipts attached.

Telling Claude to write "friendly and conversational" produces the same friendly and conversational copy as everyone else, because adjectives describe a category and a voice lives in the specifics: the phrase they always open with, the sentence length they favour when making a point, the three words they would never use in a million years. This skill works from evidence instead. Every rule in the finished document is anchored to a real quote from the user's own writing, which means future drafts can be checked against actual patterns rather than a guess about what "friendly" means.

The job here is to act as an analyst, not a flatterer. Collect the samples, study them honestly, confirm the patterns with the user, then write the document. The whole thing takes about 20 minutes, and most of that is the user enjoying reading what Claude noticed about their own writing.

## When to use this skill

- Capturing your voice from real posts, emails, captions, or scripts
- Building a reusable Voice DNA document for future drafting
- Fixing AI copy that "doesn't sound like me"
- Creating a style guide anchored to your actual writing, not adjectives

## When NOT to use this skill

- Writing a single piece of content (use a drafting skill instead)
- Enforcing an existing voice guide that already exists
- Analysing someone else's voice without their samples

## How to run

### The deliverable

A single clean Markdown file saved to the user's workspace folder, named `[Name] Voice DNA.md`. From then on the user attaches it (or points a voice skill at it) whenever Claude writes anything for them: posts, emails, sales pages, scripts. It becomes the source of truth for how they sound.

The document always follows this structure, and every section beyond the header carries at least one verbatim quote from the user's samples as evidence:

```markdown
# [Name] Voice DNA

## Core principle
One paragraph capturing who they sound like when they write at their best.

## Tone and energy
The emotional register they naturally operate in. Quote.

## Sentence patterns
Rhythm, length mix, emphasis habits. Quote.

## Signature structural moves
How they open, build, and close a piece. Quote.

## Framing phrases
Phrases they use naturally, pulled straight from the samples. Quoted list.

## Anti-patterns
The specific structures and words that instantly stop sounding like them. Quote a "never" if they gave one.

## Vocabulary
Words they reach for, and words they would never touch.
```

A voice guide built from adjectives is a guess. A voice guide built from quotes is a record. If a section has no quote to stand on, it is a hypothesis, not a finding, so either find the evidence or flag it to the user instead of inventing it.

### Step 1: Collect the samples

Ask the user for 5 to 10 real pieces of their writing: LinkedIn posts, emails, captions, anything they wrote without overthinking it. More is better, and unpolished is better than polished, because the goal is how they actually sound rather than how they sound when performing. They can paste the text directly or point to files in the workspace.

If they offer fewer than five, take what they have but tell them the document will be thinner and the patterns less certain. If a sample is clearly ghostwritten or heavily edited by someone else, set it aside and say why.

### Step 2: Analyse before you ask

Read every sample closely and form your own view first, across these five lenses:

- **Tone and energy**: the emotional register. Warm, blunt, wry, urgent, measured? Where does the energy spike?
- **Sentence patterns**: do they run long and conjunction-led, or short and clipped? What is the length mix? How do they emphasise, with caps, italics, repetition, one-word lines?
- **Structure**: how do they open a piece, build it, and land the close? Do they hook with a question, a confession, a claim?
- **Framing phrases**: the recurring turns of phrase that show up across more than one sample. Pull the exact words.
- **Vocabulary**: the words they reach for, and any conspicuous absences.

Come to the interview with findings and the quotes that back them, not blank questions. The interview confirms and corrects what you already see; it is not a fishing trip. This is what separates a sharp document from a generic one.

### Step 3: Confirm the patterns with AskUserQuestion

Use the AskUserQuestion tool to confirm what you found and fill the gaps that reading alone cannot settle. Ask in small batches rather than one long interrogation, and lead with what you observed so the user is reacting to evidence. Cover at least these, adapting the options to what the samples actually show:

- **Tone read**: "From your samples you read as [X]. Does that land, or are you aiming for something different?" Offer the register you detected plus two plausible alternatives.
- **The swear-words question**: do they curse in their writing, never, or only for specific emphasis? This visibly changes every future draft, so always ask.
- **The emoji question**: emojis freely, sparingly, or never? Again, always ask, because getting it wrong is instantly noticeable.
- **The things-you'd-never-say question**: the words, phrases or structures that make them cringe when they see them in their own name. This populates the anti-patterns section and is often the single most valuable answer in the whole interview, so push for specifics. "Corporate buzzwords" is weak. "I'd never say 'leverage' or 'unlock'" is gold.
- **Any pattern you are unsure about**: if two samples disagree, ask which is the real them.

Keep each question genuinely a user decision. Do not ask things the samples already answer plainly.

### Step 4: Write the document

Assemble the file in the structure above. Rules for keeping it honest and useful:

- Anchor every claim to a quote. Pull the quote verbatim, including the user's own punctuation and casing, because that is the evidence.
- Write the core principle paragraph last, after the detail sections, so it actually summarises what you found rather than what you assumed going in.
- Make the anti-patterns section specific and ruthless. This is the section that does the most work at draft time, because it tells Claude what to delete.
- Mirror the user's own voice lightly in how you phrase the principles, but keep the document itself clear and scannable. It is a reference, not a performance.
- Save it to the workspace as `[Name] Voice DNA.md` and present the file to the user.

### Step 5: Tell them how to use it

Close by explaining the payoff plainly: they built this once, and now they load it every time Claude writes for them. Attaching the file, or pointing a voice skill at it, makes Claude check its draft against their real patterns rather than its idea of what "friendly" means, and the difference shows up in the first paragraph.

### A note on judgement

The user knows their own voice better than the samples can fully show, so when their answer in the interview contradicts what you read on the page, the interview wins, but it is worth gently noting the tension: "Interesting, because in these two posts you actually do the opposite. Want me to treat that as the exception or the rule?" That conversation is where the best findings come from.

## Hand-off

Deliver `[Name] Voice DNA.md` with a short note on how to attach it for future drafts. Offer to run a test paragraph in their voice if they want to sanity-check the document before they ship it.
