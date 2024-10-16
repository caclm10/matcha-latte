// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://caclm10.github.io',
    base: '/matcha-latte',
    prefetch: {
        defaultStrategy: 'load',
        prefetchAll: true
    },
    integrations: [tailwind()]
});