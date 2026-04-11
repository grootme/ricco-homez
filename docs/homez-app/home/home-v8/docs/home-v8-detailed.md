# Home v8 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v8-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home V8 - Especificación de Ingeniería Detallada

## 1. Identificación

| Campo | Valor |
|-------|-------|
| **Nombre** | Home V8 - Map Integration Focus |
| **URL** | `/home-v8` |
| **URL Completa** | `https://homez-appdir.vercel.app/home-v8` |
| **Versión** | 8 |
| **Tipo de Plantilla** | Homepage - Map Integration |
| **Título de Página** | `Home v8 \|\| Homez - Real Estate NextJS Template` |

---

## 2. Estructura de la Página

### 2.1 Secciones Principales

| # | Sección | Clase CSS | Descripción |
|---|---------|-----------|-------------|
| 1 | Map Hero | `home-banner-style8 p0` | Mapa interactivo de ancho completo |
| 2 | Partners | `our-partners bgc-dark pt60 pb60` | Logos de partners (dark theme) |
| 3 | Find Your Happy | `pb40-md pb90` | Sección de búsqueda/inspiración |
| 4 | Featured Listings | - | Propiedades destacadas |
| 5 | Explore Cities | - | Ciudades populares |
| 6 | How Realton Helps | - | Beneficios del servicio |
| 7 | CTA Sections | - | Calls to action |
| 8 | Footer | - | Información y enlaces |

### 2.2 Componentes de Navegación

```
Header Class: header-nav nav-homepage-style light-header menu-home4 main-menu
```

**Estilo de Header:** Light theme (mismo que V7)

---

## 3. Contenido de Datos Detallado

### 3.1 Map Hero Section

#### Estructura TypeScript
```typescript
interface MapHeroSection {
  type: 'map-integrated';
  variant: 'style8';
  map: MapConfig;
  overlay: MapOverlay;
  search: MapSearchConfig;
}

interface MapConfig {
  provider: 'google' | 'mapbox';
  center: {
    lat: number;
    lng: number;
  };
  zoom: number; // default: 12
  minZoom: number; // default: 8
  maxZoom: number; // default: 20
  mapType: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  controls: MapControls;
  markers: MapMarker[];
  clustering: ClusterConfig;
}

interface MapControls {
  zoom: boolean;
  mapType: boolean;
  streetView: boolean;
  fullscreen: boolean;
  draw: boolean;
  reset: boolean;
}

interface MapMarker {
  id: string;
  propertyId: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'price' | 'pin' | 'custom';
  content: {
    price?: string;
    status?: 'available' | 'featured' | 'sold';
  };
  icon?: string;
}

interface ClusterConfig {
  enabled: boolean;
  gridSize: number;
  maxZoom: number;
  styles: ClusterStyle[];
}

interface MapOverlay {
  enabled: boolean;
  content: {
    title?: string;
    subtitle?: string;
    searchForm?: boolean;
  };
  position: 'top-left' | 'top-center' | 'center';
}
```

### 3.2 Map Search Configuration

```typescript
interface MapSearchConfig {
  position: 'overlay' | 'sidebar' | 'top';
  fields: SearchField[];
  filters: MapFilter[];
  drawTools: DrawToolsConfig;
}

interface MapFilter {
  id: string;
  type: 'radius' | 'polygon' | 'rectangle' | 'bounds';
  default: boolean;
}

interface DrawToolsConfig {
  enabled: boolean;
  tools: Array<'polygon' | 'rectangle' | 'circle' | 'radius'>;
  clearOnSubmit: boolean;
}
```

### 3.3 Property Cards con Mapa

#### Estructura de Datos TypeScript
```typescript
interface PropertyCardV8 extends PropertyCardV6 {
  coordinates: {
    lat: number;
    lng: number;
  };
  mapVisibility: boolean;
  distance?: number; // desde el centro de búsqueda
  mapMarkerId: string;
}
```

#### Datos de Ejemplo Extraídos
```json
{
  "prices": ["$82,000", "$92,000", "$14,000", "$2,800"],
  "specifications": {
    "beds": { "min": 3, "max": 3 },
    "baths": { "min": 4, "max": 4 },
    "sqft": [1200]
  },
  "propertyTypes": ["Apartment", "House", "Villa", "Office", "Townhome", "Land"],
  "features": ["Security", "Air Conditioning"]
}
```

### 3.4 Partners Section (Dark Theme)

#### Estructura TypeScript
```typescript
interface PartnersSectionDark {
  theme: 'dark';
  background: string; // bgc-dark
  padding: {
    top: 60;
    bottom: 60;
  };
  partners: PartnerLogo[];
  layout: 'grid';
}
```

