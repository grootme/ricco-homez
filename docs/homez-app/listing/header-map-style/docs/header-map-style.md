# Header Map Style - Home Page with Map Integration

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/header-map-style](https://homez-appdir.vercel.app/header-map-style)  
**Page Title:** Header Map Style || Homez - Real Estate NextJS Template  
**Template Type:** Home Page Variant  
**Layout Type:** Full-Width Hero with Map-Style Search Interface

## 2. Page Overview

### Layout Type and Purpose
The Header Map Style page is a home page variant that features a prominent hero section with a map-style search interface. Unlike the standard map listing pages, this is a marketing landing page that incorporates map-inspired design elements in the header search area while showcasing featured properties and other home page sections below.

### Key Differentiator
This page serves as the main landing page with enhanced search functionality positioned prominently in the hero section, designed to immediately capture user intent for property searches.

## 3. Layout Configuration

### Hero Section Layout
| Setting | Value |
|---------|-------|
| **Layout Type** | Full-width hero banner |
| **Hero Height** | 100vh (full viewport) |
| **Background** | Image with dark overlay |
| **Content Position** | Centered vertically and horizontally |
| **Search Bar Position** | Bottom of hero section |

### Hero Section Structure
```
┌──────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR (Fixed)                                        │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]        │
│ [Login/Register] [Add Property →] [Hamburger Menu]            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│                    BACKGROUND IMAGE                           │
│                   (Dark Overlay Applied)                      │
│                                                               │
│         "THE BEST WAY TO"                                    │
│         "Find Your Dream Home"                               │
│         "We've more than 745,000 apartments, place & plot."  │
│                                                               │
│         ┌─────────────────────────────────────────┐          │
│         │ SEARCH BAR (Map Style)                  │          │
│         │ [Buy][Rent][Sold] [Search Input] [🔍]   │          │
│         └─────────────────────────────────────────┘          │
│                                                               │
│         [↓ Scroll Indicator]                                 │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### Search Bar Configuration
```
┌─────────────────────────────────────────────────────────────────────┐
│  [Buy ▼]  │  [Rent ▼]  │  [Sold ▼]                                 │
├─────────────────────────────────────────────────────────────────────┤
│  🔍 Enter an address, neighborhood, city, or ZIP code for Buy      │
│                                              [Advanced]  [Search]  │
└─────────────────────────────────────────────────────────────────────┘
```

### Property Type Quick Links (Below Search)
| Type | Icon | Link Text |
|------|------|-----------|
| Houses | 🏠 | Houses |
| Apartments | 🏢 | Apartments |
| Office | 🏢 | Office |
| Villa | 🏡 | Villa |

## 4. Data Content Structure

### Hero Section Data
```typescript
interface HeroSectionData {
  preTitle: string;           // "THE BEST WAY TO"
  mainTitle: string;          // "Find Your Dream Home"
  subtitle: string;           // "We've more than 745,000 apartments, place & plot."
  backgroundImage: string;    // Hero background image URL
  scrollIndicator: boolean;   // Show scroll indicator
}
```

### Search Bar Data
```typescript
interface SearchBarData {
  tabs: Array<{
    label: string;            // "Buy", "Rent", "Sold"
    active: boolean;
    icon?: string;
  }>;
  searchInput: {
    placeholder: string;      // "Enter an address, neighborhood, city, or ZIP code"
    icon: string;             // Search icon
  };
  advancedButton: {
    label: string;            // "Advanced"
    icon: string;
  };
  searchButton: {
    icon: string;             // Search icon
  };
}
```

### Property Type Quick Links Data
```typescript
interface PropertyTypeLink {
  icon: string;               // Icon identifier
  label: string;              // "Houses", "Apartments", etc.
  href: string;               // Navigation link
}
```

## 5. Component Breakdown

### Header/Navigation Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                                       │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Logo (Header Logo)                                              │
│ │   └── Image: Logo image                                           │
│ ├── Main Navigation Menu                                            │
│ │   ├── Home (dropdown)                                             │
│ │   ├── Listing (dropdown with submenus)                            │
│ │   │   ├── Grid variants (6 options)                              │
│ │   │   ├── Map variants (5 options)                               │
│ │   │   └── List variants (2 options)                              │
│ │   ├── Property (dropdown)                                         │
│ │   ├── Blog (dropdown)                                             │
│ │   └── Pages (dropdown)                                            │
│ ├── Auth Actions                                                    │
│ │   └── Login / Register Button                                     │
│ ├── CTA Button                                                      │
│ │   └── Add Property →                                              │
│ └── Mobile Menu                                                     │
│     └── Hamburger Menu Icon                                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Hero Section Components
```
┌─────────────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                         │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Background Layer                                                │
│ │   ├── Hero Image                                                  │
│ │   └── Dark Overlay                                                │
│ ├── Content Container                                               │
│ │   ├── Pre-title Text (h6)                                         │
│ │   ├── Main Title (h2)                                             │
│ │   └── Subtitle Paragraph                                          │
│ ├── Search Bar Container                                            │
│ │   ├── Tab Buttons (Buy/Rent/Sold)                                 │
│ │   ├── Search Input Field                                          │
│ │   ├── Advanced Button                                             │
│ │   └── Search Submit Button                                        │
│ ├── Property Type Links                                             │
│ │   └── Icon + Label Links (4 types)                               │
│ └── Scroll Indicator                                                │
│     └── Down Arrow Image/Icon                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### "How It Works" Section Components
```
┌─────────────────────────────────────────────────────────────────────┐
│ "HOW IT WORKS" SECTION                                              │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Header                                                  │
│ │   ├── Title: "The New Way to Find Your Home"                    │
│ │   └── CTA Link: "How It Works →"                                 │
│ └── Step Cards (4 steps)                                            │
│     ├── Step 01: "Search Your Dream Home"                          │
│     ├── Step 02: "Choose The House You Like"                       │
│     ├── Step 03: "Enquire About This Property"                     │
│     └── Step 04: "Own Your Home"                                   │
│                                                                      │
│ Each Step Card Contains:                                            │
│ ├── Step Number (h3)                                                │
│ ├── Step Title (h6)                                                 │
│ └── Icon/Image                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Featured Listings Section Components
```
┌─────────────────────────────────────────────────────────────────────┐
│ FEATURED LISTINGS SECTION                                            │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Header                                                  │
│ │   └── Title: "Discover Our Featured Listings"                    │
│ ├── Navigation Arrows                                               │
│ │   ├── Previous Arrow (disabled initially)                         │
│ │   └── Next Arrow                                                  │
│ └── Property Cards Carousel                                         │
│     └── Property Card Items                                         │
│                                                                      │
│ Property Card Structure:                                            │
│ ┌────────────────────────┐                                          │
│ │ [Property Image]        │                                          │
│ │ ┌────────────────────┐  │                                          │
│ │ │ ★ FEATURED         │  │                                          │
│ │ └────────────────────┘  │                                          │
│ │ $14,000 / mo            │                                          │
│ ├────────────────────────┤                                          │
│ │ Equestrian Family Home  │                                          │
│ │ New York City, CA, USA  │                                          │
│ │ 🛏 1 bed  🛁 2 bath     │                                          │
│ │ ▢ 1200 sqft             │                                          │
│ │ ───────────────────────│                                          │
│ │ For Rent  [❤][⚖][⋮]   │                                          │
│ └────────────────────────┘                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Explore Cities Section Components
```
┌─────────────────────────────────────────────────────────────────────┐
│ EXPLORE CITIES SECTION                                               │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Header                                                  │
│ │   └── Title: "Explore Cities"                                    │
│ ├── Navigation Arrows                                               │
│ │   ├── Previous Arrow (disabled)                                   │
│ │   └── Next Arrow                                                  │
│ └── City Cards Carousel                                             │
│     └── City Card Items                                             │
│                                                                      │
│ City Card Structure:                                                │
│ ┌────────────────────────┐                                          │
│ │ [City Image]            │                                          │
│ │ Los Angeles             │                                          │
│ │ 12 Properties           │                                          │
│ └────────────────────────┘                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Selling Options Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ SELLING OPTIONS SECTION                                              │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Let's find the right selling option for you"   │
│ ├── Benefits List                                                   │
│ │   ├── ✓ Find excellent deals                                     │
│ │   ├── ✓ Friendly host & Fast support                             │
│ │   └── ✓ List your own property                                   │
│ ├── CTA Link: "Learn More →"                                        │
│ └── Image Grid (4 property images)                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### Testimonials Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ TESTIMONIALS SECTION                                                 │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Testimonials"                                  │
│ ├── Testimonial Content                                            │
│ │   └── Quote: "Another fantastic testimonial!..."                 │
│ ├── Author Name: "Ella Johnson"                                    │
│ └── Tab Navigation (5 tabs)                                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Featured Properties Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ FEATURED PROPERTIES SECTION                                          │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Featured Properties"                           │
│ ├── Navigation Arrows                                               │
│ └── Property Cards (4 cards per row)                                │
│                                                                      │
│ Property Card Structure:                                            │
│ ┌────────────────────────┐                                          │
│ │ [Property Image]        │                                          │
│ │ Comfortable Villa Green │                                          │
│ │ 🛏 3 bed  🛁 4 bath     │                                          │
│ │ ▢ 1200 sqft             │                                          │
│ │ 📞 +(0) 123 050 945 02  │                                          │
│ │ 📧 hi@homez.com         │                                          │
│ │ $14,000 / mo            │                                          │
│ │ [❤][⚖][⋮]              │                                          │
│ └────────────────────────┘                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Membership Plans Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ MEMBERSHIP PLANS SECTION                                             │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Membership Plans"                              │
│ ├── Toggle Switch (Monthly/Yearly)                                  │
│ └── Plan Cards (3 plans)                                            │
│                                                                      │
│ Plan Card Structure:                                                │
│ ┌────────────────────────┐                                          │
│ │ Basic                   │                                          │
│ │ Free                    │                                          │
│ │ [Join →]                │                                          │
│ └────────────────────────┘                                          │
│                                                                      │
│ ┌────────────────────────┐                                          │
│ │ Professional           │                                          │
│ │ $199.95                │                                          │
│ │ [Join →]               │                                          │
│ └────────────────────────┘                                          │
│                                                                      │
│ ┌────────────────────────┐                                          │
│ │ Business               │                                          │
│ │ $399.95                │                                          │
│ │ [Join →]               │                                          │
│ └────────────────────────┘                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Agents Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ AGENTS SECTION                                                       │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Our Exclusive Agents"                          │
│ ├── Navigation Arrows                                               │
│ └── Agent Cards Carousel                                            │
│                                                                      │
│ Agent Card Structure:                                               │
│ ┌────────────────────────┐                                          │
│ │ [Agent Avatar]          │                                          │
│ │ Arlene McCoy            │                                          │
│ │ Broker                  │                                          │
│ └────────────────────────┘                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Download App Section
```
┌─────────────────────────────────────────────────────────────────────┐
│ DOWNLOAD APP SECTION                                                 │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Title: "Download the App"                              │
│ ├── Apple Store Button                                             │
│ │   └── "Download on the Apple Store"                              │
│ └── Google Play Button                                             │
│     └── "Get it on Google Play"                                    │
└─────────────────────────────────────────────────────────────────────┘
```

### Footer Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Logo                                                            │
│ ├── Social Links (Facebook, Twitter, Instagram, LinkedIn)          │
│ ├── Contact Info                                                    │
│ │   ├── Phone: +(0) 123 050 945 02                                 │
│ │   └── Email: hi@homez.com                                        │
│ ├── Newsletter Subscription                                         │
│ │   ├── Input: "Your Email"                                        │
│ │   └── Button: "Subscribe"                                        │
│ ├── Quick Links Columns                                             │
│ │   ├── Popular Search                                             │
│ │   ├── Quick Links                                                │
│ │   └── Discover                                                   │
│ └── Copyright Bar                                                   │
│     └── "© Homez 2024 ib-themes - All rights reserved"             │
└─────────────────────────────────────────────────────────────────────┘
```

## 6. Interactive Elements

### Hero Search Bar Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Tab Buttons (Buy/Rent/Sold) | Click | Switches search context, updates placeholder text |
| Search Input | Focus | Highlights input field |
| Search Input | Type | Real-time text input |
| Advanced Button | Click | Opens advanced filter modal/dropdown |
| Search Button | Click | Submits search, navigates to results page |
| Property Type Links | Click | Navigates to filtered property listings |

### Navigation Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Logo | Click | Returns to home page |
| Dropdown Menus | Hover | Shows dropdown submenu |
| Login/Register | Click | Opens authentication modal |
| Add Property | Click | Navigates to property submission page |
| Hamburger Menu | Click | Opens mobile navigation drawer |

### Carousel Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Previous Arrow | Click | Scrolls carousel left |
| Next Arrow | Click | Scrolls carousel right |
| Property Card | Click | Navigates to property details page |
| Heart Icon | Click | Adds to favorites |
| Compare Icon | Click | Adds to comparison list |
| More Options | Click | Opens context menu |

### Footer Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Newsletter Input | Focus/Type | Email input field |
| Subscribe Button | Click | Submits email to newsletter |
| Social Links | Click | Opens social media in new tab |
| Quick Links | Click | Navigates to respective pages |

## 7. Responsive Breakpoints

### Breakpoint Configuration
| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Desktop** | > 1200px | Full navigation, 4-card grid |
| **Laptop** | 992-1200px | Condensed navigation, 3-card grid |
| **Tablet** | 768-991px | Hamburger menu, 2-card grid |
| **Mobile** | < 768px | Full mobile layout, 1-card stack |

### Hero Section Responsive Behavior
```css
/* Desktop (> 1200px) */
.hero-section {
  height: 100vh;
  padding: 120px 0 60px;
}

.hero-title {
  font-size: 48px;
}

.search-bar {
  width: 800px;
  margin: 0 auto;
}

/* Tablet (768-991px) */
.hero-section {
  height: auto;
  min-height: 80vh;
  padding: 100px 20px 40px;
}

.hero-title {
  font-size: 36px;
}

.search-bar {
  width: 100%;
  padding: 0 20px;
}

/* Mobile (< 768px) */
.hero-section {
  height: auto;
  min-height: 100vh;
  padding: 80px 15px 30px;
}

.hero-title {
  font-size: 28px;
}

.search-bar {
  width: 100%;
}

.search-tabs {
  flex-direction: column;
}
```

### Property Cards Responsive Behavior
| Breakpoint | Cards per Row | Card Width |
|------------|---------------|------------|
| > 1200px | 4 cards | 25% (with gap) |
| 992-1200px | 3 cards | 33.33% |
| 768-991px | 2 cards | 50% |
| < 768px | 1 card | 100% |

### Navigation Responsive Behavior
| Breakpoint | Navigation Style |
|------------|------------------|
| > 991px | Full horizontal menu with dropdowns |
| < 992px | Hamburger menu with drawer overlay |

## 8. Data Field Specifications

### Property Card Data Fields
```typescript
interface PropertyCard {
  // Primary Data
  id: string;                    // Unique identifier
  title: string;                 // Property title
  slug: string;                  // URL-friendly identifier
  
  // Location
  location: {
    address: string;             // Full address
    city: string;                // City name
    state: string;               // State/province
    country: string;             // Country
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  
  // Pricing
  price: number;                 // Numeric price value
  priceFormatted: string;        // "$14,000 / mo"
  
  // Property Details
  beds: number;                  // Number of bedrooms
  baths: number;                 // Number of bathrooms
  sqft: number;                  // Square footage
  
  // Status & Type
  status: 'sale' | 'rent' | 'sold';  // Listing status
  propertyType: string;          // "House", "Apartment", etc.
  
  // Media
  images: string[];              // Array of image URLs
  featuredImage: string;         // Primary image URL
  
  // Flags
  isFeatured: boolean;           // Featured listing flag
  
  // Actions
  isFavorite?: boolean;          // User favorite status
  isCompared?: boolean;          // User compare status
}
```

### City Card Data Fields
```typescript
interface CityCard {
  id: string;                    // Unique identifier
  name: string;                  // City name
  propertyCount: number;         // Number of properties
  image: string;                 // City image URL
  slug: string;                  // URL-friendly identifier
}
```

### Agent Card Data Fields
```typescript
interface AgentCard {
  id: string;                    // Unique identifier
  name: string;                  // Agent name
  title: string;                 // Job title (e.g., "Broker")
  avatar: string;                // Profile image URL
  slug: string;                  // URL-friendly identifier
}
```

## 9. Component Props and State

### HeroSearchBar Props
```typescript
interface HeroSearchBarProps {
  defaultTab: 'buy' | 'rent' | 'sold';
  placeholder: string;
  onSearch: (query: SearchQuery) => void;
  onAdvancedClick: () => void;
}

interface SearchQuery {
  tab: 'buy' | 'rent' | 'sold';
  query: string;
  filters?: AdvancedFilters;
}
```

### PropertyCarousel Props
```typescript
interface PropertyCarouselProps {
  properties: PropertyCard[];
  title: string;
  showNavigation: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  onPropertyClick: (propertyId: string) => void;
  onFavoriteClick: (propertyId: string) => void;
}
```

## 10. Accessibility Considerations

### ARIA Labels
- Hero section: `aria-label="Hero section"`
- Search bar: `role="search"`
- Navigation menus: `aria-expanded`, `aria-haspopup`
- Carousels: `aria-label="Property carousel"`, `role="region"`
- Tab buttons: `role="tablist"`, `role="tab"`

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space to activate buttons
- Arrow keys for carousel navigation
- Escape to close modals/dropdowns

### Focus Management
- Visible focus indicators on all interactive elements
- Focus trap in modals
- Skip links for main content

## 11. Technical Implementation

### Map Dependencies
- @react-google-maps/api: ^2.19.0 (Google Maps)
- Alternative: mapbox-gl + react-map-gl

### Map Features
- Property markers with clustering
- Draw search area
- Full-screen mode
- Split-view layouts

### Hero Section with Map-Style Search
```typescript
// Full-Height Hero with Search
const HeroMapStyle = () => {
  const [searchTab, setSearchTab] = useState<'buy' | 'rent' | 'sold'>('buy');
  
  return (
    <section className="hero-full-height" style={{ height: '100vh' }}>
      <div className="hero-background">
        <img src="/images/hero-bg.jpg" alt="" />
        <div className="dark-overlay" style={{ opacity: 0.5 }} />
      </div>
      
      <div className="hero-content">
        <span className="pre-title">THE BEST WAY TO</span>
        <h1>Find Your Dream Home</h1>
        <p className="subtitle">We've more than 745,000 apartments, place & plot.</p>
        
        <div className="search-bar">
          <div className="tabs">
            {['buy', 'rent', 'sold'].map(tab => (
              <button 
                key={tab}
                className={searchTab === tab ? 'active' : ''}
                onClick={() => setSearchTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <input 
            type="search" 
            placeholder={`Enter an address... for ${searchTab}`} 
          />
          <button className="advanced">Advanced</button>
          <button className="search">Search</button>
        </div>
        
        <PropertyTypeLinks types={propertyTypes} />
      </div>
      
      <ScrollIndicator />
    </section>
  );
};
```

### Property Type Quick Links
```typescript
const PropertyTypeLinks = ({ types }: Props) => (
  <div className="property-type-links">
    {types.map(type => (
      <Link key={type.id} href={type.href} className="type-link">
        <Icon name={type.icon} />
        <span>{type.label}</span>
      </Link>
    ))}
  </div>
);
```

---


---

## 12. GSAP Animations

**GSAP Status:** NOT USED  
**Alternative:** AOS, CSS Transitions

### Map Transitions
```css
.map-panel { transition: all 0.3s ease; }
.marker:hover { transform: scale(1.1); }
```

---

## 12.5 GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### GSAP Core Setup

```typescript
// lib/gsap-config.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

### Hero Section with Map-Style Search Animation

```typescript
// components/HeroSection.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background parallax
      tl.from('.hero-bg', {
        opacity: 0,
        scale: 1.15,
        duration: 1.2,
        ease: 'power2.out',
      });

      // Pre-title
      tl.from('.pre-title', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.6');

      // Main title
      tl.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.4');

      // Subtitle
      tl.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');

      // Search bar entrance
      tl.from('.hero-search', {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3');

      // Search tabs stagger
      tl.from('.search-tab', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, '-=0.2');

      // Property type quick links
      tl.from('.property-type-link', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.25,
        ease: 'power2.out',
      }, '-=0.1');

      // Scroll indicator
      tl.from('.scroll-indicator', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.1');

      // Animate scroll indicator
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{/* Hero content */}</div>;
};
```

### Section Reveal Animations

```typescript
// hooks/useSectionAnimation.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useSectionAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
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
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};
```

### Featured Listings Carousel Animation

```typescript
// components/FeaturedCarousel.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const FeaturedCarousel = ({ properties }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (direction: 'next' | 'prev', newSlide: HTMLElement) => {
    gsap.from(newSlide, {
      opacity: 0,
      x: direction === 'next' ? 50 : -50,
      duration: 0.4,
      ease: 'power2.out',
    });

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

### Testimonials Animation

```typescript
// components/Testimonials.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-content', {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
        },
      });

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

  return <div ref={testimonialRef}>{/* Testimonials */}</div>;
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "@react-google-maps/api": "^2.19.0",
    "mapbox-gl": "^3.0.0"
  }
}
```

---

## 13. Theme Variables

```css
:root {
  --color-primary: #e33e3e;
  --marker-bg: #e33e3e;
  --cluster-bg: #041e42;
}
```

---

## 14. NPM Dependencies

```json
{
  "dependencies": {
    "@react-google-maps/api": "^2.19.0",
    "mapbox-gl": "^3.0.0"
  }
}
```

---

## 15. Related Pages

## 12. Related Pages

- [Map V1](./map-v1.md) - Map listing page
- [Map V2](./map-v2.md) - Map listing with list-style cards
- [Map V3](./map-v3.md) - Compact map listing
- [Map V4](./map-v4.md) - Map on left side
- [List v1](./list-v1.md) - List view with sidebar filters
- [List All Style](./list-all-style.md) - All list card styles showcase

---

*Homez - Modern Designed Real Estate React NextJS Template*
