'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { I18nProvider } from './I18nProvider';
import { AuthProvider } from './AuthProvider';
import { DataProvider } from './DataProvider';
import type { RiccoIdUser } from '@/lib/auth';
import type { DataSourceType } from '@/lib/datasource';

interface ProvidersProps {
  children: ReactNode;
  /** Initial user (from server) */
  initialUser?: RiccoIdUser | null;
  /** Data source type override */
  dataSourceType?: DataSourceType;
}

/**
 * Combined Providers Component
 * Wraps all providers in the correct order
 */
export function Providers({
  children,
  initialUser,
  dataSourceType,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider initialUser={initialUser}>
          <DataProvider dataSourceType={dataSourceType}>
            {children}
          </DataProvider>
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

// Re-export all providers and hooks
export { ThemeProvider, useTheme } from './ThemeProvider';
export { I18nProvider, useI18n, useTranslation, useLocale } from './I18nProvider';
export { AuthProvider, useAuth, useUser, useIsAuthenticated, useRequireAuth } from './AuthProvider';
export {
  DataProvider,
  useData,
  useDataSource,
  usePropertyDataSource,
  useAgentDataSource,
  useCityDataSource,
  useBlogDataSource,
  useTestimonialDataSource,
  useCategoryDataSource,
  useUserDataSource,
  useMessageDataSource,
  useReviewDataSource,
  useInquiryDataSource,
  useTourDataSource,
  usePaymentDataSource,
  useNotificationDataSource,
} from './DataProvider';

// Export types
export type { Locale } from '@/lib/i18n';
export type { Dictionary } from '@/lib/i18n/dictionary';
export type { RiccoIdUser, RiccoIdSession, LoginCredentials, RegisterData } from '@/lib/auth';
export type { DataSource, DataSourceType } from '@/lib/datasource';

export default Providers;
