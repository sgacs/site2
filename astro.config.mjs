import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://mimoesa.io/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://mimoesa.io/sitemap-index.xml",
        "https://mimoesa.io/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon({
      include: {
        ri: ["*"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: cloudflare(),
  image: {
      // Example: Enable the Sharp-based image service
      service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
