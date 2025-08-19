/**
 * Data manipulation utilities for content management
 */

import type { CardProps, LinkProps } from '../types/index.ts';

/**
 * Validates that an array of items has the required properties
 */
export function validateCardItems(items: unknown[]): items is CardProps[] {
  return items.every(item => 
    typeof item === 'object' && 
    item !== null && 
    'title' in item && 
    'body' in item
  );
}

/**
 * Validates that an array of links has the required properties
 */
export function validateLinkItems(items: unknown[]): items is LinkProps[] {
  return items.every(item =>
    typeof item === 'object' &&
    item !== null &&
    'href' in item &&
    'label' in item &&
    typeof (item as LinkProps).href === 'string' &&
    typeof (item as LinkProps).label === 'string'
  );
}

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Filters and sorts content items for display
 */
export function prepareContentItems<T extends { title?: string }>(
  items: T[], 
  sortBy: 'title' | 'none' = 'none'
): T[] {
  const filtered = items.filter(item => item.title && item.title.trim() !== '');
  
  if (sortBy === 'title') {
    return filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  }
  
  return filtered;
}

/**
 * Creates content data with automatic numbering for phases/steps
 */
export function createNumberedItems<T extends CardProps>(items: Omit<T, 'number'>[]): (T & { number: number })[] {
  return items.map((item, index) => ({
    ...item as T,
    number: index + 1
  }));
}