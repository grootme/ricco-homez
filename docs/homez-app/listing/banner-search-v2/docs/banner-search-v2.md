# Banner Search v2 - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/banner-search-v2
- **Page Title:** Banner Search V2 || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Hero Banner with Search and Full-Width Property Grid

---

## 2. Page Overview

### Layout Type
The Banner Search v2 page presents a hero banner with search functionality at the top, followed by a full-width property grid without a sidebar. This layout maximizes property visibility while maintaining prominent search functionality at the top of the page.

### Purpose
- Provide prominent hero banner with search functionality
- Display maximum number of properties in grid format
- Enable quick filtering through top search bar
- Create immersive property browsing experience

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ HERO BANNER                                                 │
│ - Background Image                                          │
│ - Title: "Find Your Dream Home"                            │
│ - Search Bar (Buy/Rent/Sold tabs + Input + Buttons)        │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title: "New York Homes for Sale"            │
│              Breadcrumb: Home / For Rent                   │
│              Sort Dropdown                                  │
├────────────────────────────────────────────────────────────┤
│ PROPERTY GRID (Full Width, 4 Columns)                      │
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
│ Result Count: "1-10 of 25+ property available"             │
├────────────────────────────────────────────────────────────┤
│ FOOTER - Contact, Apps, Newsletter, Links                  │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Hero banner + Full-width grid |
| **Hero Banner Height** | ~350px |
| **Property Grid Columns** | 4 columns (desktop) |
| **Card Style** | Compact property card |
| **Container Width** | Full viewport width |

### Grid CSS Configuration
```css
/* Hero Banner */
.hero-banner-v2 {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Property Grid */
.property-grid-full {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px 40px;
  max-width: 1600px;
  margin: 0 auto;
}

@media (max-width: 1399px) {
  .property-grid-full {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .property-grid-full {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }
}

@media (max-width: 575px) {
  .property-grid-full {
    grid-template-columns: 1fr;
    padding: 15px;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Hero Banner Data (Same as v1)

```typescript
interface HeroBanner {
  title: string;
  background: {
    type: 'image' | 'gradient';
    src: string;
    overlay: boolean;
  };
  search: {
    tabs: Array<{ id: string; label: string; active: boolean }>;
    input: { placeholder: string; value: string };
    advancedButton: boolean;
    searchButton: boolean;
  };
}

// Example
const heroBanner: HeroBanner = {
  title: "Find Your Dream Home",
  background: { type: "image", src: "/images/hero/banner.jpg", overlay: true },
  search: {
    tabs: [
      { id: 'buy', label: 'Buy', active: true },
      { id: 'rent', label: 'Rent', active: false },
      { id: 'sold', label: 'Sold', active: false }
    ],
    input: { placeholder: "Search Products for Buy", value: "" },
    advancedButton: true,
    searchButton: true
  }
};
```

### 4.2 Property Card Data

```typescript
interface CompactPropertyCard {
  id: string;
  slug: string;
  image: string;
  featured: boolean;
  status: 'for-sale' | 'for-rent';
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
}

// Example Properties (10+ per page)
const properties: CompactPropertyCard[] = [
  {
    id: "prop-001",
    slug: "equestrian-family-home",
    image: "/images/listings/prop-001.jpg",
    featured: true,
    status: "for-rent",
    price: "$14,000 / mo",
    title: "Equestrian Family Home",
    location: "San Diego City, CA, USA",
    beds: 5,
    baths: 4,
    sqft: 900,
    actions: { favorite: false, compare: false, share: false }
  }
  // ... more properties
];
```

---

## 5. Component Breakdown

### 5.1 Hero Banner Component
```
HeroBannerV2/
├── Background Container
│   ├── Background Image
│   └── Overlay (darker for text contrast)
├── Content Container
│   ├── Title: "Find Your Dream Home"
│   └── Search Component
│       ├── Tab Buttons (Buy, Rent, Sold)
│       ├── Search Input Field
│       ├── Advanced Button
│       └── Search Button
```

### 5.2 Property Card Component
```
CompactPropertyCard/
├── Card Container
│   ├── Image Section
│   │   ├── Property Image
│   │   ├── Featured Badge (conditional)
│   │   └── Action Buttons (overlay)
│   │       ├── Favorite
│   │       ├── Compare
│   │       └── Share
│   └── Content Section
│       ├── Title (link)
│       ├── Location
│       ├── Specs Row (Beds, Baths, Sqft)
│       └── Price (bottom)
```

### 5.3 Sort Component
```
SortDropdown/
├── Label: "Sort by"
└── Select Element
    ├── Newest (default)
    ├── Best Seller
    ├── Best Match
    ├── Price Low
    └── Price High
