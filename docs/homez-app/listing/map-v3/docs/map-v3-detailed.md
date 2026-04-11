## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/map-v3-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Map V3 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Map V3 |
| **URL** | `/map-v3` |
| **Ruta Archivo** | `app/(listing)/(map-view)/map-v3/page.tsx` |
| **Tipo de Layout** | Full Screen Map con Cards Flotantes |
| **Title** | Map V3 \|\| Homez - Real Estate NextJS Template |
| **Map Position** | Full Screen |

---

## 2. Estructura de la Pagina

### 2.1 Full Screen Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│ [MAP - Full Screen]                                                    │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Search Overlay - Center Top]                                      │ │
│ │ ┌──────────────────────────────────────────────────────────────┐   │ │
│ │ │ [Search Location...] [Search]                                 │   │ │
│ │ └──────────────────────────────────────────────────────────────┘   │ │
│ │                                                                    │ │
│ │                        Property Markers                            │ │
│ │                                                                    │ │
│ │ [Map Controls - Right]                                            │ │
│ │                                                                    │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Floating Cards Carousel - Bottom]                                 │ │
│ │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                               │ │
│ │ │Card│ │Card│ │Card│ │Card│ │Card│ ← scroll →                    │ │
│ │ └────┘ └────┘ └────┘ └────┘ └────┘                               │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Layout Configuration

```css
.map-v3-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
}

.map-v3-container .map-full {
  width: 100%;
  height: 100%;
}

.map-v3-container .search-overlay {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 90%;
  max-width: 600px;
}

.map-v3-container .cards-drawer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 15px;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  box-shadow: 0 -10px 40px rgba(0,0,0,0.15);
  z-index: 10;
}

.map-v3-container .cards-drawer .card {
  flex: 0 0 280px;
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Floating Card

```
┌──────────────────────┐
│ [Image]              │
│ Status │ $Price      │
│ Property Title       │
│ Location             │
│ 🛏4 🛁3 ▢2500        │
│ [♥] [→]             │
└──────────────────────┘
```

**Interface:**
```typescript
interface FloatingMapCard {
  id: string;
  slug: string;
  thumbnail: string;
  status: 'sale' | 'rent';
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

---

## 4. Componentes UI

### 4.1 MapV3Layout

```typescript
interface MapV3LayoutProps {
  markers: MapMarker[];
  visibleProperties: FloatingMapCard[];
  selectedProperty?: string;
  onMapMove: (bounds: MapBounds) => void;
  onPropertySelect: (property: FloatingMapCard) => void;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

// Uso
<MapV3Layout
  markers={markers}
  visibleProperties={visibleProperties}
  selectedProperty={selectedProperty}
  onMapMove={handleMapMove}
  onPropertySelect={handlePropertySelect}
  onSearch={handleSearch}
/>
```

### 4.2 FloatingCardsDrawer

```typescript
interface FloatingCardsDrawerProps {
  properties: FloatingMapCard[];
  selectedId?: string;
  onCardClick: (property: FloatingMapCard) => void;
  onCardHover?: (propertyId: string | null) => void;
}
```

---

## 5. Interacciones

### 5.1 Map Movement

```typescript
// Cuando el mapa se mueve, actualizar propiedades visibles
const handleMapMove = useCallback((bounds: MapBounds) => {
  fetchPropertiesInBounds(bounds);
}, []);
```

### 5.2 Marker Click

```typescript
// Click en marker desliza el drawer a la card correspondiente
const handleMarkerClick = (propertyId: string) => {
  scrollToCard(propertyId);
  setSelectedProperty(propertyId);
};
```

---

## 6. Responsive Design

| Breakpoint | Layout | Cards Drawer |
|------------|--------|--------------|
| ≥992px | Full map | Horizontal carousel |
| 768-991px | Full map | 2 cards visible |
| <768px | Full map | 1 card visible |

---

## 7. Ventajas del Full Screen Map

1. **Maxima visibilidad**: Todo el espacio para el mapa
2. **Exploracion fluida**: Navegacion continua
3. **Mobile-first**: Perfecto para touch
4. **Inmersivo**: Experiencia envolvente

---

*Documento generado para Homez - Real Estate NextJS Template*
