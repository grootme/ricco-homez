## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/map-v1-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Map V1 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Map V1 |
| **URL** | `/map-v1` |
| **Ruta Archivo** | `app/(listing)/(map-view)/map-v1/page.tsx` |
| **Tipo de Layout** | Split View (Map Left + List Right) |
| **Title** | Map V1 \|\| Homez - Real Estate NextJS Template |
| **Map Position** | Left (50-60%) |

---

## 2. Estructura de la Pagina

### 2.1 Split Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                               │
├──────────────────────────────────┬─────────────────────────────────────┤
│                                  │                                     │
│         [MAP VIEW]               │     [PROPERTY LIST]                 │
│         60%                      │     40%                             │
│                                  │     Scrollable                      │
│  ┌─────────────────────────┐     │  ┌──────────────────────────────┐   │
│  │ Markers with Price Pins │     │  │ Compact Card 1               │   │
│  │ Clustering enabled      │     │  │ Compact Card 2               │   │
│  │ Draw Search Area        │     │  │ Compact Card 3               │   │
│  │ Zoom Controls           │     │  │ Compact Card 4               │   │
│  └─────────────────────────┘     │  │ Compact Card 5               │   │
│                                  │  │ ...                           │   │
│  [Map Controls]                  │  └──────────────────────────────┘   │
│                                  │                                     │
├──────────────────────────────────┴─────────────────────────────────────┤
│ [Footer]                                                               │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Layout Configuration

```css
.map-v1-container {
  display: flex;
  height: calc(100vh - 80px);
  overflow: hidden;
}

.map-v1-container .map-section {
  flex: 0 0 60%;
  position: relative;
}

.map-v1-container .list-section {
  flex: 0 0 40%;
  overflow-y: auto;
  background: #f8f8f8;
  padding: 20px;
}

@media (max-width: 991px) {
  .map-v1-container {
    flex-direction: column;
  }
  
  .map-v1-container .map-section,
  .map-v1-container .list-section {
    flex: 0 0 50%;
    width: 100%;
  }
}
```

### 2.3 Map V1 Configuration

