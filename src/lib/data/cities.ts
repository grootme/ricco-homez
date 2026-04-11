import { City } from '@/types';

// City images from Unsplash
const cityImages = {
  miami: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&h=600&fit=crop',
  newYork: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
  losAngeles: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop',
  sanFrancisco: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
  chicago: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
  denver: 'https://images.unsplash.com/photo-1583729164682-7b5ee0c7b869?w=800&h=600&fit=crop',
  austin: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=600&fit=crop',
  seattle: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
};

export const cities: City[] = [
  {
    id: 'city-001',
    name: 'Miami',
    slug: 'miami',
    state: 'Florida',
    country: 'USA',
    image: cityImages.miami,
    totalProperties: 456,
    totalAgents: 89,
    featured: true,
    description: 'Miami is a vibrant coastal city known for its beautiful beaches, diverse culture, and thriving real estate market. From luxury waterfront properties to trendy urban condos, Miami offers a wide range of options for every lifestyle.',
    latitude: 25.7617,
    longitude: -80.1918,
  },
  {
    id: 'city-002',
    name: 'New York',
    slug: 'new-york',
    state: 'New York',
    country: 'USA',
    image: cityImages.newYork,
    totalProperties: 892,
    totalAgents: 156,
    featured: true,
    description: 'The city that never sleeps offers an unparalleled real estate market with everything from historic brownstones in Brooklyn to luxury penthouses in Manhattan. New York\'s diverse neighborhoods provide unique living experiences for every preference.',
    latitude: 40.7128,
    longitude: -74.0060,
  },
  {
    id: 'city-003',
    name: 'Los Angeles',
    slug: 'los-angeles',
    state: 'California',
    country: 'USA',
    image: cityImages.losAngeles,
    totalProperties: 634,
    totalAgents: 112,
    featured: true,
    description: 'Los Angeles is the entertainment capital of the world, offering diverse real estate options from beachfront properties in Malibu to creative lofts in the Arts District. The city\'s year-round sunshine and cultural diversity make it a top destination.',
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    id: 'city-004',
    name: 'San Francisco',
    slug: 'san-francisco',
    state: 'California',
    country: 'USA',
    image: cityImages.sanFrancisco,
    totalProperties: 378,
    totalAgents: 67,
    featured: true,
    description: 'San Francisco\'s iconic hills and stunning bay views create one of the most desirable real estate markets in the country. From Victorian painted ladies to modern condos, the city offers unique architectural character in every neighborhood.',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 'city-005',
    name: 'Chicago',
    slug: 'chicago',
    state: 'Illinois',
    country: 'USA',
    image: cityImages.chicago,
    totalProperties: 523,
    totalAgents: 94,
    featured: true,
    description: 'Chicago combines world-class architecture with Midwestern charm. The city\'s real estate market offers incredible value, from stunning lakefront condos to historic single-family homes in tree-lined neighborhoods.',
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    id: 'city-006',
    name: 'Denver',
    slug: 'denver',
    state: 'Colorado',
    country: 'USA',
    image: cityImages.denver,
    totalProperties: 289,
    totalAgents: 52,
    featured: true,
    description: 'Denver offers the perfect blend of urban amenities and outdoor recreation. With stunning mountain views and a thriving cultural scene, the Mile High City has become one of the most sought-after real estate markets in the country.',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  {
    id: 'city-007',
    name: 'Austin',
    slug: 'austin',
    state: 'Texas',
    country: 'USA',
    image: cityImages.austin,
    totalProperties: 412,
    totalAgents: 78,
    featured: true,
    description: 'Austin\'s booming tech scene and vibrant live music culture have made it one of the fastest-growing cities in America. The real estate market offers excellent value with diverse options from urban condos to spacious hill country estates.',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  {
    id: 'city-008',
    name: 'Seattle',
    slug: 'seattle',
    state: 'Washington',
    country: 'USA',
    image: cityImages.seattle,
    totalProperties: 345,
    totalAgents: 61,
    featured: false,
    description: 'Seattle\'s stunning natural beauty and thriving tech industry create a dynamic real estate market. From waterfront properties to eco-friendly modern homes, the Emerald City offers something for everyone.',
    latitude: 47.6062,
    longitude: -122.3321,
  },
];

// Helper functions
export const getCityById = (id: string): City | undefined => {
  return cities.find(c => c.id === id);
};

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(c => c.slug === slug);
};

export const getFeaturedCities = (): City[] => {
  return cities.filter(c => c.featured);
};

export const getCitiesByState = (state: string): City[] => {
  return cities.filter(c => c.state.toLowerCase() === state.toLowerCase());
};

export const searchCities = (query: string): City[] => {
  const lowercaseQuery = query.toLowerCase();
  return cities.filter(c => 
    c.name.toLowerCase().includes(lowercaseQuery) ||
    c.state.toLowerCase().includes(lowercaseQuery)
  );
};
