---
name: pr
description: Create a pull request from the current branch, or review an existing PR by number. Use when the user wants to open a PR, create a pull request, or review PR changes.
argument-hint: "[pr-number]"
disable-model-invocation: true
allowed-tools: Bash(git *) Bash(gh *)
---

## Current branch context

**Branch:**
!`git branch --show-current`

**Commits ahead of main:**
!`git log main..HEAD --oneline`

**Full diff vs main:**
!`git diff main...HEAD`

## Your task

If `$ARGUMENTS` is a number, **review** that PR (see Review mode below).
If `$ARGUMENTS` is empty or a word, **create** a PR (see Create mode below).

---

## Create mode

Analyse the diff and commits above, then:

1. Write a PR title using conventional commit style (max 70 chars, lowercase).
2. Write a PR body with these exact sections:

```
## What
- Bullet list of what changed (2–4 bullets max)

## Why
One sentence on the motivation.

## Test plan
- [ ] Open the site locally with `npx serve .`
- [ ] Check each changed page renders correctly
- [ ] Verify nav links work on all changed pages
- [ ] Confirm CSS loads (no unstyled content — /style.css must resolve)
```

3. **Show the title and body to the user and wait for confirmation.**
4. On confirmation, run:

```bash
gh pr create --title "<title>" --body "<body>"
```

---

## Review mode (argument is a PR number)

Fetch the PR: `gh pr view $ARGUMENTS --json title,body,files`
Fetch the diff: `gh pr diff $ARGUMENTS`

Then report findings in this format:

**PR #$ARGUMENTS — [title]**

| Severity | Finding |
|----------|---------|
| 🔴 Must fix | … |
| 🟡 Should fix | … |
| 🟢 Nice to have | … |

Check for:
- Broken HTML (unclosed tags, wrong nesting)
- Relative paths that should be absolute (`../style.css` → `/style.css`)
- Missing OG tags, canonical, or RSS autodiscovery on any page
- Leftover dummy content, placeholder text, or TODO comments
- CSS deviating from the single-column system-font design
- Links pointing to `#` that should have real URLs
