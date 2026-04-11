# Home v10 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v10-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home V10 - Especificación de Ingeniería Detallada

## 1. Identificación

| Campo | Valor |
|-------|-------|
| **Nombre** | Home V10 - Full-Width Design |
| **URL** | `/home-v10` |
| **URL Completa** | `https://homez-appdir.vercel.app/home-v10` |
| **Versión** | 10 |
| **Tipo de Plantilla** | Homepage - Full-Width Design |
| **Título de Página** | `Home v10 \|\| Homez - Real Estate NextJS Template` |

---

## 2. Estructura de la Página

### 2.1 Secciones Principales

| # | Sección | Clase CSS | Descripción |
|---|---------|-----------|-------------|
| 1 | Full-Width Hero | `p-0` | Hero de ancho completo |
| 2 | Why Choose Us | `pt-0 pb110 pb50-md bgc-white` | Beneficios del servicio |
| 3 | Featured Listings | - | Propiedades destacadas |
| 4 | Properties by Cities | - | Propiedades por ciudad |
| 5 | Explore Apartments | `pb50-md bgc-f7` | Tipos de apartamentos |
| 6 | Footer | - | Información y enlaces |

### 2.2 Componentes de Navegación

```
Header Class: header-nav nav-homepage-style light-header menu-home4 main-menu
```

**Estilo de Header:** Light theme con logo centrado

---

## 3. Contenido de Datos Detallado

### 3.1 Full-Width Hero Section

#### Estructura TypeScript
```typescript
interface FullWidthHeroSection {
  type: 'full-width';
  variant: 'style10';
  container: 'none'; // No container constraint
  background: {
    type: 'image' | 'video' | 'gradient';
    src?: string;
    overlay?: {
      enabled: boolean;
      opacity: number;
    };
  };
  content: {
    position: 'center' | 'bottom' | 'left';
    headline: string;
    subheadline?: string;
    searchForm?: SearchFormConfig;
    cta?: CTAButton[];
  };
  minHeight: string; // '100vh' or '600px'
}
```

### 3.2 Full-Width Configuration

#### CSS Layout System

```typescript
interface FullWidthConfig {
  // Container settings
  container: {
    type: 'none' | 'fluid';
    maxWidth?: string; // '1920px' or 'none'
    padding: {
      desktop: '40px';
      tablet: '20px';
      mobile: '16px';
    };
  };
  
  // Grid system
  grid: {
    columns: {
      desktop: 5 | 6;
      tablet: 3 | 4;
      mobile: 1 | 2;
    };
    gap: string; // '24px'
  };
  
  // Section spacing
  spacing: {
    verticalPadding: {
      desktop: '110px';
      tablet: '80px';
      mobile: '50px';
    };
    horizontalPadding: string;
  };
}
```

### 3.3 Property Cards

#### Datos de Ejemplo Extraídos
```json
{
  "prices": ["$82,000", "$14,000", "$24", "$22", "$20", "$1", "$21"],
  "specifications": {
    "beds": { "min": 32, "max": 32 },
    "baths": { "min": 91, "max": 91 },
    "sqft": [1500]
  },
  "propertyTypes": ["Apartment", "House", "Villa", "Office", "Townhome", "Studio", "Land"],
  "features": ["Garden", "Security", "Air Conditioning"]
}
```

### 3.4 Why Choose Us Section

#### Estructura TypeScript
```typescript
interface WhyChooseUsSection {
  title: string; // "Why Choose Us"
  subtitle?: string;
  features: WhyChooseFeature[];
  layout: 'grid' | 'carousel';
  columns: {
    desktop: 4;
    tablet: 2;
    mobile: 1;
  };
}

interface WhyChooseFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: 'trusted',
    icon: '/icons/shield-check.svg',
    title: 'Trusted By Thousands',
    description: 'Over 10,000 happy customers trust our services'
  },
  {
    id: 'wide-range',
    icon: '/icons/home.svg',
    title: 'Wide Range Of Properties',
    description: 'Explore our extensive collection of properties'
  },
  {
    id: 'financing',
    icon: '/icons/wallet.svg',
    title: 'Financing Made Easy',
    description: 'Get pre-approved in minutes'
  },
  {
    id: 'support',
    icon: '/icons/headphones.svg',
    title: '24/7 Support',
    description: 'Our team is available around the clock'
  }
];
```

### 3.5 Properties by Cities Section

