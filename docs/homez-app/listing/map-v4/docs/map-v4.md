# Map V4 - Map-Left Layout with Minimal Cards

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/map-v4](https://homez-appdir.vercel.app/map-v4)  
**Page Title:** Map V4 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page  
**Layout Type:** Split View (Map Left + Property List Right)

## 2. Page Overview

### Layout Type and Purpose
Map V4 is a property listing page that inverts the traditional map layout, placing the map on the LEFT side and the property list on the RIGHT side. This layout also features minimal property cards that focus on essential information, with a search bar integrated into the header area.

### Key Differentiators
- **Inverted Layout**: Map on LEFT, list on RIGHT (opposite of V1/V2/V3)
- **Search Bar in Header**: Location search integrated at top
- **Minimal Property Cards**: Ultra-compact card design
- **Focus on Map**: Larger map area for geographic exploration

### Key Features
- Interactive Google Maps on the left side
- Scrollable property list on the right side with minimal cards
- Search bar with location input in the header
- Horizontal filter bar at the top
- Real-time map-list synchronization

## 3. Layout Configuration

### Split Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Split view (Map + List) |
| **Map Position** | LEFT side |
| **List Position** | RIGHT side |
| **Map Width** | ~60% (larger area) |
| **List Width** | ~40% (350-400px) |
| **Total Height** | Full viewport minus header |
| **Card Style** | Minimal (ultra-compact) |

### Layout Structure
```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER - Navigation (Fixed)                                           │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]                │
│ [Login/Register] [Add Property →]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ SEARCH BAR (Full Width)                                               │
│ [🔍 Enter address...] [For Sale▼] [Property Type▼] [Price▼]          │
│ [Beds/Baths▼] [More Filter]                                          │
├─────────────────────────────────────────┬────────────────────────────┤
│                                         │                            │
│          INTERACTIVE MAP                 │   PROPERTY LIST            │
│          (Left Panel)                    │   (Right Panel)            │
│                                         │                            │
│     ┌─────────────────────────────┐     │  ┌──────────────────────┐  │
│     │                             │     │  │ "New York Homes..."  │  │
│     │    [Marker] [Marker]        │     │  │ Showing 1–4 of 25    │  │
│     │        [Marker]             │     │  │ Sort: [Newest▼]      │  │
│     │           [Cluster: 3]      │     │  └──────────────────────┘  │
│     │                             │     │                            │
│     │   [+][-] Zoom Controls      │     │  ┌──────────────────────┐  │
│     │                             │     │  │ Minimal Card 1       │  │
│     │   © Google Maps             │     │  └──────────────────────┘  │
│     └─────────────────────────────┘     │  ┌──────────────────────┐  │
│                                         │  │ Minimal Card 2       │  │
│                                         │  └──────────────────────┘  │
│                                         │  ┌──────────────────────┐  │
│                                         │  │ Minimal Card 3       │  │
│                                         │  └──────────────────────┘  │
│                                         │  ┌──────────────────────┐  │
│                                         │  │ Minimal Card 4       │  │
│                                         │  └──────────────────────┘  │
│                                         │                            │
│                                         │  [Pagination: 1 2 3 ... 7] │
│                                         │  "1-8 of 25+ property..."  │
│                                         │                            │
└─────────────────────────────────────────┴────────────────────────────┘
```

### Split Layout CSS
```css
.map-listing-container {
  display: flex;
  flex-direction: row-reverse; /* Inverts the order */
  height: calc(100vh - 180px); /* Minus header and search bar */
  overflow: hidden;
}

/* Map is now on the LEFT (appears first in DOM after reversal) */
.map-panel {
  flex: 1;
  position: relative;
  order: -1; /* Ensures map is first visually */
}

/* List is on the RIGHT */
.list-panel {
  width: 400px;
  min-width: 350px;
  max-width: 450px;
  overflow-y: auto;
  border-left: 1px solid #e0e0e0;
}

@media (max-width: 991px) {
  .map-listing-container {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  
  .map-panel {
    height: 50vh;
    order: 0;
  }
  
  .list-panel {
    width: 100%;
    height: 50vh;
    max-width: 100%;
    border-left: none;
    border-top: 1px solid #e0e0e0;
  }
}
```

## 4. Data Content Structure

### Search Bar Data
```typescript
interface SearchBarConfig {
  searchInput: {
    placeholder: string;      // "Enter an address, neighborhood, city, or ZIP code"
    icon: string;             // Search icon
  };
  filterDropdowns: FilterDropdown[];
}

interface FilterDropdown {
  id: string;
  label: string;              // "For Sale", "Property Type", etc.
  icon?: string;
  options: FilterOption[];
}
```

### Filter Bar Options

#### Search Input
| Field | Value |
|-------|-------|
| Placeholder | "Enter an address, neighborhood, city, or ZIP code" |
| Icon | Search icon (🔍) |

#### For Sale Dropdown
| Option | Value |
|--------|-------|
| For Sale | "sale" |
| For Rent | "rent" |
| Sold | "sold" |

#### Property Type Dropdown
| Option | Value |
|--------|-------|
| Houses | "houses" |
| Apartments | "apartments" |
| Office | "office" |
| Villa | "villa" |
| Townhome | "townhome" |
| Bungalow | "bungalow" |
| Loft | "loft" |

#### Price Dropdown
| Option | Value |
|--------|-------|
| $0 - $100,000 | "0-100000" |
| $100,000 - $250,000 | "100000-250000" |
| $250,000 - $500,000 | "250000-500000" |
| $500,000 - $1,000,000 | "500000-1000000" |
| $1,000,000+ | "1000000+" |
| Custom Range | "custom" |

#### Beds / Baths Dropdown
| Option | Beds Value | Baths Value |
|--------|------------|-------------|
| Any | "any" | "any" |
| 1+ | "1" | "1" |
| 2+ | "2" | "2" |
| 3+ | "3" | "3" |
| 4+ | "4" | "4" |
| 5+ | "5" | "5" |

### Property Card Data Structure (Minimal Style)
```typescript
interface PropertyCardMinimal {
  // Primary Identification
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly identifier
  
  // Basic Information (Minimal)
  title: string;                 // "Equestrian Family Home"
  location: string;              // "San Diego City, CA, USA"
  
  // Pricing
  price: number;                 // Numeric value
  priceFormatted: string;        // "$14,000" (no /mo suffix)
  
  // Status
  isFeatured: boolean;           // Featured badge display
  
  // Media
  featuredImage: string;         // Primary image URL
  
  // Map Data
  coordinates: {
    lat: number;
    lng: number;
  };
  
  // User Interactions (On Image)
  isFavorite: boolean;           // Heart icon state
  isCompared: boolean;           // Compare icon state
}
```

### Map Marker Data
```typescript
interface MapMarker {
  id: string;                    // Property ID
  position: {
    lat: number;
    lng: number;
  };
  price: string;                 // Display price on marker
  cluster?: boolean;             // Part of cluster
  clusterCount?: number;         // Number in cluster
}

interface MapCluster {
  position: {
    lat: number;
    lng: number;
  };
  count: number;                 // Number of properties in cluster
  markerIds: string[];           // Property IDs in cluster
}
```

### Pagination Data
```typescript
interface PaginationData {
  currentPage: number;           // Current page (1-7)
  totalPages: number;            // Total pages (7)
  itemsPerPage: number;          // Properties per page (4)
  totalItems: number;            // Total properties (25+)
  showingFrom: number;           // Starting item number
  showingTo: number;             // Ending item number
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

### Search Bar Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ SEARCH BAR                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Search Input Field                                              │
│ │   ├── Search Icon                                                 │
│ │   └── Placeholder: "Enter an address..."                          │
│                                                                      │
│ ├── Filter Dropdowns                                                │
│ │   ├── For Sale Button                                            │
│ │   │   └── Dropdown Menu                                          │
│ │   ├── Property Type Button                                       │
│ │   │   └── Dropdown Menu                                          │
│ │   ├── Price Button                                               │
│ │   │   └── Dropdown Menu                                          │
│ │   ├── Beds / Baths Button                                        │
│ │   │   └── Dropdown Menu                                          │
│ │   └── More Filter Button                                         │
│ │       └── Advanced Filters Modal                                 │
│                                                                      │
│ Structure:                                                           │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │ 🔍 Enter an address... │ For Sale▼ │ Property Type▼ │ Price▼  │  │
│ │                        │ Beds/Baths▼ │ More Filter          │  │
│ └────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### Map Panel Component (LEFT Side)
```
┌─────────────────────────────────────────────────────────────────────┐
│ MAP PANEL (Left Side)                                                │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Google Maps Container                                           │
│ │   ├── Map Base (Google Maps)                                      │
│ │   ├── Property Markers                                            │
│ │   │   ├── Standard Markers (with price)                          │
│ │   │   └── Cluster Markers (grouped properties)                   │
│ │   └── Info Windows (on marker click)                             │
│                                                                      │
│ ├── Map Controls                                                    │
│ │   ├── Zoom In Button (+)                                          │
│ │   ├── Zoom Out Button (-)                                         │
│ │   └── Fullscreen Toggle                                           │
│                                                                      │
│ ├── Map Overlays                                                    │
│ │   ├── Google Logo                                                 │
│ │   ├── Terms Link                                                  │
│ │   └── Keyboard Shortcuts Button                                   │
│                                                                      │
│ └── Error State (if API key missing)                                │
│     └── "This page can't load Google Maps correctly."              │
│                                                                      │
│ Marker Structure:                                                    │
│ ┌──────────────┐                                                    │
│ │  $14,000     │   ← Price only (no /mo)                           │
│ └──────┬───────┘                                                    │
│        │                                                            │
│       📍                                                            │
└─────────────────────────────────────────────────────────────────────┘
```

### List Panel Component (RIGHT Side)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST PANEL (Right Side)                                              │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Page Header                                                     │
│ │   ├── Title: "New York Homes for Sale"                           │
│ │   └── Result Count: "Showing 1–4 of 25 results"                  │
│                                                                      │
│ ├── Toolbar                                                         │
│ │   ├── Sort Dropdown                                               │
│ │   │   └── Options: Newest, Best Seller, Best Match,              │
│ │   │               Price Low, Price High                          │
│ │   └── View Toggle (hidden - only one view style)                  │
│                                                                      │
│ ├── Property Cards List                                             │
│ │   └── Minimal Property Card Components                            │
│                                                                      │
│ ├── Pagination                                                      │
│ │   ├── Previous Arrow (<)                                          │
│ │   ├── Page Numbers (1 2 3 ... 7)                                  │
│ │   └── Next Arrow (>)                                              │
│ │                                                                   │
│ └── Result Summary                                                  │
│     └── "1-8 of 25+ property available"                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Minimal Property Card Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ MINIMAL PROPERTY CARD                                                │
├─────────────────────────────────────────────────────────────────────┤
│ Structure:                                                           │
│ ┌──────────────────────────────────────┐                            │
│ │ ┌──────────────────────────────────┐ │                            │
│ │ │                                  │ │                            │
│ │ │      Property Image              │ │                            │
│ │ │                                  │ │                            │
│ │ └──────────────────────────────────┘ │                            │
│ │ ┌────────────────────────┐           │                            │
│ │ │ ★ FEATURED             │           │   ← Optional Featured Tag  │
│ │ └────────────────────────┘           │                            │
│ │ [⋮] [⚖] [❤]                        │   ← Social Icons            │
│ └──────────────────────────────────────┘                            │
│                                                                      │
│ $14,000                                                             │
│ Equestrian Family Home                                               │
│ San Diego City, CA, USA                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

Key Characteristics:
- Price at TOP (prominent)
- Title and location below
- NO bed/bath/sqft info
- NO status badge
- Social icons ON the image (not in footer)
- Ultra-compact design
```

## 6. Interactive Elements

### Search Bar Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Search Input | Focus | Highlights input field |
| Search Input | Type | Real-time text input |
| Search Input | Enter | Submits search |
| Filter Dropdown | Click | Opens dropdown menu |
| Filter Option | Click | Selects option, closes dropdown |

### Filter Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| More Filter | Click | Opens advanced filter modal |
| Applied Filter | Click X | Removes filter |

### Property Card Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Card Container | Click | Navigates to property details page |
| Card Container | Hover | Highlights corresponding map marker |
| Heart Icon | Click | Adds/removes from favorites |
| Compare Icon | Click | Adds/removes from comparison |
| More Options | Click | Opens context menu |

### Map Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Property Marker | Click | Shows info window with property preview |
| Property Marker | Hover | Highlights corresponding list card |
| Cluster Marker | Click | Zooms in to show individual markers |
| Zoom In | Click | Zooms map in one level |
| Zoom Out | Click | Zooms map out one level |
| Map Pan | Drag | Moves map viewport |
| Map Zoom | Scroll | Zooms in/out on map |

### Pagination Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Page Number | Click | Loads that page of results |
| Previous Arrow | Click | Goes to previous page |
| Next Arrow | Click | Goes to next page |

### Sort Dropdown Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Sort Dropdown | Click | Opens sort options |
| Sort Option | Click | Applies sort, refreshes list |

## 7. Responsive Breakpoints

### Breakpoint Configuration
| Breakpoint | Width | Layout |
|------------|-------|--------|
| **Desktop** | > 1200px | Map left, list right |
| **Laptop** | 992-1200px | Compressed split view |
| **Tablet** | 768-991px | Map top, list bottom |
| **Mobile** | < 768px | Full-screen toggle |

### Desktop Layout (> 1200px)
```css
.map-listing-container {
  display: flex;
  flex-direction: row;
}

.map-panel {
  flex: 1;
  order: 0; /* Map on left */
}

.list-panel {
  width: 400px;
  order: 1; /* List on right */
}
```

### Tablet Layout (768-991px)
```css
.map-listing-container {
  display: flex;
  flex-direction: column;
}

.map-panel {
  height: 50vh;
  order: 0; /* Map on top */
}

.list-panel {
  width: 100%;
  height: 50vh;
  order: 1; /* List on bottom */
}

/* Search bar stays at top */
.search-bar {
  flex-wrap: wrap;
}
```

### Mobile Layout (< 768px)
```css
.map-listing-container {
  display: flex;
  flex-direction: column;
}

/* Toggle between views */
.map-panel.active,
.list-panel.active {
  height: calc(100vh - 250px);
}

.map-panel:not(.active),
.list-panel:not(.active) {
  display: none;
}

/* Mobile toggle tabs */
.mobile-view-toggle {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: white;
  z-index: 100;
}

/* Search bar becomes full width, stacked */
.search-bar {
  flex-direction: column;
  gap: 10px;
}

.search-bar input,
.search-bar .filter-dropdowns {
  width: 100%;
}
```

### Property Card Responsive Behavior
| Breakpoint | Card Layout | Information Shown |
|------------|-------------|-------------------|
| > 1200px | Minimal | Price, title, location |
| 992-1200px | Minimal | Price, title, location |
| 768-991px | Minimal | Price, title, location |
| < 768px | Minimal | Price, title, location |

## 8. State Management

### Search State
```typescript
interface SearchState {
  query: string;                // Search input text
  filters: FilterState;
}

interface FilterState {
  listingType: 'sale' | 'rent' | 'sold';
  propertyTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  beds: string;
  baths: string;
  advancedFilters: {
    amenities: string[];
    yearBuilt: { min: number; max: number; };
    squareFeet: { min: number; max: number; };
    features: string[];
  };
}
```

### View State
```typescript
interface ViewState {
  sortBy: 'newest' | 'best-seller' | 'best-match' | 'price-low' | 'price-high';
  currentPage: number;
  activePanel: 'list' | 'map';  // For mobile toggle
}
```

### Map State
```typescript
interface MapState {
  center: { lat: number; lng: number };
  zoom: number;
  bounds: {
    ne: { lat: number; lng: number };
    sw: { lat: number; lng: number };
  };
  activeMarker: string | null;
  showInfoWindow: boolean;
}
```

## 9. API Integration

### Property List API
```typescript
interface PropertyListRequest {
  search: SearchState;
  sort: ViewState['sortBy'];
  page: number;
  pageSize: number;
  bounds?: MapState['bounds'];
}

interface PropertyListResponse {
  properties: PropertyCardMinimal[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  mapData: {
    markers: MapMarker[];
    clusters: MapCluster[];
  };
}
```

### Search API
```typescript
interface SearchRequest {
  query: string;                // Address, neighborhood, city, ZIP
  filters: FilterState;
}

interface SearchResponse {
  suggestions: Array<{
    text: string;
    type: 'address' | 'neighborhood' | 'city' | 'zip';
    coordinates?: { lat: number; lng: number };
  }>;
}
```

## 10. Accessibility Considerations

### ARIA Labels
- Search bar: `role="search" aria-label="Property search"`
- Search input: `aria-label="Search properties by address, neighborhood, city, or ZIP code"`
- Filter dropdowns: `aria-expanded`, `aria-haspopup="listbox"`
- Map container: `role="application" aria-label="Interactive property map"`
- Property cards: `role="article"`

### Keyboard Navigation
- Tab: Navigate through search, filters, cards, and map
- Enter/Space: Activate buttons and select options
- Arrow keys: Navigate within dropdowns
- Escape: Close dropdowns and modals

### Focus Management
- Focus moves to first result after search
- Focus trap in advanced filter modal
- Visible focus indicators

## 11. Performance Considerations

### Map Optimization
- Lazy loading map tiles
- Marker clustering
- Debounced map events
- Efficient marker updates

### Search Optimization
- Debounced search input
- Autocomplete caching
- Result caching

### Minimal Card Optimization
- Smallest image sizes
- Minimal DOM elements
- Efficient re-renders

## 12. Comparison: Map V4 vs Other Map Variants

| Feature | Map V1 | Map V2 | Map V3 | Map V4 |
|---------|--------|--------|--------|--------|
| Map Position | Right | Right | Right | LEFT |
| List Position | Left | Left | Left | RIGHT |
| Search Bar | No | No | No | Yes (header) |
| Filter Bar | Visible | Visible | Toggle | Visible (with search) |
| Card Style | Grid | List | Compact | Minimal |
| Card Info | Full | Full+Desc | Minimal | Ultra-minimal |
| Price Format | $14,000/mo | $14,000/mo | $14,000/mo | $14,000 |
| Social Icons | Footer | Footer | On Image | On Image |

## 13. Technical Implementation

### Map Dependencies
- @react-google-maps/api: ^2.19.0 (Google Maps)
- Alternative: mapbox-gl + react-map-gl

### Map Features
- Property markers with clustering
- Draw search area
- Full-screen mode
- Split-view layouts

### Inverted Layout Implementation
```typescript
// Map Left, List Right Layout
const MapV4Layout = () => {
  return (
    <div className="map-listing-container">
      {/* Map on LEFT side */}
      <div className="map-panel" style={{ order: 0 }}>
        <MapComponent properties={properties} />
      </div>
      
      {/* List on RIGHT side */}
      <div className="list-panel" style={{ order: 1 }}>
        <PropertyList properties={properties} />
      </div>
    </div>
  );
};

// CSS for inverted layout
// .map-listing-container {
//   display: flex;
// }
// .map-panel { flex: 1; order: 0; }
// .list-panel { width: 400px; order: 1; }
```

### Search Bar Implementation
```typescript
// Full-Width Search Bar
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  
  return (
    <div className="search-bar">
      <div className="search-input">
        <SearchIcon />
        <input
          type="search"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="filter-dropdowns">
        <FilterSelect id="status" label="For Sale" />
        <FilterSelect id="type" label="Property Type" />
        <FilterSelect id="price" label="Price" />
        <FilterSelect id="beds-baths" label="Beds / Baths" />
        <MoreFilterButton />
      </div>
    </div>
  );
};
```

---


---

## 14. GSAP Animations

**GSAP Status:** NOT USED  
**Alternative:** AOS, CSS Transitions

### Map Transitions
```css
.map-panel { transition: all 0.3s ease; }
.marker:hover { transform: scale(1.1); }
```

---

## 14.5 GSAP Animation Implementation

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

### Inverted Layout Animation (Map Left, List Right)

```typescript
// components/MapV4Layout.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const MapV4Layout = ({ properties }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Map panel (left) entrance
      tl.from('.map-panel', {
        x: -100,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      // List panel (right) slide from right
      tl.from('.list-panel', {
        x: 100,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5');

      // Minimal cards stagger
      gsap.from('.minimal-card', {
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* Layout content */}</div>;
};
```

### Search Bar Animation

```typescript
// components/SearchBar.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SearchBar = () => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Search input animation
      tl.from('.search-input', {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Filter dropdowns stagger
      tl.from('.filter-dropdown', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, '-=0.2');
    }, searchRef);

    return () => ctx.revert();
  }, []);

  return <div ref={searchRef}>{/* Search bar content */}</div>;
};
```

### Minimal Property Card Animation

```typescript
// components/MinimalCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const MinimalCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      duration: 0.25,
      ease: 'power2.out',
    });

    // Action icons reveal
    gsap.fromTo('.card-actions',
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)',
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Minimal card content */}
    </div>
  );
};
```

### Responsive Layout Transition

```typescript
// hooks/useResponsiveLayout.ts
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const useResponsiveLayout = (isMobile: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      // Transition to stacked mobile layout
      gsap.to('.map-panel', {
        height: '50vh',
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.to('.list-panel', {
        height: '50vh',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    } else {
      // Restore desktop split view
      gsap.to(['.map-panel', '.list-panel'], {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [isMobile]);

  return containerRef;
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

## 15. Theme Variables

```css
:root {
  --color-primary: #e33e3e;
  --marker-bg: #e33e3e;
  --cluster-bg: #041e42;
}
```

---

## 16. NPM Dependencies

```json
{
  "dependencies": {
    "@react-google-maps/api": "^2.19.0",
    "mapbox-gl": "^3.0.0"
  }
}
```

---

## 17. Related Pages

## 14. Related Pages

- [Header Map Style](./header-map-style.md) - Home page with map-style search
- [Map V1](./map-v1.md) - Map with grid-style cards (map right)
- [Map V2](./map-v2.md) - Map with list-style cards (map right)
- [Map V3](./map-v3.md) - Compact map with toggle filter
- [List v1](./list-v1.md) - Full list view with sidebar
- [List All Style](./list-all-style.md) - All list card styles

---

*Homez - Modern Designed Real Estate React NextJS Template*
