# Home v10 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v10
- **Page Title:** Home v10 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v10 is a map-centric real estate landing page that features a prominent Google Maps integration as the hero section. The page combines location-based property discovery with comprehensive property listings, agent profiles, and service information. This variant is designed for users who prefer visual, map-based property browsing while still offering traditional listing views and detailed property information.

---

## Layout Structure

### Overall Layout Architecture

The page follows a map-first layout with distinct sections:

1. **Fixed Header/Navigation** - Persistent top navigation with logo, menu items, login button, and add property CTA
2. **Map Hero Section** - Full-width Google Maps with search form overlay
3. **Services Section** - Three-column layout for Buy/Sell/Rent
4. **Featured Listings Section** - Property card carousel with horizontal navigation
5. **Why Choose Us Section** - Statistics, image, and service highlights
6. **Cities Section** - Horizontal carousel of city cards with property counts
7. **Property Types Section** - Carousel of property categories
8. **Testimonials Section** - Horizontal carousel of customer reviews
9. **Property Slider Section** - Featured property details with navigation
10. **Agents Section** - Horizontal carousel of agent profiles
11. **Blog Section** - Three-column blog post preview
12. **Footer** - Multi-column layout with contact info, newsletter, and navigation

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
      { label: "Header Map Style", href: "/listing/header-map-style" },
      { label: "Map V1", href: "/listing/map-v1" },
      { label: "Map V2", href: "/listing/map-v2" },
      { label: "Map V3", href: "/listing/map-v3" },
      { label: "Map V4", href: "/listing/map-v4" },
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

### 2. Map Hero Section Data

```typescript
interface MapHeroSection {
  map: MapConfig;
  searchForm: SearchForm;
  mapMarkers: MapMarker[];
}

interface MapConfig {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  mapType: string;
  controls: MapControls;
}

interface MapControls {
  keyboardShortcuts: boolean;
  zoomIn: boolean;
  zoomOut: boolean;
  openInGoogleMaps: boolean;
}

interface MapMarker {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  label: string;
  propertyCount?: number;
}

interface SearchForm {
  tabs: SearchTab[];
  searchInput: SearchInputConfig;
  propertyTypeDropdown: DropdownConfig;
  locationDropdown: DropdownConfig;
  priceDropdown: DropdownConfig;
  advancedButton: ButtonConfig;
  searchButton: ButtonConfig;
}

interface SearchTab {
  label: string;
  value: string;
  isActive: boolean;
}

interface SearchInputConfig {
  label: string;
  placeholder: string;
  icon: string;
}

interface DropdownConfig {
  label: string;
  placeholder: string;
  value: string;
  options: DropdownOption[];
}

interface DropdownOption {
  value: string;
  label: string;
}

interface ButtonConfig {
  label: string;
  icon: string;
  variant: string;
}

const mapHeroSection: MapHeroSection = {
  map: {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 12,
    mapType: "roadmap",
    controls: {
      keyboardShortcuts: true,
      zoomIn: true,
      zoomOut: true,
      openInGoogleMaps: true
    }
  },
  searchForm: {
    tabs: [
      { label: "Buy", value: "buy", isActive: true },
      { label: "Rent", value: "rent", isActive: false },
      { label: "Sold", value: "sold", isActive: false }
    ],
    searchInput: {
      label: "Search",
      placeholder: "Enter Keyword for Buy",
      icon: "search-icon"
    },
    propertyTypeDropdown: {
      label: "Looking For",
      placeholder: "Select type",
      value: "Apartments",
      options: [
        { value: "apartments", label: "Apartments" },
        { value: "houses", label: "Houses" },
        { value: "villa", label: "Villa" },
        { value: "office", label: "Office" },
        { value: "townhome", label: "Townhome" }
      ]
    },
    locationDropdown: {
      label: "Location",
      placeholder: "Select location",
      value: "New York",
      options: [
        { value: "new-york", label: "New York" },
        { value: "los-angeles", label: "Los Angeles" },
        { value: "miami", label: "Miami" },
        { value: "chicago", label: "Chicago" }
      ]
    },
    priceDropdown: {
      label: "Price",
      placeholder: "Select price range",
      value: "$2000 - $45000",
      options: [
        { value: "0-50000", label: "$0 - $50,000" },
        { value: "50000-100000", label: "$50,000 - $100,000" },
        { value: "100000-250000", label: "$100,000 - $250,000" },
        { value: "250000-500000", label: "$250,000 - $500,000" },
        { value: "500000+", label: "$500,000+" }
      ]
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
  },
  mapMarkers: [
    {
      id: "marker-1",
      position: { lat: 40.7128, lng: -74.0060 },
      label: "3",
      propertyCount: 3
    }
  ]
};
```

