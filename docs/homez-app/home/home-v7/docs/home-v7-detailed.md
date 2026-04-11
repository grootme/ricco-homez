# Home v7 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v7-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home V7 - Especificación de Ingeniería Detallada

## 1. Identificación

| Campo | Valor |
|-------|-------|
| **Nombre** | Home V7 - Featured Listings Focus |
| **URL** | `/home-v7` |
| **URL Completa** | `https://homez-appdir.vercel.app/home-v7` |
| **Versión** | 7 |
| **Tipo de Plantilla** | Homepage - Featured Listings Focus |
| **Título de Página** | `Home v7 \|\| Homez - Real Estate NextJS Template` |

---

## 2. Estructura de la Página

### 2.1 Secciones Principales

| # | Sección | Clase CSS | Descripción |
|---|---------|-----------|-------------|
| 1 | Hero Banner | `home-banner-style7 pt0 pb30 bgc-white` | Hero con featured property |
| 2 | Partners | `our-partners bgc-white` | Logos de partners |
| 3 | Featured Homes | `pt-0 pb90 pb30-md bgc-white` | Propiedades destacadas |
| 4 | Discover Properties | - | Grid de propiedades populares |
| 5 | Explore Cities | - | Ciudades con propiedades |
| 6 | Testimonials | - | Testimonios de clientes |
| 7 | CTA Section | - | Call to action para agentes |
| 8 | Footer | - | Información y enlaces |

### 2.2 Componentes de Navegación

```
Header Class: header-nav nav-homepage-style light-header menu-home4 main-menu
```

**Estilo de Header:** Light theme con logo centrado

---

## 3. Contenido de Datos Detallado

### 3.1 Hero Section

#### Estructura TypeScript
```typescript
interface HeroSectionV7 {
  type: 'featured-property';
  variant: 'style7';
  background: 'light' | 'image';
  layout: 'centered-logo';
  content: {
    featuredProperty?: PropertyCardV7;
    headline: string;
    searchForm: SearchFormConfig;
  };
}
```

#### Características del Header
- **Logo centrado**: Diseño con logo en el centro del header
- **Light theme**: Header claro con texto oscuro
- **Logo:** `/images/header-logo3.svg`

### 3.2 Property Cards (Featured Listings)

#### Estructura de Datos TypeScript
```typescript
interface PropertyCardV7 extends PropertyCardV6 {
  // Hereda de V6 y añade:
  featured: boolean;
  highlight: boolean;
  quickActions: QuickAction[];
  virtualTour?: {
    available: boolean;
    type: 'video' | '360';
    url: string;
  };
}

interface QuickAction {
  icon: 'heart' | 'compare' | 'share' | 'phone' | 'calendar';
  label: string;
  action: () => void;
}
```

#### Datos de Ejemplo Extraídos
```json
{
  "prices": ["$82,000", "$986,00", "$14,000"],
  "priceRanges": {
    "sale": { "min": 82000, "max": 986000 }
  },
  "specifications": {
    "beds": { "min": 32, "max": 32 },
    "baths": { "min": 91, "max": 91 },
    "sqft": [1500]
  },
  "propertyTypes": ["Apartment", "House", "Villa", "Office", "Townhome", "Studio", "Land"],
  "features": ["Air Conditioning"],
  "addresses": ["329 Queensberry Street"]
}
```

### 3.3 Partners Section

#### Estructura TypeScript
```typescript
interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
  link?: string;
}

interface PartnersSection {
  title?: string;
  partners: PartnerLogo[];
  layout: 'grid' | 'carousel';
  columns: number; // 5-6 columnas típico
}
```

### 3.4 Featured Homes Section

#### Estructura TypeScript
```typescript
interface FeaturedHomesSection {
  title: string; // "Featured Homes"
  subtitle?: string;
  layout: 'grid' | 'carousel';
  columns: {
    desktop: number; // 4
    tablet: number;  // 2
    mobile: number;  // 1
  };
  properties: PropertyCardV7[];
  showViewAll: boolean;
  viewAllLink: string;
}
```

### 3.5 Discover Popular Properties Section

```typescript
interface DiscoverPropertiesSection {
  title: string; // "Discover Popular Properties"
  filters: PropertyFilter[];
  properties: PropertyCardV7[];
  pagination?: PaginationConfig;
}

interface PropertyFilter {
  id: string;
  label: string;
  propertyType?: PropertyType;
  active: boolean;
}
```

### 3.6 Testimonials Section

```typescript
interface TestimonialV7 {
  id: string;
  quote: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    rating: number; // 1-5 estrellas
  };
  property?: {
    image: string;
    address: string;
  };
}
```

---

## 4. Componentes UI

### 4.1 Header Component (Centered Logo)

```typescript
interface HeaderPropsV7 {
  variant: 'menu-home4';
  style: 'light-header';
  layout: 'centered-logo';
  logo: {
    src: string;  // "/images/header-logo3.svg"
    position: 'center';
  };
  navigation: {
    left: MenuItem[];  // Home, Listing
    right: MenuItem[]; // Property, Blog, Pages
  };
  actions: {
    login: boolean;
    addProperty: {
      text: string;
      style: 'dark';
      radius: 0; // bdrs0
    };
  };
}
```

### 4.2 Featured Property Card Component

```typescript
interface FeaturedPropertyCardProps {
  variant: 'featured';
  size: 'large' | 'medium' | 'small';
  data: PropertyCardV7;
  showAgentInfo: boolean;
  showVirtualTourBadge: boolean;
  imageFormat: 'cover' | 'contain';
  actionsPosition: 'overlay' | 'bottom';
}
```

### 4.3 Partner Logo Grid Component

