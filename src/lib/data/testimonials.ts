import { Testimonial } from '@/types';

// Avatar images from Unsplash
const avatarImages = {
  williams: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  chen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  thompson: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  rodriguez: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  anderson: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
  kim: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  sullivan: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
  garcia: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    name: 'Jennifer & Mark Williams',
    avatar: avatarImages.williams,
    role: 'Homeowners',
    company: 'Miami, Florida',
    content: 'Sarah Johnson made our dream of owning a waterfront property a reality. Her knowledge of the Miami market is unparalleled, and she went above and beyond to find us the perfect home. We couldn\'t be happier with our new villa!',
    rating: 5,
    propertyType: 'Villa',
    createdAt: '2024-01-15T00:00:00Z',
    featured: true,
  },
  {
    id: 'testimonial-002',
    name: 'David Chen',
    avatar: avatarImages.chen,
    role: 'Investor',
    company: 'New York, New York',
    content: 'Michael helped me build an impressive investment portfolio in Manhattan. His analytical approach and deep understanding of the condo market have been invaluable. I\'ve purchased three properties through him and couldn\'t recommend him more highly.',
    rating: 5,
    propertyType: 'Condo',
    createdAt: '2024-02-01T00:00:00Z',
    featured: true,
  },
  {
    id: 'testimonial-003',
    name: 'Sarah Thompson',
    avatar: avatarImages.thompson,
    role: 'First-time Buyer',
    company: 'Portland, Oregon',
    content: 'Emily was patient and knowledgeable throughout our entire home-buying journey. She helped us find a beautiful Craftsman home that we absolutely love. Her expertise in historic properties was exactly what we needed.',
    rating: 5,
    propertyType: 'House',
    createdAt: '2024-01-20T00:00:00Z',
    featured: true,
  },
  {
    id: 'testimonial-004',
    name: 'Michael Rodriguez',
    avatar: avatarImages.rodriguez,
    role: 'Business Owner',
    company: 'Los Angeles, California',
    content: 'David Park found me the perfect live-work loft in the Arts District. He understood exactly what I needed for my business and personal life. The transaction was smooth, and he was always available to answer my questions.',
    rating: 4,
    propertyType: 'Loft',
    createdAt: '2024-02-10T00:00:00Z',
    featured: false,
  },
  {
    id: 'testimonial-005',
    name: 'Lisa & John Anderson',
    avatar: avatarImages.anderson,
    role: 'Relocating Family',
    company: 'Boston, Massachusetts',
    content: 'James made our cross-country relocation seamless. He helped us understand the school districts and neighborhoods, and found us a wonderful family home in a great community. His local knowledge was invaluable.',
    rating: 5,
    propertyType: 'House',
    createdAt: '2024-01-28T00:00:00Z',
    featured: true,
  },
  {
    id: 'testimonial-006',
    name: 'Robert Kim',
    avatar: avatarImages.kim,
    role: 'Tech Executive',
    company: 'San Francisco, California',
    content: 'Amanda helped us find an amazing eco-friendly home in Seattle. Her knowledge of sustainable features and green building was exactly what we were looking for. She\'s incredibly professional and responsive.',
    rating: 5,
    propertyType: 'House',
    createdAt: '2024-02-05T00:00:00Z',
    featured: false,
  },
  {
    id: 'testimonial-007',
    name: 'Patricia Sullivan',
    avatar: avatarImages.sullivan,
    role: 'Retired',
    company: 'Denver, Colorado',
    content: 'The team at Homez made selling our family home of 35 years an emotional yet positive experience. They were patient, understanding, and got us a great price. We\'re now happily settled in our new mountain-view condo.',
    rating: 5,
    propertyType: 'Condo',
    createdAt: '2024-01-05T00:00:00Z',
    featured: true,
  },
  {
    id: 'testimonial-008',
    name: 'Thomas & Maria Garcia',
    avatar: avatarImages.garcia,
    role: 'Growing Family',
    company: 'Austin, Texas',
    content: 'Robert helped us navigate the competitive Austin market and found us a beautiful home with plenty of space for our growing family. His knowledge of the area and construction background gave us confidence in our purchase.',
    rating: 5,
    propertyType: 'House',
    createdAt: '2024-02-15T00:00:00Z',
    featured: false,
  },
];

// Helper functions
export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(t => t.id === id);
};

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(t => t.featured);
};

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(t => t.rating >= minRating);
};
