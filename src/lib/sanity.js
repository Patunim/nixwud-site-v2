import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "jd42zs3r";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";
const disabled = import.meta.env.PUBLIC_DISABLE_SANITY === "true";
const requestCache = new Map();

export const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

/**
 * Check that a Sanity image contains a resolved or referenced asset before
 * passing it to the image URL builder.
 * @param {any} source
 * @returns {boolean}
 */
export function hasImageAsset(source) {
  return Boolean(source?.asset?._ref || source?.asset?._id);
}

/**
 * Build a Sanity image URL without allowing incomplete or malformed image
 * values to break page rendering.
 * @param {any} source
 * @param {(image: any) => any} transform
 * @returns {string | undefined}
 */
export function safeImageUrl(source, transform = (image) => image) {
  if (!hasImageAsset(source)) return undefined;

  try {
    return transform(builder.image(source)).url();
  } catch {
    console.warn("Invalid Sanity image; omitting it from the page.");
    return undefined;
  }
}

/**
 * Parse an optional Sanity date while rejecting invalid legacy values.
 * @param {unknown} value
 * @returns {Date | undefined}
 */
export function toValidDate(value) {
  if (typeof value !== "string" && typeof value !== "number" && !(value instanceof Date)) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

/**
 * Fetch published content without making the static build depend on Sanity availability.
 * @param {string} query
 * @param {Record<string, unknown>} params
 * @param {any} fallback
 * @returns {Promise<any>}
 */
export async function safeFetch(query, params = {}, fallback = []) {
  if (disabled) return fallback;

  const fetchContent = () => client.fetch(query, params).catch(() => {
    console.warn("Sanity content unavailable; using fallback content.");
    return fallback;
  });

  // During local development, always fetch again so newly published Insights
  // appear after a browser refresh. Production builds cache repeated queries.
  if (import.meta.env.DEV) return fetchContent();

  const key = `${query}\n${JSON.stringify(params)}`;
  if (!requestCache.has(key)) {
    requestCache.set(key, fetchContent());
  }
  return requestCache.get(key);
}
