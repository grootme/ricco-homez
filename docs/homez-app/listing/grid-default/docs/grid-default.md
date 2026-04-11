# Grid Default - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-default
- **Page Title:** Gird Default || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Homepage-style with Featured Listings Grid

---

## 2. Page Overview

### Layout Type
The Grid Default page presents a homepage-style layout that combines a hero search section with featured property listings. Unlike traditional listing pages with sidebar filters, this page emphasizes discovery through visual property cards arranged in a grid layout.

### Purpose
- Showcase featured properties in an attractive grid format
- Provide quick property type filtering via category icons
- Enable location-based browsing through city exploration
- Drive user engagement with prominent search functionality

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ HERO SECTION - Search Bar with Buy/Rent/Sold tabs         │
│              - Property Type Quick Links                   │
├────────────────────────────────────────────────────────────┤
│ FEATURED LISTINGS - Grid Layout (3 columns default)       │
│              - Carousel Navigation                         │
├────────────────────────────────────────────────────────────┤
│ EXPLORE CITIES - City Cards with Property Counts          │
├────────────────────────────────────────────────────────────┤
│ SERVICES SECTION - Buy/Sell/Rent Options                   │
├────────────────────────────────────────────────────────────┤
│ TESTIMONIALS - Customer Reviews                            │
├────────────────────────────────────────────────────────────┤
│ AGENTS SECTION - Exclusive Agents Carousel                 │
├────────────────────────────────────────────────────────────┤
│ FOOTER - Contact, Apps, Popular Search, Quick Links        │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Homepage-style with Grid Sections |
| **Featured Grid Columns (Desktop)** | 4 columns |
| **Featured Grid Columns (Tablet)** | 2-3 columns |
| **Featured Grid Columns (Mobile)** | 1 column |
| **Card Style** | Standard property card with hover effects |
| **Container Width** | Full-width with padding |

