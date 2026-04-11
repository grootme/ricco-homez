# Home v6 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v6
- **Page Title:** Home v6 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v6 is a comprehensive real estate landing page designed to showcase property listings, search functionality, and company services. The page serves as a primary entry point for potential buyers, renters, and sellers looking to engage with the real estate platform. It features a prominent hero section with search capabilities, property type categories, featured listings, city-based property browsing, testimonials, and a full-featured footer with contact information and navigation.

---

## Layout Structure

### Overall Layout Architecture

The page follows a vertical scrolling layout with distinct sections:

1. **Fixed Header/Navigation** - Persistent top navigation with logo, menu items, login button, and add property CTA
2. **Hero Section** - Full-width banner with search form and property type tabs
3. **Property Types Section** - Horizontal carousel of property categories
4. **Services Section** - Three-column layout showcasing buy/sell/rent services
5. **Featured Listings Section** - Property card carousel with horizontal navigation
6. **Cities Section** - Grid layout of city cards with property counts
7. **CTA Section** - Full-width banner with selling options information
8. **Popular Properties Section** - Tabbed property grid with For Rent/For Sale filters
9. **Testimonials Section** - Horizontal carousel of customer reviews
10. **Blog Section** - Three-column blog post preview
11. **Trust Badges Section** - Logo carousel of partner brands
12. **Help CTA Section** - Contact support card
13. **Footer** - Multi-column layout with contact info, newsletter, and navigation

---

## Data Content Structure

### 1. Header/Navigation Data

#### Logo
```typescript
interface HeaderLogo {
  src: string;
  alt: string;
  link: string; // Homepage
}
```

#### Navigation Menu Items
```typescript
interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: NavDropdownItem[];
}

interface NavDropdownItem {
  label: string;
  href: string;
}

// Main Navigation Structure
const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    hasDropdown: true
  },
  {
    label: "Listing",
    href: "/listing",
    hasDropdown: true,
    dropdownItems: [
      { label: "Grid Default", href: "/listing/grid-default" },
      { label: "Grid Full Width 3 Cols", href: "/listing/grid-full-width-3-cols" },
      { label: "Grid Full Width 4 Cols", href: "/listing/grid-full-width-4-cols" },
      { label: "Grid Full Width 2 Cols", href: "/listing/grid-full-width-2-cols" },
      { label: "Grid Full Width 1 Cols v1", href: "/listing/grid-full-width-1-cols-v1" },
      { label: "Grid Full Width 1 Cols v2", href: "/listing/grid-full-width-1-cols-v2" },
      { label: "Banner Search v1", href: "/listing/banner-search-v1" },
      { label: "Banner Search v2", href: "/listing/banner-search-v2" },
      // Map styles
      { label: "Header Map Style", href: "/listing/header-map-style" },
      { label: "Map V1", href: "/listing/map-v1" },
      { label: "Map V2", href: "/listing/map-v2" },
      { label: "Map V3", href: "/listing/map-v3" },
      { label: "Map V4", href: "/listing/map-v4" },
      // List styles
      { label: "List v1", href: "/listing/list-v1" },
      { label: "List All Style", href: "/listing/list-all-style" }
    ]
  },
  {
    label: "Property",
    href: "/property",
    hasDropdown: true
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: true
  },
  {
    label: "Pages",
    href: "/pages",
    hasDropdown: true
  }
];
```

#### Header Actions
```typescript
interface HeaderActions {
  loginButton: {
    label: string;
    icon: string;
    href: string;
  };
  addPropertyButton: {
    label: string;
    icon: string;
    href: string;
  };
  hamburgerMenu: {
    icon: string;
    ariaLabel: string;
  };
}

const headerActions: HeaderActions = {
  loginButton: {
    label: "Login / Register",
    icon: "user-icon",
    href: "/login"
  },
  addPropertyButton: {
    label: "Add Property",
    icon: "arrow-right",
    href: "/add-property"
  },
  hamburgerMenu: {
    icon: "menu-icon",
    ariaLabel: "hamburger menu"
  }
};
```

---

### 2. Hero Section Data

#### Hero Content
```typescript
interface HeroContent {
  subtitle: string;
  title: string;
  description: string;
  scrollIndicator: {
    image: string;
    alt: string;
  };
}

const heroContent: HeroContent = {
  subtitle: "THE BEST WAY TO",
  title: "Find Your Dream Home",
  description: "We've more than 745,000 apartments, place & plot.",
  scrollIndicator: {
    image: "/images/scroll-indicator.png",
    alt: "scroll image"
  }
};
```

#### Search Form Data
```typescript
interface SearchForm {
  tabs: SearchTab[];
  searchInput: SearchInput;
  advancedButton: ButtonConfig;
  searchButton: ButtonConfig;
}

interface SearchTab {
  label: string;
  value: string;
  isActive: boolean;
}

interface SearchInput {
  placeholder: string;
  icon: string;
  type: string;
}

interface ButtonConfig {
  label: string;
  icon: string;
  variant: string;
}

const searchForm: SearchForm = {
  tabs: [
    { label: "Buy", value: "buy", isActive: true },
    { label: "Rent", value: "rent", isActive: false },
    { label: "Sold", value: "sold", isActive: false }
  ],
  searchInput: {
    placeholder: "Enter an address, neighborhood, city, or ZIP code for Buy",
    icon: "search-icon",
    type: "text"
  },
  advancedButton: {
    label: "Advanced",
    icon: "filter-icon",
    variant: "outline"
  },
  searchButton: {
    label: "",
    icon: "search-icon",
    variant: "primary"
  }
};
```

