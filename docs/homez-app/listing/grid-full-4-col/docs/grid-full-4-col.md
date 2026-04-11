# Grid Full Width 4 Cols - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-full-4-col
- **Page Title:** Gird Full 4 Column || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Full-width Grid with 4 Columns (Maximum Density)

---

## 2. Page Overview

### Layout Type
The Grid Full Width 4 Cols page presents the maximum property density layout with four property cards per row. This layout is optimized for users who want to scan through many properties quickly, making it ideal for property-heavy search results or marketplace-style browsing.

### Purpose
- Display maximum number of properties per page
- Enable quick property scanning and comparison
- Provide comprehensive filtering through horizontal dropdown filters
- Optimize for desktop-first property browsing

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title: "New York Homes for Sale"            │
│              Breadcrumb: Home / For Rent                   │
├────────────────────────────────────────────────────────────┤
│ HORIZONTAL FILTER BAR                                       │
│ - For Sale | Property Type | Price | Beds/Baths | More     │
├────────────────────────────────────────────────────────────┤
│ SORTING & VIEW TOGGLE                                       │
│ - Sort Dropdown | Grid Toggle | List Toggle                │
├────────────────────────────────────────────────────────────┤
│ PROPERTY GRID (4 Columns)                                  │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │ Card   │ │ Card   │ │ Card   │ │ Card   │               │
│ └────────┘ └────────┘ └────────┘ └────────┘               │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │ Card   │ │ Card   │ │ Card   │ │ Card   │               │
│ └────────┘ └────────┘ └────────┘ └────────┘               │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │ Card   │ │ Card   │ │ Card   │ │ Card   │               │
│ └────────┘ └────────┘ └────────┘ └────────┘               │
├────────────────────────────────────────────────────────────┤
│ PAGINATION - 1 | 2 | 3 | Next                              │
│ Result Count: "1-12 of 25+ property available"             │
├────────────────────────────────────────────────────────────┤
│ FOOTER SIDEBAR - Contact, Apps, Newsletter, Links          │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Full-width Grid (maximum density) |
| **Columns (Desktop XL)** | 4 columns |
| **Columns (Desktop)** | 4 columns |
| **Columns (Tablet L)** | 3 columns |
| **Columns (Tablet P)** | 2 columns |
| **Columns (Mobile)** | 1 column |
| **Card Style** | Compact property card |
| **Container Width** | Full viewport width |
| **Gap** | 20px between cards |

### Grid CSS Configuration
```css
/* Property Grid - 4 Columns */
.property-listing-grid-4col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 40px;
  max-width: 1600px;
  margin: 0 auto;
}

@media (min-width: 1400px) {
  .property-listing-grid-4col {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 0 60px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .property-listing-grid-4col {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 0 40px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .property-listing-grid-4col {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    padding: 0 30px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .property-listing-grid-4col {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .property-listing-grid-4col {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 15px;
  }
}

/* Compact Card Styling */
.property-card-compact {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.property-card-compact .image-section {
  height: 180px;
}

.property-card-compact .content-section {
  padding: 12px;
}
```

### Card Dimensions
| Breakpoint | Card Width | Image Height | Total Card Height |
|------------|------------|--------------|-------------------|
| Desktop XL (>1400px) | ~350px | 200px | ~340px |
| Desktop (1200-1399px) | ~300px | 180px | ~320px |
| Tablet L (992-1199px) | ~290px | 170px | ~310px |
| Tablet P (768-991px) | ~340px | 200px | ~340px |
| Mobile (< 576px) | 100% | 200px | Auto |

---

## 4. Data Content Structure

### 4.1 Property Card Data Structure

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **Image** | URL | Primary property image | `/images/listings/property-1.jpg` |
| **Featured Badge** | Boolean | Featured indicator | "FEATURED" overlay |
| **Price** | String | Price display | "$14,000 / mo" |
| **Title** | String | Property name | "Equestrian Family Home" |
| **Location** | String | Address | "San Diego City, CA, USA" |
| **Beds** | Number | Bedroom count | 5 |
| **Baths** | Number | Bathroom count | 4 |
| **Sqft** | Number | Square footage | 900 |
| **Status** | String | Listing status | "For Rent" |
| **Actions** | Array | Interactive buttons | Favorite, Compare, Share |

### Property Card Data Model
```typescript
interface CompactPropertyCard {
  id: string;
  slug: string;
  image: string;
  featured: boolean;
  status: 'for-sale' | 'for-rent' | 'sold';
  price: {
    amount: number;
    currency: string;
    period: 'mo' | 'total' | null;
    formatted: string;
  };
  title: string;
  location: string;
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
}

// Example Properties (12 per page in 4-col layout)
const sampleProperties: CompactPropertyCard[] = [
  {
    id: "prop-001",
    slug: "equestrian-family-home",
    image: "/images/listings/prop-001.jpg",
    featured: true,
    status: "for-rent",
    price: { amount: 14000, currency: "USD", period: "mo", formatted: "$14,000 / mo" },
    title: "Equestrian Family Home",
    location: "San Diego City, CA, USA",
    specs: { beds: 5, baths: 4, sqft: 900 }
  },
  {
    id: "prop-002",
    slug: "luxury-villa-rego-park",
    image: "/images/listings/prop-002.jpg",
    featured: false,
    status: "for-rent",
    price: { amount: 82000, currency: "USD", period: "mo", formatted: "$82,000 / mo" },
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    specs: { beds: 4, baths: 4, sqft: 1200 }
  },
  // ... 10 more properties
];
```

