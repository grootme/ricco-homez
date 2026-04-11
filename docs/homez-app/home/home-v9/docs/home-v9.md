# Home v9 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v9
- **Page Title:** Home v9 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v9 is a feature-rich real estate landing page that showcases properties through a hero slider, property categories, featured listings, and membership plans. This variant introduces a unique hero section with property carousel, testimonials with tab navigation, and a comprehensive pricing section. The page is designed to convert visitors into members while showcasing available properties and services.

---

## Layout Structure

### Overall Layout Architecture

The page follows a vertical scrolling layout with distinct sections:

1. **Fixed Header/Navigation** - Persistent top navigation with logo, menu items, phone number, login button, and add property CTA
2. **Hero Slider Section** - Full-width property carousel with featured property details
3. **Property Types Section** - Horizontal grid of property categories
4. **Featured Listings Section** - Property card carousel
5. **Selling Options Section** - Four-column service highlights
6. **Cities Section** - Grid of city cards with property counts
7. **Agents Section** - Team member showcase with decorative elements
8. **Selling Option CTA** - Features list with see more link
9. **Services Section** - Three-column layout for Buy/Sell/Rent
10. **Testimonials Section** - Tabbed testimonial carousel
11. **Membership Plans Section** - Pricing table with three tiers
12. **Trust Badges Section** - Logo carousel of partner brands
13. **CTA Section** - Become an agent call-to-action
14. **Footer** - Multi-column layout with contact info, newsletter, and navigation

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
  phoneLink: {
    icon: string;
    number: string;
    href: string;
  };
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
  phoneLink: {
    icon: "phone-icon",
    number: "2 911 098 7654",
    href: "tel:29110987654"
  },
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

### 2. Hero Slider Section Data

```typescript
interface HeroSlide {
  id: string;
  title: string;
  description: string;
  viewDetailsLink: {
    label: string;
    href: string;
    icon: string;
  };
  property: PropertyPreview;
}

interface PropertyPreview {
  price: number;
  priceUnit: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  status: string;
  actions: PropertyAction[];
}

interface PropertyAction {
  type: "favorite" | "share" | "compare";
  icon: string;
  href: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Equestrian Family Home",
    description: "From as low as $10 per day with limited time offer discounts.",
    viewDetailsLink: {
      label: "View Details",
      href: "/property/equestrian-family-home",
      icon: "arrow-right"
    },
    property: {
      price: 14000,
      priceUnit: "/ mo",
      title: "Equestrian Family Home",
      location: "New York City, CA, USA",
      beds: 1,
      baths: 2,
      sqft: 1200,
      status: "For Rent",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    }
  },
  {
    id: "slide-2",
    title: "Villa on Hollywood Boulevard",
    description: "From as low as $10 per day with limited time offer discounts.",
    viewDetailsLink: {
      label: "View Details",
      href: "/property/villa-hollywood-boulevard",
      icon: "arrow-right"
    },
    property: {
      price: 14000,
      priceUnit: "/ mo",
      title: "Villa on Hollywood Boulevard",
      location: "New York City, CA, USA",
      beds: 1,
      baths: 2,
      sqft: 1200,
      status: "For Rent",
      actions: [
        { type: "favorite", icon: "heart", href: "#" },
        { type: "share", icon: "share", href: "#" },
        { type: "compare", icon: "compare", href: "#" }
      ]
    }
  }
];

interface HeroSliderSection {
  slides: HeroSlide[];
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

const heroSliderSection: HeroSliderSection = {
  slides: heroSlides,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
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
  href: string;
}

const propertyTypes: PropertyType[] = [
  {
    id: "houses",
    name: "Houses",
    icon: "house-icon",
    href: "/properties?type=houses"
  },
  {
    id: "apartments",
    name: "Apartments",
    icon: "apartment-icon",
    href: "/properties?type=apartments"
  },
  {
    id: "office",
    name: "Office",
    icon: "office-icon",
    href: "/properties?type=office"
  },
  {
    id: "villa",
    name: "Villa",
    icon: "villa-icon",
    href: "/properties?type=villa"
  },
  {
    id: "townhome",
    name: "Townhome",
    icon: "townhome-icon",
    href: "/properties?type=townhome"
  },
  {
    id: "bungalow",
    name: "Bungalow",
    icon: "bungalow-icon",
    href: "/properties?type=bungalow"
  },
  {
    id: "loft",
    name: "Loft",
    icon: "loft-icon",
    href: "/properties?type=loft"
  }
];

interface PropertyTypesSection {
  title: string;
  description: string;
  seeAllLink: {
    label: string;
    href: string;
    icon: string;
  };
  items: PropertyType[];
}

const propertyTypesSection: PropertyTypesSection = {
  title: "Explore Apartment Types",
  description: "Get some Inspirations from 1800+ skills",
  seeAllLink: {
    label: "See All Categories",
    href: "/categories",
    icon: "arrow-right"
  },
  items: propertyTypes
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
  items: PropertyCard[];
  carouselControls: CarouselControls;
}

const featuredListingsSection: FeaturedListingsSection = {
  title: "Discover Our Featured Listings",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: featuredListings,
  carouselControls: {
    prevButton: { icon: "chevron-left", disabled: true },
    nextButton: { icon: "chevron-right", disabled: false }
  }
};
```

