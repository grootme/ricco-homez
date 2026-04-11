# Grid Full Width 3 Cols - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/grid-full-3-col
- **Page Title:** Gird Full 3 Column || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Full-width Grid with Horizontal Filter Bar

---

## 2. Page Overview

### Layout Type
The Grid Full Width 3 Cols page presents a full-width property listing layout with a horizontal filter bar positioned above the property grid. This layout maximizes screen real estate for property display while providing easy access to filtering options through expandable dropdown filters.

### Purpose
- Display maximum number of properties in a clean grid layout
- Provide comprehensive filtering through horizontal dropdown filters
- Enable quick sorting and view switching (Grid/List)
- Offer sidebar with contact information and app downloads

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title, Breadcrumb Navigation                 │
├────────────────────────────────────────────────────────────┤
│ HORIZONTAL FILTER BAR                                       │
│ - For Sale | Property Type | Price | Beds/Baths | More     │
├────────────────────────────────────────────────────────────┤
│ SORTING & VIEW TOGGLE                                       │
│ - Sort Dropdown | Grid Toggle | List Toggle                │
├────────────────────────────────────────────────────────────┤
│ PROPERTY GRID (3 Columns)                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│ │ Property │ │ Property │ │ Property │                     │
│ │   Card   │ │   Card   │ │   Card   │                     │
│ └──────────┘ └──────────┘ └──────────┘                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│ │ Property │ │ Property │ │ Property │                     │
│ │   Card   │ │   Card   │ │   Card   │                     │
│ └──────────┘ └──────────┘ └──────────┘                     │
├────────────────────────────────────────────────────────────┤
│ PAGINATION - 1 | 2 | 3 | Next                              │
│ Result Count: "1-8 of 25+ property available"              │
├────────────────────────────────────────────────────────────┤
│ FOOTER SIDEBAR - Contact, Apps, Newsletter, Links          │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Full-width Grid (no container constraints) |
| **Columns (Desktop)** | 3 columns |
| **Columns (Tablet)** | 2 columns |
| **Columns (Mobile)** | 1 column |
| **Card Style** | Standard property card with hover effects |
| **Container Width** | Full viewport width with padding |
| **Gap** | 24px between cards |

### Grid CSS Configuration
```css
/* Property Grid Container */
.property-listing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 1199px) {
  .property-listing-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 30px;
  }
}

@media (max-width: 991px) {
  .property-listing-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
}

@media (max-width: 575px) {
  .property-listing-grid {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
}

/* Card Widths */
.property-card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
```

### Card Dimensions
| Breakpoint | Card Width | Card Height (approx) |
|------------|------------|---------------------|
| Desktop XL (>1400px) | ~420px | ~380px |
| Desktop (1200-1399px) | ~380px | ~360px |
| Tablet L (992-1199px) | ~320px | ~340px |
| Tablet P (768-991px) | ~350px | ~360px |
| Mobile (< 576px) | 100% | Auto |

---

## 4. Data Content Structure

### 4.1 Property Card Data Structure

Each property card displays the following comprehensive data:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **Image Gallery** | Array[URL] | Property images with carousel | `/images/listings/property-1.jpg` |
| **Featured Badge** | Boolean | Indicates featured status | "FEATURED" label |
| **Status Badge** | String | Listing status | "For Rent", "For Sale" |
| **Price** | String | Monthly or total price | "$14,000 / mo" |
| **Title** | String | Property name | "Equestrian Family Home" |
| **Location** | String | Full address | "San Diego City, CA, USA" |
| **Beds** | Number | Bedroom count | 5 |
| **Baths** | Number | Bathroom count | 4 |
| **Sqft** | Number | Square footage | 900 |
| **Status Label** | String | Current status | "For Rent" |
| **Action Icons** | Array | Interactive buttons | Favorite, Compare, Share |