### 4.2 Filter Data (Same as 3-Col)
See Grid Full Width 3 Cols documentation for complete filter data structure.

### 4.3 Pagination Data

```typescript
interface FourColPagination {
  currentPage: number;
  totalPages: number;
  itemsPerPage: 12; // 4 columns × 3 rows
  totalItems: number;
  displayedItems: string;
}

// Example
const pagination: FourColPagination = {
  currentPage: 1,
  totalPages: 5,
  itemsPerPage: 12,
  totalItems: 50,
  displayedItems: "1-12 of 50 properties"
};
```

---

## 5. Component Breakdown

### 5.1 Compact Property Card
```
CompactPropertyCard/
├── Card Container (smaller padding)
│   ├── Image Section (height: 180px)
│   │   ├── Property Image
│   │   ├── Featured Badge (optional)
│   │   └── Price Tag
│   └── Content Section (padding: 12px)
│       ├── Title (smaller font)
│       ├── Location (compact)
│       ├── Specs Row (icon + number)
│       │   ├── 🛏 5
│       │   ├── 🛁 4
│       │   └── ▢ 900
│       ├── Separator
│       ├── Status Label
│       └── Action Icons (smaller)
```

### 5.2 Header Component
```
Header/
├── Logo (link to home)
├── Navigation Menu
│   ├── Home (dropdown)
│   ├── Listing (dropdown - current section)
│   ├── Property (dropdown)
│   ├── Blog (dropdown)
│   └── Pages (dropdown)
├── Login/Register Button
├── Add Property Button
└── Hamburger Menu (mobile)
```

### 5.3 Horizontal Filter Bar
```
HorizontalFilterBar/
├── Filter Buttons
│   ├── For Sale (dropdown)
│   │   └── Options: All, Buy, Rent
│   ├── Property Type (dropdown)
│   │   └── Options: All, Houses, Apartments, Office, Villa
│   ├── Price (dropdown)
│   │   └── Min/Max Slider
│   ├── Beds / Baths (dropdown)
│   │   └── Min Selectors
│   └── More Filter (button)
│       └── Opens Full Filter Modal
```

### 5.4 Sort and View Toggle
```
SortAndView/
├── Sort Section
│   ├── Label: "Sort by"
│   └── Sort Dropdown
│       ├── Newest (default)
│       ├── Best Seller
│       ├── Best Match
│       ├── Price Low
│       └── Price High
└── View Toggle
    ├── Grid Button (active)
    └── List Button
```

### 5.5 Pagination Component
```
Pagination/
├── Previous Button (arrow left)
├── Page Numbers
│   ├── 1 (active)
│   ├── 2
│   ├── 3
│   └── Next (arrow right)
├── Result Count
│   └── "1-12 of 25+ properties"
```

### 5.6 Footer Sidebar
```
FooterSidebar/
├── Contact Section
│   ├── Phone: "+(0) 123 050 945 02"
│   └── Email: "hi@homez.com"
├── Apps Download
│   ├── Apple Store Link
│   └── Google Play Link
├── Social Media Links
├── Newsletter
├── Popular Search Links
├── Quick Links
├── Discover Links
└── Copyright
```

---

## 6. Interactive Elements

### 6.1 Filter Dropdown Behavior

| Filter | Type | Options | Behavior |
|--------|------|---------|----------|
| **For Sale** | Dropdown | All, Buy, Rent | Radio button selection |
| **Property Type** | Dropdown | Multiple types | Checkbox selection |
| **Price** | Dropdown | Min/Max range | Slider control |
| **Beds/Baths** | Dropdown | Min values | Button group selection |
| **More Filter** | Button | - | Opens modal with full filters |

### 6.2 Property Card Interactions

| Action | Icon | Behavior |
|--------|------|----------|
| **Card Click** | - | Navigate to property detail page |
| **Favorite** | Heart | Toggle saved status (requires auth) |
| **Compare** | Scale | Add to comparison list (max 4) |
| **Share** | Share | Open share options |

### 6.3 View Toggle

| View | Icon | Behavior |
|------|------|----------|
| **Grid** | Grid icon | Display properties in grid layout |
| **List** | List icon | Display properties in list layout |

### 6.4 Pagination Controls

```typescript
interface PaginationBehavior {
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  scrollToTop: boolean;
  loadingState: 'skeleton' | 'spinner';
}
```

---

## 7. Responsive Breakpoints

### Breakpoint-Specific Behavior

