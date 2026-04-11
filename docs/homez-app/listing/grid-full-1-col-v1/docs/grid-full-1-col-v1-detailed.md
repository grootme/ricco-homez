## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-full-1-col-v1-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Full 1 Column V1 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Full 1 Column V1 |
| **URL** | `/grid-full-1-col-v1` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-full-1-col-v1/page.tsx` |
| **Tipo de Layout** | Grid Single Column V1 |
| **Title** | Gird Full 1 Column V1 \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Full-width, centrado |

---

## 2. Estructura de la Pagina

### 2.1 Configuracion del Grid

```css
.full-width-1col-v1 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.full-width-1col-v1 .property-card {
  width: 100%;
  max-width: none;
}
```

### 2.2 Grid Configuration

```typescript
interface Grid1ColV1Config {
  columns: 1;
  maxContainerWidth: 800;
  gap: 30;
  cardStyle: 'horizontal'; // Layout horizontal
  containerType: 'centered';
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Property Card Horizontal V1

```
┌────────────────────────────────────────────────────────────────────────┐
│ ┌──────────────┐  Status: For Sale                              $Price │
│ │              │  Property Title                                        │
│ │   Property   │  Full Address, City, State ZIP                         │
│ │    Image     │  ──────────────────────────────────────────────────── │
│ │   (400px)    │  🛏 4 Beds │ 🛁 3 Baths │ ▢ 2,500 sqft │ 🚗 2 Garages │
│ │              │  ──────────────────────────────────────────────────── │
│ │   Carousel   │  Description: Beautiful property with modern...       │
│ │              │  Amenities: Pool, Garden, Smart Home, Security        │
│ └──────────────┘  ──────────────────────────────────────────────────── │
│                   [Avatar] Agent Name │ Agency    [♥] [⚖] [→]         │
└────────────────────────────────────────────────────────────────────────┘
```

**Interface:**
```typescript
interface HorizontalPropertyCardV1 {
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
  description: string; // Full description
  amenities: string[];
  agent: {
    id: string;
    name: string;
    avatar: string;
    agency?: string;
  };
  listedDate: string;
  views?: number;
}
```

### 3.2 Paginacion

```typescript
interface PaginationConfig {
  itemsPerPage: 6;
  maxVisiblePages: 5;
  style: 'numbered' | 'load-more';
}
```

---

## 4. Componentes UI

### 4.1 Grid1ColV1

```typescript
interface Grid1ColV1Props {
  properties: HorizontalPropertyCardV1[];
  maxContainerWidth?: number;
  gap?: number;
  loading?: boolean;
  showDescription?: boolean;
  showAmenities?: boolean;
  onPropertyClick?: (property: HorizontalPropertyCardV1) => void;
}
```

### 4.2 HorizontalPropertyCardV1

```typescript
interface HorizontalPropertyCardProps {
  property: HorizontalPropertyCardV1;
  imageWidth?: number; // Default: 400
  showDescription?: boolean;
  showAmenities?: boolean;
  showListedDate?: boolean;
  showViews?: boolean;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
}
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades

```http
GET /api/properties?limit=6&include=description,amenities,agent,agency
```

**Response completo:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_001",
        "slug": "property-slug",
        "images": ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
        "status": "sale",
        "featured": true,
        "price": 750000,
        "priceFormatted": "$750,000",
        "title": "Modern Family Home",
        "address": "123 Main Street",
        "city": "Los Angeles",
        "state": "CA",
        "zipCode": "90001",
        "beds": 4,
        "baths": 3,
        "area": 2500,
        "garages": 2,
        "description": "Beautiful modern family home with open floor plan...",
        "amenities": ["Pool", "Garden", "Smart Home", "Security System", "Central AC"],
        "agent": {
          "id": "agent_001",
          "name": "John Smith",
          "avatar": "/agent.jpg",
          "agency": "Premium Realty"
        },
        "listedDate": "2024-01-15",
        "views": 245
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 4,
      "totalItems": 24
    }
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface GridFull1ColV1Props {
  initialProperties?: HorizontalPropertyCardV1[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface GridFull1ColV1State {
  properties: HorizontalPropertyCardV1[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  loading: boolean;
}
```

---

## 7. Responsive Design

| Breakpoint | Layout | Image Position | Image Width |
|------------|--------|----------------|-------------|
| ≥992px | Horizontal | Left | 400px |
| 768-991px | Horizontal | Left | 300px |
| <768px | Vertical | Top | Full width |

---

## 8. Casos de Uso Ideales

1. **Comparacion detallada**: Ver toda la info de cada propiedad
2. **Navegacion enfocada**: Una propiedad a la vez
3. **Mobile-first**: Optimizado para scroll vertical
4. **Contenido largo**: Descripciones y amenidades completas

---

*Documento generado para Homez - Real Estate NextJS Template*