#### Estructura TypeScript
```typescript
interface PropertiesByCitiesSection {
  title: string; // "Properties by Cities"
  cities: CityProperty[];
  layout: 'grid' | 'masonry';
  columns: number;
}

interface CityProperty {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
  priceRange: {
    min: number;
    max: number;
  };
  link: string;
  featured?: boolean;
}
```

### 3.6 Explore Apartment Types Section

#### Estructura TypeScript
```typescript
interface ExploreApartmentsSection {
  title: string; // "Explore Apartment Types"
  types: ApartmentTypeV10[];
  layout: 'grid';
  columns: 5 | 6;
  showCount: boolean;
}

interface ApartmentTypeV10 {
  id: string;
  name: string;
  image: string;
  icon: string;
  count: number;
  link: string;
}
```

---

## 4. Componentes UI

### 4.1 Full-Width Container Component

```typescript
interface FullWidthContainerProps {
  children: React.ReactNode;
  maxWidth?: string; // '1920px' | 'none'
  padding?: {
    horizontal: string;
    vertical: string;
  };
  className?: string;
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  children,
  maxWidth = '1920px',
  padding = { horizontal: '40px', vertical: '0' }
}) => {
  return (
    <div className="full-width-container">
      <div 
        className="container-inner"
        style={{ 
          maxWidth, 
          paddingLeft: padding.horizontal,
          paddingRight: padding.horizontal 
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

### 4.2 Wide Property Grid Component

```typescript
interface WidePropertyGridProps {
  properties: PropertyCardV10[];
  columns: {
    desktop: 5 | 6;
    tablet: 3 | 4;
    mobile: 1 | 2;
  };
  gap: string;
  cardVariant: 'wide' | 'standard';
  lazyLoad: boolean;
}

interface PropertyCardV10 extends PropertyCardV6 {
  wideFormat: boolean;
  aspectRatio: '4/3' | '16/9' | '1/1';
}
```

### 4.3 Full-Width Carousel Component

```typescript
interface FullWidthCarouselProps {
  items: CarouselItem[];
  slidesToShow: {
    desktop: number;  // 4-5
    tablet: number;   // 2-3
    mobile: number;   // 1-2
  };
  autoplay: boolean;
  autoplaySpeed: number;
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};
```

---

## 5. API Endpoints

### 5.1 Featured Properties

```typescript
// GET /api/properties/featured
interface FeaturedPropertiesQueryV10 {
  limit: number;          // default: 10
  columns: 5 | 6;
  imageFormat: 'wide' | 'standard';
}
```

### 5.2 Why Choose Features

```typescript
// GET /api/features/why-choose
interface WhyChooseFeaturesResponse {
  data: WhyChooseFeature[];
}
```

### 5.3 Cities with Properties

```typescript
// GET /api/cities/with-properties
interface CitiesWithPropertiesQuery {
  limit?: number;
  orderBy: 'propertyCount' | 'name';
}
```

---

## 6. Configuración

### 6.1 Variables de Entorno

```env
# Full-Width Settings
NEXT_PUBLIC_CONTAINER_MAX_WIDTH=1920
NEXT_PUBLIC_GRID_COLUMNS=5
NEXT_PUBLIC_SECTION_PADDING=110
```

### 6.2 Full-Width Styles

```css
/* Full-width base */
.full-width-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding-left: 0;
  padding-right: 0;
}

/* Wide container */
.wide-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Ultra-wide support */
@media (min-width: 1920px) {
  .wide-container {
    padding: 0 80px;
  }
}

@media (min-width: 2560px) {
  .wide-container {
    max-width: 2400px;
    padding: 0 100px;
  }
}

