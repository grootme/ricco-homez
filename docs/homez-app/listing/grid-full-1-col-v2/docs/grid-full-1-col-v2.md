# Grid Full Width 1 Cols v2 - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-full-1-col-v2
- **Page Title:** Gird Full 1 Column V2 || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Single Column Grid with Top Filter Bar and Right Sidebar

---

## 2. Page Overview

### Layout Type
The Grid Full Width 1 Cols v2 page presents a single-column property listing with a horizontal filter bar at the top and a right sidebar containing trending and recent properties. This layout combines comprehensive filtering with discovery features.

### Purpose
- Provide horizontal filter bar for quick filtering
- Display properties in a focused single-column format
- Showcase trending and recent properties in sidebar
- Enable property discovery alongside search results

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ TOP SEARCH BAR                                              │
│ - Search Input | For Sale | Property Type | Price | More   │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title: "New York Homes for Sale"            │
│              Breadcrumb: Home / For Rent                   │
│              Sort Dropdown                                  │
├───────────────────────────────────────┬────────────────────┤
│                                       │                    │
│   PROPERTY LIST (1 Column)            │   RIGHT SIDEBAR    │
│                                       │                    │
│   ┌────────────────────────────────┐  │   PROPERTY         │
│   │   Property Card (Full Width)   │  │   TRENDING         │
│   │   Image | Content | Actions    │  │   - Card 1         │
│   └────────────────────────────────┘  │   - Card 2         │
│                                       │                    │
│   ┌────────────────────────────────┐  │   RECENT           │
│   │   Property Card (Full Width)   │  │   PROPERTY         │
│   └────────────────────────────────┘  │   - Price/Specs    │
│                                       │   - Price/Specs    │
│   PAGINATION                          │   - Price/Specs    │
│                                       │                    │
├───────────────────────────────────────┴────────────────────┤
│ FOOTER - Contact, Apps, Newsletter, Links                  │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Single column with right sidebar |
| **Sidebar Width** | ~280px (fixed) |
| **Property Column** | Flexible (remaining width) |
| **Card Style** | Horizontal property card (full width) |
| **Top Filter Bar** | Horizontal dropdown filters |

### Grid CSS Configuration
```css
/* Main Layout */
.listing-layout-right-sidebar {
  display: flex;
  gap: 30px;
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Property List */
.property-list-main {
  flex: 1;
  min-width: 0;
}

/* Right Sidebar */
.sidebar-right {
  width: 280px;
  flex-shrink: 0;
}

/* Property Card */
.property-card-horizontal {
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 24px;
}

@media (max-width: 991px) {
  .listing-layout-right-sidebar {
    flex-direction: column;
  }
  
  .sidebar-right {
    width: 100%;
    order: -1;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Top Search Bar Data

```typescript
interface TopSearchBar {
  searchInput: {
    placeholder: string; // "Enter an address, neighborhood or city"
    value: string;
  };
  filters: Array<{
    id: string;
    label: string;
    type: 'dropdown' | 'button';
    options?: any[];
  }>;
}

// Example
const topSearchBar: TopSearchBar = {
  searchInput: {
    placeholder: "Enter an address, neighborhood or city",
    value: ""
  },
  filters: [
    { id: 'status', label: 'For Sale', type: 'dropdown' },
    { id: 'type', label: 'Property Type', type: 'dropdown' },
    { id: 'price', label: 'Price', type: 'dropdown' },
    { id: 'beds-baths', label: 'Beds / Baths', type: 'dropdown' },
    { id: 'more', label: 'More Filter', type: 'button' }
  ]
};
```

### 4.2 Right Sidebar Data

```typescript
interface RightSidebar {
  propertyTrending: {
    heading: string;
    properties: Array<{
      id: string;
      image: string;
      title: string;
      location: string;
      beds: number;
      baths: number;
      sqft: number;
      slug: string;
    }>;
  };
  recentProperty: {
    heading: string;
    properties: Array<{
      id: string;
      price: string;
      beds: number;
      baths: number;
      sqft: number;
    }>;
  };
}

