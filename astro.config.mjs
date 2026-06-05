import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { execSync } from 'child_process';

/** Integração Astro que gera sitemap no hook astro:build:done */
const sitemapIntegration = () => ({
  name: 'custom-sitemap',
  hooks: {
    'astro:build:done': async () => {
      try {
        execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit', cwd: process.cwd() });
      } catch (e) {
        console.warn('⚠️  custom-sitemap: generate-sitemap.mjs falhou');
      }
    },
  },
});

export default defineConfig({
  site: 'https://www.portalmounjax.com.br',
  compressHTML: true,
  integrations: [
    tailwind(),
    sitemapIntegration(),
  ],
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
