import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://bramlabs.co",
  // "static" mode: every page is prerendered at build time by default.
  // Only routes that opt out with `export const prerender = false` are
  // server-rendered on Cloudflare (currently just the form endpoints).
  // This is deliberate — under the previous "server" default a page that
  // forgot `prerender = true` silently became an SSR route.
  output: "static",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  compressHTML: true,
});
