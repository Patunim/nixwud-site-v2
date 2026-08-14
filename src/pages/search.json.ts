import type { APIRoute } from "astro";
import { safeFetch } from "../lib/sanity.js";
import { resources, services } from "../lib/siteConfig.js";

const staticPages = [
  { title: "About Nixwud Consultancy", description: "Our philosophy, mission and operating principles.", type: "Page", url: "/about" },
  { title: "Consulting Services", description: "Business and technology consulting capabilities.", type: "Page", url: "/services" },
  { title: "Industries", description: "Industry-aware consulting and decision support.", type: "Page", url: "/industries" },
  { title: "Case Studies", description: "Evidence-led client outcomes.", type: "Page", url: "/case-studies" },
  { title: "Free Resources", description: "Audits, scorecards and practical tools.", type: "Page", url: "/resources" },
  ...services.map((service) => ({ title: service.title, description: service.summary, type: "Service", url: `/services/${service.slug}` })),
  ...resources.map((resource) => ({ title: resource.title, description: resource.description, type: resource.type, url: resource.href }))
];

export const GET: APIRoute = async () => {
  const insights = await safeFetch(`*[_type == "post" && !(_id in path("drafts.**")) && defined(title) && defined(slug.current)]{title, "description": coalesce(excerpt, summary, keyInsight, ""), "url": "/insights/" + slug.current}`, {}, []) as Array<Record<string, any>>;
  const index = [...staticPages, ...insights.map((item) => ({ ...item, type: "Insight" }))];
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
