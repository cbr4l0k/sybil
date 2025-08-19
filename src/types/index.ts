/**
 * Shared type definitions for the application
 */

export interface LinkProps {
  href: string;
  label: string;
}

export interface CardProps {
  title?: string;
  body?: string;
  variant?: 'method' | 'nivel' | 'fase' | 'industria';
  number?: number;
}

export interface SectionProps {
  id?: string;
  title?: string;
  intro?: string;
  className?: string;
  children?: any;
}