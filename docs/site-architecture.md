# Nixwud V2 — Site Architecture

## 1. Project Status

**Project:** Nixwud Consultancy Website V2
**Framework:** Astro
**Rendering:** Static
**Current branch:** `nixwud-v2-local`
**Current baseline:** `cf515c2` — `implement Nixwud typography system`

The current branch is three commits ahead of `origin/refactor/nixwud-v2`.

Recent local changes:

* `fe63d0d` — Update navigation and consolidate AI CRM service
* `6dd2143` — Fix navigation dropdown hover behavior
* `cf515c2` — Implement Nixwud typography system

Working tree is currently clean.

---

## 2. Core Architecture

Nixwud V2 uses Astro as the primary web framework.

The site is primarily static and uses:

* Astro pages and components
* JavaScript configuration for fixed business/service content
* Sanity CMS for editorial content
* Static search indexing
* Client-side search
* Built-in SEO and structured data
* Privacy-controlled analytics
* Reusable component architecture

The core marketing/service architecture is maintained in source control rather than being dependent on CMS build-time content.

---

## 3. Active Page Structure

### Core pages

* `/` — Homepage
* `/services` — Services overview
* `/industries` — Industries overview
* `/case-studies` — Case studies
* `/about` — About Nixwud
* `/contact` — Contact
* `/insights` — Insights/editorial hub
* `/resources` — Resource hub
* `/search` — Site search

### Service architecture

Individual services are generated through:

`src/pages/services/[slug].astro`

Current services:

1. `/services/strategy-business-analysis`
2. `/services/digital-platforms`
3. `/services/ai-crm-business-automation`
4. `/services/growth-discoverability`

The previous AI automation URL remains as a compatibility redirect:

`/services/ai-automation`

→ `301` redirect to:

`/services/ai-crm-business-automation`

### Resources

Current resource:

* `/resources/decision-readiness-scorecard`

The scorecard is an interactive client-side diagnostic tool.

### Insights

Editorial content is organized under:

* `/insights`
* `/insights/[slug]`
* `/insights/topics/[slug]`

### Legacy blog routes

The previous blog structure remains present for URL compatibility:

* `/blog`
* `/blog/[slug]`

These routes redirect to the corresponding Insights locations.

### Supporting routes

* `/404`
* `/privacy-policy`
* `/terms`
* `/accessibility`
* `/authors/[slug]`
* `/topics/[slug]`
* `/robots.txt`
* `/rss.xml`
* `/search.json`

---

## 4. Navigation Architecture

Primary navigation is implemented in:

`src/components/layout/Navigation.astro`

The current primary navigation includes:

* Insights
* Services
* Industries
* Case Studies
* Resources
* About
* Contact

### Services dropdown

Services functions as a parent navigation item with a desktop dropdown.

The dropdown contains:

* All Services
* Strategy & Business Analysis
* Digital Platforms
* AI, CRM & Business Automation
* Growth & Discoverability

The service list is driven from the configuration in:

`src/lib/siteConfig.js`

### Case Studies dropdown

Case Studies functions as a parent navigation item with a dropdown structure.

The current submenu includes:

* All Case Studies

The structure is designed to support individual case-study entries in the future.

### Mobile navigation

The navigation includes a mobile drawer with:

* grouped navigation
* parent/child relationships
* keyboard accessibility
* Escape-to-close behavior
* focus handling
* body scroll locking
* responsive closure when returning to desktop width

---

## 5. Service Content Architecture

Fixed service information is stored in:

`src/lib/siteConfig.js`

This separates business/service configuration from presentation.

Each service contains high-level information such as:

* slug
* title
* summary
* outcomes

Detailed service information includes:

* eyebrow
* title
* description
* challenges
* deliverables

The dynamic service page consumes this configuration through:

`src/pages/services/[slug].astro`

This architecture should be preserved during visual redesign.

---

## 6. AI, CRM & Business Automation

The previous standalone AI Automation service has been consolidated into:

**AI, CRM & Business Automation**

Current slug:

`ai-crm-business-automation`

The service covers:

* AI workflow automation
* CRM lifecycle management
* CRM architecture
* pipeline management
* lead routing
* business-system automation
* operational workflow improvement

The legacy `/services/ai-automation` route is retained as a 301 redirect to preserve existing links.

