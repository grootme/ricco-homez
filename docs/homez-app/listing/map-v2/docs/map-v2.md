# Map V2 - Map-Based Property Listings with List-Style Cards

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/map-v2](https://homez-appdir.vercel.app/map-v2)  
**Page Title:** Map V2 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page  
**Layout Type:** Split View (Map + Property List with List Cards)

## 2. Page Overview

### Layout Type and Purpose
Map V2 is a property listing page that combines an interactive Google Maps interface with a scrollable property list. The key difference from Map V1 is that property cards are displayed in a "list style" format that includes property descriptions, providing more information at a glance.

### Key Differentiator from Map V1
- **Map V1**: Grid-style property cards (compact, no description)
- **Map V2**: List-style property cards with descriptions (more detailed)

### Key Features
- Interactive Google Maps integration with property markers
- Scrollable property list with list-style cards (includes descriptions)
- Horizontal filter bar at the top
- Real-time map-list synchronization
- Marker clustering for dense areas

## 3. Layout Configuration

### Split Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Split view (List + Map) |
| **List Position** | Left side |
| **Map Position** | Right side |
| **List Width** | ~40% (450-500px) |
| **Map Width** | ~60% (remaining space) |
| **Total Height** | Full viewport minus header |
| **Card Style** | List (with description) |

### Layout Structure
```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER - Navigation (Fixed)                                           │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]                │
│ [Login/Register] [Add Property →]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ FILTER BAR                                                            │
│ [For Sale▼] [Property Type▼] [Price▼] [Beds/Baths▼] [More Filter]   │
├────────────────────────────┬─────────────────────────────────────────┤
│                            │                                          │
│   PROPERTY LIST            │          INTERACTIVE MAP                 │
│   (Left Panel)             │          (Right Panel)                   │
│                            │                                          │
│  ┌──────────────────────┐  │     ┌─────────────────────────────┐     │
│  │ "New York Homes..."  │  │     │                             │     │
│  │ Showing 1–4 of 25    │  │     │    [Marker] [Marker]        │     │
│  │ Sort: [Newest▼]      │  │     │        [Marker]             │     │
│  │ View: [Grid][List]   │  │     │           [Cluster: 3]      │     │
│  └──────────────────────┘  │     │                             │     │
│                            │     │   [+][-] Zoom Controls      │     │
│  ┌──────────────────────┐  │     │   [📍] My Location          │     │
│  │ Property Card 1      │  │     │                             │     │
│  │ (with description)   │  │     │   © Google Maps             │     │
│  └──────────────────────┘  │     └─────────────────────────────┘     │
│  ┌──────────────────────┐  │                                          │
│  │ Property Card 2      │  │                                          │
│  │ (with description)   │  │                                          │
│  └──────────────────────┘  │                                          │
│  ┌──────────────────────┐  │                                          │
│  │ Property Card 3      │  │                                          │
│  │ (with description)   │  │                                          │
│  └──────────────────────┘  │                                          │
│                            │                                          │
│  [Pagination: 1 2 3 ... 7]│                                          │
│  "1-8 of 25+ property..."  │                                          │
│                            │                                          │
└────────────────────────────┴─────────────────────────────────────────┘
```

### Split Layout CSS
```css
.map-listing-container {
  display: flex;
  height: calc(100vh - 140px); /* Full height minus header and filter bar */
  overflow: hidden;
}

.list-panel {
  width: 500px;               /* Slightly wider for description text */
  min-width: 400px;
  max-width: 550px;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.map-panel {
  flex: 1;
  position: relative;
}

@media (max-width: 991px) {
  .map-listing-container {
    flex-direction: column;
  }
  
  .list-panel {
    width: 100%;
    height: 60vh;             /* Taller for list-style cards */
    max-width: 100%;
  }
  
  .map-panel {
    height: 40vh;
  }
}
```

## 4. Data Content Structure

### Filter Sidebar Data
```typescript
interface FilterBar {
  tabs: FilterTab[];
  advancedFilters: AdvancedFilter[];
}

interface FilterTab {
  id: string;
  label: string;              // "For Sale", "Property Type", etc.
  icon?: string;
  dropdown: boolean;          // Has dropdown options
  options?: FilterOption[];
}
```

### Filter Bar Options (Same as Map V1)

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

### Property Card Data Structure (List Style with Description)
```typescript
interface PropertyCardListStyle {
  // Primary Identification
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly identifier
  
  // Basic Information
  title: string;                 // "Equestrian Family Home"
  location: string;              // "San Diego City, CA, USA"
  description: string;           // "An exceptional exclusive five bedroom apartment..."
  
  // Pricing
  price: number;                 // Numeric value
  priceFormatted: string;        // "$14,000 / mo"
  
  // Property Details
  beds: number;                  // Number of bedrooms
  baths: number;                 // Number of bathrooms
  sqft: number;                  // Square footage
  
  // Status
  status: 'sale' | 'rent' | 'sold';
  isFeatured: boolean;           // Featured badge display
  
  // Media
  featuredImage: string;         // Primary image URL
  images: string[];              // All property images
  
  // Map Data
  coordinates: {
    lat: number;
    lng: number;
  };
  
  // User Interactions
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

### Filter Bar Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ FILTER BAR                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Filter Dropdowns (horizontal layout)                            │
│ │   ├── For Sale Button                                            │
│ │   │   └── Dropdown Menu                                          │
│ │   ├── Property Type Button                                       │
│ │   │   └── Dropdown Menu                                          │
│ │   ├── Price Button                                               │
│ │   │   └── Dropdown Menu (with slider)                            │
│ │   ├── Beds / Baths Button                                        │
│ │   │   └── Dropdown Menu                                          │
│ │   └── More Filter Button                                         │
│ │       └── Advanced Filters Modal                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### List Panel Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST PANEL                                                           │
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
│ │   └── View Toggle                                                 │
│ │       ├── Grid Icon                                               │
│ │       └── List Icon (active)                                      │
│                                                                      │
│ ├── Property Cards List                                             │
│ │   └── Property Card Components (List Style)                       │
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

### Property Card Component (List Style with Description)
```
┌─────────────────────────────────────────────────────────────────────┐
│ PROPERTY CARD (List Style with Description)                          │
├─────────────────────────────────────────────────────────────────────┤
│ Structure:                                                           │
│ ┌──────────────────────────────────────────────────────────────┐    │
│ │ ┌────────────────────┐                                        │    │
│ │ │                    │  ┌────────────────────────┐           │    │
│ │ │                    │  │ ★ FEATURED             │           │    │
│ │ │   Property Image   │  └────────────────────────┘           │    │
│ │ │                    │                                        │    │
│ │ │                    │  $14,000 / mo                          │    │
│ │ └────────────────────┘                                        │    │
│ └──────────────────────────────────────────────────────────────┘    │
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

### Map Panel Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ MAP PANEL                                                            │
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
│ │  $14,000/mo  │                                                    │
│ └──────┬───────┘                                                    │
│        │                                                            │
│       📍                                                            │
└─────────────────────────────────────────────────────────────────────┘
```

## 6. Interactive Elements

### Filter Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Filter Dropdown Button | Click | Opens dropdown menu |
| Filter Option | Click | Selects option, closes dropdown |
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
| Description Text | - | Shows truncated preview (click card for full) |

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

### View Toggle Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Grid Icon | Click | Switches to grid card layout (Map V1 style) |
| List Icon | Click | Switches to list card layout (current) |

### Sort Dropdown Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Sort Dropdown | Click | Opens sort options |
| Sort Option | Click | Applies sort, refreshes list |

## 7. Responsive Breakpoints

### Breakpoint Configuration
| Breakpoint | Width | Layout |
|------------|-------|--------|
| **Desktop** | > 1200px | Side-by-side split view |
| **Laptop** | 992-1200px | Compressed split view |
| **Tablet** | 768-991px | Toggle between map/list |
| **Mobile** | < 768px | Full-screen views with tab toggle |

### Desktop Layout (> 1200px)
```css
.map-listing-container {
  display: flex;
  flex-direction: row;
}

.list-panel {
  width: 500px;              /* Wider for description */
  flex-shrink: 0;
}

.map-panel {
  flex: 1;
}
```

### Tablet Layout (768-991px)
```css
.map-listing-container {
  display: flex;
  flex-direction: column;
}

.list-panel,
.map-panel {
  width: 100%;
  height: 50vh;
}

/* Tab toggle appears */
.view-toggle {
  display: flex;
}
```

### Mobile Layout (< 768px)
```css
.map-listing-container {
  display: flex;
  flex-direction: column;
}

/* Show one panel at a time with toggle */
.list-panel.active,
.map-panel.active {
  height: calc(100vh - 200px);
}

.list-panel:not(.active),
.map-panel:not(.active) {
  display: none;
}

/* Property card stacks vertically */
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
```

### Property Card Responsive Behavior
| Breakpoint | Card Layout | Description |
|------------|-------------|-------------|
| > 1200px | Horizontal (image left) | Full description visible |
| 992-1200px | Horizontal (compact) | Description truncated |
| 768-991px | Horizontal | Description truncated |
| < 768px | Vertical (stacked) | Description truncated |

## 8. State Management

### Filter State
```typescript
interface FilterState {
  listingType: 'sale' | 'rent' | 'sold';
  propertyTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  beds: 'any' | '1' | '2' | '3' | '4' | '5+';
  baths: 'any' | '1' | '2' | '3' | '4' | '5+';
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
  viewMode: 'grid' | 'list';
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
  activeMarker: string | null;    // ID of hovered/clicked marker
  showInfoWindow: boolean;
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
  bounds?: MapState['bounds'];  // For map-based filtering
  includeDescription: boolean;   // Always true for Map V2
}

interface PropertyListResponse {
  properties: PropertyCardListStyle[];
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

### Map API Configuration
```typescript
interface MapConfig {
  provider: 'google' | 'mapbox';
  apiKey: string;
  defaultCenter: { lat: number; lng: number };
  defaultZoom: number;
  mapTypeId: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  styles?: MapStyle[];
  clustering: {
    enabled: boolean;
    gridSize: number;
    maxZoom: number;
  };
}
```

## 10. Accessibility Considerations

### ARIA Labels
- Filter bar: `role="group" aria-label="Property filters"`
- Filter dropdowns: `aria-expanded`, `aria-haspopup="listbox"`
- Map container: `role="application" aria-label="Interactive property map"`
- Property cards: `role="article"`
- Pagination: `role="navigation" aria-label="Property list pagination"`

### Keyboard Navigation
- Tab: Navigate through filters, cards, and map controls
- Enter/Space: Activate buttons and select options
- Arrow keys: Navigate within dropdowns and pagination
- Escape: Close dropdowns and modals

### Focus Management
- Visible focus indicators on all interactive elements
- Focus moves to first property when filters change
- Focus trap in filter modals

## 11. Performance Considerations

### Map Optimization
- Lazy loading map tiles
- Marker clustering for dense areas
- Debounced map movement events
- Virtual scrolling for property list

### Image Optimization
- Responsive image sizes
- Lazy loading property images
- Placeholder images while loading

### Description Truncation
```javascript
// Description is truncated to ~120 characters
const truncateDescription = (text: string, maxLength: number = 120) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};
```

## 12. Comparison: Map V1 vs Map V2

| Feature | Map V1 | Map V2 |
|---------|--------|--------|
| Card Style | Grid (compact) | List (with description) |
| Description | No | Yes |
| Card Height | ~250px | ~180px (but wider) |
| Properties Visible | More per scroll | Fewer per scroll |
| Information Density | Lower | Higher |
| Best For | Image browsing | Text scanning |

## 13. Technical Implementation

### Map Dependencies
- @react-google-maps/api: ^2.19.0 (Google Maps)
- Alternative: mapbox-gl + react-map-gl

### Map Features
- Property markers with clustering
- Draw search area
- Full-screen mode
- Split-view layouts

### List Card with Description Implementation
```typescript
// Property Card with Description
const ListStyleCard = ({ property }: Props) => {
  const truncatedDescription = property.description.slice(0, 120) + '...';
  
  return (
    <div className="list-card">
      <div className="image-section">
        <img src={property.featuredImage} alt={property.title} />
        {property.isFeatured && <Badge>FEATURED</Badge>}
        <span className="price">{property.priceFormatted}</span>
      </div>
      <div className="content-section">
        <h6>{property.title}</h6>
        <p className="location">{property.location}</p>
        <div className="specs">
          <span>🛏 {property.beds} bed</span>
          <span>🛁 {property.baths} bath</span>
          <span>▢ {property.sqft} sqft</span>
        </div>
        <p className="description">{truncatedDescription}</p>
        <div className="actions">
          <span className="status">{property.status}</span>
          <ActionButtons propertyId={property.id} />
        </div>
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

### List-Style Card Animation (with Description)

```typescript
// components/ListStyleCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const ListStyleCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () => {
    // Card hover animation
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Description reveal animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      maxHeight: 100,
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

    gsap.to(descriptionRef.current, {
      maxHeight: 60,
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

### Split View with List Cards Animation

```typescript
// components/MapV2Layout.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const MapV2Layout = ({ properties }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // List panel slide in
      tl.from('.list-panel', {
        x: -80,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Map panel fade
      tl.from('.map-panel', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4');

      // List cards stagger (wider stagger for list-style)
      gsap.from('.list-card', {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* Layout content */}</div>;
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
        delay: 0.2,
      });

      gsap.from('.filter-btn', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
        delay: 0.4,
      });
    }, filterRef);

    return () => ctx.revert();
  }, []);

  return <div ref={filterRef}>{/* Filter content */}</div>;
};
```

### Description Text Animation

```typescript
// hooks/useDescriptionAnimation.ts
import { gsap } from 'gsap';

export const useDescriptionAnimation = () => {
  const animateDescription = (el: HTMLElement, isExpanded: boolean) => {
    gsap.to(el, {
      maxHeight: isExpanded ? el.scrollHeight : 60,
      opacity: isExpanded ? 1 : 0.8,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  };

  return { animateDescription };
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
- [Map V1](./map-v1.md) - Map with grid-style cards
- [Map V3](./map-v3.md) - Compact map with show filter button
- [Map V4](./map-v4.md) - Map on left, list on right
- [List v1](./list-v1.md) - Full list view with sidebar
- [List All Style](./list-all-style.md) - All list card styles

---

*Homez - Modern Designed Real Estate React NextJS Template*