---

### 5. Selling Options Section Data

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
    description: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique."
  },
  {
    id: "mortgage-services",
    icon: "/icons/mortgage.svg",
    title: "Mortgage Services",
    description: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique."
  },
  {
    id: "currency-services",
    icon: "/icons/currency.svg",
    title: "Currency Services",
    description: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique."
  },
  {
    id: "mortgage-services-2",
    icon: "/icons/mortgage.svg",
    title: "Mortgage Services",
    description: "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique."
  }
];

interface SellingOptionsSection {
  title: string;
  description: string;
  items: SellingOption[];
}

const sellingOptionsSection: SellingOptionsSection = {
  title: "Let's find the right selling option for you",
  description: "Aliquam lacinia diam quis lacus euismod",
  items: sellingOptions
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
    propertyCount: 15,
    image: "/images/cities/manhattan.jpg",
    href: "/properties?city=manhattan"
  },
  {
    id: "san-diego",
    name: "San Diego",
    propertyCount: 21,
    image: "/images/cities/san-diego.jpg",
    href: "/properties?city=san-diego"
  },
  {
    id: "san-francisco",
    name: "San Francisco",
    propertyCount: 11,
    image: "/images/cities/san-francisco.jpg",
    href: "/properties?city=san-francisco"
  },
  {
    id: "san-diego-2",
    name: "San Diego",
    propertyCount: 12,
    image: "/images/cities/san-diego-2.jpg",
    href: "/properties?city=san-diego"
  },
  {
    id: "san-diego-3",
    name: "San Diego",
    propertyCount: 12,
    image: "/images/cities/san-diego-3.jpg",
    href: "/properties?city=san-diego"
  },
  {
    id: "san-diego-4",
    name: "San Diego",
    propertyCount: 14,
    image: "/images/cities/san-diego-4.jpg",
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
}

const citiesSection: CitiesSection = {
  title: "Properties by Cities",
  description: "Aliquam lacinia diam quis lacus euismod",
  seeAllLink: {
    label: "See All Cities",
    href: "/cities",
    icon: "arrow-right"
  },
  items: cities
};
```

---

### 7. Agents Section Data

```typescript
interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
}

const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Marvin McKinney",
    title: "Designer",
    image: "/images/agents/marvin-mckinney.jpg"
  },
  {
    id: "agent-2",
    name: "Ralph Edwards",
    title: "Designer",
    image: "/images/agents/ralph-edwards.jpg"
  },
  {
    id: "agent-3",
    name: "Annette Black",
    title: "Designer",
    image: "/images/agents/annette-black.jpg"
  },
  {
    id: "agent-4",
    name: "Jane Cooper",
    title: "Designer",
    image: "/images/agents/jane-cooper.jpg"
  },
  {
    id: "agent-5",
    name: "Marvin McKinney",
    title: "Designer",
    image: "/images/agents/marvin-mckinney-2.jpg"
  }
];

interface AgentsSection {
  title: string;
  items: Agent[];
  decorativeElements: string[];
}

