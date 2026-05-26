import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({

 site: process.env.PUBLIC_SITE_URL || "https://nixwud.com",

  vite: {
    plugins: [tailwind()]
  },

  integrations: [
    sitemap()
  ]

});