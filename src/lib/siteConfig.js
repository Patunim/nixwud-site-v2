export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://nixwud.com";
export const SITE_NAME = "Nixwud";
export const SITE_SHORT_NAME = "Nixwud";
export const SITE_DESCRIPTION =
  "Nixwud designs and builds websites, web applications, CRM workflows and search systems that help organisations work better and grow.";
export const CONTACT_EMAIL = "hello@nixwud.com";
export const SOCIAL_LINKS = [];

export const services = [
  {
    slug: "web-design-development",
    number: "01",
    title: "Web Design & Development",
    shortTitle: "Websites",
    summary: "Fast, accessible, maintainable websites designed around real business goals and clean content architecture.",
    tagline: "Websites designed for clarity, built for performance and maintainability.",
    outcomes: [
      "Custom responsive design",
      "Fast page loads and clean markup",
      "Structured CMS workflows",
      "Accessible and conversion-focused"
    ]
  },
  {
    slug: "web-app-development",
    number: "02",
    title: "Web & App Development",
    shortTitle: "Web Applications",
    summary: "Custom web applications, internal tools, client portals and dashboards built to solve specific operational challenges.",
    tagline: "Software interfaces and custom applications built to solve concrete operational problems.",
    outcomes: [
      "Custom business web applications",
      "Internal tools and dashboards",
      "Client portals and member areas",
      "API integrations and secure workflows"
    ]
  },
  {
    slug: "crm-automation",
    number: "03",
    title: "CRM & Automation",
    shortTitle: "CRM & Workflows",
    summary: "Connect your CRM pipelines, automate lead routing and reduce repetitive manual work across your business systems.",
    tagline: "Practical automation and CRM workflows that eliminate manual friction.",
    outcomes: [
      "CRM setup and optimization",
      "Automated lead capture and routing",
      "Process and workflow automation",
      "Connected databases and webhooks"
    ]
  },
  {
    slug: "seo-discoverability",
    number: "04",
    title: "SEO & Discoverability",
    shortTitle: "SEO & Search",
    summary: "Technical SEO, semantic website structure and structured content designed for high visibility across traditional and AI search.",
    tagline: "Evidence-based technical SEO and content architecture for durable search visibility.",
    outcomes: [
      "Technical SEO foundations",
      "Semantic content architecture",
      "AI and answer-engine discoverability",
      "Structured data and performance tuning"
    ]
  }
];

export const industries = [
  {
    slug: "smes-growing-businesses",
    number: "01",
    title: "SMEs & Growing Businesses",
    tagline: "Growth creates pressure. Better digital systems create leverage.",
    summary: "We help growing businesses simplify operations, connect data and build digital platforms that scale with demand."
  },
  {
    slug: "educational-career-services",
    number: "02",
    title: "Educational & Career Services",
    tagline: "When the service depends on people, the systems behind it matter.",
    summary: "Education and career organisations need websites, portals and CRM workflows that make interactions straightforward for candidates and staff."
  }
];

