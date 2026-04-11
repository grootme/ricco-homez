# Home v6 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v6-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home V6 - Especificación de Ingeniería Detallada

## 1. Identificación

| Campo | Valor |
|-------|-------|
| **Nombre** | Home V6 - Minimal Design Approach |
| **URL** | `/home-v6` |
| **URL Completa** | `https://homez-appdir.vercel.app/home-v6` |
| **Versión** | 6 |
| **Tipo de Plantilla** | Homepage - Minimal Design |
| **Título de Página** | `Home v6 \|\| Homez - Real Estate NextJS Template` |

---

## 2. Estructura de la Página

### 2.1 Secciones Principales

| # | Sección | Clase CSS | Descripción |
|---|---------|-----------|-------------|
| 1 | Hero Banner | `home-banner-style6 p0` | Hero minimalista con formulario de búsqueda |
| 2 | Featured Listings | `pb90 pb30-md` | Propiedades destacadas en grid |
| 3 | Explore Cities | `pt-0 pb80 pb30-md` | Ciudades populares con imágenes |
| 4 | Pricing Options | `pt0 pb90 pb50-md` | Planes de precios para agentes |
| 5 | Testimonials | `pb40-md bgc-f7` | Testimonios de clientes |
| 6 | Footer | - | Información de contacto y enlaces |

### 2.2 Componentes de Navegación

```
Header Class: header-nav nav-homepage-style at-home5 main-menu
```

**Menú Principal:**
- Home (dropdown con 10 variantes)
- Listing (megamenu con Grid View, Map Style, List View)
- Property (Agents, Single Style, Dashboard)
- Blog
- Pages

---

## 3. Contenido de Datos Detallado

### 3.1 Hero Section

#### Estructura TypeScript
```typescript
interface HeroSectionV6 {
  type: 'minimal';
  variant: 'style6';
  background: 'gradient' | 'image';
  content: {
    title: string;
    subtitle: string;
    searchForm: SearchFormConfig;
  };
}

interface SearchFormConfig {
  tabs: Array<'Buy' | 'Rent' | 'Sold'>;
  fields: SearchField[];
  submitButton: {
    text: string;
    icon: string;
  };
}
```

#### Campos del Formulario de Búsqueda

| Campo | Tipo | Placeholder | Requerido |
|-------|------|-------------|-----------|
| Location | text | "Enter an address, neighborhood, city, or ZIP code for {tab}" | No |
| Min Price | number | "Min." | No |
| Max Price | number | "Max." | No |

#### Tabs de Búsqueda
```json
{
  "tabs": ["Buy", "Rent", "Sold"],
  "defaultTab": "Buy"
}
```

### 3.2 Property Cards

#### Estructura de Datos TypeScript
```typescript
interface PropertyCardV6 {
  id: string;
  images: {
    primary: string;
    gallery: string[];
    total: number;
  };
  price: {
    amount: number;
    period?: 'mo' | 'yr' | null; // null para venta
    formatted: string; // "$82,000" o "$2,800 / mo"
  };
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specifications: {
    beds: number;       // Ejemplo: 3
    baths: number;      // Ejemplo: 4
    sqft: number;       // Ejemplo: 1200
  };
  features: string[];   // Ejemplo: ["Garden", "Air Conditioning"]
  badges: Badge[];
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
  propertyType: PropertyType;
  status: PropertyStatus;
}

type PropertyType = 
  | 'Apartment' 
  | 'House' 
  | 'Villa' 
  | 'Office' 
  | 'Townhome';

type PropertyStatus = 
  | 'available' 
  | 'featured' 
  | 'sold' 
  | 'rented';

interface Badge {
  type: 'featured' | 'new' | 'hot' | 'reduced';
  text: string;
  color: string;
}
```

#### Datos de Ejemplo Extraídos
```json
{
  "prices": ["$82,000", "$14,000", "$2,800"],
  "priceRanges": {
    "rent": { "min": 2800, "max": 14000, "period": "mo" },
    "sale": { "min": 82000, "max": null }
  },
  "specifications": {
    "beds": { "min": 3, "max": 3 },
    "baths": { "min": 4, "max": 4 },
    "sqft": [1200]
  },
  "propertyTypes": ["Apartment", "House", "Villa", "Office", "Townhome"],
  "features": ["Garden", "Air Conditioning"]
}
```

### 3.3 Pricing Plans Section

#### Estructura TypeScript
```typescript
interface PricingPlan {
  id: string;
  name: string;           // "Basic", "Professional", "Business"
  price: {
    amount: number;
    period: 'mo' | 'yr';
    formatted: string;
  };
  features: string[];
  isPopular: boolean;
  cta: {
    text: string;
    link: string;
  };
}
```

#### Datos de Planes
```json
{
  "plans": [
    {
      "name": "Basic",
      "price": "$2,800 / mo",
      "features": ["List properties", "Basic analytics"],
      "isPopular": false
    },
    {
      "name": "Professional", 
      "price": "$14,000 / mo",
      "features": ["Unlimited listings", "Advanced analytics", "Priority support"],
      "isPopular": true
    }
  ]
}
```

### 3.4 Explore Cities Section

#### Estructura TypeScript
```typescript
interface CityCard {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
  link: string;
}
```

### 3.5 Testimonials Section

#### Estructura TypeScript
```typescript
interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    company?: string;
  };
  rating: number; // 1-5
}
```

---

## 4. Componentes UI

### 4.1 Header Component

