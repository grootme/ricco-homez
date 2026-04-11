## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/list-v1-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# List V1 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | List V1 |
| **URL** | `/list-v1` |
| **Ruta Archivo** | `app/(listing)/(list-view)/list-v1/page.tsx` |
| **Tipo de Layout** | List View Horizontal |
| **Title** | List v1 \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Container con Sidebar |

---

## 2. Estructura de la Pagina

### 2.1 List Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                               │
├────────────────────────────────────────────────────────────────────────┤
│ [Search Bar + View Toggle: Grid | List]                               │
├────────────┬───────────────────────────────────────────────────────────┤
│            │                                                           │
│  SIDEBAR   │     PROPERTY LIST                                         │
│            │     ┌──────────────────────────────────────────────────┐  │
│  Location  │     │ ┌────────┐ Property Title               $Price  │  │
│  Type      │     │ │        │ Address                               │  │
│  Price     │     │ │ Image  │ 🛏4 🛁3 ▢2500sqft 🚗2 📅2023      │  │
│  Beds      │     │ │        │ Description preview text...          │  │
│  Baths     │     │ └────────┘ [Agent] AgentName       [♥][⚖][→]   │  │
│  Status    │     └──────────────────────────────────────────────────┘  │
│            │     ┌──────────────────────────────────────────────────┐  │
│  [Apply]   │     │ ┌────────┐ Property Title               $Price  │  │
│  [Reset]   │     │ │        │ Address                               │  │
│            │     │ │ Image  │ 🛏3 🛁2 ▢1800sqft 🚗1 📅2022      │  │
│            │     │ │        │ Description preview text...          │  │
│            │     │ └────────┘ [Agent] AgentName       [♥][⚖][→]   │  │
│            │     └──────────────────────────────────────────────────┘  │
│            │                                                           │
│            │     [Pagination]                                          │
├────────────┴───────────────────────────────────────────────────────────┤
│ [Footer]                                                               │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 List Configuration

```css
.property-list-v1 {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.property-list-item {
  display: flex;
  gap: 30px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.property-list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.property-list-item .image-section {
  flex: 0 0 300px;
  min-height: 220px;
}

.property-list-item .content-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .property-list-item {
    flex-direction: column;
  }
  
  .property-list-item .image-section {
    flex: 0 0 auto;
    width: 100%;
    height: 200px;
  }
}
```

### 2.3 List Configuration TypeScript

```typescript
interface ListV1Config {
  layout: 'horizontal-list';
  cardOrientation: 'horizontal';
  imagePosition: 'left';
  imageSize: {
    width: 300;
    minHeight: 220;
  };
  gap: 30;
  containerType: 'container';
  sidebarPosition: 'left';
  itemsPerPage: 10;
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 List Property Card

```
┌────────────────────────────────────────────────────────────────────────┐
│ ┌──────────────┐  [Featured] [For Sale]                       $750,000 │
│ │              │  Modern Family Home                                    │
│ │   Property   │  123 Oak Street, Beverly Hills, CA 90210              │
│ │    Image     │  ───────────────────────────────────────────────────── │
│ │   Carousel   │  🛏 5 Beds  │  🛁 4 Baths  │  ▢ 3,200 sqft           │
│ │              │  🚗 2 Garages│  📅 Built 2021  │  🏠 House            │
│ │   (300px)    │  ───────────────────────────────────────────────────── │
│ │              │  Description: Beautiful modern home with open floor   │
│ │              │  plan, gourmet kitchen, and stunning views. The...    │
│ └──────────────┘  ───────────────────────────────────────────────────── │
│                   [Avatar] John Smith │ Premium Realty │ (310) 555-0123│
│                                      [♥ Save] [⚖ Compare] [View →]    │
└────────────────────────────────────────────────────────────────────────┘
```

**Interface:**
```typescript
interface ListPropertyCard {
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
  yearBuilt?: number;
  propertyType: string;
  description: string; // Truncado a ~150 caracteres
  agent: {
    id: string;
    name: string;
    avatar: string;
    agency?: string;
    phone?: string;
  };
  listedDate: string;
  views?: number;
  favoriteCount?: number;
}
```

### 3.2 Pagination

```typescript
interface ListPaginationConfig {
  itemsPerPage: 10; // Menos items por cards grandes
  maxVisiblePages: 5;
  style: 'numbered' | 'load-more';
  showItemCount: true;
  itemCountText: 'Showing {start}-{end} of {total} properties';
}
```

---

## 4. Componentes UI

### 4.1 PropertyList

```typescript
interface PropertyListProps {
  properties: ListPropertyCard[];
  gap?: number;
  loading?: boolean;
  skeletonCount?: number;
  onPropertyClick?: (property: ListPropertyCard) => void;
  onFavoriteToggle?: (propertyId: string) => void;
  onCompareToggle?: (propertyId: string) => void;
}

