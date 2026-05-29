---
id: contract-builder
title: Contract Builder
type: skill
category: planning
tags: [contracts, legal-ops, agreements, sow, nda]
ribbon: new
preview: Generate a clean, ready-to-send contract draft by interviewing the user on contract type and deal-specific terms.
version: 1.0.0
author: AI Powered
created: 2026-05-28
updated: 2026-05-28
---

# Contract Builder

This skill turns "I need to send them a contract" into a ready-to-edit Word document in under 10 minutes. The user picks (or names) the contract type, answers 4-6 short questions about the specific deal, and Claude writes a clean draft they can polish in 5 minutes and send.

The whole flow takes about 8-12 minutes. Path selection, interview, drafting, .docx delivery.

## What this skill does in one run

1. Quick frame: explain what's about to happen and what the output will be.
2. Ask which contract type they need (one AskUserQuestion turn).
3. Branch into the right interview, 4-6 questions specific to that contract type.
4. Draft the full contract in clean legal-business prose.
5. Save it as a .docx in the user's workspace folder using the `docx` skill.
6. Hand back the file link plus a 1-line nudge about what to do next.

The output is a **clean draft** - no legal disclaimer, no "this is not legal advice" boilerplate, no track-changes scaffolding. Just the document, ready to go.

## Step 0 - Open with the frame

Before any questions, write 3-4 lines:

> Let's get your contract written. I'll ask you which type you need, then 4-6 short questions about the specific deal, then drop a clean Word document into your workspace folder. About 8-10 minutes. Ready?

If the user already named the contract type in their message ("draft me an NDA for X"), skip Step 1 and jump straight to the right interview.

## Step 1 - Pick the contract type

Use AskUserQuestion once, one question:

> *Which contract do you need?*
> - Client Services Agreement (you delivering work to a client)
> - Independent Contractor Agreement (someone delivering work to you)
> - Statement of Work / SOW (project-specific scope under a master agreement)
> - Mutual NDA (before deeper conversations)
> - Other (you describe it)

If they pick "Other", ask one free-text question to capture what they actually need, then assemble the right hybrid of the four templates below.

## Step 2 - Run the right interview

Each path below has its own 4-6 question interview. Stack the questions in a **single AskUserQuestion turn** so the user clicks through fast. The interviews are deliberately tight - they catch ~80% of cases. Edge cases the user fills in by editing the .docx afterwards.

### Path A - Client Services Agreement

Ask in one turn:

