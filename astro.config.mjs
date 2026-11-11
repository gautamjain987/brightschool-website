import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URLs must match the old Wix site exactly: www host, no trailing slash.
export default defineConfig({
  site: 'https://www.brightschoolonline.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
