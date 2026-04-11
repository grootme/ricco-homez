'use client';

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from 'react';
import { useLocale as useNextIntlLocale, useTranslations } from 'next-intl';
import { locales, defaultLocale, localeNames, localeFlags, type Locale } from '@/lib/i18n';

interface I18nContextType {
  /** Current locale */
  locale: Locale;
  /** Available locales */
  locales: typeof locales;
  /** Default locale */
  defaultLocale: Locale;
  /** Locale names */
  localeNames: typeof localeNames;
  /** Locale flags */
  localeFlags: typeof localeFlags;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

/**
 * I18nProvider - Wraps children with i18n context
 * Uses next-intl under the hood for translations
 */
export function I18nProvider({
  children,
}: I18nProviderProps) {
  // Get locale from next-intl
  const currentLocale = useNextIntlLocale() as Locale;
  
  const value: I18nContextType = {
    locale: currentLocale || defaultLocale,
    locales,
    defaultLocale,
    localeNames,
    localeFlags,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * Hook to access i18n context
 */
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

/**
 * Hook to get translation function
 * Uses next-intl's useTranslations under the hood
 * Supports fallback strings for backwards compatibility
 */
export function useTranslation() {
  const { locale } = useI18n();
  const t = useTranslations();
  
  // Create a wrapper function that supports fallback strings
  const translate = useCallback(
    (key: string, fallback?: string): string => {
      try {
        const translation = t(key);
        // If the translation returns the key itself (meaning not found), use fallback
        if (translation === key && fallback) {
          return fallback;
        }
        return translation;
      } catch {
        // If translation throws an error, return fallback or key
        return fallback ?? key;
      }
    },
    [t]
  );
  
  return { t: translate, locale };
}

/**
 * Hook to get current locale
 */
export function useLocale() {
  const { locale, defaultLocale, locales } = useI18n();
  return { locale, defaultLocale, locales };
}

export default I18nProvider;
