# Contributing

This repo is the source of truth for everything that shows up in [The Vault](https://vault.aipowered.xyz). Every PR is validated by CI. PRs that fail validation will not be merged.

This guide is the short version. For the *why* behind the structure, read the [README](./README.md).

---

## Before you start

1. Make sure you have Node 20+ and pnpm 9+.
2. Clone the repo and run:

```bash
pnpm install
pnpm validate
```

If validation passes on a clean clone, you're good to go.

---

## What kind of change are you making?

| Change | Process |
|---|---|
| New prompt | Create file → frontmatter → body → PR |
| New skill | Create folder → `SKILL.md` → frontmatter → body → PR |
| Edit existing skill or prompt | Edit body → bump `version` → update `updated` → PR |
| New plug-in | **Open an issue first.** See below. |
| New category inside a plug-in | Edit `plugin.json` and reference it from at least one skill or prompt in the same PR |

---

## Adding a prompt

1. Pick the plug-in your prompt belongs in (`marketing`, `sales`, `product`, `engineering`, `operations`).
2. Pick a kebab-case `id` for the prompt. Examples: `cold-email-architect`, `pricing-page-rewriter`. Keep it specific.
3. Create the file at `plugins/<plugin>/prompts/<id>.md`.
4. Paste this template and fill it in:

```markdown
---
id: your-prompt-id
title: Your Prompt Title
type: prompt
category: one-of-the-plugin-categories
tags: [tag1, tag2, tag3]
preview: One sentence describing what this prompt does. Shown on cards.
version: 1.0.0
author: Your Name (or "AI Powered")
created: 2026-05-05
updated: 2026-05-05
---

You are a [specific role with credibility]. You [what you do well, in one line].

I'll give you [inputs]. You'll [output].

**Inputs:**
- [Input 1]: [INSERT]
- [Input 2]: [INSERT]

**Rules:**
1. [Specific rule]
2. [Specific rule]

**Output format:**
[The shape of the output, in detail]
```

5. Run `pnpm validate`.
6. Commit, push, open the PR.

---

## Adding a skill

1. Pick the plug-in.
2. Create a folder at `plugins/<plugin>/skills/<your-skill-id>/`. The folder name must equal the `id` in frontmatter.
3. Inside it, create `SKILL.md`. Paste this template and fill it in:

```markdown
---
id: your-skill-id
title: Your Skill Title
type: skill
category: one-of-the-plugin-categories
tags: [tag1, tag2, tag3]
ribbon: null   # or "new" or "trending"
preview: One sentence describing the skill. Shown on cards.
version: 1.0.0
author: Your Name (or "AI Powered")
created: 2026-05-05
updated: 2026-05-05
---

# Your Skill Title

[One paragraph: what the skill does and the kind of work it's used for.]

## When to use this skill

[Bulleted list of 3–5 concrete situations.]

## When NOT to use this skill

[Bulleted list of 2–4 anti-cases. This is more important than people think.]

## How to run

[Step-by-step instructions for how the skill operates. Use numbered phases or sub-headers. Be opinionated.]

## Hand-off

[How the skill ends — what to deliver, what to offer next, when to stop.]
```

4. Run `pnpm validate`.
5. Commit, push, open the PR.

---

## Adding a plug-in

Don't, without proposing it first.

Plug-ins are top-level taxonomy. Adding one is a strategic decision and should be debated, not snuck in via PR.

To propose a plug-in:

1. [Open an issue](https://github.com/rosspower11/aipowered-operating-system/issues) titled `proposed plug-in: <name>`.
2. In the issue body, include:
   - One-sentence description (the same shape as existing plug-in descriptions in `plugin.json`)
   - Proposed categories (3–5)
   - Three skills and three prompts you'd ship in the first cut
   - Why this isn't covered by an existing plug-in

If approved, you'll be invited to open a PR.

---

## The validator — what it checks

`pnpm validate` runs `scripts/validate.ts`, which:

1. Parses every `plugins/*/plugin.json` and validates against `schema/plugin.schema.ts`.
2. Parses every `SKILL.md` frontmatter and validates against `schema/skill.schema.ts`.
3. Parses every prompt frontmatter and validates against `schema/prompt.schema.ts`.
4. Checks that each skill/prompt's `category` matches one in its parent plug-in's `categories` array.
5. Checks that every `id` is unique across all skills and prompts.
6. Checks that folder names and filenames match the `id` field.

If anything fails, you'll see a list of issues with file paths and line-level reasons. Fix and re-run.

---

## Style guide (read before writing)

This is what separates Vault content from generic AI content.

### Voice

- **Direct.** No hedging. No "you might consider…" If you mean "do X", say "do X."
- **Specific.** Replace abstractions with concrete examples. "Improve clarity" → "cut every sentence that doesn't change the reader's mind."
- **Operator's voice.** Written by someone who's actually done the job. The reader can tell.
- **No LinkedIn-isms.** No "leverage", "synergy", "operationalise", "in today's fast-paced world."

### Structure

- Skills should follow the section order: when to use → when NOT → how to run → hand-off. Don't reorder.
- Prompts should follow: role → inputs → rules → output format. Don't reorder.
- Use tables when the content is comparative. Use bullets when the order matters. Don't use prose for what's obviously a list.

### Length

- **Skills**: 300–700 words of body (excluding frontmatter). Longer means you're explaining instead of doing.
- **Prompts**: 100–400 words. If a prompt is over 400 words, it's a skill in disguise.

### Testing

- Run every skill and prompt through Claude end-to-end at least twice before opening the PR.
- If a prompt has `[INSERT]` placeholders, run it once with realistic inputs and once with edge-case inputs (empty, vague, contradictory).
- If the output is bad, fix the prompt — don't ship it and hope.

---

## When CI fails

Read the GitHub Actions log. The validator prints exact file paths and what's wrong. Common failures:

- `id "X" does not match folder "Y"` — folder name and frontmatter `id` are out of sync. Rename one.
- `category "X" not declared in plugins/.../plugin.json` — you used a category that doesn't exist. Add it to `plugin.json` or use one that's already there.
- `duplicate skill id "X"` — another skill already uses this id. Pick a different one.
- `must be ISO date (YYYY-MM-DD)` — `created` or `updated` is not in `YYYY-MM-DD` format.

---

## Questions

Open an issue or email [ross@aipowered.xyz](mailto:ross@aipowered.xyz).
