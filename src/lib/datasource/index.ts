/**
 * Data Source Factory
 * Returns the appropriate data source client based on configuration
 */

import { db } from '@/lib/db';
import { mockDataSource } from './mock';
import type {
  DataSource,
  DataSourceType,
  Property,
  Agent,
  City,
  Testimonial,
  BlogPost,
  Category,
  Review,
  Inquiry,
  Tour,
  DashboardStats,
  DashboardUser,
  UserFavorite,
  SavedSearch,
  PropertySearchFilters,
  Message,
  Conversation,
  Package,
  Invoice,
  Notification,
  PaginatedResult,
  PaginationParams,
} from './types';

// Get data source type from environment
function getDataSourceType(): DataSourceType {
  const dataSource = process.env.DATA_SOURCE?.toUpperCase() as DataSourceType;
  if (dataSource === 'MOCK') return 'MOCK';
  if (dataSource === 'API') return 'API';
  return 'DATABASE';
}

// Database Property Data Source Implementation
const dbPropertyDataSource = {
  async getProperties(params?: PropertySearchFilters & PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    
    if (params?.status) {
      where.status = params.status;
    }
    if (params?.propertyType) {
      where.propertyType = { in: params.propertyType };
    }
    if (params?.minPrice || params?.maxPrice) {
      where.price = {};
      if (params.minPrice) where.price.gte = params.minPrice;
      if (params.maxPrice) where.price.lte = params.maxPrice;
    }
    if (params?.minBedrooms) {
      where.bedrooms = { gte: params.minBedrooms };
    }
    if (params?.minBathrooms) {
      where.bathrooms = { gte: params.minBathrooms };
    }

    const [data, total] = await Promise.all([
      db.property.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.property.count({ where }),
    ]);

    return {
      data: data.map(p => ({
        ...p,
        images: JSON.parse(p.images),
        videos: p.videos ? JSON.parse(p.videos) : undefined,
        features: JSON.parse(p.features),
        amenities: JSON.parse(p.amenities),
      })) as Property[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async getPropertyById(id: string) {
    const property = await db.property.findUnique({ where: { id } });
    if (!property) return null;
    return {
      ...property,
      images: JSON.parse(property.images),
      videos: property.videos ? JSON.parse(property.videos) : undefined,
      features: JSON.parse(property.features),
      amenities: JSON.parse(property.amenities),
    } as Property;
  },

  async getPropertyBySlug(slug: string) {
    const property = await db.property.findUnique({ where: { slug } });
    if (!property) return null;
    return {
      ...property,
      images: JSON.parse(property.images),
      videos: property.videos ? JSON.parse(property.videos) : undefined,
      features: JSON.parse(property.features),
      amenities: JSON.parse(property.amenities),
    } as Property;
  },

  async getFeaturedProperties(limit = 6) {
    const properties = await db.property.findMany({
      where: { featured: true, status: { not: 'sold' } },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async getPropertiesByStatus(status: string, limit = 20) {
    const properties = await db.property.findMany({
      where: { status },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async getPropertiesByType(type: string, limit = 20) {
    const properties = await db.property.findMany({
      where: { propertyType: type },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async getPropertiesByCity(city: string, limit = 20) {
    const properties = await db.property.findMany({
      where: { city: { contains: city, mode: 'insensitive' } },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async getPropertiesByAgent(agentId: string, limit = 20) {
    const properties = await db.property.findMany({
      where: { agentId },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async searchProperties(query: string, params?: PropertySearchFilters) {
    const where: Record<string, unknown> = {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { city: { contains: query, mode: 'insensitive' } },
        { address: { contains: query, mode: 'insensitive' } },
      ],
    };

    if (params?.status) where.status = params.status;
    if (params?.minPrice || params?.maxPrice) {
      where.price = {};
      if (params.minPrice) where.price.gte = params.minPrice;
      if (params.maxPrice) where.price.lte = params.maxPrice;
    }

    const properties = await db.property.findMany({
      where,
      take: params?.limit ?? 50,
      orderBy: { createdAt: 'desc' },
    });
    return properties.map(p => ({
      ...p,
      images: JSON.parse(p.images),
      videos: p.videos ? JSON.parse(p.videos) : undefined,
      features: JSON.parse(p.features),
      amenities: JSON.parse(p.amenities),
    })) as Property[];
  },

  async createProperty(data: Partial<Property>) {
    const property = await db.property.create({
      data: {
        title: data.title ?? '',
        slug: data.slug ?? `property-${Date.now()}`,
        description: data.description ?? '',
        price: data.price ?? 0,
        propertyType: data.propertyType ?? 'house',
        status: data.status ?? 'for-sale',
        images: JSON.stringify(data.images ?? []),
        videos: data.videos ? JSON.stringify(data.videos) : null,
        features: JSON.stringify(data.features ?? []),
        amenities: JSON.stringify(data.amenities ?? []),
        address: data.address ?? '',
        city: data.city ?? '',
        state: data.state ?? '',
        zipCode: data.zipCode ?? '',
        country: data.country ?? 'USA',
        bedrooms: data.bedrooms ?? 0,
        bathrooms: data.bathrooms ?? 0,
        sqft: data.sqft ?? 0,
        agentId: data.agentId ?? '',
      },
    });
    return {
      ...property,
      images: JSON.parse(property.images),
      videos: property.videos ? JSON.parse(property.videos) : undefined,
      features: JSON.parse(property.features),
      amenities: JSON.parse(property.amenities),
    } as Property;
  },

  async updateProperty(id: string, data: Partial<Property>) {
    const updateData: Record<string, unknown> = { ...data };
    if (data.images) updateData.images = JSON.stringify(data.images);
    if (data.videos) updateData.videos = JSON.stringify(data.videos);
    if (data.features) updateData.features = JSON.stringify(data.features);
    if (data.amenities) updateData.amenities = JSON.stringify(data.amenities);

    const property = await db.property.update({
      where: { id },
      data: updateData,
    });
    return {
      ...property,
      images: JSON.parse(property.images),
      videos: property.videos ? JSON.parse(property.videos) : undefined,
      features: JSON.parse(property.features),
      amenities: JSON.parse(property.amenities),
    } as Property;
  },

  async deleteProperty(id: string) {
    await db.property.delete({ where: { id } });
    return true;
  },
};

// Database Agent Data Source Implementation
const dbAgentDataSource = {
  async getAgents(params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.agentProfile.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: true },
      }),
      db.agentProfile.count(),
    ]);

    return {
      data: data.map(a => ({
        id: a.userId,
        name: a.user.name,
        slug: a.user.email.split('@')[0],
        email: a.user.email,
        phone: a.user.phone ?? '',
        avatar: a.user.avatar ?? '',
        bio: a.bio ?? '',
        title: a.title ?? '',
        socialLinks: JSON.parse(a.socialLinks),
        totalSales: a.totalSales,
        totalListings: a.totalListings,
        rating: a.rating,
        reviewCount: a.reviewCount,
        agencyId: a.agencyId ?? undefined,
        officeAddress: a.officeAddress ?? undefined,
        city: a.city ?? '',
        state: a.state ?? '',
        specialties: JSON.parse(a.specialties),
        joinedAt: a.joinedAt.toISOString(),
        verified: a.verified,
        featured: a.featured,
      })) as Agent[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async getAgentById(id: string) {
    const agent = await db.agentProfile.findUnique({
      where: { userId: id },
      include: { user: true },
    });
    if (!agent) return null;
    return {
      id: agent.userId,
      name: agent.user.name,
      slug: agent.user.email.split('@')[0],
      email: agent.user.email,
      phone: agent.user.phone ?? '',
      avatar: agent.user.avatar ?? '',
      bio: agent.bio ?? '',
      title: agent.title ?? '',
      socialLinks: JSON.parse(agent.socialLinks),
      totalSales: agent.totalSales,
      totalListings: agent.totalListings,
      rating: agent.rating,
      reviewCount: agent.reviewCount,
      agencyId: agent.agencyId ?? undefined,
      officeAddress: agent.officeAddress ?? undefined,
      city: agent.city ?? '',
      state: agent.state ?? '',
      specialties: JSON.parse(agent.specialties),
      joinedAt: agent.joinedAt.toISOString(),
      verified: agent.verified,
      featured: agent.featured,
    } as Agent;
  },

  async getAgentBySlug(slug: string) {
    const agent = await db.agentProfile.findFirst({
      where: { user: { email: { contains: slug } } },
      include: { user: true },
    });
    if (!agent) return null;
    return this.getAgentById(agent.userId);
  },

  async getFeaturedAgents(limit = 6) {
    const agents = await db.agentProfile.findMany({
      where: { featured: true },
      take: limit,
      include: { user: true },
    });
    return agents.map(a => ({
      id: a.userId,
      name: a.user.name,
      slug: a.user.email.split('@')[0],
      email: a.user.email,
      phone: a.user.phone ?? '',
      avatar: a.user.avatar ?? '',
      bio: a.bio ?? '',
      title: a.title ?? '',
      socialLinks: JSON.parse(a.socialLinks),
      totalSales: a.totalSales,
      totalListings: a.totalListings,
      rating: a.rating,
      reviewCount: a.reviewCount,
      agencyId: a.agencyId ?? undefined,
      officeAddress: a.officeAddress ?? undefined,
      city: a.city ?? '',
      state: a.state ?? '',
      specialties: JSON.parse(a.specialties),
      joinedAt: a.joinedAt.toISOString(),
      verified: a.verified,
      featured: a.featured,
    })) as Agent[];
  },

  async getVerifiedAgents(limit = 20) {
    const agents = await db.agentProfile.findMany({
      where: { verified: true },
      take: limit,
      include: { user: true },
    });
    return agents.map(a => ({
      id: a.userId,
      name: a.user.name,
      slug: a.user.email.split('@')[0],
      email: a.user.email,
      phone: a.user.phone ?? '',
      avatar: a.user.avatar ?? '',
      bio: a.bio ?? '',
      title: a.title ?? '',
      socialLinks: JSON.parse(a.socialLinks),
      totalSales: a.totalSales,
      totalListings: a.totalListings,
      rating: a.rating,
      reviewCount: a.reviewCount,
      agencyId: a.agencyId ?? undefined,
      officeAddress: a.officeAddress ?? undefined,
      city: a.city ?? '',
      state: a.state ?? '',
      specialties: JSON.parse(a.specialties),
      joinedAt: a.joinedAt.toISOString(),
      verified: a.verified,
      featured: a.featured,
    })) as Agent[];
  },

  async getAgentsByCity(city: string, limit = 20) {
    const agents = await db.agentProfile.findMany({
      where: { city: { contains: city, mode: 'insensitive' } },
      take: limit,
      include: { user: true },
    });
    return agents.map(a => ({
      id: a.userId,
      name: a.user.name,
      slug: a.user.email.split('@')[0],
      email: a.user.email,
      phone: a.user.phone ?? '',
      avatar: a.user.avatar ?? '',
      bio: a.bio ?? '',
      title: a.title ?? '',
      socialLinks: JSON.parse(a.socialLinks),
      totalSales: a.totalSales,
      totalListings: a.totalListings,
      rating: a.rating,
      reviewCount: a.reviewCount,
      agencyId: a.agencyId ?? undefined,
      officeAddress: a.officeAddress ?? undefined,
      city: a.city ?? '',
      state: a.state ?? '',
      specialties: JSON.parse(a.specialties),
      joinedAt: a.joinedAt.toISOString(),
      verified: a.verified,
      featured: a.featured,
    })) as Agent[];
  },

  async getAgentsByAgency(agencyId: string, limit = 20) {
    const agents = await db.agentProfile.findMany({
      where: { agencyId },
      take: limit,
      include: { user: true },
    });
    return agents.map(a => ({
      id: a.userId,
      name: a.user.name,
      slug: a.user.email.split('@')[0],
      email: a.user.email,
      phone: a.user.phone ?? '',
      avatar: a.user.avatar ?? '',
      bio: a.bio ?? '',
      title: a.title ?? '',
      socialLinks: JSON.parse(a.socialLinks),
      totalSales: a.totalSales,
      totalListings: a.totalListings,
      rating: a.rating,
      reviewCount: a.reviewCount,
      agencyId: a.agencyId ?? undefined,
      officeAddress: a.officeAddress ?? undefined,
      city: a.city ?? '',
      state: a.state ?? '',
      specialties: JSON.parse(a.specialties),
      joinedAt: a.joinedAt.toISOString(),
      verified: a.verified,
      featured: a.featured,
    })) as Agent[];
  },

  async getAgentsBySpecialty(specialty: string, limit = 20) {
    const agents = await db.agentProfile.findMany({
      where: { specialties: { contains: specialty } },
      take: limit,
      include: { user: true },
    });
    return agents.map(a => ({
      id: a.userId,
      name: a.user.name,
      slug: a.user.email.split('@')[0],
      email: a.user.email,
      phone: a.user.phone ?? '',
      avatar: a.user.avatar ?? '',
      bio: a.bio ?? '',
      title: a.title ?? '',
      socialLinks: JSON.parse(a.socialLinks),
      totalSales: a.totalSales,
      totalListings: a.totalListings,
      rating: a.rating,
      reviewCount: a.reviewCount,
      agencyId: a.agencyId ?? undefined,
      officeAddress: a.officeAddress ?? undefined,
      city: a.city ?? '',
      state: a.state ?? '',
      specialties: JSON.parse(a.specialties),
      joinedAt: a.joinedAt.toISOString(),
      verified: a.verified,
      featured: a.featured,
    })) as Agent[];
  },
};

// Database City Data Source Implementation
const dbCityDataSource = {
  async getCities(params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.city.findMany({ skip, take: limit, orderBy: { name: 'asc' } }),
      db.city.count(),
    ]);

    return {
      data: data as City[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async getCityById(id: string) {
    return db.city.findUnique({ where: { id } }) as Promise<City | null>;
  },

  async getCityBySlug(slug: string) {
    return db.city.findUnique({ where: { slug } }) as Promise<City | null>;
  },

  async getFeaturedCities(limit = 6) {
    return db.city.findMany({
      where: { featured: true },
      take: limit,
      orderBy: { totalProperties: 'desc' },
    }) as Promise<City[]>;
  },

  async getCitiesByState(state: string) {
    return db.city.findMany({
      where: { state: { contains: state, mode: 'insensitive' } },
      orderBy: { name: 'asc' },
    }) as Promise<City[]>;
  },

  async searchCities(query: string) {
    return db.city.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { state: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 20,
      orderBy: { totalProperties: 'desc' },
    }) as Promise<City[]>;
  },
};

// Database Testimonial Data Source Implementation
const dbTestimonialDataSource = {
  async getTestimonials(params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.testimonial.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
      db.testimonial.count(),
    ]);

    return {
      data: data.map(t => ({
        ...t,
        createdAt: t.createdAt.toISOString(),
      })) as Testimonial[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async getTestimonialById(id: string) {
    const testimonial = await db.testimonial.findUnique({ where: { id } });
    if (!testimonial) return null;
    return { ...testimonial, createdAt: testimonial.createdAt.toISOString() } as Testimonial;
  },

  async getFeaturedTestimonials(limit = 6) {
    const testimonials = await db.testimonial.findMany({
      where: { featured: true },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return testimonials.map(t => ({
      ...t,
      createdAt: t.createdAt.toISOString(),
    })) as Testimonial[];
  },

  async getTestimonialsByRating(rating: number, limit = 20) {
    const testimonials = await db.testimonial.findMany({
      where: { rating: { gte: rating } },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    return testimonials.map(t => ({
      ...t,
      createdAt: t.createdAt.toISOString(),
    })) as Testimonial[];
  },
};

// Database Blog Data Source Implementation
const dbBlogDataSource = {
  async getBlogPosts(params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.blogPost.findMany({
        skip,
        take: limit,
        orderBy: { publishedAt: 'desc' },
      }),
      db.blogPost.count(),
    ]);

    return {
      data: data.map(p => ({
        ...p,
        images: p.images ? JSON.parse(p.images) : undefined,
        tags: JSON.parse(p.tags),
        publishedAt: p.publishedAt.toISOString(),
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      })) as BlogPost[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async getBlogPostById(id: string) {
    const post = await db.blogPost.findUnique({ where: { id } });
    if (!post) return null;
    return {
      ...post,
      images: post.images ? JSON.parse(post.images) : undefined,
      tags: JSON.parse(post.tags),
      publishedAt: post.publishedAt.toISOString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    } as BlogPost;
  },

  async getBlogPostBySlug(slug: string) {
    const post = await db.blogPost.findUnique({ where: { slug } });
    if (!post) return null;
    return this.getBlogPostById(post.id);
  },

  async getFeaturedBlogPosts(limit = 6) {
    const posts = await db.blogPost.findMany({
      where: { featured: true, status: 'published' },
      take: limit,
      orderBy: { publishedAt: 'desc' },
    });
    return posts.map(p => ({
      ...p,
      images: p.images ? JSON.parse(p.images) : undefined,
      tags: JSON.parse(p.tags),
      publishedAt: p.publishedAt.toISOString(),
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    })) as BlogPost[];
  },

  async getBlogPostsByCategory(category: string, limit = 20) {
    const posts = await db.blogPost.findMany({
      where: { category: { contains: category, mode: 'insensitive' } },
      take: limit,
      orderBy: { publishedAt: 'desc' },
    });
    return posts.map(p => ({
      ...p,
      images: p.images ? JSON.parse(p.images) : undefined,
      tags: JSON.parse(p.tags),
      publishedAt: p.publishedAt.toISOString(),
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    })) as BlogPost[];
  },

  async getBlogPostsByTag(tag: string, limit = 20) {
    const posts = await db.blogPost.findMany({
      where: { tags: { contains: tag } },
      take: limit,
      orderBy: { publishedAt: 'desc' },
    });
    return posts.map(p => ({
      ...p,
      images: p.images ? JSON.parse(p.images) : undefined,
      tags: JSON.parse(p.tags),
      publishedAt: p.publishedAt.toISOString(),
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    })) as BlogPost[];
  },

  async searchBlogPosts(query: string) {
    const posts = await db.blogPost.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { excerpt: { contains: query, mode: 'insensitive' } },
          { content: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 50,
      orderBy: { publishedAt: 'desc' },
    });
    return posts.map(p => ({
      ...p,
      images: p.images ? JSON.parse(p.images) : undefined,
      tags: JSON.parse(p.tags),
      publishedAt: p.publishedAt.toISOString(),
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    })) as BlogPost[];
  },
};

// Database Category Data Source Implementation
const dbCategoryDataSource = {
  async getCategories() {
    return db.category.findMany({ orderBy: { name: 'asc' } }) as Promise<Category[]>;
  },

  async getCategoryById(id: string) {
    return db.category.findUnique({ where: { id } }) as Promise<Category | null>;
  },

  async getCategoryBySlug(slug: string) {
    return db.category.findUnique({ where: { slug } }) as Promise<Category | null>;
  },

  async getCategoryByName(name: string) {
    return db.category.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } },
    }) as Promise<Category | null>;
  },

  async getCategoriesWithProperties() {
    return db.category.findMany({
      where: { propertyCount: { gt: 0 } },
      orderBy: { propertyCount: 'desc' },
    }) as Promise<Category[]>;
  },
};

// Database User Data Source Implementation
const dbUserDataSource = {
  async getUserById(id: string) {
    const user = await db.user.findUnique({ where: { id } });
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar ?? undefined,
      role: user.role as DashboardUser['role'],
      phone: user.phone ?? undefined,
      emailVerified: user.emailVerified,
      phoneVerified: user.phoneVerified,
      createdAt: user.createdAt.toISOString(),
      lastLoginAt: user.lastLoginAt?.toISOString(),
    } as DashboardUser;
  },

  async getUserFavorites(userId: string) {
    const favorites = await db.favorite.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return favorites.map(f => ({
      ...f,
      createdAt: f.createdAt.toISOString(),
    })) as UserFavorite[];
  },

  async getUserSavedSearches(userId: string) {
    const searches = await db.savedSearch.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return searches.map(s => ({
      ...s,
      filters: JSON.parse(s.filters),
      createdAt: s.createdAt.toISOString(),
    })) as SavedSearch[];
  },

  async getDashboardStats(userId: string) {
    const [totalProperties, activeListings, pendingListings, soldProperties] = await Promise.all([
      db.property.count({ where: { agentId: userId } }),
      db.property.count({ where: { agentId: userId, status: 'for-sale' } }),
      db.property.count({ where: { agentId: userId, status: 'pending' } }),
      db.property.count({ where: { agentId: userId, status: 'sold' } }),
    ]);

    return {
      totalProperties,
      activeListings,
      pendingListings,
      soldProperties,
      totalViews: 0,
      totalInquiries: 0,
      totalTours: 0,
      revenue: 0,
    } as DashboardStats;
  },
};

// Database Message Data Source Implementation
const dbMessageDataSource = {
  async getConversations(userId: string) {
    const conversations = await db.conversation.findMany({
      where: { participants: { contains: userId } },
      orderBy: { updatedAt: 'desc' },
    });
    return conversations.map(c => ({
      ...c,
      participants: JSON.parse(c.participants),
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
    })) as Conversation[];
  },

  async getConversationMessages(conversationId: string, params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 50;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.message.findMany({
        where: { conversationId },
        skip,
        take: limit,
        orderBy: { createdAt: 'asc' },
      }),
      db.message.count({ where: { conversationId } }),
    ]);

    return {
      data: data.map(m => ({
        ...m,
        attachments: m.attachments ? JSON.parse(m.attachments) : undefined,
        readAt: m.readAt?.toISOString(),
        createdAt: m.createdAt.toISOString(),
      })) as Message[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async sendMessage(conversationId: string, data: Partial<Message>) {
    const message = await db.message.create({
      data: {
        conversationId,
        senderId: data.senderId ?? '',
        senderName: data.senderName ?? '',
        senderAvatar: data.senderAvatar,
        content: data.content ?? '',
        attachments: data.attachments ? JSON.stringify(data.attachments) : null,
      },
    });
    return {
      ...message,
      attachments: message.attachments ? JSON.parse(message.attachments) : undefined,
      readAt: message.readAt?.toISOString(),
      createdAt: message.createdAt.toISOString(),
    } as Message;
  },

  async markAsRead(messageId: string) {
    await db.message.update({
      where: { id: messageId },
      data: { read: true, readAt: new Date() },
    });
    return true;
  },
};

// Database Review Data Source Implementation
const dbReviewDataSource = {
  async getReviews(params?: { propertyId?: string; agentId?: string; agencyId?: string } & PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (params?.propertyId) where.propertyId = params.propertyId;
    if (params?.agentId) where.agentId = params.agentId;
    if (params?.agencyId) where.agencyId = params.agencyId;

    const [data, total] = await Promise.all([
      db.review.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.review.count({ where }),
    ]);

    return {
      data: data.map(r => ({
        ...r,
        response: r.response ? JSON.parse(r.response) : undefined,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      })) as Review[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async createReview(data: Partial<Review>) {
    const review = await db.review.create({
      data: {
        propertyId: data.propertyId,
        agentId: data.agentId,
        agencyId: data.agencyId,
        userId: data.userId ?? '',
        userName: data.userName ?? '',
        userAvatar: data.userAvatar,
        title: data.title ?? '',
        content: data.content ?? '',
        rating: data.rating ?? 5,
      },
    });
    return {
      ...review,
      response: review.response ? JSON.parse(review.response) : undefined,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    } as Review;
  },

  async updateReview(id: string, data: Partial<Review>) {
    const updateData: Record<string, unknown> = { ...data };
    if (data.response) updateData.response = JSON.stringify(data.response);

    const review = await db.review.update({
      where: { id },
      data: updateData,
    });
    return {
      ...review,
      response: review.response ? JSON.parse(review.response) : undefined,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    } as Review;
  },

  async deleteReview(id: string) {
    await db.review.delete({ where: { id } });
    return true;
  },
};

// Database Inquiry Data Source Implementation
const dbInquiryDataSource = {
  async getInquiries(params?: { agentId?: string; propertyId?: string } & PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (params?.agentId) where.agentId = params.agentId;
    if (params?.propertyId) where.propertyId = params.propertyId;

    const [data, total] = await Promise.all([
      db.inquiry.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.inquiry.count({ where }),
    ]);

    return {
      data: data.map(i => ({
        ...i,
        createdAt: i.createdAt.toISOString(),
        updatedAt: i.updatedAt.toISOString(),
      })) as Inquiry[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async createInquiry(data: Partial<Inquiry>) {
    const inquiry = await db.inquiry.create({
      data: {
        propertyId: data.propertyId ?? '',
        name: data.name ?? '',
        email: data.email ?? '',
        phone: data.phone,
        message: data.message ?? '',
        agentId: data.agentId ?? '',
      },
    });
    return {
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
      updatedAt: inquiry.updatedAt.toISOString(),
    } as Inquiry;
  },

  async updateInquiryStatus(id: string, status: Inquiry['status']) {
    const inquiry = await db.inquiry.update({
      where: { id },
      data: { status },
    });
    return {
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
      updatedAt: inquiry.updatedAt.toISOString(),
    } as Inquiry;
  },
};

// Database Tour Data Source Implementation
const dbTourDataSource = {
  async getTours(params?: { agentId?: string; propertyId?: string } & PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};
    if (params?.agentId) where.agentId = params.agentId;
    if (params?.propertyId) where.propertyId = params.propertyId;

    const [data, total] = await Promise.all([
      db.tour.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.tour.count({ where }),
    ]);

    return {
      data: data.map(t => ({
        ...t,
        date: t.date.toISOString(),
        createdAt: t.createdAt.toISOString(),
        updatedAt: t.updatedAt.toISOString(),
      })) as Tour[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async createTour(data: Partial<Tour>) {
    const tour = await db.tour.create({
      data: {
        propertyId: data.propertyId ?? '',
        name: data.name ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
        date: new Date(data.date ?? ''),
        time: data.time ?? '',
        timezone: data.timezone ?? 'UTC',
        tourType: data.tourType ?? 'in-person',
        message: data.message,
        agentId: data.agentId ?? '',
      },
    });
    return {
      ...tour,
      date: tour.date.toISOString(),
      createdAt: tour.createdAt.toISOString(),
      updatedAt: tour.updatedAt.toISOString(),
    } as Tour;
  },

  async updateTourStatus(id: string, status: Tour['status']) {
    const tour = await db.tour.update({
      where: { id },
      data: { status },
    });
    return {
      ...tour,
      date: tour.date.toISOString(),
      createdAt: tour.createdAt.toISOString(),
      updatedAt: tour.updatedAt.toISOString(),
    } as Tour;
  },
};

// Database Payment Data Source Implementation
const dbPaymentDataSource = {
  async getPackages() {
    const packages = await db.package.findMany({ orderBy: { price: 'asc' } });
    return packages.map(p => ({
      ...p,
      features: JSON.parse(p.features),
      limits: JSON.parse(p.limits),
    })) as Package[];
  },

  async getInvoices(userId: string) {
    const invoices = await db.invoice.findMany({
      where: { userId },
      orderBy: { issueDate: 'desc' },
    });
    return invoices.map(i => ({
      ...i,
      items: JSON.parse(i.items),
      issueDate: i.issueDate.toISOString(),
      dueDate: i.dueDate.toISOString(),
      paidAt: i.paidAt?.toISOString(),
    })) as Invoice[];
  },

  async createInvoice(data: Partial<Invoice>) {
    const invoice = await db.invoice.create({
      data: {
        invoiceNumber: data.invoiceNumber ?? `INV-${Date.now()}`,
        userId: data.userId ?? '',
        items: JSON.stringify(data.items ?? []),
        subtotal: data.subtotal ?? 0,
        tax: data.tax ?? 0,
        total: data.total ?? 0,
        dueDate: new Date(data.dueDate ?? ''),
        paymentMethod: data.paymentMethod,
        transactionId: data.transactionId,
      },
    });
    return {
      ...invoice,
      items: JSON.parse(invoice.items),
      issueDate: invoice.issueDate.toISOString(),
      dueDate: invoice.dueDate.toISOString(),
      paidAt: invoice.paidAt?.toISOString(),
    } as Invoice;
  },

  async getInvoiceById(id: string) {
    const invoice = await db.invoice.findUnique({ where: { id } });
    if (!invoice) return null;
    return {
      ...invoice,
      items: JSON.parse(invoice.items),
      issueDate: invoice.issueDate.toISOString(),
      dueDate: invoice.dueDate.toISOString(),
      paidAt: invoice.paidAt?.toISOString(),
    } as Invoice;
  },
};

// Database Notification Data Source Implementation
const dbNotificationDataSource = {
  async getNotifications(userId: string, params?: PaginationParams) {
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      db.notification.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.notification.count({ where: { userId } }),
    ]);

    return {
      data: data.map(n => ({
        ...n,
        createdAt: n.createdAt.toISOString(),
      })) as Notification[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasMore: skip + limit < total,
    };
  },

  async markNotificationAsRead(id: string) {
    await db.notification.update({
      where: { id },
      data: { read: true },
    });
    return true;
  },

  async markAllNotificationsAsRead(userId: string) {
    await db.notification.updateMany({
      where: { userId },
      data: { read: true },
    });
    return true;
  },
};

// Database Data Source
const databaseDataSource: DataSource = {
  properties: dbPropertyDataSource,
  agents: dbAgentDataSource,
  cities: dbCityDataSource,
  testimonials: dbTestimonialDataSource,
  blog: dbBlogDataSource,
  categories: dbCategoryDataSource,
  users: dbUserDataSource,
  messages: dbMessageDataSource,
  reviews: dbReviewDataSource,
  inquiries: dbInquiryDataSource,
  tours: dbTourDataSource,
  payments: dbPaymentDataSource,
  notifications: dbNotificationDataSource,
};

/**
 * Get the current data source
 */
export function getDataSource(): DataSource {
  const dataSourceType = getDataSourceType();
  
  if (dataSourceType === 'MOCK') {
    return mockDataSource;
  }
  
  if (dataSourceType === 'API') {
    // API data source will be implemented in the API client
    // For now, return database source
    console.warn('API data source not yet implemented, using database');
    return databaseDataSource;
  }
  
  return databaseDataSource;
}

// Export the database data source for direct access
export { databaseDataSource };

// Export mock data source
export { mockDataSource };

// Export types
export type {
  DataSource,
  DataSourceType,
  Property,
  Agent,
  City,
  Testimonial,
  BlogPost,
  Category,
  Review,
  Inquiry,
  Tour,
  DashboardStats,
  DashboardUser,
  UserFavorite,
  SavedSearch,
  PropertySearchFilters,
  Message,
  Conversation,
  Package,
  Invoice,
  Notification,
  PaginatedResult,
  PaginationParams,
};
