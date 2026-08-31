# Nixwud Consultancy — Design System

## 1. Purpose

This document is the visual and interaction design authority for the Nixwud Consultancy website.

It exists to keep future redesigns, new pages, content changes, and implementation work consistent.

When implementing or modifying the site:

1. Follow this document before introducing new visual patterns.
2. Reuse existing patterns before creating new components.
3. Prefer content hierarchy, typography, spacing, borders, and composition over decorative UI.
4. Do not introduce visual trends simply because they are common in modern SaaS websites.
5. If a new design decision conflicts with this document, update this document intentionally rather than silently creating an exception.

---

# 2. Design Direction

## Core Character

Nixwud should feel like an:

> **Editorial Technology Consultancy**

The visual identity should communicate:

* intelligence
* technical competence
* business understanding
* maturity
* precision
* confidence
* clarity

The website should feel considered rather than decorated.

The design should combine the structural precision of a technology company with the editorial confidence of a serious consultancy.

## The Site Should Not Feel Like

* a generic SaaS landing page
* an AI-generated website
* a developer platform
* a fintech website
* a traditional corporate consultancy
* a generic digital agency
* a startup template
* a collection of UI components

## Central Design Principle

> **Use the precision of a technology company and the editorial confidence of a serious consultancy, without looking like either a SaaS landing page or a traditional corporate consultancy.**

---

# 3. Design Philosophy

## Content First

Visual design should support the argument being made on the page.

Do not create components simply to make a section appear more visually interesting.

Before introducing a new visual treatment, ask whether the same result can be achieved through:

* typography
* spacing
* alignment
* borders
* imagery
* hierarchy
* composition

## Restraint

Sophistication should come from:

* typography
* whitespace
* proportion
* alignment
* subtle borders
* controlled color
* strong imagery
* precise interaction

It should not depend on:

* gradients
* glowing effects
* excessive animation
* decorative blobs
* excessive shadows
* excessive rounded cards
* visual clutter

## Editorial Confidence

Layouts should feel intentionally composed rather than mechanically assembled.

Favor:

* strong typographic anchors
* asymmetric compositions
* open grids
* large whitespace
* clear visual rhythm
* deliberate alignment

Avoid repetitive patterns such as:

> centered heading → three cards → centered heading → three cards → CTA

---

# 4. Color System

## Direction

Nixwud should use a predominantly neutral palette with a restrained brand accent.

Color should have a purpose.

The website should not depend on color to create visual interest.

## Provisional Core Palette

These values are the current working palette and should be validated against the final Nixwud brand/logo assets before being treated as permanently locked.

### Dark surfaces

```text
--ink: #11110F
--ink-soft: #191917
--panel: #22221F
```

### Light surfaces

```text
--paper: #F3F1EB
--paper-muted: #E4E1D8
```

### Text

```text
--text: #F5F4EF
--text-muted: #A9A8A1

--text-dark: #171714
--text-dark-muted: #5F5E58
```

### Borders

```text
--line: rgba(255,255,255,.14)
--line-dark: rgba(17,17,15,.14)
```

### Brand accent

Current working values:

```text
--accent: #536DCE
--accent-soft: #9EAEF0
```

These are intentionally restrained compared with highly saturated electric-blue technology palettes.

## Color Usage

The accent should primarily be used for:

* primary actions
* links
* active states
* focus states
* selected information
* small brand moments
* meaningful evidence/data emphasis

Do not use the accent simply to decorate a section.

Avoid:

* large gradient backgrounds
* neon blue effects
* blue glow
* gradient text
* multiple competing accent colors

## Dark and Light Sections

Dark and light surfaces should both be legitimate parts of the design system.

Dark sections may be used for:

* high-impact hero areas
* strategic statements
* important transitions
* navigation
* major CTAs

Light sections may be used for:

* editorial content
* services
* case studies
* resources
* methodology
* supporting information

Do not alternate backgrounds mechanically. Surface changes should support content hierarchy.

---

# 5. Typography

## Font Families

Use the existing two-font system:

### Display

**IBM Plex Sans**

Use for:

* H1
* H2
* H3
* H4
* major statements
* selected metrics
* eyebrows/kickers
* brand name

### Body and Interface

**Inter**

Use for:

* body copy
* navigation
* buttons
* forms
* metadata
* tags
* supporting text
* article body

Do not introduce additional fonts without an intentional design decision.

## Available Weights

Prefer:

* 400
* 500
* 600

Avoid making 700 a default design weight.

## Typography Hierarchy

Approximate ranges:

| Element     | Font          |  Weight |    Size |
| ----------- | ------------- | ------: | ------: |
| Hero H1     | IBM Plex Sans |     600 | 56–72px |
| Page H1     | IBM Plex Sans |     600 | 48–64px |
| H2          | IBM Plex Sans |     600 | 36–48px |
| H3          | IBM Plex Sans | 500–600 | 24–30px |
| H4          | IBM Plex Sans |     500 | 18–20px |
| Large intro | Inter         |     400 | 18–22px |
| Body        | Inter         |     400 | 16–17px |
| Small body  | Inter         |     400 |   ~14px |
| Navigation  | Inter         |     500 | 14–15px |
| Button      | Inter         |     500 | 14–15px |
| Eyebrow     | IBM Plex Sans |     600 |   ~12px |
| Metadata    | Inter         | 400–500 | 12–14px |

These are design ranges rather than rigid values.

## Heading Rules

Headings should:

* use strong but controlled scale
* use tight line-height
* use slightly negative letter-spacing
* avoid excessive width
* establish clear visual hierarchy

Do not make headings enormous merely to imitate technology-company websites.

## Body Rules

Body copy should prioritize readability.

Use:

* approximately 16–17px base size
* generous line-height
* readable measure
* neutral tracking

Long-form content should generally remain around 65–72 characters per line.

## Eyebrows

Eyebrows/kickers may use:

* uppercase
* IBM Plex Sans
* 600 weight
* approximately 0.08–0.12em tracking
* restrained accent color

They should identify context, not become decorative labels.

---

# 6. Layout System

## Core Principle

> **Recompose rather than simply stack or shrink.**

The desktop composition and mobile composition should be related but intentionally designed for their respective environments.

## Content Widths

Use the existing content-width concepts:

```text
Standard content: approximately 74rem
Wide content: approximately 86rem
Reading content: approximately 46rem
```

Do not make every section full width.

## Grid

The underlying layout should use a consistent grid.

Prefer:

* asymmetric two-column layouts
* 55/45 or 60/40 compositions
* structured three-column layouts when appropriate
* open editorial grids
* full-width statements
* image/text compositions

Avoid using equal grids simply because they are easy to implement.

## Alignment

Left alignment should be the default for major editorial content.

Do not center:

* every hero
* every section heading
* every CTA
* every paragraph

Centered layouts should be used intentionally.

## Asymmetry

Asymmetry is encouraged when it improves hierarchy.

Examples include:

* large text beside smaller supporting content
* large imagery beside structured information
* offset content blocks
* unequal grid columns

Asymmetry must remain aligned to the underlying grid.

Do not introduce random positioning.

---

# 7. Spacing

Use a disciplined spacing system.

Large spacing should separate major ideas.

Smaller spacing should group related content.

The visual rhythm should create a clear distinction between:

**content groups**

and

**major sections**.

Avoid both extremes:

* cramped sections
* excessive empty space without purpose

Existing section spacing should generally remain generous, approximately in the range of 5–9rem on large screens, with responsive reduction on smaller screens.

---

# 8. Borders and Surfaces

Borders should be used as structural tools.

Use subtle hairlines to separate:

* navigation
* service items
* case-study sections
* methodology steps
* metadata
* footer groups
* editorial content

Borders should generally be subtle rather than visually dominant.

## Surface Hierarchy

Prefer:

1. background
2. typography
3. borders
4. selective surface changes
5. selective elevation

Do not make every section a floating panel.

---

# 9. Border Radius

Use tight-to-moderate radii.

Suggested system:

```text
Small: approximately 8–10px
Medium: approximately 12–16px
Large: approximately 20–24px
```

Large radii should be reserved for larger media or intentionally prominent surfaces.

Avoid:

* giant rounded containers
* pill-shaped buttons by default
* excessive rounded cards

Pills should primarily represent:

* tags
* statuses
* categories
* compact metadata

---

# 10. Shadows

Shadows should communicate real depth.

Use them sparingly.

Do not use shadows simply to make every component appear elevated.

Flat surfaces with borders are preferred for most structural content.

---

# 11. Buttons and CTAs

## Button Principles

Buttons should feel precise and functional.

Use:

* moderate radius
* approximately 48–52px minimum height for primary actions
* medium font weight
* clear contrast
* subtle transitions

## Primary Button

Use either:

* Nixwud accent
* light neutral on dark surfaces

depending on context.

## Secondary Button

Use:

* transparent background
* subtle border
* same basic geometry as primary buttons

## Avoid

* gradient buttons
* glow
* excessive pill shapes
* oversized buttons
* too many CTA styles

## CTA Hierarchy

Pages should normally have one clearly dominant action.

Secondary actions should not visually compete with it.

---

# 12. Cards

Cards should be selective.

Use a card when the content genuinely represents a contained object, such as:

* a service
* an insight
* a resource
* a case study
* a specific evidence block

Do not place every section inside a card.

## Preferred Alternative

Use:

* borders
* dividers
* whitespace
* typography
* open grids

