# Map V1 - Map-Based Property Listings with Grid Cards

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/map-v1](https://homez-appdir.vercel.app/map-v1)  
**Page Title:** Map V1 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page  
**Layout Type:** Split View (Map + Property List)

## 2. Page Overview

### Layout Type and Purpose
Map V1 is a property listing page that combines an interactive Google Maps interface with a scrollable property list. The layout features a left-side property list panel and a right-side map panel, allowing users to browse properties while viewing their geographic locations.

### Key Features
- Interactive Google Maps integration with property markers
- Scrollable property list with grid-style cards
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
| **List Width** | ~40% (400-500px) |
| **Map Width** | ~60% (remaining space) |
| **Total Height** | Full viewport minus header |

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
│  └──────────────────────┘  │     │   © Google Maps             │     │
│  ┌──────────────────────┐  │     └─────────────────────────────┘     │
│  │ Property Card 2      │  │                                          │
│  └──────────────────────┘  │                                          │
│  ┌──────────────────────┐  │                                          │
│  │ Property Card 3      │  │                                          │
│  └──────────────────────┘  │                                          │
│  ┌──────────────────────┐  │                                          │
│  │ Property Card 4      │  │                                          │
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
  width: 450px;
  min-width: 350px;
  max-width: 500px;
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
    height: 50vh;
    max-width: 100%;
  }
  
  .map-panel {
    height: 50vh;
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

interface FilterOption {
  value: string;
  label: string;
  count?: number;            // Number of matching properties
}
```

### Filter Bar Options

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

#### More Filter Options
```typescript
interface AdvancedFilters {
  amenities: string[];        // ["Pool", "Garage", "Garden", etc.]
  yearBuilt: {
    min: number;
    max: number;
  };
  squareFeet: {
    min: number;
    max: number;
  };
  features: string[];         // ["Pet Friendly", "Furnished", etc.]
}
```

### Property Card Data Structure
```typescript
interface PropertyCard {
  // Primary Identification
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly identifier
  
  // Basic Information
  title: string;                 // "Equestrian Family Home"
  location: string;              // "San Diego City, CA, USA"
  
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
│                                                                      │
│ Filter Dropdown Structure:                                          │
│ ┌────────────────────┐                                              │
│ │ For Sale         ⌄ │                                              │
│ ├────────────────────┤                                              │
│ │ ○ For Sale         │                                              │
│ │ ○ For Rent         │                                              │
│ │ ○ Sold             │                                              │
│ └────────────────────┘                                              │
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
│ │   └── Property Card Components                                    │
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

### Property Card Component (Grid Style)
```
┌─────────────────────────────────────────────────────────────────────┐
│ PROPERTY CARD (Grid Style)                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ ★ FEATURED             │   │                                    │
│ │ └────────────────────────┘   │                                    │
│ │                              │                                    │
│ │ $14,000 / mo                 │                                    │
│ └──────────────────────────────┘                                    │
│ Equestrian Family Home                                              │
│ San Diego City, CA, USA                                             │
│                                                                      │
│ 🛏 5 bed   🛁 4 bath   ▢ 900 sqft                                   │
│ ────────────────────────────────────                                │
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
│                                                                      │
│ Cluster Marker:                                                      │
│ ┌──────────────┐                                                    │
│ │     (3)      │                                                    │
│ └──────────────┘                                                    │
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
  width: 450px;
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

/* Mobile toggle tabs */
.mobile-view-toggle {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: white;
  z-index: 100;
}

.mobile-view-toggle button {
  flex: 1;
  padding: 15px;
}
```

### Property Card Responsive Behavior
| Breakpoint | Card Width | Layout |
|------------|------------|--------|
| > 1200px | Full panel width | Grid card |
| 992-1200px | Full panel width | Grid card (compact) |
| 768-991px | Full width | Grid card |
| < 768px | Full width | Grid card (stacked) |

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
}

interface PropertyListResponse {
  properties: PropertyCard[];
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

## 12. Technical Implementation

### Map Dependencies
- @react-google-maps/api: ^2.19.0 (Google Maps)
- Alternative: mapbox-gl + react-map-gl

### Map Features
- Property markers with clustering
- Draw search area
- Full-screen mode
- Split-view layouts

### Google Maps Implementation
```typescript
// Google Maps Component with Markers
import { GoogleMap, useJsApiLoader, MarkerClusterer } from '@react-google-maps/api';

const MapComponent = ({ properties, onMarkerClick }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  });
  
  const mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true
  };
  
  return isLoaded && (
    <GoogleMap
      center={{ lat: 40.7128, lng: -74.0060 }}
      zoom={12}
      options={mapOptions}
    >
      <MarkerClusterer>
        {(clusterer) => properties.map(property => (
          <Marker
            key={property.id}
            position={property.coordinates}
            clusterer={clusterer}
            onClick={() => onMarkerClick(property.id)}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
};
```

### Mapbox Alternative
```typescript
// Mapbox Implementation
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapboxComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.0060, 40.7128],
      zoom: 12
    });
    
    return () => map.remove();
  }, []);
  
  return <div ref={mapContainer} className="map-container" />;
};
```

---

## 13. GSAP Animations

### Animation Library Analysis

**GSAP Status:** NOT USED  
**Alternative Animation Libraries:** AOS (Animate On Scroll), WOW.js, CSS Transitions

### AOS Animation Configuration
```typescript
// AOS Global Configuration
AOS.init({
  duration: 1200,
  easing: 'ease',
  once: true,
  offset: 120
});
```

### CSS Transition Animations
```css
/* Map Panel Transitions */
.map-panel {
  transition: all 0.3s ease;
}

/* Card Hover Effects */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

/* Marker Animation */
.marker {
  transition: transform 0.2s ease;
}
.marker:hover {
  transform: scale(1.1);
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

gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
```

### Map Marker Animations

```typescript
// components/MapMarkers.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const MapMarkers = ({ properties, onMarkerClick }) => {
  const markersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marker entrance animation
      gsap.from('.map-marker', {
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.7)',
      });
    }, markersRef);

    return () => ctx.revert();
  }, [properties]);

  const handleMarkerHover = (markerEl: HTMLElement, isHovering: boolean) => {
    gsap.to(markerEl, {
      scale: isHovering ? 1.15 : 1,
      zIndex: isHovering ? 100 : 1,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return <div ref={markersRef}>{/* Map markers */}</div>;
};
```

### Property List Panel Animation

```typescript
// components/PropertyListPanel.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PropertyListPanel = ({ properties }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Panel slide in from left
      gsap.from(panelRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Property cards stagger animation
      gsap.from('.property-card', {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.3,
      });
    }, panelRef);

    return () => ctx.revert();
  }, [properties]);

  return (
    <div ref={panelRef} className="list-panel">
      {/* Property cards */}
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
      // Filter bar entrance animation
      gsap.from('.filter-bar', {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Filter buttons stagger
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

  const handleDropdownOpen = (dropdownEl: HTMLElement) => {
    gsap.from(dropdownEl, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.out',
    });

    gsap.from(dropdownEl.querySelectorAll('.filter-option'), {
      opacity: 0,
      x: -10,
      stagger: 0.03,
      duration: 0.2,
      ease: 'power2.out',
      delay: 0.1,
    });
  };

  return <div ref={filterRef}>{/* Filter content */}</div>;
};
```

### Split View Layout Animation

```typescript
// components/SplitViewLayout.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SplitViewLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // List panel slides from left
      tl.from('.list-panel', {
        x: -100,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Map panel fades in
      tl.from('.map-panel', {
        opacity: 0,
        scale: 0.98,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* Split view content */}</div>;
};
```

### Map-List Synchronization Animation

```typescript
// hooks/useMapListSync.ts
import { gsap } from 'gsap';

export const useMapListSync = () => {
  const highlightCard = (cardEl: HTMLElement) => {
    gsap.to(cardEl, {
      boxShadow: '0 0 0 3px var(--color-primary)',
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const unhighlightCard = (cardEl: HTMLElement) => {
    gsap.to(cardEl, {
      boxShadow: 'none',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const scrollToCard = (cardEl: HTMLElement, containerEl: HTMLElement) => {
    gsap.to(containerEl, {
      scrollTo: { y: cardEl, offsetY: 20 },
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };

  return { highlightCard, unhighlightCard, scrollToCard };
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
    // Animate pagination items on page change
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

### Cluster Animation

```typescript
// components/MapCluster.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const MapCluster = ({ count, properties }) => {
  const clusterRef = useRef<HTMLDivElement>(null);

  const handleClusterClick = () => {
    // Cluster expand animation
    gsap.to(clusterRef.current, {
      scale: 1.3,
      duration: 0.2,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div ref={clusterRef} onClick={handleClusterClick}>
      {count}
    </div>
  );
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

## 14. Theme Variables

### CSS Custom Properties
```css
:root {
  /* Primary Colors */
  --color-primary: #e33e3e;
  --color-primary-rgb: rgb(235, 103, 83);
  --color-primary-hover: #c53535;

  /* Secondary Colors */
  --color-secondary: #041e42;
  --color-dark: #0f172a;

  /* Neutral Colors */
  --color-gray-300: #efefef;
  --color-gray-500: #64748b;

  /* Map-specific Colors */
  --marker-bg: #e33e3e;
  --marker-text: #ffffff;
  --cluster-bg: #041e42;

  /* Border Radius */
  --radius-lg: 12px;
  --radius-pill: 60px;

  /* Shadows */
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

## 15. NPM Dependencies

### Map Dependencies
```json
{
  "dependencies": {
    "@react-google-maps/api": "^2.19.0",
    "mapbox-gl": "^3.0.0",
    "react-map-gl": "^7.1.0"
  }
}
```

### Core Dependencies
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

- [Header Map Style](./header-map-style.md) - Home page with map-style search
- [Map V2](./map-v2.md) - Map with list-style cards
- [Map V3](./map-v3.md) - Compact map with show filter button
- [Map V4](./map-v4.md) - Map on left, list on right
- [List v1](./list-v1.md) - Full list view with sidebar
- [List All Style](./list-all-style.md) - All list card styles

---

*Homez - Modern Designed Real Estate React NextJS Template*