---

### 3. Services Section Data

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

### 4. Featured Listings Section Data

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
    id: "featured-1",
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 1,
    baths: 2,
    sqft: 1200,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/featured-1.jpg"],
    href: "/property/equestrian-family-home",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "featured-2",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 2,
    baths: 1,
    sqft: 1300,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/featured-2.jpg"],
    href: "/property/luxury-villa-rego-park",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "featured-3",
    title: "Equestrian Family Home",
    location: "Texas City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 3,
    sqft: 1000,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/featured-3.jpg"],
    href: "/property/equestrian-family-home-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "featured-4",
    title: "Luxury villa in Rego Park",
    location: "New Jersey City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 4,
    baths: 5,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/featured-4.jpg"],
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

### 5. Why Choose Us Section Data

```typescript
interface WhyChooseUsSection {
  image: string;
  totalRent: {
    icon: string;
    label: string;
    value: string;
    unit: string;
  };
  title: string;
  description: string;
  services: ServiceHighlight[];
  statistics: Statistic[];
}

interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

interface Statistic {
  value: string;
  unit: string;
  label: string;
}

const whyChooseUsSection: WhyChooseUsSection = {
  image: "/images/why-choose.jpg",
  totalRent: {
    icon: "home-icon",
    label: "Total Rent",
    value: "4,382",
    unit: "Unit"
  },
  title: "Why Choose Us",
  description: "As the complexity of buildings to increase, the field of architecture.",
  services: [
    {
      icon: "/icons/property-management.svg",
      title: "Property Management",
      description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
    },
    {
      icon: "/icons/mortgage.svg",
      title: "Mortgage Services",
      description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
    },
    {
      icon: "/icons/currency.svg",
      title: "Currency Services",
      description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
    }
  ],
  statistics: [
    { value: "0", unit: "M", label: "Award Winning" },
    { value: "0", unit: "K", label: "Property Ready" },
    { value: "0", unit: "M", label: "Happy Customer" }
  ]
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
}

const cities: City[] = [
  {
    id: "california",
    name: "California",
    propertyCount: 12,
    image: "/images/cities/california.jpg",
    href: "/properties?city=california"
  },
  {
    id: "new-jersey",
    name: "New Jersey",
    propertyCount: 12,
    image: "/images/cities/new-jersey.jpg",
    href: "/properties?city=new-jersey"
  },
  {
    id: "manhattan",
    name: "Manhattan",
    propertyCount: 12,
    image: "/images/cities/manhattan.jpg",
    href: "/properties?city=manhattan"
  },
  {
    id: "san-diego",
    name: "San Diego",
    propertyCount: 12,
    image: "/images/cities/san-diego.jpg",
    href: "/properties?city=san-diego"
  },
  {
    id: "san-francisco",
    name: "San Francisco",
    propertyCount: 12,
    image: "/images/cities/san-francisco.jpg",
    href: "/properties?city=san-francisco"
  },
  {
    id: "san-diego-2",
    name: "San Diego",
    propertyCount: 12,
    image: "/images/cities/san-diego-2.jpg",
    href: "/properties?city=san-diego"
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

### 7. Property Types Section Data

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

### 8. Testimonials Section Data

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

### 9. Property Slider Section Data

```typescript
interface PropertySliderItem {
  id: string;
  price: number;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  viewDetailsLink: {
    label: string;
    href: string;
    icon: string;
  };
}