### Property Card Data Model (TypeScript)
```typescript
interface PropertyCardData {
  id: string;
  slug: string;
  images: string[];
  featured: boolean;
  status: 'for-sale' | 'for-rent' | 'sold';
  price: {
    amount: number;
    currency: string;
    period: 'mo' | 'total' | null;
    formatted: string; // "$14,000 / mo"
  };
  title: string;
  location: {
    fullAddress: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specifications: {
    beds: number;
    baths: number;
    sqft: number;
  };
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

// Example Property Card Data
const exampleProperty: PropertyCardData = {
  id: "prop-001",
  slug: "equestrian-family-home-san-diego",
  images: [
    "/images/listings/property-1.jpg",
    "/images/listings/property-1-2.jpg",
    "/images/listings/property-1-3.jpg"
  ],
  featured: true,
  status: "for-rent",
  price: {
    amount: 14000,
    currency: "USD",
    period: "mo",
    formatted: "$14,000 / mo"
  },
  title: "Equestrian Family Home",
  location: {
    fullAddress: "San Diego City, CA, USA",
    city: "San Diego",
    state: "CA",
    country: "USA"
  },
  specifications: {
    beds: 5,
    baths: 4,
    sqft: 900
  },
  actions: {
    favorite: false,
    compare: false,
    share: false
  },
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-20T15:45:00Z"
};
```

### 4.2 Horizontal Filter Bar Data

#### Filter Categories

| Filter | Type | Options | Description |
|--------|------|---------|-------------|
| **For Sale** | Dropdown | All, Buy, Rent | Listing status filter |
| **Property Type** | Dropdown | All, Houses, Apartments, Office, Villa | Property category |
| **Price** | Dropdown | Min/Max range slider | Price range filter |
| **Beds / Baths** | Dropdown | Min beds/baths selectors | Room count filter |
| **More Filter** | Button | Opens modal | Additional filters |

#### For Sale Dropdown Structure
```typescript
interface ListingStatusFilter {
  heading: string; // "Listing Status"
  options: Array<{
    id: 'all' | 'buy' | 'rent';
    label: string;
    checked: boolean;
  }>;
  actions: {
    done: boolean; // "Done" button
  };
}

// Example
const listingStatusFilter: ListingStatusFilter = {
  heading: "Listing Status",
  options: [
    { id: "all", label: "All", checked: true },
    { id: "buy", label: "Buy", checked: false },
    { id: "rent", label: "Rent", checked: false }
  ],
  actions: {
    done: true
  }
};
```

#### Property Type Dropdown Structure
```typescript
interface PropertyTypeFilter {
  heading: string; // "Property Type"
  options: Array<{
    id: string;
    label: string;
    checked: boolean;
  }>;
  showAllOption: boolean;
  actions: {
    done: boolean;
  };
}

// Example options
const propertyTypes = [
  { id: "all", label: "All", checked: true },
  { id: "houses", label: "Houses", checked: false },
  { id: "apartments", label: "Apartments", checked: false },
  { id: "office", label: "Office", checked: false },
  { id: "villa", label: "Villa", checked: false }
];
```

#### Price Range Filter
```typescript
interface PriceFilter {
  heading: string; // "Price Range"
  range: {
    min: number;
    max: number;
    step: number;
    currency: string;
  };
  selectedRange: {
    min: number;
    max: number;
  };
  format: 'slider' | 'input';
  actions: {
    done: boolean;
  };
}

// Example
const priceFilter: PriceFilter = {
  heading: "Price Range",
  range: {
    min: 0,
    max: 1000000,
    step: 1000,
    currency: "USD"
  },
  selectedRange: {
    min: 0,
    max: 500000
  },
  format: "slider",
  actions: {
    done: true
  }
};
```

#### Beds/Baths Filter
```typescript
interface BedsBathsFilter {
  beds: {
    heading: string;
    options: Array<{
      value: number | null; // null = "any"
      label: string;
    }>;
    selected: number | null;
  };
  baths: {
    heading: string;
    options: Array<{
      value: number | null;
      label: string;
    }>;
    selected: number | null;
  };
  actions: {
    done: boolean;
  };
}

// Example
const bedsBathsFilter: BedsBathsFilter = {
  beds: {
    heading: "Bedrooms",
    options: [
      { value: null, label: "any" },
      { value: 1, label: "1+" },
      { value: 2, label: "2+" },
      { value: 3, label: "3+" },
      { value: 4, label: "4+" },
      { value: 5, label: "5+" }
    ],
    selected: null
  },
  baths: {
    heading: "Bathrooms",
    options: [
      { value: null, label: "any" },
      { value: 1, label: "1+" },
      { value: 2, label: "2+" },
      { value: 3, label: "3+" },
      { value: 4, label: "4+" },
      { value: 5, label: "5+" }
    ],
    selected: null
  },
  actions: {
    done: true
  }
};
```