export const caseStudies = [
  {
    slug: "commercial-digital-platform",
    title: "Modern Web Platform & Content Architecture",
    client: "Growing Professional Firm",
    service: "Web Design & Development",
    serviceSlug: "web-design-development",
    featured: true,
    summary: "A complete redesign and rebuild of a professional firm's public web presence, transitioning from an unmaintainable legacy setup to a high-performance Astro-driven architecture with structured content workflows.",
    challenge: "A fragmented website with slow page performance and disconnected content prevented qualified visitors from finding relevant service details. The backend required technical intervention for simple copy changes.",
    approach: [
      "Audited user journeys and simplified the information hierarchy from 20+ scattered pages into four clear capability hubs.",
      "Designed a bespoke design system with accessible typography, responsive layout tokens, and restrained brand styling.",
      "Engineered a lightweight static site delivering sub-second load times and 100% Core Web Vitals scores.",
      "Implemented an intuitive structured CMS allowing the internal team to update pages and publish articles independently."
    ],
    theWork: [
      {
        tag: "INTERFACE DESIGN",
        title: "Responsive Component System",
        description: "Bespoke design system with accessible typography tokens, high-contrast layouts, and mobile-first navigation."
      },
      {
        tag: "ENGINEERING",
        title: "High-Performance Static Build",
        description: "Lightweight HTML markup, optimized asset bundling, and zero client-side bloat delivering instant page transitions."
      },
      {
        tag: "CMS WORKFLOW",
        title: "Structured Content Management",
        description: "Custom headless CMS schema enabling non-technical staff to publish new case studies and articles in minutes."
      }
    ],
    outcome: "Delivered a fast, accessible digital platform with measurable improvements in organic user engagement and complete publishing independence for the client's internal team.",
    keyDeliverables: [
      "Custom responsive design system and token specification",
      "Lightweight, accessible frontend codebase adhering to WCAG AA standards",
      "Configured headless CMS schemas and editorial publishing workflow",
      "Technical launch checklist including DNS, SSL, analytics, and redirect mapping"
    ],
    relatedCapability: {
      title: "Web Design & Development",
      href: "/services/web-design-development"
    },
    relatedResource: {
      title: "Digital Systems & Website Readiness Audit",
      href: "/resources/business-technology-alignment-audit.pdf",
      type: "PDF Guide"
    }
  },
  {
    slug: "operations-portal-automation",
    title: "Client Portal & Workflow Automation Engine",
    client: "Specialist Advisory Service",
    service: "Web & App Development / CRM & Automation",
    serviceSlug: "web-app-development",
    featured: false,
    summary: "Development of a custom client onboarding portal integrated directly with automated CRM routing and webhook triggers to eliminate manual email handoffs.",
    challenge: "Client intake and case updates relied on manual email handoffs and spreadsheet tracking, creating operational delays during high-volume periods.",
    approach: [
      "Mapped the full candidate intake lifecycle to identify points of data loss and manual administrative drag.",
      "Built a secure, authenticated web application where clients submit intake forms, upload verification documents, and track status.",
      "Configured automated CRM pipelines, webhook connections, and instant team notifications to route new submissions immediately.",
      "Integrated bidirectional data synchronization so team members never have to re-enter customer data across tools."
    ],
    theWork: [
      {
        tag: "WEB APPLICATION",
        title: "Authenticated Client Portal",
        description: "Secure, role-based workspace where clients complete intake checklists, upload documents, and receive real-time updates."
      },
      {
        tag: "PIPELINE AUTOMATION",
        title: "Automated Lead & Case Routing",
        description: "Multi-stage automated qualification workflows connecting form submissions directly to assigned advisor inboxes."
      },
      {
        tag: "INTEGRATION",
        title: "Connected CRM & Data Sync",
        description: "Reliable webhook endpoints synchronizing client records between the custom portal, CRM pipelines, and notification channels."
      }
    ],
    outcome: "Eliminated manual copy-pasting between spreadsheets, cut onboarding processing time significantly, and ensured zero client submissions were dropped or delayed.",
    keyDeliverables: [
      "Custom web application with secure authentication and document upload",
      "Automated CRM pipeline architecture and webhook integration scripts",
      "Real-time team notification alerts and task assignment rules",
      "Comprehensive team operational documentation and system handoff"
    ],
    relatedCapability: {
      title: "CRM & Automation",
      href: "/services/crm-automation"
    },
    relatedResource: {
      title: "Technology Decision Readiness Scorecard",
      href: "/resources/decision-readiness-scorecard",
      type: "Interactive Tool"
    }
  },
  {
    slug: "search-discoverability-structure",
    title: "Technical SEO & Semantic Knowledge Architecture",
    client: "Education & Career Provider",
    service: "SEO & Discoverability",
    serviceSlug: "seo-discoverability",
    featured: false,
    summary: "A comprehensive technical SEO and information architecture overhaul to unlock search visibility for extensive educational programs and career resources.",
    challenge: "Rich educational course material remained undiscoverable by search engines due to legacy URL structures, missing semantic data, and disconnected internal navigation.",
    approach: [
      "Audited the existing site structure and designed a clean, hierarchical URL taxonomy matching user search intent.",
      "Engineered comprehensive JSON-LD structured data schemas across all course categories, modules, and organization pages.",
      "Constructed an automated internal linking graph connecting related training tracks, career outcomes, and advisory resources.",
      "Resolved code-level technical crawl errors, broken redirects, and mobile Core Web Vitals bottlenecks."
    ],
    theWork: [
      {
        tag: "TAXONOMY DESIGN",
        title: "Semantic Information Architecture",
        description: "Restructured category hierarchies and URL paths allowing search engine crawlers to discover and index all core pages."
      },
      {
        tag: "STRUCTURED DATA",
        title: "JSON-LD Entity Graph",
        description: "Complete schema implementation enabling rich snippet eligibility across Google and modern AI answer engines."
      },
      {
        tag: "TECHNICAL AUDIT",
        title: "Crawl & Speed Remediation",
        description: "Full resolution of legacy redirect loops, orphan pages, and mobile performance bottlenecks."
      }
    ],
    outcome: "Search engines indexed the complete course catalog within weeks, resulting in substantial organic visibility growth and higher qualified candidate enquiries.",
    keyDeliverables: [
      "Comprehensive technical SEO audit and code-level remediation report",
      "Semantic HTML5 structure and JSON-LD schema implementation",
      "Complete redirect map preserving historical search authority",
      "Ongoing organic performance tracking framework"
    ],
    relatedCapability: {
      title: "SEO & Discoverability",
      href: "/services/seo-discoverability"
    },
    relatedResource: {
      title: "Digital Systems & Website Readiness Audit",
      href: "/resources/business-technology-alignment-audit.pdf",
      type: "PDF Guide"
    }
  }
];

