# Nixwud Consultancy website

Astro website and Sanity Studio for Nixwud Consultancy, a business and technology consultancy.

## Requirements

- Node.js 22.12 or newer (Node 24 LTS recommended)
- npm
- A Sanity project using project ID `jd42zs3r` and dataset `production`

## Website setup

```bash
cp .env.example .env
npm ci
npm run check
npm run build
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

## Sanity Studio

```bash
cd nixwud-cms
npm ci
npm run dev
```

The Studio is intentionally limited to editorial content: Insights, Authors and Categories. Homepage copy, services, industries, case studies, resources, navigation and company settings are edited in the website source through VS Code.

Sanity's normal Draft and Publish actions control website visibility. Drafts remain private; clicking Publish makes an Insight eligible to appear on the website.

The website is statically generated. Local development refreshes published content directly, but the live website must rebuild after a Sanity publication. Configure a Sanity webhook to your hosting provider's deploy hook, or trigger a deployment manually after publishing.

### Insight publishing controls

- Main and in-article images support small, medium, large and full-width display sizes, plus alignment, captions and linked credits. Existing images default to medium until an editor chooses another size.
- Use Key Insight for the direct answer and Article Summary for the short plain-language explanation near the top of the page.
- Search Title and Search Description are optional overrides. Leave them blank when the normal title and excerpt already describe the article well.
- Add FAQs only when they answer genuine reader questions covered by the article. The website displays them and emits matching FAQ structured data.
- Author profiles, publication and modification dates, reviewer details, sources, breadcrumbs and article structured data are included automatically when their Sanity fields are populated.
- Set Updated At only after a substantive content change. Small formatting or metadata edits should not be presented as a newly updated article.

## Analytics and search indexing

- GA4 uses measurement ID `G-7RY15GCJ1Z` by default. `PUBLIC_GOOGLE_ANALYTICS_ID` can override it in a deployment environment.
- Google Search Console DNS verification lives with the domain and is not stored in this repository.
- If Search Console uses the HTML meta-tag method, set `PUBLIC_GOOGLE_SITE_VERIFICATION` to the verification token in the deployment environment.
- Submit `https://nixwud.com/sitemap-index.xml` in Search Console after the production domain is live.
- Bing Webmaster Tools can import the verified Search Console property directly. If HTML meta-tag verification is used instead, set `PUBLIC_BING_SITE_VERIFICATION` to the value from Bing's `msvalidate.01` tag.
- Create a Microsoft Clarity project for `https://nixwud.com`, then set `PUBLIC_MICROSOFT_CLARITY_ID` to its project ID. The site loads Clarity only after a visitor allows analytics.
- GA4 and Clarity share the site's analytics-consent control. Visitors can change their choice through **Cookie settings** in the footer.
- Keep Clarity's project cookie setting off by default and allow this website to communicate consent through the Clarity Consent API.

## Important launch checks

- Replace the draft Privacy Policy and Terms with legally reviewed documents.
- Confirm `hello@nixwud.com` exists or update `CONTACT_EMAIL` in `src/lib/siteConfig.js`.
- Confirm the final brand palette, wordmark, favicon and social image.
- Publish only genuine case studies and testimonials with permission.
- Configure the email-gated resource workflow only after the privacy policy and Brevo integration are ready.

See `MIGRATION.md` for branch installation and deployment guidance.