### 3.5 "Find Your Happy" Section

```typescript
interface FindYourHappySection {
  title: string; // "Find your happy"
  content: {
    headline: string;
    description: string;
    cta: CTAButton;
  };
  layout: 'split' | 'full-width';
  background: 'image' | 'solid' | 'gradient';
}
```

---

## 4. Componentes UI

### 4.1 Interactive Map Component

```typescript
interface InteractiveMapProps {
  provider: 'google' | 'mapbox';
  config: MapConfig;
  onMarkerClick: (propertyId: string) => void;
  onMapClick: () => void;
  onDrawComplete: (polygon: Polygon) => void;
  onZoomChange: (zoom: number) => void;
  onCenterChange: (center: Coordinates) => void;
}
```

### 4.2 Map Marker Component

```typescript
interface MapMarkerProps {
  type: 'price' | 'status' | 'custom';
  price?: string;
  status?: PropertyStatus;
  isSelected: boolean;
  onClick: () => void;
  onHover: () => void;
}

// Price Marker Styles
const markerStyles = {
  price: {
    background: '#4f46e5',
    borderRadius: '8px',
    padding: '4px 12px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#ffffff'
  },
  featured: {
    background: '#ef4444',
    border: '2px solid #ffffff'
  },
  selected: {
    transform: 'scale(1.2)',
    zIndex: 1000
  }
};
```

### 4.3 Map Search Form Component

```typescript
interface MapSearchFormProps {
  position: 'overlay' | 'sidebar';
  fields: SearchField[];
  onSearch: (query: SearchQuery) => void;
  onDraw: (tool: DrawTool) => void;
  onClear: () => void;
}

interface SearchQuery {
  location?: string;
  bounds?: MapBounds;
  radius?: number;
  polygon?: Coordinates[];
  filters?: SearchFilters;
}
```

### 4.4 Property Quick View Popup

```typescript
interface PropertyQuickViewProps {
  property: PropertyCardV8;
  position: { x: number; y: number };
  onClose: () => void;
  onExpand: () => void;
}
```

---

## 5. API Endpoints

### 5.1 Map Properties

```typescript
// GET /api/properties/map
interface MapPropertiesQuery {
  bounds: {
    ne: { lat: number; lng: number };
    sw: { lat: number; lng: number };
  };
  zoom: number;
  filters?: SearchFilters;
  cluster?: boolean;
}

interface MapPropertiesResponse {
  data: PropertyCardV8[];
  clusters?: PropertyCluster[];
  meta: {
    total: number;
    bounds: MapBounds;
  };
}

interface PropertyCluster {
  center: { lat: number; lng: number };
  count: number;
  bounds: MapBounds;
}
```

### 5.2 Draw Search

```typescript
// POST /api/properties/draw-search
interface DrawSearchQuery {
  type: 'polygon' | 'rectangle' | 'circle';
  coordinates: Coordinates[] | { center: Coordinates; radius: number };
  filters?: SearchFilters;
}
```

### 5.3 Geocode Search

```typescript
// GET /api/geocode
interface GeocodeQuery {
  address: string;
}

interface GeocodeResponse {
  results: Array<{
    address: string;
    coordinates: { lat: number; lng: number };
    bounds?: MapBounds;
  }>;
}
```

---

## 6. Configuración

### 6.1 Variables de Entorno

```env
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key

# Mapbox (alternativa)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

# Map Default Settings
NEXT_PUBLIC_MAP_CENTER_LAT=40.7128
NEXT_PUBLIC_MAP_CENTER_LNG=-74.0060
NEXT_PUBLIC_MAP_DEFAULT_ZOOM=12
```

### 6.2 Map Styles

```css
/* Map container */
.map-container {
  width: 100%;
  height: 100vh;
  min-height: 600px;
}

/* Map overlay */
.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 20px;
}

/* Price marker */
.map-price-marker {
  background: #4f46e5;
  border-radius: 8px;
  padding: 8px 12px;
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.map-price-marker.featured {
  background: #ef4444;
}

.map-price-marker:hover {
  transform: scale(1.1);
}
```

### 6.3 Dark Partners Section

```css
/* Partners dark theme */
.our-partners.bgc-dark {
  background-color: #0f172a;
}

.our-partners.bgc-dark .partner-logo {
  filter: brightness(0) invert(1);
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.our-partners.bgc-dark .partner-logo:hover {
  opacity: 1;
}
```

---

## 7. Estructura de Archivos

