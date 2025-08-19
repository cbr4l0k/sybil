/**
 * Development configuration and constants
 */

/**
 * Site configuration
 */
export const SITE_CONFIG = {
  name: 'Sybil',
  title: 'Sybil | Transformación Digital Inteligente',
  description: 'Diseñamos y desarrollamos automatizaciones personalizadas, aplicamos inteligencia artificial y reestructuramos procesos con enfoque estratégico, rentable y humano.',
  email: 'info@sybil.com',
  phone: '+57 320 288 9729',
  baseUrl: import.meta.env.BASE_URL || '/',
} as const;

/**
 * Theme configuration
 */
export const THEME_CONFIG = {
  colors: {
    primary: 'var(--royal-blue)',
    secondary: 'var(--cornflower-blue)',
    accent: 'var(--honeydew)',
    dark: 'var(--oxford-blue)',
    light: 'var(--white)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
} as const;

/**
 * Component variants
 */
export const COMPONENT_VARIANTS = {
  card: ['method', 'nivel', 'fase', 'industria'] as const,
  grid: ['method', 'niveles', 'fases', 'industrias', 'metrics'] as const,
  button: ['primary', 'secondary'] as const,
} as const;

/**
 * Default navigation links
 */
export const DEFAULT_NAVIGATION = [
  { href: '#metodologia', label: 'Metodología' },
  { href: '#contacto', label: 'Contacto' },
] as const;

/**
 * Development environment helpers
 */
export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
export const isPreview = import.meta.env.MODE === 'preview';

/**
 * Debug logging helper (only in development)
 */
export function debugLog(...args: unknown[]): void {
  if (isDev) {
    console.log('[DEBUG]', ...args);
  }
}
