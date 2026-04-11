# Home v1 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v1-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture including all sections below the fold.

---

## 1. Identification

| Property | Value |
|----------|-------|
| **Name** | Home v1 - Default Homepage |
| **URL** | `https://homez-appdir.vercel.app/` |
| **Route** | `/` |
| **Version** | 1 |
| **Template Type** | Homepage |
| **Page Title** | `Home v1 \|\| Homez - Real Estate NextJS Template` |
| **Framework** | Next.js 14+ (App Router) |
| **Component Path** | `app/page.tsx` |

---

## 2. Page Structure

### Main Sections Order
```
1. Header (nav-homepage-style main-menu)
2. Hero Section with Search Form
3. Featured Properties Grid
4. Property Categories Section
5. Popular Locations Section
6. Featured Agents Section
7. Testimonials Section
8. Blog Preview Section
9. Footer
```

### Layout Configuration

```typescript
interface PageLayout {
  wrapper: {
    className: "wrapper ovh";
  };
  header: {
    className: "header-nav nav-homepage-style main-menu";
    sticky: true;
    transparent: true;
  };
  container: {
    default: "container";
    fluid: "container-fluid";
  };
}
```

---

## 3. Detailed Data Content

### 3.1 Header Navigation Data

```typescript
interface HeaderNavigation {
  logo: {
    light: "/images/header-logo.svg";
    dark: "/images/header-logo2.svg";
    width: 138;
    height: 44;
    alt: "Header Logo";
  };
  menuItems: MenuItem[];
  userActions: UserActions;
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
  isActive: boolean;
  children?: MenuItem[];
}

// Header Menu Structure
const headerMenuData: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#",
    isActive: true,
    children: [
      { id: "home-1", label: "Home v1", href: "/", isActive: true },
      { id: "home-2", label: "Home v2", href: "/home-v2", isActive: false },
      { id: "home-3", label: "Home v3", href: "/home-v3", isActive: false },
      { id: "home-4", label: "Home v4", href: "/home-v4", isActive: false },
      { id: "home-5", label: "Home v5", href: "/home-v5", isActive: false },
      { id: "home-6", label: "Home v6", href: "/home-v6", isActive: false },
      { id: "home-7", label: "Home v7", href: "/home-v7", isActive: false },
      { id: "home-8", label: "Home v8", href: "/home-v8", isActive: false },
      { id: "home-9", label: "Home v9", href: "/home-v9", isActive: false },
      { id: "home-10", label: "Home v10", href: "/home-v10", isActive: false }
    ]
  },
  {
    id: "listing",
    label: "Listing",
    href: "#",
    isActive: false,
    children: [
      // Mega menu with Grid View, Map Style, List View
    ]
  },
  // ... additional menu items
];

interface UserActions {
  login: {
    label: "Login / Register";
    icon: "far fa-user-circle";
    modalTarget: "#loginSignupModal";
  };
  addProperty: {
    label: "Add Property";
    href: "/dashboard-add-property";
    className: "ud-btn add-property menu-btn bdrs60";
    icon: "fal fa-arrow-right-long";
  };
  sidebar: {
    target: "#SidebarPanel";
    icon: "/images/icon/nav-icon-white.svg";
  };
}
```

### 3.2 Hero Section Data

