# Grid Full Width 2 Cols - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-full-2-col
- **Page Title:** Gird Full 2 Column || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page (Homepage-style)
- **Layout Style:** Homepage with 2-Column Property Grid Sections

---

## 2. Page Overview

### Layout Type
The Grid Full Width 2 Cols page presents a homepage-style layout that combines a hero search section with multiple property grid sections. Each section displays properties in a 2-column grid, providing a balance between visual impact and property density.

### Purpose
- Create an engaging property discovery experience
- Showcase properties in themed sections (Popular, By City, etc.)
- Provide comprehensive search functionality
- Offer property type and city-based navigation

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                │
│ - Title: "Find The Perfect Place to Live With your Family"│
│ - Search Bar (Buy/Rent/Sold tabs)                          │
│ - Stats: 389+ Award Winning, 703+ Happy Customer          │
├────────────────────────────────────────────────────────────┤
│ TRUSTED BY - Brand logos carousel                          │
├────────────────────────────────────────────────────────────┤
│ PROPERTIES BY CITIES - Grid of city cards                  │
├────────────────────────────────────────────────────────────┤
│ DISCOVER POPULAR PROPERTIES - 2-column grid                │
│ - For Rent / For Sale tabs                                 │
│ ┌──────────────────┐ ┌──────────────────┐                 │
│ │   Property Card  │ │   Property Card  │                 │
│ └──────────────────┘ └──────────────────┘                 │
├────────────────────────────────────────────────────────────┤
│ EXPLORE APARTMENT TYPES - Property type carousel           │
├────────────────────────────────────────────────────────────┤
│ WHY CHOOSE US - Service cards                              │
├────────────────────────────────────────────────────────────┤
│ TESTIMONIALS - Customer reviews                            │
├────────────────────────────────────────────────────────────┤
│ INQUIRY FORM - Real estate inquiry                         │
├────────────────────────────────────────────────────────────┤
│ BLOG SECTION - Recent posts                                │
├────────────────────────────────────────────────────────────┤
│ CTA - Become a Real Estate Agent                           │
├────────────────────────────────────────────────────────────┤
│ FOOTER - Full footer with all sections                     │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Homepage-style with 2-column property grids |
| **Property Grid Columns** | 2 columns |
| **City Grid Columns** | 4 columns (desktop) |
| **Card Style** | Standard property card with horizontal variant |
| **Container Width** | Full-width sections |
| **Gap** | 24px between cards |

