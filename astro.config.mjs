// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    base: process.env.NODE_ENV === 'production' ? '/web/' : undefined,
});
