/**
 * Validation utilities for component props and data
 */

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates that a string is not empty after trimming
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validates anchor link format (starts with #)
 */
export function isValidAnchor(anchor: string): boolean {
  return typeof anchor === 'string' && anchor.startsWith('#') && anchor.length > 1;
}

/**
 * Sanitizes text content for safe HTML rendering
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Validates required props for components
 */
export function validateRequiredProps<T extends Record<string, unknown>>(
  props: T,
  required: (keyof T)[]
): boolean {
  return required.every(key => {
    const value = props[key];
    return value !== undefined && value !== null && value !== '';
  });
}