const agentsSection: AgentsSection = {
  title: "4+ Exclusive Agents",
  items: agents,
  decorativeElements: [
    "/images/shapes/shape-1.png",
    "/images/shapes/shape-2.png",
    "/images/shapes/shape-3.png",
    "/images/shapes/shape-4.png",
    "/images/shapes/shape-5.png"
  ]
};
```

---

### 8. Selling Option CTA Data

```typescript
interface SellingOptionCTA {
  title: string;
  description: string;
  features: string[];
  seeMoreLink: {
    label: string;
    href: string;
    icon: string;
  };
}

const sellingOptionCTA: SellingOptionCTA = {
  title: "Let's find the right selling option for you",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  features: [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property"
  ],
  seeMoreLink: {
    label: "See More",
    href: "/selling-options",
    icon: "arrow-right"
  }
};
```

---

### 9. Services Section Data

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

### 10. Testimonials Section Data

```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
    author: "Ella Johnson",
    title: "UX Designer, Google"
  }
  // Additional testimonials referenced by tab indicators
];

interface TestimonialsSection {
  title: string;
  description: string;
  items: Testimonial[];
  activeIndex: number;
  totalTabs: number;
}

const testimonialsSection: TestimonialsSection = {
  title: "Testimonials",
  description: "10,000+ unique online course list designs",
  items: testimonials,
  activeIndex: 2, // Middle tab is selected
  totalTabs: 5
};
```

---

### 11. Membership Plans Section Data

```typescript
interface MembershipPlan {
  id: string;
  name: string;
  price: number | "Free";
  priceUnit: string;
  description: string;
  icon: string;
  features: string[];
  joinLink: {
    label: string;
    href: string;
    icon: string;
  };
}

const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    priceUnit: "per month",
    description: "Standard listing submission, active for 30 days",
    icon: "/icons/basic-plan.svg",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support"
    ],
    joinLink: {
      label: "Join",
      href: "/membership/basic",
      icon: "arrow-right"
    }
  },
  {
    id: "professional",
    name: "Professional",
    price: 199.95,
    priceUnit: "per month",
    description: "Standard listing submission, active for 30 days",
    icon: "/icons/pro-plan.svg",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support"
    ],
    joinLink: {
      label: "Join",
      href: "/membership/professional",
      icon: "arrow-right"
    }
  },
  {
    id: "business",
    name: "Business",
    price: 399.95,
    priceUnit: "per month",
    description: "Standard listing submission, active for 30 days",
    icon: "/icons/business-plan.svg",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support"
    ],
    joinLink: {
      label: "Join",
      href: "/membership/business",
      icon: "arrow-right"
    }
  }
];

interface MembershipPlansSection {
  title: string;
  description: string;
  billingOptions: {
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
  };
  isYearlySelected: boolean;
  items: MembershipPlan[];
}

const membershipPlansSection: MembershipPlansSection = {
  title: "Membership Plans",
  description: "Lorem ipsum dolor sit amet, consectetur.",
  billingOptions: {
    monthly: "Billed Monthly",
    yearly: "Billed Yearly",
    yearlyDiscount: "Save 20%"
  },
  isYearlySelected: false,
  items: membershipPlans
};
```

---

### 12. Trust Badges Section Data

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
    { src: "/images/brands/1.png", alt: "Brand 1" },
    { src: "/images/brands/2.png", alt: "Brand 2" },
    { src: "/images/brands/3.png", alt: "Brand 3" },
    { src: "/images/brands/4.png", alt: "Brand 4" },
    { src: "/images/brands/5.png", alt: "Brand 5" },
    { src: "/images/brands/6.png", alt: "Brand 6" }
  ]
};
```

---

### 13. CTA Section Data

```typescript
interface CTASection {
  title: string;
  description: string;
  registerLink: {
    label: string;
    href: string;
    icon: string;
  };
  image: string;
}

const ctaSection: CTASection = {
  title: "Become a Real Estate Agent",
  description: "We only work with the best companies around the globe to survey",
  registerLink: {
    label: "Register Now",
    href: "/register",
    icon: "arrow-right"
  },
  image: "/images/cta-member.png"
};
```

---

### 14. Footer Section Data

```typescript
interface FooterSection {
  logo: string;
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
  followLabel: string;
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
  logo: "/images/logo-footer.png",
  social: {
    followLabel: "Follow us",
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
├── PhoneLink
├── LoginButton
├── AddPropertyButton
└── HamburgerMenu
```