const propertySliderItems: PropertySliderItem[] = [
  {
    id: "slider-1",
    price: 98600,
    title: "Studio on Grand Avenue",
    beds: 32,
    baths: 91,
    sqft: 1500,
    viewDetailsLink: {
      label: "View Details",
      href: "/property/studio-grand-avenue",
      icon: "arrow-right"
    }
  },
  {
    id: "slider-2",
    price: 98600,
    title: "Studio on Grand Avenue",
    beds: 32,
    baths: 91,
    sqft: 1500,
    viewDetailsLink: {
      label: "View Details",
      href: "/property/studio-grand-avenue",
      icon: "arrow-right"
    }
  }
];

interface PropertySliderSection {
  items: PropertySliderItem[];
  carouselControls: CarouselControls;
}

const propertySliderSection: PropertySliderSection = {
  items: propertySliderItems,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 10. Agents Section Data

```typescript
interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  href: string;
}

const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Arlene McCoy",
    title: "Broker",
    image: "/images/agents/arlene-mccoy.jpg",
    href: "/agents/arlene-mccoy"
  },
  {
    id: "agent-2",
    name: "Esther Howard",
    title: "Broker",
    image: "/images/agents/esther-howard.jpg",
    href: "/agents/esther-howard"
  },
  {
    id: "agent-3",
    name: "Cody Fisher",
    title: "Broker",
    image: "/images/agents/cody-fisher.jpg",
    href: "/agents/cody-fisher"
  },
  {
    id: "agent-4",
    name: "Bessie Cooper",
    title: "Broker",
    image: "/images/agents/bessie-cooper.jpg",
    href: "/agents/bessie-cooper"
  },
  {
    id: "agent-5",
    name: "Guy Hawkins",
    title: "Broker",
    image: "/images/agents/guy-hawkins.jpg",
    href: "/agents/guy-hawkins"
  },
  {
    id: "agent-6",
    name: "Arlene McCoy",
    title: "Broker",
    image: "/images/agents/arlene-mccoy-2.jpg",
    href: "/agents/arlene-mccoy"
  },
  {
    id: "agent-7",
    name: "Esther Howard",
    title: "Broker",
    image: "/images/agents/esther-howard-2.jpg",
    href: "/agents/esther-howard"
  }
];

interface AgentsSection {
  title: string;
  description: string;
  items: Agent[];
  carouselControls: CarouselControls;
}

const agentsSection: AgentsSection = {
  title: "Our Exclusive Agents",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: agents,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 11. Blog Section Data

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

### 12. Footer Section Data

```typescript
interface FooterSection {
  social: FooterSocial;
  popularSearch: FooterLinks;
  quickLinks: FooterLinks;
  discover: FooterLinks;
  contact: FooterContact;
  newsletter: FooterNewsletter;
  apps: FooterApps;
  copyright: FooterCopyright;
}

interface FooterSocial {
  links: SocialLink[];
}

interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

interface FooterLinks {
  title: string;
  links: NavLink[];
}

interface NavLink {
  label: string;
  href: string;
}

interface FooterContact {
  phone: {
    label: string;
    number: string;
    href: string;
  };
  email: {
    label: string;
    address: string;
    href: string;
  };
}

interface FooterNewsletter {
  title: string;
  inputPlaceholder: string;
  buttonLabel: string;
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
  social: {
    links: [
      { platform: "Facebook", icon: "facebook-icon", href: "https://facebook.com" },
      { platform: "Twitter", icon: "twitter-icon", href: "https://twitter.com" },
      { platform: "Instagram", icon: "instagram-icon", href: "https://instagram.com" },
      { platform: "LinkedIn", icon: "linkedin-icon", href: "https://linkedin.com" }
    ]
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
  contact: {
    phone: {
      label: "Total Free Customer Care",
      number: "+(0) 123 050 945 02",
      href: "tel:+012305094502"
    },
    email: {
      label: "Need Live Support?",
      address: "hi@homez.com",
      href: "mailto:hi@homez.com"
    }
  },
  newsletter: {
    title: "Keep Yourself Up to Date",
    inputPlaceholder: "Your Email",
    buttonLabel: "Subscribe"
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
│   ├── NavItem (Property)
│   ├── NavItem (Blog)
│   └── NavItem (Pages)
├── LoginButton
├── AddPropertyButton
└── HamburgerMenu
```

### 2. Map Hero Components

```
MapHeroSection/
├── MapContainer
│   ├── MapControls
│   │   ├── KeyboardShortcuts
│   │   ├── ZoomIn
│   │   ├── ZoomOut
│   │   └── OpenInGoogleMaps
│   └── MapMarkers[]
└── SearchFormOverlay
    ├── TabList
    │   ├── Tab (Buy)
    │   ├── Tab (Rent)
    │   └── Tab (Sold)
    ├── SearchInput
    ├── PropertyTypeDropdown
    ├── LocationDropdown
    ├── PriceDropdown
    ├── AdvancedButton
    └── SearchButton
```

### 3. Services Components

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

### 4. Featured Listings Components

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
        ├── StatusBadge
        └── ActionButtons
```

### 5. Why Choose Us Components

```
WhyChooseUsSection/
├── ImageColumn
│   ├── Image
│   └── TotalRentBadge
├── ContentColumn
│   ├── Title (h2)
│   ├── Description (p)
│   └── ServiceHighlights[]
│       ├── Icon
│       ├── Title (h6)
│       └── Description (p)
└── StatisticsRow
    └── StatisticCard[]
        ├── Value
        ├── Unit
        └── Label
```

### 6. Cities Components

```
CitiesSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── SeeAllLink
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── CitiesCarousel
    └── CityCard[]
        ├── Image
        ├── Name (h6)
        └── PropertyCount (p)
```

### 7. Property Types Components

```
PropertyTypesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── TypesCarousel
    └── TypeCard[]
        ├── Icon
        ├── Name (h6)
        └── PropertyCount (p)
```

### 8. Testimonials Components

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

### 9. Property Slider Components

```
PropertySliderSection/
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── PropertySlides
    └── PropertySlide[]
        ├── Price (h1)
        ├── Title (h3)
        ├── Specs (p)
        └── ViewDetailsLink
```

### 10. Agents Components

```
AgentsSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── AgentsCarousel
    └── AgentCard[]
        ├── Image
        ├── Name (h6)
        └── Title (p)
```

### 11. Blog Components

```
BlogSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
└── BlogPostsGrid
    └── BlogCard[]
        ├── Image
        ├── DateBadge
        ├── Category (link)
        └── Title (h6)
```

### 12. Footer Components

```
Footer/
├── FooterTop
│   ├── SocialLinks
│   ├── PopularSearchColumn
│   ├── QuickLinksColumn
│   └── DiscoverColumn
├── FooterMain
│   ├── ContactColumn
│   ├── NewsletterColumn
│   └── AppsColumn
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
| Nav Items | Hover | Show dropdown menu |
| Nav Items | Click | Navigate to page |
| Login Button | Click | Open login modal |
| Add Property | Click | Navigate to add property |

### 2. Map Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Map | Pan | Move map view |
| Map | Pinch/Scroll | Zoom in/out |
| Map Markers | Click | Show property info |
| Zoom Controls | Click | Zoom in/out |
| Open in Google Maps | Click | Open location in Google Maps |

### 3. Search Form Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Buy/Rent/Sold Tabs | Click | Switch search mode |
| Search Input | Focus | Highlight input |
| Search Input | Type | Filter suggestions |
| Dropdowns | Click | Open dropdown options |
| Advanced Button | Click | Open advanced search |
| Search Button | Click | Execute search |

### 4. Carousel Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Prev/Next Buttons | Click | Navigate carousel |

### 5. Property Card Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Card | Hover | Show shadow/elevation |
| Title | Click | Navigate to property detail |
| Favorite Button | Click | Toggle favorite |
| Share Button | Click | Open share options |
| Compare Button | Click | Add to comparison |

### 6. Footer Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| All Links | Click | Navigate to page |
| Social Icons | Click | Open social media |
| Newsletter Form | Submit | Subscribe email |

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column layout |
| Tablet | 768px - 1024px | Two column layout |
| Desktop | > 1024px | Full layout |

### Map Hero Responsive Behavior

```
Desktop:
- Full map with search overlay
- All form fields visible

Tablet:
- Condensed search form
- Fewer form fields visible

Mobile:
- Collapsed search form
- Expand on tap
```

### Property Cards Responsive Behavior

```
Desktop:
- 4 cards per row

Tablet:
- 2-3 cards per row

Mobile:
- 1-2 cards per row
```

### Footer Responsive Behavior

```
Desktop:
- Multi-column layout
- All sections visible

Mobile:
- Single column
- Accordion-style sections
```

---

## Image Assets

### Map Hero
- Map markers
- Map controls icons

### Properties
- Property listing images (multiple)
- Featured badge overlay

### Why Choose Us
- Why choose image
- Service icons

### Cities
- City images (6)

### Property Types
- Category icons (7)

### Testimonials
- Author avatars (multiple)

### Blog
- Blog post images (3)

### Footer
- App store badges (2)
- Social media icons (4)

---

## CSS Classes (Estimated)

```css
/* Map Hero */
.map-hero-section
.map-container
.map-controls
.map-marker
.search-form-overlay
.search-tabs
.search-input
.search-dropdown
.search-button

/* Services */
.services-section
.service-card
.service-icon
.service-title
.service-link

/* Featured Listings */
.featured-listings-section
.property-card
.property-image
.property-badge
.property-price
.property-title
.property-specs
.property-action-buttons

/* Why Choose Us */
.why-choose-section
.total-rent-badge
.service-highlight
.statistic-card

/* Cities */
.cities-section
.city-card
.city-image
.city-name
.city-count

/* Property Types */
.property-types-section
.type-card
.type-icon
.type-name

/* Testimonials */
.testimonials-section
.testimonial-card
.testimonial-quote
.testimonial-rating
.testimonial-author

/* Property Slider */
.property-slider-section
.property-slide
.property-price
.property-title
.view-details-link

/* Agents */
.agents-section
.agent-card
.agent-image
.agent-name
.agent-title

/* Blog */
.blog-section
.blog-card
.blog-image
.blog-date
.blog-category
.blog-title

/* Footer */
.footer
.footer-column
.footer-title
.footer-links
.footer-newsletter
```

---

## Data Flow Summary

1. **Static Data**: Navigation, footer links, service descriptions
2. **Dynamic Data**: Properties, cities, agents, testimonials, blog posts
3. **User Input**: Map interactions, search filters, newsletter
4. **API Endpoints** (suggested):
   - `GET /api/properties/featured` - Featured listings
   - `GET /api/properties/map` - Map markers with property data
   - `GET /api/cities` - City list
   - `GET /api/agents` - Agent profiles
   - `GET /api/testimonials` - Customer reviews
   - `GET /api/blog/posts` - Blog posts
   - `POST /api/search` - Search with filters
   - `POST /api/newsletter/subscribe` - Newsletter subscription

---

## Map Integration Details

### Google Maps Configuration

```typescript
interface GoogleMapsConfig {
  apiKey: string;
  defaultCenter: { lat: number; lng: number };
  defaultZoom: number;
  mapTypeId: string;
  styles: MapStyle[];
  markers: MapMarker[];
  infoWindows: InfoWindow[];
}

interface MapMarker {
  id: string;
  position: { lat: number; lng: number };
  label?: string | MarkerLabel;
  icon?: string | MarkerIcon;
  title?: string;
  draggable?: boolean;
}

interface InfoWindow {
  content: string;
  position: { lat: number; lng: number };
  pixelOffset?: { width: number; height: number };
}
```

### Map Events

```typescript
interface MapEvents {
  onBoundsChanged: () => void;
  onCenterChanged: () => void;
  onZoomChanged: () => void;
  onMarkerClick: (marker: MapMarker) => void;
  onMarkerHover: (marker: MapMarker) => void;
}
```

---

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy, semantic elements
2. **ARIA Labels**: For map, dropdowns, and interactive elements
3. **Keyboard Navigation**: All interactive elements accessible
4. **Focus States**: Visible focus indicators
5. **Color Contrast**: Sufficient contrast ratios
6. **Alt Text**: Descriptive alt text for images
7. **Map Accessibility**: Keyboard shortcuts for map navigation

---

## Performance Considerations

1. **Map Optimization**: Lazy load Google Maps API
2. **Image Optimization**: Lazy loading for below-fold images
3. **Carousel Performance**: Efficient slide transitions
4. **Code Splitting**: Component-level splitting
5. **Caching Strategy**: API response caching
6. **Debounced Search**: Debounce search input for performance

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
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@react-google-maps/api": "^2.18.0"
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

- Google Maps hero with interactive markers
- Map controls (keyboard shortcuts, zoom, open in Google Maps)
- Multi-field search overlay on map
- Why Choose Us with statistics
- Property slider with featured details
- Blog section
- Map-centric property discovery

---

*Documentation generated for Home v10 - Homez Real Estate NextJS Template*


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

**Total AOS Animations:** 17

**Animation Types:** fade-up: 15, fade-left: 1, fade-right: 1

**Delays Used:** 0, 100, 200, 300, 400ms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 15 elements
data-aos="fade-left"  // 1 elements
data-aos="fade-right" // 1 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 138 |
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

### Map Hero Section Animations

```javascript
// Map hero animations
const mapHeroTL = gsap.timeline();

mapHeroTL
  .from('.search-form-overlay', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.search-tabs', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.search-input', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3');

// Map marker pulse animation
gsap.to('.map-marker', {
  scale: 1.2,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});
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

### Why Choose Us Section Animations

```javascript
// Why choose us image reveal
gsap.from('.why-choose-image', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 75%',
  },
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  ease: 'power2.out'
});

// Stats badge animation
gsap.from('.stats-badge', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0,
  duration: 0.5,
  ease: 'back.out(1.7)'
});

// Service features stagger
gsap.from('.service-feature', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.5,
  ease: 'power2.out'
});
```

### Cities Section Animations

```javascript
// City cards carousel entrance
gsap.from('.city-card', {
  scrollTrigger: {
    trigger: '.cities-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out'
});
```

### Testimonials Section Animations

```javascript
// Testimonials entrance
gsap.from('.testimonial-card', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 75%',
  },
  opacity: 0,
  x: 50,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Property Slider Section Animations

```javascript
// Property slider entrance
gsap.from('.property-slider-card', {
  scrollTrigger: {
    trigger: '.property-slider-section',
    start: 'top 75%',
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power2.out'
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
    // Map hero animation
    const mapHeroTL = gsap.timeline();
    mapHeroTL
      .from('.search-form-overlay', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.search-tabs', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.search-input', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

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

    // Why choose us
    gsap.from('.service-feature', {
      scrollTrigger: {
        trigger: '.why-choose-section',
        start: 'top 75%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Cities
    gsap.from('.city-card', {
      scrollTrigger: {
        trigger: '.cities-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    });

    // Testimonials
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 75%',
      },
      opacity: 0,
      x: 50,
      stagger: 0.15,
      duration: 0.6,
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

**Total Emotion Blocks:** 90

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
