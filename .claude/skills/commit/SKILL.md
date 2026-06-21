---
name: commit
description: Stage and commit changes using a conventional commit message. Use when the user wants to commit, save changes, or create a git commit.
argument-hint: "[type]"
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git add *) Bash(git commit *) Bash(git log *)
---

## Current git state

**Status:**
!`git status --short`

**Staged diff:**
!`git diff --staged`

**Unstaged diff:**
!`git diff`

**Recent commits (style reference):**
!`git log --oneline -5`

## Your task

1. If nothing is staged but there are unstaged changes, stage all relevant changes with `git add`.
2. Analyse the diff above and determine the conventional commit type and scope.
3. Write a commit message following the format below.
4. **Show the proposed message to the user and wait for confirmation before running `git commit`.**

## Conventional commit format

```
<type>(<scope>): <description>

[optional body — explain WHY, not WHAT]
```

### Types

| Type | Use when |
|------|----------|
| `feat` | new feature or new content (new post, new page, new section) |
| `fix` | bug fix, broken link, wrong path |
| `style` | CSS / visual changes with no logic change |
| `content` | updating post copy, principles, or bio |
| `chore` | .gitignore, config, skills, tooling |
| `docs` | README or documentation-only change |
| `refactor` | restructuring HTML/CSS without changing behaviour |
| `perf` | performance improvement |

### Rules

- Subject line: max 72 chars, lowercase, imperative mood, no trailing period
- Scope is optional but helpful — e.g. `feat(blog)`, `style(nav)`, `chore(gitignore)`
- Body: explain the *why*, not the *what* — the diff shows the what
- Breaking changes: add `BREAKING CHANGE:` footer

If `$ARGUMENTS` is provided, use it as the commit type and skip inferring it.
