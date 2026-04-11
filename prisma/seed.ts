import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ---------------------------------------------------------------------------
// Property image collections (from existing mock data)
// ---------------------------------------------------------------------------
const propertyImages = {
  villa1: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  ],
  penthouse: [
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
  ],
  house1: [
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  ],
  apartment: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
  ],
  waterfront: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  ],
  studio: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
  ],
  townhouse: [
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
  ],
  condo: [
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  ],
  brownstone: [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  ],
  beachCondo: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
  ],
  familyHome: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
  ],
  loft: [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  ],
  medVilla: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  ],
  smartHome: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
  ],
  office: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
  ],
  cabin: [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
  ],
  microApt: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
  ],
  colonial: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  ],
  artistLoft: [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
  ],
  tuscanVilla: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  ],
  townhome: [
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
  ],
  beachCottage: [
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
  ],
} as const;

// ---------------------------------------------------------------------------
// Main seed function
// ---------------------------------------------------------------------------
async function main() {
  console.log('🌱 Starting Homez database seed...\n');

  // ========================================================================
  // 1. CATEGORIES (10)
  // ========================================================================
  console.log('📦 Seeding Categories (10)...');
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'house' },
      update: {},
      create: {
        id: 'cat-001',
        name: 'House',
        slug: 'house',
        description:
          'Single-family detached homes offering privacy and space. Perfect for families and those who value their own yard and outdoor space.',
        icon: 'Home',
        propertyCount: 8521,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'apartment' },
      update: {},
      create: {
        id: 'cat-002',
        name: 'Apartment',
        slug: 'apartment',
        description:
          'Multi-unit residential buildings with individual units. Great for urban living with access to shared amenities.',
        icon: 'Building',
        propertyCount: 4834,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'condo' },
      update: {},
      create: {
        id: 'cat-003',
        name: 'Condo',
        slug: 'condo',
        description:
          'Individually owned units in a shared building. Offers ownership benefits with condo association amenities and services.',
        icon: 'Building2',
        propertyCount: 3567,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'villa' },
      update: {},
      create: {
        id: 'cat-004',
        name: 'Villa',
        slug: 'villa',
        description:
          'Luxury detached homes often with premium amenities. Ideal for those seeking upscale living with privacy and space.',
        icon: 'Castle',
        propertyCount: 892,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'townhouse' },
      update: {},
      create: {
        id: 'cat-005',
        name: 'Townhouse',
        slug: 'townhouse',
        description:
          'Multi-story homes sharing walls with neighbors. Combines the benefits of house ownership with lower maintenance.',
        icon: 'Home',
        propertyCount: 2154,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'office' },
      update: {},
      create: {
        id: 'cat-006',
        name: 'Office',
        slug: 'office',
        description:
          'Commercial spaces designed for business operations. Perfect for startups, small businesses, and professional services.',
        icon: 'Briefcase',
        propertyCount: 423,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'bungalow' },
      update: {},
      create: {
        id: 'cat-007',
        name: 'Bungalow',
        slug: 'bungalow',
        description:
          'Single-story homes with a cozy, compact design. Popular for their accessibility and charming architectural style.',
        icon: 'Home',
        propertyCount: 678,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'loft' },
      update: {},
      create: {
        id: 'cat-008',
        name: 'Loft',
        slug: 'loft',
        description:
          'Open-concept spaces converted from industrial buildings. Features high ceilings, exposed brick, and large windows.',
        icon: 'Warehouse',
        propertyCount: 345,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'penthouse' },
      update: {},
      create: {
        id: 'cat-009',
        name: 'Penthouse',
        slug: 'penthouse',
        description:
          'Luxury apartments on the top floor of buildings. Offers premium finishes, stunning views, and exclusive amenities.',
        icon: 'Crown',
        propertyCount: 156,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'studio' },
      update: {},
      create: {
        id: 'cat-010',
        name: 'Studio',
        slug: 'studio',
        description:
          'Compact living spaces combining bedroom, living area, and kitchenette. Perfect for singles and minimalists.',
        icon: 'Layout',
        propertyCount: 1287,
      },
    }),
  ]);
  console.log(`   ✅ Created ${categories.length} categories\n`);

  // ========================================================================
  // 2. CITIES (8)
  // ========================================================================
  console.log('🏙️  Seeding Cities (8)...');
  const cities = await Promise.all([
    prisma.city.upsert({
      where: { slug: 'miami' },
      update: {},
      create: {
        id: 'city-001',
        name: 'Miami',
        slug: 'miami',
        state: 'Florida',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&h=600&fit=crop',
        totalProperties: 456,
        totalAgents: 89,
        featured: true,
        description:
          'Miami is a vibrant coastal city known for its beautiful beaches, diverse culture, and thriving real estate market. From luxury waterfront properties to trendy urban condos, Miami offers a wide range of options for every lifestyle.',
        latitude: 25.7617,
        longitude: -80.1918,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'new-york' },
      update: {},
      create: {
        id: 'city-002',
        name: 'New York',
        slug: 'new-york',
        state: 'New York',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
        totalProperties: 892,
        totalAgents: 156,
        featured: true,
        description:
          "The city that never sleeps offers an unparalleled real estate market with everything from historic brownstones in Brooklyn to luxury penthouses in Manhattan. New York's diverse neighborhoods provide unique living experiences for every preference.",
        latitude: 40.7128,
        longitude: -74.006,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'los-angeles' },
      update: {},
      create: {
        id: 'city-003',
        name: 'Los Angeles',
        slug: 'los-angeles',
        state: 'California',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop',
        totalProperties: 634,
        totalAgents: 112,
        featured: true,
        description:
          "Los Angeles is the entertainment capital of the world, offering diverse real estate options from beachfront properties in Malibu to creative lofts in the Arts District. The city's year-round sunshine and cultural diversity make it a top destination.",
        latitude: 34.0522,
        longitude: -118.2437,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'san-francisco' },
      update: {},
      create: {
        id: 'city-004',
        name: 'San Francisco',
        slug: 'san-francisco',
        state: 'California',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
        totalProperties: 378,
        totalAgents: 67,
        featured: true,
        description:
          "San Francisco's iconic hills and stunning bay views create one of the most desirable real estate markets in the country. From Victorian painted ladies to modern condos, the city offers unique architectural character in every neighborhood.",
        latitude: 37.7749,
        longitude: -122.4194,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'chicago' },
      update: {},
      create: {
        id: 'city-005',
        name: 'Chicago',
        slug: 'chicago',
        state: 'Illinois',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
        totalProperties: 523,
        totalAgents: 94,
        featured: true,
        description:
          'Chicago combines world-class architecture with Midwestern charm. The city\'s real estate market offers incredible value, from stunning lakefront condos to historic single-family homes in tree-lined neighborhoods.',
        latitude: 41.8781,
        longitude: -87.6298,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'denver' },
      update: {},
      create: {
        id: 'city-006',
        name: 'Denver',
        slug: 'denver',
        state: 'Colorado',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1583729164682-7b5ee0c7b869?w=800&h=600&fit=crop',
        totalProperties: 289,
        totalAgents: 52,
        featured: true,
        description:
          'Denver offers the perfect blend of urban amenities and outdoor recreation. With stunning mountain views and a thriving cultural scene, the Mile High City has become one of the most sought-after real estate markets in the country.',
        latitude: 39.7392,
        longitude: -104.9903,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'austin' },
      update: {},
      create: {
        id: 'city-007',
        name: 'Austin',
        slug: 'austin',
        state: 'Texas',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=600&fit=crop',
        totalProperties: 412,
        totalAgents: 78,
        featured: true,
        description:
          "Austin's booming tech scene and vibrant live music culture have made it one of the fastest-growing cities in America. The real estate market offers excellent value with diverse options from urban condos to spacious hill country estates.",
        latitude: 30.2672,
        longitude: -97.7431,
      },
    }),
    prisma.city.upsert({
      where: { slug: 'seattle' },
      update: {},
      create: {
        id: 'city-008',
        name: 'Seattle',
        slug: 'seattle',
        state: 'Washington',
        country: 'USA',
        image:
          'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
        totalProperties: 345,
        totalAgents: 61,
        featured: false,
        description:
          "Seattle's stunning natural beauty and thriving tech industry create a dynamic real estate market. From waterfront properties to eco-friendly modern homes, the Emerald City offers something for everyone.",
        latitude: 47.6062,
        longitude: -122.3321,
      },
    }),
  ]);
  console.log(`   ✅ Created ${cities.length} cities\n`);

  // ========================================================================
  // 3. AGENCIES (4)
  // ========================================================================
  console.log('🏢 Seeding Agencies (4)...');
  const agencies = await Promise.all([
    prisma.agency.upsert({
      where: { slug: 'prestige-realty-group' },
      update: {},
      create: {
        id: 'agency-001',
        name: 'Prestige Realty Group',
        slug: 'prestige-realty-group',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop',
        coverImage:
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=400&fit=crop',
        description:
          'Prestige Realty Group is a premier luxury real estate agency serving Miami and New York City. With over 20 years of experience, we specialize in high-end residential properties, waterfront estates, and investment opportunities.',
        email: 'info@prestigerealty.com',
        phone: '+1 (305) 555-9000',
        website: 'https://prestigerealty.com',
        address: '1200 Brickell Avenue, Suite 800',
        city: 'Miami',
        state: 'Florida',
        zipCode: '33131',
        totalAgents: 2,
        totalListings: 8,
        totalSales: 434,
        rating: 4.85,
        reviewCount: 225,
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/prestigerealtygroup',
          instagram: 'https://instagram.com/prestigerealtygroup',
          linkedin: 'https://linkedin.com/company/prestige-realty-group',
        }),
        verified: true,
        featured: true,
        foundedYear: 2003,
      },
    }),
    prisma.agency.upsert({
      where: { slug: 'coastal-properties-inc' },
      update: {},
      create: {
        id: 'agency-002',
        name: 'Coastal Properties Inc.',
        slug: 'coastal-properties-inc',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop',
        coverImage:
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=400&fit=crop',
        description:
          'Coastal Properties Inc. is the leading real estate agency for beachfront and coastal properties across Southern California, including Los Angeles and San Diego.',
        email: 'info@coastalproperties.com',
        phone: '+1 (310) 555-9001',
        website: 'https://coastalproperties.com',
        address: '10100 Santa Monica Boulevard, Suite 400',
        city: 'Los Angeles',
        state: 'California',
        zipCode: '90067',
        totalAgents: 1,
        totalListings: 4,
        totalSales: 178,
        rating: 4.7,
        reviewCount: 92,
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/coastalpropertiesinc',
          instagram: 'https://instagram.com/coastalpropertiesinc',
        }),
        verified: true,
        featured: true,
        foundedYear: 2008,
      },
    }),
    prisma.agency.upsert({
      where: { slug: 'new-england-real-estate' },
      update: {},
      create: {
        id: 'agency-003',
        name: 'New England Real Estate',
        slug: 'new-england-real-estate',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop',
        coverImage:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=400&fit=crop',
        description:
          'New England Real Estate specializes in family homes and townhouses in the Greater Boston area. We help families find their perfect homes with deep knowledge of school districts and neighborhoods.',
        email: 'info@newenglandrealestate.com',
        phone: '+1 (617) 555-9002',
        website: 'https://newenglandrealestate.com',
        address: '200 Clarendon Street, 45th Floor',
        city: 'Boston',
        state: 'Massachusetts',
        zipCode: '02116',
        totalAgents: 1,
        totalListings: 2,
        totalSales: 134,
        rating: 4.9,
        reviewCount: 89,
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/newenglandrealestate',
          linkedin: 'https://linkedin.com/company/new-england-real-estate',
        }),
        verified: true,
        featured: false,
        foundedYear: 2005,
      },
    }),
    prisma.agency.upsert({
      where: { slug: 'brooklyn-heights-realty' },
      update: {},
      create: {
        id: 'agency-004',
        name: 'Brooklyn Heights Realty',
        slug: 'brooklyn-heights-realty',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop',
        coverImage:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=400&fit=crop',
        description:
          'Brooklyn Heights Realty is the premier agency for brownstones, townhouses, and historic properties in Brooklyn and New York City. Our deep roots in the community give us unmatched local expertise.',
        email: 'info@brooklynheightsrealty.com',
        phone: '+1 (718) 555-9003',
        website: 'https://brooklynheightsrealty.com',
        address: '334 Furman Street',
        city: 'Brooklyn',
        state: 'New York',
        zipCode: '11201',
        totalAgents: 1,
        totalListings: 2,
        totalSales: 167,
        rating: 4.8,
        reviewCount: 103,
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/brooklynheightsrealty',
          instagram: 'https://instagram.com/brooklynheightsrealty',
          twitter: 'https://twitter.com/bkheightsrealty',
        }),
        verified: true,
        featured: true,
        foundedYear: 2010,
      },
    }),
  ]);
  console.log(`   ✅ Created ${agencies.length} agencies\n`);

  // ========================================================================
  // 4. USERS (8 agent users + 1 admin + 3 reviewer users = 12)
  // ========================================================================
  console.log('👤 Seeding Users (12)...');
  const users = await Promise.all([
    // --- Agent users ---
    prisma.user.upsert({
      where: { email: 'sarah.johnson@homez.com' },
      update: {},
      create: {
        id: 'agent-001',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
        phone: '+1 (305) 555-0101',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'michael.chen@homez.com' },
      update: {},
      create: {
        id: 'agent-002',
        name: 'Michael Chen',
        email: 'michael.chen@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
        phone: '+1 (212) 555-0102',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'emily.rodriguez@homez.com' },
      update: {},
      create: {
        id: 'agent-003',
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
        phone: '+1 (503) 555-0103',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'david.park@homez.com' },
      update: {},
      create: {
        id: 'agent-004',
        name: 'David Park',
        email: 'david.park@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        phone: '+1 (310) 555-0104',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'amanda.thompson@homez.com' },
      update: {},
      create: {
        id: 'agent-005',
        name: 'Amanda Thompson',
        email: 'amanda.thompson@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        phone: '+1 (206) 555-0105',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'james.wilson@homez.com' },
      update: {},
      create: {
        id: 'agent-006',
        name: 'James Wilson',
        email: 'james.wilson@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
        phone: '+1 (617) 555-0106',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'jessica.martinez@homez.com' },
      update: {},
      create: {
        id: 'agent-007',
        name: 'Jessica Martinez',
        email: 'jessica.martinez@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
        phone: '+1 (718) 555-0107',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'robert.taylor@homez.com' },
      update: {},
      create: {
        id: 'agent-008',
        name: 'Robert Taylor',
        email: 'robert.taylor@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
        phone: '+1 (512) 555-0108',
        role: 'agent',
        emailVerified: true,
        phoneVerified: true,
      },
    }),
    // --- Admin user ---
    prisma.user.upsert({
      where: { email: 'admin@homez.com' },
      update: {},
      create: {
        id: 'admin-001',
        name: 'Homez Admin',
        email: 'admin@homez.com',
        password: '$2b$10$placeholder_hash_for_seed',
        role: 'admin',
        emailVerified: true,
      },
    }),
    // --- Reviewer / regular users (for reviews, tours, inquiries) ---
    prisma.user.upsert({
      where: { email: 'jennifer.williams@email.com' },
      update: {},
      create: {
        id: 'user-001',
        name: 'Jennifer Williams',
        email: 'jennifer.williams@email.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
        phone: '+1 (305) 555-2001',
        role: 'user',
        emailVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'david.chen@email.com' },
      update: {},
      create: {
        id: 'user-002',
        name: 'David Chen',
        email: 'david.chen@email.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
        phone: '+1 (212) 555-2002',
        role: 'user',
        emailVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'lisa.anderson@email.com' },
      update: {},
      create: {
        id: 'user-003',
        name: 'Lisa Anderson',
        email: 'lisa.anderson@email.com',
        password: '$2b$10$placeholder_hash_for_seed',
        avatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=300&fit=crop',
        phone: '+1 (617) 555-2003',
        role: 'user',
        emailVerified: true,
      },
    }),
  ]);
  console.log(`   ✅ Created ${users.length} users\n`);

  // ========================================================================
  // 5. AGENT PROFILES (8)
  // ========================================================================
  console.log('🤝 Seeding Agent Profiles (8)...');
  const agentProfiles = await Promise.all([
    prisma.agentProfile.upsert({
      where: { userId: 'agent-001' },
      update: {},
      create: {
        id: 'profile-001',
        userId: 'agent-001',
        title: 'Senior Luxury Property Consultant',
        bio: "With over 15 years of experience in luxury real estate, Sarah has established herself as one of Miami's premier property consultants. Her dedication to client satisfaction and deep market knowledge have earned her numerous industry awards and a loyal client base.",
        totalSales: 245,
        totalListings: 38,
        rating: 4.9,
        reviewCount: 127,
        officeAddress: '1200 Brickell Avenue, Suite 800',
        city: 'Miami',
        state: 'Florida',
        specialties: JSON.stringify([
          'Luxury Properties',
          'Waterfront Homes',
          'New Construction',
          'Investment Properties',
        ]),
        verified: true,
        featured: true,
        joinedAt: new Date('2009-03-15'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/sarahjohnsonrealestate',
          twitter: 'https://twitter.com/sarahjrealtor',
          linkedin: 'https://linkedin.com/in/sarahjohnsonrealestate',
          instagram: 'https://instagram.com/sarahjohnson.realtor',
        }),
        agencyId: 'agency-001',
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-002' },
      update: {},
      create: {
        id: 'profile-002',
        userId: 'agent-002',
        title: 'Luxury Condo Specialist',
        bio: 'Michael brings a unique perspective to real estate with his background in architecture and urban planning. He specializes in luxury condos and penthouses in Manhattan, helping clients find properties that perfectly match their lifestyle and investment goals.',
        totalSales: 189,
        totalListings: 24,
        rating: 4.8,
        reviewCount: 98,
        officeAddress: '425 Park Avenue, 15th Floor',
        city: 'New York',
        state: 'New York',
        specialties: JSON.stringify([
          'Luxury Condos',
          'Penthouses',
          'Pre-construction',
          'Investment Properties',
        ]),
        verified: true,
        featured: true,
        joinedAt: new Date('2012-06-01'),
        socialLinks: JSON.stringify({
          twitter: 'https://twitter.com/michaelchenre',
          linkedin: 'https://linkedin.com/in/michaelchenrealestate',
          instagram: 'https://instagram.com/michaelchen.nyc',
        }),
        agencyId: 'agency-001',
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-003' },
      update: {},
      create: {
        id: 'profile-003',
        userId: 'agent-003',
        title: 'Residential Property Expert',
        bio: "Emily is a Portland native with an intimate knowledge of the city's diverse neighborhoods. Her passion for historic homes and sustainable living makes her the go-to agent for clients seeking character-rich properties with modern amenities.",
        totalSales: 156,
        totalListings: 18,
        rating: 4.9,
        reviewCount: 84,
        officeAddress: '123 NW Everett Street, Suite 200',
        city: 'Portland',
        state: 'Oregon',
        specialties: JSON.stringify([
          'Historic Homes',
          'Craftsman Style',
          'Sustainable Living',
          'First-time Buyers',
        ]),
        verified: true,
        featured: false,
        joinedAt: new Date('2014-09-01'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/emilyrodriguezhomes',
          linkedin: 'https://linkedin.com/in/emilyrodriguezrealtor',
          instagram: 'https://instagram.com/emilyrodriguez.pdx',
        }),
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-004' },
      update: {},
      create: {
        id: 'profile-004',
        userId: 'agent-004',
        title: 'Westside Property Specialist',
        bio: "David's expertise spans from trendy Arts District lofts to beachfront properties in Malibu. His background in finance helps clients understand the investment potential of each property, making him a trusted advisor for both primary residences and investment properties.",
        totalSales: 178,
        totalListings: 22,
        rating: 4.7,
        reviewCount: 92,
        officeAddress: '10100 Santa Monica Boulevard, Suite 400',
        city: 'Los Angeles',
        state: 'California',
        specialties: JSON.stringify([
          'Luxury Rentals',
          'Beach Properties',
          'Investment Analysis',
          'Creative Spaces',
        ]),
        verified: true,
        featured: true,
        joinedAt: new Date('2013-02-15'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/davidparkrealestate',
          twitter: 'https://twitter.com/davidparkla',
          linkedin: 'https://linkedin.com/in/davidparkrealestate',
          instagram: 'https://instagram.com/davidpark.la',
        }),
        agencyId: 'agency-002',
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-005' },
      update: {},
      create: {
        id: 'profile-005',
        userId: 'agent-005',
        title: 'Sustainable Living Specialist',
        bio: 'Amanda specializes in eco-friendly homes and smart properties in the Pacific Northwest. Her commitment to sustainable living and extensive network of green building professionals makes her the ideal agent for environmentally conscious buyers.',
        totalSales: 89,
        totalListings: 15,
        rating: 4.8,
        reviewCount: 67,
        officeAddress: '400 Pine Street, Suite 300',
        city: 'Seattle',
        state: 'Washington',
        specialties: JSON.stringify([
          'Eco-Friendly Homes',
          'Smart Homes',
          'Green Building',
          'Energy Efficient',
        ]),
        verified: true,
        featured: false,
        joinedAt: new Date('2017-05-01'),
        socialLinks: JSON.stringify({
          linkedin:
            'https://linkedin.com/in/amandathompsonrealestate',
          instagram:
            'https://instagram.com/amanda.thompson.realtor',
        }),
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-006' },
      update: {},
      create: {
        id: 'profile-006',
        userId: 'agent-006',
        title: 'Family Home Specialist',
        bio: 'James has been helping families find their perfect homes in Greater Boston for over a decade. His deep understanding of the local school systems and neighborhood dynamics makes him an invaluable resource for families relocating to the area.',
        totalSales: 134,
        totalListings: 16,
        rating: 4.9,
        reviewCount: 89,
        officeAddress: '200 Clarendon Street, 45th Floor',
        city: 'Boston',
        state: 'Massachusetts',
        specialties: JSON.stringify([
          'Family Homes',
          'School Districts',
          'Suburbs',
          'Relocation',
        ]),
        verified: true,
        featured: false,
        joinedAt: new Date('2011-08-01'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/jameswilsonboston',
          linkedin: 'https://linkedin.com/in/jameswilsonrealestate',
        }),
        agencyId: 'agency-003',
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-007' },
      update: {},
      create: {
        id: 'profile-007',
        userId: 'agent-007',
        title: 'Brooklyn Brownstone Expert',
        bio: "Jessica's expertise in Brooklyn's brownstone market is unparalleled. Growing up in Park Slope, she has witnessed the borough's transformation and helps clients navigate its diverse neighborhoods with insider knowledge and genuine enthusiasm.",
        totalSales: 167,
        totalListings: 21,
        rating: 4.8,
        reviewCount: 103,
        officeAddress: '334 Furman Street',
        city: 'Brooklyn',
        state: 'New York',
        specialties: JSON.stringify([
          'Brownstones',
          'Townhouses',
          'Historic Properties',
          'Renovations',
        ]),
        verified: true,
        featured: true,
        joinedAt: new Date('2013-11-01'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/jessicamartinezhomes',
          twitter: 'https://twitter.com/jessicamartinez_',
          linkedin: 'https://linkedin.com/in/jessicamartinezrealestate',
          instagram: 'https://instagram.com/jessicamartinez.bk',
        }),
        agencyId: 'agency-004',
      },
    }),
    prisma.agentProfile.upsert({
      where: { userId: 'agent-008' },
      update: {},
      create: {
        id: 'profile-008',
        userId: 'agent-008',
        title: 'Austin Market Expert',
        bio: "Robert brings Texas-sized enthusiasm to real estate. His expertise in Austin's rapidly growing market, combined with his construction background, helps clients understand both the potential and pitfalls of properties in this competitive market.",
        totalSales: 145,
        totalListings: 19,
        rating: 4.7,
        reviewCount: 78,
        officeAddress: '500 Congress Avenue, Suite 200',
        city: 'Austin',
        state: 'Texas',
        specialties: JSON.stringify([
          'New Construction',
          'Investment Properties',
          'Lake Properties',
          'Tech Corridor',
        ]),
        verified: true,
        featured: false,
        joinedAt: new Date('2015-04-01'),
        socialLinks: JSON.stringify({
          facebook: 'https://facebook.com/roberttayloratx',
          linkedin: 'https://linkedin.com/in/roberttaylorrealestate',
          instagram: 'https://instagram.com/robert.taylor.atx',
        }),
      },
    }),
  ]);
  console.log(`   ✅ Created ${agentProfiles.length} agent profiles\n`);

  // ========================================================================
  // 6. PROPERTIES (22)
  // ========================================================================
  console.log('🏠 Seeding Properties (22)...');

  const propertiesData = [
    // --- prop-001 ---
    {
      id: 'prop-001',
      title: 'Luxury Modern Villa with Ocean View',
      slug: 'luxury-modern-villa-ocean-view',
      description:
        'Experience luxury living at its finest in this stunning modern villa featuring panoramic ocean views, an infinity pool, and state-of-the-art smart home technology. This architectural masterpiece offers 5 spacious bedrooms, each with en-suite bathrooms, a gourmet kitchen with premium appliances, and expansive living areas perfect for entertaining.',
      price: 4850000,
      priceSuffix: '',
      propertyType: 'villa',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.villa1),
      address: '123 Oceanview Drive',
      city: 'Miami',
      state: 'Florida',
      zipCode: '33139',
      country: 'USA',
      neighborhood: 'South Beach',
      latitude: 25.7826,
      longitude: -80.1341,
      bedrooms: 5,
      bathrooms: 6,
      halfBaths: 1,
      sqft: 6500,
      lotSize: 12000,
      yearBuilt: 2022,
      garage: 3,
      parkingSpots: 4,
      floors: 3,
      features: JSON.stringify([
        'Ocean View',
        'Infinity Pool',
        'Smart Home',
        'Wine Cellar',
        'Home Theater',
        'Gym',
        'Outdoor Kitchen',
        'Elevator',
      ]),
      amenities: JSON.stringify([
        '24/7 Security',
        'Private Beach Access',
        'Landscaped Gardens',
        'Guest House',
      ]),
      agentId: 'agent-001',
      agencyId: 'agency-001',
      views: 2547,
      favorites: 189,
    },
    // --- prop-002 ---
    {
      id: 'prop-002',
      title: 'Downtown Penthouse with Skyline Views',
      slug: 'downtown-penthouse-skyline-views',
      description:
        'An exceptional penthouse residence offering breathtaking skyline views from floor-to-ceiling windows. This sophisticated urban retreat features designer finishes throughout, a private terrace, and exclusive access to world-class amenities.',
      price: 3200000,
      propertyType: 'penthouse',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.penthouse),
      address: '456 Skyline Boulevard, PH1',
      city: 'New York',
      state: 'New York',
      zipCode: '10001',
      country: 'USA',
      neighborhood: 'Midtown',
      latitude: 40.7549,
      longitude: -73.984,
      bedrooms: 3,
      bathrooms: 3,
      halfBaths: 1,
      sqft: 3200,
      yearBuilt: 2020,
      garage: 2,
      floors: 1,
      features: JSON.stringify([
        'Skyline Views',
        'Private Terrace',
        "Chef's Kitchen",
        'Walk-in Closets',
        'Smart Home',
        'Floor-to-Ceiling Windows',
      ]),
      amenities: JSON.stringify([
        'Concierge',
        'Rooftop Pool',
        'Fitness Center',
        'Private Lounge',
        'Valet Parking',
      ]),
      agentId: 'agent-002',
      agencyId: 'agency-001',
      views: 1892,
      favorites: 145,
    },
    // --- prop-003 ---
    {
      id: 'prop-003',
      title: 'Charming Craftsman Home in Historic District',
      slug: 'charming-craftsman-historic-district',
      description:
        'This beautifully restored Craftsman home combines original architectural details with modern updates. Featuring exposed beam ceilings, built-in cabinetry, and a wrap-around porch, this property offers the perfect blend of character and comfort.',
      price: 875000,
      propertyType: 'house',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.house1),
      address: '789 Heritage Lane',
      city: 'Portland',
      state: 'Oregon',
      zipCode: '97201',
      country: 'USA',
      neighborhood: 'Pearl District',
      latitude: 45.5231,
      longitude: -122.6765,
      bedrooms: 4,
      bathrooms: 2,
      sqft: 2400,
      lotSize: 6500,
      yearBuilt: 1925,
      garage: 1,
      parkingSpots: 2,
      features: JSON.stringify([
        'Original Hardwood Floors',
        'Exposed Beams',
        'Wrap-around Porch',
        'Built-in Cabinetry',
        'Fireplace',
        'Updated Kitchen',
      ]),
      amenities: JSON.stringify(['Garden', 'Detached Workshop', 'Mature Trees']),
      agentId: 'agent-003',
      views: 1423,
      favorites: 98,
    },
    // --- prop-004 ---
    {
      id: 'prop-004',
      title: 'Modern Minimalist Apartment in Arts District',
      slug: 'modern-minimalist-apartment-arts-district',
      description:
        'A stunning minimalist apartment in the heart of the Arts District. Clean lines, natural light, and premium finishes define this contemporary living space, perfect for the design-conscious urbanite.',
      price: 4250,
      priceSuffix: '/month',
      propertyType: 'apartment',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.apartment),
      address: '321 Creative Way, Unit 402',
      city: 'Los Angeles',
      state: 'California',
      zipCode: '90013',
      country: 'USA',
      neighborhood: 'Arts District',
      latitude: 34.0407,
      longitude: -118.2351,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1450,
      yearBuilt: 2021,
      garage: 1,
      features: JSON.stringify([
        'Exposed Concrete',
        'Floor-to-Ceiling Windows',
        'European Appliances',
        'Quartz Countertops',
        'In-unit Laundry',
      ]),
      amenities: JSON.stringify([
        'Rooftop Deck',
        'Bike Storage',
        'Pet Friendly',
      ]),
      agentId: 'agent-004',
      agencyId: 'agency-002',
      views: 856,
      favorites: 67,
    },
    // --- prop-005 ---
    {
      id: 'prop-005',
      title: 'Waterfront Estate with Private Dock',
      slug: 'waterfront-estate-private-dock',
      description:
        'An exceptional waterfront property offering 200 feet of private shoreline, a deep-water dock, and stunning sunset views. This elegant estate features a main house, guest cottage, and extensive outdoor living spaces.',
      price: 6750000,
      propertyType: 'villa',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.waterfront),
      address: '56 Lakeshore Drive',
      city: 'Lake Tahoe',
      state: 'California',
      zipCode: '96145',
      country: 'USA',
      neighborhood: 'Lakefront',
      latitude: 39.0968,
      longitude: -120.0324,
      bedrooms: 6,
      bathrooms: 5,
      halfBaths: 2,
      sqft: 7800,
      lotSize: 35000,
      yearBuilt: 2018,
      garage: 3,
      parkingSpots: 6,
      features: JSON.stringify([
        'Private Dock',
        'Lake Views',
        'Guest Cottage',
        'Outdoor Fireplace',
        'Hot Tub',
        'Boat Lift',
      ]),
      amenities: JSON.stringify([
        'Private Beach',
        'Tennis Court',
        'Fire Pit',
      ]),
      agentId: 'agent-001',
      agencyId: 'agency-001',
      views: 3254,
      favorites: 234,
    },
    // --- prop-006 ---
    {
      id: 'prop-006',
      title: 'Cozy Studio in Prime Location',
      slug: 'cozy-studio-prime-location',
      description:
        'A perfectly positioned studio apartment ideal for young professionals. Features modern finishes, abundant natural light, and easy access to public transportation, restaurants, and entertainment.',
      price: 1850,
      priceSuffix: '/month',
      propertyType: 'studio',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.studio),
      address: '890 Metro Street, Unit 205',
      city: 'Chicago',
      state: 'Illinois',
      zipCode: '60601',
      country: 'USA',
      neighborhood: 'River North',
      latitude: 41.8827,
      longitude: -87.6233,
      bedrooms: 0,
      bathrooms: 1,
      sqft: 450,
      yearBuilt: 2019,
      features: JSON.stringify([
        'Open Floor Plan',
        'Modern Kitchenette',
        'Walk-in Closet',
        'In-unit Laundry',
      ]),
      amenities: JSON.stringify([
        'Fitness Center',
        'Business Center',
        'Package Room',
      ]),
      agentId: 'agent-005',
      views: 542,
      favorites: 34,
    },
    // --- prop-007 ---
    {
      id: 'prop-007',
      title: 'Elegant Townhouse with Private Garden',
      slug: 'elegant-townhouse-private-garden',
      description:
        "A sophisticated townhouse featuring a private garden, chef's kitchen, and spacious living areas. This turnkey property offers the perfect blend of urban convenience and suburban tranquility.",
      price: 1250000,
      propertyType: 'townhouse',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.townhouse),
      address: '234 Garden Row',
      city: 'Boston',
      state: 'Massachusetts',
      zipCode: '02116',
      country: 'USA',
      neighborhood: 'Back Bay',
      latitude: 42.3505,
      longitude: -71.0771,
      bedrooms: 3,
      bathrooms: 2,
      halfBaths: 1,
      sqft: 2100,
      lotSize: 1800,
      yearBuilt: 2017,
      garage: 1,
      parkingSpots: 1,
      features: JSON.stringify([
        'Private Garden',
        "Chef's Kitchen",
        'Hardwood Floors',
        'Crown Moldings',
        'Central AC',
      ]),
      amenities: JSON.stringify(['Walk to T Station', 'Pet Friendly']),
      agentId: 'agent-006',
      agencyId: 'agency-003',
      views: 1087,
      favorites: 76,
    },
    // --- prop-008 ---
    {
      id: 'prop-008',
      title: 'Contemporary Condo with Mountain Views',
      slug: 'contemporary-condo-mountain-views',
      description:
        'A beautifully designed condo offering panoramic mountain views, modern finishes, and resort-style amenities. Perfect as a primary residence or vacation getaway.',
      price: 685000,
      propertyType: 'condo',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.condo),
      address: '456 Summit Drive, Unit 301',
      city: 'Denver',
      state: 'Colorado',
      zipCode: '80202',
      country: 'USA',
      neighborhood: 'LoDo',
      latitude: 39.7392,
      longitude: -104.9903,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1350,
      yearBuilt: 2020,
      garage: 1,
      features: JSON.stringify([
        'Mountain Views',
        'Balcony',
        'Gas Fireplace',
        'Gourmet Kitchen',
        'Smart Thermostat',
      ]),
      amenities: JSON.stringify([
        'Pool',
        'Hot Tub',
        'Fitness Center',
        'Ski Storage',
      ]),
      agentId: 'agent-002',
      agencyId: 'agency-001',
      views: 756,
      favorites: 52,
    },
    // --- prop-009 ---
    {
      id: 'prop-009',
      title: 'Historic Brownstone in Prime Location',
      slug: 'historic-brownstone-prime-location',
      description:
        "A meticulously restored brownstone featuring original details including ornate fireplaces, pocket doors, and hardwood floors. Modern updates include a chef's kitchen and updated bathrooms.",
      price: 2850000,
      propertyType: 'house',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.brownstone),
      address: '789 Historic Avenue',
      city: 'New York',
      state: 'New York',
      zipCode: '11201',
      country: 'USA',
      neighborhood: 'Brooklyn Heights',
      latitude: 40.694,
      longitude: -73.9935,
      bedrooms: 5,
      bathrooms: 3,
      halfBaths: 1,
      sqft: 3800,
      lotSize: 2500,
      yearBuilt: 1890,
      parkingSpots: 1,
      floors: 4,
      features: JSON.stringify([
        'Original Details',
        'Multiple Fireplaces',
        'Garden',
        'Wine Cellar',
        'High Ceilings',
        'Crown Moldings',
      ]),
      amenities: JSON.stringify(['Private Garden', 'Roof Deck Rights']),
      agentId: 'agent-007',
      agencyId: 'agency-004',
      views: 2134,
      favorites: 167,
    },
    // --- prop-010 ---
    {
      id: 'prop-010',
      title: 'Beachfront Condo with Direct Beach Access',
      slug: 'beachfront-condo-direct-beach-access',
      description:
        'Wake up to ocean views every day in this stunning beachfront condo. Features include direct beach access, a gourmet kitchen, and resort-style amenities including pool and spa.',
      price: 1250000,
      propertyType: 'condo',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.beachCondo),
      address: '100 Shoreline Way, Unit 501',
      city: 'San Diego',
      state: 'California',
      zipCode: '92109',
      country: 'USA',
      neighborhood: 'Pacific Beach',
      latitude: 32.8008,
      longitude: -117.2413,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1250,
      yearBuilt: 2018,
      garage: 1,
      features: JSON.stringify([
        'Ocean Views',
        'Direct Beach Access',
        'Balcony',
        'Updated Kitchen',
        'Walk-in Closets',
      ]),
      amenities: JSON.stringify([
        'Pool',
        'Spa',
        'Fitness Center',
        'BBQ Area',
      ]),
      agentId: 'agent-004',
      agencyId: 'agency-002',
      views: 987,
      favorites: 78,
    },
    // --- prop-011 ---
    {
      id: 'prop-011',
      title: 'Spacious Family Home with Pool',
      slug: 'spacious-family-home-pool',
      description:
        'A wonderful family home in a highly sought-after school district. Features include a large backyard with pool, updated kitchen, and plenty of space for the whole family.',
      price: 645000,
      propertyType: 'house',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.familyHome),
      address: '456 Oak Street',
      city: 'Austin',
      state: 'Texas',
      zipCode: '78701',
      country: 'USA',
      neighborhood: 'Tarrytown',
      latitude: 30.2711,
      longitude: -97.7437,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      lotSize: 12000,
      yearBuilt: 2005,
      garage: 2,
      parkingSpots: 4,
      features: JSON.stringify([
        'Pool',
        'Large Backyard',
        'Updated Kitchen',
        'Hardwood Floors',
        'Covered Patio',
      ]),
      amenities: JSON.stringify([
        'Excellent Schools',
        'Quiet Street',
        'Mature Trees',
      ]),
      agentId: 'agent-008',
      views: 1234,
      favorites: 89,
    },
    // --- prop-012 ---
    {
      id: 'prop-012',
      title: 'Industrial Loft in Converted Warehouse',
      slug: 'industrial-loft-converted-warehouse',
      description:
        'An authentic industrial loft featuring soaring ceilings, exposed brick, and oversized windows. This converted warehouse offers unique character and modern conveniences.',
      price: 3800,
      priceSuffix: '/month',
      propertyType: 'apartment',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.loft),
      address: '200 Factory Row, Loft A',
      city: 'Philadelphia',
      state: 'Pennsylvania',
      zipCode: '19123',
      country: 'USA',
      neighborhood: 'Northern Liberties',
      latitude: 39.9626,
      longitude: -75.1392,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1800,
      yearBuilt: 2015,
      features: JSON.stringify([
        'Soaring Ceilings',
        'Exposed Brick',
        'Oversized Windows',
        'Open Floor Plan',
        'Original Beams',
      ]),
      amenities: JSON.stringify([
        'Rooftop Deck',
        'Bike Storage',
        'Pet Friendly',
      ]),
      agentId: 'agent-003',
      views: 654,
      favorites: 45,
    },
    // --- prop-013 ---
    {
      id: 'prop-013',
      title: 'Mediterranean Villa with Courtyard',
      slug: 'mediterranean-villa-courtyard',
      description:
        'A stunning Mediterranean-style villa featuring a central courtyard, clay tile roof, and elegant arched doorways. Beautifully landscaped grounds complete this private oasis.',
      price: 2100000,
      propertyType: 'villa',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.medVilla),
      address: '789 Hacienda Lane',
      city: 'Phoenix',
      state: 'Arizona',
      zipCode: '85018',
      country: 'USA',
      neighborhood: 'Arcadia',
      latitude: 33.5162,
      longitude: -111.9458,
      bedrooms: 4,
      bathrooms: 4,
      halfBaths: 1,
      sqft: 4500,
      lotSize: 25000,
      yearBuilt: 2012,
      garage: 3,
      parkingSpots: 4,
      features: JSON.stringify([
        'Central Courtyard',
        'Clay Tile Roof',
        'Wine Room',
        'Outdoor Kitchen',
        'Fireplace',
        'Fountain',
      ]),
      amenities: JSON.stringify([
        'Pool',
        'Spa',
        'Guest Casita',
        'Citrus Trees',
      ]),
      agentId: 'agent-001',
      agencyId: 'agency-001',
      views: 1876,
      favorites: 134,
    },
    // --- prop-014 ---
    {
      id: 'prop-014',
      title: 'Modern Smart Home with Solar',
      slug: 'modern-smart-home-solar',
      description:
        'An eco-friendly smart home featuring solar panels, energy-efficient design, and the latest home automation technology. Live sustainably without sacrificing style or comfort.',
      price: 925000,
      propertyType: 'house',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.smartHome),
      address: '123 Green Drive',
      city: 'Seattle',
      state: 'Washington',
      zipCode: '98101',
      country: 'USA',
      neighborhood: 'Capitol Hill',
      latitude: 47.6205,
      longitude: -122.3493,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      lotSize: 5000,
      yearBuilt: 2023,
      garage: 2,
      parkingSpots: 2,
      features: JSON.stringify([
        'Solar Panels',
        'Smart Home System',
        'EV Charging',
        'Energy Star Appliances',
        'Triple-pane Windows',
      ]),
      amenities: JSON.stringify([
        'Rooftop Garden',
        'Rainwater Collection',
        'Green Roof',
      ]),
      agentId: 'agent-005',
      views: 987,
      favorites: 72,
    },
    // --- prop-015 ---
    {
      id: 'prop-015',
      title: 'Executive Office Space Downtown',
      slug: 'executive-office-space-downtown',
      description:
        'Premium office space in the heart of the financial district. Features modern finishes, stunning views, and full-service building amenities including conference facilities.',
      price: 4500,
      priceSuffix: '/month',
      propertyType: 'office',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.office),
      address: '500 Financial Center, Suite 800',
      city: 'San Francisco',
      state: 'California',
      zipCode: '94102',
      country: 'USA',
      neighborhood: 'Financial District',
      latitude: 37.7949,
      longitude: -122.4034,
      bedrooms: 0,
      bathrooms: 2,
      sqft: 1500,
      yearBuilt: 2018,
      features: JSON.stringify([
        'Panoramic Views',
        'Modern Finishes',
        'Open Layout',
        'Private Offices',
        'Conference Room',
      ]),
      amenities: JSON.stringify([
        '24/7 Access',
        'Concierge',
        'Fitness Center',
        'Parking Available',
      ]),
      agentId: 'agent-006',
      agencyId: 'agency-003',
      views: 432,
      favorites: 28,
    },
    // --- prop-016 ---
    {
      id: 'prop-016',
      title: 'Lakefront Cabin on Acreage',
      slug: 'lakefront-cabin-acreage',
      description:
        'A rustic yet refined cabin on 5 private acres with 300 feet of lakefront. Perfect for a weekend retreat or year-round living, featuring a wrap-around deck and stunning views.',
      price: 485000,
      propertyType: 'house',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.cabin),
      address: '123 Lake Road',
      city: 'Boise',
      state: 'Idaho',
      zipCode: '83702',
      country: 'USA',
      neighborhood: 'Lakefront',
      latitude: 43.615,
      longitude: -116.2023,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      lotSize: 217800,
      yearBuilt: 1995,
      garage: 1,
      parkingSpots: 4,
      features: JSON.stringify([
        'Lakefront',
        '5 Acres',
        'Wrap-around Deck',
        'Stone Fireplace',
        'Vaulted Ceilings',
      ]),
      amenities: JSON.stringify([
        'Private Dock',
        'Fire Pit',
        'Storage Shed',
      ]),
      agentId: 'agent-008',
      views: 1567,
      favorites: 98,
    },
    // --- prop-017 ---
    {
      id: 'prop-017',
      title: 'Urban Micro-Apartment Near Transit',
      slug: 'urban-micro-apartment-transit',
      description:
        'An efficiently designed micro-apartment perfect for minimalists. Smart storage solutions and high-end finishes maximize every square foot in this transit-oriented development.',
      price: 1450,
      priceSuffix: '/month',
      propertyType: 'apartment',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.microApt),
      address: '88 Transit Way, Unit 312',
      city: 'Washington',
      state: 'DC',
      zipCode: '20001',
      country: 'USA',
      neighborhood: 'Navy Yard',
      latitude: 38.8792,
      longitude: -76.9948,
      bedrooms: 0,
      bathrooms: 1,
      sqft: 350,
      yearBuilt: 2022,
      features: JSON.stringify([
        'Smart Storage',
        'Murphy Bed',
        'Full Kitchen',
        'In-unit Laundry',
      ]),
      amenities: JSON.stringify([
        'Rooftop Lounge',
        'Bike Storage',
        'Package Lockers',
        'Direct Metro Access',
      ]),
      agentId: 'agent-007',
      agencyId: 'agency-004',
      views: 321,
      favorites: 23,
    },
    // --- prop-018 ---
    {
      id: 'prop-018',
      title: 'Stunning Colonial Revival Estate',
      slug: 'stunning-colonial-revival-estate',
      description:
        "A magnificent Colonial Revival estate set on 2 acres of manicured grounds. Features include a grand foyer, formal living and dining rooms, library, and updated chef's kitchen.",
      price: 1850000,
      propertyType: 'house',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.colonial),
      address: '100 Estate Drive',
      city: 'Atlanta',
      state: 'Georgia',
      zipCode: '30305',
      country: 'USA',
      neighborhood: 'Buckhead',
      latitude: 33.8404,
      longitude: -84.3797,
      bedrooms: 5,
      bathrooms: 4,
      halfBaths: 2,
      sqft: 5200,
      lotSize: 87120,
      yearBuilt: 1935,
      garage: 2,
      parkingSpots: 6,
      floors: 2,
      features: JSON.stringify([
        'Grand Foyer',
        'Library',
        "Butler's Pantry",
        'Multiple Fireplaces',
        'Hardwood Floors',
        'Crown Moldings',
      ]),
      amenities: JSON.stringify([
        'Pool',
        'Tennis Court',
        'Guest House',
        'Three-car Garage',
      ]),
      agentId: 'agent-002',
      agencyId: 'agency-001',
      views: 2345,
      favorites: 178,
    },
    // --- prop-019 ---
    {
      id: 'prop-019',
      title: "Artist's Loft with Natural Light",
      slug: 'artists-loft-natural-light',
      description:
        'A light-filled loft designed for creative professionals. Features include north-facing skylights, an open studio space, and industrial finishes throughout.',
      price: 2850,
      priceSuffix: '/month',
      propertyType: 'apartment',
      status: 'for-rent',
      featured: false,
      images: JSON.stringify(propertyImages.artistLoft),
      address: '55 Art Way, Loft B',
      city: 'Brooklyn',
      state: 'New York',
      zipCode: '11222',
      country: 'USA',
      neighborhood: 'Greenpoint',
      latitude: 40.7282,
      longitude: -73.9547,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1600,
      yearBuilt: 2014,
      features: JSON.stringify([
        'North-facing Skylights',
        'Open Studio Space',
        'High Ceilings',
        'Exposed Brick',
        'Freight Elevator',
      ]),
      amenities: JSON.stringify(['Gallery Space', 'Community Events']),
      agentId: 'agent-003',
      views: 456,
      favorites: 34,
    },
    // --- prop-020 ---
    {
      id: 'prop-020',
      title: 'Tuscan-Inspired Villa with Vineyard Views',
      slug: 'tuscan-inspired-villa-vineyard-views',
      description:
        'An authentic Tuscan-inspired villa overlooking rolling vineyards. Features include hand-laid stone, imported Italian tiles, and an outdoor entertaining area with pizza oven.',
      price: 3750000,
      propertyType: 'villa',
      status: 'for-sale',
      featured: true,
      images: JSON.stringify(propertyImages.tuscanVilla),
      address: '1 Vineyard Lane',
      city: 'Napa',
      state: 'California',
      zipCode: '94558',
      country: 'USA',
      neighborhood: 'Silverado Trail',
      latitude: 38.2975,
      longitude: -122.2869,
      bedrooms: 4,
      bathrooms: 4,
      halfBaths: 1,
      sqft: 5800,
      lotSize: 45000,
      yearBuilt: 2010,
      garage: 3,
      parkingSpots: 6,
      floors: 2,
      features: JSON.stringify([
        'Vineyard Views',
        'Hand-laid Stone',
        'Italian Tiles',
        'Wine Cellar',
        'Outdoor Pizza Oven',
        'Fireplace',
      ]),
      amenities: JSON.stringify([
        'Pool',
        'Guest House',
        'Olive Trees',
        'Private Well',
      ]),
      agentId: 'agent-001',
      agencyId: 'agency-001',
      views: 2876,
      favorites: 198,
    },
    // --- prop-021 ---
    {
      id: 'prop-021',
      title: 'Modern Townhome with Rooftop Deck',
      slug: 'modern-townhome-rooftop-deck',
      description:
        'A contemporary townhome featuring a private rooftop deck with city views, an open floor plan, and high-end finishes throughout. Walking distance to shops and restaurants.',
      price: 725000,
      propertyType: 'townhouse',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.townhome),
      address: '456 Urban Row',
      city: 'Nashville',
      state: 'Tennessee',
      zipCode: '37201',
      country: 'USA',
      neighborhood: 'The Gulch',
      latitude: 36.1586,
      longitude: -86.7824,
      bedrooms: 3,
      bathrooms: 2,
      halfBaths: 1,
      sqft: 1950,
      lotSize: 1500,
      yearBuilt: 2021,
      garage: 2,
      parkingSpots: 2,
      floors: 3,
      features: JSON.stringify([
        'Rooftop Deck',
        'City Views',
        'Open Floor Plan',
        "Chef's Kitchen",
        'Hardwood Floors',
      ]),
      amenities: JSON.stringify([
        'Walking Distance to Dining',
        'Low HOA',
      ]),
      agentId: 'agent-008',
      views: 867,
      favorites: 61,
    },
    // --- prop-022 ---
    {
      id: 'prop-022',
      title: 'Beach Cottage Steps from the Ocean',
      slug: 'beach-cottage-steps-ocean',
      description:
        'A charming beach cottage just steps from the sand. Features include a wrap-around porch, outdoor shower, and relaxed coastal style throughout.',
      price: 895000,
      propertyType: 'house',
      status: 'for-sale',
      featured: false,
      images: JSON.stringify(propertyImages.beachCottage),
      address: '23 Beach Walk',
      city: 'Charleston',
      state: 'South Carolina',
      zipCode: '29401',
      country: 'USA',
      neighborhood: 'Folly Beach',
      latitude: 32.7765,
      longitude: -79.9311,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      lotSize: 4500,
      yearBuilt: 1985,
      parkingSpots: 2,
      features: JSON.stringify([
        'Steps to Beach',
        'Wrap-around Porch',
        'Outdoor Shower',
        'Vaulted Ceilings',
        'Beach Views',
      ]),
      amenities: JSON.stringify(['Bike Storage', 'Outdoor Shower']),
      agentId: 'agent-004',
      agencyId: 'agency-002',
      views: 1023,
      favorites: 82,
    },
  ];

  const properties = await Promise.all(
    propertiesData.map((p) =>
      prisma.property.upsert({
        where: { slug: p.slug },
        update: {},
        create: p,
      }),
    ),
  );
  console.log(`   ✅ Created ${properties.length} properties\n`);

  // ========================================================================
  // 7. TESTIMONIALS (8)
  // ========================================================================
  console.log('💬 Seeding Testimonials (8)...');
  const testimonials = await Promise.all([
    prisma.testimonial.upsert({
      where: { id: 'testimonial-001' },
      update: {},
      create: {
        id: 'testimonial-001',
        name: 'Jennifer & Mark Williams',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        role: 'Homeowners',
        company: 'Miami, Florida',
        content:
          "Sarah Johnson made our dream of owning a waterfront property a reality. Her knowledge of the Miami market is unparalleled, and she went above and beyond to find us the perfect home. We couldn't be happier with our new villa!",
        rating: 5,
        propertyType: 'Villa',
        featured: true,
        createdAt: new Date('2024-01-15'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-002' },
      update: {},
      create: {
        id: 'testimonial-002',
        name: 'David Chen',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        role: 'Investor',
        company: 'New York, New York',
        content:
          "Michael helped me build an impressive investment portfolio in Manhattan. His analytical approach and deep understanding of the condo market have been invaluable. I've purchased three properties through him and couldn't recommend him more highly.",
        rating: 5,
        propertyType: 'Condo',
        featured: true,
        createdAt: new Date('2024-02-01'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-003' },
      update: {},
      create: {
        id: 'testimonial-003',
        name: 'Sarah Thompson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        role: 'First-time Buyer',
        company: 'Portland, Oregon',
        content:
          'Emily was patient and knowledgeable throughout our entire home-buying journey. She helped us find a beautiful Craftsman home that we absolutely love. Her expertise in historic properties was exactly what we needed.',
        rating: 5,
        propertyType: 'House',
        featured: true,
        createdAt: new Date('2024-01-20'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-004' },
      update: {},
      create: {
        id: 'testimonial-004',
        name: 'Michael Rodriguez',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        role: 'Business Owner',
        company: 'Los Angeles, California',
        content:
          'David Park found me the perfect live-work loft in the Arts District. He understood exactly what I needed for my business and personal life. The transaction was smooth, and he was always available to answer my questions.',
        rating: 4,
        propertyType: 'Loft',
        featured: false,
        createdAt: new Date('2024-02-10'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-005' },
      update: {},
      create: {
        id: 'testimonial-005',
        name: 'Lisa & John Anderson',
        avatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
        role: 'Relocating Family',
        company: 'Boston, Massachusetts',
        content:
          'James made our cross-country relocation seamless. He helped us understand the school districts and neighborhoods, and found us a wonderful family home in a great community. His local knowledge was invaluable.',
        rating: 5,
        propertyType: 'House',
        featured: true,
        createdAt: new Date('2024-01-28'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-006' },
      update: {},
      create: {
        id: 'testimonial-006',
        name: 'Robert Kim',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        role: 'Tech Executive',
        company: 'San Francisco, California',
        content:
          "Amanda helped us find an amazing eco-friendly home in Seattle. Her knowledge of sustainable features and green building was exactly what we were looking for. She's incredibly professional and responsive.",
        rating: 5,
        propertyType: 'House',
        featured: false,
        createdAt: new Date('2024-02-05'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-007' },
      update: {},
      create: {
        id: 'testimonial-007',
        name: 'Patricia Sullivan',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        role: 'Retired',
        company: 'Denver, Colorado',
        content:
          "The team at Homez made selling our family home of 35 years an emotional yet positive experience. They were patient, understanding, and got us a great price. We're now happily settled in our new mountain-view condo.",
        rating: 5,
        propertyType: 'Condo',
        featured: true,
        createdAt: new Date('2024-01-05'),
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-008' },
      update: {},
      create: {
        id: 'testimonial-008',
        name: 'Thomas & Maria Garcia',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        role: 'Growing Family',
        company: 'Austin, Texas',
        content:
          'Robert helped us navigate the competitive Austin market and found us a beautiful home with plenty of space for our growing family. His knowledge of the area and construction background gave us confidence in our purchase.',
        rating: 5,
        propertyType: 'House',
        featured: false,
        createdAt: new Date('2024-02-15'),
      },
    }),
  ]);
  console.log(`   ✅ Created ${testimonials.length} testimonials\n`);

  // ========================================================================
  // 8. BLOG POSTS (6)
  // ========================================================================
  console.log('📝 Seeding Blog Posts (6)...');
  const blogPosts = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: '10-essential-tips-first-time-home-buyers' },
      update: {},
      create: {
        id: 'blog-001',
        title: '10 Essential Tips for First-Time Home Buyers',
        slug: '10-essential-tips-first-time-home-buyers',
        excerpt:
          'Navigate the home buying process with confidence using these essential tips for first-time buyers. From getting pre-approved to closing day, we cover everything you need to know.',
        content: `Buying your first home is one of the most significant financial decisions you'll ever make. It's an exciting journey, but it can also be overwhelming if you're not prepared.

## 1. Get Your Finances in Order

Before you start house hunting, take a close look at your financial situation. Check your credit score, save for a down payment, and get pre-approved for a mortgage. This will give you a clear picture of what you can afford.

## 2. Determine Your Budget

Don't just rely on what lenders will approve. Consider your monthly expenses, future plans, and emergency fund. A good rule of thumb is to keep your housing costs at or below 28% of your gross monthly income.

## 3. Research Neighborhoods

Location is everything in real estate. Research school districts, commute times, local amenities, and future development plans. Visit neighborhoods at different times of day to get a true feel for the area.

## 4. Hire a Qualified Real Estate Agent

A good agent can save you time, money, and stress. Look for someone with local expertise, good reviews, and who you feel comfortable communicating with.

## 5. Don't Skip the Home Inspection

Never waive the inspection contingency. A professional inspector can uncover potential issues that could cost thousands in repairs down the line.

## 6. Consider Resale Value

Even if you plan to stay in your home for years, life can be unpredictable. Consider how easy it will be to sell the property in the future.

## 7. Understand the Total Cost of Ownership

Your mortgage is just the beginning. Factor in property taxes, insurance, maintenance, and potential HOA fees when determining affordability.

## 8. Don't Make Major Purchases Before Closing

Avoid buying furniture, cars, or making other large purchases before closing. This can affect your debt-to-income ratio and potentially derail your loan approval.

## 9. Be Prepared for Closing Costs

Closing costs typically range from 2% to 5% of the home price. Budget for these expenses upfront so there are no surprises.

## 10. Take Your Time

Don't rush into a decision. The right home is worth waiting for. Trust the process and don't let emotions override your judgment.`,
        coverImage:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
        authorId: 'agent-001',
        authorName: 'Sarah Johnson',
        authorAvatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
        category: 'Buying Tips',
        tags: JSON.stringify([
          'first-time buyers',
          'home buying',
          'real estate tips',
          'mortgage',
        ]),
        views: 15420,
        readTime: 8,
        publishedAt: new Date('2024-01-15T10:00:00Z'),
        status: 'published',
        featured: true,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'how-to-stage-home-quick-sale' },
      update: {},
      create: {
        id: 'blog-002',
        title: 'How to Stage Your Home for a Quick Sale',
        slug: 'how-to-stage-home-quick-sale',
        excerpt:
          'Learn the secrets of professional home staging that can help sell your property faster and for more money. From decluttering to curb appeal, we cover all the essentials.',
        content: `Home staging is one of the most effective ways to make your property stand out in a competitive market. Studies show that staged homes sell faster and often for higher prices than unstaged properties.

## The Power of First Impressions

When potential buyers walk through your door, they're not just looking at a house—they're imagining their future home. Effective staging helps them see that vision.

## Start with Decluttering

Remove personal items, excess furniture, and anything that makes rooms feel cramped. The goal is to create a clean, spacious environment where buyers can envision their own belongings.

## Deep Clean Everything

A spotless home signals that the property has been well-maintained. Pay special attention to kitchens, bathrooms, and windows. Consider hiring professional cleaners for the best results.

## Neutralize Your Color Palette

Bold colors can be polarizing. Repaint walls in neutral tones like beige, gray, or white to appeal to a broader range of buyers.

## Highlight Key Features

Draw attention to your home's best features. If you have beautiful hardwood floors, remove area rugs. If there's a stunning view, make sure window treatments don't obstruct it.

## Create Inviting Spaces

Stage rooms for their intended purpose. A spare room used for storage should be transformed into a bedroom, office, or nursery to help buyers see its potential.

## Don't Forget Curb Appeal

The exterior is the first thing buyers see. Maintain your lawn, add fresh mulch, paint the front door, and ensure walkways are clean and welcoming.

## Lighting Matters

Good lighting makes spaces feel larger and more inviting. Open curtains, clean windows, and add lamps to dark corners. Replace outdated fixtures if needed.

## Add Finishing Touches

Fresh flowers, throw pillows, and area rugs can add warmth and style without major investment. Keep it simple and elegant.

## Consider Professional Help

Professional stagers have expertise in maximizing a home's appeal. If your budget allows, their services can be a worthwhile investment.`,
        coverImage:
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
        authorId: 'agent-002',
        authorName: 'Michael Chen',
        authorAvatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        category: 'Selling Tips',
        tags: JSON.stringify([
          'home staging',
          'selling tips',
          'home improvement',
          'interior design',
        ]),
        views: 12350,
        readTime: 7,
        publishedAt: new Date('2024-01-12T10:00:00Z'),
        status: 'published',
        featured: true,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'understanding-mortgage-rates-2024' },
      update: {},
      create: {
        id: 'blog-003',
        title: 'Understanding Mortgage Rates in 2024',
        slug: 'understanding-mortgage-rates-2024',
        excerpt:
          'A comprehensive guide to current mortgage rates and what they mean for buyers and homeowners. Learn about rate trends, refinancing, and how to get the best deal.',
        content: `Mortgage rates play a crucial role in determining what you can afford when buying a home. Understanding how they work and what drives them can help you make informed decisions.

## What Affects Mortgage Rates?

Mortgage rates are influenced by various factors including the Federal Reserve's policies, inflation, economic growth, and the overall bond market. When the economy is strong, rates tend to rise; when it's weak, rates often fall.

## Fixed vs. Adjustable Rate Mortgages

Fixed-rate mortgages offer stability with consistent payments throughout the loan term. Adjustable-rate mortgages (ARMs) start with lower rates that can change over time. Choosing between them depends on your plans and risk tolerance.

## The Impact of Your Credit Score

Your credit score significantly affects the rate you'll receive. Higher scores typically mean lower rates. Before applying for a mortgage, check your credit report and address any issues.

## Down Payment Considerations

A larger down payment can help you secure a better rate. It also reduces your loan amount and eliminates the need for private mortgage insurance (PMI) if you put down 20% or more.

## Rate Lock Strategies

When you find a rate you like, consider locking it in. Rate locks protect you from market fluctuations during the closing process. Just be aware that longer lock periods may come with slightly higher rates.

## Refinancing Opportunities

If rates drop significantly below your current rate, refinancing could save you money. Consider the closing costs and how long you plan to stay in your home when evaluating this option.

## Shopping for the Best Rate

Don't settle for the first offer. Get quotes from multiple lenders and compare not just rates but also fees and terms. Even small differences can add up to significant savings over the life of your loan.

## Points and Credits

You can often lower your rate by paying discount points upfront. Conversely, you can accept a higher rate in exchange for lender credits toward closing costs. Evaluate the break-even point to determine if points make sense for your situation.

## Current Market Outlook

While rates fluctuate, understanding general trends can help with timing decisions. Consult with mortgage professionals for the most current information and personalized advice.`,
        coverImage:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
        authorId: 'agent-003',
        authorName: 'Emily Rodriguez',
        authorAvatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
        category: 'Finance',
        tags: JSON.stringify([
          'mortgage rates',
          'finance',
          'home buying',
          'refinancing',
        ]),
        views: 9870,
        readTime: 6,
        publishedAt: new Date('2024-01-10T10:00:00Z'),
        status: 'published',
        featured: true,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'real-estate-investment-strategies-beginners' },
      update: {},
      create: {
        id: 'blog-004',
        title: 'Real Estate Investment Strategies for Beginners',
        slug: 'real-estate-investment-strategies-beginners',
        excerpt:
          'Discover the best strategies for getting started in real estate investing. From rental properties to REITs, learn how to build wealth through real estate.',
        content: `Real estate investing has long been a pathway to building wealth. For beginners, understanding the various strategies and choosing the right approach is essential for success.

## Rental Properties

Owning rental properties is one of the most traditional forms of real estate investing. You purchase a property and rent it out to tenants, generating monthly income while potentially building equity.

### Pros:
- Regular monthly income
- Property appreciation over time
- Tax benefits including depreciation
- Leverage through mortgage financing

### Cons:
- Property management responsibilities
- Vacancy risks
- Maintenance costs
- Less liquidity than other investments

## House Hacking

House hacking involves buying a multi-unit property, living in one unit, and renting out the others. This strategy can significantly reduce or eliminate your housing costs while building equity.

## REITs (Real Estate Investment Trusts)

REITs allow you to invest in real estate without owning physical property. They're companies that own and manage income-producing real estate, and they're required to distribute most of their taxable income to shareholders.

## Fix and Flip

This strategy involves purchasing undervalued properties, renovating them, and selling for a profit. It requires construction knowledge, good contractor relationships, and understanding of local market values.

## Real Estate Wholesaling

Wholesalers find discounted properties and assign the contracts to other buyers for a fee. This strategy requires little capital but demands strong networking and negotiation skills.

## Getting Started

Before investing, educate yourself thoroughly. Read books, attend seminars, and connect with experienced investors. Start small and scale up as you gain experience and confidence.

## Due Diligence

Never invest without proper research. Analyze neighborhoods, market trends, property values, and potential returns. Run the numbers carefully and always have a contingency plan.

## Building Your Team

Successful real estate investors build networks of professionals including agents, lenders, contractors, property managers, and attorneys. These relationships are invaluable throughout your investing journey.`,
        coverImage:
          'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop',
        authorId: 'agent-004',
        authorName: 'David Park',
        authorAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        category: 'Investment',
        tags: JSON.stringify([
          'real estate investing',
          'investment properties',
          'rental income',
          'wealth building',
        ]),
        views: 8450,
        readTime: 9,
        publishedAt: new Date('2024-01-08T10:00:00Z'),
        status: 'published',
        featured: false,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'how-to-choose-right-neighborhood' },
      update: {},
      create: {
        id: 'blog-005',
        title: 'How to Choose the Right Neighborhood',
        slug: 'how-to-choose-right-neighborhood',
        excerpt:
          'Finding the perfect neighborhood is just as important as finding the right home. Learn what factors to consider when evaluating potential areas to live.',
        content: `They say the three most important things in real estate are location, location, location. But what makes a location right for you? Here's what to consider when evaluating neighborhoods.

## School Districts

Even if you don't have children, school district quality affects property values. Good schools typically mean higher resale value and more stable neighborhoods. Research ratings and test scores for local schools.

## Commute and Transportation

Consider your daily commute. How long will it take to get to work? Is public transportation available? Easy access to highways can be a significant advantage.

## Safety and Crime Rates

Research crime statistics for any neighborhood you're considering. Many cities provide online crime maps, and websites like NeighborhoodScout offer detailed safety data.

## Local Amenities

Think about what's important to your lifestyle. Do you need nearby grocery stores, restaurants, parks, or gyms? A walkable neighborhood with convenient amenities can significantly improve your quality of life.

## Future Development

Research planned developments in the area. New schools, shopping centers, or public transit can increase property values. However, unwanted commercial development could impact your enjoyment of the area.

## Property Values and Trends

Look at historical property values in the neighborhood. Are values increasing, stable, or declining? Understanding trends can help you make a sound investment.

## Neighborhood Character

Visit the neighborhood at different times of day and week. Is it quiet or bustling? Are homes well-maintained? Do neighbors interact? Get a feel for the community's personality.

## HOA Considerations

If the neighborhood has a homeowners association, understand the rules, fees, and what they cover. Some HOAs provide valuable services, while others may have restrictive regulations.

## Walkability Score

Walkable neighborhoods are increasingly desirable. Check the Walk Score to see how easy it is to accomplish daily errands on foot.

## Talk to Residents

Nothing beats firsthand experience. If possible, talk to current residents about their experiences living in the neighborhood. They can provide insights you won't find online.`,
        coverImage:
          'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
        authorId: 'agent-006',
        authorName: 'James Wilson',
        authorAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        category: 'Buying Tips',
        tags: JSON.stringify([
          'neighborhoods',
          'location',
          'home buying',
          'community',
        ]),
        views: 7630,
        readTime: 7,
        publishedAt: new Date('2024-01-05T10:00:00Z'),
        status: 'published',
        featured: false,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'eco-friendly-home-features-add-value' },
      update: {},
      create: {
        id: 'blog-006',
        title: 'Eco-Friendly Home Features That Add Value',
        slug: 'eco-friendly-home-features-add-value',
        excerpt:
          'Sustainable home features are increasingly popular with buyers. Learn which eco-friendly upgrades can increase your home value while reducing your environmental impact.',
        content: `As environmental consciousness grows, eco-friendly home features are becoming increasingly valuable. Not only do they reduce environmental impact, but they can also lower utility costs and attract environmentally conscious buyers.

## Solar Panels

Solar panels are one of the most valuable eco-friendly upgrades. They can significantly reduce or eliminate electricity bills and may qualify for tax incentives. Many buyers are willing to pay a premium for homes with existing solar installations.

## Energy-Efficient Windows

Double or triple-pane windows with low-E coatings reduce heat transfer, keeping homes cooler in summer and warmer in winter. They also reduce outside noise and can qualify for energy efficiency rebates.

## Smart Thermostats

Smart thermostats learn your habits and optimize heating and cooling accordingly. They're relatively inexpensive to install and can reduce energy costs by 10-20% annually.

## LED Lighting

LED bulbs use 75% less energy than incandescent bulbs and last 25 times longer. Consider installing LED fixtures throughout your home for maximum efficiency.

## Energy-Efficient Appliances

Energy Star-rated appliances use significantly less energy than standard models. When upgrading appliances, look for the Energy Star label to maximize efficiency.

## Improved Insulation

Proper insulation in walls, attics, and crawl spaces prevents heat loss and gain. This is one of the most cost-effective ways to improve energy efficiency.

## Tankless Water Heaters

Tankless water heaters heat water on demand rather than storing it. They're more energy-efficient and provide endless hot water, making them attractive to buyers.

## Low-Flow Fixtures

Low-flow toilets, showerheads, and faucets reduce water consumption without sacrificing performance. They're inexpensive to install and can significantly reduce water bills.

## Native Landscaping

Using native plants in your landscaping reduces water consumption and maintenance needs. Native plants are adapted to local conditions and support local ecosystems.

## Green Certifications

Homes with green certifications like LEED or Energy Star may sell faster and for more money. These certifications provide third-party verification of a home's efficiency features.

## ROI Considerations

While some eco-friendly upgrades have higher upfront costs, many pay for themselves over time through reduced utility bills. Consider both immediate and long-term returns when planning improvements.`,
        coverImage:
          'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop',
        authorId: 'agent-005',
        authorName: 'Amanda Thompson',
        authorAvatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        category: 'Home Improvement',
        tags: JSON.stringify([
          'eco-friendly',
          'green home',
          'energy efficiency',
          'home improvement',
        ]),
        views: 6890,
        readTime: 6,
        publishedAt: new Date('2024-01-03T10:00:00Z'),
        status: 'published',
        featured: false,
      },
    }),
  ]);
  console.log(`   ✅ Created ${blogPosts.length} blog posts\n`);

  // ========================================================================
  // 9. PACKAGES (3 pricing tiers)
  // ========================================================================
  console.log('💎 Seeding Packages (3)...');
  const packages = await Promise.all([
    prisma.package.upsert({
      where: { slug: 'starter' },
      update: {},
      create: {
        id: 'pkg-001',
        name: 'Starter',
        slug: 'starter',
        description:
          'Perfect for independent agents just starting out. Get essential tools to list and manage your properties.',
        price: 29,
        billingPeriod: 'monthly',
        features: JSON.stringify([
          'Up to 5 active listings',
          'Basic property analytics',
          'Standard listing templates',
          'Email support',
          'Basic agent profile page',
        ]),
        limits: JSON.stringify({
          listings: 5,
          featured: false,
          analytics: 'basic',
          support: 'email',
        }),
        popular: false,
      },
    }),
    prisma.package.upsert({
      where: { slug: 'professional' },
      update: {},
      create: {
        id: 'pkg-002',
        name: 'Professional',
        slug: 'professional',
        description:
          'The most popular plan for growing agents. Features enhanced visibility and advanced tools to scale your business.',
        price: 79,
        billingPeriod: 'monthly',
        features: JSON.stringify([
          'Up to 25 active listings',
          'Featured listing placement',
          'Advanced analytics dashboard',
          'Priority email & chat support',
          'Custom agent profile with branding',
          'Lead capture forms',
          'Social media integration',
        ]),
        limits: JSON.stringify({
          listings: 25,
          featured: true,
          analytics: 'advanced',
          support: 'priority',
        }),
        popular: true,
      },
    }),
    prisma.package.upsert({
      where: { slug: 'enterprise' },
      update: {},
      create: {
        id: 'pkg-003',
        name: 'Enterprise',
        slug: 'enterprise',
        description:
          'Unlimited everything for top-performing agencies and agents. Get premium features and dedicated support.',
        price: 199,
        billingPeriod: 'monthly',
        features: JSON.stringify([
          'Unlimited active listings',
          'Featured listing placement',
          'Enterprise analytics & reporting',
          'Dedicated account manager',
          'Custom agent profile & branding',
          'Lead capture & CRM integration',
          'Social media & marketing tools',
          'API access',
          'Priority support (24/7)',
          'Team collaboration tools',
        ]),
        limits: JSON.stringify({
          listings: -1,
          featured: true,
          analytics: 'enterprise',
          support: 'dedicated',
        }),
        popular: false,
      },
    }),
  ]);
  console.log(`   ✅ Created ${packages.length} packages\n`);

  // ========================================================================
  // 10. REVIEWS (10)
  // ========================================================================
  console.log('⭐ Seeding Reviews (10)...');
  const reviews = await Promise.all([
    prisma.review.upsert({
      where: { id: 'review-001' },
      update: {},
      create: {
        id: 'review-001',
        propertyId: 'prop-001',
        agencyId: 'agency-001',
        userId: 'user-001',
        userName: 'Jennifer Williams',
        userAvatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        title: 'Outstanding experience buying our dream villa',
        content:
          'Sarah went above and beyond to help us find our perfect waterfront villa. Her knowledge of the Miami luxury market is exceptional. Every step of the process was handled with professionalism and care.',
        rating: 5,
        response: JSON.stringify({
          content:
            'Thank you Jennifer! It was a pleasure helping you find your dream home. Enjoy the ocean views!',
          respondedAt: '2024-02-01T10:00:00Z',
          respondedBy: 'Sarah Johnson',
        }),
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-002' },
      update: {},
      create: {
        id: 'review-002',
        propertyId: 'prop-002',
        agencyId: 'agency-001',
        userId: 'user-002',
        userName: 'David Chen',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        title: 'Best real estate agent in Manhattan',
        content:
          "Michael's analytical approach to real estate is unmatched. He helped me evaluate multiple penthouse properties and found me the perfect investment. His knowledge of the NYC condo market is exceptional.",
        rating: 5,
        response: JSON.stringify({
          content:
            'David, it was great working with you. Your investment instincts are sharp, and I look forward to helping you with your next acquisition!',
          respondedAt: '2024-02-15T14:00:00Z',
          respondedBy: 'Michael Chen',
        }),
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-003' },
      update: {},
      create: {
        id: 'review-003',
        propertyId: 'prop-003',
        userId: 'user-003',
        userName: 'Lisa Anderson',
        userAvatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
        title: 'Found us the perfect craftsman home',
        content:
          'Emily understood exactly what we were looking for in a historic Portland home. Her patience and expertise in craftsman-style properties made the entire process smooth and enjoyable.',
        rating: 5,
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-004' },
      update: {},
      create: {
        id: 'review-004',
        propertyId: 'prop-004',
        agencyId: 'agency-002',
        userId: 'user-001',
        userName: 'Jennifer Williams',
        userAvatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        title: 'Great loft rental experience',
        content:
          'David found me the perfect Arts District loft for my live-work needs. His understanding of the creative community in LA was incredibly helpful. Highly recommend for anyone looking for unique spaces.',
        rating: 4,
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-005' },
      update: {},
      create: {
        id: 'review-005',
        propertyId: 'prop-009',
        agencyId: 'agency-004',
        userId: 'user-002',
        userName: 'David Chen',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        title: 'Brooklyn brownstone expert',
        content:
          "Jessica's knowledge of Brooklyn brownstones is truly unmatched. She found us a stunning historic property and guided us through the renovation process with invaluable advice.",
        rating: 5,
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-006' },
      update: {},
      create: {
        id: 'review-006',
        propertyId: 'prop-014',
        userId: 'user-003',
        userName: 'Lisa Anderson',
        userAvatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
        title: 'Eco-friendly home specialist',
        content:
          'Amanda is the go-to agent if you care about sustainability. She found us a beautiful solar-powered smart home in Seattle that exceeded all our expectations. Her network of green building professionals was an added bonus.',
        rating: 5,
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-007' },
      update: {},
      create: {
        id: 'review-007',
        propertyId: 'prop-007',
        agencyId: 'agency-003',
        userId: 'user-001',
        userName: 'Jennifer Williams',
        userAvatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        title: 'Made our family relocation seamless',
        content:
          "James Wilson is the best family home agent in Boston. He helped us understand every neighborhood, school district, and commute option. We couldn't have navigated the cross-country move without him.",
        rating: 5,
        response: JSON.stringify({
          content:
            'Thank you for the kind words, Jennifer! Your family is a joy to work with. Welcome to Boston!',
          respondedAt: '2024-03-01T09:00:00Z',
          respondedBy: 'James Wilson',
        }),
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-008' },
      update: {},
      create: {
        id: 'review-008',
        propertyId: 'prop-011',
        userId: 'user-002',
        userName: 'David Chen',
        userAvatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
        title: 'Austin market expert',
        content:
          "Robert's construction background gives him a unique edge. He helped us understand the structural aspects of every property we viewed in Austin. We ended up with a beautiful family home in Tarrytown.",
        rating: 5,
        status: 'approved',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-009' },
      update: {},
      create: {
        id: 'review-009',
        propertyId: 'prop-018',
        agencyId: 'agency-001',
        userId: 'user-003',
        userName: 'Lisa Anderson',
        userAvatar:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
        title: 'Incredible colonial estate',
        content:
          'Michael Chen found us the most stunning Colonial Revival estate in Buckhead. The property has exceeded our wildest dreams. His negotiation skills saved us over $100K on the final price.',
        rating: 5,
        status: 'pending',
      },
    }),
    prisma.review.upsert({
      where: { id: 'review-010' },
      update: {},
      create: {
        id: 'review-010',
        agencyId: 'agency-002',
        userId: 'user-001',
        userName: 'Jennifer Williams',
        userAvatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        title: 'Coastal Properties Inc. is top-notch',
        content:
          'The entire team at Coastal Properties was professional and responsive throughout our beachfront condo search. They truly understand the Southern California coastal market.',
        rating: 4,
        status: 'approved',
      },
    }),
  ]);
  console.log(`   ✅ Created ${reviews.length} reviews\n`);

  // ========================================================================
  // 11. TOURS (8)
  // ========================================================================
  console.log('📅 Seeding Tours (8)...');
  const tours = await Promise.all([
    prisma.tour.upsert({
      where: { id: 'tour-001' },
      update: {},
      create: {
        id: 'tour-001',
        propertyId: 'prop-001',
        name: 'Mark Williams',
        email: 'mark.williams@email.com',
        phone: '+1 (305) 555-3001',
        date: new Date('2024-04-10'),
        time: '10:00 AM',
        timezone: 'America/New_York',
        tourType: 'in-person',
        message:
          'My wife and I would love to see this villa. We are very interested in the infinity pool and smart home features.',
        status: 'scheduled',
        agentId: 'agent-001',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-002' },
      update: {},
      create: {
        id: 'tour-002',
        propertyId: 'prop-002',
        name: 'Alexandra Reyes',
        email: 'alexandra.reyes@email.com',
        phone: '+1 (212) 555-3002',
        date: new Date('2024-04-12'),
        time: '2:00 PM',
        timezone: 'America/New_York',
        tourType: 'in-person',
        message: 'I would like to schedule a viewing of the penthouse. Please let me know if the time works.',
        status: 'confirmed',
        agentId: 'agent-002',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-003' },
      update: {},
      create: {
        id: 'tour-003',
        propertyId: 'prop-004',
        name: 'Jordan Mitchell',
        email: 'jordan.mitchell@email.com',
        phone: '+1 (310) 555-3003',
        date: new Date('2024-04-15'),
        time: '11:00 AM',
        timezone: 'America/Los_Angeles',
        tourType: 'virtual',
        message: 'Can we do a virtual tour? I am currently based in San Francisco.',
        status: 'scheduled',
        agentId: 'agent-004',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-004' },
      update: {},
      create: {
        id: 'tour-004',
        propertyId: 'prop-009',
        name: 'Rachel Kim',
        email: 'rachel.kim@email.com',
        phone: '+1 (718) 555-3004',
        date: new Date('2024-03-28'),
        time: '3:00 PM',
        timezone: 'America/New_York',
        tourType: 'in-person',
        message: 'Very interested in this brownstone. Can we see the garden and roof deck?',
        status: 'completed',
        agentId: 'agent-007',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-005' },
      update: {},
      create: {
        id: 'tour-005',
        propertyId: 'prop-013',
        name: 'Thomas Wright',
        email: 'thomas.wright@email.com',
        phone: '+1 (480) 555-3005',
        date: new Date('2024-04-18'),
        time: '9:00 AM',
        timezone: 'America/Phoenix',
        tourType: 'in-person',
        message: 'We are visiting Phoenix from out of town and would love to tour this Mediterranean villa.',
        status: 'scheduled',
        agentId: 'agent-001',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-006' },
      update: {},
      create: {
        id: 'tour-006',
        propertyId: 'prop-014',
        name: 'Maria Santos',
        email: 'maria.santos@email.com',
        phone: '+1 (206) 555-3006',
        date: new Date('2024-04-20'),
        time: '1:00 PM',
        timezone: 'America/Los_Angeles',
        tourType: 'video',
        message: 'Interested in the solar and smart home features. Could you do a video walkthrough?',
        status: 'scheduled',
        agentId: 'agent-005',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-007' },
      update: {},
      create: {
        id: 'tour-007',
        propertyId: 'prop-005',
        name: 'Daniel Brooks',
        email: 'daniel.brooks@email.com',
        phone: '+1 (530) 555-3007',
        date: new Date('2024-04-08'),
        time: '10:00 AM',
        timezone: 'America/Los_Angeles',
        tourType: 'in-person',
        message: 'We want to see the dock and lake access. Very interested in the boating amenities.',
        status: 'completed',
        agentId: 'agent-001',
      },
    }),
    prisma.tour.upsert({
      where: { id: 'tour-008' },
      update: {},
      create: {
        id: 'tour-008',
        propertyId: 'prop-020',
        name: 'Victoria Chang',
        email: 'victoria.chang@email.com',
        phone: '+1 (707) 555-3008',
        date: new Date('2024-04-22'),
        time: '11:00 AM',
        timezone: 'America/Los_Angeles',
        tourType: 'in-person',
        message:
          'This Tuscan villa looks absolutely stunning. We would love to see the vineyard views and wine cellar in person.',
        status: 'scheduled',
        agentId: 'agent-001',
      },
    }),
  ]);
  console.log(`   ✅ Created ${tours.length} tours\n`);

  // ========================================================================
  // 12. INQUIRIES (5)
  // ========================================================================
  console.log('✉️  Seeding Inquiries (5)...');
  const inquiries = await Promise.all([
    prisma.inquiry.upsert({
      where: { id: 'inquiry-001' },
      update: {},
      create: {
        id: 'inquiry-001',
        propertyId: 'prop-001',
        name: 'Mark Williams',
        email: 'mark.williams@email.com',
        phone: '+1 (305) 555-3001',
        message:
          'We are very interested in this luxury villa. Could you provide more details about the HOA fees and what is included? Also, is the wine cellar climate-controlled?',
        status: 'read',
        agentId: 'agent-001',
      },
    }),
    prisma.inquiry.upsert({
      where: { id: 'inquiry-002' },
      update: {},
      create: {
        id: 'inquiry-002',
        propertyId: 'prop-009',
        name: 'Rachel Kim',
        email: 'rachel.kim@email.com',
        phone: '+1 (718) 555-3004',
        message:
          'I love this brownstone! What is the total square footage including the basement? Are there any upcoming assessments planned for the building?',
        status: 'responded',
        agentId: 'agent-007',
      },
    }),
    prisma.inquiry.upsert({
      where: { id: 'inquiry-003' },
      update: {},
      create: {
        id: 'inquiry-003',
        propertyId: 'prop-010',
        name: 'Chris Johnson',
        email: 'chris.johnson@email.com',
        phone: '+1 (858) 555-3009',
        message:
          'Is this beachfront condo available for a short-term rental investment? What are the current rental rates in the building?',
        status: 'new',
        agentId: 'agent-004',
      },
    }),
    prisma.inquiry.upsert({
      where: { id: 'inquiry-004' },
      update: {},
      create: {
        id: 'inquiry-004',
        propertyId: 'prop-014',
        name: 'Maria Santos',
        email: 'maria.santos@email.com',
        phone: '+1 (206) 555-3006',
        message:
          "We're very interested in this smart home. Can you share more details about the solar panel system — what's the average monthly energy savings?",
        status: 'new',
        agentId: 'agent-005',
      },
    }),
    prisma.inquiry.upsert({
      where: { id: 'inquiry-005' },
      update: {},
      create: {
        id: 'inquiry-005',
        propertyId: 'prop-018',
        name: 'Daniel Brooks',
        email: 'daniel.brooks@email.com',
        phone: '+1 (404) 555-3010',
        message:
          'This Colonial estate is breathtaking. Can you provide a copy of the property survey and any recent inspection reports? Also, what are the annual property taxes?',
        status: 'read',
        agentId: 'agent-002',
      },
    }),
  ]);
  console.log(`   ✅ Created ${inquiries.length} inquiries\n`);

  // ========================================================================
  // Summary
  // ========================================================================
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  ✅ Seed completed successfully!');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`  Categories:    ${categories.length}`);
  console.log(`  Cities:        ${cities.length}`);
  console.log(`  Agencies:      ${agencies.length}`);
  console.log(`  Users:         ${users.length}`);
  console.log(`  AgentProfiles: ${agentProfiles.length}`);
  console.log(`  Properties:    ${properties.length}`);
  console.log(`  Testimonials:  ${testimonials.length}`);
  console.log(`  BlogPosts:     ${blogPosts.length}`);
  console.log(`  Packages:      ${packages.length}`);
  console.log(`  Reviews:       ${reviews.length}`);
  console.log(`  Tours:         ${tours.length}`);
  console.log(`  Inquiries:     ${inquiries.length}`);
  console.log('═══════════════════════════════════════════════════════════\n');
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------
main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
