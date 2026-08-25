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
    outcomes: ["Intelligent workflow automation", "Cleaner CRM pipelines & lead routing", "Reduced manual operational friction"]
  },
  {
    slug: "growth-discoverability",
    number: "04",
    title: "Growth & Discoverability",
    summary: "Connect content, search, marketing and measurement to sustainable demand.",
    outcomes: ["Improved visibility", "Useful content systems", "Measurable growth"]
  }
];

/**
 * Fixed website content is kept in source control instead of Sanity.
 * Add approved industry profiles here when they are ready to publish.
 * @type {Array<{title: string; summary: string; challenges: string[]}>}
 */
export const industries = [];

/**
 * Add approved case studies here. Do not publish client details without permission.
 * @type {Array<{title: string; client?: string; challenge: string; outcome?: string}>}
 */
export const caseStudies = [];

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
  { label: "About", href: "/about" }
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
      "The team is discussing solutions before agreeing on the problem.",
      "Requirements are fragmented across people, documents and assumptions.",
      "A technology investment needs a stronger business case."
    ],
    deliverables: ["Discovery and stakeholder analysis", "Current-state and gap assessment", "Requirements and decision criteria", "Prioritized transformation roadmap"]
  },
  "digital-platforms": {
    eyebrow: "Digital Platforms",
    title: "Build a digital foundation that supports the business behind it.",
    description: "We design and deliver websites and content platforms that are fast, accessible, understandable and practical to operate.",
    challenges: [
      "The current website no longer reflects the quality of the organization.",
      "Content is difficult to manage, reuse or discover.",
      "Technical debt is slowing down change."
    ],
    deliverables: ["Digital experience strategy", "Information architecture and UX", "Website and platform delivery", "Content systems and technical governance"]
  },
  "ai-crm-business-automation": {
    eyebrow: "AI, CRM & Business Automation",
    title: "Connect how work, leads and data move through your systems.",
    description: "We help organizations design and implement practical automation across AI workflows, CRM lifecycle management, and core business systems—reducing friction without introducing unnecessary operational complexity.",
    challenges: [
      "Manual, repetitive tasks and data entry are consuming valuable team time.",
      "Leads and prospect data fall through cracks due to fragmented CRM workflows and inconsistent pipeline routing.",
      "Teams are under pressure to adopt AI or automation without a clear business use case or integration plan.",
      "Disparate software tools and business platforms operate in silos, creating operational bottlenecks."
    ],
    deliverables: [
      "AI workflow and repetitive task automation",
      "CRM architecture, pipeline management and lead routing",
      "End-to-end system integration and data synchronization",
      "Process optimization and operational automation roadmap"
    ]
  },
  "growth-discoverability": {
    eyebrow: "Growth & Discoverability",
    title: "Turn useful expertise into sustained visibility and demand.",
    description: "We build discoverability systems that connect search, content, digital marketing and measurement to commercial priorities.",
    challenges: [
      "The organization has expertise but is difficult to find online.",
      "Marketing activity is disconnected from business outcomes.",
      "Teams cannot clearly explain what is driving enquiries."
    ],
    deliverables: ["SEO and GEO strategy", "Content and information architecture", "Campaign and channel planning", "Measurement framework"]
  }
};