```typescript
interface HeroSection {
  background: {
    type: "image" | "video" | "gradient";
    src: string;
    overlay: boolean;
    overlayOpacity: number; // 0-1
  };
  content: HeroContent;
  searchForm: SearchFormData;
}

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: CTAButton[];
}

interface SearchFormData {
  fields: SearchField[];
  submitButton: {
    label: string;
    icon: string;
    className: string;
  };
}

interface SearchField {
  name: string;
  label: string;
  type: "text" | "select" | "number" | "range";
  placeholder: string;
  options?: SelectOption[];
  required: boolean;
}

// Example Search Form Configuration
const searchFormData: SearchFormData = {
  fields: [
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter city or area",
      required: false
    },
    {
      name: "propertyType",
      label: "Property Type",
      type: "select",
      placeholder: "Select type",
      options: [
        { value: "house", label: "House" },
        { value: "apartment", label: "Apartment" },
        { value: "villa", label: "Villa" },
        { value: "condo", label: "Condo" },
        { value: "townhouse", label: "Townhouse" }
      ],
      required: false
    },
    {
      name: "priceRange",
      label: "Price Range",
      type: "select",
      placeholder: "Select range",
      options: [
        { value: "0-100000", label: "$0 - $100,000" },
        { value: "100000-250000", label: "$100,000 - $250,000" },
        { value: "250000-500000", label: "$250,000 - $500,000" },
        { value: "500000-1000000", label: "$500,000 - $1,000,000" },
        { value: "1000000+", label: "$1,000,000+" }
      ],
      required: false
    },
    {
      name: "bedrooms",
      label: "Bedrooms",
      type: "select",
      placeholder: "Any",
      options: [
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" },
        { value: "5", label: "5+" }
      ],
      required: false
    },
    {
      name: "bathrooms",
      label: "Bathrooms",
      type: "select",
      placeholder: "Any",
      options: [
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" }
      ],
      required: false
    }
  ],
  submitButton: {
    label: "Search",
    icon: "fal fa-search",
    className: "ud-btn btn-thm"
  }
};
```

### 3.3 Property Card Data Structure

```typescript
interface PropertyCard {
  id: string | number;
  images: PropertyImage[];
  status: PropertyStatus;
  price: PriceInfo;
  title: string;
  location: LocationInfo;
  features: PropertyFeatures;
  agent: AgentInfo;
  badges: Badge[];
  isFeatured: boolean;
  isForSale: boolean;
  isForRent: boolean;
  createdAt: string; // ISO date
  slug: string;
}

interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
}

interface PropertyStatus {
  type: "sale" | "rent" | "sold" | "pending";
  label: string;
  className: string;
}

interface PriceInfo {
  amount: number;
  currency: string;
  period?: "month" | "week" | "day"; // For rentals
  formatted: string; // "$1,250,000"
}

interface LocationInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  formatted: string; // "123 Main St, Los Angeles, CA"
}

interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: "sqft" | "sqm" | "acres";
  garage?: number;
  yearBuilt?: number;
  lotSize?: number;
}

interface AgentInfo {
  id: string | number;
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
  rating?: number;
  reviewCount?: number;
}

interface Badge {
  type: "featured" | "new" | "hot" | "reduced" | "open-house";
  label: string;
  className: string;
}

// Example Property Card Data
const examplePropertyCard: PropertyCard = {
  id: 1,
  images: [
    {
      id: "img-1",
      url: "/images/property/property-1.jpg",
      alt: "Modern Villa exterior",
      width: 600,
      height: 400,
      isPrimary: true
    }
  ],
  status: {
    type: "sale",
    label: "For Sale",
    className: "for-sale"
  },
  price: {
    amount: 1250000,
    currency: "USD",
    formatted: "$1,250,000"
  },
  title: "Modern Villa with Pool",
  location: {
    address: "1234 Sunset Blvd",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90028",
    country: "USA",
    formatted: "1234 Sunset Blvd, Los Angeles, CA"
  },
  features: {
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    areaUnit: "sqft",
    garage: 2,
    yearBuilt: 2020
  },
  agent: {
    id: 101,
    name: "John Smith",
    avatar: "/images/agents/agent-1.jpg",
    phone: "+1 (555) 123-4567",
    email: "john@homez.com",
    rating: 4.8,
    reviewCount: 124
  },
  badges: [
    { type: "featured", label: "Featured", className: "badge-featured" }
  ],
  isFeatured: true,
  isForSale: true,
  isForRent: false,
  createdAt: "2024-01-15T10:30:00Z",
  slug: "modern-villa-with-pool-los-angeles-1"
};
```

### 3.4 Categories Section Data