export const testimonials = [
  {
    name: "Operations Director",
    role: "Director of Operations",
    organization: "Professional Services Practice",
    quote: "Nixwud took time to understand how our team actually works before writing a line of code. The portal and automated workflows they built saved our team hours every week.",
    context: "Custom Web Application & Automation",
    approved: true
  },
  {
    name: "Commercial Lead",
    role: "Head of Growth",
    organization: "Education Services Group",
    quote: "Our new website is fast, straightforward for our team to update and clearly communicates what we do. The difference in qualified enquiries was noticeable within weeks.",
    context: "Web Design & SEO Architecture",
    approved: true
  }
];

export const navigation = [
  { label: "Work", href: "/case-studies" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))
    ]
  },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const resources = [
  {
    type: "Interactive tool",
    title: "Technology Decision Readiness Scorecard",
    description: "Answer ten focused questions to evaluate whether a proposed website, application or automation project is clearly defined before you build.",
    href: "/resources/decision-readiness-scorecard",
    action: "Launch the scorecard",
    featured: true
  },
  {
    type: "PDF guide",
    title: "Digital Systems & Website Readiness Audit",
    description: "A structured five-part practical guide to evaluating whether your website, tools and workflows support your current business goals.",
    href: "/resources/business-technology-alignment-audit.pdf",
    action: "Download the guide",
    featured: true
  }
];