### 4.3 Sort Dropdown Data

```typescript
interface SortOption {
  id: string;
  label: string;
  selected: boolean;
}

const sortOptions: SortOption[] = [
  { id: "newest", label: "Newest", selected: true },
  { id: "best-seller", label: "Best Seller", selected: false },
  { id: "best-match", label: "Best Match", selected: false },
  { id: "price-low", label: "Price Low", selected: false },
  { id: "price-high", label: "Price High", selected: false }
];
```

### 4.4 Pagination Data

```typescript
interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  displayedItems: string; // "1-8 of 25+ property available"
  pages: Array<number | string>; // [1, 2, 3, "...", 7]
}

// Example
const pagination: PaginationData = {
  currentPage: 1,
  totalPages: 7,
  totalItems: 25,
  itemsPerPage: 8,
  displayedItems: "1-8 of 25+ property available",
  pages: [1, 2, 3, 7]
};
```

---

## 5. Component Breakdown

### 5.1 Header Component
```
Header/
├── Logo (link to home)
├── Navigation Menu
│   ├── Home (dropdown)
│   ├── Listing (dropdown - current section)
│   │   ├── Grid Default
│   │   ├── Grid Full Width 3 Cols ← ACTIVE
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
├── Login/Register Button
├── Add Property Button
└── Hamburger Menu (mobile)
```

### 5.2 Page Header Component
```
PageHeader/
├── Title: "New York Homes for Sale"
├── Breadcrumb
│   ├── Home Link ("/")
│   ├── Separator "/"
│   └── Current: "For Rent"
└── Location Dropdown (optional)
```

### 5.3 Horizontal Filter Bar Component
```
HorizontalFilterBar/
├── Filter Buttons (horizontal list)
│   ├── For Sale Button
│   │   ├── Label: "For Sale"
│   │   ├── Dropdown Icon
│   │   └── Dropdown Panel
│   │       ├── Heading: "Listing Status"
│   │       ├── Radio Options (All, Buy, Rent)
│   │       └── Done Button
│   ├── Property Type Button
│   │   ├── Label: "Property Type"
│   │   ├── Dropdown Icon
│   │   └── Dropdown Panel
│   │       ├── Checkboxes (All, Houses, Apartments, Office, Villa)
│   │       └── Done Button
│   ├── Price Button
│   │   ├── Label: "Price"
│   │   ├── Dropdown Icon
│   │   └── Dropdown Panel
│   │       ├── Min/Max Slider
│   │       └── Done Button
│   ├── Beds / Baths Button
│   │   ├── Label: "Beds / Baths"
│   │   ├── Dropdown Icon
│   │   └── Dropdown Panel
│   │       ├── Beds Selector
│   │       ├── Baths Selector
│   │       └── Done Button
│   └── More Filter Button
│       ├── Icon
│       ├── Label: "More Filter"
│       └── Opens Full Filter Modal
└── Active Filters Display (optional)
```

### 5.4 Sort and View Toggle Component
```
SortAndView/
├── Sort Section
│   ├── Label: "Sort by"
│   └── Sort Dropdown
│       ├── Newest (default selected)
│       ├── Best Seller
│       ├── Best Match
│       ├── Price Low
│       └── Price High
└── View Toggle
    ├── Grid Button (active)
    │   └── Grid Icon
    └── List Button
        └── List Icon
```

### 5.5 Property Card Component
```
PropertyCard/
├── Card Container
│   ├── Image Section
│   │   ├── Property Image
│   │   ├── Featured Badge (conditional)
│   │   │   └── Icon + "FEATURED"
│   │   └── Price Tag
│   │       └── "$14,000 / mo"
│   └── Content Section
│       ├── Title (link)
│       │   └── "Equestrian Family Home"
│       ├── Location
│       │   └── "San Diego City, CA, USA"
│       ├── Specifications Row
│       │   ├── Beds: "5 bed" with icon
│       │   ├── Baths: "4 bath" with icon
│       │   └── Sqft: "900 sqft" with icon
│       ├── Separator Line
│       ├── Status Label
│       │   └── "For Rent"
│       └── Action Buttons
│           ├── Favorite (heart icon)
│           ├── Compare (scale icon)
│           └── Share (share icon)
```

