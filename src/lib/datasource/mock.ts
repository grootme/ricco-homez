/**
 * Mock Data Source
 * Uses hardcoded data from /src/lib/data for local development and testing
 */

import type {
  DataSource,
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

// Import hardcoded data
import {
  properties,
  getPropertyById,
  getPropertyBySlug,
  getFeaturedProperties,
  getPropertiesByStatus,
  getPropertiesByType,
  getPropertiesByCity,
  getPropertiesByAgent,
  searchProperties,
} from '@/lib/data/properties';

import {
  agents,
  getAgentById,
  getAgentBySlug,
  getFeaturedAgents,
  getVerifiedAgents,
  getAgentsByCity,
  getAgentsByAgency,
  getAgentsBySpecialty,
} from '@/lib/data/agents';

import {
  cities,
  getCityById,
  getCityBySlug,
  getFeaturedCities,
  getCitiesByState,
  searchCities,
} from '@/lib/data/cities';

import {
  testimonials,
  getTestimonialById,
  getFeaturedTestimonials,
  getTestimonialsByRating,
} from '@/lib/data/testimonials';

import {
  blogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  getFeaturedBlogPosts,
  getBlogPostsByCategory,
  getBlogPostsByTag,
  searchBlogPosts,
} from '@/lib/data/blog';

import {
  categories,
  statusCategories,
  priceRanges,
  getCategoryById,
  getCategoryBySlug,
  getCategoryByName,
  getCategoriesWithProperties,
} from '@/lib/data/categories';

// Helper function for pagination
function paginate<T>(items: T[], params?: PaginationParams): PaginatedResult<T> {
  const page = params?.page ?? 1;
  const limit = params?.limit ?? 20;
  const offset = params?.offset ?? (page - 1) * limit;
  const total = items.length;
  const totalPages = Math.ceil(total / limit);
  const data = items.slice(offset, offset + limit);

  return {
    data,
    total,
    page,
    limit,
    totalPages,
    hasMore: offset + limit < total,
  };
}

// Mock Property Data Source
const mockPropertyDataSource = {
  async getProperties(params?: PropertySearchFilters & PaginationParams): Promise<PaginatedResult<Property>> {
    let filtered = [...properties];

    if (params?.status) {
      const statuses = Array.isArray(params.status) ? params.status : [params.status];
      filtered = filtered.filter(p => statuses.includes(p.status));
    }
    if (params?.propertyType) {
      const types = Array.isArray(params.propertyType) ? params.propertyType : [params.propertyType];
      filtered = filtered.filter(p => types.includes(p.propertyType));
    }
    if (params?.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= params.minPrice!);
    }
    if (params?.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= params.maxPrice!);
    }
    if (params?.minBedrooms !== undefined) {
      filtered = filtered.filter(p => p.bedrooms >= params.minBedrooms!);
    }
    if (params?.minBathrooms !== undefined) {
      filtered = filtered.filter(p => p.bathrooms >= params.minBathrooms!);
    }
    if (params?.query) {
      const query = params.query.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.state.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query)
      );
    }

    // Sort
    if (params?.sortBy) {
      switch (params.sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'date-asc':
          filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          break;
        case 'date-desc':
          filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'sqft-asc':
          filtered.sort((a, b) => a.sqft - b.sqft);
          break;
        case 'sqft-desc':
          filtered.sort((a, b) => b.sqft - a.sqft);
          break;
      }
    }

    return paginate(filtered, params);
  },

  async getPropertyById(id: string): Promise<Property | null> {
    return getPropertyById(id) ?? null;
  },

  async getPropertyBySlug(slug: string): Promise<Property | null> {
    return getPropertyBySlug(slug) ?? null;
  },

  async getFeaturedProperties(limit = 6): Promise<Property[]> {
    return getFeaturedProperties().slice(0, limit);
  },

  async getPropertiesByStatus(status: string, limit = 20): Promise<Property[]> {
    return getPropertiesByStatus(status as Property['status']).slice(0, limit);
  },

  async getPropertiesByType(type: string, limit = 20): Promise<Property[]> {
    return getPropertiesByType(type as Property['propertyType']).slice(0, limit);
  },

  async getPropertiesByCity(city: string, limit = 20): Promise<Property[]> {
    return getPropertiesByCity(city).slice(0, limit);
  },

  async getPropertiesByAgent(agentId: string, limit = 20): Promise<Property[]> {
    return getPropertiesByAgent(agentId).slice(0, limit);
  },

  async searchProperties(query: string, params?: PropertySearchFilters): Promise<Property[]> {
    let results = searchProperties(query);
    
    if (params?.status) {
      const statuses = Array.isArray(params.status) ? params.status : [params.status];
      results = results.filter(p => statuses.includes(p.status));
    }
    if (params?.minPrice !== undefined) {
      results = results.filter(p => p.price >= params.minPrice!);
    }
    if (params?.maxPrice !== undefined) {
      results = results.filter(p => p.price <= params.maxPrice!);
    }

    return results.slice(0, params?.limit ?? 50);
  },

  async createProperty(data: Partial<Property>): Promise<Property> {
    const newProperty: Property = {
      id: `prop-${Date.now()}`,
      title: data.title ?? 'New Property',
      slug: data.slug ?? `property-${Date.now()}`,
      description: data.description ?? '',
      price: data.price ?? 0,
      priceSuffix: data.priceSuffix,
      propertyType: data.propertyType ?? 'house',
      status: data.status ?? 'for-sale',
      featured: data.featured ?? false,
      images: data.images ?? [],
      videos: data.videos,
      virtualTour: data.virtualTour,
      address: data.address ?? '',
      city: data.city ?? '',
      state: data.state ?? '',
      zipCode: data.zipCode ?? '',
      country: data.country ?? 'USA',
      neighborhood: data.neighborhood,
      latitude: data.latitude,
      longitude: data.longitude,
      bedrooms: data.bedrooms ?? 0,
      bathrooms: data.bathrooms ?? 0,
      halfBaths: data.halfBaths,
      sqft: data.sqft ?? 0,
      lotSize: data.lotSize,
      yearBuilt: data.yearBuilt,
      garage: data.garage,
      parkingSpots: data.parkingSpots,
      floors: data.floors,
      features: data.features ?? [],
      amenities: data.amenities ?? [],
      agentId: data.agentId ?? '',
      agencyId: data.agencyId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      favorites: 0,
      tourScheduleEnabled: data.tourScheduleEnabled ?? true,
      inquiryEnabled: data.inquiryEnabled ?? true,
    };
    return newProperty;
  },

  async updateProperty(id: string, data: Partial<Property>): Promise<Property> {
    const property = getPropertyById(id);
    if (!property) throw new Error('Property not found');
    return { ...property, ...data, updatedAt: new Date().toISOString() };
  },

  async deleteProperty(id: string): Promise<boolean> {
    return !!getPropertyById(id);
  },
};

