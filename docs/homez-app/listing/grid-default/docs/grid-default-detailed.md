## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/grid-default-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Grid Default - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Grid Default |
| **URL** | `/grid-default` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/grid-default/page.tsx` |
| **Tipo de Layout** | Grid con Sidebar |
| **Title** | Gird Default \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Container (no full-width) |

---

## 2. Estructura de la Pagina

### 2.1 Header/Navegacion

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Logo]  [Home▼] [Listing▼] [Property▼] [Blog▼] [Pages▼]  [Login] [Add] │
└─────────────────────────────────────────────────────────────────────────┘
```

**Componentes del Header:**
- Logo: `/images/header-logo2.svg`
- Menu Principal (Mega Menu)
- Boton Login/Register (Modal)
- Boton Add Property
- Sidebar Panel (Offcanvas)

**Props del Header:**
```typescript
interface HeaderProps {
  style: 'nav-homepage-style' | 'light-header';
  menuStyle: 'menu-home4';
  isSticky: boolean;
  isTransparent: boolean;
}
```

### 2.2 Barra de Busqueda Principal

**Estructura HTML:**
```html
<div class="advance-search-panel position-relative">
  <div class="container">
    <div class="row">
      <!-- Search Fields -->
    </div>
  </div>
</div>
```

**Campos de Busqueda:**

| Campo | Tipo | Placeholder | Selector | Valor por Defecto |
|-------|------|-------------|----------|-------------------|
| Location | Select/Autocomplete | "Select Location" | `.css-13cymwt-control` | null |
| Property Type | Select | "Select Property Type" | `.css-13cymwt-control` | null |
| Price Range | Select | "Select Price" | `.css-13cymwt-control` | null |

### 2.3 Area de Listado (Grid)

**Configuracion del Grid:**

```css
.property-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1199px) {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 991px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 575px) {
  grid-template-columns: 1fr;
}
```

**Configuracion del Container:**
```css
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
```

### 2.4 Sidebar (Filtros Avanzados)

**Estructura del Sidebar:**
```
┌──────────────────────┐
│  FILTER BY           │
├──────────────────────┤
│  Location            │
│  [Search Input]      │
├──────────────────────┤
│  Property Type       │
│  [▼ Select]          │
├──────────────────────┤
│  Price Range         │
│  [Min] - [Max]       │
├──────────────────────┤
│  Bedrooms            │
│  [Any] [1] [2] [3]...│
├──────────────────────┤
│  Bathrooms           │
│  [Any] [1] [2] [3]...│
├──────────────────────┤
│  Status              │
│  ○ Sale ○ Rent       │
├──────────────────────┤
│  [APPLY FILTER]      │
│  [RESET]             │
└──────────────────────┘
```

### 2.5 Paginacion

**Estructura:**
```html
<ul class="pagination justify-content-center">
  <li class="page-item"><a class="page-link" href="#">Prev</a></li>
  <li class="page-item active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```

**Configuracion:**
```javascript
{
  itemsPerPage: 12,
  maxVisiblePages: 5,
  showItemCount: true,
  showFirstLast: true
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Filtros

#### Filtro: Location
```typescript
interface LocationFilter {
  type: 'autocomplete' | 'select';
  placeholder: 'Select Location';
  options: LocationOption[];
  value: string | null;
  required: false;
}