### 5.6 Pagination Component
```
Pagination/
├── Previous Button (arrow left)
├── Page Numbers
│   ├── 1 (active)
│   ├── 2
│   ├── 3
│   └── Next (arrow right)
├── Result Count
│   └── "1-8 of 25+ property available"
└── Container
```

### 5.7 Footer Sidebar Component
```
FooterSidebar/
├── Contact Section
│   ├── Image/Icon
│   ├── Total Free Customer Care
│   ├── Phone: "+(0) 123 050 945 02" (link)
│   ├── Need Live Support?
│   └── Email: "hi@homez.com" (link)
├── Apps Section
│   ├── Heading: "Apps"
│   ├── Apple Store Link
│   │   ├── Icon
│   │   └── "Download on the Apple Store"
│   └── Google Play Link
│       ├── Icon
│       └── "Get it on Google Play"
├── Social Media
│   ├── Heading: "Follow us on social media"
│   └── Links (Facebook, Twitter, Instagram, LinkedIn)
├── Newsletter
│   ├── Heading: "Keep Yourself Up to Date"
│   ├── Email Input
│   └── Subscribe Button
├── Popular Search Links
│   ├── Apartment for Rent
│   ├── Apartment Low to Hide
│   ├── Offices for Buy
│   └── Offices for Rent
├── Quick Links
│   ├── Terms of Use
│   ├── Privacy Policy
│   ├── Pricing Plans
│   ├── Our Services
│   ├── Contact Support
│   ├── Careers
│   └── FAQs
├── Discover Links
│   ├── Miami
│   ├── Los Angeles
│   ├── Chicago
│   └── New York
└── Copyright
    ├── "© Homez 2024"
    ├── "ib-themes" (link)
    ├── Privacy (link)
    ├── Terms (link)
    └── Sitemap (link)
```

---

## 6. Interactive Elements

### 6.1 Filter Dropdown Behavior

```typescript
interface FilterDropdownBehavior {
  openOnClick: boolean;
  closeOnOutsideClick: boolean;
  closeOnDone: boolean;
  animation: 'slide-down' | 'fade';
  animationDuration: number; // ms
  preserveSelection: boolean;
}

const filterBehavior: FilterDropdownBehavior = {
  openOnClick: true,
  closeOnOutsideClick: true,
  closeOnDone: true,
  animation: 'slide-down',
  animationDuration: 200,
  preserveSelection: true
};
```

### 6.2 Filter Interactions

| Filter | Interaction | Result |
|--------|-------------|--------|
| **For Sale** | Click dropdown | Shows radio options (All, Buy, Rent) |
| **Property Type** | Click dropdown | Shows checkboxes for types |
| **Price** | Click dropdown | Shows min/max slider |
| **Beds/Baths** | Click dropdown | Shows min selectors |
| **More Filter** | Click button | Opens full filter modal |
| **Done** | Click button | Applies filter, closes dropdown |

### 6.3 View Toggle Behavior

```typescript
interface ViewToggleConfig {
  currentView: 'grid' | 'list';
  onGridClick: () => void;
  onListClick: () => void;
  persistPreference: boolean;
  storageKey: string;
}

const viewToggleConfig: ViewToggleConfig = {
  currentView: 'grid',
  onGridClick: () => setView('grid'),
  onListClick: () => setView('list'),
  persistPreference: true,
  storageKey: 'homez_listing_view_preference'
};
```

### 6.4 Property Card Interactions

| Action | Icon | Behavior |
|--------|------|----------|
| **Card Click** | - | Navigate to property detail page |
| **Image Click** | - | Navigate to property detail page |
| **Favorite** | Heart | Toggle saved status (requires auth) |
| **Compare** | Scale | Add/remove from comparison list |
| **Share** | Share | Open share modal/options |

### 6.5 Pagination Interactions

```typescript
interface PaginationBehavior {
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  scrollToTop: boolean;
  scrollOffset: number;
  loadingState: 'spinner' | 'skeleton' | 'none';
}

const paginationBehavior: PaginationBehavior = {
  onPageClick: (page) => navigateToPage(page),
  onNextClick: () => navigateToPage(currentPage + 1),
  onPrevClick: () => navigateToPage(currentPage - 1),
  scrollToTop: true,
  scrollOffset: 200,
  loadingState: 'skeleton'
};
```

---

## 7. Responsive Breakpoints

### Breakpoint Configuration