/* 5-6 column grid */
.grid-5-col {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.grid-6-col {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}

/* Responsive grid */
@media (max-width: 1400px) {
  .grid-5-col,
  .grid-6-col {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1200px) {
  .grid-5-col,
  .grid-6-col {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-5-col,
  .grid-6-col {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-5-col,
  .grid-6-col {
    grid-template-columns: 1fr;
  }
}
```

### 6.3 Wide Property Card Styles

```css
/* Wide property card */
.property-card-wide {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.property-card-wide:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.property-card-wide .image-container {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.property-card-wide .image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.property-card-wide:hover .image-container img {
  transform: scale(1.05);
}
```

---

## 7. Estructura de Archivos

```
app/(home)/home-v10/
├── page.tsx
└── components/
    ├── FullWidthHero/
    │   ├── FullWidthHero.tsx
    │   ├── FullWidthContainer.tsx
    │   └── index.ts
    ├── WhyChooseUs/
    │   ├── WhyChooseUs.tsx
    │   ├── FeatureCard.tsx
    │   └── index.ts
    ├── WidePropertyGrid/
    │   ├── WidePropertyGrid.tsx
    │   ├── WidePropertyCard.tsx
    │   └── index.ts
    ├── PropertiesByCity/
    │   ├── PropertiesByCity.tsx
    │   ├── CityCardWide.tsx
    │   └── index.ts
    ├── ExploreApartments/
    │   ├── ExploreApartments.tsx
    │   ├── TypeCardWide.tsx
    │   └── index.ts
    └── index.ts
```

---

## 8. Responsive Grid Configuration

### 8.1 Grid Breakpoints

| Breakpoint | Columnas | Gap | Padding |
|------------|----------|-----|---------|
| Ultra-wide (>2560px) | 6 | 32px | 100px |
| Desktop XL (1920-2560px) | 5-6 | 24px | 80px |
| Desktop (1400-1919px) | 4-5 | 24px | 40px |
| Desktop SM (1200-1399px) | 4 | 20px | 40px |
| Tablet (768-1199px) | 2-3 | 20px | 20px |
| Mobile (<768px) | 1-2 | 16px | 16px |

### 8.2 Grid CSS Implementation

```css
/* Responsive grid mixin */
@mixin responsive-grid($columns: 5) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: 24px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(min($columns - 1, 4), 1fr);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(min($columns - 2, 3), 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}
```

---

## 9. Performance Optimizations

### 9.1 Image Sizing for Wide Format

```typescript
const imageSizes = {
  hero: {
    width: 2560,
    height: 1440,
    format: 'webp',
    quality: 80
  },
  propertyCard: {
    wide: {
      width: 800,
      height: 600,
      format: 'webp',
      quality: 75
    }
  },
  cityCard: {
    wide: {
      width: 600,
      height: 400,
      format: 'webp',
      quality: 75
    }
  }
};
```

### 9.2 Lazy Loading Strategy

```typescript
const lazyLoadingConfig = {
  // Load more items as user scrolls
  infiniteScroll: {
    enabled: true,
    threshold: 200, // pixels from bottom
    batchSize: 10
  },
  
  // Image lazy loading
  images: {
    rootMargin: '200px',
    threshold: 0.1
  }
};
```

---

## 10. CTA Sections

**Cantidad de CTA Sections detectadas:** 0

*Nota: Home V10 no tiene secciones CTA dedicadas. Los CTAs están integrados en el hero y las cards.*

---

## 11. Dependencias JavaScript

```json
{
  "chunks": [
    "fd9d1056-b2f3258e1394957b.js",
    "8069-227fb7adbd03ac2f.js",
    "main-app-5c0f9b95fd3d20ef.js",
    "46170725-631baa44c8a31d2a.js",
    "4e6af11a-b3ac12c4d86be1e2.js",
    "9647-bf8b9f0c9adac23a.js",
    "2260-cad6d505618a37df.js",
    "7309-6559f8e04db685b2.js",
    "3580-a37c92de5cc3e360.js",
    "296-a9ec62dd979ef674.js",
    "5036-d3b31ad6d99ec30a.js",
    "5753-36477383f04b32ab.js",
    "6978-ad9210446945317d.js",
    "app/(home)/home-v10/page-2102443363189bd8.js"
  ]
}
```

---

## 12. Full-Width Design Benefits

| Beneficio | Descripción |
|-----------|-------------|
| **Más propiedades visibles** | 5-6 columnas vs 3-4 estándar |
| **Experiencia inmersiva** | Uso completo del ancho de pantalla |
| **Diseño moderno** | Alineado con tendencias actuales |
| **Mejor aprovechamiento** | Ultra-wide y monitores grandes |
| **Menos scroll** | Más contenido arriba del fold |

---

## 13. Páginas Relacionadas

- [Home V9](./home-v9-detailed.md) - Video hero section
- [Home V1](./home-1.md) - Default layout
- [Grid Full 4 Col](../property-list-pages/grid-full-4-col.md) - Wide grid listing
- [Grid Full 3 Col](../property-list-pages/grid-full-3-col.md) - Standard wide grid

---

*Documentación generada para Homez - Real Estate NextJS Template*
*Versión de documento: 1.0.0*