interface LocationOption {
  value: string;
  label: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
```

**Valores de Ejemplo:**
```json
[
  { "value": "new-york", "label": "New York, USA" },
  { "value": "los-angeles", "label": "Los Angeles, CA" },
  { "value": "miami", "label": "Miami, FL" },
  { "value": "chicago", "label": "Chicago, IL" }
]
```

#### Filtro: Property Type
```typescript
interface PropertyTypeFilter {
  type: 'select';
  placeholder: 'Select Property Type';
  options: PropertyTypeOption[];
  value: string | null;
}

interface PropertyTypeOption {
  value: string;
  label: string;
  icon?: string;
}
```

**Opciones:**
| Value | Label |
|-------|-------|
| `house` | House |
| `apartment` | Apartment |
| `villa` | Villa |
| `condo` | Condo |
| `townhouse` | Townhouse |
| `office` | Office |
| `land` | Land |

#### Filtro: Price Range
```typescript
interface PriceRangeFilter {
  type: 'range' | 'dual-select';
  min: number;
  max: number;
  step: number;
  currency: string;
  value: {
    min: number | null;
    max: number | null;
  };
}
```

**Configuracion:**
```javascript
{
  min: 0,
  max: 10000000,
  step: 50000,
  currency: 'USD',
  presets: [
    { label: '$0 - $100K', min: 0, max: 100000 },
    { label: '$100K - $300K', min: 100000, max: 300000 },
    { label: '$300K - $500K', min: 300000, max: 500000 },
    { label: '$500K+', min: 500000, max: null }
  ]
}
```

#### Filtro: Bedrooms
```typescript
interface BedroomFilter {
  type: 'button-group';
  options: BedroomOption[];
  value: number | null;
}

interface BedroomOption {
  value: number | null;
  label: string;
}
```

**Opciones:**
| Value | Label |
|-------|-------|
| `null` | Any |
| `1` | 1+ |
| `2` | 2+ |
| `3` | 3+ |
| `4` | 4+ |
| `5` | 5+ |

#### Filtro: Bathrooms
```typescript
interface BathroomFilter {
  type: 'button-group';
  options: BathroomOption[];
  value: number | null;
}
```

#### Filtro: Status
```typescript
interface StatusFilter {
  type: 'radio' | 'button-group';
  options: StatusOption[];
  value: 'sale' | 'rent' | null;
}
```

**Opciones:**
| Value | Label |
|-------|-------|
| `sale` | For Sale |
| `rent` | For Rent |

### 3.2 Property Card

**Estructura Completa:**
```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ [Image Carousel]                │ │
│ │    ← [●○○●○] →                  │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────┬─────────────────────┐│
│ │ [Featured]  │           $450,000  ││
│ │ [For Sale]  │                     ││
│ └─────────────┴─────────────────────┘│
│ New Home for Sale in Malibu          │
│ 2882 Finkleston Drive, Malibu, CA    │
├─────────────────────────────────────┤
│ 🛏 4    🛁 3    ▢ 2,500 sqft        │
├─────────────────────────────────────┤
│ [Avatar] John Smith                  │
│            [♥] [⚖] [→]              │
└─────────────────────────────────────┘
```

**Interface TypeScript:**
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
  zipCode: string;
  beds: number;
  baths: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  propertyType: string;
  agent: AgentInfo;
  createdAt: string;
  updatedAt: string;
}

interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

interface AgentInfo {
  id: string;
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
}
```

**Datos de Ejemplo:**
```json
{
  "id": "prop_001",
  "slug": "new-home-for-sale-in-malibu",
  "images": [
    {
      "id": "img_001",
      "url": "/images/property/property-1.jpg",
      "alt": "Modern Home Exterior",
      "order": 1
    }
  ],
  "status": "sale",
  "featured": true,
  "price": 450000,
  "priceFormatted": "$450,000",
  "title": "New Home for Sale in Malibu",
  "address": "2882 Finkleston Drive",
  "city": "Malibu",
  "state": "CA",
  "zipCode": "90265",
  "beds": 4,
  "baths": 3,
  "area": 2500,
  "areaUnit": "sqft",
  "propertyType": "house",
  "agent": {
    "id": "agent_001",
    "name": "John Smith",
    "avatar": "/images/agents/agent-1.jpg"
  }
}
```

### 3.3 Paginacion

**Interface:**
```typescript
interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface PaginationConfig {
  itemsPerPage: number;
  maxVisiblePages: number;
  showFirstLast: boolean;
  showItemCount: boolean;
  pageSizeOptions: number[];
}
```

**Valores por Defecto:**
```javascript
const defaultConfig: PaginationConfig = {
  itemsPerPage: 12,
  maxVisiblePages: 5,
  showFirstLast: true,
  showItemCount: true,
  pageSizeOptions: [12, 24, 36, 48]
};
```

---

## 4. Componentes UI

### 4.1 PropertyGrid

```typescript
interface PropertyGridProps {
  properties: PropertyCard[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
  loading?: boolean;
  skeletonCount?: number;
  onPropertyClick?: (property: PropertyCard) => void;
  onFavoriteToggle?: (propertyId: string) => void;
  onCompareToggle?: (propertyId: string) => void;
}

// Uso
<PropertyGrid
  properties={properties}
  columns={3}
  gap={30}
  loading={isLoading}
  skeletonCount={6}
  onPropertyClick={handlePropertyClick}
  onFavoriteToggle={handleFavorite}
/>
```

### 4.2 PropertyCard

```typescript
interface PropertyCardProps {
  property: PropertyCard;
  variant?: 'default' | 'compact' | 'horizontal';
  showAgent?: boolean;
  showActions?: boolean;
  imageHeight?: number;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
  onClick?: (property: PropertyCard) => void;
}

// Uso
<PropertyCard
  property={property}
  variant="default"
  showAgent={true}
  showActions={true}
  imageHeight={220}
  onFavorite={handleFavorite}
  onCompare={handleCompare}
/>
```

### 4.3 FilterSidebar

```typescript
interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  collapsed?: boolean;
  onToggle?: () => void;
}

interface FilterState {
  location: string | null;
  propertyType: string | null;
  priceMin: number | null;
  priceMax: number | null;
  beds: number | null;
  baths: number | null;
  status: 'sale' | 'rent' | null;
  amenities: string[];
}

// Uso
<FilterSidebar
  filters={filters}
  onFilterChange={handleFilterChange}
  onReset={handleReset}
  collapsed={isSidebarCollapsed}
/>
```

### 4.4 SearchBar

```typescript
interface SearchBarProps {
  location?: string;
  propertyType?: string;
  priceRange?: PriceRange;
  onSearch: (params: SearchParams) => void;
  variant?: 'default' | 'compact' | 'expanded';
}

interface SearchParams {
  location?: string;
  propertyType?: string;
  priceMin?: number;
  priceMax?: number;
  query?: string;
}

// Uso
<SearchBar
  onSearch={handleSearch}
  variant="default"
/>
```

### 4.5 Pagination

```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showItemCount?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
}

// Uso
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  showFirstLast={true}
  showItemCount={true}
  totalItems={totalItems}
  itemsPerPage={12}
/>
```

### 4.6 Header

```typescript
interface HeaderProps {
  variant?: 'default' | 'transparent' | 'light';
  sticky?: boolean;
  showAddProperty?: boolean;
  showLogin?: boolean;
  activePath?: string;
}

// Uso
<Header
  variant="light"
  sticky={true}
  showAddProperty={true}
  showLogin={true}
  activePath="/grid-default"
/>
```

---

## 5. API Endpoints

### 5.1 Obtener Propiedades (Lista)

```http
GET /api/properties
```

**Query Parameters:**

| Parametro | Tipo | Requerido | Descripcion |
|-----------|------|-----------|-------------|
| `location` | string | No | ID o nombre de ubicacion |
| `type` | string | No | Tipo de propiedad |
| `status` | string | No | `sale` o `rent` |
| `minPrice` | number | No | Precio minimo |
| `maxPrice` | number | No | Precio maximo |
| `beds` | number | No | Minimo de habitaciones |
| `baths` | number | No | Minimo de banos |
| `minArea` | number | No | Area minima (sqft) |
| `maxArea` | number | No | Area maxima (sqft) |
| `amenities` | string[] | No | Array de amenidades |
| `sort` | string | No | Campo de ordenamiento |
| `order` | string | No | `asc` o `desc` |
| `page` | number | No | Numero de pagina (default: 1) |
| `limit` | number | No | Items por pagina (default: 12) |

**Ejemplo de Request:**
```http
GET /api/properties?location=new-york&type=house&status=sale&minPrice=200000&maxPrice=500000&beds=3&page=1&limit=12
```

**Response:**
```json
{
  "success": true,
  "data": {
    "properties": [
      {
        "id": "prop_001",
        "slug": "new-home-for-sale-in-malibu",
        "title": "New Home for Sale in Malibu",
        "price": 450000,
        "beds": 4,
        "baths": 3,
        "area": 2500,
        "images": ["/images/property/property-1.jpg"],
        "status": "sale",
        "featured": true
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalItems": 120,
      "itemsPerPage": 12,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
```

### 5.2 Obtener Opciones de Filtros

```http
GET /api/filters/options
```

**Response:**
```json
{
  "success": true,
  "data": {
    "locations": [
      { "value": "new-york", "label": "New York, USA" }
    ],
    "propertyTypes": [
      { "value": "house", "label": "House" }
    ],
    "priceRanges": {
      "min": 0,
      "max": 10000000
    },
    "amenities": [
      { "value": "pool", "label": "Swimming Pool" },
      { "value": "garage", "label": "Garage" }
    ]
  }
}
```

### 5.3 Toggle Favorito

```http
POST /api/favorites/toggle
```

**Body:**
```json
{
  "propertyId": "prop_001"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "isFavorite": true,
    "favoritesCount": 42
  }
}
```

### 5.4 Toggle Comparar

```http
POST /api/compare/toggle
```

**Body:**
```json
{
  "propertyId": "prop_001"
}
```

---

## 6. Estructuras TypeScript

### 6.1 Interfaces Principales

```typescript
// ============================================
// PROPERTY INTERFACES
// ============================================

interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: number;
  pricePerSqft?: number;
  status: PropertyStatus;
  propertyType: PropertyType;
  featured: boolean;
  beds: number;
  baths: number;
  halfBaths?: number;
  area: number;
  lotSize?: number;
  yearBuilt?: number;
  garages?: number;
  images: PropertyImage[];
  videos?: PropertyVideo[];
  virtualTour?: string;
  amenities: string[];
  agent: Agent;
  agency?: Agency;
  createdAt: string;
  updatedAt: string;
  views?: number;
  favorites?: number;
}

type PropertyStatus = 'sale' | 'rent' | 'sold' | 'leased';

type PropertyType = 
  | 'house' 
  | 'apartment' 
  | 'condo' 
  | 'townhouse' 
  | 'villa' 
  | 'land' 
  | 'commercial' 
  | 'office';

// ============================================
// FILTER INTERFACES
// ============================================

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
  featured?: boolean;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

type SortOption = 
  | 'newest' 
  | 'price_asc' 
  | 'price_desc' 
  | 'popular' 
  | 'area_desc';

// ============================================
// API RESPONSE INTERFACES
// ============================================

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

interface PropertyListResponse {
  properties: Property[];
  pagination: PaginationMeta;
  filters: AppliedFilters;
}

interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// ============================================
// COMPONENT PROPS INTERFACES
// ============================================

interface PropertyGridPageProps {
  initialProperties?: Property[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

// ============================================
// STATE INTERFACES
// ============================================

interface PropertyListState {
  properties: Property[];
  filters: PropertyFilters;
  pagination: PaginationMeta;
  loading: boolean;
  error: string | null;
}

// ============================================
// ACTION TYPES
// ============================================

type PropertyListAction =
  | { type: 'SET_PROPERTIES'; payload: Property[] }
  | { type: 'SET_FILTERS'; payload: PropertyFilters }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_FILTERS' }
  | { type: 'TOGGLE_FAVORITE'; payload: string };
```

### 6.2 Hooks Personalizados

```typescript
// Hook para manejar la lista de propiedades
function usePropertyList(initialFilters?: PropertyFilters) {
  const [state, dispatch] = useReducer(propertyListReducer, initialState);
  
  const fetchProperties = useCallback(async (filters: PropertyFilters) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await api.get('/properties', { params: filters });
      dispatch({ type: 'SET_PROPERTIES', payload: response.data.properties });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, []);
  
  return {
    ...state,
    fetchProperties,
    setFilters: (filters) => dispatch({ type: 'SET_FILTERS', payload: filters }),
    setPage: (page) => dispatch({ type: 'SET_PAGE', payload: page }),
    resetFilters: () => dispatch({ type: 'RESET_FILTERS' }),
  };
}

// Hook para favoritos
function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const toggleFavorite = useCallback(async (propertyId: string) => {
    const response = await api.post('/favorites/toggle', { propertyId });
    if (response.data.isFavorite) {
      setFavorites(prev => [...prev, propertyId]);
    } else {
      setFavorites(prev => prev.filter(id => id !== propertyId));
    }
  }, []);
  
  return { favorites, toggleFavorite };
}
```

---

## 7. Responsive Design

### 7.1 Breakpoints

```scss
$breakpoints: (
  'xs': 0,
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1400px
);
```

### 7.2 Grid Columns por Breakpoint

| Breakpoint | Width | Grid Columns | Sidebar |
|------------|-------|--------------|---------|
| xxl | ≥1400px | 3 columns | Visible |
| xl | ≥1200px | 3 columns | Visible |
| lg | ≥992px | 2 columns | Collapsed |
| md | ≥768px | 2 columns | Hidden |
| sm | ≥576px | 1 column | Hidden (Drawer) |
| xs | <576px | 1 column | Hidden (Drawer) |

---

## 8. Dependencias

### 8.1 Librerias UI

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-select": "^5.8.0",
    "swiper": "^11.0.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  }
}
```

### 8.2 Iconos

```json
{
  "dependencies": {
    "react-icons": "^4.12.0"
  }
}
```

---

## 9. Archivos del Sistema

### 9.1 Estructura de Archivos

```
app/
└── (listing)/
    └── (grid-view)/
        └── grid-default/
            └── page.tsx

