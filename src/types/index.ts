// Property Types
export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  priceSuffix?: string;
  propertyType: PropertyType;
  status: PropertyStatus;
  featured: boolean;
  images: string[];
  videos?: string[];
  virtualTour?: string;
  
  // Location
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  neighborhood?: string;
  latitude?: number;
  longitude?: number;
  
  // Property Details
  bedrooms: number;
  bathrooms: number;
  halfBaths?: number;
  sqft: number;
  lotSize?: number;
  yearBuilt?: number;
  garage?: number;
  parkingSpots?: number;
  floors?: number;
  
  // Features
  features: string[];
  amenities: string[];
  
  // Agent
  agentId: string;
  agencyId?: string;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  
  // Stats
  views: number;
  favorites: number;
  
  // Additional
  tourScheduleEnabled: boolean;
  inquiryEnabled: boolean;
}

export type PropertyType = 
  | 'house' 
  | 'apartment' 
  | 'condo' 
  | 'townhouse' 
  | 'villa' 
  | 'penthouse' 
  | 'studio' 
  | 'land' 
  | 'commercial' 
  | 'office';

export type PropertyStatus = 
  | 'for-sale' 
  | 'for-rent' 
  | 'sold' 
  | 'rented' 
  | 'pending';

// Agent Types
export interface Agent {
  id: string;
  name: string;
  slug: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  title: string;
  
  // Social Links
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  
  // Stats
  totalSales: number;
  totalListings: number;
  rating: number;
  reviewCount: number;
  
  // Agency
  agencyId?: string;
  
  // Location
  officeAddress?: string;
  city: string;
  state: string;
  
  // Specialties
  specialties: string[];
  
  // Timestamps
  joinedAt: string;
  
  // Verification
  verified: boolean;
  featured: boolean;
}

// Agency Types
export interface Agency {
  id: string;
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  description: string;
  
  // Contact
  email: string;
  phone: string;
  website?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Stats
  totalAgents: number;
  totalListings: number;
  totalSales: number;
  rating: number;
  reviewCount: number;
  
  // Social Links
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  
  // Verification
  verified: boolean;
  featured: boolean;
  
  // Timestamps
  foundedYear?: number;
  createdAt: string;
}

// City Types
export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  country: string;
  image: string;
  
  // Stats
  totalProperties: number;
  totalAgents: number;
  
  // Featured
  featured: boolean;
  
  // Description
  description: string;
  
  // Coordinates
  latitude?: number;
  longitude?: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  
  // Property they bought/sold
  propertyType?: string;
  
  // Timestamp
  createdAt: string;
  
  // Featured
  featured: boolean;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  images?: string[];
  
  // Author
  authorId: string;
  authorName: string;
  authorAvatar: string;
  
  // Categories & Tags
  category: string;
  tags: string[];
  
  // Stats
  views: number;
  readTime: number;
  
  // Timestamps
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  
  // Status
  status: 'published' | 'draft';
  featured: boolean;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  image?: string;
  propertyCount: number;
  parent?: string;
}

// Review Types
export interface Review {
  id: string;
  propertyId?: string;
  agentId?: string;
  agencyId?: string;
  
  // Reviewer
  userId: string;
  userName: string;
  userAvatar?: string;
  
  // Content
  title: string;
  content: string;
  rating: number;
  
  // Response
  response?: {
    content: string;
    respondedAt: string;
    responderName: string;
  };
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  
  // Status
  status: 'approved' | 'pending' | 'rejected';
}

// Inquiry Types
export interface Inquiry {
  id: string;
  propertyId: string;
  
  // Contact Info
  name: string;
  email: string;
  phone?: string;
  
  // Message
  message: string;
  
  // Status
  status: 'new' | 'read' | 'responded' | 'closed';
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  
  // Agent Response
  agentId: string;
}

// Tour Types
export interface Tour {
  id: string;
  propertyId: string;
  
  // Visitor Info
  name: string;
  email: string;
  phone: string;
  
  // Schedule
  date: string;
  time: string;
  timezone: string;
  
  // Type
  tourType: 'in-person' | 'virtual' | 'video';
  
  // Message
  message?: string;
  
  // Status
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  
  // Agent
  agentId: string;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

// Dashboard Types
export interface DashboardStats {
  totalProperties: number;
  activeListings: number;
  pendingListings: number;
  soldProperties: number;
  totalViews: number;
  totalInquiries: number;
  totalTours: number;
  revenue: number;
}

export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'agent' | 'agency' | 'admin';
  phone?: string;
  
  // Subscription
  subscription?: {
    plan: string;
    status: 'active' | 'expired' | 'cancelled';
    expiresAt: string;
    features: string[];
  };
  
  // Timestamps
  createdAt: string;
  lastLoginAt?: string;
  
  // Verification
  emailVerified: boolean;
  phoneVerified: boolean;
}

// User Favorite
export interface UserFavorite {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: string;
}

// Saved Search
export interface SavedSearch {
  id: string;
  userId: string;
  name: string;
  filters: PropertySearchFilters;
  notifications: boolean;
  createdAt: string;
}

// Property Search Filters
export interface PropertySearchFilters {
  query?: string;
  location?: string;
  propertyType?: PropertyType[];
  status?: PropertyStatus[];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  minBathrooms?: number;
  maxBathrooms?: number;
  minSqft?: number;
  maxSqft?: number;
  minYearBuilt?: number;
  maxYearBuilt?: number;
  features?: string[];
  amenities?: string[];
  hasGarage?: boolean;
  hasPool?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'date-asc' | 'date-desc' | 'sqft-asc' | 'sqft-desc';
}

// Message Types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  attachments?: string[];
  
  // Read Status
  read: boolean;
  readAt?: string;
  
  // Timestamp
  createdAt: string;
}

export interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

// Package Types
export interface Package {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly' | 'one-time';
  
  // Features
  features: string[];
  limits: {
    listings: number;
    featuredListings: number;
    photos: number;
    videos: number;
  };
  
  // Popular
  popular: boolean;
  
  // Stripe
  stripePriceId?: string;
}

// Invoice Types
export interface Invoice {
  id: string;
  invoiceNumber: string;
  userId: string;
  
  // Items
  items: {
    description: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  
  // Totals
  subtotal: number;
  tax: number;
  total: number;
  
  // Status
  status: 'draft' | 'sent' | 'paid' | 'cancelled';
  
  // Dates
  issueDate: string;
  dueDate: string;
  paidAt?: string;
  
  // Payment
  paymentMethod?: string;
  transactionId?: string;
}

// Compare Properties
export interface CompareProperty {
  propertyId: string;
  addedAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'inquiry' | 'tour' | 'message' | 'listing' | 'system';
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: string;
}
