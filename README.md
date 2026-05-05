# AI Powered — Operating System

The canonical content repository for **The Vault** at [vault.aipowered.xyz](https://vault.aipowered.xyz).

This repo holds every plug-in, skill, and prompt we ship through the AI Powered ecosystem. It's content-only — markdown, JSON, no application code — and it's consumed at build time by the [`aipowered-vault`](https://github.com/rosspower11/aipowered-vault) dashboard.

> If you're looking for the dashboard you sign in to, that's [`aipowered-vault`](https://github.com/rosspower11/aipowered-vault). This repo is what feeds it.

---

## What's in here

```
aipowered-operating-system/
├── plugins/
│   ├── marketing/      → Content, SEO, social, brand
│   ├── sales/          → Outbound, pipeline, discovery, closing
│   ├── product/        → PRDs, research, roadmap, design
│   ├── engineering/    → Code review, architecture, debugging
│   ├── operations/     → Meetings, comms, planning, hiring
│   └── finance/        → Cashflow, taxes, investing, business finance
├── schema/             → Type definitions for plug-ins, skills, prompts
├── scripts/            → Validation tooling
├── .github/workflows/  → CI that validates content on every PR
└── …
```

Each **plug-in** is a folder with:

- `plugin.json` — metadata (id, name, description, categories, tier)
- `README.md` — what the plug-in does, when to install it
- `skills/` — one folder per skill, each containing a `SKILL.md`
- `prompts/` — one `.md` file per prompt

---

## The model

Three types of content live here, organised in a strict hierarchy:

| | What it is | Where it lives |
|---|---|---|
| **Plug-in** | A bundle of related skills and prompts (e.g. *Sales*) | `plugins/<plugin-id>/` |
| **Skill** | A reusable Claude skill following Anthropic's `SKILL.md` convention | `plugins/<plugin-id>/skills/<skill-id>/SKILL.md` |
| **Prompt** | A standalone, copy-paste prompt | `plugins/<plugin-id>/prompts/<prompt-id>.md` |

Every skill and prompt is tagged with a **category** that must exist in its parent plug-in's `categories` array. Categories are how the dashboard's filters work.

---

## How to add content

The full guide is in [CONTRIBUTING.md](./CONTRIBUTING.md). The short version:

### Add a new prompt

1. Pick the right plug-in (`marketing`, `sales`, `product`, `engineering`, `operations`)
2. Create a new file: `plugins/<plugin>/prompts/<your-prompt-id>.md`
3. Copy the frontmatter template from `CONTRIBUTING.md`
4. Write the prompt body in markdown
5. Run `pnpm validate` to confirm it passes
6. Commit, push, open a PR

### Add a new skill

1. Pick the right plug-in
2. Create a new folder: `plugins/<plugin>/skills/<your-skill-id>/`
3. Inside it, create `SKILL.md` with the right frontmatter
4. Run `pnpm validate`
5. Commit, push, open a PR

### Add a new plug-in

Don't — without proposing it first. Plug-ins are top-level taxonomy and shouldn't proliferate. Open an issue with the proposed plug-in name, description, and categories before creating one.

---

## Frontmatter schemas

Every skill and prompt starts with YAML frontmatter that the validator and dashboard both rely on. **Get this right or your PR fails CI.**

### `SKILL.md`

```yaml
---
id: aipowered-cold-email-architect   # kebab-case, prefixed with aipowered-, must match folder name
title: Cold Email Architect          # display name
type: skill                          # literal "skill"
category: outbound                   # must exist in plugin.json categories
tags: [b2b, outbound, sequences]     # array of strings
ribbon: new                          # null | "new" | "trending"
preview: A skill that writes…        # 1-sentence summary shown on cards
tier: free                           # "free" | "pro" | "accelerator"
version: 1.0.0                       # semver
author: AI Powered                   # who wrote it
created: 2026-05-05                  # ISO date
updated: 2026-05-05                  # ISO date
---
```

### Prompt `.md`

Same fields, but `type: prompt` and the file lives directly in `prompts/<id>.md`, not in a subfolder.

---

## Validation

Every change is validated automatically. The validator checks:

- **Schema** — frontmatter and `plugin.json` match the Zod definitions in `/schema`
- **Cross-references** — every item's `category` exists in its parent plug-in's `categories` array
- **ID uniqueness** — no two skills or prompts share an `id` across the whole repo
- **Folder/file naming** — folder names and file names must match the `id` in frontmatter

Run it locally before pushing:

```bash
pnpm install
pnpm validate
```

CI runs the same check on every push and pull request via GitHub Actions. PRs that fail validation will not be merged.

---

## Style guide

The Vault is opinionated. Content should feel like it was written by a thoughtful operator, not a content farm.

- **Be specific.** "Generate a cold email" is weak. "Generate a 110-word cold email using the Loom-Hook-CTA structure" is strong.
- **Show, don't pad.** Examples > explanations. If you can demonstrate it inline, do.
- **No filler.** Cut every "in today's fast-paced world" and "leverage cutting-edge AI." Strunk and White, not LinkedIn.
- **Voice.** Direct, confident, no hedging. The user came here because they trust we know what works.
- **Length.** Skills: 300–700 words of body. Prompts: 100–400 words. Longer means you're explaining instead of doing.
- **Tested.** Every prompt and skill has been run through Claude end-to-end before being committed. No theoretical content.

---

## Tiers

Tier gating happens at **two levels**:

- **Plug-in tier** (`plugin.json` → `tier`) — the minimum tier required to see the plug-in card at all.
- **Skill / prompt tier** (frontmatter → `tier`) — the minimum tier required to open that specific skill or prompt.

| Tier | Who can use it | Notes |
|---|---|---|
| `free` | Anyone with a vault account | The acquisition surface |
| `pro` | Paying members | The depth of the toolkit lives here |
| `accelerator` | AI Powered Accelerator members | Cohort-only |

Today, every plug-in is `free` (so all 6 cards are visible to everyone), and inside each plug-in we run a **3 free / 7 pro split** on skills — the 3 most foundational hook free users, the rest unlock with membership. Tier enforcement is the dashboard's job, not this repo's.

---

## Releases

This repo follows **rolling releases** — every merged PR ships to the dashboard on the next deploy (the dashboard rebuilds nightly and on every push). There are no version tags on this repo. Individual skills and prompts have their own `version` field in frontmatter for tracking changes.

When making a meaningful change to an existing skill or prompt, **bump its `version` and update `updated`**. This is how the dashboard surfaces "recently updated" badges.

---

## License

MIT. See [LICENSE](./LICENSE).

You're free to fork, adapt, and remix this content for your own use. If you build something cool with it, [tell us](mailto:ross@aipowered.xyz) — we love to see it.

---

## About AI Powered

[AI Powered](https://aipowered.xyz) is a hands-on accelerator for operators learning to build with Claude. The plug-ins in this repo are the same ones we use in cohort, refined over hundreds of real workflows.

Three ways to plug in:

- **The Vault** — every plug-in we ship, free for cohort members and signed-in users → [vault.aipowered.xyz](https://vault.aipowered.xyz)
- **The Accelerator** — 8-week cohort to build your own AI-powered systems → [accelerator.aipowered.xyz](https://accelerator.aipowered.xyz)
- **This repo** — fork it, learn from it, contribute back

---

## Maintainers

- [@rosspower11](https://github.com/rosspower11) — Founder, AI Powered

Questions? [Open an issue](https://github.com/rosspower11/aipowered-operating-system/issues) or email [ross@aipowered.xyz](mailto:ross@aipowered.xyz).
