import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { db } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'always', priority: 1.0 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/en/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/en/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/login`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/en/register`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic property pages
  let propertyPages: MetadataRoute.Sitemap = [];
  try {
    const properties = await db.property.findMany({
      where: { status: { in: ['for-sale', 'for-rent'] } },
      select: { slug: true, updatedAt: true },
      take: 500,
    });
    propertyPages = properties.map((p) => ({
      url: `${baseUrl}/en/single-v1/${p.id}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch {
    // Database not available, skip dynamic pages
  }

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await db.blogPost.findMany({
      where: { status: 'published' },
      select: { slug: true, updatedAt: true },
      take: 100,
    });
    blogPages = posts.map((p) => ({
      url: `${baseUrl}/en/blogs/${p.id}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch {
    // Database not available, skip
  }

  // Dynamic city pages
  let cityPages: MetadataRoute.Sitemap = [];
  try {
    const cities = await db.city.findMany({
      where: { featured: true },
      select: { slug: true },
      take: 50,
    });
    cityPages = cities.map((c) => ({
      url: `${baseUrl}/en/grid-default?city=${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));
  } catch {
    // Database not available, skip
  }

  return [...staticPages, ...propertyPages, ...blogPages, ...cityPages];
}
