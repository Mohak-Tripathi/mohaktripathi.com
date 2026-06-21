# Blog Operating System (BOS)

### Mohak Tripathi

*A living document for how my publishing system works.*

---

# 1. Philosophy

This blog is built on one core idea:

> Content should outlive frameworks.

Most blogs rot because the infrastructure changes:

* frameworks become obsolete
* npm packages break
* CDNs change
* APIs deprecate
* dependencies disappear

This blog avoids that.

Architecture:

```text
Plain HTML + one CSS file + Git + custom domain
```

No framework.
No build step.
No npm.
No external fonts.

Goal:

```text
Render correctly in 2126.
```

---

# 2. URL Architecture (Frozen Forever)

Never change this.

```text
/
/blog/
/blog/<slug>/
/principles/
```

Example:

```text
/blog/building-a-blog-that-lasts-100-years/
```

Rule:

URLs are public APIs.

Changing URLs causes:

* broken backlinks
* broken SEO
* broken RSS links
* broken social shares

This is called:

```text
Link rot
```

Avoid at all costs.

---

# 3. Repository Structure

```text
index.html
blog/index.html
blog/<slug>/index.html
principles/index.html
style.css
feed.xml
sitemap.xml
robots.txt
404.html
assets/
files/
```

Rule:

Each post gets:

```text
/blog/<slug>/index.html
```

Never:

```text
/blog/<slug>.html
```

Reason:

Cleaner URLs.

---

# 4. Why Static HTML?

Static HTML means:

* zero backend
* zero database
* zero runtime
* zero server complexity

Flow:

```text
Git push → GitHub Pages → live website
```

Benefits:

* fast
* cheap
* durable
* secure

---

# 5. CSS Architecture

Single file:

```text
/style.css
```

Reason:

One source of truth.

Benefits:

* easier maintenance
* browser caching
* consistent styling

---

# 6. Absolute Paths

Always:

Good:

```html
<link href="/style.css">
<img src="/assets/image.jpg">
```

Bad:

```html
<link href="../style.css">
```

Reason:

Relative paths break in nested routes.

---

# 7. Core Pages

## Home (`/`)

Purpose:
Who I am.
What I build.
What I write about.

---

## Blog Index (`/blog/`)

Purpose:
Human-readable article index.

Order:

```text
Newest first
```

---

## Post Page (`/blog/<slug>/`)

Purpose:
Actual content.

---

## Principles (`/principles/`)

Purpose:
My thinking system.

What I believe.
How I make decisions.

---

# 8. Open Graph (OG)

Purpose:

Controls social previews.

Used by:

* LinkedIn
* WhatsApp
* Facebook
* Discord
* Slack
* Telegram

Example:

```html
<meta property="og:title" content="Post title">
<meta property="og:description" content="Summary">
<meta property="og:image" content="/assets/og.jpg">
<meta property="og:url" content="https://mohaktripathi.com/blog/post/">
```

Without OG:

Bad ugly links.

With OG:

Rich previews.

---

# 9. Twitter Tags

Twitter uses:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Post title">
<meta name="twitter:description" content="Summary">
<meta name="twitter:image" content="/assets/og.jpg">
```

Rule:

Use both OG + Twitter.

---

# 10. Canonical URLs

Purpose:

Prevent duplicate content confusion.

Example:

```html
<link rel="canonical" href="https://mohaktripathi.com/blog/post/">
```

Important because:

Google may see:

```text
domain.com
www.domain.com
github.io
```

Canonical says:

```text
This is the official one.
```

---

# 11. RSS Feed (`feed.xml`)

Purpose:

Machine-readable content feed.

Used by:

* Feedly
* Inoreader
* Readwise Reader
* automation tools

Flow:

```text
Subscriber → checks feed.xml → sees new post
```

Each post = one `<item>`

Example:

```xml
<item>
  <title>Post title</title>
  <link>URL</link>
  <pubDate>Date</pubDate>
</item>
```

Rule:

Newest posts first.

Every new post:
Add one new `<item>`.

---

# 12. Sitemap (`sitemap.xml`)

Purpose:

Helps Google discover all pages.

Example:

```xml
<url>
  <loc>https://mohaktripathi.com/blog/post/</loc>
</url>
```

Rule:

Every new post must be added.

---

# 13. Robots (`robots.txt`)

Purpose:

Instructions for crawlers.

Example:

```txt
User-agent: *
Allow: /

Sitemap: https://mohaktripathi.com/sitemap.xml
```

Usually:

Set once.

Rarely changed.

---

# 14. 404 Page

Purpose:

Graceful failure.

Instead of ugly default error page.

---

# 15. Domain & DNS

Domain:

```text
mohaktripathi.com
```

DNS setup:

A records:

```text
@ → GitHub Pages IPs
```

CNAME:

```text
www → mohak-tripathi.github.io
```

Purpose:

Map custom domain to GitHub Pages.

---

# 16. Publishing Workflow

For every new post:

---

## Step 1

Create:

```text
/blog/<slug>/index.html
```

---

## Step 2

Add metadata:

* title
* description
* OG tags
* Twitter tags
* canonical URL

---

## Step 3

Update:

```text
/blog/index.html
```

Add post to index.

---

## Step 4

Update:

```text
/feed.xml
```

Add new `<item>`.

---

## Step 5

Update:

```text
/sitemap.xml
```

Add new URL.

---

## Step 6

Commit:

```bash
git add .
git commit -m "Publish: <post-title>"
git push
```

Done.

---

# 17. One-Time Setup Checklist

Do once:

* Domain purchase
* DNS config
* HTTPS setup
* style.css
* favicon
* robots.txt
* sitemap.xml initial structure
* feed.xml initial structure
* newsletter provider setup
* base OG image
* GitHub Pages setup
* backup remote (Codeberg/GitLab)

---

# 18. Per-Post Checklist

Before publishing:

## Content

* [ ] Title is final
* [ ] Summary written
* [ ] Slug clean
* [ ] Read time added
* [ ] Links checked

---

## Metadata

* [ ] `<title>`
* [ ] OG tags
* [ ] Twitter tags
* [ ] canonical URL

---

## Site updates

* [ ] Add to `/blog/index.html`
* [ ] Add to `/feed.xml`
* [ ] Add to `/sitemap.xml`

---

## Validation

* [ ] Open page locally
* [ ] Mobile check
* [ ] Dark mode check
* [ ] OG preview check
* [ ] Feed valid
* [ ] Sitemap valid
* [ ] No broken links

---

## Deploy

* [ ] Commit
* [ ] Push
* [ ] Confirm live

---

# 19. Post-Publish Distribution

Publishing ≠ distribution.

After publishing:

* LinkedIn post
* X post
* Newsletter
* RSS subscribers automatically get it

Flow:

```text
Write → Publish → Distribute → Compound
```

---

# 20. Core Rule

This system must remain:

```text
Simple > clever
Durable > trendy
Readable > fancy
Owned > rented
```
