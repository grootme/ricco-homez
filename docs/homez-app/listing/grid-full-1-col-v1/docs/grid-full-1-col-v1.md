# Grid Full Width 1 Cols v1 - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-full-1-col-v1
- **Page Title:** Gird Full 1 Column V1 || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Single Column Grid with Left Sidebar Filters

---

## 2. Page Overview

### Layout Type
The Grid Full Width 1 Cols v1 page presents a single-column property listing layout with a comprehensive left sidebar containing all filter options. This layout is ideal for users who want detailed filter control while viewing properties in a clean, focused list format.

### Purpose
- Provide maximum filter control through sidebar
- Display properties in a clean, single-column format
- Enable detailed property scanning
- Support advanced search workflows

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title: "New York Homes for Sale"            │
│              Breadcrumb: Home / For Rent                   │
├────────────────┬───────────────────────────────────────────┤
│                │                                            │
│   SIDEBAR      │   PROPERTY LIST (1 Column)                │
│   FILTERS      │                                            │
│                │   ┌────────────────────────────────────┐  │
│   - Search     │   │      Property Card (Full Width)    │  │
│   - Status     │   │      Image | Content | Actions     │  │
│   - Type       │   └────────────────────────────────────┘  │
│   - Price      │                                            │
│   - Beds       │   ┌────────────────────────────────────┐  │
│   - Baths      │   │      Property Card (Full Width)    │  │
│   - Location   │   └────────────────────────────────────┘  │
│   - Sqft       │                                            │
│   - Year Built │   ┌────────────────────────────────────┐  │
│   - Features   │   │      Property Card (Full Width)    │  │
│                │   └────────────────────────────────────┘  │
│   [SEARCH]     │                                            │
│   [RESET]      │   PAGINATION                               │
│   [SAVE]       │                                            │
├────────────────┴───────────────────────────────────────────┤
│ FOOTER - Contact, Apps, Newsletter, Links                  │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Single column with left sidebar |
| **Sidebar Width** | ~300px (fixed) |
| **Property Column** | Flexible (remaining width) |
| **Card Style** | Horizontal property card (full width) |
| **Container Width** | Full viewport width |

### Grid CSS Configuration
```css
/* Main Layout */
.listing-layout-with-sidebar {
  display: flex;
  gap: 30px;
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Sidebar */
.filter-sidebar {
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

/* Property List */
.property-list-single-col {
  flex: 1;
  min-width: 0;
}

/* Property Card (Horizontal) */
.property-card-horizontal {
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 24px;
}

.property-card-horizontal .image-section {
  width: 280px;
  flex-shrink: 0;
  height: 200px;
}

.property-card-horizontal .content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .listing-layout-with-sidebar {
    flex-direction: column;
  }
  
  .filter-sidebar {
    width: 100%;
    position: static;
    max-height: none;
  }
  
  .property-card-horizontal {
    flex-direction: column;
  }
  
  .property-card-horizontal .image-section {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 575px) {
  .listing-layout-with-sidebar {
    padding: 15px;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Sidebar Filter Data

```typescript
interface SidebarFilters {
  search: {
    heading: string;
    placeholder: string;
    value: string;
  };
  listingStatus: {
    heading: string;
    options: Array<{
      value: 'all' | 'buy' | 'rent';
      label: string;
      checked: boolean;
    }>;
  };
  propertyType: {
    heading: string;
    options: Array<{
      value: string;
      label: string;
      checked: boolean;
    }>;
    showAll: boolean;
  };
  priceRange: {
    heading: string;
    min: number;
    max: number;
    step: number;
    value: [number, number];
  };
  bedrooms: {
    heading: string;
    options: string[]; // ['any', '1+', '2+', '3+', '4+', '5+']
    selected: string;
  };
  bathrooms: {
    heading: string;
    options: string[];
    selected: string;
  };
  location: {
    heading: string;
    dropdown: {
      placeholder: string;
      options: string[];
    };
  };
  squareFeet: {
    heading: string;
    min: number | null;
    max: number | null;
  };
  yearBuilt: {
    heading: string;
    min: number;
    max: number;
  };
  otherFeatures: {
    heading: string;
    expanded: boolean;
    amenities: string[];
  };
  actions: {
    search: boolean;
    reset: boolean;
    saveSearch: boolean;
  };
}

