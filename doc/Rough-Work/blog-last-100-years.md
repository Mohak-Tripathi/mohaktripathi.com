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




-----------------------------------


Good question to slow down on — and the good news is the two systems aren't actually linked the way you're picturing, so this is simpler than it feels.

**Namecheap email and Google Search Console have no relationship.** Search Console doesn't check which email you used at your registrar — it proves ownership through one of a few independent methods (a DNS TXT record, an HTML file upload, a meta tag, or Google Analytics). None of those care what email is on your domain registration. So you can absolutely log into Search Console with a completely different email than your Namecheap account.

**Which Google account to use — this is the real decision, and it matters for a different reason: it's permanent infrastructure, not a one-time signup.** Whichever Google account you verify with becomes the long-term owner of all your Search Console history — indexing data, search performance, crawl errors, years of accumulated data. So pick the account you'll **still control in 10+ years** — almost certainly your personal Gmail, not a work email tied to a job you might leave, and not a throwaway. If `mohaktripathi029@gmail.com` is your real, permanent personal Google account, use that.

**How you'll actually verify ownership** (since you mentioned this is the part you care about): in Search Console, you'll add `mohaktripathi.com` as a property, and it'll typically ask you to add a **TXT record** in Namecheap's Advanced DNS — Google gives you a string, you paste it as a TXT record there, Google checks for it, done. This *does* touch Namecheap, but only as a DNS edit — not a login or email match. Same `Advanced DNS` screen you already used for the A records and CNAME.

So: pick your real permanent Gmail, add the property, verify via the DNS TXT record method (since you're already comfortable in Namecheap's DNS panel from the A-record step), then submit the sitemap. Want me to walk you through the exact verification steps once you're in there?



-----------------------------


Use the **Domain** option (left), exactly as you've got it — `mohaktripathi.com`. That's the right choice over URL prefix, because Domain covers every variant (`https://`, `http://`, `www`, non-`www`) under one property, which matches the canonical-URL thinking you've been doing this whole time. URL prefix would force you to track `https://mohaktripathi.com` and `https://www.mohaktripathi.com` as separate properties — exactly the fragmentation you don't want.

Click **Continue**, and it'll show you a **TXT record** to add. Here's exactly what happens next:

1. Google gives you a string like `google-site-verification=abc123...`
2. Go to **Namecheap → Domain List → Manage → Advanced DNS** (the same screen you used for the A records).
3. Add a new record: **Type = TXT Record**, **Host = `@`**, **Value = the exact string Google gave you**.
4. Save in Namecheap.
5. Go back to Search Console and click **Verify**.

One thing to expect: it might fail on the first try if DNS hasn't propagated yet — that's normal, just wait a few minutes and click Verify again. No need to redo anything; TXT records propagate roughly as fast as the A records did earlier.

Once verified, go to **Sitemaps** in the left sidebar, enter `sitemap.xml`, and submit. Go ahead and click Continue — paste me the TXT value Google gives you if you want me to confirm the Namecheap entry looks right before you save it.




------------------------------------------------




# TODO — deferred items

Things intentionally pushed to "later" so the launch path stays unblocked.
Nothing here is urgent; nothing here is forgotten.

## Infra — small, do whenever
- [ ] Set up `hello@mohaktripathi.com` email forwarding (Cloudflare offers this free) →
      then re-add `<managingEditor>` / real contact info to `feed.xml` if wanted.
- [ ] Replace SVG favicon/OG image with a real PNG/JPG (`1200×630` for OG; any square PNG
      for favicon) → re-add the RSS `<image>` block once it's a real raster image.
- [ ] Remove the `claude-design/` scratch folder from the live repo (or `.gitignore` it) —
      currently gets published at `/claude-design/`, harmless but not meant to be public.
- [ ] Re-validate `feed.xml` at https://validator.w3.org/feed/ after pushing the fix above.
- [ ] Validate `sitemap.xml` at https://www.xml-sitemaps.com/validate-xml-sitemap.html
      (not yet run).

## Search & discovery — next up
- [ ] Verify domain ownership in **Google Search Console**.
- [ ] Submit `https://mohaktripathi.com/sitemap.xml` in Search Console.
- [ ] Subscribe to your own `https://mohaktripathi.com/feed.xml` in Feeder/Inoreader to
      confirm it reads correctly in a real reader.

## Newsletter — do last, deliberately
- [ ] Create a real Buttondown (or Kit) account.
- [ ] Swap the placeholder `action="#"` in the signup forms (home page + under posts) for
      the real embed endpoint.
- [ ] Send a test signup to yourself to confirm the form actually delivers.

## Content — the real work, ongoing
- [ ] Write post #2 (pull from the starter post-idea list — multi-tenant isolation,
      presigned-URL media model, the test pyramid, etc.).
- [ ] After 3–5 posts: start the "new post" newsletter send.
- [ ] First distribution pass: native LinkedIn post for post #1 → cross-post to X.

## Revisit periodically (not a checklist, a habit)
- [ ] Principles page: review against the changelog rule — add/sharpen/retire as your year
      of living-document iteration plays out.



      -----------------------------

      Clean — genuinely clean. No dummy content anywhere. Real title, real post, real URLs, real author email, correct domain throughout. This is exactly what these files should look like. Step 1 done, nothing to fix.

