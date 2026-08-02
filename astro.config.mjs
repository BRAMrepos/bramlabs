import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://bramlabs.co",
  // "server" mode: all pages are SSR by default.
  // Static pages declare `export const prerender = true`.
  // The /api/contact route stays server-rendered (prerender = false).
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  trailingSlash: "always",
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  compressHTML: true,
});
