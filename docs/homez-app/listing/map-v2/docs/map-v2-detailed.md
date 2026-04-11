## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/map-v2-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Map V2 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Map V2 |
| **URL** | `/map-v2` |
| **Ruta Archivo** | `app/(listing)/(map-view)/map-v2/page.tsx` |
| **Tipo de Layout** | Split View (Map Right + List Left) |
| **Title** | Map V2 \|\| Homez - Real Estate NextJS Template |
| **Map Position** | Right (60%) |

---

## 2. Estructura de la Pagina

### 2.1 Diferencias con Map V1

| Aspecto | Map V1 | Map V2 |
|---------|--------|--------|
| Map Position | Left | Right |
| List Position | Right | Left |
| Sidebar Filters | No | Si |
| Card Style | Compact | Normal |

### 2.2 Layout Configuration

```css
.map-v2-container {
  display: flex;
  height: calc(100vh - 80px);
}

.map-v2-container .list-section {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
}

.map-v2-container .sidebar-filters {
  padding: 15px;
  background: white;
  border-bottom: 1px solid #eee;
}

.map-v2-container .property-list {
  flex: 1;
  overflow-y: auto;
}

.map-v2-container .map-section {
  flex: 0 0 60%;
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Normal Property Card (No Compact)

```
┌────────────────────────────────────────┐
│ [Image Carousel]                       │
│ Status │ $450,000                      │
│ Property Title                         │
│ Location, State                        │
│ 🛏4 🛁3 ▢2500sqft                      │
│ [Avatar] Agent Name                    │
│ [♥] [⚖] [→]                           │
└────────────────────────────────────────┘
```

### 3.2 Sidebar Filters

```typescript
interface MapSidebarFilters {
  location: string | null;
  propertyType: string | null;
  priceRange: { min: number; max: number };
  beds: number | null;
  baths: number | null;
  status: 'sale' | 'rent' | null;
}
```

---

## 4. Componentes UI

### 4.1 MapV2Layout

```typescript
interface MapV2LayoutProps {
  markers: MapMarker[];
  properties: Property[];
  filters?: MapSidebarFilters;
  onFilterChange?: (filters: MapSidebarFilters) => void;
  onMarkerClick?: (marker: MapMarker) => void;
  onPropertyClick?: (property: Property) => void;
}
```

---

## 5. Responsive Design

Mismo comportamiento que Map V1.

---

*Documento generado para Homez - Real Estate NextJS Template*