components/
├── PropertyList/
│   ├── PropertyGrid.tsx
│   ├── PropertyCard.tsx
│   ├── FilterSidebar.tsx
│   ├── SearchBar.tsx
│   └── Pagination.tsx
├── Header/
│   ├── Header.tsx
│   └── MobileMenu.tsx
└── Common/
    ├── ImageCarousel.tsx
    ├── StatusBadge.tsx
    └── AgentBadge.tsx

hooks/
├── usePropertyList.ts
├── useFavorites.ts
└── useCompare.ts

services/
├── propertyService.ts
└── filterService.ts

types/
└── property.ts
```

---

## 10. Notas de Implementacion

### 10.1 Server-Side Rendering

La pagina utiliza Server-Side Rendering (SSR) para SEO:

```typescript
// page.tsx
export async function generateMetadata() {
  return {
    title: 'Grid Default || Homez - Real Estate NextJS Template',
    description: 'Browse properties for sale and rent',
  };
}

export default async function GridDefaultPage() {
  const initialData = await getProperties(defaultFilters);
  return <PropertyGridPage initialData={initialData} />;
}
```

### 10.2 Caching

```typescript
// Cache configuration
export const revalidate = 60; // Revalidate every 60 seconds
```

---

*Documento generado para Homez - Real Estate NextJS Template*
*Ultima actualizacion: 2024*
