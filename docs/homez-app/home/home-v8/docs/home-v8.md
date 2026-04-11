# Home v8 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v8
- **Page Title:** Home v8 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v8 is a comprehensive real estate landing page that combines property search, featured listings, agent showcases, and location-based browsing. The page features a modern hero section with multi-field search, property category carousels, city exploration, service highlights, agent profiles, blog previews, and an integrated Google Maps contact section. This variant emphasizes a balanced approach to showcasing both properties and the real estate team.

---

## Layout Structure

### Overall Layout Architecture

The page follows a vertical scrolling layout with distinct sections:

1. **Fixed Header/Navigation** - Persistent top navigation with logo, menu items, login button, and add property CTA
2. **Hero Section** - Full-width banner with search form and property type/location dropdowns
3. **Trust Badges** - Horizontal logo carousel of partner brands
4. **Featured Listings Section** - Property card carousel with horizontal navigation
5. **Featured Homes Section** - Carousel of property type categories
6. **Selling Options Section** - Services highlight (Property Management, Mortgage, Currency)
7. **Cities Section** - Horizontal carousel of city cards
8. **Services Section** - Three-column layout for Buy/Sell/Rent
9. **Featured Properties with Contact** - Property cards with embedded contact information
10. **Agents Section** - Horizontal carousel of agent profiles
11. **Blog Section** - Three-column blog post preview
12. **Contact Section** - Google Maps iframe with contact form
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
}

const heroContent: HeroContent = {
  subtitle: "THE BEST WAY TO",
  title: "Find your happy",
  description: "Search properties for sale and to rent in the UK"
};
```

#### Search Form Data
```typescript
interface SearchForm {
  tabs: SearchTab[];
  propertyTypeDropdown: DropdownConfig;
  priceDropdown: DropdownConfig;
  locationDropdown: DropdownConfig;
  advancedButton: ButtonConfig;
  searchButton: ButtonConfig;
}

interface SearchTab {
  label: string;
  value: string;
  isActive: boolean;
}

