# Home 8 - Map Integration Focus

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v8](https://homez-appdir.vercel.app/home-v8)  
**Template Type:** Homepage  
**Version:** 8

Home 8 emphasizes map-based property discovery, integrating interactive maps directly into the homepage experience. This variant is perfect for location-focused real estate platforms where geographic context is crucial for property decisions.

## Layout Components

### Hero Section
- **Map-Integrated Hero**: Interactive map prominent
- **Location-Based Search**: Geographic property discovery
- **Quick Location Filters**: Area shortcuts
- **Map Markers**: Property pins on map

### Map Features
- **Interactive Map**: Pan, zoom, explore
- **Property Markers**: Price and status on pins
- **Cluster Display**: Grouped markers for density
- **Map Styles**: Various map appearance options

### Property Integration
- **Map-List Sync**: Coordinated display
- **Hover Interactions**: Map to card highlights
- **Draw Search**: Area selection tool
- **Boundary Filters**: Neighborhood limits

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Layout Type** | Split map/list or full map |
| **Header Style** | Light theme (light-header menu-home4) |
| **Map Provider** | Google Maps / Mapbox integration |
| **Marker Design** | Price-based markers |
| **Interaction Model** | Click, hover, draw |

### Map Configuration
```javascript
// Map settings
mapOptions: {
  center: { lat, lng },
  zoom: 12,
  mapTypeControl: true,
  streetViewControl: true,
  fullscreenControl: true,
  styles: 'standard' | 'satellite' | 'terrain'
}
```

### Marker Types
```
- Standard marker (property pin)
- Price marker (price display on pin)
- Cluster marker (grouped properties)
- Custom marker (branded pins)
- Status marker (color-coded)
```

## Key Features

### Interactive Map Controls
- Zoom in/out
- Pan navigation
- Map type switch
- Fullscreen toggle
- Draw search area
- Reset view

### Property Discovery
- Click marker for quick view
- Hover for property preview
- Draw area to filter
- Radius search
- Boundary selection

### Map-List Coordination
- Hover sync between map and list
- Visible property count
- Filter updates map
- Map updates filters
- Shared search state

## Sections Breakdown

| Section | Description | Map Integration |
|---------|-------------|-----------------|
| **Header** | Light theme nav | Map toggle |
| **Map Hero** | Full-width map | Interactive map |
| **Map Controls** | Search/filters | Location filters |
| **Property List** | Sidebar listings | Map-synced |
| **Quick View** | Property preview | Map popup |
| **Areas** | Popular locations | Map areas |
| **Footer** | Site info | Standard footer |

## Responsive Behavior

| Breakpoint | Map Behavior |
|------------|--------------|
| **Desktop** | Split view: map + list |
| **Tablet** | Toggle map/list view |
| **Mobile** | Full map with list drawer |

### Mobile Map Experience
- Touch-friendly map interactions
- Swipe up for property list
- Full-screen map option
- Location button (GPS)
- Compact property cards

## Technical Specifications

### Page Structure
```
app/(home)/home-v8/
├── page.tsx
└── components/
    ├── MapHero.tsx
    ├── InteractiveMap.tsx
    ├── MapSearchFilters.tsx
    ├── PropertyMarkers.tsx
    └── MapPropertyList.tsx
```

### Map Integration
```javascript
// Required dependencies
- Google Maps API / Mapbox GL
- Map marker clustering
- Drawing tools
- Geocoding service
- Places autocomplete
```

### JavaScript Chunks
- `home-v8/page-a9be7bc1d78748d7.js`
- Map library chunks (6048.7729611d8c090d0e.js)
- Drawing tools

## Use Case Recommendations

### Ideal For
- **Location-Driven Buyers**: Area-focused searches
- **Urban Real Estate**: City property platforms
- **Vacation Rentals**: Destination-based browsing
- **Commercial Real Estate**: Location-critical decisions

### Map-Centric Benefits
1. Visual property discovery
2. Neighborhood context
3. Commute planning
4. Area comparison
5. Location-based filtering

### Customization Points
- Map provider selection
- Marker styling
- Map controls visibility
- Default zoom level
- Search area boundaries

## Map Features Detailed

### Search by Location
- Address input
- Neighborhood selection
- Draw custom area
- Radius from point
- Current location

### Map Markers
```
Price Marker:
┌──────────────┐
│   $450,000   │  <- Price on marker
└──────────────┘
       │
       ▼
   [Property]

Status Colors:
- Green: Available
- Red: Featured
- Blue: New
- Orange: Price Reduced
```

### Map Interactions
```
Click marker → Quick view popup
Hover marker → Property preview
Click map → Clear selection
Draw area → Filter properties
Zoom → Update visible listings
```

## Performance Considerations

### Map Optimization
- Lazy load map tiles
- Marker clustering for density
- Debounced map movements
- Efficient marker rendering
- Tile caching

### Data Management
- Load visible properties only
- Paginated map data
- Efficient API calls
- Cached location data

## Comparison Table

| Feature | Home 7 | Home 8 |
|---------|--------|--------|
| Primary View | Grid listing | Interactive map |
| Property Discovery | Category browsing | Geographic exploration |
| Search Method | Filters | Map + filters |
| Mobile Layout | Card stack | Map with drawer |
| Performance | Standard | Map-dependent |

## Related Pages

- [Home 7](./home-7.md) - Featured listings focus
- [Home 9](./home-9.md) - Video hero section
- [Map V1](../property-list-pages/map-v1.md) - Map listing page
- [Header Map Style](../property-list-pages/header-map-style.md) - Map header variant

---

*Homez - Modern Designed Real Estate React NextJS Template*