// Example
const rightSidebar: RightSidebar = {
  propertyTrending: {
    heading: "Property Trending",
    properties: [
      {
        id: "trend-001",
        image: "/images/listings/trending-1.jpg",
        title: "Equestrian Family Home",
        location: "New York City, CA, USA",
        beds: 1,
        baths: 2,
        sqft: 1200,
        slug: "equestrian-family-home"
      },
      {
        id: "trend-002",
        image: "/images/listings/trending-2.jpg",
        title: "Luxury villa in Rego Park",
        location: "Los Angeles City, CA, USA",
        beds: 2,
        baths: 1,
        sqft: 1300,
        slug: "luxury-villa-rego-park"
      }
    ]
  },
  recentProperty: {
    heading: "Recent Property",
    properties: [
      { id: "recent-001", price: "$14,000 /mo", beds: 1, baths: 2, sqft: 1200 },
      { id: "recent-002", price: "$82,000 /mo", beds: 2, baths: 1, sqft: 1300 },
      { id: "recent-003", price: "$14,000 /mo", beds: 3, baths: 3, sqft: 1000 }
    ]
  }
};
```

---

## 5. Component Breakdown

### 5.1 Top Search Bar
```
TopSearchBar/
├── Container
├── Search Input Field
│   └── Placeholder: "Enter an address, neighborhood or city"
├── Filter Buttons (horizontal)
│   ├── For Sale (dropdown)
│   ├── Property Type (dropdown)
│   ├── Price (dropdown)
│   ├── Beds / Baths (dropdown)
│   └── More Filter (button)
└── Apply Button (optional)
```

### 5.2 Right Sidebar
```
RightSidebar/
├── Property Trending Section
│   ├── Heading: "Property Trending"
│   └── Trending Property Cards
│       ├── Property Image
│       ├── Title (link)
│       ├── Location
│       ├── Specs (beds, baths, sqft)
│       └── Action Icons
├── Recent Property Section
│   ├── Heading: "Recent Property"
│   └── Recent Property Items
│       ├── Price
│       ├── Beds count
│       ├── Baths count
│       └── Sqft
└── Contact Info (optional)
```

### 5.3 Horizontal Property Card
```
HorizontalPropertyCard/
├── Image Section (fixed width: 280px)
│   ├── Property Image
│   ├── Featured Badge
│   └── Price Tag
└── Content Section
    ├── Title (link)
    ├── Location
    ├── Specs Row (beds, baths, sqft)
    ├── Separator
    ├── Status Label
    └── Action Buttons
```

---

## 6. Interactive Elements

### 6.1 Top Filter Bar
| Filter | Type | Behavior |
|--------|------|----------|
| **Search Input** | Text | Real-time search with autocomplete |
| **For Sale** | Dropdown | Radio options (All, Buy, Rent) |
| **Property Type** | Dropdown | Checkbox options |
| **Price** | Dropdown | Min/Max slider |
| **Beds/Baths** | Dropdown | Button group selection |
| **More Filter** | Button | Opens filter modal |

### 6.2 Sidebar Interactions
| Section | Element | Behavior |
|---------|---------|----------|
| **Property Trending** | Card Click | Navigate to property detail |
| **Property Trending** | Action Icons | Favorite, Compare, Share |
| **Recent Property** | Item Click | Navigate to property detail |

### 6.3 Property Card Actions
| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status |
| **Compare** | Scale | Add to comparison |
| **Share** | Arrow | Navigate to detail |

### 6.4 Sort Dropdown
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

---

## 7. Responsive Breakpoints

### Breakpoint Configuration

| Breakpoint | Width | Layout | Sidebar Behavior |
|------------|-------|--------|------------------|
| **Desktop XL** | > 1400px | Main + Right Sidebar | Fixed 280px sidebar |
| **Desktop** | 1200-1399px | Main + Right Sidebar | Fixed sidebar |
| **Tablet L** | 992-1199px | Main + Right Sidebar | Condensed sidebar |
| **Tablet P** | 768-991px | Stacked | Sidebar moves below |
| **Mobile** | < 576px | Stacked | Full width sections |

### Responsive CSS
```css
/* Desktop Layout */
@media (min-width: 992px) {
  .listing-layout-right-sidebar {
    flex-direction: row;
  }
  
  .sidebar-right {
    width: 280px;
    position: sticky;
    top: 80px;
    height: fit-content;
  }
}

