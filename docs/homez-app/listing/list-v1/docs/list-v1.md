# List v1 - Full List View with Sidebar Filters

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/list-v1](https://homez-appdir.vercel.app/list-v1)  
**Page Title:** List V1 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page  
**Layout Type:** List View with Sidebar Filters

## 2. Page Overview

### Layout Type and Purpose
List v1 is a comprehensive property listing page featuring a full-height sidebar with extensive filter options and a main content area displaying properties in a horizontal list format. This layout prioritizes detailed filtering and information-rich property cards.

### Key Differentiators
- **Full Sidebar**: Complete filter panel on the left
- **List-Style Cards**: Horizontal cards with property descriptions
- **Comprehensive Filters**: All filtering options visible
- **Breadcrumb Navigation**: Shows user location in site hierarchy

### Key Features
- Extensive sidebar filter panel
- Search input in sidebar
- Horizontal list-style property cards with descriptions
- Grid/List view toggle
- Pagination with result count
- Footer section with contact info and newsletter

## 3. Layout Configuration

### Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | List with sidebar |
| **Sidebar Position** | Left side |
| **Sidebar Width** | ~280-320px |
| **Content Width** | ~70% (remaining space) |
| **Total Height** | Full viewport minus header |
| **Card Style** | List (horizontal with description) |

### Layout Structure
```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER - Navigation (Fixed)                                           │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]                │
│ [Login/Register] [Add Property →]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB                                                            │
│ "List View"  Home / For Rent                                          │
├──────────────────┬───────────────────────────────────────────────────┤
│                  │                                                    │
│   SIDEBAR        │          PROPERTY LIST                             │
│   (Filters)      │          (Main Content)                            │
│                  │                                                    │
│  ┌────────────┐  │  ┌──────────────────────────────────────────────┐ │
│  │ Find your  │  │  │ Showing 1–6of 25 results                     │ │
│  │ home       │  │  │ Sort: [Newest▼]  View: [Grid][List]          │ │
│  │ [Search]   │  │  └──────────────────────────────────────────────┘ │
│  └────────────┘  │                                                    │
│                  │  ┌──────────────────────────────────────────────┐ │
│  Listing Status  │  │ ┌────────┐ Property Card 1                   │ │
│  ○ All           │  │ │ Image  │ Title, Location                   │ │
│  ○ Buy           │  │ │        │ Bed/Bath/Sqft | Description       │ │
│  ○ Rent          │  │ └────────┘ Status | Social Icons             │ │
│                  │  └──────────────────────────────────────────────┘ │
│  Property Type   │                                                    │
│  ☑ All           │  ┌──────────────────────────────────────────────┐ │
│  ☐ Houses        │  │ ┌────────┐ Property Card 2                   │ │
│  ☐ Apartments    │  │ │ Image  │ ...                               │ │
│  ☐ Office        │  │ └────────┘                                   │ │
│  ☐ Villa         │  └──────────────────────────────────────────────┘ │
│                  │                                                    │
│  Price Range     │  ┌──────────────────────────────────────────────┐ │
│  [$20 - $70987]  │  │ Property Card 3, 4, 5, 6...                  │ │
│                  │  └──────────────────────────────────────────────┘ │
│  Bedrooms        │                                                    │
│  any 1+ 2+ 3+    │  [Pagination: 1 2 3 ... 5]                        │
│  4+ 5+           │  "1-8 of 25+ property available"                  │
│                  │                                                    │
│  Bathrooms       │                                                    │
│  any 1+ 2+ 3+    │                                                    │
│  4+ 5+           │                                                    │
│                  │                                                    │
│  Location        │                                                    │
│  [All Cities ▼]  │                                                    │
│                  │                                                    │
│  Square Feet     │                                                    │
│  [Min] - [Max]   │                                                    │
│                  │                                                    │
│  Year Built      │                                                    │
│  [2019] - [2022] │                                                    │
│                  │                                                    │
│  ▼ Other Features│                                                    │
│                  │                                                    │
│  [Search]        │                                                    │
│  ↻ Reset all     │                                                    │
│  ♡ Save Search   │                                                    │
│                  │                                                    │
├──────────────────┴───────────────────────────────────────────────────┤
│ FOOTER                                                                │
│ Contact Info | Apps | Newsletter | Popular Search | Quick Links      │
└──────────────────────────────────────────────────────────────────────┘
```

### Layout CSS
```css
.list-page-container {
  display: flex;
  min-height: calc(100vh - 80px);
}

.filter-sidebar {
  width: 300px;
  flex-shrink: 0;
  padding: 30px;
  background: #f9f9f9;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
}

.property-list-content {
  flex: 1;
  padding: 30px;
  min-width: 0;
}

@media (max-width: 991px) {
  .list-page-container {
    flex-direction: column;
  }
  
  .filter-sidebar {
    width: 100%;
    max-height: none;
    position: relative;
    top: 0;
  }
  
  .property-list-content {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .filter-sidebar {
    padding: 15px;
  }
}
```

## 4. Data Content Structure

### Sidebar Filter Data
```typescript
interface SidebarFilters {
  // Search
  search: {
    placeholder: string;        // "What are you looking for?"
    value: string;
  };
  
  // Listing Status
  listingStatus: {
    options: Array<{
      value: 'all' | 'buy' | 'rent';
      label: string;
      checked: boolean;
    }>;
  };
  
  // Property Type
  propertyType: {
    options: Array<{
      value: string;
      label: string;
      checked: boolean;
    }>;
  };
  
  // Price Range
  priceRange: {
    min: number;
    max: number;
    currentMin: number;
    currentMax: number;
  };
  
  // Bedrooms
  bedrooms: {
    options: string[];          // ['any', '1+', '2+', '3+', '4+', '5+']
    selected: string;
  };
  
  // Bathrooms
  bathrooms: {
    options: string[];          // ['any', '1+', '2+', '3+', '4+', '5+']
    selected: string;
  };
  
  // Location
  location: {
    options: Array<{
      value: string;
      label: string;
    }>;
    selected: string;
  };
  
  // Square Feet
  squareFeet: {
    min: number | null;
    max: number | null;
  };
  
  // Year Built
  yearBuilt: {
    min: number;
    max: number;
  };
  
  // Other Features (collapsible)
  otherFeatures: {
    expanded: boolean;
    options: string[];
  };
}
```

### Filter Options Details

#### Listing Status
| Value | Label |
|-------|-------|
| all | All |
| buy | Buy |
| rent | Rent |

#### Property Type
| Value | Label |
|-------|-------|
| all | All |
| houses | Houses |
| apartments | Apartments |
| office | Office |
| villa | Villa |

#### Price Range
| Setting | Value |
|---------|-------|
| Min | $20 |
| Max | $100,000 |
| Display Format | Slider with dual handles |

#### Bedrooms
| Option | Value |
|--------|-------|
| any | any |
| 1+ | 1+ |
| 2+ | 2+ |
| 3+ | 3+ |
| 4+ | 4+ |
| 5+ | 5+ |

#### Bathrooms
| Option | Value |
|--------|-------|
| any | any |
| 1+ | 1+ |
| 2+ | 2+ |
| 3+ | 3+ |
| 4+ | 4+ |
| 5+ | 5+ |

#### Location
| Option | Value |
|--------|-------|
| All Cities | all |
| New York | new-york |
| Los Angeles | los-angeles |
| Chicago | chicago |
| Miami | miami |
| San Diego | san-diego |

### Property Card Data Structure (List Style with Description)
```typescript
interface PropertyCardListStyle {
  // Primary Identification
  id: string;
  slug: string;
  
  // Basic Information
  title: string;                 // "Equestrian Family Home"
  location: string;              // "San Diego City, CA, USA"
  description: string;           // "An exceptional exclusive five bedroom..."
  
  // Pricing
  price: number;
  priceFormatted: string;        // "$14,000 / mo"
  
  // Property Details
  beds: number;
  baths: number;
  sqft: number;
  
  // Status
  status: 'sale' | 'rent' | 'sold';
  isFeatured: boolean;
  
  // Media
  featuredImage: string;
  images: string[];
  
  // User Interactions
  isFavorite: boolean;
  isCompared: boolean;
}
```

### Pagination Data
```typescript
interface PaginationData {
  currentPage: number;           // Current page (1-5)
  totalPages: number;            // Total pages (5)
  itemsPerPage: number;          // Properties per page (6)
  totalItems: number;            // Total properties (25+)
  showingFrom: number;
  showingTo: number;
}
```

## 5. Component Breakdown

### Header Navigation Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                                       │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Logo (Header Logo)                                              │
│ ├── Main Navigation Menu                                            │
│ │   ├── Home (dropdown)                                             │
│ │   ├── Listing (dropdown)                                          │
│ │   │   ├── Grid Variants (6 options)                              │
│ │   │   ├── Map Variants (5 options)                               │
│ │   │   └── List Variants (2 options)                              │
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

### Breadcrumb Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Page Title: "List View"                                         │
│ └── Breadcrumb Trail                                                │
│     ├── Home (link)                                                 │
│     ├── Separator: "/"                                              │
│     └── For Rent (link)                                             │
│                                                                      │
│ Structure:                                                           │
│ List View                                                            │
│ Home / For Rent                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Sidebar Filter Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ SIDEBAR FILTER PANEL                                                 │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│                                                                      │
│ ├── Search Box                                                      │
│ │   ├── Label: "Find your home"                                     │
│ │   ├── Input: "What are you looking for?"                          │
│ │   └── Search Icon                                                 │
│                                                                      │
│ ├── Listing Status                                                  │
│ │   ├── Label: "Listing Status"                                     │
│ │   └── Radio Buttons: All, Buy, Rent                               │
│                                                                      │
│ ├── Property Type                                                   │
│ │   ├── Label: "Property Type"                                      │
│ │   └── Checkboxes: All, Houses, Apartments, Office, Villa          │
│                                                                      │
│ ├── Price Range                                                     │
│ │   ├── Label: "Price Range"                                        │
│ │   ├── Slider (dual handle)                                        │
│ │   └── Value Display: "$20 – $70987"                               │
│                                                                      │
│ ├── Bedrooms                                                        │
│ │   ├── Label: "Bedrooms"                                           │
│ │   └── Button Group: any, 1+, 2+, 3+, 4+, 5+                       │
│                                                                      │
│ ├── Bathrooms                                                       │
│ │   ├── Label: "Bathrooms"                                          │
│ │   └── Button Group: any, 1+, 2+, 3+, 4+, 5+                       │
│                                                                      │
│ ├── Location                                                        │
│ │   ├── Label: "Location"                                           │
│ │   └── Dropdown: "All Cities"                                      │
│                                                                      │
│ ├── Square Feet                                                     │
│ │   ├── Label: "Square Feet"                                        │
│ │   ├── Input: "Min."                                               │
│ │   ├── Separator: "-"                                              │
│ │   └── Input: "Max"                                                │
│                                                                      │
│ ├── Year Built                                                      │
│ │   ├── Label: "Year Built"                                         │
│ │   ├── Input: "2019"                                               │
│ │   ├── Separator: "-"                                              │
│ │   └── Input: "2022"                                               │
│                                                                      │
│ ├── Other Features (Collapsible)                                    │
│ │   ├── Toggle Button: "▼ Other Features"                           │
│ │   └── Expanded Content: Additional checkboxes                     │
│                                                                      │
│ ├── Search Button                                                   │
│ │   └── "🔍 Search"                                                  │
│                                                                      │
│ ├── Reset Filters                                                   │
│ │   └── "↻ Reset all filters"                                       │
│                                                                      │
│ └── Save Search                                                     │
│     └── "♡ Save Search"                                             │
└─────────────────────────────────────────────────────────────────────┘
```

### Property List Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ PROPERTY LIST                                                        │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│                                                                      │
│ ├── Toolbar                                                         │
│ │   ├── Result Count: "Showing 1–6 of 25 results"                   │
│ │   ├── Sort Dropdown                                               │
│ │   │   └── Options: Newest, Best Seller, Best Match,              │
│ │   │               Price Low, Price High                          │
│ │   └── View Toggle                                                 │
│ │       ├── Grid Icon                                               │
│ │       └── List Icon (active)                                      │
│                                                                      │
│ ├── Property Cards                                                  │
│ │   └── List-Style Property Card Components                         │
│                                                                      │
│ ├── Pagination                                                      │
│ │   ├── Previous Arrow (<)                                          │
│ │   ├── Page Numbers (1 2 3 ... 5)                                  │
│ │   └── Next Arrow (>)                                              │
│ │                                                                   │
│ └── Result Summary                                                  │
│     └── "1-8 of 25+ property available"                            │
└─────────────────────────────────────────────────────────────────────┘
```

### List-Style Property Card Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST-STYLE PROPERTY CARD                                             │
├─────────────────────────────────────────────────────────────────────┤
│ Structure:                                                           │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │ ┌──────────────┐                                                │  │
│ │ │              │  ┌────────────────────────┐                    │  │
│ │ │              │  │ ★ FEATURED             │                    │  │
│ │ │   Property   │  └────────────────────────┘                    │  │
│ │ │    Image     │                                                │  │
│ │ │              │  $14,000 / mo                                  │  │
│ │ │              │                                                │  │
│ │ └──────────────┘                                                │  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│ Equestrian Family Home                                               │
│ San Diego City, CA, USA                                              │
│                                                                      │
│ 🛏 5 bed   🛁 4 bath   ▢ 900 sqft                                   │
│                                                                      │
│ "An exceptional exclusive five bedroom apartment for sale in        │
│  this much sought after development in Knightsbridge."              │
│                                                                      │
│ ─────────────────────────────────────────────────────               │
│ For Rent     [❤] [⚖] [⋮]                                           │
└─────────────────────────────────────────────────────────────────────┘
```

### Footer Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│                                                                      │
│ ├── Contact Section                                                 │
│ │   ├── Logo                                                        │
│ │   ├── Phone: "+(0) 123 050 945 02"                               │
│ │   ├── Email: "hi@homez.com"                                      │
│ │   ├── Apps Section                                                │
│ │   │   ├── Apple Store Button                                     │
│ │   │   └── Google Play Button                                     │
│ │   └── Social Links                                                │
│ │       └── Facebook, Twitter, Instagram, LinkedIn                 │
│                                                                      │
│ ├── Newsletter Section                                              │
│ │   ├── Label: "Keep Yourself Up to Date"                          │
│ │   ├── Email Input: "Your Email"                                  │
│ │   └── Subscribe Button                                            │
│                                                                      │
│ ├── Quick Links Columns                                             │
│ │   ├── Popular Search                                             │
│ │   │   └── Apartment for Rent, Apartment Low to Hide, etc.        │
│ │   ├── Quick Links                                                │
│ │   │   └── Terms of Use, Privacy Policy, Pricing Plans, etc.     │
│ │   └── Discover                                                   │
│ │       └── Miami, Los Angeles, Chicago, New York                  │
│                                                                      │
│ └── Copyright Bar                                                   │
│     └── "© Homez 2024 ib-themes - All rights reserved"             │
│         Privacy · Terms · Sitemap                                   │
└─────────────────────────────────────────────────────────────────────┘
```

## 6. Interactive Elements

### Sidebar Filter Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Search Input | Focus/Type | Enter search query |
| Search Input | Enter | Submits search |
| Listing Status Radio | Click | Selects status option |
| Property Type Checkbox | Click | Toggles property type filter |
| Price Range Slider | Drag | Adjusts min/max price |
| Bedroom Button | Click | Selects bedroom count |
| Bathroom Button | Click | Selects bathroom count |
| Location Dropdown | Click | Opens city options |
| Square Feet Input | Type | Enter min/max values |
| Year Built Input | Type | Enter year range |
| Other Features Toggle | Click | Expands/collapses additional filters |
| Search Button | Click | Applies all filters |
| Reset Filters | Click | Clears all filters |
| Save Search | Click | Saves current filter configuration |

### Property Card Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Card Container | Click | Navigates to property details |
| Property Title | Click | Navigates to property details |
| Heart Icon | Click | Adds/removes from favorites |
| Compare Icon | Click | Adds/removes from comparison |
| More Options | Click | Opens context menu |

### View Toggle Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Grid Icon | Click | Switches to grid card layout |
| List Icon | Click | Switches to list card layout (current) |

### Sort Dropdown Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Sort Dropdown | Click | Opens sort options |
| Sort Option | Click | Applies sort, refreshes list |

### Pagination Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Page Number | Click | Loads that page |
| Previous Arrow | Click | Goes to previous page |
| Next Arrow | Click | Goes to next page |

### Footer Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Newsletter Input | Type | Enter email |
| Subscribe Button | Click | Submits email |
| Social Links | Click | Opens social media |
| Quick Links | Click | Navigates to page |

## 7. Responsive Breakpoints

### Breakpoint Configuration
| Breakpoint | Width | Sidebar | Content |
|------------|-------|---------|---------|
| **Desktop** | > 1200px | Fixed left, 300px | 70% width |
| **Laptop** | 992-1200px | Fixed left, 280px | 65% width |
| **Tablet** | 768-991px | Full width, collapsible | Full width |
| **Mobile** | < 768px | Full width, collapsed | Full width |

### Desktop Layout (> 1200px)
```css
.list-page-container {
  display: flex;
}

.filter-sidebar {
  width: 300px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.property-list-content {
  flex: 1;
  padding: 30px;
}
```

### Tablet Layout (768-991px)
```css
.list-page-container {
  flex-direction: column;
}

.filter-sidebar {
  width: 100%;
  max-height: none;
  position: relative;
  top: 0;
}

/* Add filter toggle for tablet */
.filter-toggle-btn {
  display: block;
}

.filter-sidebar:not(.expanded) {
  max-height: 200px;
  overflow: hidden;
}
```

### Mobile Layout (< 768px)
```css
.list-page-container {
  flex-direction: column;
}

.filter-sidebar {
  width: 100%;
  padding: 15px;
}

/* Stack filters vertically */
.filter-group {
  width: 100%;
}

/* Property cards become more compact */
.property-card {
  flex-direction: column;
}

.property-card .image {
  width: 100%;
  height: 200px;
}

.property-card .content {
  padding: 15px;
}

/* Description hidden on mobile */
.property-card .description {
  display: none;
}
```

### Property Card Responsive Behavior
| Breakpoint | Layout | Description |
|------------|--------|-------------|
| > 1200px | Horizontal | Full (120 chars) |
| 992-1200px | Horizontal | Truncated (80 chars) |
| 768-991px | Horizontal | Truncated (60 chars) |
| < 768px | Vertical | Hidden |

## 8. State Management

### Filter State
```typescript
interface FilterState {
  search: string;
  listingStatus: 'all' | 'buy' | 'rent';
  propertyTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  bedrooms: string;
  bathrooms: string;
  location: string;
  squareFeet: {
    min: number | null;
    max: number | null;
  };
  yearBuilt: {
    min: number;
    max: number;
  };
  otherFeatures: string[];
}
```

### View State
```typescript
interface ViewState {
  viewMode: 'grid' | 'list';
  sortBy: 'newest' | 'best-seller' | 'best-match' | 'price-low' | 'price-high';
  currentPage: number;
  sidebarExpanded: boolean;     // For mobile/tablet
  otherFeaturesExpanded: boolean;
}
```

### Saved Search State
```typescript
interface SavedSearch {
  id: string;
  name: string;
  filters: FilterState;
  createdAt: Date;
  resultCount: number;
}
```

## 9. API Integration

### Property List API
```typescript
interface PropertyListRequest {
  filters: FilterState;
  sort: ViewState['sortBy'];
  page: number;
  pageSize: number;
}

interface PropertyListResponse {
  properties: PropertyCardListStyle[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  filterCounts: {
    propertyTypes: Record<string, number>;
    locations: Record<string, number>;
  };
}
```

### Save Search API
```typescript
interface SaveSearchRequest {
  filters: FilterState;
  name?: string;
}

interface SaveSearchResponse {
  success: boolean;
  savedSearch: SavedSearch;
}
```

## 10. Accessibility Considerations

### ARIA Labels
- Sidebar: `aria-label="Property filters"`
- Filter groups: `role="group" aria-labelledby`
- Radio/Checkbox groups: `role="radiogroup"` / `role="group"`
- Price slider: `role="slider" aria-valuemin aria-valuemax aria-valuenow`
- Property cards: `role="article"`
- Pagination: `role="navigation" aria-label="Property list pagination"`

### Keyboard Navigation
- Tab: Navigate through all filter controls
- Enter/Space: Activate buttons, select options
- Arrow keys: Navigate within radio/checkbox groups
- Escape: Close dropdowns

### Focus Management
- Focus moves to results after search
- Focus trap in modals
- Skip link to main content

## 11. Performance Considerations

### Filter Optimization
- Debounced filter changes
- Memoized filter options
- Lazy load Other Features section

### List Optimization
- Virtual scrolling for long lists
- Lazy loading images
- Pagination instead of infinite scroll

### Caching
- Cache filter options
- Cache search results for back navigation

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

### Sidebar Filter State Management
```typescript
// Zustand Store for Filters
import { create } from 'zustand';

interface FilterStore {
  filters: FilterState;
  setFilter: (key: string, value: any) => void;
  resetFilters: () => void;
  saveSearch: () => Promise<void>;
}

const useFilterStore = create<FilterStore>((set, get) => ({
  filters: {
    listingStatus: 'all',
    propertyTypes: [],
    priceRange: { min: 0, max: 100000 },
    bedrooms: 'any',
    bathrooms: 'any',
    location: 'all',
    squareFeet: { min: null, max: null },
    yearBuilt: { min: 2019, max: 2022 }
  },
  setFilter: (key, value) => set(state => ({
    filters: { ...state.filters, [key]: value }
  })),
  resetFilters: () => set({ filters: defaultFilters }),
  saveSearch: async () => { /* API call */ }
}));
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

### Sidebar Filter Panel Animation

```typescript
// components/SidebarFilter.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SidebarFilter = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar slide in from left
      gsap.from(sidebarRef.current, {
        x: -50,
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

### List-Style Card Animation

```typescript
// components/ListStyleCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const ListStyleCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Description slide reveal
    gsap.to(descriptionRef.current, {
      maxHeight: 150,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p ref={descriptionRef}>{property.description}</p>
    </div>
  );
};
```

### Filter Collapse/Expand Animation

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

### Price Range Slider Animation

```typescript
// components/PriceRangeSlider.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const PriceRangeSlider = ({ min, max, onChange }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDrag = (value: number) => {
    // Visual feedback animation
    gsap.to('.slider-thumb', {
      scale: 1.1,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  return <div ref={sliderRef}>{/* Slider content */}</div>;
};
```

### Horizontal Card Layout Animation

```typescript
// components/HorizontalCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const HorizontalCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
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

- [Header Map Style](./header-map-style.md) - Home page with map-style search
- [Map V1](./map-v1.md) - Map with grid-style cards
- [Map V2](./map-v2.md) - Map with list-style cards
- [Map V3](./map-v3.md) - Compact map with toggle filter
- [Map V4](./map-v4.md) - Map on left, list on right
- [List All Style](./list-all-style.md) - All list card styles showcase

---

*Homez - Modern Designed Real Estate React NextJS Template*
