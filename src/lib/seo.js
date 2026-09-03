import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  SOCIAL_LINKS
} from "./siteConfig.js";

/**
 * Format a canonical URL from a pathname.
 * @param {string} [pathname]
 * @returns {string}
 */
export function getCanonicalUrl(pathname = "/") {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const cleanPath = pathname ? pathname.replace(/^\/+/, "") : "";
  if (!cleanPath) return baseUrl;
  return `${baseUrl}/${cleanPath.replace(/\/+$/, "")}`;
}

/**
 * Format an absolute image URL for Open Graph and Twitter metadata.
 * @param {string} [imagePath]
 * @returns {string}
 */
export function getAbsoluteImageUrl(imagePath = "/og-default.png") {
  if (!imagePath) return `${SITE_URL.replace(/\/+$/, "")}/og-default.png`;
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const cleanPath = imagePath.replace(/^\/+/, "");
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Serialize JSON-LD structured data safely to prevent script breakout injections.
 * @param {Record<string, unknown> | Array<Record<string, unknown>>} value
 * @returns {string}
 */
export function serializeJsonLd(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Build Organization & ProfessionalService schema for the firm.
 * @returns {Record<string, unknown>}
 */
export function buildOrganizationSchema() {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}#organization`,
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: baseUrl,
    logo: `${baseUrl}/brand/nixwud-logo.png`,
    image: `${baseUrl}/og-default.png`,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    priceRange: "$$$",
    sameAs: SOCIAL_LINKS.length ? SOCIAL_LINKS : undefined,
    knowsAbout: [
      "Web design and development",
      "Custom web applications",
      "CRM systems and workflow automation",
      "Technical SEO and discoverability",
      "Content management systems",
      "Internal tools and business systems"
    ]
  };
}

/**
 * Build WebSite schema with internal search potential.
 * @returns {Record<string, unknown>}
 */
export function buildWebSiteSchema() {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    url: baseUrl,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${baseUrl}#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Build BreadcrumbList schema.
 * @param {Array<{ name: string; url: string }>} items
 * @returns {Record<string, unknown>}
 */
export function buildBreadcrumbSchema(items = []) {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url.startsWith("/") ? item.url : `/${item.url}`}`
    }))
  };
}

/**
 * Build Service schema for individual capability detail pages.
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.description
 * @param {string} params.url
 * @param {string} [params.serviceType]
 * @returns {Record<string, unknown>}
 */
export function buildServiceSchema({ name, description, url, serviceType }) {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: serviceType || name,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}#organization`,
      name: SITE_NAME,
      url: baseUrl
    }
  };
}