1. **What's the project / engagement called?** (free text - e.g. "Q4 Brand Refresh", "Ongoing AI Strategy Retainer")
2. **Who are the two parties?** (free text - provider legal name + client legal name + state/country of each)
3. **Scope of work in one paragraph.** (free text - what you're delivering, in plain language)
4. **Fee + payment terms?** (free text - e.g. "$15,000, 50% upfront / 50% on delivery" or "$8,000/month, net-14")
5. **Term / duration?** (3 months / 6 months / 12 months / Open-ended with notice / Other)
6. **Anything specific to flag?** (free text - e.g. "I want to retain rights to the methodology", "client owns final deliverables only", "30-day exit clause")

Draft sections to include: Parties, Engagement, Scope of Services, Fees & Payment, Term & Termination, IP & Ownership, Confidentiality, Limitation of Liability, Governing Law, Signatures.

### Path B - Independent Contractor Agreement

Ask in one turn:

1. **Who's the contractor and who's hiring them?** (free text - both legal names + locations)
2. **What's the contractor delivering?** (free text - role + main deliverables)
3. **Rate + payment cadence?** (free text - e.g. "$5,000/month, paid on the 1st" or "$120/hour, invoiced monthly")
4. **Duration / commitment?** (Fixed end date / Rolling monthly with 30-day notice / Project-based until deliverables complete / Other)
5. **Who owns the work product?** (Hiring party owns everything / Contractor retains methodology, client owns deliverables / Joint / Other)
6. **Any non-compete, non-solicit, or exclusivity clauses?** (None / Non-solicit of clients only / Non-compete in defined market / Other)

Draft sections: Parties, Engagement & Independent Contractor Status, Services, Compensation, Term & Termination, IP Assignment, Confidentiality, Non-Solicit / Restrictive Covenants (if any), Indemnification, Governing Law, Signatures.

### Path C - Statement of Work (SOW)

Ask in one turn:

1. **What master agreement does this sit under?** (free text - name + date of MSA, or "none, this is standalone")
2. **Project name + 1-line description.**
3. **Specific deliverables with acceptance criteria.** (free text - list them as bullets, each with "done when...")
4. **Timeline + key milestones.** (free text - start date, end date, milestone dates)
5. **Fees for this SOW.** (free text - total + payment schedule tied to milestones)
6. **Out-of-scope items to call out explicitly?** (free text - what's NOT included so there's no scope creep argument later)

Draft sections: SOW Reference (to MSA if any), Project Overview, Deliverables & Acceptance Criteria, Timeline & Milestones, Fees & Payment Schedule, Out of Scope, Change Order Process, Signatures.

### Path D - Mutual NDA

Ask in one turn:

1. **Who are the two parties?** (free text - both legal names + locations)
2. **What's the purpose of the conversation/exchange?** (free text - 1 sentence - e.g. "to evaluate a potential investment", "to scope a partnership", "to discuss acquisition")
3. **Term - how long does confidentiality last?** (2 years / 3 years / 5 years / Indefinite for trade secrets, 3 years for everything else / Other)
4. **Anything specifically excluded from "confidential information"?** (Standard carve-outs only / Add: previously known to receiving party / Add: independently developed / Other)
5. **Governing law?** (free text - e.g. "Delaware", "England & Wales", "California")

Draft sections: Parties, Purpose, Definition of Confidential Information, Obligations of Receiving Party, Exclusions, Term, Return / Destruction of Materials, Remedies, Governing Law, Signatures.

### Path E - Other / Hybrid

If the user picks "Other" or describes something that doesn't fit cleanly:

1. Ask one open question: *"In one paragraph, tell me what this contract needs to cover."*
2. Decide which of A/B/C/D is closest, and merge in any extra clauses they named.
3. Run that path's interview, but adapt question wording to their context.

## Step 3 - Draft the contract

Write the contract in clean, lawyer-friendly business prose. Standards to hold:

- **Clear, numbered sections** (1. Parties, 2. Engagement, etc.). Sub-clauses use 1.1, 1.2, etc.
- **Defined terms in Title Case** the first time they're introduced ("the Provider", "the Services", "the Effective Date"), then used consistently.
- **Plain English over Latin.** "Including but not limited to" is fine, "mutatis mutandis" is not.
- **No square brackets / placeholders** for things the user already gave you. If the user said the fee is $15,000, write $15,000, don't write [FEE].
- **Real placeholders only where you genuinely don't have info** - like signature blocks, dates of signing, or witness lines. Format these as `[Signature]`, `[Date]`, `[Print Name]` so they're easy to find and replace.
- **No "this is not legal advice" line.** The user explicitly doesn't want one. They'll get it reviewed if they want to.
- **No emojis. No em dashes.** Use commas, periods, colons, parentheses instead.
- **Signature block at the end**, with name, title, date, and signature line for each party.

Match the convention of the user's jurisdiction if they named one. If they didn't, default to neutral US-style business contract language and add a Governing Law section they can edit.

## Step 4 - Save as .docx

Read `/sessions/vigilant-intelligent-ritchie/mnt/.claude/skills/docx/SKILL.md` (or the path equivalent in the user's environment) for how to build a Word document. Then save the contract to the user's workspace folder.

Filename pattern: `{ContractType}-{Party1}-{Party2}-{YYYY-MM-DD}.docx`
Examples:
- `Client-Services-Agreement-Acme-AIPowered-2026-05-20.docx`
- `Mutual-NDA-Acme-BetaCorp-2026-05-20.docx`
- `SOW-Q4-Brand-Refresh-2026-05-20.docx`

Use bold headings, numbered sections, a clean title page (Contract Type + party names + effective date), and a proper signature block on the last page.

## Step 5 - Hand it back

Close in 4 lines max:

- A `computer://` link to the saved .docx
- A one-line nudge: *"Open it, scan the sections, fill the bracketed signature/date placeholders, and send. Run this skill again any time you need a different type."*
- An optional offer: *"Want me to draft a cover email to send with this? Just say the word."*

Don't add a long postamble. The .docx is the product.

## When the user wants to amend an existing contract

If they say "edit the contract I just generated" or "add a clause about X":

- Read the existing .docx
- Add or modify the clause in place
- Re-save with `-v2` (or bump the version number)
- Hand back the new link with a one-line note on what changed

Don't regenerate from scratch unless they explicitly ask.

## Voice handling

The contract itself should sound like a lawyer wrote it - neutral, precise, no personality. But the conversation around it (frame, interview, handoff) should match the user's voice if it's been loaded (memory, attached doc). Default to direct, helpful, no fluff.

## Why this skill exists

Contracts are the bottleneck most operators don't see. You close a deal, then spend three days writing the paperwork, then another two iterating before it gets signed. Meanwhile the prospect cools off and the work doesn't start.

The legal substance of a basic services contract, contractor agreement, SOW, or NDA hasn't changed in 30 years. What changes is the deal-specific terms - parties, fees, scope, timeline, IP, term. Those are the 6 things the interview captures. Everything else can be templated.

This skill collapses three days of "I'll get to it tonight" into ten minutes. The user reads the draft, edits the parts that don't fit their situation, sends it. Deal moves forward.
