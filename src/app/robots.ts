import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/agents/', '/blog-list-v1/', '/blog-list-v2/', '/blog-list-v3/', '/single-v2/', '/single-v3/', '/single-v4/', '/single-v5/', '/single-v6/', '/single-v7/', '/single-v8/', '/single-v9/', '/single-v10/', '/grid-full-1-col-v1/', '/grid-full-1-col-v2/', '/grid-full-2-col/', '/grid-full-3-col/', '/grid-full-4-col/', '/list-all-style/', '/map-v1/', '/map-v2/', '/map-v3/', '/map-v4/', '/banner-search-v1/', '/banner-search-v2/', '/home-v1/', '/home-v2/', '/home-v3/', '/home-v4/', '/home-v5/', '/home-v6/', '/home-v7/', '/home-v8/', '/home-v9/', '/home-v10/', '/agency-single/', '/agent-single/', '/compare/', '/invoice/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