---

### 3. Property Types Section Data

```typescript
interface PropertyType {
  id: string;
  name: string;
  icon: string;
  propertyCount: number;
  href: string;
}

const propertyTypes: PropertyType[] = [
  {
    id: "houses",
    name: "Houses",
    icon: "house-icon",
    propertyCount: 22,
    href: "/properties?type=houses"
  },
  {
    id: "apartments",
    name: "Apartments",
    icon: "apartment-icon",
    propertyCount: 22,
    href: "/properties?type=apartments"
  },
  {
    id: "office",
    name: "Office",
    icon: "office-icon",
    propertyCount: 22,
    href: "/properties?type=office"
  },
  {
    id: "villa",
    name: "Villa",
    icon: "villa-icon",
    propertyCount: 22,
    href: "/properties?type=villa"
  },
  {
    id: "townhome",
    name: "Townhome",
    icon: "townhome-icon",
    propertyCount: 22,
    href: "/properties?type=townhome"
  },
  {
    id: "bungalow",
    name: "Bungalow",
    icon: "bungalow-icon",
    propertyCount: 22,
    href: "/properties?type=bungalow"
  },
  {
    id: "loft",
    name: "Loft",
    icon: "loft-icon",
    propertyCount: 22,
    href: "/properties?type=loft"
  }
];

interface PropertyTypesSection {
  title: string;
  description: string;
  items: PropertyType[];
  carouselControls: CarouselControls;
}

interface CarouselControls {
  prevButton: {
    icon: string;
    disabled: boolean;
  };
  nextButton: {
    icon: string;
    disabled: boolean;
  };
}

const propertyTypesSection: PropertyTypesSection = {
  title: "Explore Apartment Types",
  description: "Get some Inspirations from 1800+ skills",
  items: propertyTypes,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 4. Services Section Data

```typescript
interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
    icon: string;
  };
}

const services: Service[] = [
  {
    id: "buy",
    icon: "/icons/buy-icon.svg",
    title: "Buy a property",
    description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    link: {
      label: "Find a home",
      href: "/buy",
      icon: "arrow-right"
    }
  },
  {
    id: "sell",
    icon: "/icons/sell-icon.svg",
    title: "Sell a property",
    description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    link: {
      label: "Place an ad",
      href: "/sell",
      icon: "arrow-right"
    }
  },
  {
    id: "rent",
    icon: "/icons/rent-icon.svg",
    title: "Rent a property",
    description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    link: {
      label: "Find a rental",
      href: "/rent",
      icon: "arrow-right"
    }
  }
];

interface ServicesSection {
  title: string;
  description: string;
  items: Service[];
}

const servicesSection: ServicesSection = {
  title: "See How Realton Can Help",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: services
};
```

---

### 5. Featured Listings Section Data

```typescript
interface PropertyCard {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string;
  beds: number;
  baths: number;
  sqft: number;
  status: string;
  isFeatured: boolean;
  images: string[];
  href: string;
  actions: PropertyAction[];
}

interface PropertyAction {
  type: "favorite" | "share" | "compare";
  icon: string;
  href: string;
}

