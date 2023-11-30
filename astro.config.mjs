import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    ssr: {}, // logLevel: 'silent' // while I'm working on JSON files!
    css: {
      devSourcemap: true,
    },
  },
  integrations: [expressiveCode(), preact()],
  scopedStyleStrategy: 'class'
});