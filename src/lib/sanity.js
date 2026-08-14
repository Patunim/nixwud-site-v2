import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "jd42zs3r";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01";
const disabled = import.meta.env.PUBLIC_DISABLE_SANITY === "true";
const requestCache = new Map();

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
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
  const key = `${query}\n${JSON.stringify(params)}`;
  if (!requestCache.has(key)) {
    requestCache.set(key, client.fetch(query, params).catch(() => {
      console.warn("Sanity content unavailable during build; using fallback content.");
      return fallback;
    }));
  }
  return requestCache.get(key);
}
