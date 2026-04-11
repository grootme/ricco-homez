// Mock data for Homez Real Estate
// This file exports all mock data from a single location

// Property data
export { 
  properties, 
  getPropertyById, 
  getPropertyBySlug, 
  getFeaturedProperties,
  getPropertiesByStatus,
  getPropertiesByType,
  getPropertiesByCity,
  getPropertiesByAgent,
  searchProperties 
} from './properties';

// Agent data
export { 
  agents, 
  getAgentById, 
  getAgentBySlug, 
  getFeaturedAgents,
  getVerifiedAgents,
  getAgentsByCity,
  getAgentsByAgency,
  getAgentsBySpecialty 
} from './agents';

// City data
export { 
  cities, 
  getCityById, 
  getCityBySlug, 
  getFeaturedCities,
  getCitiesByState,
  searchCities 
} from './cities';

// Testimonial data
export { 
  testimonials, 
  getTestimonialById, 
  getFeaturedTestimonials,
  getTestimonialsByRating 
} from './testimonials';

// Blog data
export { 
  blogPosts, 
  getBlogPostById, 
  getBlogPostBySlug, 
  getFeaturedBlogPosts,
  getBlogPostsByCategory,
  getBlogPostsByTag,
  searchBlogPosts 
} from './blog';

// Category data
export { 
  categories, 
  statusCategories, 
  priceRanges,
  getCategoryById, 
  getCategoryBySlug, 
  getCategoryByName,
  getCategoriesWithProperties 
} from './categories';

// Re-export types from types/index.ts for convenience
export type {
  Property,
  PropertyType,
  PropertyStatus,
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
  CompareProperty,
  Notification,
} from '@/types';

// Additional data for backward compatibility
export const propertyTypes = [
  { name: 'House', count: 8521, icon: 'home' },
  { name: 'Apartment', count: 4834, icon: 'building' },
  { name: 'Condo', count: 3567, icon: 'building-2' },
  { name: 'Villa', count: 892, icon: 'castle' },
  { name: 'Townhouse', count: 2154, icon: 'home' },
  { name: 'Office', count: 423, icon: 'briefcase' },
];

export const services = [
  {
    title: 'Buy a Home',
    description: 'Find your dream home from our extensive listings of properties for sale.',
    icon: 'home',
    link: '/buy'
  },
  {
    title: 'Sell a Home',
    description: 'Get the best value for your property with our expert selling services.',
    icon: 'tag',
    link: '/sell'
  },
  {
    title: 'Rent a Home',
    description: 'Discover rental properties that fit your lifestyle and budget.',
    icon: 'key',
    link: '/rent'
  }
];

export const stats = [
  { label: 'Properties Listed', value: '15,000+' },
  { label: 'Happy Customers', value: '8,500+' },
  { label: 'Expert Agents', value: '200+' },
  { label: 'Cities Covered', value: '50+' },
];

export const membershipPlans = [
  {
    name: 'Basic',
    price: 0,
    features: ['Browse all listings', 'Save up to 10 properties', 'Basic search filters', 'Email alerts'],
    popular: false
  },
  {
    name: 'Premium',
    price: 29,
    features: ['All Basic features', 'Save unlimited properties', 'Advanced search filters', 'Priority support', 'Market insights', 'Virtual tours'],
    popular: true
  },
  {
    name: 'Professional',
    price: 99,
    features: ['All Premium features', 'Agent dashboard', 'Listing analytics', 'Lead generation', 'Custom branding', 'API access'],
    popular: false
  }
];

export const partners = [
  { id: 1, name: 'Bank of America', logo: '/partners/boa.svg' },
  { id: 2, name: 'Wells Fargo', logo: '/partners/wells.svg' },
  { id: 3, name: 'Chase', logo: '/partners/chase.svg' },
  { id: 4, name: 'Zillow', logo: '/partners/zillow.svg' },
  { id: 5, name: 'Realtor.com', logo: '/partners/realtor.svg' },
  { id: 6, name: 'Redfin', logo: '/partners/redfin.svg' },
];

// Agency data
export const agencies = [
  {
    id: 'agency-001',
    name: 'Homez Premier Properties',
    slug: 'homez-premier-properties',
    logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop',
    description: 'Homez Premier Properties is a leading luxury real estate agency specializing in high-end residential and commercial properties across major metropolitan areas.',
    email: 'contact@homezpremier.com',
    phone: '+1 (800) 555-0001',
    website: 'https://homezpremier.com',
    address: '1200 Brickell Avenue, Suite 800',
    city: 'Miami',
    state: 'Florida',
    zipCode: '33131',
    totalAgents: 45,
    totalListings: 234,
    totalSales: 1250,
    rating: 4.9,
    reviewCount: 567,
    verified: true,
    featured: true,
    foundedYear: 2010,
    createdAt: '2020-01-01T00:00:00Z',
  },
  {
    id: 'agency-002',
    name: 'Westside Realty Group',
    slug: 'westside-realty-group',
    logo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=400&fit=crop',
    description: 'Westside Realty Group focuses on the Los Angeles market, specializing in luxury homes, beachfront properties, and creative spaces.',
    email: 'info@westsiderealty.com',
    phone: '+1 (800) 555-0002',
    website: 'https://westsiderealty.com',
    address: '10100 Santa Monica Boulevard, Suite 400',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '90067',
    totalAgents: 28,
    totalListings: 156,
    totalSales: 890,
    rating: 4.7,
    reviewCount: 324,
    verified: true,
    featured: true,
    foundedYear: 2015,
    createdAt: '2020-01-01T00:00:00Z',
  },
  {
    id: 'agency-003',
    name: 'New England Home Partners',
    slug: 'new-england-home-partners',
    logo: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop',
    description: 'New England Home Partners specializes in family homes and relocation services throughout Greater Boston and New England.',
    email: 'hello@nehomepartners.com',
    phone: '+1 (800) 555-0003',
    website: 'https://nehomepartners.com',
    address: '200 Clarendon Street, 45th Floor',
    city: 'Boston',
    state: 'Massachusetts',
    zipCode: '02116',
    totalAgents: 22,
    totalListings: 98,
    totalSales: 654,
    rating: 4.8,
    reviewCount: 234,
    verified: true,
    featured: false,
    foundedYear: 2012,
    createdAt: '2020-01-01T00:00:00Z',
  },
  {
    id: 'agency-004',
    name: 'Brooklyn Brownstone Specialists',
    slug: 'brooklyn-brownstone-specialists',
    logo: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=200&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=400&fit=crop',
    description: 'Brooklyn Brownstone Specialists are experts in historic Brooklyn properties, from classic brownstones to modern townhouses.',
    email: 'info@bkbrownstones.com',
    phone: '+1 (800) 555-0004',
    website: 'https://bkbrownstones.com',
    address: '334 Furman Street',
    city: 'Brooklyn',
    state: 'New York',
    zipCode: '11201',
    totalAgents: 18,
    totalListings: 87,
    totalSales: 432,
    rating: 4.8,
    reviewCount: 189,
    verified: true,
    featured: true,
    foundedYear: 2013,
    createdAt: '2020-01-01T00:00:00Z',
  },
];