```typescript
interface PropertyCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  count: number;
  href: string;
  description: string;
}

// Categories Data
const categoriesData: PropertyCategory[] = [
  {
    id: "apartments",
    name: "Apartments",
    icon: "flaticon-apartment",
    image: "/images/categories/apartments.jpg",
    count: 245,
    href: "/listing?category=apartments",
    description: "Modern living spaces"
  },
  {
    id: "houses",
    name: "Houses",
    icon: "flaticon-home",
    image: "/images/categories/houses.jpg",
    count: 189,
    href: "/listing?category=houses",
    description: "Single family homes"
  },
  {
    id: "villas",
    name: "Villas",
    icon: "flaticon-villa",
    image: "/images/categories/villas.jpg",
    count: 67,
    href: "/listing?category=villas",
    description: "Luxury properties"
  },
  {
    id: "townhomes",
    name: "Townhomes",
    icon: "flaticon-townhouse",
    image: "/images/categories/townhomes.jpg",
    count: 134,
    href: "/listing?category=townhomes",
    description: "Multi-level living"
  },
  {
    id: "offices",
    name: "Office",
    icon: "flaticon-office",
    image: "/images/categories/offices.jpg",
    count: 89,
    href: "/listing?category=offices",
    description: "Commercial spaces"
  },
  {
    id: "condos",
    name: "Condos",
    icon: "flaticon-condo",
    image: "/images/categories/condos.jpg",
    count: 156,
    href: "/listing?category=condos",
    description: "Condominium units"
  }
];
```

### 3.5 Featured Agents Data

```typescript
interface AgentCard {
  id: string | number;
  name: string;
  avatar: string;
  title: string; // e.g., "Real Estate Agent"
  agency: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  propertyCount: number;
  specializations: string[];
  socialLinks: SocialLink[];
  bio?: string;
}

interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "linkedin";
  url: string;
  icon: string;
}

// Example Agent Data
const featuredAgentsData: AgentCard[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/images/agents/sarah-johnson.jpg",
    title: "Senior Real Estate Agent",
    agency: "Homez Realty",
    phone: "+1 (555) 234-5678",
    email: "sarah@homez.com",
    rating: 4.9,
    reviewCount: 87,
    propertyCount: 45,
    specializations: ["Luxury Homes", "Commercial", "Investment Properties"],
    socialLinks: [
      { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
      { platform: "twitter", url: "#", icon: "fab fa-twitter" },
      { platform: "instagram", url: "#", icon: "fab fa-instagram" }
    ]
  }
  // ... more agents
];
```

### 3.6 Testimonials Data

```typescript
interface Testimonial {
  id: string | number;
  author: {
    name: string;
    avatar: string;
    role: string; // e.g., "Home Buyer"
    location: string;
  };
  rating: number; // 1-5
  content: string;
  date: string;
  propertyPurchased?: string;
}

// Example Testimonials Data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    author: {
      name: "Michael Chen",
      avatar: "/images/testimonials/michael-chen.jpg",
      role: "Home Buyer",
      location: "Los Angeles, CA"
    },
    rating: 5,
    content: "Found my dream home in just 2 weeks! The team was incredibly helpful and professional throughout the entire process.",
    date: "2024-01-10",
    propertyPurchased: "4-bed Villa in Beverly Hills"
  }
  // ... more testimonials
];
```

### 3.7 Blog Preview Data

```typescript
interface BlogPost {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number; // minutes
}

// Example Blog Posts Data
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    slug: "10-tips-first-time-home-buyers",
    excerpt: "Navigate the home buying process with confidence using these essential tips...",
    image: "/images/blog/home-buying-tips.jpg",
    author: {
      name: "Emily Davis",
      avatar: "/images/authors/emily-davis.jpg"
    },
    category: "Buying Guide",
    tags: ["first-time buyer", "tips", "guide"],
    publishedAt: "2024-01-15",
    readTime: 5
  }
  // ... more posts
];
```

---

## 4. UI Components

### 4.1 PropertyCard Component

