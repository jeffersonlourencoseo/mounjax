import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mounjax-five.vercel.app',
  compressHTML: true,
  integrations: [
    tailwind(),
  ],
  vite: {
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 35000,
    },
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
