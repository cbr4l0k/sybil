// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://cbr4l0k.github.io',
    base: process.env.NODE_ENV === 'production' ? '/sybil/' : undefined,
});