where a card is not necessary.

## Service Pattern

A service can use an editorial row such as:

```text
01

Strategy & Business Analysis

Short explanation...

Key outcomes...

Explore →
────────────────────────
```

rather than automatically becoming a rounded floating box.

---

# 13. Hero Sections

A typical hero should contain:

1. eyebrow
2. strong headline
3. supporting explanation
4. primary action
5. optional secondary action
6. optional visual

The headline should carry most of the visual weight.

Avoid filling heroes with:

* decorative blobs
* floating dashboards
* excessive badges
* fake product interfaces
* unnecessary animation

Hero imagery should only be introduced when it contributes meaningfully to the page.

---

# 14. Service Pages

Service pages should communicate:

**problem → approach → deliverables → value/evidence → action**

They should not resemble SaaS feature pages.

Prioritize:

* strong service headline
* business problem
* relevant challenges
* approach
* deliverables
* outcomes
* supporting evidence
* CTA

Use editorial layouts and structured lists rather than a collection of feature cards.

---

# 15. Case Studies

Case studies should emphasize business transformation.

Preferred narrative:

```text
Challenge
↓
Context
↓
Approach
↓
Intervention
↓
Outcome
↓
Evidence
```

Avoid designing case studies like software product showcases.

Never fabricate:

* metrics
* outcomes
* clients
* testimonials
* project details

Only use verified information.

---

# 16. Insights and Editorial Content

Insights should feel like a **consultancy publication**, not a generic SaaS blog.

Prioritize:

* strong typography
* generous reading width
* clear metadata
* meaningful imagery
* restrained UI
* strong article hierarchy

Article body should prioritize readability over visual novelty.

Use:

* approximately 16–18px body text
* 1.7–1.8 line-height
* approximately 65–72 character reading measure

---

# 17. Navigation

Navigation should be quiet and functional.

Primary structure should prioritize the main areas of the site without exposing unnecessary depth.

The current information architecture includes:

* Insights
* Services
* Industries
* Case Studies
* Resources
* About
* Contact/action

Dropdowns should be:

* simple
* readable
* spacious
* keyboard accessible
* visually subordinate to the page content

Avoid oversized mega-menus unless the information architecture genuinely requires one.

---

# 18. Evidence and Information Blocks

Nixwud should use evidence blocks as a recurring design pattern.

A simple structure is:

```text
LABEL

Evidence or result

Supporting explanation
```

Examples:

```text
CURRENT STATE

Fragmented systems and unclear ownership.
```

or:

```text
OUTCOME

Clearer decision criteria
Prioritized roadmap
Defined ownership
```

Do not invent numerical statistics to make these blocks visually impressive.

---

# 19. Lists

Lists should be used where they improve scanning.

Appropriate uses include:

* service deliverables
* challenges
* methodology
* outcomes
* resource contents
* case-study information

Prefer dividers and spacing over placing every list item inside a separate card.

---

# 20. Tags and Metadata

Tags should communicate real information.

Appropriate uses:

* service category
* industry
* topic
* resource type
* date
* reading time

Do not add tags purely for decoration.

---

# 21. Forms

Forms should be simple and accessible.

Requirements:

* visible labels
* comfortable input height
* clear focus state
* readable text
* clear validation
* obvious submit action
* keyboard accessibility

Avoid unnecessary form interaction patterns.

---

# 22. Footer

The footer should act as the final information architecture layer.

Prioritize:

* Nixwud brand
* short positioning statement
* important navigation
* contact
* legal links
* copyright

Avoid turning the footer into another large marketing section.

---

# 23. Imagery

## Current Phase

**Final imagery is deferred.**

During implementation, use clearly identifiable placeholders.

Do not select random stock photography simply to fill empty space.

Do not generate final AI imagery during the initial redesign.

## Future Imagery Direction

Final imagery should feel:

**human + business + technology + editorial**

Preferred subjects include:

* people
* organizations
* real work environments
* technology in business contexts
* infrastructure
* transformation

Avoid:

* glowing circuit boards
* generic server rooms
* artificial blue technology imagery
* generic business handshakes
* meaningless 3D blobs
* obvious AI-generated technology scenes

## Asset Replacement

Image slots should be designed so that final assets can be substituted without restructuring the page.

Each significant image should eventually have:

* defined purpose
* defined aspect ratio
* intended crop
* meaningful alt text
* known source/licensing information

---

# 24. Responsive Design

## Desktop

Use:

* asymmetric layouts
* structured grids
* large typography
* wide imagery
* generous section spacing
* complete navigation

## Tablet

Use:

* reduced grid complexity
* reduced gaps
* moderate typography reduction
* simplified asymmetric layouts
* preserved hierarchy

## Mobile

Use:

* one primary column
* approximately 1–2rem page gutters
* reduced but substantial section spacing
* prominent headings
* intentional content ordering
* simplified navigation
* structured lists instead of unnecessarily complex grids

Mobile should not simply be a vertically stacked desktop design.

## Accessibility

Never allow the design system to introduce horizontal scrolling.

Maintain:

* readable text
* keyboard accessibility
* visible focus
* sufficient contrast
* touch-friendly controls
* semantic hierarchy

---

# 25. Motion

Motion should communicate interaction and refinement.

Use subtle transitions for:

* buttons
* links
* navigation
* expanding content
* image interactions
* state changes

Avoid:

* perpetual animations
* animated gradients
* excessive parallax
* scroll-jacking
* bouncing UI
* decorative floating objects
* excessive text animation

The principle is:

> **Motion should explain interaction, not decorate the page.**

Respect:

```css
prefers-reduced-motion
```

The existing reduced-motion implementation should be preserved.

---

# 26. Accessibility

Accessibility is part of the design system.

Preserve:

* semantic HTML
* correct heading hierarchy
* keyboard navigation
* visible focus states
* sufficient color contrast
* meaningful image alt text
* accessible labels
* accessible dropdowns
* reduced-motion support
* appropriate touch target sizes

Accessibility should not be treated as a later cleanup step.

---

# 27. Anti-Patterns

The following should generally be rejected unless there is a strong content-driven reason:

* excessive rounded cards
* glassmorphism
* gradient text
* blue/purple gradients
* glowing UI
* decorative blobs
* fake dashboards
* generic SaaS layouts
* excessive centered content
* excessive pill-shaped buttons
* excessive shadows
* excessive animation
* random stock imagery
* obvious AI-generated tech imagery
* unnecessary badges
* decorative tags
* repeated three-card sections
* developer-platform aesthetics
* visual elements without a content purpose

---

# 28. Design Decision Priority

When making a design decision, prioritize in this order:

1. Content clarity
2. User task
3. Information hierarchy
4. Accessibility
5. Brand character
6. Layout/composition
7. Typography
8. Color
9. Decoration

Decoration should never override clarity.

---

# 29. Implementation Guidance

The existing Astro project should be treated as the implementation base.

Important existing systems include:

```text
src/styles/global.css
src/components/
src/pages/
src/lib/siteConfig.js
```

Do not replace working architecture simply to achieve a visual redesign.

Prefer:

* modifying existing design tokens
* improving existing components
* introducing reusable patterns
* keeping content separate from presentation
* maintaining existing routing
* maintaining accessibility
* maintaining SEO functionality
* maintaining existing CMS/editorial integrations

New visual patterns should be reusable rather than page-specific whenever practical.

---

# 30. Content and Design Independence

Copy should be changeable without requiring a redesign.

Design components should accommodate:

* longer headlines
* shorter headlines
* additional services
* additional industries
* additional case studies
* new resources
* new insights
* future SEO landing pages

Do not hard-code layouts around the current number of services or pages.

The design system must remain viable as the website grows.

---

# 31. Future SEO Pages

Future pages such as:

* service pages
* industry pages
* city/location pages
* topical landing pages

should use the existing design language.

Do not create a separate visual identity for SEO pages.

SEO pages should still follow:

* Nixwud typography
* Nixwud color
* Nixwud spacing
* Nixwud layout
* Nixwud component rules
* Nixwud imagery rules

Their content structure may vary according to search intent.

---

# 32. Design System Evolution

This document is the source of truth, but it is not immutable.

When a new design requirement appears:

1. Check whether an existing pattern solves it.
2. If yes, reuse the existing pattern.
3. If no, determine whether a new pattern is genuinely necessary.
4. If a new pattern is necessary, define it here before repeatedly implementing it.
5. Avoid one-off visual exceptions.

The goal is not to prevent evolution.

The goal is to ensure that evolution remains intentional.

---

# 33. Current Design Status

### Locked

* Editorial technology consultancy direction
* Restrained visual language
* IBM Plex Sans + Inter typography system
* Typographic hierarchy principles
* Editorial/asymmetric layout direction
* Reduced card dependency
* Structural borders
* Restrained motion
* Responsive recomposition
* Accessibility principles
* Imagery placeholder approach
* Anti-pattern rules

### Provisional

* Exact color hex values
* Final brand accent
* Final logo treatment

These should be validated against the final Nixwud brand assets.

### Deferred

* Final photography
* Final illustrations
* Final image assets
* Detailed asset inventory
* Advanced motion
* Additional visual reference research

---

# 34. Implementation Rule

When redesigning the Nixwud website:

> **Do not ask "What would make this section look more modern?"**

Instead ask:

> **"What is this section trying to communicate, and what is the simplest Nixwud design pattern that communicates it clearly?"**

That principle should guide every future design decision.