```typescript
interface MapV1Config {
  layout: 'split-horizontal';
  mapPosition: 'left';
  mapWidth: '60%';
  listWidth: '40%';
  map: {
    height: 'calc(100vh - 80px)';
    defaultCenter: { lat: 34.0522, lng: -118.2437 };
    defaultZoom: 13;
    clustering: true;
    drawSearch: true;
  };
  list: {
    cardStyle: 'compact';
    infiniteScroll: true;
    itemsPerPage: 20;
  };
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Compact Property Card

```
┌────────────────────────────────────────┐
│ ┌──────────┐ Status │ $450,000        │
│ │          │ Property Title            │
│ │  Image   │ Location, State           │
│ │          │ ────────────────────────  │
│ │          │ 🛏4 🛁3 ▢2500sqft         │
│ └──────────┘ [♥] [→]                  │
└────────────────────────────────────────┘
```

**Interface:**
```typescript
interface CompactMapCard {
  id: string;
  slug: string;
  thumbnail: string;
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

### 3.2 Map Marker with Info

```typescript
interface MapV1Marker extends MapMarker {
  property: CompactMapCard;
  cluster?: {
    count: number;
    propertyIds: string[];
  };
}
```

### 3.3 Draw Search Area

```typescript
interface DrawSearchArea {
  type: 'polygon' | 'rectangle' | 'circle';
  coordinates: number[][] | { center: { lat: number; lng: number }; radius: number };
  propertyCount: number;
}
```

---

## 4. Componentes UI

### 4.1 MapV1Layout

```typescript
interface MapV1LayoutProps {
  markers: MapV1Marker[];
  properties: CompactMapCard[];
  center?: { lat: number; lng: number };
  zoom?: number;
  onMarkerClick?: (marker: MapV1Marker) => void;
  onCardHover?: (propertyId: string) => void;
  onDrawArea?: (area: DrawSearchArea) => void;
}

// Uso
<MapV1Layout
  markers={markers}
  properties={properties}
  center={{ lat: 34.0522, lng: -118.2437 }}
  zoom={13}
  onMarkerClick={handleMarkerClick}
  onCardHover={highlightMarker}
  onDrawArea={searchInArea}
/>
```

### 4.2 MapWithControls

```typescript
interface MapWithControlsProps {
  markers: MapV1Marker[];
  center: { lat: number; lng: number };
  zoom: number;
  onBoundsChange?: (bounds: MapBounds) => void;
  enableDrawing?: boolean;
  drawMode?: 'polygon' | 'rectangle' | 'circle';
  onDrawComplete?: (area: DrawSearchArea) => void;
  children?: React.ReactNode;
}

// Uso
<MapWithControls
  markers={markers}
  center={center}
  zoom={zoom}
  onBoundsChange={fetchVisibleProperties}
  enableDrawing={true}
  drawMode="rectangle"
  onDrawComplete={handleDrawArea}
/>
```

### 4.3 MapListSidebar

```typescript
interface MapListSidebarProps {
  properties: CompactMapCard[];
  selectedPropertyId?: string;
  hoveredPropertyId?: string;
  onPropertyClick?: (property: CompactMapCard) => void;
  onPropertyHover?: (propertyId: string | null) => void;
  loading?: boolean;
}

// Uso
<MapListSidebar
  properties={visibleProperties}
  selectedPropertyId={selectedProperty}
  hoveredPropertyId={hoveredProperty}
  onPropertyClick={handlePropertySelect}
  onPropertyHover={setHoveredProperty}
/>
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades por Bounds

```http
GET /api/properties/map-search
```

**Query Parameters:**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `north` | number | Limite norte |
| `south` | number | Limite sur |
| `east` | number | Limite este |
| `west` | number | Limite oeste |
| `zoom` | number | Nivel de zoom |

**Response:**
```json
{
  "success": true,
  "data": {
    "markers": [...],
    "properties": [...],
    "clusters": [
      {
        "id": "cluster_001",
        "position": { "lat": 34.06, "lng": -118.25 },
        "count": 15
      }
    ],
    "totalCount": 234
  }
}
```

### 5.2 Buscar en Area Dibujada

```http
POST /api/properties/draw-search
```

**Body:**
```json
{
  "type": "polygon",
  "coordinates": [
    [34.05, -118.25],
    [34.06, -118.25],
    [34.06, -118.24],
    [34.05, -118.24],
    [34.05, -118.25]
  ]
}
```

---

## 6. Interacciones Map-List Sync

### 6.1 Hover Sync

```typescript
// Cuando se hace hover en una card
const handleCardHover = (propertyId: string | null) => {
  setHoveredProperty(propertyId);
  // El mapa resalta el marker correspondiente
};

// Cuando se hace hover en un marker
const handleMarkerHover = (propertyId: string | null) => {
  setHoveredProperty(propertyId);
  // El list hace scroll a la card correspondiente
  scrollToCard(propertyId);
};
```

### 6.2 Click Sync

```typescript
// Click en marker abre info window
const handleMarkerClick = (marker: MapV1Marker) => {
  setSelectedProperty(marker.propertyId);
  // La card correspondiente se selecciona en el list
};

// Click en card centra el mapa
const handleCardClick = (property: CompactMapCard) => {
  map.panTo(property.coordinates);
  map.setZoom(16);
  setSelectedProperty(property.id);
};
```

---

## 7. Responsive Design

| Breakpoint | Layout | Map/List |
|------------|--------|----------|
| ≥992px | Side by side | 60/40 |
| 768-991px | Toggle view | Tabs |
| <768px | Stacked | Map/List toggle |

---

## 8. Map Controls

```
┌─────────────────┐
│ [+] Zoom In     │
│ [-] Zoom Out    │
│ [📍] My Loc     │
│ [🗺] Map Type   │
│ [📐] Draw Area  │
│ [✕] Clear Draw  │
└─────────────────┘
```

---

*Documento generado para Homez - Real Estate NextJS Template*
