// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Served by GitHub Pages under a custom domain (see public/CNAME and the repo's Pages settings)
const SITE = 'https://harveywirth.de';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  // The CV is the home page now; keep the old URLs working
  redirects: {
    '/cv': '/',
    '/en/cv': '/en',
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
  // Personal details for the legal notice: kept out of the repo, set in .env locally and as GitHub secrets for deploys
  env: {
    schema: {
      IMPRESSUM_STREET: envField.string({ context: 'server', access: 'public' }),
      IMPRESSUM_CITY: envField.string({ context: 'server', access: 'public' }),
      IMPRESSUM_PHONE: envField.string({ context: 'server', access: 'public' }),
    },
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } },
      filter: (page) => !page.includes('/impressum'),
    }),
  ],
});