| Breakpoint | Width | Grid Columns | Filter Bar | Card Width |
|------------|-------|--------------|------------|------------|
| **Desktop XL** | > 1400px | 3 columns | Full horizontal | ~420px |
| **Desktop** | 1200-1399px | 3 columns | Full horizontal | ~380px |
| **Tablet L** | 992-1199px | 3 columns | Wrapped | ~320px |
| **Tablet P** | 768-991px | 2 columns | Stacked dropdowns | ~350px |
| **Mobile L** | 576-767px | 2 columns | Filter drawer | ~260px |
| **Mobile** | < 576px | 1 column | Filter drawer button | Full width |

### Responsive CSS Implementation

```css
/* Desktop XL (1400px+) */
@media (min-width: 1400px) {
  .property-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 50px;
  }
  
  .filter-bar {
    flex-wrap: nowrap;
    gap: 16px;
  }
  
  .filter-btn {
    padding: 12px 20px;
  }
}

/* Desktop (1200-1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .property-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 40px;
  }
}

/* Tablet Landscape (992-1199px) */
@media (min-width: 992px) and (max-width: 1199px) {
  .property-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 30px;
  }
  
  .filter-bar {
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .property-card {
    max-width: 100%;
  }
}

/* Tablet Portrait (768-991px) */
@media (min-width: 768px) and (max-width: 991px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
  
  .filter-bar {
    display: none;
  }
  
  .mobile-filter-button {
    display: block;
  }
}

/* Mobile Large (576-767px) */
@media (min-width: 576px) and (max-width: 767px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0 15px;
  }
  
  .sort-view-toggle {
    flex-direction: column;
    align-items: stretch;
  }
}

/* Mobile (< 576px) */
@media (max-width: 575px) {
  .property-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 15px;
  }
  
  .property-card {
    max-width: 100%;
  }
  
  .page-header {
    padding: 20px 15px;
  }
  
  .filter-bar {
    display: none;
  }
  
  .mobile-filter-button {
    display: flex;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
}
```

---

## 8. Component Props and State

### Property Grid Props
```typescript
interface PropertyGridProps {
  properties: PropertyCardData[];
  loading: boolean;
  error: string | null;
  columns: 1 | 2 | 3 | 4;
  gap: number;
  onPropertyClick: (propertyId: string) => void;
  onFavoriteClick: (propertyId: string) => void;
  onCompareClick: (propertyId: string) => void;
}
```

### Filter Bar Props
```typescript
interface FilterBarProps {
  filters: {
    listingStatus: ListingStatusFilter;
    propertyType: PropertyTypeFilter;
    price: PriceFilter;
    bedsBaths: BedsBathsFilter;
  };
  onFilterChange: (filterKey: string, value: any) => void;
  onReset: () => void;
  onApply: () => void;
  activeFilterCount: number;
}
```

### State Management
```typescript
interface ListingPageState {
  properties: PropertyCardData[];
  filters: FilterState;
  sort: SortOption;
  view: 'grid' | 'list';
  pagination: PaginationData;
  loading: boolean;
  error: string | null;
}

interface FilterState {
  listingStatus: 'all' | 'buy' | 'rent';
  propertyTypes: string[];
  priceRange: [number, number];
  minBeds: number | null;
  minBaths: number | null;
  location: string | null;
  amenities: string[];
  squareFeet: [number, number];
  yearBuilt: [number, number];
}
```

---

## 9. API Integration

### Endpoints
```typescript
// Get Properties with Filters
GET /api/properties
Query Parameters:
  - status: 'all' | 'buy' | 'rent'
  - type: string[]
  - minPrice: number
  - maxPrice: number
  - beds: number
  - baths: number
  - minSqft: number
  - maxSqft: number
  - location: string
  - sort: 'newest' | 'price-low' | 'price-high' | 'best-match'
  - page: number
  - limit: number

Response: {
  data: Property[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
  filters: AppliedFilters;
}

// Toggle Favorite
POST /api/properties/:id/favorite
Response: {
  success: boolean;
  isFavorited: boolean;
}

// Add to Compare
POST /api/properties/:id/compare
Response: {
  success: boolean;
  compareList: string[];
}
```

---

## 10. Accessibility

