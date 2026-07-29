import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bramlabs.co",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/thank-you") && !page.includes("/activate"),
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 8080,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  compressHTML: true,
});
