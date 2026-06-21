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



















<!-- 


















      <!-- <?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Mohak Tripathi</title>
    <link>https://mohaktripathi.com</link>
    <description>Field notes from building and operating a multi-tenant product solo. Backend engineering, databases, and building in public.</description>
    <language>en</language>
    <copyright>© 2026 Mohak Tripathi</copyright>
    <managingEditor>hello@mohaktripathi.com (Mohak Tripathi)</managingEditor>
    <webMaster>hello@mohaktripathi.com (Mohak Tripathi)</webMaster>
    <lastBuildDate>Sat, 21 Jun 2026 00:00:00 +0000</lastBuildDate>
    <atom:link href="https://mohaktripathi.com/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://mohaktripathi.com/assets/favicon.svg</url>
      <title>Mohak Tripathi</title>
      <link>https://mohaktripathi.com</link>
    </image>

    <item>
      <title>Building a blog that lasts 100 years</title>
      <link>https://mohaktripathi.com/blog/building-a-blog-that-lasts-100-years/</link>
      <guid isPermaLink="true">https://mohaktripathi.com/blog/building-a-blog-that-lasts-100-years/</guid>
      <pubDate>Sat, 21 Jun 2026 00:00:00 +0000</pubDate>
      <author>hello@mohaktripathi.com (Mohak Tripathi)</author>
      <description>Why I built this site with plain HTML and one CSS file, no framework, no build step, no dependencies — and why it will still render correctly in 2126.</description>
      <content:encoded><![CDATA[
        <p>Every time I set up a blog, something breaks within two years. A build tool becomes unmaintained. A CDN changes its free tier. A JavaScript framework pivots. A font host starts injecting tracking. The posts survive, but the infrastructure around them rots, and eventually you end up with a site that doesn't render — or worse, requires a three-day yak shave before you can publish again.</p>
        <p>I've been through this loop enough times that I decided to think differently about it. What would a blog look like if I built it to last not two years, but a hundred?</p>
        <p><a href="https://mohaktripathi.com/blog/building-a-blog-that-lasts-100-years/">Read the full post →</a></p>
      ]]></content:encoded>
    </item>

  </channel>
</rss> --> -->