// Example Data
const sidebarFilters: SidebarFilters = {
  search: {
    heading: "Find your home",
    placeholder: "What are you looking for?",
    value: ""
  },
  listingStatus: {
    heading: "Listing Status",
    options: [
      { value: "all", label: "All", checked: true },
      { value: "buy", label: "Buy", checked: false },
      { value: "rent", label: "Rent", checked: false }
    ]
  },
  propertyType: {
    heading: "Property Type",
    options: [
      { value: "all", label: "All", checked: true },
      { value: "houses", label: "Houses", checked: false },
      { value: "apartments", label: "Apartments", checked: false },
      { value: "office", label: "Office", checked: false },
      { value: "villa", label: "Villa", checked: false }
    ],
    showAll: true
  },
  priceRange: {
    heading: "Price Range",
    min: 0,
    max: 100000,
    step: 1000,
    value: [0, 100000]
  },
  bedrooms: {
    heading: "Bedrooms",
    options: ['any', '1+', '2+', '3+', '4+', '5+'],
    selected: 'any'
  },
  bathrooms: {
    heading: "Bathrooms",
    options: ['any', '1+', '2+', '3+', '4+', '5+'],
    selected: 'any'
  },
  location: {
    heading: "Location",
    dropdown: {
      placeholder: "Select location",
      options: ["New York", "Los Angeles", "Chicago", "Miami"]
    }
  },
  squareFeet: {
    heading: "Square Feet",
    min: null,
    max: null
  },
  yearBuilt: {
    heading: "Year Built",
    min: 2019,
    max: 2022
  },
  otherFeatures: {
    heading: "Other Features",
    expanded: true,
    amenities: [
      "Air Conditioning",
      "Swimming Pool",
      "Gym",
      "Parking",
      "Garden",
      "Security System"
    ]
  },
  actions: {
    search: true,
    reset: true,
    saveSearch: true
  }
};
```

### 4.2 Horizontal Property Card Data

```typescript
interface HorizontalPropertyCard {
  id: string;
  slug: string;
  images: string[];
  featured: boolean;
  status: 'for-sale' | 'for-rent' | 'sold';
  price: {
    amount: number;
    formatted: string;
    period: 'mo' | 'total' | null;
  };
  title: string;
  location: string;
  specifications: {
    beds: number;
    baths: number;
    sqft: number;
  };
  description?: string;
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
}