```

### 5.4 Pagination Component
```
Pagination/
├── Previous Button
├── Page Numbers (1, 2, 3)
├── Next Button
└── Result Count
```

---

## 6. Interactive Elements

### 6.1 Hero Search
| Element | Type | Behavior |
|---------|------|----------|
| **Buy Tab** | Button | Switch to buy properties search |
| **Rent Tab** | Button | Switch to rental properties search |
| **Sold Tab** | Button | Switch to sold properties search |
| **Search Input** | Text | Location/keyword search with autocomplete |
| **Advanced Button** | Button | Opens comprehensive filter modal |
| **Search Button** | Button | Executes search with current filters |

### 6.2 Property Card Actions
| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status (requires auth) |
| **Compare** | Scale | Add to comparison list (max 4) |
| **Share** | Arrow | Navigate to detail page |
| **Card Click** | - | Navigate to property detail |

### 6.3 Sort Dropdown
```typescript
interface SortBehavior {
  options: Array<{
    id: string;
    label: string;
    direction: 'asc' | 'desc' | null;
  }>;
  defaultOption: string;
  onChange: (option: string) => void;
}

const sortOptions = [
  { id: 'newest', label: 'Newest', direction: null },
  { id: 'best-seller', label: 'Best Seller', direction: null },
  { id: 'best-match', label: 'Best Match', direction: null },
  { id: 'price-low', label: 'Price Low', direction: 'asc' },
  { id: 'price-high', label: 'Price High', direction: 'desc' }
];
```

### 6.4 Pagination Controls
| Control | Behavior |
|---------|----------|
| **Page Number** | Navigate to specific page |
| **Previous** | Go to previous page (disabled on page 1) |
| **Next** | Go to next page (disabled on last page) |

---

## 7. Responsive Breakpoints

### Breakpoint Configuration

| Breakpoint | Width | Grid Columns | Hero Height | Cards Per Page |
|------------|-------|--------------|-------------|----------------|
| **Desktop XL** | > 1400px | 4 columns | 350px | 12+ |
| **Desktop** | 1200-1399px | 3 columns | 350px | 9+ |
| **Tablet L** | 992-1199px | 3 columns | 300px | 9+ |
| **Tablet P** | 768-991px | 2 columns | 250px | 6+ |
| **Mobile L** | 576-767px | 2 columns | 250px | 4+ |
| **Mobile** | < 576px | 1 column | 200px | 3+ |

### Responsive CSS
```css
/* Hero Banner Responsive */
@media (max-width: 767px) {
  .hero-banner-v2 {
    height: 250px;
  }
  
  .hero-banner-v2 .title {
    font-size: 24px;
  }
  
  .hero-banner-v2 .search-tabs {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
  
  .hero-banner-v2 .search-input {
    width: 100%;
  }
  
  .hero-banner-v2 .button-group {
    flex-direction: column;
    width: 100%;
  }
}

/* Property Grid Responsive */
@media (min-width: 1400px) {
  .property-grid-full {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 20px 60px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .property-grid-full {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .property-grid-full {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 30px;
  }
}

@media (max-width: 575px) {
  .property-grid-full {
    grid-template-columns: 1fr;
    padding: 15px;
    gap: 16px;
  }
}
```

---

## 8. Key Differences from Banner Search v1

### Layout Comparison

| Feature | v1 | v2 |
|---------|-----|-----|
| **Sidebar** | Yes (Mortgage Calculator + Recently Viewed) | No |
| **Property Grid** | 3 columns | 4 columns |
| **Recently Viewed** | Yes (sidebar) | No |
| **Property Density** | Lower | Higher |
| **Focus** | Affordability + Search | Pure Search + Browse |
| **Mobile Experience** | Good | Better (more space) |

### When to Use Each Version

**Use v1 when:**
- Target audience includes first-time buyers
- Affordability planning is important
- Users benefit from mortgage calculations
- Recently viewed quick access is needed

**Use v2 when:**
- Maximum property visibility is priority
- Mobile users are primary audience
- Clean, minimal interface is preferred
- Quick browsing is the goal

---

## 9. Use Case Recommendations

### Ideal For
- **Mobile-first users** (no sidebar obstruction)
- **Visual browsers** preferring more properties
- **Quick property scanning**
- **Search-focused workflows**
- **Real estate agents** reviewing listings

### Advantages
- Maximum property visibility per page
- Clean, distraction-free layout
- Prominent search functionality
- Better mobile experience
- Faster page load (no sidebar content)

### Considerations
- No mortgage calculator
- No recently viewed section
- Less feature-rich than v1
- Best for experienced property searchers

---

## 10. Performance Considerations

### Image Optimization
```typescript
const imageConfig = {
  hero: {
    priority: true,
    sizes: [1920, 1600, 1200, 800],
    formats: ['webp', 'jpg']
  },
  propertyCards: {
    loading: 'lazy',
    sizes: [400, 300, 200],
    placeholder: 'blur'
  }
};
```

### Code Splitting
```typescript
// Lazy load below-fold content
const PropertyGrid = lazy(() => import('./PropertyGrid'));
const Pagination = lazy(() => import('./Pagination'));
const Footer = lazy(() => import('./Footer'));
```

---

## 11. Accessibility

### ARIA Implementation
```html
<!-- Hero Search -->
<section aria-label="Property search">
  <h2>Find Your Dream Home</h2>
  <div role="tablist" aria-label="Search type">
    <button role="tab" aria-selected="true">Buy</button>
    <button role="tab" aria-selected="false">Rent</button>
    <button role="tab" aria-selected="false">Sold</button>
  </div>
  <input type="search" aria-label="Search properties" />
  <button aria-label="Advanced filters">Advanced</button>
  <button type="submit" aria-label="Search">Search</button>
</section>

<!-- Property Grid -->
<section aria-label="Property listings">
  <article aria-label="Property: Equestrian Family Home">
    <!-- Card content -->
  </article>
</section>
```

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Navigate between elements |
| Enter | Activate buttons/links |
| Escape | Close modals |
| Arrow Keys | Navigate tabs |

---

## 12. Technical Implementation

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

### Hero Banner Search Implementation
```typescript
// Hero Search Component
const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sold'>('buy');
  
  return (
    <section className="hero-banner">
      <h1>Find Your Dream Home</h1>
      <div className="search-tabs">
        {['buy', 'rent', 'sold'].map(tab => (
          <button 
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <SearchInput placeholder={`Search for ${activeTab}`} />
      <button className="advanced-btn">Advanced</button>
      <button className="search-btn">Search</button>
    </section>
  );
};
```

---


---

## 13. GSAP Animations

**GSAP Status:** NOT USED  
**Alternative:** AOS, WOW.js

### Hero Banner Animations
```css
.hero-banner { transition: opacity 0.5s ease; }
.search-form { transition: transform 0.3s ease; }
```

---

## 13.5 GSAP Animation Implementation

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

### Hero Banner with Search Animation

```typescript
// components/HeroBanner.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroBanner = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background fade and scale
      tl.from('.hero-bg', {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power2.out',
      });

      // Title animation
      tl.from('.hero-title', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Search bar entrance
      tl.from('.hero-search', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4');

      // Search tabs stagger
      tl.from('.search-tab', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{/* Hero content */}</div>;
};
```

### Full-Width Property Grid Animation

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
      // 4-column grid stagger
      gsap.from('.property-card', {
        opacity: 0,
        y: 40,
        stagger: 0.06,
        duration: 0.5,
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

### Pagination Animation

```typescript
// components/Pagination.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from('.pagination-item', {
      opacity: 0,
      scale: 0.8,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(1.7)',
    });
  }, [currentPage]);

  return <div ref={paginationRef}>{/* Pagination content */}</div>;
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "react-input-range": "^1.3.0",
    "react-hook-form": "^7.48.0"
  }
}
```

---

## 14. Theme Variables

```css
:root {
  --color-primary: #e33e3e;
  --hero-overlay: rgba(0, 0, 0, 0.5);
  --input-bg: #ffffff;
}
```

---

## 15. NPM Dependencies

```json
{
  "dependencies": {
    "react-input-range": "^1.3.0",
    "react-hook-form": "^7.48.0"
  }
}
```

---

## 16. Related Pages

## 13. Related Pages

- [Banner Search v1](./banner-search-v1.md) - With mortgage calculator sidebar
- [Grid Full Width 4 Cols](./grid-full-4-col.md) - 4-column grid only
- [Grid Full Width 3 Cols](./grid-full-3-col.md) - 3-column grid

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
