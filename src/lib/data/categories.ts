import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'House',
    slug: 'house',
    description: 'Single-family detached homes offering privacy and space. Perfect for families and those who value their own yard and outdoor space.',
    icon: 'Home',
    propertyCount: 8521,
  },
  {
    id: 'cat-002',
    name: 'Apartment',
    slug: 'apartment',
    description: 'Multi-unit residential buildings with individual units. Great for urban living with access to shared amenities.',
    icon: 'Building',
    propertyCount: 4834,
  },
  {
    id: 'cat-003',
    name: 'Condo',
    slug: 'condo',
    description: 'Individually owned units in a shared building. Offers ownership benefits with condo association amenities and services.',
    icon: 'Building2',
    propertyCount: 3567,
  },
  {
    id: 'cat-004',
    name: 'Villa',
    slug: 'villa',
    description: 'Luxury detached homes often with premium amenities. Ideal for those seeking upscale living with privacy and space.',
    icon: 'Castle',
    propertyCount: 892,
  },
  {
    id: 'cat-005',
    name: 'Townhouse',
    slug: 'townhouse',
    description: 'Multi-story homes sharing walls with neighbors. Combines the benefits of house ownership with lower maintenance.',
    icon: 'Home',
    propertyCount: 2154,
  },
  {
    id: 'cat-006',
    name: 'Office',
    slug: 'office',
    description: 'Commercial spaces designed for business operations. Perfect for startups, small businesses, and professional services.',
    icon: 'Briefcase',
    propertyCount: 423,
  },
  {
    id: 'cat-007',
    name: 'Bungalow',
    slug: 'bungalow',
    description: 'Single-story homes with a cozy, compact design. Popular for their accessibility and charming architectural style.',
    icon: 'Home',
    propertyCount: 678,
  },
  {
    id: 'cat-008',
    name: 'Loft',
    slug: 'loft',
    description: 'Open-concept spaces converted from industrial buildings. Features high ceilings, exposed brick, and large windows.',
    icon: 'Warehouse',
    propertyCount: 345,
  },
  {
    id: 'cat-009',
    name: 'Penthouse',
    slug: 'penthouse',
    description: 'Luxury apartments on the top floor of buildings. Offers premium finishes, stunning views, and exclusive amenities.',
    icon: 'Crown',
    propertyCount: 156,
  },
  {
    id: 'cat-010',
    name: 'Studio',
    slug: 'studio',
    description: 'Compact living spaces combining bedroom, living area, and kitchenette. Perfect for singles and minimalists.',
    icon: 'Layout',
    propertyCount: 1287,
  },
];

// Property status categories
export const statusCategories = [
  {
    id: 'status-001',
    name: 'For Sale',
    slug: 'for-sale',
    description: 'Properties available for purchase',
    count: 12543,
  },
  {
    id: 'status-002',
    name: 'For Rent',
    slug: 'for-rent',
    description: 'Properties available for rent',
    count: 4521,
  },
  {
    id: 'status-003',
    name: 'Sold',
    slug: 'sold',
    description: 'Recently sold properties',
    count: 3256,
  },
];

// Price range categories
export const priceRanges = [
  {
    id: 'price-001',
    name: 'Under $300K',
    min: 0,
    max: 300000,
    count: 2345,
  },
  {
    id: 'price-002',
    name: '$300K - $500K',
    min: 300000,
    max: 500000,
    count: 4521,
  },
  {
    id: 'price-003',
    name: '$500K - $750K',
    min: 500000,
    max: 750000,
    count: 3234,
  },
  {
    id: 'price-004',
    name: '$750K - $1M',
    min: 750000,
    max: 1000000,
    count: 1876,
  },
  {
    id: 'price-005',
    name: '$1M - $2M',
    min: 1000000,
    max: 2000000,
    count: 1234,
  },
  {
    id: 'price-006',
    name: 'Over $2M',
    min: 2000000,
    max: null,
    count: 567,
  },
];

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(c => c.name.toLowerCase() === name.toLowerCase());
};

export const getCategoriesWithProperties = (): Category[] => {
  return categories.filter(c => c.propertyCount > 0);
};