### 2. Hero Slider Components

```
HeroSliderSection/
├── CarouselControls
│   ├── PrevButton
│   └── NextButton
└── SlideContent
    ├── Title (h3)
    ├── Description (p)
    ├── ViewDetailsLink
    └── PropertyPreview
        ├── Price
        ├── Title (h6)
        ├── Location (p)
        ├── PropertySpecs
        ├── StatusBadge
        └── ActionButtons
```

### 3. Property Types Components

```
PropertyTypesSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── SeeAllLink
└── TypesGrid
    └── TypeCard[]
        ├── Icon
        └── Name (h6)
```

### 4. Featured Listings Components

```
FeaturedListingsSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
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

### 5. Selling Options Components

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

### 6. Cities Components

```
CitiesSection/
├── SectionHeader
│   ├── Title (h2)
│   ├── Description (p)
│   └── SeeAllLink
└── CitiesGrid
    └── CityCard[]
        ├── Image
        ├── Name (h6)
        └── PropertyCount (p)
```

### 7. Agents Components

```
AgentsSection/
├── Title (h4)
├── AgentsGrid
│   └── AgentCard[]
│       ├── Image
│       ├── Name (h6)
│       └── Title (p)
└── DecorativeShapes[]
```

### 8. Selling Option CTA Components

```
SellingOptionCTA/
├── Title (h2)
├── Description (p)
├── FeaturesList
│   └── FeatureItem[]
└── SeeMoreLink
```

### 9. Services Components

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

### 10. Testimonials Components

```
TestimonialsSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── TestimonialContent
│   ├── QuoteIcon
│   ├── Quote (h4)
│   ├── Author (h6)
│   └── AuthorTitle (p)
└── TabNavigation
    └── TabButton[]
```

### 11. Membership Plans Components

```
MembershipPlansSection/
├── SectionHeader
│   ├── Title (h2)
│   └── Description (p)
├── BillingToggle
│   ├── MonthlyLabel
│   ├── YearlyCheckbox
│   └── YearlyLabel
└── PlansGrid
    └── PlanCard[]
        ├── PlanName (h4)
        ├── Price (h1)
        ├── PriceUnit (p)
        ├── PlanIcon
        ├── Description (p)
        ├── FeaturesList
        │   └── FeatureItem[]
        └── JoinLink
```

### 12. Trust Badges Components

```
TrustBadgesSection/
├── Title (h6)
└── LogoCarousel
    └── LogoImage[]
```

### 13. CTA Components

```
CTASection/
├── Content
│   ├── Title (h2)
│   ├── Description (p)
│   └── RegisterLink
└── CTAImage
```

### 14. Footer Components

```
Footer/
├── FooterTop
│   ├── Logo
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
| Phone Link | Click | Initiate phone call |
| Login Button | Click | Open login modal |
| Add Property | Click | Navigate to add property |

### 2. Hero Slider Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Prev/Next Buttons | Click | Navigate between slides |
| View Details | Click | Navigate to property page |
| Property Actions | Click | Favorite/share/compare |

### 3. Property Type Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Type Cards | Click | Navigate to filtered property list |
| See All Categories | Click | Navigate to categories page |

### 4. Carousel Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Prev/Next Buttons | Click | Navigate carousel |

### 5. Testimonials Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Tab Buttons | Click | Switch between testimonials |

### 6. Membership Plans Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Billing Toggle | Click | Switch between monthly/yearly pricing |
| Join Links | Click | Navigate to registration for plan |

### 7. Footer Interactions

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

### Hero Slider Responsive Behavior

```
Desktop:
- Full slide with property details
- Carousel navigation arrows

Mobile:
- Condensed slide content
- Touch swipe enabled
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

### Cities Grid Responsive Behavior

```
Desktop:
- 8 cities in 4-column grid

Mobile:
- 2 cities per row
- Horizontal scroll
```

### Membership Plans Responsive Behavior

```
Desktop:
- 3 plans in horizontal row

