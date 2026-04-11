/**
 * Internationalization (i18n) Configuration
 * Supports multiple locales with fallback to English
 * 
 * Locales include country-specific abbreviations:
 * - py: Paraguay (Spanish)
 * - bo: Bolivia (Spanish)
 * - sr: Suriname (Dutch)
 * - gy: Guyana (English)
 */

export const locales = [
  'en', 'es', 'pt', 'fr', // Original locales
  'py', 'bo', 'sr', 'gy' // Country-specific locale abbreviations
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Base language mapping for country-specific locales
export const localeBaseLanguage: Record<Locale, string> = {
  'en': 'en',
  'es': 'es',
  'pt': 'pt',
  'fr': 'fr',
  'py': 'es',
  'bo': 'es',
  'sr': 'nl',
  'gy': 'en',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  py: 'Español (Paraguay)',
  bo: 'Español (Bolivia)',
  sr: 'Nederlands (Suriname)',
  gy: 'English (Guyana)',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷',
  fr: '🇫🇷',
  py: '🇵🇾',
  bo: '🇧🇴',
  sr: '🇸🇷',
  gy: '🇬🇾',
};

export const localeCountries: Record<Locale, string> = {
  en: 'United States',
  es: 'Spain',
  pt: 'Brazil',
  fr: 'France',
  py: 'Paraguay',
  bo: 'Bolivia',
  sr: 'Suriname',
  gy: 'Guyana',
};

export const localeCurrencies: Record<Locale, { code: string; symbol: string; name: string }> = {
  en: { code: 'USD', symbol: '$', name: 'US Dollar' },
  es: { code: 'EUR', symbol: '€', name: 'Euro' },
  pt: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  fr: { code: 'EUR', symbol: '€', name: 'Euro' },
  py: { code: 'PYG', symbol: '₲', name: 'Paraguayan Guaraní' },
  bo: { code: 'BOB', symbol: 'Bs', name: 'Bolivian Boliviano' },
  sr: { code: 'SRD', symbol: '$', name: 'Surinamese Dollar' },
  gy: { code: 'GYD', symbol: '$', name: 'Guyanese Dollar' },
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  es: 'ltr',
  pt: 'ltr',
  fr: 'ltr',
  py: 'ltr',
  bo: 'ltr',
  sr: 'ltr',
  gy: 'ltr',
};

export const i18nConfig = {
  locales,
  defaultLocale,
  localeNames,
  localeFlags,
  localeCountries,
  localeCurrencies,
  localeDirections,
  localeBaseLanguage,
  
  // Locale detection settings
  localeDetection: true,
  
  // Prefix for locale in URL (e.g., /en/properties)
  localePrefix: 'always' as const,
  
  // Cookie name for storing preferred locale
  localeCookie: 'NEXT_LOCALE',
  
  // Accept-Language header settings
  acceptLanguage: {
    enable: true,
    defaultLocale,
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleOrDefault(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return defaultLocale;
}

/**
 * Get the base language from a locale
 * e.g., 'py' -> 'es', 'en' -> 'en'
 */
export function getBaseLanguage(locale: Locale): string {
  return localeBaseLanguage[locale] || locale.split('-')[0];
}

/**
 * Get the dictionary file name for a locale
 * Falls back to base language if country-specific file doesn't exist
 */
export function getDictionaryFileName(locale: Locale): string {
  // For country-specific locales, try to use country-specific file first
  // then fall back to base language file
  return locale;
}

export default i18nConfig;