interface DropdownConfig {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  required: boolean;
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

const searchForm: SearchForm = {
  tabs: [
    { label: "Buy", value: "buy", isActive: true },
    { label: "Rent", value: "rent", isActive: false },
    { label: "Sold", value: "sold", isActive: false }
  ],
  propertyTypeDropdown: {
    label: "Apartments",
    placeholder: "Select property type",
    options: [
      { value: "apartments", label: "Apartments" },
      { value: "houses", label: "Houses" },
      { value: "villa", label: "Villa" },
      { value: "office", label: "Office" },
      { value: "townhome", label: "Townhome" }
    ],
    required: true
  },
  priceDropdown: {
    label: "Price",
    placeholder: "Select price range",
    options: [
      { value: "0-50000", label: "$0 - $50,000" },
      { value: "50000-100000", label: "$50,000 - $100,000" },
      { value: "100000-250000", label: "$100,000 - $250,000" },
      { value: "250000-500000", label: "$250,000 - $500,000" },
      { value: "500000+", label: "$500,000+" }
    ],
    required: false
  },
  locationDropdown: {
    label: "California",
    placeholder: "Select location",
    options: [
      { value: "california", label: "California" },
      { value: "new-york", label: "New York" },
      { value: "los-angeles", label: "Los Angeles" },
      { value: "miami", label: "Miami" },
      { value: "chicago", label: "Chicago" }
    ],
    required: true
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

### 3. Trust Badges Section Data

```typescript
interface TrustBadgesSection {
  title: string;
  logos: LogoItem[];
}

interface LogoItem {
  src: string;
  alt: string;
}

const trustBadgesSection: TrustBadgesSection = {
  title: "Trusted by the world's best",
  logos: [
    { src: "/images/brands/7.png", alt: "Brand 7" },
    { src: "/images/brands/8.png", alt: "Brand 8" },
    { src: "/images/brands/9.png", alt: "Brand 9" },
    { src: "/images/brands/10.png", alt: "Brand 10" },
    { src: "/images/brands/11.png", alt: "Brand 11" }
  ]
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
    title: "Luxury villa in Rego Park",
    location: "New York City, CA, USA",
    price: 92000,
    priceUnit: "/ mo",
    beds: 1,
    baths: 1,
    sqft: 1000,
    status: "For Sale",
    isFeatured: true,
    images: ["/images/properties/featured-1.jpg"],
    href: "/property/luxury-villa-rego-park",
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
    beds: 7,
    baths: 6,
    sqft: 1020,
    status: "For Sale",
    isFeatured: true,
    images: ["/images/properties/featured-2.jpg"],
    href: "/property/luxury-villa-rego-park-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "featured-3",
    title: "Luxury villa in Rego Park",
    location: "California City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 8,
    baths: 6,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    images: ["/images/properties/featured-3.jpg"],
    href: "/property/luxury-villa-rego-park-3",
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
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    images: ["/images/properties/featured-4.jpg"],
    href: "/property/luxury-villa-rego-park-4",
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

### 5. Featured Homes Section Data

```typescript
interface PropertyCategory {
  id: string;
  name: string;
  propertyCount: number;
  image: string;
  href: string;
}

const featuredHomes: PropertyCategory[] = [
  {
    id: "apartments-sale",
    name: "Apartments for sale",
    propertyCount: 22,
    image: "/images/homes/apartments.jpg",
    href: "/properties?type=apartments&status=sale"
  },
  {
    id: "single-family",
    name: "Single family homes for sale",
    propertyCount: 22,
    image: "/images/homes/single-family.jpg",
    href: "/properties?type=single-family&status=sale"
  },
  {
    id: "office-sale",
    name: "Office for sale",
    propertyCount: 22,
    image: "/images/homes/office.jpg",
    href: "/properties?type=office&status=sale"
  },
  {
    id: "villas-sale",
    name: "Villas for sale",
    propertyCount: 22,
    image: "/images/homes/villas.jpg",
    href: "/properties?type=villa&status=sale"
  },
  {
    id: "apartments-sale-2",
    name: "Apartments for sale",
    propertyCount: 22,
    image: "/images/homes/apartments-2.jpg",
    href: "/properties?type=apartments&status=sale"
  },
  {
    id: "single-family-2",
    name: "Single family homes for sale",
    propertyCount: 22,
    image: "/images/homes/single-family-2.jpg",
    href: "/properties?type=single-family&status=sale"
  }
];

interface FeaturedHomesSection {
  title: string;
  description: string;
  items: PropertyCategory[];
  carouselControls: CarouselControls;
}

const featuredHomesSection: FeaturedHomesSection = {
  title: "Featured Homes",
  description: "Get some Inspirations from 800+ Properties",
  items: featuredHomes,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 6. Selling Options Section Data

```typescript
interface SellingOption {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const sellingOptions: SellingOption[] = [
  {
    id: "property-management",
    icon: "/icons/property-management.svg",
    title: "Property Management",
    description: "Nullam sollicitudin blandit eros eu pretium."
  },
  {
    id: "mortgage-services",
    icon: "/icons/mortgage.svg",
    title: "Mortgage Services",
    description: "Nullam sollicitudin blandit eros eu pretium."
  },
  {
    id: "currency-services",
    icon: "/icons/currency.svg",
    title: "Currency Services",
    description: "Nullam sollicitudin blandit eros eu pretium."
  }
];

interface SellingOptionsSection {
  title: string;
  description: string;
  items: SellingOption[];
}

const sellingOptionsSection: SellingOptionsSection = {
  title: "Let's Find The Right Selling Option For You",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: sellingOptions
};
```

---

### 7. Cities Section Data

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
    id: "los-angeles",
    name: "Los Angeles",
    propertyCount: 12,
    image: "/images/cities/los-angeles.jpg",
    href: "/properties?city=los-angeles"
  },
  {
    id: "miami",
    name: "Miami",
    propertyCount: 8,
    image: "/images/cities/miami.jpg",
    href: "/properties?city=miami"
  },
  {
    id: "new-york",
    name: "New York",
    propertyCount: 15,
    image: "/images/cities/new-york.jpg",
    href: "/properties?city=new-york"
  },
  {
    id: "chicago",
    name: "Chicago",
    propertyCount: 10,
    image: "/images/cities/chicago.jpg",
    href: "/properties?city=chicago"
  },
  {
    id: "los-angeles-2",
    name: "Los Angeles",
    propertyCount: 12,
    image: "/images/cities/los-angeles-2.jpg",
    href: "/properties?city=los-angeles"
  },
  {
    id: "miami-2",
    name: "Miami",
    propertyCount: 8,
    image: "/images/cities/miami-2.jpg",
    href: "/properties?city=miami"
  }
];

interface CitiesSection {
  title: string;
  description: string;
  ourTeamLink: {
    label: string;
    href: string;
    icon: string;
  };
  items: City[];
}

const citiesSection: CitiesSection = {
  title: "Explore Cities",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  ourTeamLink: {
    label: "Our Team",
    href: "/team",
    icon: "arrow-right"
  },
  items: cities
};
```

---

### 8. Services Section Data

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

### 9. Featured Properties with Contact Data

```typescript
interface PropertyWithContact {
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
  contact: {
    phone: string;
    email: string;
    phoneLabel: string;
    emailLabel: string;
  };
  actions: PropertyAction[];
}

const propertiesWithContact: PropertyWithContact[] = [
  {
    id: "prop-contact-1",
    title: "Comfortable Villa Green",
    location: "California City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 4,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    contact: {
      phone: "+(0) 123 050 945 02",
      email: "hi@homez.com",
      phoneLabel: "Total Free Customer Care",
      emailLabel: "Need Live Support?"
    },
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "prop-contact-2",
    title: "Skyper Pool Apartment",
    location: "California City, CA, USA",
    price: 2800,
    priceUnit: "/ mo",
    beds: 3,
    baths: 4,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    contact: {
      phone: "+(0) 123 050 945 02",
      email: "hi@homez.com",
      phoneLabel: "Total Free Customer Care",
      emailLabel: "Need Live Support?"
    },
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "prop-contact-3",
    title: "Comfortable Villa Green",
    location: "California City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 4,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    contact: {
      phone: "+(0) 123 050 945 02",
      email: "hi@homez.com",
      phoneLabel: "Total Free Customer Care",
      emailLabel: "Need Live Support?"
    },
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "prop-contact-4",
    title: "Skyper Pool Apartment",
    location: "California City, CA, USA",
    price: 2800,
    priceUnit: "/ mo",
    beds: 3,
    baths: 4,
    sqft: 1200,
    status: "For Sale",
    isFeatured: true,
    contact: {
      phone: "+(0) 123 050 945 02",
      email: "hi@homez.com",
      phoneLabel: "Total Free Customer Care",
      emailLabel: "Need Live Support?"
    },
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  }
];