```
app/(home)/home-v8/
├── page.tsx
└── components/
    ├── MapHero/
    │   ├── MapHero.tsx
    │   ├── InteractiveMap.tsx
    │   ├── MapMarkers.tsx
    │   ├── MapControls.tsx
    │   ├── DrawTools.tsx
    │   └── index.ts
    ├── MapSearch/
    │   ├── MapSearchForm.tsx
    │   ├── LocationInput.tsx
    │   ├── MapFilters.tsx
    │   └── index.ts
    ├── PartnersSection/
    │   ├── PartnersDark.tsx
    │   └── index.ts
    ├── FindYourHappy/
    │   ├── FindYourHappy.tsx
    │   └── index.ts
    ├── PropertyQuickView/
    │   ├── PropertyQuickView.tsx
    │   └── index.ts
    └── index.ts
```

---

## 8. Map Provider Integration

### 8.1 Google Maps Integration

```typescript
// lib/google-maps.ts
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  version: 'weekly',
  libraries: ['places', 'drawing', 'geometry']
});

export const loadGoogleMaps = async () => {
  return loader.load();
};
```

### 8.2 Mapbox Integration (Alternative)

```typescript
// lib/mapbox.ts
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export const createMap = (container: HTMLElement) => {
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.006, 40.7128],
    zoom: 12
  });
};
```

---

## 9. Map Interactions

### 9.1 User Interactions

```typescript
const mapInteractions = {
  click: {
    marker: 'Show property quick view',
    map: 'Close quick view / Clear selection'
  },
  hover: {
    marker: 'Highlight property in list',
    cluster: 'Show cluster preview'
  },
  draw: {
    polygon: 'Filter properties within polygon',
    rectangle: 'Filter properties within rectangle',
    circle: 'Filter properties within radius'
  },
  zoom: {
    in: 'Load more detailed markers',
    out: 'Cluster nearby markers'
  }
};
```

### 9.2 Map-List Synchronization

```typescript
interface MapListSync {
  // Hover property in list -> highlight marker on map
  highlightMarker(propertyId: string): void;
  
  // Click marker on map -> scroll to property in list
  scrollToProperty(propertyId: string): void;
  
  // Pan map -> update visible properties in list
  updateVisibleProperties(bounds: MapBounds): void;
  
  // Apply filter -> update map markers
  updateMarkers(filters: SearchFilters): void;
}
```

---

## 10. Performance Optimizations

### 10.1 Marker Clustering

```typescript
const clusterConfig = {
  enabled: true,
  gridSize: 60,
  maxZoom: 15,
  minClusterSize: 3,
  styles: [
    {
      width: 40,
      height: 40,
      className: 'cluster-small'
    },
    {
      width: 50,
      height: 50,
      className: 'cluster-medium'
    },
    {
      width: 60,
      height: 60,
      className: 'cluster-large'
    }
  ]
};
```

### 10.2 Lazy Loading

```typescript
const mapLazyLoading = {
  // Load map only when in viewport
  intersectionThreshold: 0.1,
  
  // Load property data on demand
  debounceTime: 300, // ms
  
  // Tile caching
  maxTilesInCache: 100
};
```

---

## 11. CTA Sections

**Cantidad de CTA Sections detectadas:** 2

### Tipos de CTA
1. **Agent CTA** - Para agentes interesados
2. **User Registration** - Registro de usuarios

---

## 12. Dependencias JavaScript

```json
{
  "chunks": [
    "fd9d1056-b2f3258e1394957b.js",
    "8069-227fb7adbd03ac2f.js",
    "main-app-5c0f9b95fd3d20ef.js",
    "46170725-631baa44c8a31d2a.js",
    "9647-bf8b9f0c9adac23a.js",
    "2260-cad6d505618a37df.js",
    "7309-6559f8e04db685b2.js",
    "3580-a37c92de5cc3e360.js",
    "296-a9ec62dd979ef674.js",
    "5753-36477383f04b32ab.js",
    "6978-ad9210446945317d.js",
    "app/(home)/home-v8/page-a9be7bc1d78748d7.js"
  ],
  "external": [
    "Google Maps API",
    "Mapbox GL (optional)"
  ]
}
```

---

## 13. Responsive Behavior

| Breakpoint | Map Behavior |
|------------|--------------|
| Desktop (>1200px) | Split view: map left, list right |
| Tablet (768-1199px) | Toggle between map and list |
| Mobile (<768px) | Full map with slide-up list |

---

## 14. Páginas Relacionadas

- [Home V7](./home-v7-detailed.md) - Featured listings focus
- [Home V9](./home-v9-detailed.md) - Video hero section
- [Map V1](../property-list-pages/map-v1.md) - Map listing page
- [Header Map Style](../property-list-pages/header-map-style.md) - Map header variant

---

*Documentación generada para Homez - Real Estate NextJS Template*
*Versión de documento: 1.0.0*
