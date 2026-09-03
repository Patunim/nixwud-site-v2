import type { APIRoute } from "astro";
import { safeFetch } from "../lib/sanity.js";
import { caseStudies, resources, services } from "../lib/siteConfig.js";

const staticPages = [
  { title: "About Nixwud", description: "Our philosophy, engineering standards and operating principles.", type: "Page", url: "/about" },
  { title: "Services & Capabilities", description: "Web design & development, custom applications, CRM automation and SEO.", type: "Page", url: "/services" },
  { title: "Selected Work", description: "Real systems engineered for operational results.", type: "Page", url: "/case-studies" },
  { title: "Resources & Tools", description: "Actionable scorecards, diagnostic audits and engineering checklists.", type: "Page", url: "/resources" },
  { title: "Contact Nixwud", description: "Start a project or discuss your digital requirements.", type: "Page", url: "/contact" },
  ...services.map((service) => ({ title: service.title, description: service.summary, type: "Service", url: `/services/${service.slug}` })),
  ...caseStudies.map((study) => ({ title: study.title, description: study.summary || study.challenge, type: "Case Study", url: `/case-studies/${study.slug}` })),
  ...resources.map((resource) => ({ title: resource.title, description: resource.description, type: resource.type, url: resource.href }))
];

export const GET: APIRoute = async () => {
  const insights = await safeFetch(`*[_type == "post" && !(_id in path("drafts.**")) && defined(title) && defined(slug.current)]{title, "description": coalesce(excerpt, summary, keyInsight, ""), "url": "/insights/" + slug.current}`, {}, []) as Array<Record<string, any>>;
  const index = [...staticPages, ...insights.map((item) => ({ ...item, type: "Insight" }))];
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