Mobile:
- Single plan visible
- Vertical stack
```

---

## Image Assets

### Hero
- Property slide images (2)

### Property Types
- Category icons (7)

### Properties
- Property listing images (multiple)
- Featured badge overlay

### Cities
- City images (8)

### Agents
- Agent photos (5)
- Decorative shape images (5)

### Membership
- Plan icons (3)

### Trust Badges
- Brand logos (6)

### CTA
- CTA member image

### Footer
- Logo
- App store badges (2)
- Social media icons (4)

---

## CSS Classes (Estimated)

```css
/* Hero Slider */
.hero-slider-section
.hero-slide
.slide-title
.slide-description
.slide-property-preview
.carousel-controls

/* Property Types */
.property-types-section
.type-card
.type-icon
.type-name

/* Featured Listings */
.featured-listings-section
.property-card
.property-image
.property-badge
.property-price
.property-title
.property-specs
.property-action-buttons

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

/* Agents */
.agents-section
.agent-card
.agent-image
.agent-name
.agent-title
.decorative-shapes

/* Services */
.services-section
.service-card
.service-icon
.service-title
.service-link

/* Testimonials */
.testimonials-section
.testimonial-content
.testimonial-quote
.testimonial-author
.tab-navigation

/* Membership Plans */
.membership-plans-section
.billing-toggle
.plan-card
.plan-name
.plan-price
.plan-features
.join-link

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
2. **Dynamic Data**: Properties, cities, agents, testimonials
3. **User Input**: Newsletter subscription, membership selection
4. **API Endpoints** (suggested):
   - `GET /api/properties/featured` - Featured listings
   - `GET /api/properties/slider` - Hero slider properties
   - `GET /api/cities` - City list
   - `GET /api/agents` - Agent profiles
   - `GET /api/testimonials` - Customer testimonials
   - `GET /api/membership-plans` - Pricing plans
   - `POST /api/newsletter/subscribe` - Newsletter subscription

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

### Hero Slider Section Animations

```javascript
// Hero slider animations
const heroTL = gsap.timeline();

heroTL
  .from('.hero-slide', { 
    opacity: 0, 
    scale: 0.95, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-slide-title', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.property-preview-card', { 
    opacity: 0, 
    x: 50, 
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
```

### Membership Plans Section Animations

```javascript
// Membership plans reveal
gsap.from('.membership-plan-card', {
  scrollTrigger: {
    trigger: '.membership-plans-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 50,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power3.out'
});
```

### Testimonials Section Animations

```javascript
// Testimonials entrance
gsap.from('.testimonial-content', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 75%',
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power2.out'
});
```

### CTA Section Animations

```javascript
// CTA reveal
gsap.from('.cta-content', {
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 70%',
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
    // Hero slider animation
    const heroTL = gsap.timeline();
    heroTL
      .from('.hero-slide', { opacity: 0, scale: 0.95, duration: 0.8, ease: 'power3.out' })
      .from('.hero-slide-title', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4');

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

    // Membership plans
    gsap.from('.membership-plan-card', {
      scrollTrigger: {
        trigger: '.membership-plans-section',
        start: 'top 75%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power3.out'
    });

    // CTA
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
      },
      opacity: 0,
      scale: 0.95,
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

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy, semantic elements
2. **ARIA Labels**: For carousels, tabs, and interactive elements
3. **Keyboard Navigation**: All interactive elements accessible
4. **Focus States**: Visible focus indicators
5. **Color Contrast**: Sufficient contrast ratios
6. **Alt Text**: Descriptive alt text for images
7. **Tab Navigation**: Proper ARIA roles for tabbed content

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
| > 1200px | 4 columns | Full horizontal + phone |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Hero property slider with preview card
- Four-column selling options section
- Decorative elements in agents section
- Tabbed testimonials navigation
- Membership plans with billing toggle
- CTA section with member image
- Phone number in header

---

## Performance Considerations

1. **Image Optimization**: Lazy loading for below-fold images
2. **Carousel Performance**: Efficient slide transitions
3. **Code Splitting**: Component-level splitting
4. **Caching Strategy**: API response caching
5. **Preloading**: Preload hero slide images

---

*Documentation generated for Home v9 - Homez Real Estate NextJS Template*


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

**Total AOS Animations:** 19

**Animation Types:** fade-up: 16, fade-left: 1, fade-right: 1, fade: 1

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
data-aos="fade-up"    // 16 elements
data-aos="fade-left"  // 1 elements
data-aos="fade-right" // 1 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 113 |
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

**Total Emotion Blocks:** 10

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