// Mock Agent Data Source
const mockAgentDataSource = {
  async getAgents(params?: PaginationParams): Promise<PaginatedResult<Agent>> {
    return paginate(agents, params);
  },

  async getAgentById(id: string): Promise<Agent | null> {
    return getAgentById(id) ?? null;
  },

  async getAgentBySlug(slug: string): Promise<Agent | null> {
    return getAgentBySlug(slug) ?? null;
  },

  async getFeaturedAgents(limit = 6): Promise<Agent[]> {
    return getFeaturedAgents().slice(0, limit);
  },

  async getVerifiedAgents(limit = 20): Promise<Agent[]> {
    return getVerifiedAgents().slice(0, limit);
  },

  async getAgentsByCity(city: string, limit = 20): Promise<Agent[]> {
    return getAgentsByCity(city).slice(0, limit);
  },

  async getAgentsByAgency(agencyId: string, limit = 20): Promise<Agent[]> {
    return getAgentsByAgency(agencyId).slice(0, limit);
  },

  async getAgentsBySpecialty(specialty: string, limit = 20): Promise<Agent[]> {
    return getAgentsBySpecialty(specialty).slice(0, limit);
  },
};

// Mock City Data Source
const mockCityDataSource = {
  async getCities(params?: PaginationParams): Promise<PaginatedResult<City>> {
    return paginate(cities, params);
  },

  async getCityById(id: string): Promise<City | null> {
    return getCityById(id) ?? null;
  },

  async getCityBySlug(slug: string): Promise<City | null> {
    return getCityBySlug(slug) ?? null;
  },

  async getFeaturedCities(limit = 6): Promise<City[]> {
    return getFeaturedCities().slice(0, limit);
  },

  async getCitiesByState(state: string): Promise<City[]> {
    return getCitiesByState(state);
  },

  async searchCities(query: string): Promise<City[]> {
    return searchCities(query);
  },
};

// Mock Testimonial Data Source
const mockTestimonialDataSource = {
  async getTestimonials(params?: PaginationParams): Promise<PaginatedResult<Testimonial>> {
    return paginate(testimonials, params);
  },

  async getTestimonialById(id: string): Promise<Testimonial | null> {
    return getTestimonialById(id) ?? null;
  },

  async getFeaturedTestimonials(limit = 6): Promise<Testimonial[]> {
    return getFeaturedTestimonials().slice(0, limit);
  },

  async getTestimonialsByRating(rating: number, limit = 20): Promise<Testimonial[]> {
    return getTestimonialsByRating(rating).slice(0, limit);
  },
};