// Example
const property: HorizontalPropertyCard = {
  id: "prop-001",
  slug: "equestrian-family-home",
  images: ["/images/listings/prop-001.jpg"],
  featured: true,
  status: "for-rent",
  price: {
    amount: 14000,
    formatted: "$14,000 / mo",
    period: "mo"
  },
  title: "Equestrian Family Home",
  location: "San Diego City, CA, USA",
  specifications: {
    beds: 5,
    baths: 4,
    sqft: 900
  },
  actions: {
    favorite: false,
    compare: false,
    share: false
  }
};
```

---

## 5. Component Breakdown

### 5.1 Filter Sidebar Component
```
FilterSidebar/
├── Search Section
│   ├── Heading: "Find your home"
│   └── Text Input (placeholder: "What are you looking for?")
├── Listing Status Section
│   ├── Heading: "Listing Status"
│   └── Radio Buttons (All, Buy, Rent)
├── Property Type Section
│   ├── Heading: "Property Type"
│   └── Checkboxes (All, Houses, Apartments, Office, Villa)
├── Price Range Section
│   ├── Heading: "Price Range"
│   └── Range Slider (dual-handle)
├── Bedrooms Section
│   ├── Heading: "Bedrooms"
│   └── Button Group (any, 1+, 2+, 3+, 4+, 5+)
├── Bathrooms Section
│   ├── Heading: "Bathrooms"
│   └── Button Group (any, 1+, 2+, 3+, 4+, 5+)
├── Location Section
│   ├── Heading: "Location"
│   └── Dropdown Select
├── Square Feet Section
│   ├── Heading: "Square Feet"
│   ├── Min Input (number)
│   └── Max Input (number)
├── Year Built Section
│   ├── Heading: "Year Built"
│   ├── Min Input (year)
│   └── Max Input (year)
├── Other Features Section (expandable)
│   ├── Heading with Toggle
│   └── Amenity Checkboxes
├── Actions
│   ├── Search Button (primary)
│   ├── Reset All Filters Link
│   └── Save Search Link
└── Sticky Position on Scroll
```

### 5.2 Horizontal Property Card
```
HorizontalPropertyCard/
├── Card Container (flex row)
│   ├── Image Section (280px fixed width)
│   │   ├── Property Image
│   │   ├── Featured Badge (conditional)
│   │   └── Price Tag
│   └── Content Section (flex-1)
│       ├── Title (link)
│       ├── Location
│       ├── Specs Row
│       │   ├── Beds: "5 bed"
│       │   ├── Baths: "4 bath"
│       │   └── Sqft: "900 sqft"
│       ├── Separator
│       ├── Status: "For Rent"
│       └── Action Buttons
│           ├── Favorite
│           ├── Compare
│           └── Share
```

### 5.3 Sort Dropdown
```
SortDropdown/
├── Select Element
│   ├── Newest (selected)
│   ├── Best Seller
│   ├── Best Match
│   ├── Price Low
│   └── Price High
```

---

## 6. Interactive Elements

### 6.1 Filter Interactions

| Filter | Type | Behavior |
|--------|------|----------|
| **Search Input** | Text | Real-time filtering with debounce |
| **Listing Status** | Radio | Single selection |
| **Property Type** | Checkbox | Multiple selection |
| **Price Range** | Slider | Dual-handle range selection |
| **Bedrooms** | Button Group | Single selection |
| **Bathrooms** | Button Group | Single selection |
| **Location** | Dropdown | Single selection with search |
| **Square Feet** | Number Inputs | Min/Max range |
| **Year Built** | Number Inputs | Year range |
| **Other Features** | Checkbox | Multiple amenity selection |

### 6.2 Action Buttons

| Button | Behavior |
|--------|----------|
| **Search** | Apply all filters and reload results |
| **Reset All Filters** | Clear all filter selections |
| **Save Search** | Save current filter configuration |

### 6.3 Property Card Actions

| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status |
| **Compare** | Scale | Add to comparison list |
| **Share** | Arrow | Navigate to detail page |

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout | Sidebar Behavior |
|------------|-------|--------|------------------|
| **Desktop** | > 991px | Sidebar + Single Column | Sticky sidebar |
| **Tablet** | 768-991px | Stacked | Collapsible filter panel |
| **Mobile** | < 576px | Stacked | Filter drawer (bottom sheet) |

### Responsive CSS
```css
@media (max-width: 991px) {
  .filter-sidebar {
    display: none;
  }
  
  .mobile-filter-toggle {
    display: block;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
  
  .property-list-single-col {
    width: 100%;
  }
}
```

---

## 8. Use Case Recommendations

### Ideal For
- **Detailed property search** with many filter criteria
- **Desktop-first users** who want filter control
- **Real estate professionals** comparing properties
- **Users with specific requirements** (beds, baths, price range)

### Advantages
- Maximum filter control
- Clean, focused property view
- Easy comparison between properties
- Suitable for detailed property data

---

## 9. Technical Implementation

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

### Sidebar Filter Implementation
```typescript
// Sticky Sidebar with Filters
const FilterSidebar = () => {
  const [filters, setFilters] = useState({});
  
  return (
    <aside className="filter-sidebar">
      <SearchInput />
      <ListingStatusFilter />
      <PropertyTypeFilter />
      <PriceRangeSlider />
      <BedroomSelector />
      <BathroomSelector />
      <LocationDropdown />
      <SquareFeetInput />
      <YearBuiltInput />
      <OtherFeaturesAccordion />
      <ActionButtons />
    </aside>
  );
};
```

---


---

## 10. GSAP Animations

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

## 10.5 GSAP Animation Implementation

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

### Sidebar Filter Panel Animation

```typescript
// components/SidebarFilter.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SidebarFilter = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar slide in
      gsap.from(sidebarRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Filter sections stagger
      gsap.from('.filter-section', {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, sidebarRef);

    return () => ctx.revert();
  }, []);

  return <div ref={sidebarRef}>{/* Filter content */}</div>;
};
```

### Single Column Property List Animation

```typescript
// components/PropertyList.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PropertyList = ({ properties }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal cards stagger
      gsap.from('.property-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        },
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return <div ref={listRef}>{/* Property list */}</div>;
};
```

### Filter Collapse Animation

```typescript
// components/FilterSection.tsx
import { gsap } from 'gsap';
import { useRef, useState } from 'react';

const FilterSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (isExpanded) {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    } else {
      gsap.fromTo(contentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      );
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand}>{title}</button>
      <div ref={contentRef}>{children}</div>
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

## 11. Theme Variables

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

## 12. NPM Dependencies

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

## 13. Related Pages

## 10. Related Pages

- [Grid Full Width 1 Cols v2](./grid-full-1-col-v2.md) - Similar with right sidebar
- [Grid Full Width 2 Cols](./grid-full-2-col.md) - 2-column grid layout
- [List v1](./list-v1.md) - List view layout

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
