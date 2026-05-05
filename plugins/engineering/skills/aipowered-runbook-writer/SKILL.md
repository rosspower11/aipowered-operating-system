---
id: aipowered-runbook-writer
title: Runbook Writer
type: skill
category: docs
tags: [runbook, oncall, incident, operations]
ribbon: new
preview: Writes an oncall runbook from an incident — symptoms, checks, fixes, and the escalation that matters — so the next person paged at 3am isn't reverse-engineering history.
tier: pro
version: 1.0.0
author: AI Powered
created: 2026-05-05
updated: 2026-05-05
---

# Runbook Writer

A skill for turning a resolved incident into the runbook the next oncall actually needs at 3am. Symptoms, the three checks that diagnose it, the fix, and who to wake up if the fix fails. Use it after every meaningful incident and any time you're handing oncall to a new team.

## When to use this skill

- An incident just resolved and the cause/fix lived in someone's head
- Recurring alert that the team handles "by tribal knowledge"
- New service going to production with no existing operational doc
- Handing oncall to a new team or onboarding a new SRE
- An alert fired three times this quarter and nobody's written it up yet

## When NOT to use this skill

- One-off incident that genuinely won't recur (vendor outage with no system response)
- Pre-emptive runbooks for problems you've never had — write from real evidence, not imagination
- Replacing a current runbook that's accurate — update it instead

## How to run

### Step 1 — Get the incident facts

Pull from the postmortem, Slack channel, ticket, or the person who fixed it. You need:
- **Trigger** — what alert fired, what the symptom was (page text, error rate, customer report)
- **Detection time** — when it started vs. when someone noticed
- **Resolution path** — what the responder actually did (every command, in order)
- **Root cause** — if known. If not, say so explicitly

If the responder can't recall the exact commands, ask for shell history (`history`, `~/.zsh_history`). Vague runbooks fail under pressure.

### Step 2 — Use the five-section template

File location: `docs/runbooks/<service>-<symptom>.md`. Predictable filenames matter — at 3am the responder greps, they don't browse.

1. **Symptoms** — exact alert name, exact error message, what the dashboard looks like. Include the Grafana/Datadog link to the panel that lights up. The responder needs to confirm in 30 seconds that this is the right runbook.
2. **Checks (in order)** — the three to five things to verify. Each as a copy-pasteable command:
   - `kubectl logs -n prod -l app=orders --tail=200 | grep ERROR`
   - `redis-cli -h prod-cache.internal ping`
   - Link to the relevant Datadog dashboard.
   Order matters: cheapest, fastest checks first. Don't put "ssh into the box" as step 1 if a dashboard answers it.
3. **Fix** — the actual remediation. Distinguish *mitigation* (page the noise away, restart the pod) from *fix* (deploy patch, run the migration). Both belong here, in that order. Real commands. Real namespaces. Real flags.
4. **If that doesn't work** — the next two things to try, then *who to escalate to* (team or rotation, not a person who's left). If escalation is "wake up the staff engineer", say which one and via which channel.
5. **Why this happens** — 2–4 sentences on the root cause if known. The responder may not need this at 3am, but they will at the post-mortem. Skip if unknown — don't speculate.

### Step 3 — Make every command runnable

No `kubectl logs <pod>` placeholders. Use `kubectl logs -l app=orders` so it works without lookup. If a command needs a runtime value (incident id, time range), say where to get it.

### Step 4 — Add the metadata header

At the top: `Last incident: 2026-04-22`, `Owner: <team>`, `Tested: <date>`. Untested runbooks rot. Add a date so the next reader knows whether to trust it.

### What to avoid

- Don't write "investigate the issue" as a step. Name the file, the dashboard, the query.
- Don't list every possible cause. List the actual ones from real incidents.
- Don't escalate to a single named person. People leave; rotations don't.
- Don't include screenshots — they go stale. Link the live dashboard.

## Hand-off

Return the runbook as a single markdown file at the predictable path. List the symptoms a responder would search for at the top so a `grep` lands them on the right doc. If anything is unverified (commands not tested, root cause unknown), tag it inline so the next reader knows the gaps.