// Mock Blog Data Source
const mockBlogDataSource = {
  async getBlogPosts(params?: PaginationParams): Promise<PaginatedResult<BlogPost>> {
    return paginate(blogPosts, params);
  },

  async getBlogPostById(id: string): Promise<BlogPost | null> {
    return getBlogPostById(id) ?? null;
  },

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    return getBlogPostBySlug(slug) ?? null;
  },

  async getFeaturedBlogPosts(limit = 6): Promise<BlogPost[]> {
    return getFeaturedBlogPosts().slice(0, limit);
  },

  async getBlogPostsByCategory(category: string, limit = 20): Promise<BlogPost[]> {
    return getBlogPostsByCategory(category).slice(0, limit);
  },

  async getBlogPostsByTag(tag: string, limit = 20): Promise<BlogPost[]> {
    return getBlogPostsByTag(tag).slice(0, limit);
  },

  async searchBlogPosts(query: string): Promise<BlogPost[]> {
    return searchBlogPosts(query);
  },
};

// Mock Category Data Source
const mockCategoryDataSource = {
  async getCategories(): Promise<Category[]> {
    return categories;
  },

  async getCategoryById(id: string): Promise<Category | null> {
    return getCategoryById(id) ?? null;
  },

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    return getCategoryBySlug(slug) ?? null;
  },

  async getCategoryByName(name: string): Promise<Category | null> {
    return getCategoryByName(name) ?? null;
  },

  async getCategoriesWithProperties(): Promise<Category[]> {
    return getCategoriesWithProperties();
  },
};

// Mock User Data Source
const mockUserDataSource = {
  async getUserById(id: string): Promise<DashboardUser | null> {
    // Return a mock user
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      role: 'agent',
      phone: '+1 (555) 123-4567',
      emailVerified: true,
      phoneVerified: true,
      createdAt: '2024-01-01T00:00:00Z',
      lastLoginAt: new Date().toISOString(),
    };
  },

  async getUserFavorites(userId: string): Promise<UserFavorite[]> {
    // Return some mock favorites
    return properties.slice(0, 3).map(p => ({
      id: `fav-${p.id}`,
      userId,
      propertyId: p.id,
      createdAt: new Date().toISOString(),
    }));
  },

  async getUserSavedSearches(userId: string): Promise<SavedSearch[]> {
    // Return mock saved searches
    return [
      {
        id: 'search-001',
        userId,
        name: 'Miami Beach Houses',
        filters: { query: 'Miami', propertyType: ['house'], status: ['for-sale'] },
        notifications: true,
        createdAt: new Date().toISOString(),
      },
    ];
  },

  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const userProperties = properties.filter(p => p.agentId === userId);
    return {
      totalProperties: userProperties.length,
      activeListings: userProperties.filter(p => p.status === 'for-sale').length,
      pendingListings: userProperties.filter(p => p.status === 'pending').length,
      soldProperties: userProperties.filter(p => p.status === 'sold').length,
      totalViews: 15420,
      totalInquiries: 87,
      totalTours: 34,
      revenue: 1250000,
    };
  },
};

