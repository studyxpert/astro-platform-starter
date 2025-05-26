import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://study-xpert.in',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()],
  adapter: netlify()
});