/* Tablet and Mobile */
@media (max-width: 991px) {
  .listing-layout-right-sidebar {
    flex-direction: column;
  }
  
  .sidebar-right {
    width: 100%;
    order: -1;
    margin-bottom: 20px;
  }
  
  .property-card-horizontal {
    flex-direction: column;
  }
  
  .property-card-horizontal .image-section {
    width: 100%;
    height: 200px;
  }
}
```

---

## 8. Use Case Recommendations

### Ideal For
- **Users wanting quick access** to trending properties
- **Mobile-first experiences** (sidebar moves to top on mobile)
- **Property discovery** alongside search
- **Users comparing recent views**

### Advantages
- Horizontal filters for quick access
- Trending properties always visible
- Recent activity tracking
- Clean single-column property view

### Considerations
- Less filter control than v1
- Sidebar takes screen space
- Best for discovery-focused browsing

---

## 9. Performance Considerations

### Sidebar Data Loading
```typescript
// Load sidebar data independently
const useSidebarData = () => {
  const [trending, setTrending] = useState([]);
  const [recent, setRecent] = useState([]);
  
  useEffect(() => {
    // Parallel fetch
    Promise.all([
      fetch('/api/properties/trending?limit=2'),
      fetch('/api/properties/recent?limit=3')
    ]).then(([trendingRes, recentRes]) => {
      // Handle responses
    });
  }, []);
  
  return { trending, recent };
};
```

### Image Optimization
- Lazy load property card images
- Trending property images prioritized
- Responsive srcset for card images

---

## 10. Accessibility

### ARIA Implementation
```html
<!-- Top Search Bar -->
<div role="search" aria-label="Property search">
  <input type="search" aria-label="Search properties" />
  <div role="group" aria-label="Search filters">
    <!-- Filter buttons -->
  </div>
</div>

<!-- Sidebar -->
<aside aria-label="Property recommendations">
  <section aria-label="Trending properties">
    <!-- Trending cards -->
  </section>
  <section aria-label="Recent properties">
    <!-- Recent items -->
  </section>
</aside>
```

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Navigate between elements |
| Enter | Activate buttons/links |
| Escape | Close dropdowns |

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

### Horizontal Filter Bar Implementation
```typescript
// Top Search Bar with React Select
const TopSearchBar = () => (
  <div className="top-search-bar">
    <input type="search" placeholder="Enter an address..." />
    <FilterDropdown id="status" label="For Sale" />
    <FilterDropdown id="type" label="Property Type" />
    <FilterDropdown id="price" label="Price" />
    <FilterDropdown id="beds-baths" label="Beds / Baths" />
    <MoreFilterButton />
  </div>
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

### Top Search Bar Animation

```typescript
// components/TopSearchBar.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const TopSearchBar = () => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Search bar entrance
      gsap.from('.top-search-bar', {
        opacity: 0,
        y: -25,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Search input animation
      gsap.from('.search-input', {
        opacity: 0,
        scale: 0.98,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Filter dropdowns stagger
      gsap.from('.filter-dropdown', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
        delay: 0.3,
      });
    }, searchRef);

    return () => ctx.revert();
  }, []);

  return <div ref={searchRef}>{/* Search bar content */}</div>;
};
```

### Right Sidebar Animation

```typescript
// components/RightSidebar.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const RightSidebar = ({ trending, recent }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar slide from right
      gsap.from(sidebarRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Trending section
      gsap.from('.trending-card', {
        opacity: 0,
        x: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Recent properties
      gsap.from('.recent-item', {
        opacity: 0,
        x: 15,
        stagger: 0.08,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.6,
      });
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  return <div ref={sidebarRef}>{/* Sidebar content */}</div>;
};
```

### Horizontal Property Card Animation

```typescript
// components/HorizontalCard.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1.03,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
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

- [Grid Full Width 1 Cols v1](./grid-full-1-col-v1.md) - Left sidebar filters
- [Grid Full Width 3 Cols](./grid-full-3-col.md) - 3-column grid
- [Banner Search v1](./banner-search-v1.md) - Banner with sidebar

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