| Breakpoint | Width | Columns | Cards Visible | Notes |
|------------|-------|---------|---------------|-------|
| **Desktop XL** | > 1400px | 4 | 12 (3 rows) | Optimal viewing |
| **Desktop** | 1200-1399px | 4 | 12 (3 rows) | Standard desktop |
| **Tablet L** | 992-1199px | 3 | 9 (3 rows) | Reduced density |
| **Tablet P** | 768-991px | 2 | 6 (3 rows) | Touch-friendly |
| **Mobile L** | 576-767px | 2 | 4 (2 rows) | Compact mobile |
| **Mobile** | < 576px | 1 | 3 (3 rows) | Single column |

### Responsive CSS
```css
/* 4-column specific responsive adjustments */
@media (min-width: 1200px) {
  .property-card-compact {
    font-size: 14px;
  }
  
  .property-card-compact .title {
    font-size: 16px;
    line-height: 1.3;
  }
  
  .property-card-compact .specs {
    gap: 8px;
  }
}

@media (max-width: 767px) {
  .property-card-compact {
    font-size: 15px;
  }
  
  .property-card-compact .image-section {
    height: 200px;
  }
}
```

---

## 8. Use Case Recommendations

### Ideal For
- **Property portals** with large inventories
- **Search results pages** needing maximum density
- **Desktop-heavy user base**
- **Quick scanning** and comparison shopping

### Advantages
- Maximum property visibility per page
- Efficient screen real estate usage
- Quick visual comparison
- Reduced pagination clicks

### Considerations
- Smaller cards may hide details
- Mobile experience degraded to 1-2 columns
- Best suited for experienced property searchers

---

## 9. Performance Considerations

### Image Optimization
- Lazy loading for property images below the fold
- WebP format with fallback to JPEG
- Responsive image sizes: 320px, 400px, 600px, 800px
- Placeholder blur for loading states

### Code Splitting
```typescript
// Lazy load components
const PropertyCard = lazy(() => import('./PropertyCard'));
const FilterBar = lazy(() => import('./FilterBar'));
const Pagination = lazy(() => import('./Pagination'));
```

### Caching Strategy
```typescript
const cacheConfig = {
  properties: {
    ttl: 300, // 5 minutes
    staleWhileRevalidate: true
  },
  filters: {
    ttl: 3600 // 1 hour
  }
};
```

---

## 10. Accessibility

### ARIA Labels
```html
<!-- Property Card -->
<article role="article" aria-label="Property: Equestrian Family Home">
  <a href="/property/slug" aria-label="View property details">
    <img alt="Property exterior" />
  </a>
  <button aria-label="Add to favorites" aria-pressed="false">
    ♥
  </button>
</article>

<!-- Filter Dropdown -->
<div role="menu" aria-label="Listing status filter">
  <button role="menuitem">All</button>
  <button role="menuitem">Buy</button>
  <button role="menuitem">Rent</button>
</div>
```

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Navigate between interactive elements |
| Enter | Activate buttons/links |
| Escape | Close dropdowns |
| Arrow Keys | Navigate dropdown options |

---

## 11. Technical Implementation

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

### Grid Optimization
```typescript
// Virtual scrolling for large lists
import { VirtualScroller } from 'react-virtual-scroller';

const PropertyGrid = ({ properties }) => (
  <VirtualScroller
    items={properties}
    itemHeight={380}
    render={({ item }) => <PropertyCard property={item} />}
  />
);
```

---


---

## 12. GSAP Animations

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

### 4-Column Grid Stagger Animation

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
      // 4-column grid with faster stagger
      gsap.from('.property-card', {
        opacity: 0,
        y: 35,
        stagger: 0.05,              // Faster stagger for dense grid
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return <div ref={gridRef}>{/* Grid content */}</div>;
};
```

### Compact Card Animation

```typescript
// components/CompactCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const CompactCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -4,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.25,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      duration: 0.25,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={imageRef}>{/* Image */}</div>
    </div>
  );
};
```

### Filter Bar Animation

```typescript
// components/FilterBar.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const FilterBar = () => {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.filter-bar', {
        opacity: 0,
        y: -25,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.filter-btn', {
        opacity: 0,
        y: 12,
        stagger: 0.04,
        duration: 0.25,
        ease: 'back.out(1.7)',
        delay: 0.2,
      });
    }, filterRef);

    return () => ctx.revert();
  }, []);

  return <div ref={filterRef}>{/* Filter content */}</div>;
};
```

### Pagination Animation

```typescript
// components/Pagination.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Pagination = ({ currentPage }) => {
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from('.pagination-item', {
      opacity: 0,
      scale: 0.8,
      stagger: 0.04,
      duration: 0.25,
      ease: 'back.out(1.7)',
    });
  }, [currentPage]);

  return <div ref={paginationRef}>{/* Pagination */}</div>;
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

## 13. Theme Variables

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

## 14. NPM Dependencies

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

## 15. Related Pages

## 12. Related Pages

- [Grid Default](./grid-default.md) - Homepage-style layout
- [Grid Full Width 3 Cols](./grid-full-3-col.md) - 3-column grid (balanced)
- [Grid Full Width 2 Cols](./grid-full-2-col.md) - 2-column with hero
- [Grid Full Width 1 Cols v1](./grid-full-1-col-v1.md) - Single column with sidebar

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
