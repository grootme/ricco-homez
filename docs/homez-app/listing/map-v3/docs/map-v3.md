# Map V3 - Compact Map Listing with Toggle Filter

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/map-v3](https://homez-appdir.vercel.app/map-v3)  
**Page Title:** Map V3 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page  
**Layout Type:** Split View (Map + Property List with Compact Cards)

## 2. Page Overview

### Layout Type and Purpose
Map V3 is a property listing page that presents a more streamlined interface with a "Show Filter" button instead of a visible filter bar. The layout features compact property cards optimized for quick scanning, with the map taking a more prominent role.

### Key Differentiators
- **No Visible Filter Bar**: Uses a "Show Filter" button to reveal filters
- **Compact Property Cards**: Streamlined card design with essential info only
- **Location Search Dropdown**: Integrated in the header area
- **FOR SALE Badge**: Distinctive status badge on property cards

### Key Features
- Interactive Google Maps integration with property markers
- "Show Filter" toggle button for filter panel
- Compact property cards with minimal information
- Location search dropdown at the top
- Real-time map-list synchronization

## 3. Layout Configuration

### Split Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Split view (List + Map) |
| **List Position** | Left side |
| **Map Position** | Right side |
| **List Width** | ~35% (350-400px) |
| **Map Width** | ~65% (remaining space) |
| **Total Height** | Full viewport minus header |
| **Card Style** | Compact (minimal) |
| **Filter Style** | Hidden (toggle button) |

### Layout Structure
```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER - Navigation (Fixed)                                           │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]                │
│ [Login/Register] [Add Property →]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ LOCATION DROPDOWN                                                     │
│ [Select Location ▼]                                                   │
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
│  ┌──────────────────────┐  │     │                             │     │
│  │ Compact Card 1       │  │     │   © Google Maps             │     │
│  └──────────────────────┘  │     └─────────────────────────────┘     │
│  ┌──────────────────────┐  │                                          │
│  │ Compact Card 2       │  │   ┌─────────────────────────────────┐   │
│  └──────────────────────┘  │   │ [FilterWhere] Show Filter       │   │
│  ┌──────────────────────┐  │   └─────────────────────────────────┘   │
│  │ Compact Card 3       │  │                                          │
│  └──────────────────────┘  │                                          │
│  ┌──────────────────────┐  │                                          │
│  │ Compact Card 4       │  │                                          │
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
  height: calc(100vh - 180px); /* Minus header and location dropdown */
  overflow: hidden;
}

.list-panel {
  width: 380px;               /* Compact width */
  min-width: 320px;
  max-width: 420px;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.map-panel {
  flex: 1;
  position: relative;
}

/* Show Filter Button Overlay */
.show-filter-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
}

@media (max-width: 991px) {
  .map-listing-container {
    flex-direction: column;
  }
  
  .list-panel {
    width: 100%;
    height: 50vh;
    max-width: 100%;
  }
  
  .map-panel {
    height: 50vh;
  }
  
  .show-filter-btn {
    bottom: auto;
    top: 10px;
    right: 10px;
  }
}
```

## 4. Data Content Structure

### Location Dropdown Data
```typescript
interface LocationDropdown {
  id: string;
  placeholder: string;        // "Select location"
  options: LocationOption[];
}

interface LocationOption {
  value: string;
  label: string;              // "New York", "Los Angeles", etc.
  count?: number;            // Number of properties
}
```

### Filter Panel Data (Hidden by Default)
```typescript
interface FilterPanel {
  isVisible: boolean;         // Toggled by "Show Filter" button
  filters: {
    listingType: 'sale' | 'rent' | 'sold';
    propertyTypes: string[];
    priceRange: {
      min: number;
      max: number;
    };
    beds: string;
    baths: string;
    amenities: string[];
  };
}
```

### Property Card Data Structure (Compact Style)
```typescript
interface PropertyCardCompact {
  // Primary Identification
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly identifier
  
  // Basic Information
  title: string;                 // "Equestrian Family Home"
  location: string;              // "San Diego City, CA, USA"
  
  // Pricing
  price: number;                 // Numeric value
  priceFormatted: string;        // "$14,000 / mo"
  
  // Property Details (Minimal)
  beds: number;                  // Number of bedrooms
  baths: number;                 // Number of bathrooms
  sqft: number;                  // Square footage
  
  // Status
  status: 'sale' | 'rent' | 'sold';
  isFeatured: boolean;           // Featured badge display
  
  // Media
  featuredImage: string;         // Primary image URL
  
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

### Location Dropdown Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ LOCATION DROPDOWN                                                    │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ └── Location Select Dropdown                                        │
│     ├── Placeholder: "Select location"                              │
│     └── Options:                                                    │
│         ├── New York                                                │
│         ├── Los Angeles                                             │
│         ├── Chicago                                                 │
│         ├── Miami                                                   │
│         └── San Diego                                               │
│                                                                      │
│ Structure:                                                           │
│ ┌────────────────────────────────┐                                  │
│ │ Select location              ▼ │                                  │
│ └────────────────────────────────┘                                  │
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
│ │       ├── Grid Icon (active)                                      │
│ │       └── List Icon                                               │
│                                                                      │
│ ├── Property Cards List                                             │
│ │   └── Compact Property Card Components                            │
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

### Compact Property Card Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ COMPACT PROPERTY CARD                                                │
├─────────────────────────────────────────────────────────────────────┤
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ FOR SALE               │   │   ← Status Badge                   │
│ │ └────────────────────────┘   │                                    │
│ │                              │                                    │
│ │ [❤] [⚖] [⋮]                │   ← Social Icons                    │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ Equestrian Family Home                                               │
│ $14,000 / mo                                                         │
│                                                                      │
│ 🛏 5   🛁 4   ▢ 900                                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

Key Differences from Map V1/V2 Cards:
- No location text (to save space)
- Minimal property stats (no "bed", "bath", "sqft" labels)
- FOR SALE badge instead of status text
- Price displayed below title
- Social icons on image (not in footer)
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
│ └── Show Filter Button (Floating)                                   │
│     └── "FilterWhere Show Filter"                                   │
│                                                                      │
│ Marker Structure:                                                    │
│ ┌──────────────┐                                                    │
│ │  $14,000/mo  │                                                    │
│ └──────┬───────┘                                                    │
│        │                                                            │
│       📍                                                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Filter Panel (Hidden by Default)
```
┌─────────────────────────────────────────────────────────────────────┐
│ FILTER PANEL (Toggled by "Show Filter" button)                       │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Filter Header                                                   │
│ │   └── "Filters" with Close Button                                 │
│                                                                      │
│ ├── Filter Groups                                                   │
│ │   ├── Listing Type                                                │
│ │   │   └── For Sale / For Rent / Sold                             │
│ │   ├── Property Type                                               │
│ │   │   └── Houses, Apartments, Office, Villa, etc.                │
│ │   ├── Price Range                                                 │
│ │   │   └── Min - Max Slider                                        │
│ │   ├── Bedrooms                                                    │
│ │   │   └── Any, 1+, 2+, 3+, 4+, 5+                                │
│ │   └── Bathrooms                                                   │
│ │       └── Any, 1+, 2+, 3+, 4+, 5+                                │
│                                                                      │
│ └── Action Buttons                                                  │
│     ├── Apply Filters                                               │
│     └── Reset Filters                                               │
└─────────────────────────────────────────────────────────────────────┘
```

## 6. Interactive Elements

### Filter Panel Toggle
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Show Filter Button | Click | Opens filter panel overlay |
| Filter Panel Close | Click | Closes filter panel |
| Apply Filters | Click | Applies selected filters, closes panel |
| Reset Filters | Click | Clears all filters |

### Location Dropdown Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Location Dropdown | Click | Opens location options |
| Location Option | Click | Selects location, updates map/list |

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

### View Toggle Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Grid Icon | Click | Switches to grid card layout |
| List Icon | Click | Switches to list card layout |

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
  width: 380px;
  flex-shrink: 0;
}

.map-panel {
  flex: 1;
}

.show-filter-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
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

.show-filter-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
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

/* Compact cards stack vertically */
.property-card {
  padding: 10px;
}

/* Filter panel takes full screen */
.filter-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
```

### Property Card Responsive Behavior
| Breakpoint | Card Layout | Details Shown |
|------------|-------------|---------------|
| > 1200px | Compact grid | Minimal (price, beds, baths, sqft) |
| 992-1200px | Compact grid | Minimal |
| 768-991px | Compact grid | Minimal |
| < 768px | Compact grid | Minimal |

## 8. State Management

### Filter Panel State
```typescript
interface FilterPanelState {
  isVisible: boolean;           // Toggle visibility
  filters: FilterState;
  hasChanges: boolean;          // Track if filters changed from applied
}

interface FilterState {
  location: string;             // Selected location
  listingType: 'sale' | 'rent' | 'sold';
  propertyTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  beds: string;
  baths: string;
  amenities: string[];
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
  activeMarker: string | null;
  showInfoWindow: boolean;
}
```

## 9. API Integration

### Property List API
```typescript
interface PropertyListRequest {
  location: string;              // From location dropdown
  filters: FilterState;
  sort: ViewState['sortBy'];
  page: number;
  pageSize: number;
  bounds?: MapState['bounds'];
}

interface PropertyListResponse {
  properties: PropertyCardCompact[];
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

### Locations API
```typescript
interface LocationsResponse {
  locations: Array<{
    id: string;
    name: string;
    propertyCount: number;
    coordinates: {
      lat: number;
      lng: number;
    };
  }>;
}
```

## 10. Accessibility Considerations

### ARIA Labels
- Location dropdown: `aria-label="Select location"`
- Filter panel: `role="dialog" aria-label="Property filters"`
- Show Filter button: `aria-expanded="false"`
- Map container: `role="application" aria-label="Interactive property map"`
- Property cards: `role="article"`

### Keyboard Navigation
- Tab: Navigate through all elements
- Enter/Space: Activate buttons and select options
- Escape: Close filter panel
- Arrow keys: Navigate within dropdowns

### Focus Management
- Focus trap in filter panel modal
- Focus returns to "Show Filter" button when panel closes
- Visible focus indicators on all interactive elements

## 11. Performance Considerations

### Map Optimization
- Lazy loading map tiles
- Marker clustering
- Debounced map events
- Virtual scrolling for list

### Filter Panel Optimization
- Render on demand (lazy render)
- Memoize filter options
- Debounce filter changes

### Compact Card Optimization
- Smaller image sizes
- Minimal DOM elements
- CSS containment for cards

## 12. Comparison: Map V3 vs Other Map Variants

| Feature | Map V1 | Map V2 | Map V3 |
|---------|--------|--------|--------|
| Filter Bar | Visible | Visible | Hidden (toggle) |
| Card Style | Grid | List | Compact |
| Description | No | Yes | No |
| Location Dropdown | No | No | Yes |
| Card Info | Full | Full | Minimal |
| FOR SALE Badge | No | No | Yes |
| Social Icons | Footer | Footer | On Image |

## 13. Technical Implementation

### Map Dependencies
- @react-google-maps/api: ^2.19.0 (Google Maps)
- Alternative: mapbox-gl + react-map-gl

### Map Features
- Property markers with clustering
- Draw search area
- Full-screen mode
- Split-view layouts

### Toggle Filter Implementation
```typescript
// Hidden Filter Panel with Toggle
const MapFilterPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  
  return (
    <>
      <button 
        className="show-filter-btn"
        onClick={() => setIsVisible(!isVisible)}
        aria-expanded={isVisible}
      >
        <FilterIcon /> Show Filter
      </button>
      
      {isVisible && (
        <div className="filter-panel-overlay" role="dialog">
          <div className="filter-panel">
            <header>
              <h3>Filters</h3>
              <button onClick={() => setIsVisible(false)}>✕</button>
            </header>
            <FilterForm filters={filters} onChange={setFilters} />
            <footer>
              <button onClick={() => setFilters(defaultFilters)}>Reset</button>
              <button className="primary" onClick={applyFilters}>Apply</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
```

### Compact Card Implementation
```typescript
// Compact Property Card
const CompactCard = ({ property }: Props) => (
  <div className="compact-card">
    <div className="image-wrapper">
      <img src={property.featuredImage} />
      <span className="status-badge">FOR SALE</span>
      <div className="social-icons">
        <IconButton icon="heart" onClick={() => favorite(property.id)} />
        <IconButton icon="compare" onClick={() => compare(property.id)} />
        <IconButton icon="more" onClick={() => showMenu(property.id)} />
      </div>
    </div>
    <div className="info">
      <h6>{property.title}</h6>
      <span className="price">{property.priceFormatted}</span>
      <div className="minimal-stats">
        🛏 {property.beds} 🛁 {property.baths} ▢ {property.sqft}
      </div>
    </div>
  </div>
);
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

### Toggle Filter Panel Animation

```typescript
// components/ToggleFilterPanel.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const ToggleFilterPanel = ({ isVisible, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      // Panel slide up animation
      gsap.fromTo(panelRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );

      // Filter options stagger
      gsap.from('.filter-option', {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.2,
      });
    } else {
      gsap.to(panelRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isVisible]);

  return <div ref={panelRef}>{/* Filter panel content */}</div>;
};
```

### Show Filter Button Animation

```typescript
// components/ShowFilterButton.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const ShowFilterButton = ({ onClick }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // Button press animation
    gsap.to(btnRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: onClick,
    });
  };

  // Floating button entrance
  useEffect(() => {
    gsap.from(btnRef.current, {
      scale: 0,
      duration: 0.4,
      delay: 0.5,
      ease: 'back.out(1.7)',
    });
  }, []);

  return <button ref={btnRef} onClick={handleClick}>Show Filter</button>;
};
```

### Compact Card Animation

```typescript
// components/CompactCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const CompactCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -4,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.25,
      ease: 'power2.out',
    });

    // Status badge scale
    gsap.to('.status-badge', {
      scale: 1.05,
      duration: 0.25,
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
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Compact card content */}
    </div>
  );
};
```

### Location Dropdown Animation

```typescript
// components/LocationDropdown.tsx
import { gsap } from 'gsap';
import { useRef, useState } from 'react';

const LocationDropdown = ({ locations }) => {
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

      gsap.from('.location-option', {
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

  return <div ref={dropdownRef}>{/* Dropdown content */}</div>;
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
- [Map V2](./map-v2.md) - Map with list-style cards
- [Map V4](./map-v4.md) - Map on left, list on right
- [List v1](./list-v1.md) - Full list view with sidebar
- [List All Style](./list-all-style.md) - All list card styles

---

*Homez - Modern Designed Real Estate React NextJS Template*
