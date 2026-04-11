## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-full-4-col-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Full 4 Column - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Full 4 Column |
| **URL** | `/grid-full-4-col` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-full-4-col/page.tsx` |
| **Tipo de Layout** | Grid Full-Width 4 Columnas |
| **Title** | Gird Full 4 Column \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Full-width (no container) |

---

## 2. Estructura de la Pagina

### 2.1 Configuracion del Grid

```css
.full-width-4col-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  padding: 0 30px;
}

@media (max-width: 1399px) {
  .full-width-4col-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .full-width-4col-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .full-width-4col-grid {
    grid-template-columns: 1fr;
  }
}
```

### 2.2 Grid Configuration

```typescript
interface Grid4ColConfig {
  columns: {
    xxl: 4,
    xl: 4,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  };
  gap: 25;
  containerType: 'full-width';
  cardStyle: 'compact'; // Cards mas compactas
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Property Card Compact

```
┌────────────────────┐
│ [Image Carousel]   │
│ Status │ $Price    │
├────────────────────┤
│ Property Title     │
│ Location           │
├────────────────────┤
│ 🛏4 🛁3 ▢2500sqft │
│ [Avatar] AgentName │
└────────────────────┘
```

**Interface:**
```typescript
interface CompactPropertyCard {
  id: string;
  slug: string;
  images: string[]; // Array de URLs, max 3
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  location: string; // Ciudad, Estado
  beds: number;
  baths: number;
  area: number;
  agent: {
    name: string;
    avatar: string;
  };
}
```

### 3.2 Paginacion

```typescript
interface PaginationConfig {
  itemsPerPage: 20; // Mas items por ser 4 columnas
  maxVisiblePages: 7;
  showFirstLast: true;
  showItemCount: true;
}
```

---

## 4. Componentes UI

### 4.1 Grid4Col

```typescript
interface Grid4ColProps {
  properties: CompactPropertyCard[];
  gap?: number;
  paddingX?: number;
  loading?: boolean;
  cardVariant?: 'compact' | 'default';
  onPropertyClick?: (property: CompactPropertyCard) => void;
}

// Uso
<Grid4Col
  properties={properties}
  gap={25}
  cardVariant="compact"
/>
```

### 4.2 CompactPropertyCard

```typescript
interface CompactPropertyCardProps {
  property: CompactPropertyCard;
  showAgent?: boolean;
  imageHeight?: number; // Default: 180px
  onFavorite?: (id: string) => void;
}
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades

```http
GET /api/properties?limit=20
```

**Parametros:**
| Parametro | Valor por Defecto |
|-----------|-------------------|
| `limit` | 20 |
| `page` | 1 |

**Response optimizado para 4 columnas:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_001",
        "slug": "property-slug",
        "images": ["/img1.jpg", "/img2.jpg"],
        "status": "sale",
        "featured": true,
        "price": 450000,
        "priceFormatted": "$450,000",
        "title": "Property Title",
        "location": "Malibu, CA",
        "beds": 4,
        "baths": 3,
        "area": 2500,
        "agent": {
          "name": "John Smith",
          "avatar": "/agent.jpg"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 8,
      "totalItems": 160
    }
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface GridFull4ColProps {
  initialProperties?: CompactPropertyCard[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface GridFull4ColState {
  properties: CompactPropertyCard[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  viewMode: 'grid-4' | 'grid-3' | 'list';
  loading: boolean;
}
```

---

## 7. Responsive Design

| Breakpoint | Grid Columns | Card Width | Items por Pagina |
|------------|--------------|------------|------------------|
| ≥1400px | 4 | ~340px | 20 |
| 1200-1399px | 3 | ~350px | 15 |
| 992-1199px | 3 | ~300px | 15 |
| 768-991px | 2 | ~340px | 12 |
| 576-767px | 2 | ~260px | 12 |
| <576px | 1 | Full | 10 |

---

## 8. Casos de Uso Ideales

1. **Portales con muchas propiedades**: Mayor densidad de informacion
2. **Monitores ultrawide**: Aprovecha el ancho extra
3. **Busquedas generales**: El usuario ve mas opciones rapidamente
4. **Navegacion rapida**: Comparar multiples propiedades de un vistazo

---

## 9. Archivos del Sistema

```
app/
└── (listing)/
    └── (grid-view)/
        └── grid-full-4-col/
            └── page.tsx

components/
├── PropertyList/
│   ├── Grid4Col.tsx
│   └── CompactPropertyCard.tsx
```

---

## 10. Comparacion con Otros Grids

| Aspecto | Grid Default | Grid Full 3 Col | Grid Full 4 Col |
|---------|-------------|-----------------|-----------------|
| Columnas | 3 | 3 | 4 |
| Container | Container | Full-width | Full-width |
| Items/pagina | 12 | 15 | 20 |
| Card Size | Normal | Normal | Compact |
| Sidebar | Fijo | Colapsable | Colapsable |

---

*Documento generado para Homez - Real Estate NextJS Template*
