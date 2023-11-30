import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), preact()]
});