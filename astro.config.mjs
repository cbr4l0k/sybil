// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sybil.lat',
    base: process.env.NODE_ENV === 'production' ? undefined : undefined,
});
