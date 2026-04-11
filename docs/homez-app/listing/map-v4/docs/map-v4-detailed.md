## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/map-v4-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Map V4 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Map V4 |
| **URL** | `/map-v4` |
| **Ruta Archivo** | `app/(listing)/(map-view)/map-v4/page.tsx` |
| **Tipo de Layout** | Map con Sidebar Completo |
| **Title** | Map V4 \|\| Homez - Real Estate NextJS Template |

---

## 2. Estructura de la Pagina

### 2.1 Layout con Sidebar

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                               │
├────────────┬───────────────────────────────────────────────────────────┤
│            │                                                           │
│  SIDEBAR   │              FULL MAP                                     │
│            │                                                           │
│  [Filters] │    ┌────────────────────────────────────────┐            │
│            │    │ Markers con Price Pins                 │            │
│  [Search]  │    │ Info Windows                           │            │
│            │    │                                        │            │
│  [Types]   │    │                                        │            │
│            │    └────────────────────────────────────────┘            │
│  [Price]   │                                                           │
│            │                                                           │
│  [Beds]    │                                                           │
│            │                                                           │
│  [Baths]   │                                                           │
│            │                                                           │
│  [Apply]   │                                                           │
│            │                                                           │
├────────────┴───────────────────────────────────────────────────────────┤
│ [Property Counter: Showing 45 of 234 properties]                       │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Layout Configuration

```css
.map-v4-container {
  display: flex;
  height: calc(100vh - 80px);
}

.map-v4-container .sidebar {
  width: 320px;
  background: white;
  overflow-y: auto;
  border-right: 1px solid #eee;
}

.map-v4-container .map-full {
  flex: 1;
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Sidebar Completo

```typescript
interface MapV4Sidebar {
  search: {
    type: 'autocomplete';
    placeholder: 'Search location...';
  };
  filters: {
    propertyType: SelectFilter;
    priceRange: RangeFilter;
    beds: ButtonGroupFilter;
    baths: ButtonGroupFilter;
    status: RadioFilter;
    amenities: MultiSelectFilter;
  };
  actions: {
    apply: () => void;
    reset: () => void;
    saveSearch: () => void;
  };
}
```

### 3.2 Property Counter

```typescript
interface PropertyCounter {
  visible: number;
  total: number;
  bounds?: MapBounds;
}
```

---

## 4. Componentes UI

### 4.1 MapV4Layout

```typescript
interface MapV4LayoutProps {
  markers: MapMarker[];
  filters: MapV4Sidebar['filters'];
  onFilterChange: (filters: MapV4Sidebar['filters']) => void;
  onSaveSearch?: (filters: MapV4Sidebar['filters']) => void;
}

// Uso
<MapV4Layout
  markers={markers}
  filters={filters}
  onFilterChange={handleFilterChange}
  onSaveSearch={handleSaveSearch}
/>
```

### 4.2 MapSidebar

```typescript
interface MapSidebarProps {
  filters: MapV4Sidebar['filters'];
  onFilterChange: (filters: MapV4Sidebar['filters']) => void;
  onApply: () => void;
  onReset: () => void;
  onSaveSearch?: () => void;
  propertyCount?: PropertyCounter;
}
```

---

## 5. Responsive Design

| Breakpoint | Sidebar | Map |
|------------|---------|-----|
| ≥992px | Visible 320px | Full rest |
| 768-991px | Collapsed | Full |
| <768px | Drawer | Full |

---

## 6. Ventajas

1. **Filtros completos**: Todos los filtros disponibles
2. **Guardar busqueda**: Persistir configuracion
3. **Counter en tiempo real**: Ver cuantas propiedades hay
4. **UX familiar**: Similar a Grid Default pero con mapa

---

*Documento generado para Homez - Real Estate NextJS Template*
