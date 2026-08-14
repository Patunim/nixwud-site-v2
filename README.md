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

Only Insights whose **Editorial Status** is explicitly set to **Published** appear on the website. This prevents unfinished legacy or test documents from being exposed after migration.

## Important launch checks

- Replace the draft Privacy Policy and Terms with legally reviewed documents.
- Confirm `hello@nixwud.com` exists or update `CONTACT_EMAIL` in `src/lib/siteConfig.js`.
- Confirm the final brand palette, wordmark, favicon and social image.
- Publish only genuine case studies and testimonials with permission.
- Configure the email-gated resource workflow only after the privacy policy and Brevo integration are ready.

See `MIGRATION.md` for branch installation and deployment guidance.
