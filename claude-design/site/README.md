# Mohak Tripathi — personal blog

A minimal, content-first, build-in-public blog for a backend engineer.
Plain static HTML + one CSS file. **No framework, no build step, no JS, no web fonts,
no external dependencies, no tracking.** Designed to still render in 50 years.

## Files

```
site/
├── index.html        # Home / About
├── writing.html      # Post index (Start here + chronological by year)
├── principles.html   # Living "constitution" — core + candidate principles, changelog
├── style.css         # The entire look. System fonts, one accent, light + dark.
└── posts/
    └── multi-tenant-isolation.html   # Example full post (template for new posts)
```

## Design rules (please preserve)

- **One readable column**, ~680px max, centered, generous whitespace.
- **System fonts only**: serif body / sans-serif UI + headings / monospace code.
  Defined as CSS variables `--serif`, `--sans`, `--mono` in `style.css`.
- **Automatic light + dark** via `prefers-color-scheme` (pure CSS, no JS toggle).
  All colors are CSS variables in `:root` and the `@media (prefers-color-scheme: dark)` block.
- **One accent color** (`--accent`, an ink blue), used for links only.
  No gradients, no heavy shadows, no decorative chrome, no icons except the RSS glyph.
- Visible keyboard focus (`:focus-visible`), skip-link, print styles — all in `style.css`.

## Conventions

- Every page shares the same `<header class="site-header">` nav and
  `<footer class="site-footer">`. Set `aria-current="page"` on the active nav link.
- Posts live in `posts/` and link to `../style.css` (one directory up).
- Content images use `<figure>` + `<figcaption>`. A diagonal-hatch placeholder
  (`.img-placeholder`) is provided for diagrams you haven't drawn yet.
- Reusable blocks already styled: `.subscribe` (newsletter), `.sponsor` (sponsor slot),
  `.post-list` (title + date rows), `.year-heading`, `.tag` (principles).

## To add a new post

1. Copy `posts/multi-tenant-isolation.html` to `posts/your-slug.html`.
2. Replace the `<title>`, `<meta name="description">`, `.post-header`, and body.
3. Add a `<li>` to `writing.html` (newest first) and optionally to "Start here".
4. Add a `<li>` to "Recent writing" on `index.html`.

## Still TODO (placeholders to wire up)

- `feed.xml` — RSS is linked everywhere but not generated. Add a hand-written or
  build-time feed.
- Newsletter `<form action="#">` — point at a real email provider endpoint.
- `index.html` "Building in public" — product + changelog links are `#` placeholders.
  GitHub is real: https://github.com/Mohak-Tripathi
