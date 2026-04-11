import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

/**
 * Root Page
 * Redirects to the default locale
 * The middleware handles locale detection and redirection for other cases
 */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