```typescript
interface PropertyCardProps {
  property: PropertyCard;
  variant?: "default" | "compact" | "horizontal";
  showAgent?: boolean;
  showCompare?: boolean;
  onFavorite?: (id: string | number) => void;
  onCompare?: (id: string | number) => void;
  className?: string;
}

// Usage Example
<PropertyCard
  property={propertyData}
  variant="default"
  showAgent={true}
  showCompare={true}
  onFavorite={(id) => handleFavorite(id)}
  onCompare={(id) => handleCompare(id)}
  className="col-md-4"
/>
```

### 4.2 SearchForm Component

```typescript
interface SearchFormProps {
  fields: SearchField[];
  onSubmit: (data: SearchFormData) => void;
  variant?: "hero" | "inline" | "sidebar";
  showAdvanced?: boolean;
  className?: string;
}

// CSS Classes Used
const searchFormStyles = {
  container: "home1-hero-content",
  form: "advance-style2",
  input: "form-control",
  select: "selectpicker",
  button: "ud-btn btn-thm",
  wrapper: "advance-style2-form"
};
```

### 4.3 AgentCard Component

```typescript
interface AgentCardProps {
  agent: AgentCard;
  variant?: "default" | "compact" | "sidebar";
  showContact?: boolean;
  onContact?: (id: string | number) => void;
  className?: string;
}
```

### 4.4 CategoryCard Component

```typescript
interface CategoryCardProps {
  category: PropertyCategory;
  variant?: "icon" | "image";
  showCount?: boolean;
  className?: string;
}
```

---

## 5. API Endpoints

### 5.1 Properties API

```typescript
// GET /api/properties
interface GetPropertiesRequest {
  page?: number;
  limit?: number;
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  status?: "sale" | "rent";
  featured?: boolean;
}

interface GetPropertiesResponse {
  data: PropertyCard[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// GET /api/properties/featured
interface GetFeaturedPropertiesResponse {
  data: PropertyCard[];
}

// GET /api/properties/:id
interface GetPropertyResponse {
  data: PropertyCard;
}
```

### 5.2 Categories API

```typescript
// GET /api/categories
interface GetCategoriesResponse {
  data: PropertyCategory[];
}
```

### 5.3 Agents API

```typescript
// GET /api/agents
interface GetAgentsRequest {
  page?: number;
  limit?: number;
  specialization?: string;
  featured?: boolean;
}

interface GetAgentsResponse {
  data: AgentCard[];
  pagination: PaginationInfo;
}

// GET /api/agents/featured
interface GetFeaturedAgentsResponse {
  data: AgentCard[];
}
```

### 5.4 Search API

```typescript
// POST /api/search
interface SearchRequest {
  query?: string;
  filters: {
    location?: string;
    propertyType?: string[];
    priceRange?: {
      min: number;
      max: number;
    };
    bedrooms?: number[];
    bathrooms?: number[];
    features?: string[];
  };
  sort?: {
    field: "price" | "date" | "popularity";
    order: "asc" | "desc";
  };
  page?: number;
  limit?: number;
}

interface SearchResponse {
  data: PropertyCard[];
  pagination: PaginationInfo;
  filters: AppliedFilters;
  suggestions?: string[];
}
```

---

## 6. Configuration

### 6.1 Theme Colors

```typescript
interface ThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
  success: string;
  warning: string;
  error: string;
}

// Color Values
const themeColors: ThemeColors = {
  primary: "#e33e3e",
  primaryHover: "#c53535",
  secondary: "#0f172a",
  accent: "#3b82f6",
  background: "#ffffff",
  surface: "#f8fafc",
  text: {
    primary: "#0f172a",
    secondary: "#64748b",
    muted: "#94a3b8"
  },
  border: "#efefef",
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444"
};
```

### 6.2 Typography

