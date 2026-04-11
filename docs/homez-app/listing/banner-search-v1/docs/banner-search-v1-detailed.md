## Visual Reference

**Full Page Screenshot:** `../screenshots/property-list-pages/banner-search-v1-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Banner Search V1 - Especificacion Tecnica Detallada

## 1. Identificacion

| Campo | Valor |
|-------|-------|
| **Nombre** | Banner Search V1 |
| **URL** | `/banner-search-v1` |
| **Ruta Archivo** | `app/(listing)/(grid-view)/banner-search-v1/page.tsx` |
| **Tipo de Layout** | Grid con Banner Hero de Busqueda |
| **Title** | Banner Search v1 \|\| Homez - Real Estate NextJS Template |
| **Contenedor** | Container |

---

## 2. Estructura de la Pagina

### 2.1 Banner Hero

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Background Image - Full Width Hero]                                  │
│                                                                        │
│                     Find Your Dream Home                               │
│                     Discover the best properties                        │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Location ▼] [Type ▼] [Price ▼] [Status ▼]       [SEARCH]         │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Configuracion del Banner

```css
.banner-hero {
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
}

.banner-search-form {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 90%;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
```

### 2.3 Grid Configuration

```typescript
interface BannerSearchV1Config {
  banner: {
    height: 500;
    overlay: 'gradient-dark';
    showTitle: true;
    showSubtitle: true;
  };
  grid: {
    columns: 3;
    gap: 30;
    containerType: 'container';
  };
}
```

---

## 3. Contenido de Datos Detallado

### 3.1 Banner Content

```typescript
interface BannerContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlayOpacity: number;
}

// Valores por defecto
const defaultBanner: BannerContent = {
  title: 'Find Your Dream Home',
  subtitle: 'Discover the best properties in your area',
  backgroundImage: '/images/banner/search-banner-1.jpg',
  overlayOpacity: 0.6
};
```

### 3.2 Search Form Fields

```typescript
interface BannerSearchForm {
  fields: SearchField[];
  layout: 'inline' | 'stacked';
  submitButton: {
    text: string;
    icon?: string;
    style: 'primary' | 'gradient';
  };
}

interface SearchField {
  name: string;
  type: 'select' | 'input' | 'range';
  placeholder: string;
  options?: SelectOption[];
  icon?: string;
  width?: string;
}

// Configuracion de campos
const searchFields: SearchField[] = [
  {
    name: 'location',
    type: 'select',
    placeholder: 'Select Location',
    icon: 'location-pin',
    width: '25%'
  },
  {
    name: 'type',
    type: 'select',
    placeholder: 'Property Type',
    icon: 'home',
    width: '20%'
  },
  {
    name: 'price',
    type: 'select',
    placeholder: 'Price Range',
    icon: 'dollar',
    width: '20%'
  },
  {
    name: 'status',
    type: 'select',
    placeholder: 'For Sale / Rent',
    icon: 'tag',
    width: '15%'
  }
];
```

### 3.3 Property Grid

Misma estructura que Grid Default (3 columnas).

---

## 4. Componentes UI

### 4.1 BannerHero

```typescript
interface BannerHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlay?: 'gradient-dark' | 'gradient-light' | 'solid';
  overlayOpacity?: number;
  height?: number;
  children?: React.ReactNode;
}

// Uso
<BannerHero
  title="Find Your Dream Home"
  subtitle="Discover the best properties"
  backgroundImage="/images/banner/search-banner-1.jpg"
  overlay="gradient-dark"
  height={500}
>
  <BannerSearchForm />
</BannerHero>
```

### 4.2 BannerSearchForm

```typescript
interface BannerSearchFormProps {
  fields: SearchField[];
  layout?: 'inline' | 'stacked';
  onSubmit: (values: SearchValues) => void;
  initialValues?: SearchValues;
  submitText?: string;
  showAdvancedToggle?: boolean;
}

interface SearchValues {
  location?: string;
  type?: string;
  price?: string;
  status?: string;
  [key: string]: string | undefined;
}

// Uso
<BannerSearchForm
  fields={searchFields}
  layout="inline"
  onSubmit={handleSearch}
  submitText="Search Properties"
  showAdvancedToggle={true}
/>
```

---

## 5. API Endpoints

### 5.1 Busqueda desde Banner

```http
GET /api/properties/search?location=malibu&type=house&price=500k-1m&status=sale
```

**Response:**
```json
{
  "success": true,
  "data": {
    "properties": [...],
    "pagination": {...},
    "searchMeta": {
      "query": "malibu",
      "totalResults": 42,
      "filters": {
        "location": "malibu",
        "type": "house",
        "priceMin": 500000,
        "priceMax": 1000000,
        "status": "sale"
      }
    }
  }
}
```

---

## 6. Estructuras TypeScript

```typescript
interface BannerSearchV1PageProps {
  initialProperties?: Property[];
  bannerContent?: BannerContent;
  searchFields?: SearchField[];
  initialFilters?: PropertyFilters;
  initialPagination?: PaginationMeta;
}

interface BannerSearchV1State {
  properties: Property[];
  bannerContent: BannerContent;
  searchValues: SearchValues;
  pagination: PaginationMeta;
  loading: boolean;
}
```

---

## 7. Responsive Design

| Breakpoint | Banner Height | Search Form |
|------------|--------------|-------------|
| ≥992px | 500px | Inline, full width |
| 768-991px | 400px | Stacked, 2 columns |
| <768px | 350px | Stacked, 1 column |

---

## 8. Casos de Uso

1. **Landing pages**: Hero con busqueda prominente
2. **Portales inmobiliarios**: Busqueda rapida inicial
3. **Marketing**: Call-to-action claro
4. **SEO**: Keywords en titulo/subtitulo

---

*Documento generado para Homez - Real Estate NextJS Template*
