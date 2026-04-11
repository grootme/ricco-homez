import { Agent } from '@/types';

// Agent avatar images from Unsplash
const agentAvatars = {
  sarah: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
  michael: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
  emily: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
  david: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  amanda: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
  james: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
  jessica: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
  robert: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
};

export const agents: Agent[] = [
  {
    id: 'agent-001',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    email: 'sarah.johnson@homez.com',
    phone: '+1 (305) 555-0101',
    avatar: agentAvatars.sarah,
    bio: 'With over 15 years of experience in luxury real estate, Sarah has established herself as one of Miami\'s premier property consultants. Her dedication to client satisfaction and deep market knowledge have earned her numerous industry awards and a loyal client base.',
    title: 'Senior Luxury Property Consultant',
    socialLinks: {
      facebook: 'https://facebook.com/sarahjohnsonrealestate',
      twitter: 'https://twitter.com/sarahjrealtor',
      linkedin: 'https://linkedin.com/in/sarahjohnsonrealestate',
      instagram: 'https://instagram.com/sarahjohnson.realtor',
    },
    totalSales: 245,
    totalListings: 38,
    rating: 4.9,
    reviewCount: 127,
    agencyId: 'agency-001',
    officeAddress: '1200 Brickell Avenue, Suite 800',
    city: 'Miami',
    state: 'Florida',
    specialties: ['Luxury Properties', 'Waterfront Homes', 'New Construction', 'Investment Properties'],
    joinedAt: '2009-03-15T00:00:00Z',
    verified: true,
    featured: true,
  },
  {
    id: 'agent-002',
    name: 'Michael Chen',
    slug: 'michael-chen',
    email: 'michael.chen@homez.com',
    phone: '+1 (212) 555-0102',
    avatar: agentAvatars.michael,
    bio: 'Michael brings a unique perspective to real estate with his background in architecture and urban planning. He specializes in luxury condos and penthouses in Manhattan, helping clients find properties that perfectly match their lifestyle and investment goals.',
    title: 'Luxury Condo Specialist',
    socialLinks: {
      twitter: 'https://twitter.com/michaelchenre',
      linkedin: 'https://linkedin.com/in/michaelchenrealestate',
      instagram: 'https://instagram.com/michaelchen.nyc',
    },
    totalSales: 189,
    totalListings: 24,
    rating: 4.8,
    reviewCount: 98,
    agencyId: 'agency-001',
    officeAddress: '425 Park Avenue, 15th Floor',
    city: 'New York',
    state: 'New York',
    specialties: ['Luxury Condos', 'Penthouses', 'Pre-construction', 'Investment Properties'],
    joinedAt: '2012-06-01T00:00:00Z',
    verified: true,
    featured: true,
  },
  {
    id: 'agent-003',
    name: 'Emily Rodriguez',
    slug: 'emily-rodriguez',
    email: 'emily.rodriguez@homez.com',
    phone: '+1 (503) 555-0103',
    avatar: agentAvatars.emily,
    bio: 'Emily is a Portland native with an intimate knowledge of the city\'s diverse neighborhoods. Her passion for historic homes and sustainable living makes her the go-to agent for clients seeking character-rich properties with modern amenities.',
    title: 'Residential Property Expert',
    socialLinks: {
      facebook: 'https://facebook.com/emilyrodriguezhomes',
      linkedin: 'https://linkedin.com/in/emilyrodriguezrealtor',
      instagram: 'https://instagram.com/emilyrodriguez.pdx',
    },
    totalSales: 156,
    totalListings: 18,
    rating: 4.9,
    reviewCount: 84,
    city: 'Portland',
    state: 'Oregon',
    specialties: ['Historic Homes', 'Craftsman Style', 'Sustainable Living', 'First-time Buyers'],
    joinedAt: '2014-09-01T00:00:00Z',
    verified: true,
    featured: false,
  },
  {
    id: 'agent-004',
    name: 'David Park',
    slug: 'david-park',
    email: 'david.park@homez.com',
    phone: '+1 (310) 555-0104',
    avatar: agentAvatars.david,
    bio: 'David\'s expertise spans from trendy Arts District lofts to beachfront properties in Malibu. His background in finance helps clients understand the investment potential of each property, making him a trusted advisor for both primary residences and investment properties.',
    title: 'Westside Property Specialist',
    socialLinks: {
      facebook: 'https://facebook.com/davidparkrealestate',
      twitter: 'https://twitter.com/davidparkla',
      linkedin: 'https://linkedin.com/in/davidparkrealestate',
      instagram: 'https://instagram.com/davidpark.la',
    },
    totalSales: 178,
    totalListings: 22,
    rating: 4.7,
    reviewCount: 92,
    agencyId: 'agency-002',
    officeAddress: '10100 Santa Monica Boulevard, Suite 400',
    city: 'Los Angeles',
    state: 'California',
    specialties: ['Luxury Rentals', 'Beach Properties', 'Investment Analysis', 'Creative Spaces'],
    joinedAt: '2013-02-15T00:00:00Z',
    verified: true,
    featured: true,
  },
  {
    id: 'agent-005',
    name: 'Amanda Thompson',
    slug: 'amanda-thompson',
    email: 'amanda.thompson@homez.com',
    phone: '+1 (206) 555-0105',
    avatar: agentAvatars.amanda,
    bio: 'Amanda specializes in eco-friendly homes and smart properties in the Pacific Northwest. Her commitment to sustainable living and extensive network of green building professionals makes her the ideal agent for environmentally conscious buyers.',
    title: 'Sustainable Living Specialist',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amandathompsonrealestate',
      instagram: 'https://instagram.com/amanda.thompson.realtor',
    },
    totalSales: 89,
    totalListings: 15,
    rating: 4.8,
    reviewCount: 67,
    city: 'Seattle',
    state: 'Washington',
    specialties: ['Eco-Friendly Homes', 'Smart Homes', 'Green Building', 'Energy Efficient'],
    joinedAt: '2017-05-01T00:00:00Z',
    verified: true,
    featured: false,
  },
  {
    id: 'agent-006',
    name: 'James Wilson',
    slug: 'james-wilson',
    email: 'james.wilson@homez.com',
    phone: '+1 (617) 555-0106',
    avatar: agentAvatars.james,
    bio: 'James has been helping families find their perfect homes in Greater Boston for over a decade. His deep understanding of the local school systems and neighborhood dynamics makes him an invaluable resource for families relocating to the area.',
    title: 'Family Home Specialist',
    socialLinks: {
      facebook: 'https://facebook.com/jameswilsonboston',
      linkedin: 'https://linkedin.com/in/jameswilsonrealestate',
    },
    totalSales: 134,
    totalListings: 16,
    rating: 4.9,
    reviewCount: 89,
    agencyId: 'agency-003',
    officeAddress: '200 Clarendon Street, 45th Floor',
    city: 'Boston',
    state: 'Massachusetts',
    specialties: ['Family Homes', 'School Districts', 'Suburbs', 'Relocation'],
    joinedAt: '2011-08-01T00:00:00Z',
    verified: true,
    featured: false,
  },
  {
    id: 'agent-007',
    name: 'Jessica Martinez',
    slug: 'jessica-martinez',
    email: 'jessica.martinez@homez.com',
    phone: '+1 (718) 555-0107',
    avatar: agentAvatars.jessica,
    bio: 'Jessica\'s expertise in Brooklyn\'s brownstone market is unparalleled. Growing up in Park Slope, she has witnessed the borough\'s transformation and helps clients navigate its diverse neighborhoods with insider knowledge and genuine enthusiasm.',
    title: 'Brooklyn Brownstone Expert',
    socialLinks: {
      facebook: 'https://facebook.com/jessicamartinezhomes',
      twitter: 'https://twitter.com/jessicamartinez_',
      linkedin: 'https://linkedin.com/in/jessicamartinezrealestate',
      instagram: 'https://instagram.com/jessicamartinez.bk',
    },
    totalSales: 167,
    totalListings: 21,
    rating: 4.8,
    reviewCount: 103,
    agencyId: 'agency-004',
    officeAddress: '334 Furman Street',
    city: 'Brooklyn',
    state: 'New York',
    specialties: ['Brownstones', 'Townhouses', 'Historic Properties', 'Renovations'],
    joinedAt: '2013-11-01T00:00:00Z',
    verified: true,
    featured: true,
  },
  {
    id: 'agent-008',
    name: 'Robert Taylor',
    slug: 'robert-taylor',
    email: 'robert.taylor@homez.com',
    phone: '+1 (512) 555-0108',
    avatar: agentAvatars.robert,
    bio: 'Robert brings Texas-sized enthusiasm to real estate. His expertise in Austin\'s rapidly growing market, combined with his construction background, helps clients understand both the potential and pitfalls of properties in this competitive market.',
    title: 'Austin Market Expert',
    socialLinks: {
      facebook: 'https://facebook.com/roberttayloratx',
      linkedin: 'https://linkedin.com/in/roberttaylorrealestate',
      instagram: 'https://instagram.com/robert.taylor.atx',
    },
    totalSales: 145,
    totalListings: 19,
    rating: 4.7,
    reviewCount: 78,
    city: 'Austin',
    state: 'Texas',
    specialties: ['New Construction', 'Investment Properties', 'Lake Properties', 'Tech Corridor'],
    joinedAt: '2015-04-01T00:00:00Z',
    verified: true,
    featured: false,
  },
];

// Helper functions
export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(a => a.id === id);
};

export const getAgentBySlug = (slug: string): Agent | undefined => {
  return agents.find(a => a.slug === slug);
};

export const getFeaturedAgents = (): Agent[] => {
  return agents.filter(a => a.featured);
};

export const getVerifiedAgents = (): Agent[] => {
  return agents.filter(a => a.verified);
};

export const getAgentsByCity = (city: string): Agent[] => {
  return agents.filter(a => a.city.toLowerCase() === city.toLowerCase());
};

export const getAgentsByAgency = (agencyId: string): Agent[] => {
  return agents.filter(a => a.agencyId === agencyId);
};

export const getAgentsBySpecialty = (specialty: string): Agent[] => {
  return agents.filter(a => 
    a.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
  );
};
