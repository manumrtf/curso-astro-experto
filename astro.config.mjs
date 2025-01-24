// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import clerk from "@clerk/astro";

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), clerk()],
  output:'server',
  adapter:vercel(),
  image: {
  remotePatterns:[{protocol:"https",hostname:"images.pexels.com" }]
  }
});