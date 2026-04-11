/**
 * Data Source Types
 * Defines types for both DATABASE and API data sources
 */

import type {
  Property,
  Agent,
  Agency,
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
} from '@/types';

// Data source type
export type DataSourceType = 'DATABASE' | 'API' | 'MOCK';

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}

// Property data source interface
export interface PropertyDataSource {
  // Property operations
  getProperties(params?: PropertySearchFilters & PaginationParams): Promise<PaginatedResult<Property>>;
  getPropertyById(id: string): Promise<Property | null>;
  getPropertyBySlug(slug: string): Promise<Property | null>;
  getFeaturedProperties(limit?: number): Promise<Property[]>;
  getPropertiesByStatus(status: string, limit?: number): Promise<Property[]>;
  getPropertiesByType(type: string, limit?: number): Promise<Property[]>;
  getPropertiesByCity(city: string, limit?: number): Promise<Property[]>;
  getPropertiesByAgent(agentId: string, limit?: number): Promise<Property[]>;
  searchProperties(query: string, params?: PropertySearchFilters): Promise<Property[]>;
  createProperty(data: Partial<Property>): Promise<Property>;
  updateProperty(id: string, data: Partial<Property>): Promise<Property>;
  deleteProperty(id: string): Promise<boolean>;
}

// Agent data source interface
export interface AgentDataSource {
  getAgents(params?: PaginationParams): Promise<PaginatedResult<Agent>>;
  getAgentById(id: string): Promise<Agent | null>;
  getAgentBySlug(slug: string): Promise<Agent | null>;
  getFeaturedAgents(limit?: number): Promise<Agent[]>;
  getVerifiedAgents(limit?: number): Promise<Agent[]>;
  getAgentsByCity(city: string, limit?: number): Promise<Agent[]>;
  getAgentsByAgency(agencyId: string, limit?: number): Promise<Agent[]>;
  getAgentsBySpecialty(specialty: string, limit?: number): Promise<Agent[]>;
}

// City data source interface
export interface CityDataSource {
  getCities(params?: PaginationParams): Promise<PaginatedResult<City>>;
  getCityById(id: string): Promise<City | null>;
  getCityBySlug(slug: string): Promise<City | null>;
  getFeaturedCities(limit?: number): Promise<City[]>;
  getCitiesByState(state: string): Promise<City[]>;
  searchCities(query: string): Promise<City[]>;
}

// Testimonial data source interface
export interface TestimonialDataSource {
  getTestimonials(params?: PaginationParams): Promise<PaginatedResult<Testimonial>>;
  getTestimonialById(id: string): Promise<Testimonial | null>;
  getFeaturedTestimonials(limit?: number): Promise<Testimonial[]>;
  getTestimonialsByRating(rating: number, limit?: number): Promise<Testimonial[]>;
}

// Blog data source interface
export interface BlogDataSource {
  getBlogPosts(params?: PaginationParams): Promise<PaginatedResult<BlogPost>>;
  getBlogPostById(id: string): Promise<BlogPost | null>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
  getFeaturedBlogPosts(limit?: number): Promise<BlogPost[]>;
  getBlogPostsByCategory(category: string, limit?: number): Promise<BlogPost[]>;
  getBlogPostsByTag(tag: string, limit?: number): Promise<BlogPost[]>;
  searchBlogPosts(query: string): Promise<BlogPost[]>;
}

// Category data source interface
export interface CategoryDataSource {
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | null>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  getCategoryByName(name: string): Promise<Category | null>;
  getCategoriesWithProperties(): Promise<Category[]>;
}

// User data source interface
export interface UserDataSource {
  getUserById(id: string): Promise<DashboardUser | null>;
  getUserFavorites(userId: string): Promise<UserFavorite[]>;
  getUserSavedSearches(userId: string): Promise<SavedSearch[]>;
  getDashboardStats(userId: string): Promise<DashboardStats>;
}

// Message data source interface
export interface MessageDataSource {
  getConversations(userId: string): Promise<Conversation[]>;
  getConversationMessages(conversationId: string, params?: PaginationParams): Promise<PaginatedResult<Message>>;
  sendMessage(conversationId: string, data: Partial<Message>): Promise<Message>;
  markAsRead(messageId: string): Promise<boolean>;
}

// Review data source interface
export interface ReviewDataSource {
  getReviews(params?: { propertyId?: string; agentId?: string; agencyId?: string } & PaginationParams): Promise<PaginatedResult<Review>>;
  createReview(data: Partial<Review>): Promise<Review>;
  updateReview(id: string, data: Partial<Review>): Promise<Review>;
  deleteReview(id: string): Promise<boolean>;
}

// Inquiry data source interface
export interface InquiryDataSource {
  getInquiries(params?: { agentId?: string; propertyId?: string } & PaginationParams): Promise<PaginatedResult<Inquiry>>;
  createInquiry(data: Partial<Inquiry>): Promise<Inquiry>;
  updateInquiryStatus(id: string, status: Inquiry['status']): Promise<Inquiry>;
}

// Tour data source interface
export interface TourDataSource {
  getTours(params?: { agentId?: string; propertyId?: string } & PaginationParams): Promise<PaginatedResult<Tour>>;
  createTour(data: Partial<Tour>): Promise<Tour>;
  updateTourStatus(id: string, status: Tour['status']): Promise<Tour>;
}

// Payment data source interface
export interface PaymentDataSource {
  getPackages(): Promise<Package[]>;
  getInvoices(userId: string): Promise<Invoice[]>;
  createInvoice(data: Partial<Invoice>): Promise<Invoice>;
  getInvoiceById(id: string): Promise<Invoice | null>;
}

// Notification data source interface
export interface NotificationDataSource {
  getNotifications(userId: string, params?: PaginationParams): Promise<PaginatedResult<Notification>>;
  markNotificationAsRead(id: string): Promise<boolean>;
  markAllNotificationsAsRead(userId: string): Promise<boolean>;
}

// Combined DataSource interface
export interface DataSource {
  properties: PropertyDataSource;
  agents: AgentDataSource;
  cities: CityDataSource;
  testimonials: TestimonialDataSource;
  blog: BlogDataSource;
  categories: CategoryDataSource;
  users: UserDataSource;
  messages: MessageDataSource;
  reviews: ReviewDataSource;
  inquiries: InquiryDataSource;
  tours: TourDataSource;
  payments: PaymentDataSource;
  notifications: NotificationDataSource;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

// API Error types
export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Export types from @/types for convenience
export type {
  Property,
  Agent,
  Agency,
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
};
