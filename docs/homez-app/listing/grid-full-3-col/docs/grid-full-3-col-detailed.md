## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-full-3-col-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Full 3 Column - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Full 3 Column |
| **URL** | `/grid-full-3-col` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-full-3-col/page.tsx` |
| **Tipo de Layout** | Grid Full-Width |
| **Title** | Gird Full 3 Column \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Full-width (no container) |

---

## 2. Estructura de la Pagina

### 2.1 Diferencias con Grid Default

| Aspecto | Grid Default | Grid Full 3 Col |
|---------|-------------|-----------------|
| Contenedor | Container (max 1200px) | Full-width (100%) |
| Sidebar | Siempre visible | Colapsable/Hideable |
| Espacio util | ~92% | 100% |
| Margenes | 15px auto | 0 |

### 2.2 Configuracion Full-Width

```css
.full-width-grid {
  width: 100%;
  max-width: none;
  padding: 0 30px;
}

.full-width-grid .property-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
}

@media (min-width: 1400px) {
  .full-width-grid {
    padding: 0 50px;
  }
}
```

### 2.3 Grid Configuration

```typescript
interface GridConfig {
  columns: 3;
  gap: 30;
  containerType: 'full-width';
  paddingX: {
    default: 30,
    xl: 50
  };
  maxWidth: 'none';
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Filtros (Mismo que Grid Default)

```typescript
interface PropertyFilters {
  location?: string;
  propertyType?: PropertyType;
  status?: PropertyStatus;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  baths?: number;
  areaMin?: number;
  areaMax?: number;
  amenities?: string[];
}
```

### 3.2 Property Card (Mismo que Grid Default)

```typescript
interface PropertyCard {
  id: string;
  slug: string;
  images: PropertyImage[];
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  address: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  area: number;
  propertyType: string;
  agent: AgentInfo;
}
```

### 3.3 Paginacion

```typescript
interface PaginationConfig {
  itemsPerPage: 15; // Mas items por ser full-width
  maxVisiblePages: 7;
  showFirstLast: true;
  showItemCount: true;
}
```

---

## 4. Componentes UI

### 4.1 FullWidthGrid

```typescript
interface FullWidthGridProps {
  properties: PropertyCard[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
  paddingX?: number;
  loading?: boolean;
  onPropertyClick?: (property: PropertyCard) => void;
}

// Uso
<FullWidthGrid
  properties={properties}
  columns={3}
  gap={30}
  paddingX={50}
/>
```

### 4.2 CollapsibleSidebar

```typescript
interface CollapsibleSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  collapsed: boolean;
  onToggle: () => void;
  position: 'left' | 'right';
}

// Uso
<CollapsibleSidebar
  filters={filters}
  onFilterChange={handleFilterChange}
  collapsed={isCollapsed}
  onToggle={toggleSidebar}
  position="left"
/>
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades

```http
GET /api/properties
```

**Mismos parametros que Grid Default**, con paginacion ajustada:

| Parametro | Valor por Defecto |
|-----------|-------------------|
| `limit` | 15 |
| `page` | 1 |

---

## 6. Estructuras TypeScript

```typescript
interface GridFull3ColProps {
  initialProperties?: Property[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface GridFull3ColState {
  properties: Property[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  sidebarCollapsed: boolean;
  loading: boolean;
}

type GridFull3ColAction =
  | { type: 'SET_PROPERTIES'; payload: Property[] }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_FILTERS'; payload: PropertyFilters }
  | { type: 'SET_PAGE'; payload: number };
```

---

## 7. Responsive Design

| Breakpoint | Grid Columns | Sidebar | Padding |
|------------|--------------|---------|---------|
| ≥1400px | 3 | Visible/Collapsible | 50px |
| 1200-1399px | 3 | Collapsible | 30px |
| 992-1199px | 3 | Hidden | 20px |
| 768-991px | 2 | Hidden | 15px |
| 576-767px | 2 | Hidden | 15px |
| <576px | 1 | Drawer | 10px |

---

## 8. Diferencias Tecnicas con Grid Default

### 8.1 Layout CSS

```css
/* Grid Default - Container */
.grid-default-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Grid Full 3 Col - Full Width */
.grid-full-container {
  width: 100%;
  padding: 0 30px;
}
```

### 8.2 Sidebar Behavior

```typescript
// Grid Default: Sidebar siempre visible en desktop
const sidebarBehavior = {
  desktop: 'visible',
  tablet: 'collapsed',
  mobile: 'drawer'
};

// Grid Full 3 Col: Sidebar colapsable
const sidebarBehaviorFull = {
  desktop: 'collapsible', // Usuario puede toggle
  tablet: 'hidden',
  mobile: 'drawer'
};
```

---

## 9. Archivos del Sistema

```
app/
└── (listing)/
    └── (grid-view)/
        └── grid-full-3-col/
            └── page.tsx

components/
├── PropertyList/
│   ├── FullWidthGrid.tsx    // Diferente de PropertyGrid
│   ├── PropertyCard.tsx     // Mismo componente
│   └── CollapsibleSidebar.tsx
```

---

## 10. Ventajas del Full-Width

1. **Mayor uso del espacio**: Aprovecha todo el ancho disponible
2. **Mas propiedades visibles**: 15 vs 12 por pagina
3. **Mejor para monitores grandes**: Optimizado para pantallas widescreen
4. **Flexibilidad de sidebar**: Usuario puede mostrar/ocultar filtros

---

*Documento generado para Homez - Real Estate NextJS Template*
