/**
 * next-intl Configuration Exports
 * Re-exports all i18n utilities for use throughout the application
 */

// Routing configuration
export { routing } from './routing';

// Navigation utilities (Link, redirect, usePathname, useRouter, getPathname)
export { 
  Link, 
  redirect, 
  usePathname, 
  useRouter, 
  getPathname 
} from './routing';

// Request configuration (for server-side)
export { default as getRequestConfig } from './request';

// Type exports
export type { LocalePrefix, Pathnames } from 'next-intl/routing';
