# Blog — Final Implementation Checklist (drive this with Claude Code)

**Goal:** fuse the Claude Design *look* with the durable *plumbing*, replace all dummy
content with the real first post + principles page, and ship to production at your own domain.

**Two non-negotiables that govern everything below:**
- Plain static HTML + one `style.css`. No framework, no build step, no npm, no web fonts.
- **Freeze the URL structure now:** `/`, `/blog/`, `/blog/<slug>/`, `/principles/`. Never change a path.

**Source material to hand Claude Code:**
- The exported design in `./Claude design/` (the look to preserve)
- Your first-post content: "Building a blog that lasts 100 years"
- Your principles/constitution doc (for the Principles page)
- 2–3 lines of real bio for the home/about page

---

## Phase 0 — Decisions & prep  *(you, ~30 min)*
- [ ] Buy the domain (`mohaktripathi.com`), turn on **auto-renew**, register 5–10 years.
- [ ] Lock the registrar account: strong password + 2FA.
- [ ] Name the GitHub repo `mohaktripathi.com`.
- [ ] Confirm the frozen URL structure above. This is the one thing you can't undo later.

## Phase 1 — Ingest & restructure  *(Claude Code)*
- [ ] Read every file in `./Claude design/`; treat its `style.css` and page layouts as the
      design to keep.
- [ ] Create the clean repo structure with the frozen URLs:
  ```
  index.html              home / about
  blog/index.html         writing index (newest first)
  blog/<slug>/index.html  one folder per post
  principles/index.html   the constitution page
  style.css               the whole design, one file
  assets/   assets/sponsors/   files/
  ```
- [ ] Port the Claude Design look into this structure. Convert its `blog.html` +
      `posts/x.html` into `/blog/` + `/blog/<slug>/`.
- [ ] Switch all references to **absolute root paths** (`/style.css`, `/assets/...`).
- [ ] Verify zero dependencies: no framework, no JS framework, no web-font links, no build step.

## Phase 2 — Real content (kill all dummy data)  *(Claude Code + your content)*
- [ ] **Home / About:** replace placeholder name and copy with your real bio — engineer-founder
      building a real product solo; what you write about.
- [ ] **First post** at `/blog/building-a-blog-that-lasts-100-years/`: drop in the real post.
- [ ] **Principles page** at `/principles/`: render your constitution (clarity as the core
      principle, the candidates, the changelog).
- [ ] **Writing index:** list only the real first post.
- [ ] Search the whole repo for leftover dummy strings ("Dani Okonkwo", lorem, sample) and remove them.
- [ ] Nav everywhere: name left; **About / Writing / Principles / RSS** right.

## Phase 3 — Invisible essentials  *(Claude Code)*
- [ ] **Open Graph + Twitter tags + canonical** on every page (`og:title/description/url/image`,
      `twitter:card`, `<link rel=canonical>`).
- [ ] **`feed.xml`** (RSS 2.0, podcast-ready) with the first post as an item; add the
      `<link rel="alternate" type="application/rss+xml">` autodiscovery tag in every page head.
- [ ] **`sitemap.xml`** listing all URLs; **`robots.txt`** pointing to it.
- [ ] **`404.html`** custom not-found page using the same layout.
- [ ] **Favicon** + a `1200×630` OG share image in `/assets/` (SVG placeholder fine for now).

## Phase 4 — Newsletter & content conventions  *(Claude Code)*
- [ ] Add a quiet **newsletter signup** block (email input + button) on the home page and
      under each post; point the form `action` at a placeholder you'll swap later.
- [ ] Confirm the content patterns exist and are styled: captioned `<img>`, `<pre><code>` blocks,
      blockquotes, a downloadable-file link (`download`), an `<audio>` element, a responsive
      YouTube embed wrapper, and an understated sponsor slot with a "Sponsored" label.

## Phase 5 — QA & validation  *(Claude Code, then you eyeball)*
- [ ] HTML validates; `feed.xml` and `sitemap.xml` are valid XML.
- [ ] Run the post through a word/character count → confirm the "X min read" is roughly right.
- [ ] Light mode AND dark mode both readable (toggle OS theme).
- [ ] Mobile: open on a narrow viewport — font size and line length comfortable.
- [ ] Every nav and in-post link resolves; no broken `/assets/` references.
- [ ] Reading column ~680px; clear title > heading > body hierarchy; more space above headings than below.

## Phase 6 — Version control  *(you + Claude Code)*
- [ ] `git init`, add a minimal `.gitignore`, commit.
- [ ] Push to **GitHub** (`mohaktripathi.com` repo).
- [ ] Add a **second remote** (Codeberg or GitLab) and push there too — your real backup.

## Phase 7 — Deploy to production  *(you)*
- [ ] Deploy via **GitHub Pages** (Settings → Pages → `main` / root) **or** Cloudflare Pages
      (connect repo, build command = none, output = `/`).
- [ ] Attach the **custom domain** (add a `CNAME` file for GitHub Pages) and set the DNS record.
- [ ] Confirm the site serves from `mohaktripathi.com` (not the `*.github.io` subdomain) and
      that HTTPS is on.
- [ ] Load the live site at the root and click through — absolute paths now resolve correctly.

## Phase 8 — Post-launch  *(you)*
- [ ] Create your newsletter account (**Buttondown**) and swap the real form endpoint in.
- [ ] Replace the SVG OG image with a real `1200×630` JPG/PNG and update the `og:image` tags.
- [ ] Submit `sitemap.xml` to Google Search Console.
- [ ] Validate the feed at the W3C Feed Validator; subscribe to your own `/feed.xml` in your reader to confirm.
- [ ] First distribution: native LinkedIn post (insight + soft link back) → cross-post to X.
- [ ] Lock in the publishing loop for post #2: write → commit → push → distribute → (later) email.

---

### Definition of done
Live at `https://mohaktripathi.com`, served from your own domain, with: the real first post,
a Principles page, a working RSS feed you can subscribe to, Open Graph previews that render on
LinkedIn/X, a sitemap Google can read, a newsletter form, zero dummy content, and zero
dependencies. Content in Git on two remotes. Then the only job left is writing post #2.