/**
 * SEO Utility Functions
 * Provides helper functions for generating SEO metadata, JSON-LD structured data,
 * Open Graph tags, canonical URLs, and other SEO-related utilities.
 */

import type { Metadata } from 'next';

// Site configuration
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://homez.com';
const SITE_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'Homez';

/**
 * Generate a canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Generate Open Graph metadata
 */
export function generateOpenGraph({
  title,
  description,
  url,
  image,
  type = 'website',
  locale = 'en_US',
  siteName = SITE_NAME,
}: {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  locale?: string;
  siteName?: string;
}): Metadata['openGraph'] {
  return {
    title,
    description: description ?? `Find your dream property with ${SITE_NAME}`,
    url: url ? `${SITE_URL}${url}` : SITE_URL,
    siteName,
    locale,
    type,
    images: image
      ? [{ url: image, width: 1200, height: 630, alt: title }]
      : [{ url: `${SITE_URL}/og-default.jpg`, width: 1200, height: 630, alt: `${SITE_NAME} - ${title}` }],
  };
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterCard({
  title,
  description,
  image,
  cardType = 'summary_large_image',
}: {
  title: string;
  description?: string;
  image?: string;
  cardType?: 'summary' | 'summary_large_image';
}): Metadata['twitter'] {
  return {
    card: cardType,
    title,
    description: description ?? `Find your dream property with ${SITE_NAME}`,
    images: image ?? `${SITE_URL}/og-default.jpg`,
  };
}

/**
 * Generate base page metadata
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = path ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - ${title}`;
  const canonicalUrl = getCanonicalUrl(path);

  return {
    title: fullTitle,
    description: description ?? `Find your dream property with ${SITE_NAME}. Browse thousands of listings for sale and rent.`,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: generateOpenGraph({ title: fullTitle, url: path, image }),
    twitter: generateTwitterCard({ title: fullTitle, image }),
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

/**
 * Generate Real Estate Listing JSON-LD structured data
 */
export function generateRealEstateListingSchema(property: {
  title: string;
  description: string;
  price: number;
  priceSuffix?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  image?: string;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  yearBuilt?: number;
  agent?: { name: string; phone?: string; image?: string };
}) {
  const priceStr = property.priceSuffix
    ? `$${property.price.toLocaleString()} / ${property.priceSuffix}`
    : `$${property.price.toLocaleString()}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: SITE_URL,
    image: property.image ?? property.images?.[0],
    datePosted: new Date().toISOString(),
    price: priceStr,
    priceCurrency: 'USD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zipCode,
      addressCountry: property.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.latitude,
      longitude: property.longitude,
    },
    ...(property.bedrooms && { numberOfRooms: property.bedrooms }),
    ...(property.bathrooms && { numberOfBathroomsTotal: property.bathrooms }),
    ...(property.sqft && { floorSize: { '@type': 'QuantitativeValue', value: property.sqft, unitCode: 'FTK' } }),
    ...(property.yearBuilt && { yearBuilt: property.yearBuilt }),
    ...(property.agent && {
      agent: {
        '@type': 'RealEstateAgent',
        name: property.agent.name,
        telephone: property.agent.phone,
        image: property.agent.image,
      },
    }),
  };
}

/**
 * Generate LocalBusiness JSON-LD structured data
 */
export function generateLocalBusinessSchema(business: {
  name: string;
  description: string;
  url?: string;
  phone?: string;
  image?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  rating?: number;
  reviewCount?: number;
  openingHours?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url ?? SITE_URL,
    telephone: business.phone,
    image: business.image,
    ...(business.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zipCode,
        addressCountry: business.address.country,
      },
    }),
    ...(business.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating,
        reviewCount: business.reviewCount ?? 0,
      },
    }),
    ...(business.openingHours && { openingHoursSpecification: business.openingHours }),
  };
}

/**
 * Generate FAQPage JSON-LD structured data
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList JSON-LD structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate Organization/WebSite JSON-LD
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://facebook.com/homez',
      'https://twitter.com/homez',
      'https://instagram.com/homez',
      'https://linkedin.com/company/homez',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-0199',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  };
}

/**
 * Generate WebSite JSON-LD
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/grid-default?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Inject JSON-LD script tag into the page head
 */
export function generateJsonLd(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

/**
 * Format price for display
 */
export function formatPrice(price: number, suffix?: string): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return suffix ? `${formatted} / ${suffix}` : formatted;
}

export { SITE_URL, SITE_NAME };
