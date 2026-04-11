/**
 * i18n Module Exports
 */

// Config exports
export {
  locales,
  defaultLocale,
  localeNames,
  localeFlags,
  localeCountries,
  localeCurrencies,
  localeDirections,
  localeBaseLanguage,
  i18nConfig,
  isValidLocale,
  getLocaleOrDefault,
  getBaseLanguage,
  getDictionaryFileName,
  type Locale,
} from './config';

// Dictionary exports
export {
  getDictionary,
  t,
  type Dictionary,
} from './dictionary';