export const serviceDetails = {
  "web-design-development": {
    eyebrow: "01. Web Design & Development",
    title: "Websites designed for clarity, built for performance.",
    description: "We design and build modern business websites that load instantly, work seamlessly on every screen and give your team complete control over content.",
    philosophy: "A good website is not just a digital brochure. It is a reliable business asset that clearly communicates your value, guides visitors effectively and requires minimal maintenance.",
    capabilities: [
      "Custom responsive web design",
      "High-performance frontend development",
      "Structured CMS integration and setup",
      "Accessibility (WCAG) and usability standards",
      "Website redesigns and platform migrations",
      "Conversion-focused page hierarchy"
    ],
    challenges: [
      "Your current website looks outdated and no longer reflects the quality or scale of your organisation.",
      "Non-technical team members struggle to update pages, publish articles or manage site navigation.",
      "Page load speeds are sluggish, hurting search rankings and visitor engagement on mobile devices.",
      "Visitors arrive on the website but find it difficult to understand your services or take the next step."
    ],
    deliverables: [
      "Bespoke design system, component layout and typography hierarchy",
      "Lightweight, accessible code built with modern web technologies",
      "Intuitive CMS schema and publishing workflow tailored to your team",
      "Technical launch checklist including DNS, SSL, analytics and redirect mapping"
    ]
  },
  "web-app-development": {
    eyebrow: "02. Web & App Development",
    title: "Custom web applications that solve specific business problems.",
    description: "We build custom web apps, internal tools, dashboards and client portals designed to automate workflows and replace clunky spreadsheets.",
    philosophy: "When off-the-shelf software is either too restrictive or unnecessarily complex, custom web software provides the exact functionality your organisation needs.",
    capabilities: [
      "Custom business web applications",
      "Internal tools and operational dashboards",
      "Client portals and customer accounts",
      "Role-based access control and authentication",
      "REST & GraphQL API integrations",
      "Database design and workflow interfaces"
    ],
    challenges: [
      "Your core business processes rely on disconnected spreadsheets and manual copy-pasting between systems.",
      "Existing SaaS tools charge per-seat fees while failing to support your specific business workflow.",
      "Clients or partners need a secure, dedicated interface to submit documents, track status or access data.",
      "Internal teams waste hours every day on repetitive administrative tasks that should be automated by software."
    ],
    deliverables: [
      "Functional specification and interface wireframes focused on user workflows",
      "Secure, responsive web application with robust database and authentication",
      "Integration with third-party APIs, payment gateways or existing databases",
      "Clean source code, comprehensive documentation and deployment configuration"
    ]
  },
  "crm-automation": {
    eyebrow: "03. CRM & Automation",
    title: "Connect your systems and remove repetitive manual work.",
    description: "We set up and improve CRM systems, automate lead routing and connect business tools so data moves smoothly without manual re-entry.",
    philosophy: "Automation should be practical and reliable. We focus on connecting the tools you already use to eliminate administrative bottlenecks and ensure no lead is missed.",
    capabilities: [
      "CRM configuration and data cleanup",
      "Automated lead capture, qualification and routing",
      "Cross-platform webhook and API integrations",
      "Notification and task automation for internal teams",
      "Customer onboarding and follow-up sequences",
      "Data synchronization across business systems"
    ],
    challenges: [
      "New leads and enquiries sit in inboxes before being manually assigned to team members.",
      "Customer data is scattered across email inboxes, spreadsheets and multiple separate software tools.",
      "Staff spend excessive time on repetitive administrative data entry instead of serving clients.",
      "Follow-up sequences and status updates are inconsistent, leading to missed commercial opportunities."
    ],
    deliverables: [
      "Clean CRM pipeline architecture with custom stages, fields and tags",
      "Automated workflows connecting forms, inboxes, CRM records and team alerts",
      "Webhook and integration connections between your website, CRM and accounting tools",
      "Team operational guide and training for day-to-day workflow management"
    ]
  },
  "seo-discoverability": {
    eyebrow: "04. SEO & Discoverability",
    title: "Technical SEO and content structure that drives qualified search traffic.",
    description: "We build solid technical SEO foundations, semantic site structures and structured content schemas so your business is easily discovered across Google and AI search.",
    philosophy: "Sustainable search visibility is built on fast technical foundations, clear information architecture and genuinely useful content rather than gimmicks or keyword stuffing.",
    capabilities: [
      "Technical SEO audits and remediation",
      "Site structure and URL hierarchy design",
      "Semantic HTML and JSON-LD structured data",
      "AI search and answer-engine discoverability",
      "Internal linking architecture and topic clusters",
      "Page speed optimization and Core Web Vitals"
    ],
    challenges: [
      "Your website has quality services or content but receives minimal organic search traffic.",
      "Search engines struggle to crawl or index key pages due to technical errors or poor site structure.",
      "Competitors rank higher for high-intent search terms related to your core services.",
      "Your website lacks structured data, preventing it from appearing in rich snippets and modern AI search answers."
    ],
    deliverables: [
      "Comprehensive technical SEO audit and resolved code-level fixes",
      "Optimized site hierarchy, internal linking model and semantic markup",
      "Complete JSON-LD schema implementation (Organization, Service, Breadcrumbs, Articles)",
      "Performance optimization achieving high Core Web Vitals scores"
    ]
  }
};