```typescript
interface HeaderProps {
  variant: 'at-home5';
  style: 'nav-homepage-style';
  logo: {
    light: string;  // "/images/header-logo.svg"
    dark: string;   // "/images/header-logo2.svg"
  };
  menu: MenuItem[];
  actions: {
    login: boolean;
    addProperty: boolean;
    sidebar: boolean;
  };
}

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
  isMegaMenu?: boolean;
}
```

### 4.2 Property Card Component

```typescript
interface PropertyCardProps {
  variant: 'style11';
  data: PropertyCardV6;
  showActions: boolean;
  imageLazy: boolean;
  onFavorite?: (id: string) => void;
  onCompare?: (id: string) => void;
}
```

**Clase CSS Principal:** `listing-style11`

### 4.3 Search Form Component

```typescript
interface SearchFormProps {
  variant: 'v6';
  tabs: SearchTab[];
  fields: SearchField[];
  layout: 'horizontal' | 'vertical';
  submitText: string;
  onSubmit: (values: SearchValues) => void;
}

interface SearchField {
  name: string;
  type: 'text' | 'select' | 'range';
  placeholder: string;
  options?: SelectOption[];
}

interface SearchValues {
  tab: 'Buy' | 'Rent' | 'Sold';
  location: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
}
```

---

## 5. API Endpoints

### 5.1 Propiedades Destacadas

```typescript
// GET /api/properties/featured
interface FeaturedPropertiesResponse {
  data: PropertyCardV6[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

// Query Parameters
interface FeaturedPropertiesQuery {
  limit?: number;      // default: 6
  type?: PropertyType;
  status?: PropertyStatus;
  minPrice?: number;
  maxPrice?: number;
}
```

### 5.2 Ciudades Populares

```typescript
// GET /api/cities/popular
interface PopularCitiesResponse {
  data: CityCard[];
}
```

### 5.3 Búsqueda de Propiedades

```typescript
// POST /api/properties/search
interface SearchRequest {
  tab: 'Buy' | 'Rent' | 'Sold';
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: PropertyType[];
  beds?: { min: number; max: number };
  baths?: { min: number; max: number };
  sqft?: { min: number; max: number };
  features?: string[];
  page?: number;
  limit?: number;
}
```

---

## 6. Configuración

### 6.1 Variables de Entorno

```env
NEXT_PUBLIC_SITE_URL=https://homez-appdir.vercel.app
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_maps_key
```

### 6.2 Colores del Tema

```css
:root {
  /* Primary Colors */
  --color-primary: #4f46e5;
  --color-primary-dark: #4338ca;
  --color-primary-light: #818cf8;
  
  /* Background Colors */
  --bg-light: #ffffff;
  --bg-dark: #0f172a;
  --bg-accent: #f7f7f7; /* bgc-f7 */
  
  /* Text Colors */
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  
  /* Border Colors */
  --border-light: #e2e8f0;
  --border-dark: #334155;
}
```

### 6.3 Tipografía

```css
/* Font Families */
--font-heading: 'Inter', sans-serif;
--font-body: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### 6.4 Breakpoints

```css
/* Responsive Breakpoints */
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--breakpoint-2xl: 1400px;
```

---

## 7. Estructura de Archivos

```
app/(home)/home-v6/
├── page.tsx                    # Página principal
├── layout.tsx                  # Layout específico (opcional)
└── components/
    ├── HeroSection/
    │   ├── HeroSection.tsx
    │   ├── HeroSearchForm.tsx
    │   └── index.ts
    ├── FeaturedListings/
    │   ├── FeaturedListings.tsx
    │   ├── PropertyCard.tsx
    │   └── index.ts
    ├── ExploreCities/
    │   ├── ExploreCities.tsx
    │   ├── CityCard.tsx
    │   └── index.ts
    ├── PricingPlans/
    │   ├── PricingPlans.tsx
    │   ├── PricingCard.tsx
    │   └── index.ts
    ├── Testimonials/
    │   ├── Testimonials.tsx
    │   ├── TestimonialCard.tsx
    │   └── index.ts
    └── index.ts
```

---

## 8. Datos de Contacto

| Tipo | Valor |
|------|-------|
| **Teléfono** | `+(0) 123 050 945 02` |
| **Email** | `hi@homez.com` |
| **Email Soporte** | `ibthemes21@gmail.com` |

---

## 9. Características de Diseño Minimal

### 9.1 Principios Aplicados

1. **Espaciado Generoso**: Padding vertical de 90px (`pb90`)
2. **Colores Reducidos**: Paleta limitada con acentos sutiles
3. **Tipografía Limpia**: Jerarquía visual clara
4. **Elementos Esenciales**: Solo componentes necesarios

### 9.2 Clases CSS Específicas

```css
/* Hero minimal */
.home-banner-style6 {
  padding: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

/* Cards limpias */
.listing-style11 {
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}

.listing-style11:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
```

---

## 10. Métricas de Rendimiento

| Métrica | Objetivo |
|---------|----------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 3.5s |
| **Cumulative Layout Shift** | < 0.1 |

---

## 11. Dependencias JavaScript

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
    "5753-36477383f04b32ab.js",
    "6978-ad9210446945317d.js",
    "app/(home)/home-v6/page-0bfd9bf1f478844d.js",
    "app/layout-dbe00328fabc2430.js"
  ]
}
```

---

## 12. Páginas Relacionadas

- [Home V5](./home-v5.md) - Agency showcase
- [Home V7](./home-v7-detailed.md) - Featured listings focus
- [Grid Default](../property-list-pages/grid-default.md) - Property listing page

---

*Documentación generada para Homez - Real Estate NextJS Template*
*Versión de documento: 1.0.0*
