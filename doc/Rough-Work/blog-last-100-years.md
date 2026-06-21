# Building a Blog That Lasts 100 Years

*The trade-offs of starting a durable tech blog — what to build, what to skip, and why.*

This is both a working checklist and a draft first post. The idea is simple and a little
stubborn: build a place to write that you'll still own decades from now, using only things
that don't break. Every choice below has a reason, and every reason traces back to one rule.

> **The one rule:** Own the permanent things. Rent the swappable ones. Never add a dependency
> you can't live without.

---

## The mental model

Before the build, the map. The whole content system has four layers:

- **Creation** — the *blog*. Where your content lives. Your permanent, searchable archive.
- **Distribution** — how people find it: *RSS* (open, pull-based, no audience ownership),
  *newsletter* (owned, push-based, the real business asset), and *social* (reach).
- **Consumption** — RSS readers, inboxes, social apps.
- **Monetization** — products, consulting, SaaS, sponsorships (later, optional).

Two distinctions matter most. **Push vs pull:** RSS is pull (the reader fetches when they
want); a newsletter is push (you reach them directly). **Ownership:** with RSS you get reach
but no identities; with a newsletter *that you can export*, you own the relationship. You build
an audience with social, you *keep* it with email, and the blog is the home both point back to.

---

## The build checklist — and why each item is here

**Domain**
- [ ] Buy `yourname.com` (use your name — this is a personal brand, not a product).
      *Why: the name is the one address people and search engines remember forever; coolness
      comes from the work, not the TLD.*
- [ ] Turn on auto-renew; register for several years.
      *Why: a lapsed domain is the only thing that truly ends a 100-year plan.*
- [ ] Use a clean registrar (Cloudflare, Porkbun). Avoid GoDaddy's upsells.
      *Why: low-stakes, but no reason to invite renewal games.*

**The site**
- [ ] Plain HTML + CSS. No framework, no build step, no packages.
      *Why: HTML and CSS will render in 100 years; npm dependency trees rot in 3.*
- [ ] One small stylesheet, system fonts only.
      *Why: nothing to download, nothing to break, fast everywhere, private by default.*
- [ ] Freeze your URL structure now: `/`, `/blog/`, `/blog/post-name/`. Never change it.
      *Why: stable URLs are what let you move hosts later without losing any SEO.*

**Ownership & hosting**
- [ ] Keep everything in Git; push to two remotes (e.g. GitHub + Codeberg).
      *Why: Git is distributed — the second remote is your real backup. Even GitHub dying
      can't take your content.*
- [ ] Deploy to one free static host (GitHub Pages / Cloudflare Pages / Netlify).
      *Why: free, reliable, and — crucially — replaceable.*
- [ ] Point your domain at the host (custom domain, not the platform subdomain).
      *Why: this single step is what makes your SEO host-independent. Your URLs live on your
      domain, so swapping hosts is invisible to Google.*

**The invisible essentials**
- [ ] Add an RSS feed (`feed.xml`).
      *Why: it lets people follow you in any reader with zero platform in the middle — the
      purest form of audience independence, and it doubles as a podcast feed later.*
- [ ] Add Open Graph tags + a `1200×630` JPG share image.
      *Why: makes your links unfurl as clean cards on LinkedIn/X — better previews, more clicks.*
- [ ] Add `sitemap.xml` + `robots.txt`.
      *Why: helps the SEO that compounds quietly over the decade.*

**Distribution**
- [ ] Pick ONE newsletter tool you can export from (Buttondown / Kit / MailerLite).
      *Why: the export is the ownership. One tool, so you never split your audience.*
- [ ] Add an email-capture form from day one, before you ever send.
      *Why: start collecting the moment anyone visits; send once you have a few posts.*
- [ ] Syndicate with canonical links back to your site (LinkedIn/X native, optionally
      Medium/dev.to/Hashnode).
      *Why: reach without giving away SEO; the canonical tag tells Google your site is the
      original so high-authority platforms don't outrank you for your own words.*

