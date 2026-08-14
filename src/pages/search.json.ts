import type { APIRoute } from "astro";
import { safeFetch } from "../lib/sanity.js";
import { services } from "../lib/siteConfig.js";

const staticPages = [
  { title: "About Nixwud Consultancy", description: "Our philosophy, mission and operating principles.", type: "Page", url: "/about" },
  { title: "Consulting Services", description: "Business and technology consulting capabilities.", type: "Page", url: "/services" },
  { title: "Industries", description: "Industry-aware consulting and decision support.", type: "Page", url: "/industries" },
  { title: "Case Studies", description: "Evidence-led client outcomes.", type: "Page", url: "/case-studies" },
  { title: "Free Resources", description: "Audits, scorecards and practical tools.", type: "Page", url: "/resources" },
  { title: "Technology Decision Readiness Scorecard", description: "Assess whether a technology decision is ready to move forward.", type: "Tool", url: "/resources/decision-readiness-scorecard" },
  { title: "Business & Technology Alignment Audit", description: "A downloadable alignment audit.", type: "PDF", url: "/resources/business-technology-alignment-audit.pdf" },
  ...services.map((service) => ({ title: service.title, description: service.summary, type: "Service", url: `/services/${service.slug}` }))
];

export const GET: APIRoute = async () => {
  const insights = await safeFetch(`*[_type == "post" && defined(slug.current) && editorialStatus == "published"]{title, "description": coalesce(excerpt, summary, keyInsight), "url": "/insights/" + slug.current}`, {}, []) as Array<Record<string, any>>;
  const resources = await safeFetch(`*[_type == "resource" && published == true]{title, description, "url": coalesce(externalUrl, file.asset->url, "/resources/" + slug.current)}`, {}, []) as Array<Record<string, any>>;
  const index = [...staticPages, ...insights.map((item) => ({ ...item, type: "Insight" })), ...resources.map((item) => ({ ...item, type: "Resource" }))];
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
