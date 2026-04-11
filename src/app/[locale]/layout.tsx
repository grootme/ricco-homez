import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/providers';
import { AIChatAssistant } from '@/components/chat';
import { routing } from '@/i18n/routing';
import { SITE_URL, SITE_NAME, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Locale Layout
 * - Validates locale against valid locales
 * - Loads messages for next-intl
 * - Wraps children with NextIntlClientProvider and other providers
 * - Sets the html lang attribute
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Find Your Dream Property`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} - Find your dream property. Browse thousands of listings for sale and rent across major cities.`,
  metadataBase: new URL(SITE_URL),
  keywords: ['real estate', 'property', 'homes for sale', 'apartments', 'houses', 'rentals', 'agents', SITE_NAME],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Find Your Dream Property`,
    description: `${SITE_NAME} - Find your dream property. Browse thousands of listings for sale and rent across major cities.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Find Your Dream Property`,
    description: `${SITE_NAME} - Find your dream property. Browse thousands of listings for sale and rent across major cities.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    alternates: {
    canonical: SITE_URL,
  },
};

const organizationJsonLd = generateOrganizationSchema();
const webSiteJsonLd = generateWebSiteSchema();

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Get locale from params
  const { locale: paramLocale } = await params;
  
  // Validate locale - if invalid, return 404
  if (!routing.locales.includes(paramLocale as any)) {
    notFound();
  }
  
  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={paramLocale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
            <Toaster />
            <AIChatAssistant />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