// Uso
<PropertyList
  properties={properties}
  gap={30}
  loading={isLoading}
  skeletonCount={3}
  onPropertyClick={handlePropertyClick}
  onFavoriteToggle={handleFavorite}
/>
```

### 4.2 PropertyListItem

```typescript
interface PropertyListItemProps {
  property: ListPropertyCard;
  imageWidth?: number;
  showDescription?: boolean;
  showAgent?: boolean;
  showPhone?: boolean;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
  onClick?: (property: ListPropertyCard) => void;
}

// Uso
<PropertyListItem
  property={property}
  imageWidth={300}
  showDescription={true}
  showAgent={true}
  showPhone={true}
  onFavorite={handleFavorite}
  onCompare={handleCompare}
/>
```

### 4.3 ViewToggle

```typescript
interface ViewToggleProps {
  activeView: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  gridUrl?: string;
  listUrl?: string;
}

// Uso
<ViewToggle
  activeView="list"
  onViewChange={handleViewChange}
  gridUrl="/grid-default"
  listUrl="/list-v1"
/>
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades (List)

```http
GET /api/properties?view=list&limit=10
```

**Parametros adicionales:**
| Parametro | Tipo | Valor por Defecto |
|-----------|------|-------------------|
| `view` | string | `list` |
| `limit` | number | 10 |
| `include` | string | `description,agent,agency` |

**Response:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_001",
        "slug": "modern-family-home",
        "images": ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
        "status": "sale",
        "featured": true,
        "price": 750000,
        "priceFormatted": "$750,000",
        "title": "Modern Family Home",
        "address": "123 Oak Street",
        "city": "Beverly Hills",
        "state": "CA",
        "zipCode": "90210",
        "beds": 5,
        "baths": 4,
        "area": 3200,
        "garages": 2,
        "yearBuilt": 2021,
        "propertyType": "house",
        "description": "Beautiful modern home with open floor plan, gourmet kitchen, and stunning views. The property features...",
        "agent": {
          "id": "agent_001",
          "name": "John Smith",
          "avatar": "/agent.jpg",
          "agency": "Premium Realty",
          "phone": "(310) 555-0123"
        },
        "listedDate": "2024-01-15",
        "views": 342,
        "favoriteCount": 28
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 12,
      "totalItems": 120,
      "itemsPerPage": 10
    }
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface ListV1PageProps {
  initialProperties?: ListPropertyCard[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface ListV1State {
  properties: ListPropertyCard[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  loading: boolean;
  error: string | null;
}

type ListV1Action =
  | { type: 'SET_PROPERTIES'; payload: ListPropertyCard[] }
  | { type: 'SET_FILTERS'; payload: PropertyFilters }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_FAVORITE'; payload: string };
```

---

## 7. Responsive Design

| Breakpoint | Layout | Image Width | Description |
|------------|--------|-------------|-------------|
| ≥992px | Horizontal | 300px | Full |
| 768-991px | Horizontal | 250px | Truncated |
| 576-767px | Vertical | Full | Hidden |
| <576px | Vertical | Full | Hidden |

---

## 8. Comparacion Grid vs List

| Aspecto | Grid | List |
|---------|------|------|
| Imagenes | Destacadas | Secundarias |
| Propiedades visibles | 12+ | 10 |
| Descripcion | No | Si |
| Info del agente | Minima | Completa |
| Comparacion | Visual | Detallada |
| Mobile | Cards | Scroll |

---

## 9. Casos de Uso Ideales

1. **Usuarios analiticos**: Prefieren leer detalles
2. **Propiedades de lujo**: Mas informacion requerida
3. **Bienes raices comerciales**: Datos tecnicos importantes
4. **Investigacion profunda**: Comparar caracteristicas

---

*Documento generado para Homez - Real Estate NextJS Template*
