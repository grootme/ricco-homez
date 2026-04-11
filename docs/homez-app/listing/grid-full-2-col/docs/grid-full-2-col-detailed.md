## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-full-2-col-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Full 2 Column - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Full 2 Column |
| **URL** | `/grid-full-2-col` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-full-2-col/page.tsx` |
| **Tipo de Layout** | Grid Full-Width 2 Columnas |
| **Title** | Gird Full 2 Column \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Full-width |

---

## 2. Estructura de la Pagina

### 2.1 Configuracion del Grid

```css
.full-width-2col-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  padding: 0 40px;
}

@media (max-width: 991px) {
  .full-width-2col-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
}
```

### 2.2 Grid Configuration

```typescript
interface Grid2ColConfig {
  columns: {
    desktop: 2,
    tablet: 1,
    mobile: 1
  };
  gap: 40;
  containerType: 'full-width';
  cardStyle: 'large'; // Cards mas grandes
  cardImageHeight: 350; // Imagenes mas altas
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Property Card Large

```
┌─────────────────────────────────────────────────────┐
│ [Image Carousel - Mas grande]                       │
│                                    [Featured][Sale] │
├─────────────────────────────────────────────────────┤
│                           $1,250,000                │
│ Luxury Villa with Ocean View                        │
│ 1234 Pacific Coast Highway, Malibu, CA 90265        │
├─────────────────────────────────────────────────────┤
│ 🛏 5 Beds  │  🛁 4 Baths  │  ▢ 4,200 sqft  │  🚗 3 │
├─────────────────────────────────────────────────────┤
│ Beautiful oceanfront property with panoramic...     │
│ [Description truncated to 2 lines]                  │
├─────────────────────────────────────────────────────┤
│ [Avatar] John Smith │ Real Estate Agent             │
│                      [♥ Favorite] [⚖ Compare] [→]  │
└─────────────────────────────────────────────────────┘
```

**Interface:**
```typescript
interface LargePropertyCard {
  id: string;
  slug: string;
  images: string[];
  status: 'sale' | 'rent';
  featured: boolean;
  price: number;
  priceFormatted: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  area: number;
  garages?: number;
  description: string; // Truncated a ~120 caracteres
  agent: {
    id: string;
    name: string;
    avatar: string;
    title?: string;
  };
  amenities: string[]; // Top 5 amenities
}
```

### 3.2 Paginacion

```typescript
interface PaginationConfig {
  itemsPerPage: 8; // Menos items por cards grandes
  maxVisiblePages: 5;
  showFirstLast: true;
  showItemCount: true;
}
```

---

## 4. Componentes UI

### 4.1 Grid2Col

```typescript
interface Grid2ColProps {
  properties: LargePropertyCard[];
  gap?: number;
  showDescription?: boolean;
  showAmenities?: boolean;
  imageHeight?: number;
  loading?: boolean;
  onPropertyClick?: (property: LargePropertyCard) => void;
}

// Uso
<Grid2Col
  properties={properties}
  gap={40}
  showDescription={true}
  showAmenities={true}
  imageHeight={350}
/>
```

### 4.2 LargePropertyCard

```typescript
interface LargePropertyCardProps {
  property: LargePropertyCard;
  showDescription?: boolean;
  showAmenities?: boolean;
  imageHeight?: number;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
}
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades

```http
GET /api/properties?limit=8&include=description,amenities
```

**Response con datos extendidos:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_001",
        "slug": "luxury-villa-ocean-view",
        "images": ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
        "status": "sale",
        "featured": true,
        "price": 1250000,
        "priceFormatted": "$1,250,000",
        "title": "Luxury Villa with Ocean View",
        "address": "1234 Pacific Coast Highway",
        "city": "Malibu",
        "state": "CA",
        "zipCode": "90265",
        "beds": 5,
        "baths": 4,
        "area": 4200,
        "garages": 3,
        "description": "Beautiful oceanfront property with panoramic views...",
        "agent": {
          "id": "agent_001",
          "name": "John Smith",
          "avatar": "/agent.jpg",
          "title": "Real Estate Agent"
        },
        "amenities": ["Pool", "Ocean View", "Smart Home", "Wine Cellar", "Home Theater"]
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 40
    }
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface GridFull2ColProps {
  initialProperties?: LargePropertyCard[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface GridFull2ColState {
  properties: LargePropertyCard[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  loading: boolean;
}
```

---

## 7. Responsive Design

| Breakpoint | Grid Columns | Card Width | Image Height |
|------------|--------------|------------|--------------|
| ≥992px | 2 | ~600px | 350px |
| 768-991px | 1 | Full | 300px |
| <768px | 1 | Full | 250px |

---

## 8. Casos de Uso Ideales

1. **Propiedades de lujo**: Mayor espacio para mostrar detalles
2. **Listas de favoritos**: Vista detallada de propiedades guardadas
3. **Resultados de busqueda especifica**: El usuario quiere ver mas detalle
4. **Tablets**: Layout optimizado para pantallas medianas

---

## 9. Archivos del Sistema

```
app/
└── (listing)/
    └── (grid-view)/
        └── grid-full-2-col/
            └── page.tsx

components/
├── PropertyList/
│   ├── Grid2Col.tsx
│   └── LargePropertyCard.tsx
```

---

## 10. Comparacion con Otros Grids

| Aspecto | Grid Default | Grid Full 3 Col | Grid Full 2 Col |
|---------|-------------|-----------------|-----------------|
| Columnas | 3 | 3 | 2 |
| Card Size | Normal | Normal | Large |
| Descripcion | No | No | Si (truncada) |
| Amenidades | No | No | Si (top 5) |
| Items/pagina | 12 | 15 | 8 |

---

*Documento generado para Homez - Real Estate NextJS Template*