---

## 7. Component Architecture

Reusable components are located in:

`src/components/`

### Global functionality

* `AnalyticsConsent.astro`
* `ArticleBody.astro`

### Layout

* `layout/Brand.astro`
* `layout/Navigation.astro`
* `layout/Footer.astro`

### Sections

* `sections/Hero.astro`
* `sections/Methodology.astro`
* `sections/CTA.astro`

### Cards

* `cards/ServiceCard.astro`
* `cards/InsightCard.astro`
* `cards/ResourceCard.astro`

### UI primitives

* `ui/Button.astro`
* `ui/SectionHeading.astro`

The visual redesign should extend or refine this component system rather than unnecessarily replacing the architecture.

---

## 8. Editorial / CMS Architecture

Sanity is used for editorial content rather than core business configuration.

Editorial functionality includes:

* Insights/articles
* Authors
* Topics/categories
* Portable Text rendering
* Sanity-hosted article imagery

Core marketing and service content remains configuration-driven in the Astro codebase.

This separation should be preserved.

---

## 9. Search

The site contains a privacy-conscious internal search system.

Components include:

* `/search`
* `/search.json`

Search indexing is generated from site content and allows client-side filtering without introducing a third-party search dependency.

Search functionality should remain intact during redesign.

---

## 10. Analytics & Privacy

The site contains privacy-controlled analytics functionality.

Current integrations include:

* Google Analytics 4
* Microsoft Clarity

Analytics loading is controlled through the site's consent mechanism.

The consent system is implemented through:

`src/components/AnalyticsConsent.astro`

Analytics and consent functionality should not be removed or bypassed during visual redesign.

---

## 11. SEO & Discoverability Infrastructure

The architecture includes:

* canonical metadata
* Open Graph metadata
* Twitter/social metadata
* JSON-LD structured data
* Organization schema
* Article schema
* WebSite/search-related schema
* sitemap generation
* robots directives
* RSS feed
* legacy URL redirects

The visual redesign must preserve this infrastructure.

---

## 12. Current Public Assets

The current repository contains:

* `public/apple-touch-icon.png`
* `public/favicon.ico`
* `public/favicon.svg`
* `public/og-default.png`
* `public/_redirects`
* `public/resources/business-technology-alignment-audit.pdf`

The previously created `design assets/` directory is **not currently present in the repository or working directory**.

Therefore, the current asset inventory represents only assets that are actually present in the current V2 branch.

A new design asset inventory will be created separately.

---

## 13. Typography Dependencies

The current project includes:

* `@fontsource/ibm-plex-sans`
* `@fontsource/inter`

The current typography system imports both font families through:

`src/styles/global.css`

The typography system was introduced in commit:

`cf515c2`

The final visual redesign may refine the typography system, but typography changes should be deliberate and documented rather than introduced incidentally.

---

## 14. Build & Development

Node requirement:

`>=22.12.0`

Primary commands:

```text
npm run dev
npm run build
npm run check
npm run preview
```

The production build runs:

```text
astro build
node scripts/check-built-site.mjs
```

The build includes an automated built-site validation step.

---

## 15. Design Redesign Boundary

The following should be treated as **protected functionality** during visual redesign:

* URL structure
* service slugs
* legacy redirects
* Sanity editorial architecture
* search
* analytics consent
* Google Analytics integration
* Microsoft Clarity integration
* scorecard functionality
* contact functionality
* SEO metadata
* structured data
* sitemap
* robots directives
* RSS
* accessibility behavior

The following are **design-layer areas that may be changed**:

* color system
* typography styling
* layout composition
* spacing
* navigation styling
* cards
* buttons
* section treatments
* imagery
* illustrations
* visual hierarchy
* responsive presentation
* animation/motion
* page composition

The redesign should therefore be treated primarily as a **visual and experience transformation over an existing technical foundation**, rather than a rebuild of the website architecture.

---

## 16. Current Design Phase

The site is currently at the **pre-redesign baseline stage**.

The technical foundation has been stabilized.

The next major design phase will be determined after evaluating external design/UX skills and translating only the useful principles into a Nixwud-specific design system.

No external design system should be adopted wholesale without evaluating whether it fits Nixwud's positioning, brand, audience, and existing architecture.