interface PropertiesWithContactSection {
  items: PropertyWithContact[];
  carouselControls: CarouselControls;
}

const propertiesWithContactSection: PropertiesWithContactSection = {
  items: propertiesWithContact,
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
  ourTeamLink: {
    label: string;
    href: string;
    icon: string;
  };
  items: Agent[];
}

const agentsSection: AgentsSection = {
  title: "Our Exclusive Agents",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  ourTeamLink: {
    label: "Our Team",
    href: "/team",
    icon: "arrow-right"
  },
  items: agents
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

### 12. Contact Section Data

```typescript
interface ContactSection {
  mapIframe: {
    src: string;
    title: string;
    width: string;
    height: string;
  };
  form: ContactForm;
}

interface ContactForm {
  title: string;
  description: string;
  fields: FormField[];
  submitButton: {
    label: string;
    icon: string;
  };
}

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required: boolean;
  defaultValue?: string;
}

const contactSection: ContactSection = {
  mapIframe: {
    src: "https://www.google.com/maps/embed?pb=...",
    title: "London Eye, London, United Kingdom",
    width: "100%",
    height: "400"
  },
  form: {
    title: "Get In Touch",
    description: "Aliquam lacinia diam quis lacus euismod",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "First Name",
        required: true,
        defaultValue: "ib"
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
        required: true,
        defaultValue: "themes"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email",
        required: true,
        defaultValue: "ibthemes21@gmail.com"
      },
      {
        name: "message",
        label: "Textarea",
        type: "textarea",
        placeholder: "Your message",
        required: false,
        defaultValue: "There are many variations of passages."
      }
    ],
    submitButton: {
      label: "Submit",
      icon: "arrow-right"
    }
  }
};
```

---

### 13. Footer Section Data

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
└── AddPropertyButton
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
│   ├── PropertyTypeDropdown
│   ├── PriceDropdown
│   ├── LocationDropdown
│   ├── AdvancedButton
│   └── SearchButton
```

### 3. Trust Badges Components

```
TrustBadgesSection/
├── Title (h6)
└── LogoCarousel
    └── LogoImage[]
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
        ├── StatusBadge
        ├── PriceTag
        ├── Title (h6)
        ├── PropertySpecs
        │   ├── Beds
        │   ├── Baths
        │   └── Sqft
        └── ActionButtons
```

### 5. Featured Homes Components

```
FeaturedHomesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── HomesCarousel
    └── HomeCard[]
        ├── Image
        ├── Name (h6)
        └── PropertyCount (p)
```

### 6. Selling Options Components

```
SellingOptionsSection/
├── Title (h2)
├── Description (p)
└── OptionsGrid
    └── OptionCard[]
        ├── Icon
        ├── Title (h4)
        └── Description (p)
```

### 7. Cities Components

```
CitiesSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── OurTeamLink
└── CitiesGrid
    └── CityCard[]
        ├── Image
        ├── Name (h6)
        └── PropertyCount (p)
```

### 8. Services Components

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

### 9. Properties with Contact Components

```
PropertiesWithContactSection/
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── PropertyCardsCarousel
    └── PropertyCardWithContact[]
        ├── Image
        ├── FeaturedBadge
        ├── StatusBadge
        ├── Title (h4)
        ├── Location (p)
        ├── PropertySpecs
        ├── ContactInfo
        │   ├── PhoneLabel
        │   ├── PhoneNumber
        │   ├── EmailLabel
        │   └── Email
        ├── Price (h4)
        └── ActionButtons
```

### 10. Agents Components

```
AgentsSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── OurTeamLink
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

### 12. Contact Components

```
ContactSection/
├── MapIframe
└── ContactForm
    ├── Title (h2)
    ├── Description (p)
    ├── FormFields
    │   ├── FirstNameInput
    │   ├── LastNameInput
    │   ├── EmailInput
    │   └── MessageTextarea
    └── SubmitButton
```

### 13. Footer Components

```
Footer/
├── FooterTop
│   ├── SocialLinks
│   ├── PopularSearchColumn
│   ├── QuickLinksColumn
│   └── DiscoverColumn
├── FooterMain
│   ├── ContactColumn
│   │   ├── Phone
│   │   └── Email
│   ├── NewsletterColumn
│   │   ├── Title
│   │   ├── EmailInput
│   │   └── SubscribeButton
│   └── AppsColumn
│       ├── Title
│       └── AppLinks[]
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
| Nav Items | Click | Navigate to corresponding page |
| Login Button | Click | Open login/register modal |
| Add Property | Click | Navigate to add property page |

### 2. Search Form Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Buy/Rent/Sold Tabs | Click | Switch search mode |
| Property Type Dropdown | Click | Open property type options |
| Price Dropdown | Click | Open price range options |
| Location Dropdown | Click | Open location options |
| Advanced Button | Click | Open advanced search modal |
| Search Button | Click | Execute search |

### 3. Carousel Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Prev/Next Buttons | Click | Navigate carousel |

### 4. Property Card Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Card | Hover | Show shadow/elevation |
| Title | Click | Navigate to property detail |
| Favorite Button | Click | Toggle favorite |
| Share Button | Click | Open share options |
| Compare Button | Click | Add to comparison |

### 5. Contact Form Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Form Fields | Focus | Highlight input |
| Submit Button | Click | Submit form |

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

### Hero Responsive Behavior

```
Desktop:
- Full search form with all dropdowns visible
- Tabs in horizontal row

Mobile:
- Stacked search form
- Dropdowns may be hidden or moved to advanced search
```

### Carousels Responsive Behavior

```
Desktop:
- Multiple cards visible
- Arrow navigation

Mobile:
- 1-2 cards visible
- Touch swipe enabled
```

### Property Cards Responsive Behavior

```
Desktop:
- 4 cards per row in grid
- Full card details

Mobile:
- 1-2 cards per row
- Condensed layout
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

### Hero
- Background image

### Trust Badges
- Brand logos (5+)

### Properties
- Property images (multiple)
- Featured badge overlay

### Featured Homes
- Home category images (6)

### Cities
- City images (6)

### Agents
- Agent photos (7)

### Blog
- Blog post images (3)

### Footer
- App store badges (2)
- Social media icons (4)

---

## CSS Classes (Estimated)

```css
/* Hero */
.hero-section
.hero-content
.hero-title
.hero-subtitle
.hero-description
.search-form
.search-tabs
.search-dropdown
.search-button

/* Trust Badges */
.trust-badges-section
.logo-carousel

/* Featured Listings */
.featured-listings-section
.property-card
.property-image
.property-badge
.property-price
.property-title
.property-specs
.property-action-buttons

/* Featured Homes */
.featured-homes-section
.home-card
.home-image
.home-name
.home-count

/* Selling Options */
.selling-options-section
.option-card
.option-icon
.option-title

/* Cities */
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
.service-link

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

/* Contact */
.contact-section
.map-iframe
.contact-form
.form-field
.submit-button

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
2. **Dynamic Data**: Properties, agents, cities, blog posts
3. **User Input**: Search filters, contact form, newsletter
4. **API Endpoints** (suggested):
   - `GET /api/properties/featured` - Featured listings
   - `GET /api/properties/categories` - Property categories
   - `GET /api/cities` - City list
   - `GET /api/agents` - Agent profiles
   - `GET /api/blog/posts` - Blog posts
   - `POST /api/contact` - Contact form submission
   - `POST /api/newsletter/subscribe` - Newsletter subscription

---

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy, semantic elements
2. **ARIA Labels**: For dropdowns, carousels, and forms
3. **Keyboard Navigation**: All interactive elements accessible
4. **Focus States**: Visible focus indicators
5. **Color Contrast**: Sufficient contrast ratios
6. **Alt Text**: Descriptive alt text for images
7. **Screen Reader Support**: Announcements for dynamic content

---

## Performance Considerations

1. **Image Optimization**: Lazy loading for below-fold images
2. **Carousel Performance**: Virtual scrolling
3. **Map Loading**: Lazy load Google Maps iframe
4. **Code Splitting**: Component-level splitting
5. **Caching Strategy**: API response caching

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
| > 1200px | 3-4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Multi-field hero search (Type, Price, Location)
- Trust badges after hero
- Featured homes carousel with images
- Properties with embedded contact info
- Google Maps iframe with contact form
- Featured listings carousel

---

*Documentation generated for Home v8 - Homez Real Estate NextJS Template*


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

**Total AOS Animations:** 15

**Animation Types:** fade-up: 15

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
data-aos="fade-left"  // 0 elements
data-aos="fade-right" // 0 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 150 |
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
  .from('.hero-search-form', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3');
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

### Featured Homes Section Animations

```javascript
// Featured homes carousel entrance
gsap.from('.featured-home-card', {
  scrollTrigger: {
    trigger: '.featured-homes-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out'
});
```

### Contact Section Animations

```javascript
// Contact section reveal
gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 70%',
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: 'power3.out'
});

// Form fields stagger
gsap.from('.form-field', {
  scrollTrigger: {
    trigger: '.contact-form',
    start: 'top 60%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
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
    // Hero animation
    const heroTL = gsap.timeline();
    heroTL
      .from('.hero-title', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.hero-subtitle', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.hero-search-form', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

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

    // Featured homes
    gsap.from('.featured-home-card', {
      scrollTrigger: {
        trigger: '.featured-homes-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    });

    // Contact form
    gsap.from('.form-field', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 60%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
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

**Theme Button Count:** 5

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
