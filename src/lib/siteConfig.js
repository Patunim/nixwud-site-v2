export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://nixwud.com";
export const SITE_NAME = "Nixwud Consultancy";
export const SITE_SHORT_NAME = "Nixwud";
export const SITE_DESCRIPTION =
  "Nixwud Consultancy helps organizations align business priorities, technology decisions and operational execution.";
export const CONTACT_EMAIL = "hello@nixwud.com";
export const SOCIAL_LINKS = [];

export const services = [
  {
    slug: "strategy-business-analysis",
    number: "01",
    title: "Strategy & Business Analysis",
    summary: "Clarify the problem, priorities and evidence before committing to a solution.",
    outcomes: ["Clearer priorities", "Better requirements", "Decision-ready roadmaps"]
  },
  {
    slug: "digital-platforms",
    number: "02",
    title: "Digital Platforms",
    summary: "Build websites and digital platforms around business value, usability and long-term maintainability.",
    outcomes: ["Stronger digital foundations", "Better customer journeys", "Maintainable delivery"]
  },
  {
    slug: "ai-crm-business-automation",
    number: "03",
    title: "AI, CRM & Business Automation",
    summary: "Improve how work moves through your business by connecting AI workflows, CRM pipelines and operational automation.",
    outcomes: ["Intelligent workflow automation", "Cleaner CRM pipelines and lead routing", "Reduced manual operational friction"]
  },
  {
    slug: "growth-discoverability",
    number: "04",
    title: "Growth & Discoverability",
    summary: "Connect content, search, marketing and measurement to sustainable demand.",
    outcomes: ["Improved visibility", "Useful content systems", "Measurable growth"]
  }
];

export const industries = [
  {
    slug: "smes-growing-businesses",
    number: "01",
    title: "SMEs & Growing Businesses",
    tagline: "Growth creates pressure. Better systems create leverage.",
    summary: "Growth is useful. Complexity isn't. We help growing businesses simplify operations, connect data and make sound technology investments."
  },
  {
    slug: "educational-career-services",
    number: "02",
    title: "Educational & Career Services",
    tagline: "When the service depends on people, the systems behind it matter.",
    summary: "Education and career services are people businesses. The systems behind them should make the experience easier, not harder."
  }
];
export const caseStudies = [];
export const testimonials = [];

export const navigation = [
  { label: "Insights", href: "/insights" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))
    ]
  },
  { label: "Industries", href: "/industries" },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "All Case Studies", href: "/case-studies" },
      ...caseStudies.map((cs) => ({ label: cs.title, href: cs.href || `/case-studies/${cs.slug}` }))
    ]
  },
  { label: "Resources", href: "/resources" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Nixwud", href: "/about" },
      { label: "Testimonials", href: "/testimonials" }
    ]
  }
];

export const resources = [
  {
    type: "PDF audit",
    title: "Business & Technology Alignment Audit",
    description: "A structured five-part audit to identify where strategy, systems and execution are falling out of alignment.",
    href: "/resources/business-technology-alignment-audit.pdf",
    action: "Download the audit",
    featured: true
  },
  {
    type: "Interactive tool",
    title: "Technology Decision Readiness Scorecard",
    description: "Answer ten focused questions and receive an immediate readiness result with practical next steps.",
    href: "/resources/decision-readiness-scorecard",
    action: "Use the scorecard",
    featured: true
  }
];

export const serviceDetails = {
  "strategy-business-analysis": {
    eyebrow: "Strategy & Business Analysis",
    title: "Make the decision clearer before making the investment.",
    description: "We help leadership teams understand the real business problem, align stakeholders and translate priorities into an evidence-based course of action.",
    challenges: [
      "The team is discussing software solutions before agreeing on the underlying business problem.",
      "Requirements are fragmented across multiple teams, contradictory documents and unspoken assumptions.",
      "A proposed technology investment lacks a defensible business case and clear success metrics."
    ],
    deliverables: [
      "Discovery and stakeholder alignment review",
      "Current-state operations and technical gap assessment",
      "Functional requirements and vendor decision criteria",
      "Prioritized delivery roadmap and investment schedule"
    ]
  },
  "digital-platforms": {
    eyebrow: "Digital Platforms",
    title: "Build a digital foundation that supports the business behind it.",
    description: "We design and deliver websites and digital platforms that are fast, accessible, understandable and practical for internal teams to operate.",
    challenges: [
      "The current website or digital platform no longer reflects the maturity and scale of the business.",
      "Content is difficult for non-technical teams to manage, publish, update or structure.",
      "Accumulated technical debt and legacy architecture are slowing down commercial changes."
    ],
    deliverables: [
      "Digital platform strategy and technical architecture",
      "User research, information architecture and UX structure",
      "Accessible front-end and robust platform delivery",
      "Content management workflows and governance models"
    ]
  },
  "ai-crm-business-automation": {
    eyebrow: "AI, CRM & Business Automation",
    title: "Connect how work, leads and data move through your systems.",
    description: "We help organizations design and implement practical automation across AI workflows, CRM lifecycle management, and core business systems, reducing operational friction without introducing fragile technical complexity.",
    challenges: [
      "Manual, repetitive tasks and manual data entry are consuming valuable internal team time.",
      "Commercial leads fall through operational gaps due to disconnected CRM pipelines and manual handoffs.",
      "The leadership team is under pressure to adopt AI tools without a clear business use case or integration roadmap.",
      "Disparate software tools and databases operate in isolation, creating data silos and reporting delays."
    ],
    deliverables: [
      "AI workflow design and repetitive process automation",
      "CRM architecture, pipeline structure and automated lead routing",
      "System integration, webhook connections and data synchronization",
      "Operational efficiency assessment and automation roadmap"
    ]
  },
  "growth-discoverability": {
    eyebrow: "Growth & Discoverability",
    title: "Turn useful expertise into sustained visibility and demand.",
    description: "We build discoverability systems that connect search performance, technical SEO, authoritative content and measurement to commercial priorities.",
    challenges: [
      "The organization has genuine subject-matter expertise but remains difficult for prospective clients to find online.",
      "Marketing and content publishing activity is disconnected from commercial enquiries and revenue outcomes.",
      "Leadership cannot clearly identify which channels, pages or campaigns are generating qualified demand."
    ],
    deliverables: [
      "Technical SEO, semantic architecture and discoverability strategy",
      "Editorial content structure and subject-matter topic modeling",
      "Channel strategy and qualified demand capture planning",
      "Conversion tracking and executive analytics framework"
    ]
  }
};