const featuredListings: PropertyCard[] = [
  {
    id: "property-1",
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 1,
    baths: 2,
    sqft: 1200,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/property-1.jpg"],
    href: "/property/equestrian-family-home",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-2",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 2,
    baths: 1,
    sqft: 1300,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-2.jpg"],
    href: "/property/luxury-villa-rego-park",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-3",
    title: "Equestrian Family Home",
    location: "Texas City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 3,
    sqft: 1000,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/property-3.jpg"],
    href: "/property/equestrian-family-home-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-4",
    title: "Luxury villa in Rego Park",
    location: "New Jersey City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 4,
    baths: 5,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-4.jpg"],
    href: "/property/luxury-villa-rego-park-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  }
];

interface FeaturedListingsSection {
  title: string;
  description: string;
  seeAllLink: {
    label: string;
    href: string;
    icon: string;
  };
  items: PropertyCard[];
  carouselControls: CarouselControls;
}

const featuredListingsSection: FeaturedListingsSection = {
  title: "Discover Our Featured Listings",
  description: "Aliquam lacinia diam quis lacus euismod",
  seeAllLink: {
    label: "See All Properties",
    href: "/properties/featured",
    icon: "arrow-right"
  },
  items: featuredListings,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 6. Cities Section Data

```typescript
interface City {
  id: string;
  name: string;
  propertyCount: number;
  image: string;
  href: string;
  seeAllLink: {
    label: string;
    href: string;
    icon: string;
  };
}

const cities: City[] = [
  {
    id: "los-angeles",
    name: "Los Angeles",
    propertyCount: 12,
    image: "/images/cities/los-angeles.jpg",
    href: "/properties?city=los-angeles",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/los-angeles",
      icon: "arrow-right"
    }
  },
  {
    id: "miami",
    name: "Miami",
    propertyCount: 12,
    image: "/images/cities/miami.jpg",
    href: "/properties?city=miami",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/miami",
      icon: "arrow-right"
    }
  },
  {
    id: "new-york",
    name: "New York",
    propertyCount: 12,
    image: "/images/cities/new-york.jpg",
    href: "/properties?city=new-york",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/new-york",
      icon: "arrow-right"
    }
  },
  {
    id: "chicago",
    name: "Chicago",
    propertyCount: 12,
    image: "/images/cities/chicago.jpg",
    href: "/properties?city=chicago",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/chicago",
      icon: "arrow-right"
    }
  },
  {
    id: "los-angeles-2",
    name: "Los Angeles",
    propertyCount: 12,
    image: "/images/cities/los-angeles-2.jpg",
    href: "/properties?city=los-angeles",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/los-angeles",
      icon: "arrow-right"
    }
  },
  {
    id: "miami-2",
    name: "Miami",
    propertyCount: 12,
    image: "/images/cities/miami-2.jpg",
    href: "/properties?city=miami",
    seeAllLink: {
      label: "See All Cities",
      href: "/cities/miami",
      icon: "arrow-right"
    }
  }
];

interface CitiesSection {
  title: string;
  description: string;
  seeAllLink: {
    label: string;
    href: string;
    icon: string;
  };
  items: City[];
  carouselControls: CarouselControls;
}

const citiesSection: CitiesSection = {
  title: "Properties by Cities",
  description: "Aliquam lacinia diam quis lacus euismod",
  seeAllLink: {
    label: "See All Cities",
    href: "/cities",
    icon: "arrow-right"
  },
  items: cities,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 7. CTA/Selling Options Section Data

```typescript
interface SellingOptionsSection {
  title: string;
  description: string;
  features: string[];
  learnMoreLink: {
    label: string;
    href: string;
    icon: string;
  };
  images: string[];
}

const sellingOptionsSection: SellingOptionsSection = {
  title: "Let's find the right selling option for you",
  description: "As the complexity of buildings to increase, the field of architecture",
  features: [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property"
  ],
  learnMoreLink: {
    label: "Learn More",
    href: "/selling-options",
    icon: "arrow-right"
  },
  images: [
    "/images/about/about-1.jpg",
    "/images/about/about-2.jpg",
    "/images/about/about-3.jpg",
    "/images/about/about-4.jpg"
  ]
};
```

---

### 8. Popular Properties Section Data

```typescript
interface PopularPropertiesSection {
  title: string;
  description: string;
  tabs: PropertyTab[];
  items: PropertyCard[];
  seeAllLink: {
    label: string;
    href: string;
    icon: string;
  };
}

interface PropertyTab {
  label: string;
  value: string;
  isActive: boolean;
}

const popularPropertiesSection: PopularPropertiesSection = {
  title: "Discover Popular Properties",
  description: "Aliquam lacinia diam quis lacus euismod",
  tabs: [
    { label: "For Rent", value: "rent", isActive: true },
    { label: "For Sale", value: "sale", isActive: false }
  ],
  items: [
    {
      id: "popular-1",
      title: "Luxury villa in Rego Park",
      location: "Los Angeles City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 2,
      baths: 1,
      sqft: 1300,
      status: "For Rent",
      isFeatured: false,
      images: ["/images/properties/popular-1.jpg"],
      href: "/property/luxury-villa-rego-park",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-2",
      title: "Luxury villa in Rego Park",
      location: "New Jersey City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 4,
      baths: 5,
      sqft: 1200,
      status: "For Rent",
      isFeatured: true,
      images: ["/images/properties/popular-2.jpg"],
      href: "/property/luxury-villa-rego-park-2",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-3",
      title: "Luxury villa in Rego Park",
      location: "California City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 6,
      baths: 4,
      sqft: 1200,
      status: "For Rent",
      isFeatured: true,
      images: ["/images/properties/popular-3.jpg"],
      href: "/property/luxury-villa-rego-park-3",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-4",
      title: "Luxury villa in Rego Park",
      location: "New York City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 4,
      baths: 4,
      sqft: 1200,
      status: "For Rent",
      isFeatured: true,
      images: ["/images/properties/popular-4.jpg"],
      href: "/property/luxury-villa-rego-park-4",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-5",
      title: "Luxury villa in Rego Park",
      location: "Los Angeles City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 2,
      baths: 3,
      sqft: 1200,
      status: "For Rent",
      isFeatured: false,
      images: ["/images/properties/popular-5.jpg"],
      href: "/property/luxury-villa-rego-park-5",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-6",
      title: "Luxury villa in Rego Park",
      location: "New Jersey City, CA, USA",
      price: 82000,
      priceUnit: "/ mo",
      beds: 1,
      baths: 2,
      sqft: 1205,
      status: "For Rent",
      isFeatured: true,
      images: ["/images/properties/popular-6.jpg"],
      href: "/property/luxury-villa-rego-park-6",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-7",
      title: "Luxury villa in Rego Park",
      location: "California City, CA, USA",
      price: 92000,
      priceUnit: "/ mo",
      beds: 5,
      baths: 4,
      sqft: 1100,
      status: "For Rent",
      isFeatured: false,
      images: ["/images/properties/popular-7.jpg"],
      href: "/property/luxury-villa-rego-park-7",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    },
    {
      id: "popular-8",
      title: "Luxury villa in Rego Park",
      location: "San Diego City, CA, USA",
      price: 92000,
      priceUnit: "/ mo",
      beds: 6,
      baths: 7,
      sqft: 1400,
      status: "For Rent",
      isFeatured: false,
      images: ["/images/properties/popular-8.jpg"],
      href: "/property/luxury-villa-rego-park-8",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    }
  ],
  seeAllLink: {
    label: "See All Properties",
    href: "/properties",
    icon: "arrow-right"
  }
};
```

---

### 9. Testimonials Section Data

```typescript
interface Testimonial {
  id: string;
  title: string;
  quote: string;
  rating: number;
  author: {
    name: string;
    avatar: string;
    company: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    title: "Great Work",
    quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
    rating: 5,
    author: {
      name: "Leslie Alexander",
      avatar: "/images/avatars/leslie-alexander.jpg",
      company: "Nintendo"
    }
  },
  {
    id: "testimonial-2",
    title: "Great Work",
    quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
    rating: 5,
    author: {
      name: "Floyd Miles",
      avatar: "/images/avatars/floyd-miles.jpg",
      company: "Bank of America"
    }
  },
  {
    id: "testimonial-3",
    title: "Great Work",
    quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
    rating: 5,
    author: {
      name: "Leslie Alexander",
      avatar: "/images/avatars/leslie-alexander.jpg",
      company: "Nintendo"
    }
  },
  {
    id: "testimonial-4",
    title: "Great Work",
    quote: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.",
    rating: 5,
    author: {
      name: "Floyd Miles",
      avatar: "/images/avatars/floyd-miles.jpg",
      company: "Bank of America"
    }
  }
];

interface TestimonialsSection {
  title: string;
  description: string;
  items: Testimonial[];
  carouselControls: CarouselControls;
}

const testimonialsSection: TestimonialsSection = {
  title: "People Love Living with Realton",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: testimonials,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 10. Blog Section Data

```typescript
interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: {
    month: string;
    day: string;
  };
  image: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Private Contemporary Home Balancing Openness",
    category: "Living Room",
    date: {
      month: "July",
      day: "28"
    },
    image: "/images/blog/blog-1.jpg",
    href: "/blog/private-contemporary-home-balancing-openness"
  },
  {
    id: "blog-2",
    title: "Contemporary Home Private Balancing Openness",
    category: "Living Room",
    date: {
      month: "July",
      day: "28"
    },
    image: "/images/blog/blog-2.jpg",
    href: "/blog/contemporary-home-private-balancing-openness"
  },
  {
    id: "blog-3",
    title: "Balancing Private Contemporary Home Openness",
    category: "Living Room",
    date: {
      month: "July",
      day: "28"
    },
    image: "/images/blog/blog-3.jpg",
    href: "/blog/balancing-private-contemporary-home-openness"
  }
];

interface BlogSection {
  title: string;
  description: string;
  items: BlogPost[];
}

const blogSection: BlogSection = {
  title: "From Our Blog",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: blogPosts
};
```

---

### 11. Trust Badges Section Data

```typescript
interface TrustBadgesSection {
  title: string;
  logos: string[];
}

const trustBadgesSection: TrustBadgesSection = {
  title: "Trusted by the world's best",
  logos: [
    "/images/brands/1.png",
    "/images/brands/2.png",
    "/images/brands/3.png",
    "/images/brands/4.png",
    "/images/brands/5.png",
    "/images/brands/6.png"
  ]
};
```

---

### 12. Help CTA Section Data

```typescript
interface HelpCTASection {
  title: string;
  description: string;
  contactLink: {
    label: string;
    href: string;
    icon: string;
  };
  phoneLink: {
    icon: string;
    number: string;
    href: string;
  };
  images: {
    spinner1: string;
    spinner2: string;
  };
}

const helpCTASection: HelpCTASection = {
  title: "Need help? Talk to our expert.",
  description: "Talk to our experts or Browse through more properties.",
  contactLink: {
    label: "Contact Us",
    href: "/contact",
    icon: "arrow-right"
  },
  phoneLink: {
    icon: "phone-icon",
    number: "920 851 9087",
    href: "tel:9208519087"
  },
  images: {
    spinner1: "/images/spinner-1.png",
    spinner2: "/images/spinner-2.png"
  }
};
```

---

### 13. Footer Section Data

```typescript
interface FooterSection {
  contact: FooterContact;
  apps: FooterApps;
  social: FooterSocial;
  newsletter: FooterNewsletter;
  popularSearch: FooterLinks;
  quickLinks: FooterLinks;
  discover: FooterLinks;
  copyright: FooterCopyright;
}

interface FooterContact {
  phone: {
    label: string;
    number: string;
    href: string;
  };
  supportLabel: string;
  email: {
    address: string;
    href: string;
  };
  logo: string;
}

interface FooterApps {
  title: string;
  apps: AppLink[];
}

interface AppLink {
  name: string;
  store: string;
  icon: string;
  href: string;
}

interface FooterSocial {
  title: string;
  links: SocialLink[];
}

interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

interface FooterNewsletter {
  title: string;
  inputPlaceholder: string;
  buttonLabel: string;
}

interface FooterLinks {
  title: string;
  links: NavLink[];
}

interface NavLink {
  label: string;
  href: string;
}

interface FooterCopyright {
  text: string;
  year: number;
  brandLink: {
    label: string;
    href: string;
  };
  legalLinks: NavLink[];
}

const footerSection: FooterSection = {
  contact: {
    phone: {
      label: "Total Free Customer Care",
      number: "+(0) 123 050 945 02",
      href: "tel:+012305094502"
    },
    supportLabel: "Need Live Support?",
    email: {
      address: "hi@homez.com",
      href: "mailto:hi@homez.com"
    },
    logo: "/images/logo-footer.png"
  },
  apps: {
    title: "Apps",
    apps: [
      {
        name: "Apple Store",
        store: "Download on the",
        icon: "apple-icon",
        href: "https://apps.apple.com"
      },
      {
        name: "Google Play",
        store: "Get it on",
        icon: "google-icon",
        href: "https://play.google.com"
      }
    ]
  },
  social: {
    title: "Follow us on social media",
    links: [
      { platform: "Facebook", icon: "facebook-icon", href: "https://facebook.com" },
      { platform: "Twitter", icon: "twitter-icon", href: "https://twitter.com" },
      { platform: "Instagram", icon: "instagram-icon", href: "https://instagram.com" },
      { platform: "LinkedIn", icon: "linkedin-icon", href: "https://linkedin.com" }
    ]
  },
  newsletter: {
    title: "Keep Yourself Up to Date",
    inputPlaceholder: "Your Email",
    buttonLabel: "Subscribe"
  },
  popularSearch: {
    title: "Popular Search",
    links: [
      { label: "Apartment for Rent", href: "/search?apartment-rent" },
      { label: "Apartment Low to Hide", href: "/search?apartment-low-hide" },
      { label: "Offices for Buy", href: "/search?offices-buy" },
      { label: "Offices for Rent", href: "/search?offices-rent" }
    ]
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Our Services", href: "/services" },
      { label: "Contact Support", href: "/support" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faq" }
    ]
  },
  discover: {
    title: "Discover",
    links: [
      { label: "Miami", href: "/cities/miami" },
      { label: "Los Angeles", href: "/cities/los-angeles" },
      { label: "Chicago", href: "/cities/chicago" },
      { label: "New York", href: "/cities/new-york" }
    ]
  },
  copyright: {
    text: "© Homez 2024",
    year: 2024,
    brandLink: {
      label: "ib-themes",
      href: "https://ib-themes.com"
    },
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" }
    ]
  }
};
```

---

## Component Breakdown

### 1. Header Component

```
Header/
├── Logo
├── Navigation
│   ├── NavItem (Home)
│   ├── NavItem (Listing)
│   │   └── DropdownMenu
│   │       ├── GridStyles
│   │       ├── MapStyles
│   │       └── ListStyles
│   ├── NavItem (Property)
│   ├── NavItem (Blog)
│   └── NavItem (Pages)
├── LoginButton
├── AddPropertyButton
└── HamburgerMenu (Mobile)
```

### 2. Hero Section Components

```
HeroSection/
├── HeroContent
│   ├── Subtitle (h6)
│   ├── Title (h2)
│   └── Description (p)
├── SearchForm
│   ├── TabList
│   │   ├── Tab (Buy)
│   │   ├── Tab (Rent)
│   │   └── Tab (Sold)
│   ├── SearchInput
│   ├── AdvancedButton
│   └── SearchButton
└── ScrollIndicator
```

### 3. Property Types Section Components

```
PropertyTypesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── PropertyTypeCarousel
    └── PropertyTypeCard[]
        ├── Icon
        ├── Name (h6)
        └── PropertyCount (p)
```

### 4. Services Section Components

```
ServicesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
└── ServiceCardsGrid
    └── ServiceCard[]
        ├── Icon
        ├── Title (h4)
        ├── Description (p)
        └── LinkButton
```

### 5. Featured Listings Section Components

```
FeaturedListingsSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── SeeAllLink
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── PropertyCardsCarousel
    └── PropertyCard[]
        ├── Image
        ├── FeaturedBadge
        ├── PriceTag
        ├── Title (h6)
        ├── Location (p)
        ├── PropertySpecs
        │   ├── Beds
        │   ├── Baths
        │   └── Sqft
        ├── StatusBadge
        └── ActionButtons
            ├── FavoriteButton
            ├── ShareButton
            └── CompareButton
```

### 6. Cities Section Components

```
CitiesSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── SeeAllLink
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── CityCardsCarousel
    └── CityCard[]
        ├── CityImage
        ├── CityName (h6)
        ├── PropertyCount (p)
        └── SeeAllLink
```

### 7. CTA Section Components

```
CTASection/
├── ContentColumn
│   ├── Title (h2)
│   ├── Description (p)
│   ├── FeaturesList
│   │   └── FeatureItem[]
│   └── LearnMoreLink
└── ImagesColumn
    └── ImageGrid
        └── Image[]
```

### 8. Popular Properties Section Components

```
PopularPropertiesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── FilterTabs
│   ├── Tab (For Rent)
│   └── Tab (For Sale)
├── PropertyGrid
│   └── PropertyCard[]
└── SeeAllLink
```

### 9. Testimonials Section Components

```
TestimonialsSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── TestimonialsCarousel
    └── TestimonialCard[]
        ├── Title (h5)
        ├── QuoteIcon
        ├── QuoteText (p)
        ├── RatingStars
        ├── AuthorAvatar
        ├── AuthorName (h6)
        └── AuthorCompany (p)
```

### 10. Blog Section Components

```
BlogSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
└── BlogPostsGrid
    └── BlogCard[]
        ├── Image
        ├── DateBadge
        │   ├── Month
        │   └── Day
        ├── Category (link)
        └── Title (h6)
```

### 11. Trust Badges Section Components

```
TrustBadgesSection/
├── Title (h6)
└── LogoCarousel
    └── LogoImage[]
```

### 12. Help CTA Section Components

```
HelpCTASection/
├── DecorativeImages
│   ├── SpinnerImage1
│   └── SpinnerImage2
├── ContentCard
│   ├── Title (h2)
│   ├── Description (p)
│   ├── ContactUsLink
│   └── PhoneLink
```

### 13. Footer Components

```
Footer/
├── FooterTop
│   ├── ContactColumn
│   │   ├── Logo
│   │   ├── PhoneLabel
│   │   ├── PhoneNumber
│   │   ├── SupportLabel
│   │   └── Email
│   ├── AppsColumn
│   │   ├── Title (h5)
│   │   └── AppLinks[]
│   ├── SocialColumn
│   │   ├── Title (h6)
│   │   └── SocialLinks[]
│   └── NewsletterColumn
│       ├── Title (h6)
│       ├── EmailInput
│       └── SubscribeButton
├── FooterMain
│   ├── PopularSearchColumn
│   │   ├── Title (h6)
│   │   └── Links[]
│   ├── QuickLinksColumn
│   │   ├── Title (h6)
│   │   └── Links[]
│   └── DiscoverColumn
│       ├── Title (h6)
│       └── Links[]
└── FooterBottom
    ├── CopyrightText
    ├── BrandLink
    └── LegalLinks[]
```

---

## Interactive Elements

### 1. Navigation Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Logo | Click | Navigate to homepage |
| Nav Items | Hover | Show dropdown menu (for items with dropdowns) |
| Nav Items | Click | Navigate to corresponding page |
| Login Button | Click | Open login/register modal |
| Add Property | Click | Navigate to add property page |
| Hamburger Menu | Click | Toggle mobile navigation menu |

### 2. Search Form Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Buy Tab | Click | Set search mode to "Buy", update placeholder text |
| Rent Tab | Click | Set search mode to "Rent", update placeholder text |
| Sold Tab | Click | Set search mode to "Sold", update placeholder text |
| Search Input | Focus | Highlight input, show suggestions dropdown |
| Search Input | Type | Filter/search suggestions |
| Advanced Button | Click | Toggle advanced search form/modal |
| Search Button | Click | Execute search, navigate to results page |

### 3. Carousel Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Prev Button | Click | Scroll carousel to previous items |
| Next Button | Click | Scroll carousel to next items |
| Prev/Next Buttons | Disabled | Button is disabled when at carousel boundary |

### 4. Property Card Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Card | Hover | Show shadow/elevation effect |
| Image | Hover | Zoom effect |
| Title | Click | Navigate to property detail page |
| Favorite Button | Click | Toggle favorite status (requires login) |
| Share Button | Click | Open share modal/options |
| Compare Button | Click | Add to comparison list |

### 5. Tab Filter Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| For Rent Tab | Click | Filter properties to show only "For Rent" listings |
| For Sale Tab | Click | Filter properties to show only "For Sale" listings |

### 6. Newsletter Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Email Input | Focus | Clear placeholder, show focus state |
| Email Input | Type | Validate email format |
| Subscribe Button | Click | Submit email, show success/error message |

### 7. Footer Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| All Links | Click | Navigate to corresponding page |
| Social Icons | Click | Open social media in new tab |
| App Store Links | Click | Navigate to app store page |

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column layout, hamburger menu |
| Tablet | 768px - 1024px | Two column layout, condensed navigation |
| Desktop | > 1024px | Full layout with all sections |

### Header Responsive Behavior

```
Desktop (> 1024px):
- Full navigation visible
- Logo on left
- All nav items visible
- Login and Add Property buttons visible

Tablet (768px - 1024px):
- Condensed navigation
- Some nav items hidden in "More" dropdown
- Login and Add Property buttons visible

Mobile (< 768px):
- Hamburger menu replaces navigation
- Full-screen mobile menu on tap
- Login button in mobile menu
- Add Property button may be hidden or moved
```

### Hero Section Responsive Behavior

```
Desktop:
- Full hero content visible
- Search form in horizontal layout
- All three tabs visible

Tablet:
- Reduced padding
- Search form slightly condensed

Mobile:
- Stacked layout
- Search form vertical
- Tabs in single row
- Scroll indicator may be hidden
```

### Property Types Carousel Responsive Behavior

```
Desktop:
- 7 cards visible
- Carousel navigation enabled

Tablet:
- 4-5 cards visible
- Carousel navigation enabled

Mobile:
- 2-3 cards visible
- Touch swipe enabled
- Carousel navigation arrows hidden
```

### Featured Listings Carousel Responsive Behavior

```
Desktop:
- 4 cards visible
- Horizontal carousel

Tablet:
- 2-3 cards visible
- Horizontal carousel

Mobile:
- 1 card visible
- Vertical stack or horizontal swipe
```

### Cities Grid Responsive Behavior

```
Desktop:
- 6 cards in 3x2 grid
- Carousel navigation

Tablet:
- 4 cards in 2x2 grid

Mobile:
- 2 cards visible
- Horizontal scroll/swipe
```

### Services Grid Responsive Behavior

```
Desktop:
- 3 cards in horizontal row

Tablet:
- 3 cards in horizontal row (condensed)

Mobile:
- Single card visible
- Vertical stack
```

### Popular Properties Grid Responsive Behavior

```
Desktop:
- 8 cards in 4-column grid
- 2 rows

Tablet:
- 4 cards in 2-column grid
- 4 rows

Mobile:
- 2 cards in 2-column grid
- Or single column stack
```

### Testimonials Carousel Responsive Behavior

```
Desktop:
- 4 testimonials visible
- Horizontal carousel

Tablet:
- 2-3 testimonials visible

Mobile:
- 1 testimonial visible
- Touch swipe enabled
```

### Blog Grid Responsive Behavior

```
Desktop:
- 3 blog posts in horizontal row

Tablet:
- 3 blog posts in horizontal row

Mobile:
- Single post visible
- Vertical stack
```

### Footer Responsive Behavior

```
Desktop:
- Multi-column layout (5 columns)
- All footer sections visible

Tablet:
- 3 columns
- Some sections merged

Mobile:
- Single column
- Accordion-style expandable sections
- Essential links only
```

---

## Image Assets

### Hero Section
- Background image (hero background)
- Scroll indicator image

### Property Types
- Category icons (7 icons)

### Services
- Buy icon
- Sell icon
- Rent icon

### Properties
- Property listing images (multiple)
- Featured badge overlay

### Cities
- City images (6+)

### CTA Section
- About images (4)

### Testimonials
- Author avatars (multiple)

### Blog
- Blog post images (3)

### Trust Badges
- Partner logos (6)

### Footer
- App store badges (2)
- Social media icons (4)

---

## CSS Classes (Estimated)

```css
/* Section Classes */
.hero-section
.hero-content
.hero-title
.hero-subtitle
.hero-description
.search-form
.search-tabs
.search-input
.search-button

/* Property Components */
.property-types-section
.property-type-card
.property-type-icon
.property-type-name
.property-type-count

.featured-listings-section
.property-card
.property-image
.property-badge
.property-price
.property-title
.property-location
.property-specs
.property-action-buttons

/* City Components */
.cities-section
.city-card
.city-image
.city-name
.city-count

/* Services */
.services-section
.service-card
.service-icon
.service-title
.service-description
.service-link

/* Testimonials */
.testimonials-section
.testimonial-card
.testimonial-quote
.testimonial-rating
.testimonial-author
.testimonial-avatar

/* Blog */
.blog-section
.blog-card
.blog-image
.blog-date
.blog-category
.blog-title

/* Footer */
.footer
.footer-top
.footer-main
.footer-bottom
.footer-column
.footer-title
.footer-links
.footer-newsletter
```

---

## Data Flow Summary

1. **Static Data**: Navigation items, footer links, service descriptions
2. **Dynamic Data**: Property listings, city counts, testimonials, blog posts
3. **User Input**: Search queries, newsletter subscriptions, favorites
4. **API Endpoints** (suggested):
   - `GET /api/properties?type=featured` - Featured listings
   - `GET /api/properties?type=popular&status=rent|sale` - Popular properties
   - `GET /api/cities` - City list with property counts
   - `GET /api/property-types` - Property categories
   - `GET /api/testimonials` - Customer reviews
   - `GET /api/blog-posts` - Latest blog posts
   - `POST /api/newsletter/subscribe` - Newsletter subscription

---

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy (h1-h6), semantic elements
2. **ARIA Labels**: For interactive elements, dropdowns, and carousels
3. **Keyboard Navigation**: All interactive elements accessible via keyboard
4. **Focus States**: Visible focus indicators on all focusable elements
5. **Color Contrast**: Sufficient contrast ratios for text content
6. **Alt Text**: Descriptive alt text for all images
7. **Screen Reader Support**: Hidden text for icon-only buttons

---

## Performance Considerations

1. **Image Optimization**: Lazy loading for below-fold images
2. **Carousel Performance**: Virtual scrolling for large datasets
3. **Code Splitting**: Component-level code splitting
4. **Caching Strategy**: API response caching for property data
5. **Critical CSS**: Inline critical styles for above-fold content

---

## Technical Implementation

### Dependencies Required

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "bootstrap": "^5.3.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "aos": "^2.3.4",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0"
  }
}
```

### Animation Specifications

| Animation Type | Duration | Easing | Usage |
|----------------|----------|--------|-------|
| fade-up | 1200ms | ease | Hero sections, cards |
| fade-left | 1200ms | ease | Side content |
| fade-right | 1200ms | ease | Side content |
| zoom-in | 500ms | ease | Image hover |

### CSS Classes Reference

| Class | Purpose | CSS Properties |
|-------|---------|----------------|
| .aos-init | AOS initialization | opacity: 0 |
| .aos-animate | AOS animated | opacity: 1, transform: none |
| .swiper | Carousel container | overflow: hidden |
| .btn-thm | Theme button | bg: rgb(235, 103, 83), radius: 12px |

### Theme Colors

```css
--color-primary: #e33e3e;
--color-primary-computed: rgb(235, 103, 83);
--color-dark: #041e42;
--color-white: #ffffff;
```

### Responsive Behavior

| Breakpoint | Grid Columns | Header Style |
|------------|--------------|--------------|
| > 1200px | 4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Comprehensive multi-section layout
- Hero with search form and scroll indicator
- Services section (Buy/Sell/Rent)
- Selling options CTA with image gallery
- Popular properties with For Rent/For Sale tabs
- Help CTA with decorative spinners
- Full-featured footer with apps and newsletter

---

*Documentation generated for Home v6 - Homez Real Estate NextJS Template*


---

## GSAP Animation Analysis

### Library Detection

| Library | Detected | Usage |
|---------|----------|-------|
| GSAP | ❌ No | Not present |
| AOS (Animate On Scroll) | ✅ Yes | Scroll animations |
| Swiper | ✅ Yes | Carousels |
| Emotion CSS | ✅ Yes | CSS-in-JS |

### AOS Animation Statistics

**Total AOS Animations:** 16

**Animation Types:** fade-up: 14, fade-left: 1, fade-right: 1

**Delays Used:** 0, 100, 200, 300, 300msms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 14 elements
data-aos="fade-left"  // 1 elements
data-aos="fade-right" // 1 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 108 |
| Swiper Slides | Multiple |

### GSAP Implementation Recommendations

If GSAP were to be implemented for this page, recommended use cases:

1. **Hero Section**: Timeline animation for staggered text reveal
2. **Property Cards**: ScrollTrigger for sequential card entrance
3. **Statistics**: Animated number counters (CounterUp alternative)
4. **Parallax**: Background parallax on scroll
5. **SVG Icons**: Morphing animations for property type icons

```javascript
// Example GSAP Implementation
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.timeline()
  .from('.hero-title', { y: 50, opacity: 0, duration: 1 })
  .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5');

// Property cards stagger
gsap.utils.toArray('.property-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1
  });
});
```

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### Package.json Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.12.0"
  }
}
```

