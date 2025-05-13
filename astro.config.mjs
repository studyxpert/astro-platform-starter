import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // ✅ Import sitemap integration

// https://astro.build/config
export default defineConfig({
  site: 'https://study-xpert.in', // ✅ Required for sitemap
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap(),   // ✅ Add sitemap here
  ],
  adapter: netlify(),
});
