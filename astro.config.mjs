import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mtocommunity.com",
  base: "",
  integrations: [tailwind(), react(), mdx()],
  adapter: cloudflare(),
  output: "static",
});