// Mock Message Data Source
const mockMessageDataSource = {
  async getConversations(userId: string): Promise<Conversation[]> {
    return [
      {
        id: 'conv-001',
        participants: [
          { id: userId, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop' },
          { id: 'agent-001', name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop' },
        ],
        lastMessage: {
          id: 'msg-001',
          conversationId: 'conv-001',
          senderId: 'agent-001',
          senderName: 'Sarah Johnson',
          senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
          content: 'Thanks for your inquiry about the Miami villa!',
          read: false,
          createdAt: new Date().toISOString(),
        },
        unreadCount: 1,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  },

  async getConversationMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResult<Message>> {
    const messages: Message[] = [
      {
        id: 'msg-001',
        conversationId,
        senderId: 'user-001',
        senderName: 'John Doe',
        senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        content: 'Hi, I am interested in the Miami villa listing.',
        read: true,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: 'msg-002',
        conversationId,
        senderId: 'agent-001',
        senderName: 'Sarah Johnson',
        senderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
        content: 'Thanks for your inquiry about the Miami villa!',
        read: false,
        createdAt: new Date().toISOString(),
      },
    ];
    return paginate(messages, params);
  },

  async sendMessage(conversationId: string, data: Partial<Message>): Promise<Message> {
    return {
      id: `msg-${Date.now()}`,
      conversationId,
      senderId: data.senderId ?? '',
      senderName: data.senderName ?? '',
      senderAvatar: data.senderAvatar,
      content: data.content ?? '',
      attachments: data.attachments,
      read: false,
      createdAt: new Date().toISOString(),
    };
  },

  async markAsRead(messageId: string): Promise<boolean> {
    return true;
  },
};

// Mock Review Data Source
const mockReviewDataSource = {
  async getReviews(params?: { propertyId?: string; agentId?: string; agencyId?: string } & PaginationParams): Promise<PaginatedResult<Review>> {
    const reviews: Review[] = [
      {
        id: 'review-001',
        propertyId: 'prop-001',
        userId: 'user-001',
        userName: 'Jennifer Williams',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        title: 'Amazing Property!',
        content: 'This villa exceeded all our expectations. The views are breathtaking and the amenities are top-notch.',
        rating: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'approved',
      },
    ];
    return paginate(reviews, params);
  },

  async createReview(data: Partial<Review>): Promise<Review> {
    return {
      id: `review-${Date.now()}`,
      propertyId: data.propertyId,
      agentId: data.agentId,
      agencyId: data.agencyId,
      userId: data.userId ?? '',
      userName: data.userName ?? '',
      userAvatar: data.userAvatar,
      title: data.title ?? '',
      content: data.content ?? '',
      rating: data.rating ?? 5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'pending',
    };
  },

  async updateReview(id: string, data: Partial<Review>): Promise<Review> {
    return {
      id,
      propertyId: data.propertyId,
      agentId: data.agentId,
      agencyId: data.agencyId,
      userId: data.userId ?? '',
      userName: data.userName ?? '',
      userAvatar: data.userAvatar,
      title: data.title ?? '',
      content: data.content ?? '',
      rating: data.rating ?? 5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'approved',
    };
  },

  async deleteReview(id: string): Promise<boolean> {
    return true;
  },
};

// Mock Inquiry Data Source
const mockInquiryDataSource = {
  async getInquiries(params?: { agentId?: string; propertyId?: string } & PaginationParams): Promise<PaginatedResult<Inquiry>> {
    const inquiries: Inquiry[] = [
      {
        id: 'inquiry-001',
        propertyId: 'prop-001',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        message: 'I am interested in scheduling a viewing for this property.',
        status: 'new',
        agentId: 'agent-001',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    return paginate(inquiries, params);
  },

  async createInquiry(data: Partial<Inquiry>): Promise<Inquiry> {
    return {
      id: `inquiry-${Date.now()}`,
      propertyId: data.propertyId ?? '',
      name: data.name ?? '',
      email: data.email ?? '',
      phone: data.phone,
      message: data.message ?? '',
      status: 'new',
      agentId: data.agentId ?? '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },

  async updateInquiryStatus(id: string, status: Inquiry['status']): Promise<Inquiry> {
    return {
      id,
      propertyId: 'prop-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      message: 'Test inquiry',
      status,
      agentId: 'agent-001',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },
};

// Mock Tour Data Source
const mockTourDataSource = {
  async getTours(params?: { agentId?: string; propertyId?: string } & PaginationParams): Promise<PaginatedResult<Tour>> {
    const tours: Tour[] = [
      {
        id: 'tour-001',
        propertyId: 'prop-001',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        date: new Date(Date.now() + 86400000).toISOString(),
        time: '10:00 AM',
        timezone: 'America/New_York',
        tourType: 'in-person',
        message: 'Looking forward to seeing the property!',
        status: 'scheduled',
        agentId: 'agent-001',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    return paginate(tours, params);
  },

  async createTour(data: Partial<Tour>): Promise<Tour> {
    return {
      id: `tour-${Date.now()}`,
      propertyId: data.propertyId ?? '',
      name: data.name ?? '',
      email: data.email ?? '',
      phone: data.phone ?? '',
      date: data.date ?? new Date().toISOString(),
      time: data.time ?? '',
      timezone: data.timezone ?? 'UTC',
      tourType: data.tourType ?? 'in-person',
      message: data.message,
      status: 'scheduled',
      agentId: data.agentId ?? '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },

  async updateTourStatus(id: string, status: Tour['status']): Promise<Tour> {
    return {
      id,
      propertyId: 'prop-001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      date: new Date().toISOString(),
      time: '10:00 AM',
      timezone: 'UTC',
      tourType: 'in-person',
      status,
      agentId: 'agent-001',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },
};

// Mock Payment Data Source
const mockPaymentDataSource = {
  async getPackages(): Promise<Package[]> {
    return [
      {
        id: 'pkg-001',
        name: 'Basic',
        slug: 'basic',
        description: 'Perfect for individuals just getting started',
        price: 0,
        billingPeriod: 'monthly',
        features: ['Browse all listings', 'Save up to 10 properties', 'Basic search filters', 'Email alerts'],
        limits: { listings: 0, featuredListings: 0, photos: 0, videos: 0 },
        popular: false,
      },
      {
        id: 'pkg-002',
        name: 'Premium',
        slug: 'premium',
        description: 'Ideal for active home seekers',
        price: 29,
        billingPeriod: 'monthly',
        features: ['All Basic features', 'Save unlimited properties', 'Advanced search filters', 'Priority support', 'Market insights', 'Virtual tours'],
        limits: { listings: 5, featuredListings: 1, photos: 20, videos: 1 },
        popular: true,
      },
      {
        id: 'pkg-003',
        name: 'Professional',
        slug: 'professional',
        description: 'For agents and power users',
        price: 99,
        billingPeriod: 'monthly',
        features: ['All Premium features', 'Agent dashboard', 'Listing analytics', 'Lead generation', 'Custom branding', 'API access'],
        limits: { listings: 50, featuredListings: 10, photos: 50, videos: 5 },
        popular: false,
      },
    ];
  },

  async getInvoices(userId: string): Promise<Invoice[]> {
    return [
      {
        id: 'inv-001',
        invoiceNumber: 'INV-2024-001',
        userId,
        items: [
          { description: 'Premium Plan - Monthly', quantity: 1, price: 29, total: 29 },
        ],
        subtotal: 29,
        tax: 0,
        total: 29,
        status: 'paid',
        issueDate: new Date().toISOString(),
        dueDate: new Date(Date.now() + 604800000).toISOString(),
        paidAt: new Date().toISOString(),
        paymentMethod: 'Credit Card',
      },
    ];
  },

  async createInvoice(data: Partial<Invoice>): Promise<Invoice> {
    return {
      id: `inv-${Date.now()}`,
      invoiceNumber: data.invoiceNumber ?? `INV-${Date.now()}`,
      userId: data.userId ?? '',
      items: data.items ?? [],
      subtotal: data.subtotal ?? 0,
      tax: data.tax ?? 0,
      total: data.total ?? 0,
      status: 'draft',
      issueDate: new Date().toISOString(),
      dueDate: data.dueDate ?? new Date(Date.now() + 604800000).toISOString(),
      paymentMethod: data.paymentMethod,
      transactionId: data.transactionId,
    };
  },

  async getInvoiceById(id: string): Promise<Invoice | null> {
    return {
      id,
      invoiceNumber: 'INV-2024-001',
      userId: 'user-001',
      items: [
        { description: 'Premium Plan - Monthly', quantity: 1, price: 29, total: 29 },
      ],
      subtotal: 29,
      tax: 0,
      total: 29,
      status: 'paid',
      issueDate: new Date().toISOString(),
      dueDate: new Date(Date.now() + 604800000).toISOString(),
      paidAt: new Date().toISOString(),
      paymentMethod: 'Credit Card',
    };
  },
};

// Mock Notification Data Source
const mockNotificationDataSource = {
  async getNotifications(userId: string, params?: PaginationParams): Promise<PaginatedResult<Notification>> {
    const notifications: Notification[] = [
      {
        id: 'notif-001',
        userId,
        type: 'inquiry',
        title: 'New Inquiry',
        message: 'You have a new inquiry about your property.',
        link: '/dashboard/inquiries',
        read: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'notif-002',
        userId,
        type: 'tour',
        title: 'Tour Scheduled',
        message: 'A new tour has been scheduled for tomorrow.',
        link: '/dashboard/tours',
        read: false,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
    ];
    return paginate(notifications, params);
  },

  async markNotificationAsRead(id: string): Promise<boolean> {
    return true;
  },

  async markAllNotificationsAsRead(userId: string): Promise<boolean> {
    return true;
  },
};

// Export the complete Mock Data Source
export const mockDataSource: DataSource = {
  properties: mockPropertyDataSource,
  agents: mockAgentDataSource,
  cities: mockCityDataSource,
  testimonials: mockTestimonialDataSource,
  blog: mockBlogDataSource,
  categories: mockCategoryDataSource,
  users: mockUserDataSource,
  messages: mockMessageDataSource,
  reviews: mockReviewDataSource,
  inquiries: mockInquiryDataSource,
  tours: mockTourDataSource,
  payments: mockPaymentDataSource,
  notifications: mockNotificationDataSource,
};

export default mockDataSource;