### Grid CSS Configuration
```css
/* Property Grid - 2 Columns */
.property-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 0 40px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .property-grid-2col {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
}

@media (max-width: 575px) {
  .property-grid-2col {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 15px;
  }
}

/* City Cards Grid - 4 Columns */
.cities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 991px) {
  .cities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .cities-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Hero Section Data

```typescript
interface HeroSection {
  title: {
    line1: string; // "Find The Perfect Place to Live"
    line2: string; // "With your Family"
  };
  search: {
    tabs: Array<'Buy' | 'Rent' | 'Sold'>;
    placeholder: string;
    showAdvanced: boolean;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
}

// Example
const heroData: HeroSection = {
  title: {
    line1: "Find The Perfect Place to Live",
    line2: "With your Family"
  },
  search: {
    tabs: ['Buy', 'Rent', 'Sold'],
    placeholder: "Enter Keyword for Buy",
    showAdvanced: true
  },
  stats: [
    { value: "389+", label: "Award Wining" },
    { value: "703+", label: "Happy Customer" },
    { value: "195+", label: "Property Ready" }
  ]
};
```

### 4.2 Property Card Data (Horizontal Variant)

```typescript
interface HorizontalPropertyCard {
  id: string;
  slug: string;
  image: string;
  price: string; // "$986,00"
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  link: string;
}

// Example from hero slider
const heroProperties: HorizontalPropertyCard[] = [
  {
    id: "hero-001",
    slug: "studio-grand-avenue",
    image: "/images/properties/studio-grand.jpg",
    price: "$986,00",
    title: "Studio on Grand Avenue",
    location: "New York City",
    beds: 32,
    baths: 91,
    sqft: 1500,
    link: "/property/studio-grand-avenue"
  }
];
```

### 4.3 Popular Properties Section

```typescript
interface PopularPropertiesSection {
  title: string;
  description: string;
  tabs: Array<{
    id: 'rent' | 'sale';
    label: string;
    active: boolean;
  }>;
  properties: PropertyCard[];
}

// Example
const popularSection: PopularPropertiesSection = {
  title: "Discover Popular Properties",
  description: "Aliquam lacinia diam quis lacus euismod",
  tabs: [
    { id: 'rent', label: 'For Rent', active: true },
    { id: 'sale', label: 'For Sale', active: false }
  ],
  properties: [
    {
      id: "prop-001",
      image: "/images/listings/luxury-villa-1.jpg",
      status: "FOR SALE",
      featured: false,
      title: "Luxury villa in Rego Park",
      location: "Los Angeles City, CA, USA",
      beds: 2,
      baths: 1,
      sqft: 1300,
      price: "$82,000 / mo"
    }
    // ... more properties
  ]
};
```

### 4.4 City Cards Data

```typescript
interface CityCard {
  id: string;
  name: string;
  propertyCount: number;
  image: string;
  link: string;
}

const cities: CityCard[] = [
  { id: "city-001", name: "New York", propertyCount: 12, image: "/images/cities/new-york.jpg", link: "/search?city=new-york" },
  { id: "city-002", name: "Chicago", propertyCount: 12, image: "/images/cities/chicago.jpg", link: "/search?city=chicago" },
  { id: "city-003", name: "Manhattan", propertyCount: 12, image: "/images/cities/manhattan.jpg", link: "/search?city=manhattan" },
  { id: "city-004", name: "San Diego", propertyCount: 12, image: "/images/cities/san-diego.jpg", link: "/search?city=san-diego" },
  { id: "city-005", name: "San Francisco", propertyCount: 12, image: "/images/cities/san-francisco.jpg", link: "/search?city=san-francisco" },
  { id: "city-006", name: "Los Angeles", propertyCount: 12, image: "/images/cities/los-angeles.jpg", link: "/search?city=los-angeles" },
  { id: "city-007", name: "California", propertyCount: 12, image: "/images/cities/california.jpg", link: "/search?city=california" },
  { id: "city-008", name: "New Jersey", propertyCount: 12, image: "/images/cities/new-jersey.jpg", link: "/search?city=new-jersey" }
];
```

### 4.5 Property Types Data

```typescript
interface PropertyType {
  id: string;
  name: string;
  icon: string;
  count: number;
  link: string;
}

const propertyTypes: PropertyType[] = [
  { id: "houses", name: "Houses", icon: "home", count: 22, link: "/search?type=houses" },
  { id: "apartments", name: "Apartments", icon: "building", count: 22, link: "/search?type=apartments" },
  { id: "office", name: "Office", icon: "briefcase", count: 22, link: "/search?type=office" },
  { id: "villa", name: "Villa", icon: "villa", count: 22, link: "/search?type=villa" },
  { id: "townhome", name: "Townhome", icon: "townhome", count: 22, link: "/search?type=townhome" },
  { id: "bungalow", name: "Bungalow", icon: "bungalow", count: 22, link: "/search?type=bungalow" },
  { id: "loft", name: "Loft", icon: "loft", count: 22, link: "/search?type=loft" }
];
```

---

## 5. Component Breakdown

### 5.1 Hero Section
```
HeroSection/
├── Background Image/Gradient
├── Title
│   ├── "Find The Perfect Place to Live"
│   └── "With your Family"
├── Search Bar
│   ├── Tabs (Buy, Rent, Sold)
│   ├── Search Input
│   ├── Location Dropdown
│   ├── Advanced Button
│   └── Search Button
├── Stats Row
│   ├── 389+ Award Wining
│   ├── 703+ Happy Customer
│   └── 195+ Property Ready
└── Featured Property Slider (horizontal cards)
    ├── Property Card 1
    ├── Property Card 2
    ├── Property Card 3
    └── Pagination Dots
```

### 5.2 Properties by Cities Section
```
CitiesSection/
├── Heading: "Properties by Cities"
├── "See All Properties" Link
└── City Cards Grid (4 columns → 2 on tablet → 1 on mobile)
    └── City Card
        ├── City Image
        ├── Overlay
        ├── City Name
        └── Property Count
```

### 5.3 Popular Properties Section
```
PopularProperties/
├── Heading: "Discover Popular Properties"
├── Description: "Aliquam lacinia diam quis lacus euismod"
├── Tab Buttons
│   ├── For Rent (active)
│   └── For Sale
├── Property Grid (2 columns)
│   ├── Property Card
│   │   ├── Image
│   │   ├── Status Badge
│   │   ├── Action Buttons (overlay)
│   │   ├── Title
│   │   ├── Location
│   │   ├── Specs (Beds, Baths, Sqft)
│   │   └── Price
│   └── ... more cards
└── "Learn More" Link
```

### 5.4 Property Types Carousel
```
PropertyTypesCarousel/
├── Prev Button
├── Types Container
│   └── Type Card
│       ├── Icon
│       ├── Name: "Houses"
│       └── Count: "22 Properties"
└── Next Button
```

### 5.5 Services Section
```
ServicesSection/
├── Heading: "Why Choose Us"
├── Service Cards
│   ├── Property Management
│   ├── Mortgage Services
│   └── Currency Services
└── "Total Rent 4,382 Unit" stat
```

### 5.6 Testimonials Section
```
Testimonials/
├── Heading: "People Love Living with Realton"
├── Testimonial Cards (carousel)
│   ├── Rating (5 stars)
│   ├── Quote: "Great Work"
│   └── Author Name
├── Prev Button
└── Next Button
```

### 5.7 Inquiry Form Section
```
InquiryForm/
├── Heading: "Real Estate Inquiry Form"
├── Description: "As the complexity of buildings to increase"
├── Form Fields
│   ├── Inquiry Type (dropdown)
│   ├── Personnel Role (dropdown)
│   ├── Personnel Name (text input)
│   ├── Email (text input)
│   ├── How to address you (dropdown)
│   ├── Max Price (text input)
│   └── Min Size Sq ft (text input)
└── Submit Button
```

### 5.8 Blog Section
```
BlogSection/
├── Heading: "From Our Blog"
├── Blog Cards Grid
│   └── Blog Card
│       ├── Category Badge: "Living Room"
│       ├── Title (link)
│       └── Image
```

---

## 6. Interactive Elements

### 6.1 Hero Search
- **Tab Switching**: Changes placeholder and search context
- **Advanced Button**: Opens filter modal/dropdown
- **Search Button**: Executes search query

### 6.2 Popular Properties Tabs
- **For Rent / For Sale**: Filters properties by status
- **Active State**: Visual indicator for selected tab

### 6.3 Property Card Actions
| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status |
| **Compare** | Scale | Add to comparison |
| **Share** | Arrow | Navigate to detail |

### 6.4 Carousel Controls
- **Prev/Next Buttons**: Navigate through items
- **Pagination Dots**: Jump to specific slide
- **Auto-play**: Optional with pause on hover

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Property Grid | City Grid | Layout Changes |
|------------|-------|---------------|-----------|----------------|
| **Desktop XL** | > 1400px | 2 columns | 4 columns | Full width |
| **Desktop** | 1200-1399px | 2 columns | 4 columns | Standard |
| **Tablet L** | 992-1199px | 2 columns | 3 columns | Condensed |
| **Tablet P** | 768-991px | 2 columns | 2 columns | Mobile nav |
| **Mobile** | < 576px | 1 column | 1 column | Stacked |

---

## 8. Technical Implementation

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

### Hero Slider Implementation
```typescript
// Swiper for Hero Property Slider
const heroSliderConfig = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { clickable: true }
};
```

---


---

## 9. GSAP Animations

### Animation Library Analysis

**GSAP Status:** NOT USED  
**Alternative Animation Libraries:** AOS (Animate On Scroll), WOW.js, CSS Transitions

### AOS Animation Configuration
```typescript
AOS.init({
  duration: 1200,
  easing: 'ease',
  once: true,
  offset: 120
});
```

### CSS Transition Animations
```css
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
.btn:hover {
  transform: translateY(-2px);
}
```

---

## 9.5 GSAP Animation Implementation

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

### Homepage-Style Hero Animation

```typescript
// components/HeroSection.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero background
      tl.from('.hero-bg', {
        opacity: 0,
        scale: 1.05,
        duration: 1,
        ease: 'power2.out',
      });

      // Title and subtitle
      tl.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.4');

      // Search bar
      tl.from('.hero-search', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');

      // Stats row
      tl.from('.stat-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{/* Hero content */}</div>;
};
```

### 2-Column Property Grid Animation

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
      gsap.from('.property-card', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return <div ref={gridRef}>{/* Grid content */}</div>;
};
```

### City Cards Animation

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
  }, []);

  return <div ref={gridRef}>{/* Cities grid */}</div>;
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "next": "^14.0.0",
    "react": "^18.2.0"
  }
}
```

---

## 10. Theme Variables

### CSS Custom Properties
```css
:root {
  --color-primary: #e33e3e;
  --color-secondary: #041e42;
  --color-dark: #0f172a;
  --color-gray-300: #efefef;
  --radius-lg: 12px;
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

## 11. NPM Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "bootstrap": "^5.3.0",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "aos": "^2.3.4"
  }
}
```

---

## 12. Related Pages

## 9. Related Pages

- [Grid Default](./grid-default.md) - Homepage-style with featured listings
- [Grid Full Width 3 Cols](./grid-full-3-col.md) - 3-column listing grid
- [Banner Search v1](./banner-search-v1.md) - Banner with mortgage calculator

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