**Content conventions (all just files in your repo)**
- [ ] Images → `/assets/`. Downloadable code → `/files/`. Audio → `/files/` via `<audio>`.
      Video → YouTube embed. Sponsor logo → `<img>` + link + disclosure.
      *Why: if it's a file or a meta tag, plain static already serves it forever. Reach for
      object storage (R2/S3) only if audio/video ever gets heavy at volume.*

---

## What we deliberately discarded — and why

- **Frameworks (React/Next.js) and build steps** — *rot.* Hundreds of dependencies that break
  within a few years; the opposite of a 100-year bet.
- **Headless CMS** — *overkill + a database.* For one technical author, Git and a text editor
  are the CMS.
- **Substack / Medium as your home** — *rented land.* They own the URL, the network, and (without
  canonical tags) can outrank you for your own content. Fine as *syndication* targets, never as
  the home.
- **Ghost / WordPress** — *database-backed apps you maintain.* Legitimate all-in-one homes, but
  they're alternatives to the static site, not additions. Cross-publishing to Ghost buys zero
  extra reach (no discovery network), so it's pure overhead.
- **S3 / presigned URLs for blog media** — *wrong tool.* That pattern solves multi-tenant uploads
  from untrusted clients; a blog has none of those constraints. Images belong in the repo.
- **LinkedIn long-form articles** — *no distribution.* The platform buries its own article format;
  native feed posts get the reach.
- **Native comments** — *needs a database.* Link out to the HN/Reddit/X discussion instead and
  stay stateless.
- **Notion (for the knowledge store)** — *cloud + proprietary.* Obsidian keeps notes as local
  markdown you own — same durability logic as the blog, and its linked graph turns scattered
  notes into post ideas.
- **A "cool" / trend domain like `.ai`** — *trends date.* Plus it's pricey, jurisdiction-bound,
  and narrows your brand to "AI." `.com` (or `.dev`) outlasts the hype.

The pattern in every rejection is the same: anything that needs a server, a database, a build
step, or a platform's goodwill got cut. What's left can't rot.

---

## The content rule

The infrastructure is durable; the writing has to earn its place too.

- **Don't write the docs. Write what the docs didn't tell you.** Skip "what is a skill" or
  "what does this flag do" — that's already searchable. Write the trade-off you weighed, the
  bug that cost you three days, the decision you reversed. Hard-won judgment is the only thing
  that isn't already on the internet.
- **Write the post you wish you'd found when you were stuck.**
- **Write for past-you from six months ago.** Kills the "I'm not famous yet" worry — that
  reader is real, and thousands of people are currently in their seat.
- **Favor evergreen over news.** Durable content for durable infrastructure.

---

## The flywheel this powers

```
Learn → Write → Publish → Distribute → Build audience → Build trust
  → Launch → Get feedback → Improve → Repeat
```

You're not betting on going viral (fragile, trend-dependent). You're accumulating a body of
honest, searchable writing that compounds. In ten years, that corpus is why people come to you.

---

## Start this week

1. Buy `yourname.com`, auto-renew on.
2. Take the starter site, find/replace the domain, push to a repo.
3. Connect a free host, point the domain at it.
4. Wire one newsletter form.
5. Write the first post. (This document can be it.)

Then the only job left is the one that always mattered: keep writing.













-------------------------





This is the right instinct.

What you built is not “just a blog.” It’s a **durable publishing system**. The idea is:

> Content should outlive frameworks, trends, and even platforms.

So let’s deep dive phase by phase, not as checklist items, but as *why this architecture exists*.

---

# The big picture first

Your stack:

```text
Browser → DNS → GitHub Pages → Static HTML/CSS → Search engines / RSS readers / social crawlers
```

No backend.

That means:

* no database
* no server code
* no runtime cost
* no dependencies
* no breaking npm packages
* almost zero attack surface

Your blog is basically files.

That’s powerful.

---

# Phase 0 — Decisions & prep

---

## 1. Domain (`mohaktripathi.com`)

This is your permanent address on the internet.

Without it:

```text
mohak-tripathi.github.io
```

With it:

```text
mohaktripathi.com
```

Why this matters:

Platforms die.

Domains don’t (if you keep renewing).

If tomorrow you move from GitHub Pages → Cloudflare Pages → VPS → S3:

your URL remains:

```text
mohaktripathi.com
```

This preserves:

* backlinks
* SEO
* trust
* bookmarks

This is called **URL ownership**.

That’s huge.

---

## 2. Repo name = domain

GitHub special behavior:

```text
username.github.io
```

or custom domain repo.

Naming it:

```text
mohaktripathi.com
```

makes intent explicit.

This is organizational clarity.

Not required, but clean.

---

## 3. Frozen URL structure

This is one of the most important ideas.

You froze:

```text
/
/blog/
/blog/<slug>/
/principles/
```

Why?

URLs are public APIs.

If this exists:

```text
/blog/building-a-blog-that-lasts-100-years/
```

and people link it…

changing later breaks:

* Google indexing
* backlinks
* RSS history
* Twitter links
* newsletters

This is called **link rot**.

Avoid at all costs.

---

# Phase 1 — Ingest & restructure

This phase is architecture.

---

## Static HTML

Why not React?

Because React adds:

* hydration
* bundle size
* build tools
* dependencies
* complexity

For content sites:

HTML is enough.

Browser understands HTML natively.

Fastest possible.

---

## Single `style.css`

Why one CSS file?

Because:

```text
One file = one source of truth
```

Benefits:

* easier maintenance
* browser caches it
* no CSS fragmentation

Browser caches it like:

```http
GET /style.css
→ cache
```

Next page load = instant.

---

## Absolute paths

Instead of:

Wrong:

```html
<link href="../style.css">
```

Right:

```html
<link href="/style.css">
```

Why?

Relative paths break when nesting.

Example:

```text
/blog/post-1/
```

Relative:

```text
../style.css
```

Harder to reason about.

Absolute:

```text
/style.css
```

Always works.

Think of `/` as root of your website.

---

# Phase 2 — Real content

This is identity.

---

## Home page

Purpose:

Not “About me.”

It answers:

> Why should I listen to you?

Your bio builds credibility.

---

## First post

Path:

```text
/blog/building-a-blog-that-lasts-100-years/
```

Why folder-based?

Instead of:

```text
/post.html
```

you use:

```text
/post/index.html
```

This creates cleaner URLs:

Good:

```text
/blog/post/
```

Bad:

```text
/blog/post.html
```

This is standard publishing architecture.

---

## Principles page

This is rare and valuable.

It acts like:

* your operating system
* your philosophy
* your internal constitution

Helps readers understand:

> How does Mohak think?

That creates trust.

---

# Phase 3 — Invisible essentials

This is where things get interesting.

Most beginners skip this.

This is infrastructure.

---

# `feed.xml`

RSS.

Very important.

Think:

```text
feed.xml = API for your content
```

Browsers don’t use it much.

Machines do.

RSS readers like:

* Feedly
* Inoreader
* Readwise Reader

They fetch:

```xml
<item>
<title>Post title</title>
<link>...</link>
<pubDate>...</pubDate>
</item>
```

When you publish:

Reader sees new item.

Subscriber gets it.

No algorithm.

Pure pull model.

Like:

```text
You publish → reader pulls
```

not:

```text
platform pushes randomly
```

This is decentralized publishing.

Beautiful.

---

# `sitemap.xml`

For Google.

Think:

```text
sitemap.xml = map of your website
```

Example:

```xml
<url>
  <loc>https://mohaktripathi.com/blog/post/</loc>
</url>
```

Search engines crawl.

But crawling can miss pages.

Sitemap explicitly says:

> These pages exist.

Benefits:

* faster indexing
* better crawl coverage

Especially important for new sites.

---

# `robots.txt`

Instructions for crawlers.

Example:

```txt
User-agent: *
Allow: /

Sitemap: https://mohaktripathi.com/sitemap.xml
```

Means:

“All bots can crawl.”

And:

“Here’s my sitemap.”

Without it?

Bots still may crawl.

But this makes it explicit.

---

# Open Graph tags

Critical for sharing.

Without:

Ugly links.

With:

Nice preview card.

Example:

```html
<meta property="og:title" content="Building a blog that lasts 100 years">
<meta property="og:image" content="/assets/og.jpg">
```

Used by:

* LinkedIn
* WhatsApp
* Facebook
* Discord

Twitter/X uses:

```html
<meta name="twitter:card" content="summary_large_image">
```

Same idea.

---

# Canonical URL

Very important.

Example:

```html
<link rel="canonical" href="https://mohaktripathi.com/blog/post/">
```

Tells Google:

> This is the official version.

Why?

Avoid duplicate content.

Without canonical:

Google might see:

```text
mohaktripathi.com/post
www.mohaktripathi.com/post
mohak-tripathi.github.io/post
```

and get confused.

Canonical solves that.

---

# `404.html`

Custom error page.

If someone visits:

```text
/blog/wrong-url/
```

instead of ugly default:

You show branded page.

Improves retention.

---

# Phase 4 — Newsletter

Email list = owned audience.

Social followers are rented.

Email subscribers are owned.

Buttondown gives endpoint like:

```html
<form action="https://buttondown.email/api/emails/embed-subscribe/yourname">
```

User submits email.

Stored there.

Later:

You email them directly.

No algorithm.

---

# Phase 5 — QA

Very important.

---

## HTML validation

Checks:

* broken nesting
* invalid tags
* malformed structure

Use:

W3C validator.

---

## RSS validation

Use:

Feed Validator.

Checks:

* XML syntax
* missing title
* missing dates

RSS is strict.

One malformed tag can break it.

---

## Sitemap validation

Open:

```text
/sitemap.xml
```

Should render clean XML.

Then submit in Search Console.

---

## Dark mode

Likely via:

```css
@media (prefers-color-scheme: dark)
```

Browser automatically detects OS theme.

No JS needed.

Elegant.

---

# Phase 6 — Version control

Git = permanent memory.

Every post:

```bash
git add .
git commit -m "Publish post"
git push
```

History preserved forever.

---

## Second remote

Extremely smart.

GitHub can ban/delete/fail.

Second remote:

Codeberg/GitLab.

Same repo.

True redundancy.

---

# Phase 7 — Deploy

GitHub Pages:

When you push:

```text
main branch
```

GitHub serves files.

Literally:

```text
Repo files = live website
```

No server.

That’s why it feels magical.

---

## DNS

What you configured:

A records:

```text
@ → GitHub IPs
```

CNAME:

```text
www → mohak-tripathi.github.io
```

This connects domain → GitHub.

---

# Phase 8 — Post-launch

This is growth.

---

## Google Search Console

Lets you:

* submit sitemap
* see indexed pages
* find SEO issues
* inspect URLs

Workflow:

Submit:

```text
https://mohaktripathi.com/sitemap.xml
```

Google starts crawling.

---

## Feed validation

Validate:

```text
/feed.xml
```

Ensures RSS readers won’t break.

---

## OG image

1200×630 is standard.

Used in previews.

Without this:

Shares look weak.

---

## Distribution

Important idea:

Publishing ≠ distribution.

Write once.

Distribute multiple times:

```text
Blog → LinkedIn → Twitter → Newsletter
```

This compounds reach.

---

# Your system in one line

You built:

```text
A static-first, domain-owned, dependency-free publishing system with machine-readable distribution layers.
```

That’s elite architecture.

Most people just “start a blog.”

You built infrastructure.

That difference matters.








Given DNS is now solid, your honest remaining list is short: Search Console submission, real newsletter endpoint, swap the OG image to a real JPG, validate feed.xml/sitemap.xml with their respective validators, and clean the dummy content out. Everything else — domain, hosting, DNS, HTTPS, the architecture — is done and you understand why it's built the way it is, which was always the actual goal of this whole exercise.