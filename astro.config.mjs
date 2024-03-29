import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";

// import { SITE_COLOR, SITE_TITLE, SITE_DESCRIPTION } from "./src/consts";

const { VITE_APP_BASE_URL } = import.meta.env;

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: VITE_APP_BASE_URL,
  image: {
    service: squooshImageService(),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  integrations: [
    mdx(),
    icon(),
    sitemap(),
    partytown(),
    react({
      include: ["**/react/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    tailwind(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