### Grid CSS Configuration
```css
/* Featured Listings Grid */
.featured-listings-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0 20px;
}

@media (max-width: 1199px) {
  .featured-listings-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .featured-listings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .featured-listings-grid {
    grid-template-columns: 1fr;
  }
}

/* City Cards Grid */
.cities-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

@media (max-width: 991px) {
  .cities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 575px) {
  .cities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 4. Data Content Structure

### 4.1 Property Card Data Structure

Each property card in the grid displays the following data fields:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **Image Gallery** | Array[URL] | Property images with carousel navigation | `/images/listings/property-1.jpg` |
| **Status Badge** | String | Property listing status | "FEATURED", "FOR SALE", "FOR RENT" |
| **Price** | String | Monthly or total price | "$14,000 / mo", "$82,000 / mo" |
| **Title** | String | Property name/title | "Equestrian Family Home" |
| **Location** | String | Full address | "San Diego City, CA, USA" |
| **Beds** | Number | Number of bedrooms | 5 |
| **Baths** | Number | Number of bathrooms | 4 |
| **Sqft** | Number | Square footage | 900 |
| **Status Label** | String | Current listing status | "For Rent" |
| **Action Buttons** | Array | Interactive buttons | Favorite, Compare, View |

### Property Card Data Model (TypeScript Interface)
```typescript
interface PropertyCard {
  id: string;
  slug: string;
  images: string[];
  status: 'featured' | 'for-sale' | 'for-rent' | 'sold';
  price: number;
  priceUnit: 'mo' | 'total' | null;
  title: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  featured: boolean;
  agent?: {
    id: string;
    name: string;
    avatar: string;
    phone: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### 4.2 Hero Search Bar Data Structure

| Field | Type | Options | Description |
|-------|------|---------|-------------|
| **Search Type Tabs** | Radio | Buy, Rent, Sold | Filter by listing status |
| **Search Input** | Text | - | Keyword/location search |
| **Advanced Button** | Button | - | Opens advanced filters modal |
| **Search Button** | Button | - | Executes search query |

### Search Configuration
```typescript
interface SearchConfig {
  tabs: Array<{
    id: 'buy' | 'rent' | 'sold';
    label: string;
    active: boolean;
  }>;
  placeholder: string;
  advancedFilters: boolean;
  autocomplete: boolean;
}
```

### 4.3 Property Type Quick Links Data

| Property Type | Icon | Count | Link |
|---------------|------|-------|------|
| Houses | Home Icon | 22 Properties | `/search?type=houses` |
| Apartments | Building Icon | 22 Properties | `/search?type=apartments` |
| Office | Building2 Icon | 22 Properties | `/search?type=office` |
| Villa | Villa Icon | 22 Properties | `/search?type=villa` |
| Townhome | Home Icon | 22 Properties | `/search?type=townhome` |
| Bungalow | Home Icon | 22 Properties | `/search?type=bungalow` |
| Loft | Building Icon | 22 Properties | `/search?type=loft` |

### 4.4 City Cards Data Structure

| City | Property Count | Image |
|------|----------------|-------|
| Los Angeles | 12 Properties | City image |
| Miami | 8 Properties | City image |
| New York | 15 Properties | City image |
| Chicago | 10 Properties | City image |

### City Card Data Model
```typescript
interface CityCard {
  id: string;
  name: string;
  slug: string;
  propertyCount: number;
  image: string;
  state?: string;
  country: string;
}
```

---

## 5. Component Breakdown

### 5.1 Header Component
```
Header/
├── Logo (link to home)
├── Navigation Menu
│   ├── Home (dropdown)
│   ├── Listing (dropdown with sub-items)
│   │   ├── Grid Default
│   │   ├── Grid Full Width 3 Cols
│   │   ├── Grid Full Width 4 Cols
│   │   ├── Grid Full Width 2 Cols
│   │   ├── Grid Full Width 1 Cols v1
│   │   ├── Grid Full Width 1 Cols v2
│   │   ├── Banner Search v1
│   │   ├── Banner Search v2
│   │   ├── Header Map Style
│   │   ├── Map V1-V4
│   │   ├── List v1
│   │   └── List All Style
│   ├── Property (dropdown)
│   ├── Blog (dropdown)
│   └── Pages (dropdown)
├── Phone Number (clickable link)
├── Login/Register Button
├── Add Property Button (with arrow icon)
└── Hamburger Menu (mobile)
```

### 5.2 Hero Search Section
```
HeroSearch/
├── Background Image/Gradient
├── Heading Text: "Find Your Dream Home"
├── Search Tabs
│   ├── Buy Button
│   ├── Rent Button
│   └── Sold Button
├── Search Input Field
│   ├── Placeholder: "Enter Keyword for [Tab]"
│   └── Location Dropdown (optional)
├── Advanced Button (with icon)
└── Search Submit Button (with icon)
```

### 5.3 Property Type Quick Links
```
PropertyTypes/
├── Container
├── Type Cards (Array)
│   ├── Icon (SVG)
│   ├── Label: "Houses", "Apartments", etc.
│   └── Count: "22 Properties"
└── Click Navigation to Filtered Results
```

### 5.4 Featured Listings Grid
```
FeaturedListings/
├── Section Header
│   ├── Heading: "Discover Our Featured Listings"
│   └── "See All Properties" Link
├── Carousel Container
│   ├── Previous Button (disabled on first)
│   ├── Property Cards Grid (4 columns)
│   │   ├── Image with Overlay
│   │   │   ├── Featured Badge (conditional)
│   │   │   └── Price Tag
│   │   ├── Content Section
│   │   │   ├── Property Title (link)
│   │   │   ├── Location Address
│   │   │   ├── Specs Row
│   │   │   │   ├── Beds count with icon
│   │   │   │   ├── Baths count with icon
│   │   │   │   └── Sqft count with icon
│   │   │   ├── Separator Line
│   │   │   ├── Status Label: "For Rent" / "For Sale"
│   │   │   └── Action Buttons
│   │   │       ├── Favorite (heart icon)
│   │   │       ├── Compare (scale icon)
│   │   │       └── View (arrow icon)
│   │   └── Next Button
└── Carousel Indicators
```

### 5.5 Explore Cities Section
```
ExploreCities/
├── Section Header
│   └── Heading: "Explore Cities"
├── Carousel Container
│   ├── Previous Button
│   ├── City Cards Grid (6 columns)
│   │   ├── City Image
│   │   ├── Overlay
│   │   ├── City Name
│   │   └── Property Count
│   └── Next Button
└── "See All Cities" Link
```

### 5.6 Services Section
```
ServicesSection/
├── Heading: "See How Realton Can Help"
├── Service Cards
│   ├── Buy a Property
│   │   ├── Icon
│   │   ├── Heading
│   │   ├── Description
│   │   └── "Find a home" Link
│   ├── Sell a Property
│   │   ├── Icon
│   │   ├── Heading
│   │   ├── Description
│   │   └── "Place an ad" Link
│   └── Rent a Property
│       ├── Icon
│       ├── Heading
│       ├── Description
│       └── "Find a rental" Link
└── Video Section (optional)
```

### 5.7 Testimonials Section
```
Testimonials/
├── Heading: "Testimonials"
├── Testimonial Card
│   ├── Quote Text
│   ├── Author Name
│   └── Star Rating (implied)
├── Tab Indicators (pagination dots)
└── Carousel Navigation
```

### 5.8 Agents Section
```
AgentsSection/
├── Heading: "Our Exclusive Agents"
├── Carousel Container
│   ├── Previous Button
│   ├── Agent Cards Grid
│   │   ├── Agent Avatar Image
│   │   ├── Agent Name
│   │   └── Role: "Broker"
│   └── Next Button
└── View All Agents Link
```

### 5.9 Footer Component
```
Footer/
├── Main Footer
│   ├── Contact Section
│   │   ├── Phone: "+(0) 123 050 945 02"
│   │   └── Email: "hi@homez.com"
│   ├── Apps Download
│   │   ├── Apple Store Link
│   │   └── Google Play Link
│   ├── Social Media Links
│   │   ├── Facebook
│   │   ├── Twitter
│   │   ├── Instagram
│   │   └── LinkedIn
│   ├── Newsletter
│   │   ├── Heading: "Keep Yourself Up to Date"
│   │   ├── Email Input
│   │   └── Subscribe Button
│   ├── Popular Search Links
│   ├── Quick Links
│   └── Discover Links (Cities)
└── Bottom Footer
    ├── Copyright
    ├── Theme Credit
    ├── Privacy Link
    ├── Terms Link
    └── Sitemap Link
```

---

## 6. Interactive Elements

### 6.1 Search Functionality

#### Search Tabs
| Tab | Behavior | Default State |
|-----|----------|---------------|
| Buy | Filters for properties for sale | Active on load |
| Rent | Filters for rental properties | Inactive |
| Sold | Shows sold properties | Inactive |

#### Search Input
```typescript
interface SearchInput {
  placeholder: string; // "Enter Keyword for [Tab]"
  debounceMs: number; // 300ms typical
  minLength: number; // 2 characters
  autocomplete: boolean; // true
  autocompleteSource: 'local' | 'api';
}
```

#### Advanced Filters Button
- Opens modal or expands filter options
- Includes: Location, Property Type, Price Range, Beds, Baths, Area

### 6.2 Property Card Interactions

| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status, requires login |
| **Compare** | Scale | Add to comparison list (max 4) |
| **View** | Arrow | Navigate to property detail page |
| **Card Click** | - | Navigate to property detail page |
| **Image Carousel** | - | Swipe/click through property images |

### 6.3 Carousel Controls

```typescript
interface CarouselConfig {
  autoplay: boolean; // false for user control
  autoplayInterval: number; // 5000ms if enabled
  infiniteLoop: boolean; // true
  showIndicators: boolean; // true
  itemsPerView: {
    desktop: number; // 4
    tablet: number; // 2-3
    mobile: number; // 1
  };
  navigation: {
    prevButton: boolean;
    nextButton: boolean;
  };
}
```

### 6.4 Property Type Quick Links
- Click navigates to filtered search results page
- URL pattern: `/search?type={propertyType}`
- Updates search results based on selected category

### 6.5 City Cards
- Click navigates to city-specific property listings
- URL pattern: `/search?location={citySlug}`
- Shows properties in selected city

---

## 7. Responsive Breakpoints

### Breakpoint Configuration

| Breakpoint | Width | Grid Columns | Layout Changes |
|------------|-------|--------------|----------------|
| **Desktop XL** | > 1400px | 4 columns | Full header, all features visible |
| **Desktop** | 1200-1399px | 4 columns | Standard desktop layout |
| **Tablet Landscape** | 992-1199px | 3 columns | Condensed header dropdown |
| **Tablet Portrait** | 768-991px | 2 columns | Hamburger menu, stacked cards |
| **Mobile Large** | 576-767px | 2 columns | Mobile header, compact cards |
| **Mobile** | < 576px | 1 column | Full-width cards, stacked layout |

### Responsive CSS Implementation

```css
/* Desktop XL (1400px+) */
@media (min-width: 1400px) {
  .featured-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .cities-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* Desktop (1200-1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .featured-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}

/* Tablet Landscape (992-1199px) */
@media (min-width: 992px) and (max-width: 1199px) {
  .featured-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .cities-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Tablet Portrait (768-991px) */
@media (min-width: 768px) and (max-width: 991px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .header-nav {
    display: none;
  }
  
  .hamburger-menu {
    display: block;
  }
}

/* Mobile Large (576-767px) */
@media (min-width: 576px) and (max-width: 767px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .cities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-search {
    padding: 40px 20px;
  }
}

/* Mobile (< 576px) */
@media (max-width: 575px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .cities-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-search {
    padding: 30px 15px;
  }
  
  .search-tabs {
    flex-direction: column;
    width: 100%;
  }
  
  .property-card {
    max-width: 100%;
  }
}
```

### Card Width Calculations

| Breakpoint | Container Width | Grid Gap | Card Width Calculation |
|------------|-----------------|----------|------------------------|
| Desktop XL | 1320px | 30px | (1320 - 90) / 4 = 307px |
| Desktop | 1140px | 24px | (1140 - 72) / 4 = 267px |
| Tablet L | 960px | 24px | (960 - 48) / 3 = 304px |
| Tablet P | 720px | 20px | (720 - 20) / 2 = 350px |
| Mobile L | 540px | 16px | (540 - 16) / 2 = 262px |
| Mobile | 100% | 16px | 100% - 32px padding |

---

## 8. Component Props and Data Flow

### Property Card Component Props

```typescript
interface PropertyCardProps {
  property: {
    id: string;
    slug: string;
    images: string[];
    featured: boolean;
    status: 'for-sale' | 'for-rent' | 'sold';
    price: number;
    priceUnit?: 'mo' | 'total';
    title: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
  };
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
  isFavorited?: boolean;
  isCompared?: boolean;
  variant?: 'default' | 'compact' | 'horizontal';
}
```

### Search Component Props

```typescript
interface HeroSearchProps {
  tabs: Array<{
    id: string;
    label: string;
    isActive: boolean;
  }>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onSearch: (query: SearchQuery) => void;
  placeholder?: string;
  showAdvanced: boolean;
  onAdvancedClick: () => void;
}

interface SearchQuery {
  keyword: string;
  type: 'buy' | 'rent' | 'sold';
  location?: string;
  advancedFilters?: AdvancedFilters;
}

interface AdvancedFilters {
  propertyType?: string[];
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  minSqft?: number;
  maxSqft?: number;
  amenities?: string[];
}
```

---

## 9. State Management

### Global State Structure

```typescript
interface ListingState {
  properties: Property[];
  featuredProperties: Property[];
  cities: City[];
  searchQuery: SearchQuery;
  filters: FilterState;
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
}

interface FilterState {
  status: 'all' | 'buy' | 'rent' | 'sold';
  propertyType: string[];
  priceRange: [number, number];
  beds: number | null;
  baths: number | null;
  sqftRange: [number, number];
  location: string | null;
  amenities: string[];
}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Featured Properties
GET /api/properties/featured
Response: {
  data: Property[];
  meta: {
    total: number;
    page: number;
    perPage: number;
  };
}

// Properties by City
GET /api/cities/:citySlug/properties
Response: {
  data: Property[];
  meta: {
    city: City;
    total: number;
  };
}

// Search Properties
POST /api/properties/search
Body: SearchQuery
Response: {
  data: Property[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    filters: AppliedFilters;
  };
}

// Property Types
GET /api/property-types
Response: {
  data: PropertyType[];
}

// Cities
GET /api/cities
Response: {
  data: City[];
}
```

---

## 11. Accessibility Considerations

### ARIA Labels

```html
<!-- Property Card -->
<article role="article" aria-label="Property listing: Equestrian Family Home">
  <a href="/property/equestrian-family-home" aria-label="View details for Equestrian Family Home">
    <img alt="Equestrian Family Home exterior view" />
  </a>
  <button aria-label="Add to favorites" aria-pressed="false">
    <svg aria-hidden="true">...</svg>
  </button>
</article>

<!-- Search Form -->
<form role="search" aria-label="Property search">
  <div role="tablist" aria-label="Search type">
    <button role="tab" aria-selected="true">Buy</button>
    <button role="tab" aria-selected="false">Rent</button>
    <button role="tab" aria-selected="false">Sold</button>
  </div>
  <input type="search" aria-label="Search properties" placeholder="Enter Keyword" />
  <button type="submit" aria-label="Search">Search</button>
</form>

<!-- Carousel -->
<div role="region" aria-label="Featured properties carousel">
  <button aria-label="Previous properties">Previous</button>
  <button aria-label="Next properties">Next</button>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Navigate through interactive elements |
| Enter | Activate buttons, links |
| Arrow Left/Right | Navigate carousel |
| Escape | Close modals, dropdowns |
| Space | Toggle checkboxes, buttons |

---

## 12. Performance Optimizations

### Image Optimization

```typescript
interface ImageConfig {
  src: string;
  widths: [300, 400, 600, 800, 1200];
  formats: ['webp', 'jpg'];
  loading: 'lazy' | 'eager';
  priority: boolean;
}

// Usage in Next.js
<Image
  src={property.images[0]}
  alt={property.title}
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
  blurDataURL={property.blurPlaceholder}
/>
```

### Lazy Loading Strategy

- **Above the fold**: Hero, search, property type cards - Eager load
- **Featured listings**: Lazy load with intersection observer
- **Cities section**: Lazy load when scrolled into view
- **Footer**: Lazy load when scrolled into view

### Caching Strategy

```typescript
const cacheConfig = {
  featuredProperties: {
    ttl: 300, // 5 minutes
    staleWhileRevalidate: 3600, // 1 hour
  },
  cities: {
    ttl: 3600, // 1 hour
    staleWhileRevalidate: 86400, // 24 hours
  },
  propertyTypes: {
    ttl: 86400, // 24 hours
  },
};
```

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Grid Default - Property Listings | Homez Real Estate</title>
<meta name="description" content="Browse featured properties for sale and rent. Find your dream home with our comprehensive property listings." />
<meta name="keywords" content="real estate, property listings, homes for sale, apartments for rent" />

<!-- Open Graph -->
<meta property="og:title" content="Property Listings - Homez Real Estate" />
<meta property="og:description" content="Browse featured properties for sale and rent." />
<meta property="og:image" content="/images/og-property-listing.jpg" />
<meta property="og:url" content="https://homez-appdir.vercel.app/grid-default" />

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Featured Properties",
  "numberOfItems": 25,
  "itemListElement": [...]
}
</script>
```

---

## 14. GSAP Animations

### Animation Library Analysis

**GSAP Status:** NOT USED  
**Alternative Animation Libraries:** AOS (Animate On Scroll), WOW.js, CSS Transitions

### AOS Animation Configuration
```typescript
// AOS Global Configuration
AOS.init({
  duration: 1200,      // Animation duration in ms
  easing: 'ease',      // Easing function
  once: true,          // Only animate once
  offset: 120          // Trigger offset from viewport
});

// Element-level Animation Attributes
data-aos="fade-up"          // Fade in from bottom
data-aos="fade-down"        // Fade in from top
data-aos="fade-left"        // Fade in from right
data-aos="fade-right"       // Fade in from left
data-aos="zoom-in"          // Scale up effect
data-aos-delay="300"        // Delay animation start
data-aos-duration="1000"    // Custom duration
```

### CSS Transition Animations
```css
/* Standard Transitions */
transition: all 0.3s ease;
transition: transform 0.3s;
transition: color 150ms;

/* Card Hover Effect */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Button Hover */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Image Zoom */
.property-image:hover img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
```

### Animation Timing Table
| Animation Type | Duration | Easing | Trigger |
|---------------|----------|--------|---------|
| Fade Up | 1200ms | ease | Scroll into view |
| Hover Lift | 300ms | ease | Mouse hover |
| Image Zoom | 500ms | ease | Mouse hover |
| Color Change | 150ms | linear | Hover/Focus |

---

## 15. GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### GSAP Core Setup

```typescript
// lib/gsap-config.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global GSAP configuration
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
```

### Property Cards Grid Stagger Animation

```typescript
// components/PropertyGrid.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PropertyGrid = ({ properties }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Property cards stagger animation on scroll
      gsap.from('.property-card', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [properties]);

  return (
    <div ref={gridRef} className="featured-listings-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};
```

### Hero Search Bar Entrance Animation

```typescript
// components/HeroSearch.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroSearch = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero title animation
      tl.from('.hero-title', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Search tabs animation
      tl.from('.search-tab', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: 'back.out(1.7)',
      }, '-=0.4');

      // Search input animation
      tl.from('.search-input', {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2');

      // Buttons animation
      tl.from('.search-buttons', {
        opacity: 0,
        x: 20,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{/* Hero content */}</div>;
};
```

### Filter Bar Animation Transitions

```typescript
// components/FilterBar.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const FilterBar = ({ isVisible, onFilterChange }) => {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      // Filter bar entrance animation
      gsap.from('.filter-bar', {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Filter button stagger
      gsap.from('.filter-btn', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
        delay: 0.4,
      });
    }
  }, [isVisible]);

  const handleFilterDropdown = (isOpen: boolean, dropdownEl: HTMLElement) => {
    if (isOpen) {
      gsap.from(dropdownEl, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return <div ref={filterRef}>{/* Filter content */}</div>;
};
```

### City Cards Grid Animation

```typescript
// components/CitiesGrid.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CitiesGrid = ({ cities }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.city-card', {
        opacity: 0,
        scale: 0.9,
        stagger: 0.06,
        duration: 0.4,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [cities]);

  return (
    <div ref={gridRef} className="cities-grid">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};
```

### Pagination Animation

```typescript
// components/Pagination.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate pagination items on page change
    gsap.from('.pagination-item', {
      opacity: 0,
      scale: 0.8,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });
  }, [currentPage]);

  const handlePageClick = (page: number, element: HTMLElement) => {
    // Click feedback animation
    gsap.to(element, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => onPageChange(page),
    });
  };

  return <div ref={paginationRef}>{/* Pagination content */}</div>;
};
```

### Property Card Hover Animations

```typescript
// components/PropertyCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const PropertyCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // Card lift animation
    gsap.to(cardRef.current, {
      y: -5,
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Image zoom animation
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Action buttons reveal
    gsap.fromTo('.card-actions', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={imageRef}>{/* Image */}</div>
      {/* Card content */}
    </div>
  );
};
```

### Scroll-Based Section Reveals

```typescript
// hooks/useScrollAnimation.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from('.section-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Content cards stagger
      gsap.from('.content-card', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
```

### Carousel Animation Enhancement

```typescript
// components/PropertyCarousel.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const PropertyCarousel = ({ properties }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (direction: 'next' | 'prev', newSlide: HTMLElement) => {
    // Slide transition animation
    gsap.from(newSlide, {
      opacity: 0,
      x: direction === 'next' ? 50 : -50,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Cards within slide stagger
    gsap.from(newSlide.querySelectorAll('.property-card'), {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.1,
    });
  };

  return <div ref={carouselRef}>{/* Carousel content */}</div>;
};
```

### Testimonials Carousel Animation

```typescript
// components/TestimonialsCarousel.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote fade and scale
      gsap.from('.testimonial-quote', {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Author info slide up
      gsap.from('.testimonial-author', {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, testimonialRef);

    return () => ctx.revert();
  }, []);

  return <div ref={testimonialRef}>{/* Testimonial content */}</div>;
};
```

### Page Load Sequence Animation

```typescript
// app/grid-default/page.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const GridDefaultPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Header slide down
      tl.from('.header', {
        y: -80,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Hero fade in
      tl.from('.hero-section', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3');

      // Featured grid stagger (triggered by scroll via ScrollTrigger)
      tl.from('.featured-listings-grid', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4');
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return <div ref={pageRef}>{/* Page content */}</div>;
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "bootstrap": "^5.3.0",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "aos": "^2.3.4"
  }
}
```

---

## 16. Theme Variables

### CSS Custom Properties
```css
:root {
  /* Primary Colors */
  --color-primary: #e33e3e;          /* Main brand color (red) */
  --color-primary-rgb: rgb(235, 103, 83);  /* RGB: #eb6753 */
  --color-primary-hover: #c53535;    /* Hover state */
  --color-primary-light: rgba(227, 62, 62, 0.07);

  /* Secondary Colors */
  --color-secondary: #041e42;        /* Dark blue */
  --color-dark: #0f172a;             /* Dark text */
  --color-dark-2: #181a20;           /* Dark backgrounds */

  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-100: #f8fafc;
  --color-gray-200: #f7f7f7;
  --color-gray-300: #efefef;         /* Borders */
  --color-gray-400: #eeeeee;
  --color-gray-500: #64748b;         /* Secondary text */
  --color-gray-600: #94a3b8;         /* Muted text */

  /* Status Colors */
  --color-success: #22c55e;          /* Green */
  --color-warning: #f59e0b;          /* Amber */
  --color-error: #ef4444;            /* Red */

  /* Social Colors */
  --color-facebook: #1877f2;
  --color-google: #4285f4;
  --color-apple: #000000;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  
  /* Font Sizes */
  --fs-h1: 3rem;      /* 48px */
  --fs-h2: 2.25rem;   /* 36px */
  --fs-h3: 1.875rem;  /* 30px */
  --fs-h4: 1.5rem;    /* 24px */
  --fs-body: 0.875rem; /* 14px */

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 60px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 15px 40px rgba(0, 0, 0, 0.15);
}
```

### Border Styles
```css
/* Border Colors */
.menu_bdrt1 { border-color: #efefef; }
.bdrt1 { border-top: 1px solid #efefef; }

/* Border Radius Classes */
.bdrs60 { border-radius: 60px; }      /* Pill buttons */
.bdrs12 { border-radius: 12px; }      /* Cards */
.bdrs8 { border-radius: 8px; }        /* Inputs */
```

### Shadow Classes
```css
/* Card Shadows */
.card-shadow {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-shadow-hover:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}
```

---

## 17. NPM Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "bootstrap": "^5.3.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  }
}
```

### Animation Dependencies
```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "aos": "^2.3.4",
    "wow.js": "^1.2.2"
  }
}
```

### UI Component Dependencies
```json
{
  "dependencies": {
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "react-pro-sidebar": "^1.1.0"
  }
}
```

### Icon Dependencies
```json
{
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
    "@fortawesome/free-brands-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0"
  }
}
```

### Form & State Dependencies
```json
{
  "dependencies": {
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "zustand": "^4.4.0"
  }
}
```

### Data Fetching Dependencies
```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "@tanstack/react-query": "^5.8.0"
  }
}
```

---

## 18. Technical Implementation

### Dependencies
- react-select: For filter dropdowns
- swiper: For property image carousels
- aos: For scroll animations

### Component Libraries
| Library | Version | Usage |
|---------|---------|-------|
| React Select | ^5.7.0 | Filter dropdowns |
| Swiper | ^11.0.0 | Image carousels |
| Bootstrap 5 | ^5.3.0 | Grid layout, forms |

### Key Implementation Details
```typescript
// Swiper Configuration for Property Carousels
const propertyCarouselConfig = {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: true,
  pagination: { clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 4 }
  }
};

// AOS Animation Configuration
AOS.init({
  duration: 1200,
  easing: 'ease',
  once: true
});
```

---

## 19. Related Pages

- [Grid Full Width 3 Cols](./grid-full-3-col.md) - Full-width 3-column grid layout
- [Grid Full Width 4 Cols](./grid-full-4-col.md) - Full-width 4-column grid layout
- [Banner Search v1](./banner-search-v1.md) - Banner with mortgage calculator sidebar
- [List v1](./list-v1.md) - List view layout

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
