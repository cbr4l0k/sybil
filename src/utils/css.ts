/**
 * CSS utility functions for dynamic class generation
 */

/**
 * Combines multiple class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
}

/**
 * Conditionally applies a class name based on a condition
 */
export function conditionalClass(condition: boolean, className: string, elseClassName?: string): string {
  return condition ? className : (elseClassName || '');
}

/**
 * Creates variant-based class names for components
 */
export function createVariantClass(base: string, variant?: string): string {
  return variant ? `${base}--${variant}` : base;
}

/**
 * Generates responsive utility classes
 */
export function responsiveClass(base: string, breakpoints: Record<string, string>): string {
  const classes = [base];
  Object.entries(breakpoints).forEach(([breakpoint, modifier]) => {
    classes.push(`${breakpoint}:${base}--${modifier}`);
  });
  return classes.join(' ');
}