### GSAP Registration and Setup

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Hero Section Animations

```javascript
// Hero section timeline
const heroTL = gsap.timeline();

heroTL
  .from('.hero-title', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-subtitle', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.hero-search', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3')
  .from('.scroll-indicator', { 
    opacity: 0, 
    y: -20, 
    duration: 0.4 
  }, '-=0.2');
```

### Featured Listings Section Animations

```javascript
// Property cards stagger animation
gsap.from('.property-card', {
  scrollTrigger: {
    trigger: '.featured-listings',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 60,
  stagger: 0.1,
  duration: 0.7,
  ease: 'power3.out'
});

// Property card hover effects
gsap.utils.toArray('.property-card').forEach(card => {
  const image = card.querySelector('.property-image');
  const actions = card.querySelector('.property-actions');
  
  gsap.set(actions, { opacity: 0, y: 10 });
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.05, duration: 0.3 });
    gsap.to(actions, { opacity: 1, y: 0, duration: 0.3 });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.3 });
    gsap.to(actions, { opacity: 0, y: 10, duration: 0.3 });
  });
});
```

### Selling Options CTA Animations

```javascript
// Selling options image gallery
gsap.from('.selling-options-image', {
  scrollTrigger: {
    trigger: '.selling-options-section',
    start: 'top 75%',
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out'
});

// Feature list animation
gsap.from('.feature-item', {
  scrollTrigger: {
    trigger: '.selling-options-section',
    start: 'top 70%',
  },
  opacity: 0,
  x: -20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Help CTA Section Animations

```javascript
// Help CTA reveal
gsap.from('.help-cta-card', {
  scrollTrigger: {
    trigger: '.help-cta-section',
    start: 'top 70%',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power2.out'
});

// Spinner decorative elements
gsap.to('.cta-spinner', {
  scrollTrigger: {
    trigger: '.help-cta-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.5
  },
  rotation: 360,
  ease: 'none'
});
```

### Complete Implementation Example

```javascript
// components/animations/GSAPAnimations.tsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    // Hero animation
    const heroTL = gsap.timeline();
    heroTL
      .from('.hero-title', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.hero-subtitle', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.hero-search', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

    // Featured listings
    gsap.from('.property-card', {
      scrollTrigger: {
        trigger: '.featured-listings',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Selling options images
    gsap.from('.selling-options-image', {
      scrollTrigger: {
        trigger: '.selling-options-section',
        start: 'top 75%',
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Help CTA
    gsap.from('.help-cta-card', {
      scrollTrigger: {
        trigger: '.help-cta-section',
        start: 'top 70%',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
```


---

## Theme Variables & Styling

### Primary Color Palette

```css
/* Theme Colors */
--color-primary: #e33e3e;
--color-primary-computed: rgb(235, 103, 83);
--color-dark: #041e42;
--color-white: #ffffff;
--color-light-bg: #f3f3f3;
--color-border: #efefef;

/* HSL Values */
--hsl-white: hsl(0, 0%, 100%);
--hsl-gray-light: hsl(0, 0%, 80%);
--hsl-gray-hover: hsl(0, 0%, 70%);
--hsl-text-dark: hsl(0, 0%, 20%);
--hsl-text-muted: hsl(0, 0%, 60%);
```

### Emotion CSS Blocks

**Total Emotion Blocks:** 30

### Header Configuration

```css
/* Header Classes */
.header-nav.nav-homepage-style.main-menu

/* Logo Variants */
.header-logo.logo1 { /* Light version */ }
.header-logo.logo2 { /* Dark version */ }
```

### Button Styling

```css
/* Theme Button */
.btn-thm {
  background-color: rgb(235, 103, 83);
  border-radius: 12px;
  color: #ffffff;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-thm:hover {
  background-color: rgb(220, 90, 70);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(235, 103, 83, 0.3);
}
```

**Theme Button Count:** 6

### Bootstrap Grid Usage

```css
/* Layout Classes */
.container { max-width: 1200px; }
.row { display: flex; flex-wrap: wrap; }
.col-* { flex: 1; padding: 0 15px; }

/* Flex Utilities */
.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-between { justify-content: space-between; }
```

### Responsive Breakpoints

| Breakpoint | Grid Columns | Header Style |
|------------|--------------|--------------|
| > 1200px | 4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Typography

```css
/* Font Families */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

/* Preloaded Fonts */
- 376dd8dc38524313-s.p.woff2
- 3e3cf2ee9aa3f174-s.p.woff2
- 7777133e901cd5ed-s.p.woff2
- 916d3686010a8de2-s.p.woff2
- 9a881e2ac07d406b-s.p.woff2
- c04551857776278f-s.p.woff2
- d869208648ca5469-s.p.woff2
```

### Spacing System

```css
/* Margin */
.mb10 { margin-bottom: 10px; }
.mb15 { margin-bottom: 15px; }
.mb20 { margin-bottom: 20px; }
.mb25 { margin-bottom: 25px; }
.mr40 { margin-right: 40px; }

/* Padding */
.pl30 { padding-left: 30px; }
.pt30 { padding-top: 30px; }
.pt45 { padding-top: 45px; }
.pb30 { padding-bottom: 30px; }
```

### Component-Specific Styles

```css
/* Property Cards */
.property-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* Featured Badge */
.featured-badge {
  background: rgb(235, 103, 83);
  color: white;
  font-size: 10px;
  padding: 4px 12px;
  border-radius: 4px;
}

/* Section Headers */
.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #041e42;
  margin-bottom: 10px;
}
```