```typescript
interface PartnerGridProps {
  partners: PartnerLogo[];
  columns: number;
  grayscale: boolean;
  hoverEffect: 'scale' | 'color' | 'none';
}
```

---

## 5. API Endpoints

### 5.1 Featured Properties

```typescript
// GET /api/properties/featured
interface FeaturedPropertiesQueryV7 {
  limit: number;          // default: 8
  sortBy: 'featured' | 'price' | 'date';
  sortOrder: 'asc' | 'desc';
  includeVirtualTour: boolean;
}

interface FeaturedPropertiesResponseV7 {
  data: PropertyCardV7[];
  meta: {
    total: number;
    hasMore: boolean;
  };
}
```

### 5.2 Partners

```typescript
// GET /api/partners
interface PartnersResponse {
  data: PartnerLogo[];
}
```

### 5.3 Popular Properties

```typescript
// GET /api/properties/popular
interface PopularPropertiesQuery {
  limit?: number;
  propertyType?: PropertyType;
  city?: string;
}

interface PopularPropertiesResponse {
  data: PropertyCardV7[];
  filters: PropertyFilter[];
}
```

---

## 6. Configuración

### 6.1 Variables de Entorno

```env
NEXT_PUBLIC_SITE_URL=https://homez-appdir.vercel.app
NEXT_PUBLIC_API_URL=/api
```

### 6.2 Estilos del Header Light Theme

```css
/* Header light theme V7 */
.header-nav.light-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.header-nav.light-header .logo {
  filter: none; /* Logo oscuro */
}

.header-nav.light-header .nav-link {
  color: #0f172a;
}

.header-nav.light-header .nav-link:hover {
  color: #4f46e5;
}
```

### 6.3 Featured Card Styles

```css
/* Featured property card */
.featured-property-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.featured-property-card .image-container {
  aspect-ratio: 4/3;
}

.featured-property-card .overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 50%
  );
}

.featured-property-card .price-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #4f46e5;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
}
```

---

## 7. Estructura de Archivos

```
app/(home)/home-v7/
├── page.tsx
└── components/
    ├── HeroSection/
    │   ├── FeaturedHero.tsx
    │   ├── CenteredLogoHeader.tsx
    │   └── index.ts
    ├── PartnersSection/
    │   ├── PartnersGrid.tsx
    │   ├── PartnerLogo.tsx
    │   └── index.ts
    ├── FeaturedHomes/
    │   ├── FeaturedHomes.tsx
    │   ├── FeaturedPropertyCard.tsx
    │   └── index.ts
    ├── DiscoverProperties/
    │   ├── DiscoverProperties.tsx
    │   ├── PropertyFilters.tsx
    │   └── index.ts
    ├── Testimonials/
    │   ├── TestimonialsCarousel.tsx
    │   └── index.ts
    └── index.ts
```

---

## 8. Datos de Ejemplo

### 8.1 Direcciones
```json
{
  "addresses": ["329 Queensberry Street"]
}
```

### 8.2 Tipos de Propiedad Disponibles
```typescript
const propertyTypes: PropertyType[] = [
  'Apartment',
  'House',
  'Villa',
  'Office',
  'Townhome',
  'Studio',
  'Land'
];
```

### 8.3 Precios
```json
{
  "salePrices": ["$82,000", "$986,00"],
  "rentPrices": []
}
```

---

## 9. Quick Actions de Property Cards

```typescript
const quickActions: QuickAction[] = [
  { icon: 'heart', label: 'Save to favorites', action: toggleFavorite },
  { icon: 'compare', label: 'Add to compare', action: toggleCompare },
  { icon: 'share', label: 'Share property', action: shareProperty },
  { icon: 'phone', label: 'Contact agent', action: contactAgent },
  { icon: 'calendar', label: 'Schedule tour', action: scheduleTour }
];
```

---

## 10. Badges y Status

```typescript
const propertyBadges: Badge[] = [
  { type: 'featured', text: 'Featured', color: '#4f46e5' },
  { type: 'new', text: 'New', color: '#10b981' },
  { type: 'hot', text: 'Hot Deal', color: '#ef4444' },
  { type: 'reduced', text: 'Price Reduced', color: '#f59e0b' },
  { type: 'virtual-tour', text: 'Virtual Tour', color: '#8b5cf6' }
];
```

---

## 11. CTA Sections

**Cantidad de CTA Sections detectadas:** 3

### Tipos de CTA
1. **Agent Registration** - Para agentes interesados
2. **Newsletter Signup** - Suscripción a alertas
3. **Contact Form** - Formulario de contacto

---

## 12. Dependencias JavaScript

```json
{
  "chunks": [
    "fd9d1056-b2f3258e1394957b.js",
    "8069-227fb7adbd03ac2f.js",
    "main-app-5c0f9b95fd3d20ef.js",
    "46170725-631baa44c8a31d2a.js",
    "9647-bf8b9f0c9adac23a.js",
    "2260-cad6d505618a37df.js",
    "7309-6559f8e04db685b2.js",
    "3580-a37c92de5cc3e360.js",
    "296-a9ec62dd979ef674.js",
    "5036-d3b31ad6d99ec30a.js",
    "5753-36477383f04b32ab.js",
    "6978-ad9210446945317d.js",
    "app/(home)/home-v7/page-54f2394875a5e953.js"
  ]
}
```

---

## 13. Páginas Relacionadas

- [Home V6](./home-v6-detailed.md) - Minimal design
- [Home V8](./home-v8-detailed.md) - Map integration focus
- [Property Single V1](../property-single-pages/single-v1.md) - Property detail page

---

*Documentación generada para Homez - Real Estate NextJS Template*
*Versión de documento: 1.0.0*