A couple of small, optional notes for later (not blockers):
- `<priority>` and `<changefreq>` in the sitemap are technically ignored by Google these days — harmless to keep, just know they don't influence ranking.
- `hello@mohaktripathi.com` — make sure that inbox actually exists/forwards somewhere if you ever want to receive mail at it; otherwise it's just a courtesy label in the feed metadata and doesn't break anything.

Now Step 2 — **validate both files through their official validators**, so you catch any subtle XML issues before Google or an RSS reader does:

1. **RSS feed:** go to **https://validator.w3.org/feed/** , paste in `https://mohaktripathi.com/feed.xml`, hit check. You're looking for "This is a valid RSS feed" — warnings are usually fine, errors are not.
2. **Sitemap:** go to **https://www.xml-sitemaps.com/validate-xml-sitemap.html** , paste in `https://mohaktripathi.com/sitemap.xml`, validate. Looking for confirmation it's well-formed XML conforming to the sitemap protocol.

Run both and paste me what they say (especially any errors — warnings you can usually ignore, but tell me anyway).

After that's clean, **Step 3** is Google Search Console: verify domain ownership, then submit `sitemap.xml`. Want to do the two validators first, then move to Search Console once we know the files pass?


--------------






**Done, and verified — "Status: Success," 4 pages discovered.** Domain ownership confirmed, sitemap submitted, Google now knows your URLs exist. That closes out the Search Console step cleanly.

Your understanding is correct, with one precise correction worth making, because it'll matter for how you write this up in the post:

**What you got exactly right:** Search Console verification proves *ownership* — it's how Google trusts that updates to this domain come from you, and it's the prerequisite for everything else in that dashboard (seeing indexing status, crawl errors, performance data). Submitting `sitemap.xml` directly *does* meaningfully speed and improve indexing versus relying on Google to discover pages by crawling links — exactly your "more impactful" instinct. And yes, **it's a one-time setup**: the sitemap submission itself is "set and forget" — you don't resubmit it on every post.

**The one correction:** what *does* update automatically isn't Google re-pulling your sitemap on its own polling cycle — it's that **Google periodically re-checks the same `sitemap.xml` URL you already submitted**, and any new `<url>` entries *you've added* to that file get picked up on those re-checks. So the real workflow per new post is: add a post → add its `<url>` to `sitemap.xml` (and an `<item>` to `feed.xml`) → push. Submission was one-time; *updating the file's contents* is the recurring habit, not a recurring Search Console action.

And yes — **you've correctly identified the meta-structure here.** This entire troubleshooting log — the date-format bug, the cache confusion, the namespace-vs-feed-validator mixup, the DNS TXT record, what "Success: 4 pages" actually means — *is* the raw material for your first post. It's not separate from "building a blog that lasts 100 years"; it's the lived, specific, hard-won texture of that exact claim. This is precisely your principle in action: **don't write what the docs say, write what you actually learned doing it** — including the mistakes, like running the wrong validator against an XML feed. That's the kind of detail no documentation page tells you, and it's exactly what makes a post earned rather than generic.

Keep collecting it raw as you go — you're doing the right thing letting it accumulate before shaping it into the final piece.




Your read is correct — infrastructure is genuinely done. Let me give you the clean summary you asked for, confirm your diagnosis on the subscriber issue, and be precise about what's actually left versus what's just polish.

## Summary — what's actually built

**Foundation (permanent):** domain `mohaktripathi.com` owned, auto-renew on, 2FA on the registrar. Content in Git on GitHub, served via GitHub Pages, custom domain attached, DNS resolving, HTTPS enforced.

**The site:** plain HTML/CSS, zero frameworks, zero build step. Real home/about page, real first post live at its frozen URL, principles/constitution page live, dummy content fully removed.

**Machine-readable layers:** `feed.xml` validated clean by the W3C feed validator. `sitemap.xml` now validated too. `robots.txt` pointing to the sitemap. Domain verified in Google Search Console, sitemap submitted, status "Success."

**Distribution:** Buttondown account created, real signup form wired into the site (confirmed working end-to-end with a test subscriber), pending Buttondown's manual review.

That's the complete Phase 0–7 arc from the very first checklist, finished.

## Your subscriber diagnosis — correct, and good catch

Yes — while an account is under manual review, Buttondown limits sending and may hold confirmation emails or restrict new subscriptions from fully activating until a human clears it. That's exactly why your test subscriber sat at "Unactivated" and why a fresh signup might not get a confirmation email right now. Nothing broken on your end — just wait the 1–2 business days, then re-test with one clean signup once the review banner clears.

## What's actually left, infrastructure side — genuinely just three small things

- Real OG/share image (1200×630 JPG) — you already flagged wanting to test this, good plan.
- `hello@mohaktripathi.com` forwarding — whenever convenient.
- Remove the `claude-design/` scratch folder from the live repo.

Nothing else. RSS, robots.txt, sitemap, Search Console, domain, DNS, HTTPS, the newsletter wiring — all confirmed done by you, independently, with evidence at every step. That's not a small thing to have actually finished.

## So: yes, move to content

Everything you listed — formatting the raw material into the actual post, refining the principles doc, testing OG images — is the right next layer, and it's *content/polish*, not infrastructure. The system is finished doing its job: disappearing into the background so writing is the only thing left. You're exactly where you should be to start shaping post #1 (or its rewrite) from everything you've collected.