### ARIA Implementation
```html
<!-- Filter Dropdown -->
<div class="filter-dropdown">
  <button 
    aria-expanded="false" 
    aria-haspopup="true"
    aria-controls="filter-panel-status"
  >
    For Sale
  </button>
  <div id="filter-panel-status" role="menu" aria-hidden="true">
    <h6 id="filter-status-heading">Listing Status</h6>
    <fieldset aria-labelledby="filter-status-heading">
      <label>
        <input type="radio" name="status" value="all" checked />
        All
      </label>
      <label>
        <input type="radio" name="status" value="buy" />
        Buy
      </label>
      <label>
        <input type="radio" name="status" value="rent" />
        Rent
      </label>
    </fieldset>
    <button type="button">Done</button>
  </div>
</div>

<!-- Property Card -->
<article 
  class="property-card" 
  aria-label="Property: Equestrian Family Home"
>
  <a href="/property/equestrian-family-home" aria-label="View Equestrian Family Home details">
    <img src="..." alt="Equestrian Family Home exterior" />
  </a>
  <h6><a href="/property/equestrian-family-home">Equestrian Family Home</a></h6>
  <p>San Diego City, CA, USA</p>
  <ul aria-label="Property specifications">
    <li>5 beds</li>
    <li>4 baths</li>
    <li>900 sqft</li>
  </ul>
  <div role="group" aria-label="Actions">
    <button aria-label="Add to favorites" aria-pressed="false">
      <svg aria-hidden="true">♥</svg>
    </button>
    <button aria-label="Compare property">
      <svg aria-hidden="true">⚖</svg>
    </button>
    <button aria-label="Share property">
      <svg aria-hidden="true">↗</svg>
    </button>
  </div>
</article>

<!-- Pagination -->
<nav aria-label="Property listing pagination">
  <ul>
    <li><a href="?page=1" aria-current="page">1</a></li>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3">3</a></li>
  </ul>
  <p aria-live="polite">Showing 1-8 of 25+ properties</p>
</nav>
```

---

## 11. Performance Considerations

### Image Optimization
```typescript
const imageConfig = {
  sizes: [320, 400, 600, 800],
  formats: ['webp', 'jpg'],
  loading: 'lazy',
  placeholder: 'blur',
  quality: 75
};
```

### Lazy Loading Strategy
- Property cards: Lazy load images with intersection observer
- Filter dropdowns: Load content on first open
- Pagination: Pre-fetch next page on hover

### Caching
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

### Filter Implementation
```typescript
// React Select Filter Component
import Select from 'react-select';

const FilterDropdown = ({ options, onChange, placeholder }) => (
  <Select
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    className="filter-select"
    classNamePrefix="filter"
    isSearchable={false}
  />
);
```

---


---

## 13. GSAP Animations

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

### Property Grid Stagger Animation

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
    <div ref={gridRef} className="property-listing-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
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
        y: -30,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.filter-btn', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
        delay: 0.2,
      });
    }, filterRef);

    return () => ctx.revert();
  }, []);

  const handleDropdownOpen = (dropdownEl: HTMLElement) => {
    gsap.from(dropdownEl, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return <div ref={filterRef}>{/* Filter content */}</div>;
};
```

### Sort Dropdown Animation

```typescript
// components/SortDropdown.tsx
import { gsap } from 'gsap';
import { useRef, useState } from 'react';

const SortDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!isOpen) {
      gsap.from(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: 'power2.out',
      });

      gsap.from('.sort-option', {
        opacity: 0,
        x: -10,
        stagger: 0.03,
        duration: 0.2,
        ease: 'power2.out',
        delay: 0.1,
      });
    }
    setIsOpen(!isOpen);
  };

  return <div ref={dropdownRef}>{/* Sort dropdown content */}</div>;
};
```

### Card Hover Animation

```typescript
// components/PropertyCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const PropertyCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -5,
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.fromTo('.card-actions',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
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

### Pagination Animation

```typescript
// components/Pagination.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
    "next": "^14.0.0",
    "react": "^18.2.0"
  }
}
```

---

## 14. Theme Variables

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

## 15. NPM Dependencies

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

## 16. Related Pages

## 13. Related Pages

- [Grid Default](./grid-default.md) - Homepage-style listing layout
- [Grid Full Width 4 Cols](./grid-full-4-col.md) - 4-column full-width grid
- [Grid Full Width 2 Cols](./grid-full-2-col.md) - 2-column layout with hero
- [Grid Full Width 1 Cols v1](./grid-full-1-col-v1.md) - Single column with sidebar

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
