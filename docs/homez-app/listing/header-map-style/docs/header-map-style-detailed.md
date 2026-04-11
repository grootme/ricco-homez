## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/header-map-style-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Header Map Style - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Header Map Style |
| **URL** | `/header-map-style` |
| **Ruta Archivo** | `app/(listing)/(map-view)/header-map-style/page.tsx` |
| **Tipo de Layout** | Map Header + Grid |
| **Title** | Header Map Style \|\| Homez - Real Estate NextJS Template |
| **Map Provider** | Google Maps / Mapbox |

---

## 2. Estructura de la Pagina

### 2.1 Layout General

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Map Header - Full Width - 400px height]                              │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Map Controls] [Search Overlay]                                    │ │
│ │ [Property Markers with Price Pins]                                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ [Filter Bar - Sticky]                                                  │
│ [Location▼] [Type▼] [Price▼] [Beds▼]              [Grid|List|Map]    │
├────────────────────────────────────────────────────────────────────────┤
│ [Property Grid - 3 Columns]                                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                               │
│ │  Card 1  │ │  Card 2  │ │  Card 3  │                               │
│ └──────────┘ └──────────┘ └──────────┘                               │
│ [Pagination]                                                           │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Map Header Configuration

```css
.map-header {
  width: 100%;
  height: 400px;
  position: relative;
}

.map-header .map-container {
  width: 100%;
  height: 100%;
}

.map-search-overlay {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 90%;
  max-width: 600px;
}
```

### 2.3 Map Configuration

```typescript
interface HeaderMapConfig {
  height: 400;
  defaultCenter: {
    lat: 34.0522;
    lng: -118.2437;
  };
  defaultZoom: 12;
  mapType: 'roadmap' | 'satellite';
  showMarkers: true;
  showPricePins: true;
  clustering: true;
  controls: MapControl[];
}

interface MapControl {
  type: 'zoom' | 'location' | 'type' | 'fullscreen';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Map Markers

```typescript
interface MapMarker {
  id: string;
  propertyId: string;
  position: {
    lat: number;
    lng: number;
  };
  price: number;
  priceFormatted: string;
  status: 'sale' | 'rent';
  featured: boolean;
  thumbnail?: string;
}

// Ejemplo
const markers: MapMarker[] = [
  {
    id: 'marker_001',
    propertyId: 'prop_001',
    position: { lat: 34.0522, lng: -118.2437 },
    price: 450000,
    priceFormatted: '$450K',
    status: 'sale',
    featured: false,
    thumbnail: '/images/property/thumb-1.jpg'
  }
];
```

### 3.2 Map Info Window

```typescript
interface MapInfoWindow {
  markerId: string;
  content: {
    image: string;
    title: string;
    price: string;
    address: string;
    beds: number;
    baths: number;
    area: number;
    link: string;
  };
}
```

### 3.3 View Toggle

```typescript
interface ViewToggleProps {
  options: ViewOption[];
  activeView: 'grid' | 'list' | 'map';
  onChange: (view: string) => void;
}

interface ViewOption {
  id: string;
  label: string;
  icon: string;
}
```

---

## 4. Componentes UI

### 4.1 HeaderMap

```typescript
interface HeaderMapProps {
  markers: MapMarker[];
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: number;
  onMarkerClick?: (marker: MapMarker) => void;
  onMapMove?: (bounds: MapBounds) => void;
  showSearchOverlay?: boolean;
  searchPlaceholder?: string;
}

interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

// Uso
<HeaderMap
  markers={mapMarkers}
  center={{ lat: 34.0522, lng: -118.2437 }}
  zoom={12}
  height={400}
  onMarkerClick={handleMarkerClick}
  showSearchOverlay={true}
/>
```

### 4.2 MapPricePin

```typescript
interface MapPricePinProps {
  price: string;
  status: 'sale' | 'rent';
  featured?: boolean;
  active?: boolean;
  onClick?: () => void;
}

// Uso
<MapPricePin
  price="$450K"
  status="sale"
  featured={false}
  active={selectedMarker === marker.id}
  onClick={() => handleMarkerSelect(marker.id)}
/>
```

### 4.3 MapInfoWindow

```typescript
interface MapInfoWindowProps {
  property: Property;
  onClose: () => void;
  showDirections?: boolean;
}

// Uso
<MapInfoWindow
  property={selectedProperty}
  onClose={closeInfoWindow}
  showDirections={true}
/>
```

---

## 5. API Endpoints

### 5.1 Obtener Marcadores

```http
GET /api/properties/markers
```

**Query Parameters:**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `bounds` | string | Bounds del mapa visible |
| `zoom` | number | Nivel de zoom actual |

**Response:**
```json
{
  "success": true,
  "data": {
    "markers": [
      {
        "id": "marker_001",
        "propertyId": "prop_001",
        "position": { "lat": 34.0522, "lng": -118.2437 },
        "price": 450000,
        "priceFormatted": "$450K",
        "status": "sale"
      }
    ],
    "clusters": [
      {
        "id": "cluster_001",
        "position": { "lat": 34.0600, "lng": -118.2500 },
        "count": 12
      }
    ]
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface HeaderMapPageProps {
  initialMarkers?: MapMarker[];
  initialProperties?: Property[];
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
}

interface HeaderMapPageState {
  markers: MapMarker[];
  properties: Property[];
  center: { lat: number; lng: number };
  zoom: number;
  selectedMarker: string | null;
  infoWindowProperty: Property | null;
  viewMode: 'grid' | 'list' | 'map';
}
```

---

## 7. Map Provider Integration

### 7.1 Google Maps

```typescript
import { GoogleMap, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true
};
```

### 7.2 Mapbox

```typescript
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map-header',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-118.2437, 34.0522],
  zoom: 12
});
```

---

## 8. Responsive Design

| Breakpoint | Map Height | Layout |
|------------|-----------|--------|
| ≥992px | 400px | Map header + Grid |
| 768-991px | 300px | Map header + Grid |
| <768px | 250px | Map toggle button |

---

## 9. Casos de Uso

1. **Exploracion geografica**: Ver ubicaciones antes de navegar
2. **Búsquedas por area**: Filtro visual por zona
3. **Contexto de ubicacion**: Entender donde estan las propiedades
4. **Desktop-heavy**: Mejor experiencia en pantallas grandes

---

*Documento generado para Homez - Real Estate NextJS Template*