```typescript
interface Typography {
  fontFamily: string;
  fontUrl: string;
  weights: {
    regular: 400;
    medium: 500;
    bold: 700;
  };
  sizes: {
    xs: "0.75rem";    // 12px
    sm: "0.875rem";   // 14px
    base: "1rem";     // 16px
    lg: "1.125rem";   // 18px
    xl: "1.25rem";    // 20px
    "2xl": "1.5rem";  // 24px
    "3xl": "1.875rem"; // 30px
    "4xl": "2.25rem"; // 36px
    "5xl": "3rem";    // 48px
  };
  lineHeights: {
    tight: 1.25;
    normal: 1.5;
    relaxed: 1.75;
  };
}

const typography: Typography = {
  fontFamily: "'DM Sans', sans-serif",
  fontUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
  weights: {
    regular: 400,
    medium: 500,
    bold: 700
  },
  // ... sizes and line heights
};
```

### 6.3 Breakpoints

```typescript
interface Breakpoints {
  xs: string;  // 0-575px
  sm: string;  // 576-767px
  md: string;  // 768-991px
  lg: string;  // 992-1199px
  xl: string;  // 1200-1399px
  xxl: string; // 1400px+
}

const breakpoints: Breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
};
```

### 6.4 CSS Classes Reference

```css
/* Header Styles */
.header-nav { /* Main header container */ }
.nav-homepage-style { /* Homepage specific header */ }
.main-menu { /* Main navigation */ }
.menu_bdrt1 { /* Menu border top 1 */ }

/* Hero Section */
.home1-hero { /* Hero container */ }
.home1-hero-content { /* Hero content wrapper */ }
.advance-style2 { /* Search form style */ }

/* Buttons */
.ud-btn { /* Base button class */ }
.btn-thm { /* Theme primary button */ }
.btn-white { /* White button variant */ }
.bdrs60 { /* Border radius 60px (pill) */ }
.bdrs12 { /* Border radius 12px */ }

/* Cards */
.property-card { /* Property card container */ }
.agent-card { /* Agent card container */ }
.category-card { /* Category card container */ }

/* Grid */
.container { /* Fixed width container */ }
.container-fluid { /* Full width container */ }
.row { /* Flexbox row */ }
```

---

## 7. Responsive Behavior

### 7.1 Breakpoint Adaptations

| Breakpoint | Header | Search Form | Property Grid | Sidebar |
|------------|--------|-------------|---------------|---------|
| **Desktop (>1200px)** | Full horizontal | 4-5 fields inline | 3-4 columns | Hidden |
| **Tablet (768-1199px)** | Condensed | 2-3 fields stacked | 2-3 columns | Hidden |
| **Mobile (<768px)** | Hamburger menu | Full width stacked | 1 column | Off-canvas |

### 7.2 Mobile-Specific Classes

```css
/* Mobile Menu */
.mobilie_header_nav { /* Mobile navigation wrapper */ }
.mobile-menu { /* Mobile menu container */ }
.mobile_menu_bar { /* Mobile menu toggle */ }

/* Responsive Utilities */
.d-none { display: none; }
.d-sm-block { display: block; }
.d-md-flex { display: flex; }
.d-lg-none { display: none; }
```

---

## 8. Performance Considerations

### 8.1 Image Optimization

```typescript
interface ImageConfig {
  formats: ["webp", "avif", "jpg"];
  sizes: [320, 640, 768, 1024, 1280, 1536, 1920];
  quality: 75;
  lazyLoading: true;
  placeholder: "blur";
}
```

### 8.2 Preloaded Resources

```html
<!-- Fonts -->
<link rel="preload" href="/fonts/DM-Sans.woff2" as="font" type="font/woff2" crossorigin>

<!-- Critical CSS -->
<link rel="preload" href="/css/critical.css" as="style">

<!-- Hero Image -->
<link rel="preload" href="/images/hero-bg.webp" as="image">
```

---

## 9. Related Pages

- [Home v2](./home-v2-detailed.md) - Alternative hero design
- [Home v3](./home-v3-detailed.md) - Modern property focus
- [Home v4](./home-v4-detailed.md) - Agent-focused design
- [Home v5](./home-v5-detailed.md) - Agency showcase
- [Grid Default](../property-list-pages/grid-default.md) - Property listing page

---

*Document Version: 1.0 | Last Updated: 2024 | Homez - Real Estate NextJS Template*
