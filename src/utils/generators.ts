/**
 * Generator utilities for creating component templates and data structures
 */

import type { CardProps, LinkProps } from '../types/index.ts';

/**
 * Generates a basic card data structure
 */
export function generateCardData(
  title: string,
  body: string,
  variant: CardProps['variant'] = 'method'
): CardProps {
  return {
    title,
    body,
    variant,
  };
}

/**
 * Generates navigation link data
 */
export function generateNavLink(label: string, href: string): LinkProps {
  return {
    label,
    href: href.startsWith('#') ? href : `#${href}`,
  };
}

/**
 * Generates a phase/step data structure with automatic numbering
 */
export function generatePhaseData(phases: Array<{ title: string; body: string }>): Array<CardProps & { number: number }> {
  return phases.map((phase, index) => ({
    ...phase,
    variant: 'fase' as const,
    number: index + 1,
  }));
}

/**
 * Generates SEO meta data structure
 */
export function generateSEOData(title: string, description?: string) {
  return {
    title,
    description: description || `${title} - Transformación Digital Inteligente`,
    ogTitle: title,
    ogDescription: description || `${title} - Transformación Digital Inteligente`,
  };
}

/**
 * Generates a complete section data structure
 */
export function generateSectionData(
  id: string,
  title: string,
  intro: string,
  items: CardProps[],
  variant: 'method' | 'niveles' | 'fases' | 'industrias' = 'method'
) {
  return {
    id,
    title,
    intro,
    items,
    variant,
  };
}