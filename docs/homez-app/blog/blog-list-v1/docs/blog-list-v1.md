# Blog List V1 - Documentation

## 1. Identificación

- **Nombre de la Página:** Blog List V1
- **URL:** `https://homez-appdir.vercel.app/blog-list-v1`
- **Título de Página:** `Blog List v1 || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Blog Listing Page
- **Versión:** V1 (Grid Layout)

---

## 2. Descripción General

La página Blog List V1 es la primera variante de la página de listado de blogs del template Homez. Muestra una colección de artículos del blog en un diseño de grid de 4 columnas con una barra lateral derecha que contiene widgets de búsqueda, categorías, artículos recientes, etiquetas y un banner de publicidad. Es una página informativa diseñada para mostrar contenido editorial relacionado con bienes raíces.

### Propósito
- Mostrar artículos del blog en formato de cuadrícula
- Facilitar la navegación por categorías y etiquetas
- Proporcionar acceso rápido a artículos destacados
- Mejorar el SEO del sitio con contenido editorial
- Generar engagement con los usuarios

---

## 3. Estructura de la Página

### 3.1 Layout General

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
│  Logo | Navigation Menu | Login/Register | Add Property                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                              PAGE BREADCRUMB                                 │
│  Home / Blog List V1                                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌────────────────────────────────────────┬──────────────────────────────┐   │
│  │                                        │                              │   │
│  │        BLOG POSTS GRID (4 cols)        │      RIGHT SIDEBAR           │   │
│  │                                        │                              │   │
│  │   ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    │   • Search Widget            │   │
│  │   │Blog │ │Blog │ │Blog │ │Blog │    │   • Categories               │   │
│  │   │  1  │ │  2  │ │  3  │ │  4  │    │   • Recent Posts             │   │
│  │   └─────┘ └─────┘ └─────┘ └─────┘    │   • Tags Cloud               │   │
│  │                                        │   • Ad Banner                │   │
│  │   ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    │                              │   │
│  │   │Blog │ │Blog │ │Blog │ │Blog │    │                              │   │
│  │   │  5  │ │  6  │ │  7  │ │  8  │    │                              │   │
│  │   └─────┘ └─────┘ └─────┘ └─────┘    │                              │   │
│  │                                        │                              │   │
│  │           PAGINATION                    │                              │   │
│  │      < 1 2 3 4 5 ... >                 │                              │   │
│  │                                        │                              │   │
│  └────────────────────────────────────────┴──────────────────────────────┘   │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
│  Newsletter | Quick Links | Contact | Social Media | Copyright              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Columnas del Layout

| Sección | Columnas | Clases CSS |
|---------|----------|------------|
| Blog Grid | col-lg-8 | col-lg-8 |
| Sidebar | col-lg-4 | col-lg-4 |
| Blog Cards | col-sm-6 col-lg-6 col-xl-3 | 4 cards por fila en desktop |

---

## 4. Contenido de Datos Detallado

### 4.1 Blog Post Card Data Structure

```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: BlogCategory;
  tags: string[];
  publishedAt: Date;
  readingTime: number;
  commentsCount: number;
}
```

### 4.2 Blog Card Component Data

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | string | Identificador único | "1" |
| `title` | string | Título del post | "Proven Techniques for Successful..." |
| `slug` | string | URL amigable | "proven-techniques-successful" |
| `excerpt` | string | Resumen del post | "Discover the secrets to successful..." |
| `featuredImage` | string | URL de imagen | "/images/blog/blog-16.jpg" |
| `author.name` | string | Nombre del autor | "Ali Tufan" |
| `author.avatar` | string | Avatar del autor | "/images/team/agent-1.jpg" |
| `category.name` | string | Nombre de categoría | "Real Estate" |
| `category.slug` | string | Slug de categoría | "real-estate" |
| `publishedAt` | Date | Fecha de publicación | "Dec 15, 2024" |
| `readingTime` | number | Tiempo de lectura (min) | 5 |

### 4.3 Sample Blog Post Data

```
Post 1:
- Title: "Proven Techniques for Successful Property Investment"
- Image: /images/blog/blog-16.jpg
- Category: Real Estate
- Author: Ali Tufan
- Date: Dec 15, 2024
- Reading Time: 5 min

Post 2:
- Title: "10 Tips for First-Time Home Buyers"
- Image: /images/blog/blog-17.jpg
- Category: Buying Guide
- Author: Kathryn Murphy
- Date: Dec 12, 2024
- Reading Time: 7 min

Post 3:
- Title: "Understanding Mortgage Rates in 2024"
- Image: /images/blog/blog-18.jpg
- Category: Finance
- Author: Leslie Alexander
- Date: Dec 10, 2024
- Reading Time: 6 min

Post 4:
- Title: "Best Neighborhoods for Families"
- Image: /images/blog/blog-19.jpg
- Category: Lifestyle
- Author: Bessie Cooper
- Date: Dec 8, 2024
- Reading Time: 4 min
```

---

## 5. Componentes de la Barra Lateral (Sidebar)

### 5.1 Search Widget

```typescript
interface SearchWidgetProps {
  placeholder: string;
  onSearch: (query: string) => void;
}
```

**Estructura HTML:**
```html
<div class="blog-sidebar-widget">
  <h4 class="widget-title">Search</h4>
  <div class="search-form">
    <input type="text" placeholder="Search posts..." class="form-control">
    <button type="submit" class="search-btn">
      <i class="fal fa-search"></i>
    </button>
  </div>
</div>
```

### 5.2 Categories Widget

```typescript
interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

interface CategoriesWidgetProps {
  categories: CategoryItem[];
}
```

**Sample Categories Data:**
| Categoría | Slug | Cantidad de Posts |
|-----------|------|-------------------|
| Real Estate | real-estate | 12 |
| Buying Guide | buying-guide | 8 |
| Selling Tips | selling-tips | 6 |
| Finance | finance | 10 |
| Lifestyle | lifestyle | 5 |
| Market Trends | market-trends | 7 |

### 5.3 Recent Posts Widget

```typescript
interface RecentPost {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  slug: string;
}

interface RecentPostsWidgetProps {
  posts: RecentPost[];
  limit: number; // default: 4
}
```

### 5.4 Tags Cloud Widget

```typescript
interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface TagsWidgetProps {
  tags: Tag[];
}
```

**Sample Tags:**
- Property (15)
- Investment (12)
- Home Buying (10)
- Mortgage (8)
- Renovation (7)
- Market (6)
- Tips (5)
- Interior (4)

### 5.5 Ad Banner Widget

```typescript
interface AdBannerWidget {
  imageUrl: string;
  linkUrl: string;
  alt: string;
  width: number;
  height: number;
}
```

---

## 6. Componentes UI

### 6.1 Blog Card Component

```typescript
interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
}
```

**CSS Classes:**
```css
.blog-card { /* Container principal */ }
.blog-card-image { /* Imagen destacada */ }
.blog-card-content { /* Contenido del card */ }
.blog-card-category { /* Badge de categoría */ }
.blog-card-title { /* Título del post */ }
.blog-card-meta { /* Metadatos: autor, fecha, tiempo */ }
```

### 6.2 Pagination Component

```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
```

---

## 7. API Endpoints

### 7.1 Get Blog Posts

```
Endpoint: /api/blog/posts
Method: GET
Query Parameters:
  - page: number (default: 1)
  - limit: number (default: 8)
  - category: string (optional)
  - tag: string (optional)
  - search: string (optional)
  - sort: 'newest' | 'oldest' | 'popular' (default: 'newest')

Response:
{
  "posts": BlogPost[],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 40,
    "itemsPerPage": 8,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### 7.2 Get Blog Categories

```
Endpoint: /api/blog/categories
Method: GET

Response:
{
  "categories": [
    {
      "id": "1",
      "name": "Real Estate",
      "slug": "real-estate",
      "postCount": 12
    },
    ...
  ]
}
```

### 7.3 Get Recent Posts

```
Endpoint: /api/blog/posts/recent
Method: GET
Query Parameters:
  - limit: number (default: 4)

Response:
{
  "posts": RecentPost[]
}
```

### 7.4 Search Blog Posts

```
Endpoint: /api/blog/search
Method: GET
Query Parameters:
  - q: string (required)
  - page: number (default: 1)
  - limit: number (default: 8)

Response:
{
  "posts": BlogPost[],
  "totalResults": number,
  "pagination": PaginationState
}
```

---

## 8. Estructuras TypeScript

### 8.1 Blog Post Interface

```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images?: string[];
  author: Author;
  category: BlogCategory;
  tags: BlogTag[];
  publishedAt: Date;
  updatedAt?: Date;
  readingTime: number;
  commentsCount: number;
  views?: number;
  featured?: boolean;
  status: 'draft' | 'published' | 'archived';
}

interface Author {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}
```

### 8.2 Page State Interface

```typescript
interface BlogListPageState {
  posts: BlogPost[];
  categories: BlogCategory[];
  recentPosts: RecentPost[];
  tags: BlogTag[];
  pagination: PaginationState;
  filters: BlogFilters;
  isLoading: boolean;
  error: string | null;
}

interface BlogFilters {
  search: string;
  category: string | null;
  tag: string | null;
  sort: 'newest' | 'oldest' | 'popular';
  page: number;
}
```

---

## 9. Elementos Interactivos

### 9.1 Búsqueda

| Elemento | Tipo | Acción |
|----------|------|--------|
| Search Input | Text Input | Filtrar posts en tiempo real (debounced) |
| Search Button | Button | Enviar búsqueda |

### 9.2 Filtros

| Elemento | Tipo | Acción |
|----------|------|--------|
| Category Link | Anchor | Filtrar por categoría |
| Tag Link | Anchor | Filtrar por etiqueta |

### 9.3 Navegación

| Elemento | Tipo | Destino |
|----------|------|---------|
| Blog Card | Link | `/blogs/[id]` |
| Author Name | Link | `/agent-single/[id]` |
| Category Badge | Link | `/blog-list-v1?category=[slug]` |
| Pagination | Buttons | Navegación de páginas |

---

## 10. Comportamiento Responsivo

### 10.1 Breakpoints

| Breakpoint | Ancho | Layout | Columnas Grid |
|------------|-------|--------|---------------|
| Mobile | < 576px | Single column | 1 columna |
| Tablet (sm) | ≥ 576px | Sidebar abajo | 2 columnas |
| Tablet (md) | ≥ 768px | Sidebar abajo | 2 columnas |
| Desktop (lg) | ≥ 992px | Sidebar derecha | 2-3 columnas |
| Large (xl) | ≥ 1200px | Sidebar derecha | 4 columnas |

### 10.2 Cambios en Mobile

- Sidebar se mueve debajo del grid de posts
- Grid de posts pasa a 1-2 columnas
- Menú de navegación colapsado (hamburger)
- Cards más compactas

---

## 11. SEO y Meta Information

```html
<title>Blog List v1 || Homez - Real Estate NextJS Template</title>
<meta name="description" content="Discover expert insights on real estate, property investment, home buying tips, and market trends. Stay updated with our latest blog articles.">
<meta name="keywords" content="real estate blog, property investment, home buying tips, real estate news">

<!-- Open Graph -->
<meta property="og:title" content="Blog List v1 || Homez - Real Estate NextJS Template">
<meta property="og:description" content="Discover expert insights on real estate...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://homez-appdir.vercel.app/blog-list-v1">
```

---

## 12. Notas Técnicas

- Lazy loading implementado para imágenes de blog posts
- Paginación del lado del servidor (8 posts por página)
- Búsqueda con debounce de 300ms
- Cache de categorías y tags
- Meta tags dinámicos por post
- Schema.org Article markup para SEO

---

## Technical Implementation

### Blog Components
- Swiper: ^11.0.0 for featured posts carousel
- Category filtering with URL params
- Pagination with server-side rendering
- Social sharing (Facebook, Twitter, LinkedIn, WhatsApp)

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Key Dependencies
- swiper: ^11.0.0 for carousels
- react-share: ^5.0.0 for social sharing
- react-markdown: ^9.0.0 for content rendering
- date-fns: ^3.0.0 for date formatting

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 1 | Main blog grid container |
| `aos-delay="300"` | 1 | Staggered animation delay |

### AOS Configuration
```javascript
// AOS default configuration
AOS.init({
  duration: 800,      // Animation duration in ms
  easing: 'ease-out', // Default easing
  once: true,         // Animate only once
  offset: 100         // Trigger offset
});
```

### Animation Types Available (from AOS library)
- **Fade**: `fade-up`, `fade-down`, `fade-left`, `fade-right`
- **Zoom**: `zoom-in`, `zoom-in-up`, `zoom-in-down`
- **Slide**: `slide-up`, `slide-down`, `slide-left`, `slide-right`
- **Flip**: `flip-left`, `flip-right`, `flip-up`, `flip-down`

### Easing Options
- `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`
- `ease-in-back`, `ease-out-back`, `ease-in-out-back`
- `ease-in-sine`, `ease-out-sine`, `ease-in-out-sine`
- `ease-in-quad`, `ease-out-quad`, `ease-in-out-quad`
- `ease-in-cubic`, `ease-out-cubic`, `ease-in-out-cubic`

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### Dependencies
```json
{
  "gsap": "^3.12.0"
}
```

### Import and Register Plugins
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Blog Cards Entrance Animations

```javascript
// Blog cards stagger entrance
gsap.from('.blog-card', {
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power3.out',
  delay: 0.2
});

// Blog card with ScrollTrigger
gsap.utils.toArray('.blog-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: index * 0.05,
    ease: 'power2.out'
  });
});
```

### Blog Card Hover Animations

```javascript
// Blog card hover effects
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
  const image = card.querySelector('.blog-card-image');
  const title = card.querySelector('.blog-card-title');
  const category = card.querySelector('.blog-card-category');
  
  // Mouse enter animation
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1.08, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(title, { 
      color: '#ff5a5f', 
      duration: 0.3 
    });
    gsap.to(category, { 
      y: -3, 
      duration: 0.3, 
      ease: 'power2.out' 
    });
  });
  
  // Mouse leave animation
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { 
      scale: 1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(title, { 
      color: 'inherit', 
      duration: 0.3 
    });
    gsap.to(category, { 
      y: 0, 
      duration: 0.3, 
      ease: 'power2.out' 
    });
  });
});
```

### Sidebar Widget Animations

```javascript
// Sidebar widgets entrance
gsap.from('.blog-sidebar-widget', {
  scrollTrigger: {
    trigger: '.blog-sidebar',
    start: 'top 80%',
  },
  opacity: 0,
  x: 30,
  stagger: 0.15,
  duration: 0.5,
  ease: 'power2.out'
});

// Search widget focus animation
const searchInput = document.querySelector('.search-form input');
const searchBtn = document.querySelector('.search-btn');

searchInput.addEventListener('focus', () => {
  gsap.to(searchInput, { 
    boxShadow: '0 0 0 3px rgba(255, 90, 95, 0.2)', 
    duration: 0.3 
  });
});

searchInput.addEventListener('blur', () => {
  gsap.to(searchInput, { 
    boxShadow: 'none', 
    duration: 0.3 
  });
});
```

### Categories Widget Animation

```javascript
// Category items stagger
gsap.from('.categories-widget li', {
  scrollTrigger: {
    trigger: '.categories-widget',
    start: 'top 85%',
  },
  opacity: 0,
  x: -20,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});

// Category hover effect
const categoryLinks = document.querySelectorAll('.categories-widget a');
categoryLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, { 
      x: 5, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, { 
      x: 0, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
});
```

### Recent Posts Widget Animation

```javascript
// Recent posts items
gsap.from('.recent-posts-widget .recent-post-item', {
  scrollTrigger: {
    trigger: '.recent-posts-widget',
    start: 'top 85%',
  },
  opacity: 0,
  y: 15,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Tags Cloud Animation

```javascript
// Tags cloud entrance
gsap.from('.tags-widget .tag-link', {
  scrollTrigger: {
    trigger: '.tags-widget',
    start: 'top 85%',
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.03,
  duration: 0.3,
  ease: 'back.out(1.5)'
});

// Tag hover effect
const tags = document.querySelectorAll('.tag-link');
tags.forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    gsap.to(tag, { 
      scale: 1.1, 
      backgroundColor: '#ff5a5f',
      color: '#fff',
      duration: 0.2 
    });
  });
  tag.addEventListener('mouseleave', () => {
    gsap.to(tag, { 
      scale: 1, 
      backgroundColor: 'transparent',
      color: 'inherit',
      duration: 0.2 
    });
  });
});
```

### Pagination Animation

```javascript
// Pagination entrance
gsap.from('.pagination', {
  scrollTrigger: {
    trigger: '.pagination',
    start: 'top 90%',
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});

// Pagination number hover
const paginationItems = document.querySelectorAll('.pagination-item');
paginationItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, { 
      scale: 1.05, 
      duration: 0.2 
    });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(item, { 
      scale: 1, 
      duration: 0.2 
    });
  });
});
```

### Page Timeline Animation

```javascript
// Master timeline for page entrance
const pageTimeline = gsap.timeline({ delay: 0.5 });

pageTimeline
  .from('.page-breadcrumb', { 
    opacity: 0, 
    y: -20, 
    duration: 0.4 
  })
  .from('.blog-card', { 
    opacity: 0, 
    y: 40, 
    stagger: 0.08, 
    duration: 0.5 
  }, '-=0.2')
  .from('.blog-sidebar-widget', { 
    opacity: 0, 
    x: 30, 
    stagger: 0.1, 
    duration: 0.4 
  }, '-=0.3');
```

---

## Theme Variables & CSS Analysis

### Color System
**Note:** This template uses **utility classes** rather than CSS custom properties.

| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `bgc-f7` | Background | Light gray background (#f7f7f7) |
| `text-white` | Text | White text color |
| `text-gray` | Text | Gray text color |
| `text-center` | Alignment | Center aligned text |

### Primary Color Classes
| Class | Description |
|-------|-------------|
| `btn-thm` | Primary theme button (orange/coral) |
| `btn-white` | White button with border |
| `btn-fb` | Facebook blue button |
| `btn-apple` | Apple black button |

### Border System
| Class | Usage |
|-------|-------|
| `bdrt` | Border right |
| `bdrt1` | Border right (variant) |
| `bdrs` | Border radius |
| `bdrs60` | Border radius 60px (pill shape) |

### Spacing Utilities
| Prefix | Property | Examples |
|--------|----------|----------|
| `p` | padding | `p20`, `p30` |
| `pt` | padding-top | `pt30`, `pt45`, `pt60` |
| `pb` | padding-bottom | `pb20`, `pb30` |
| `pl` | padding-left | `pl30` |
| `m` | margin | `mb20`, `mt20` |
| `mb` | margin-bottom | `mb0`, `mb10`, `mb20`, `mb25`, `mb30`, `mb40` |
| `mt` | margin-top | `mt10`, `mt20` |
| `ml` | margin-left | `ml20` |
| `mr` | margin-right | `mr40` |

### Font Size Utilities
| Class | Size |
|-------|------|
| `fz13` | 13px |
| `fz14` | 14px |
| `fz15` | 15px |
| `fz16` | 16px |
| `fz18` | 18px |
| `fz30` | 30px |

### Dimension Utilities
| Class | Property |
|-------|----------|
| `w-100` | width: 100% |
| `h-100` | height: 100% |

---

## CSS Styling Approach

### Methodology
- **Utility-First CSS**: Custom utility classes similar to Tailwind CSS
- **Component Classes**: Semantic component classes (`.blog-style1`, `.sidebar-widget`)
- **No CSS Custom Properties**: Traditional CSS with class-based styling

### Component Classes Structure
```css
/* Blog Card Components */
.blog-style1 { /* Main blog card container */ }
.blog-img { /* Featured image container */ }
.blog-content { /* Blog text content */ }

/* Sidebar Components */
.sidebar-widget { /* Widget container */ }
.widget-title { /* Widget heading */ }
.sidebar-header { /* Sidebar header */ }
.sidebar-content { /* Sidebar content area */ }
.sidebar-close-icon { /* Close button */ }
```

### Responsive Breakpoints
| Breakpoint | Class Prefix |
|------------|--------------|
| Mobile | Default (no prefix) |
| Small (≥576px) | `sm` |
| Medium (≥768px) | `md` |
| Large (≥992px) | `lg` |
| Extra Large (≥1200px) | `xl` |
| XXL (≥1400px) | `xxl` |

---

## NPM Libraries Required

### Animation Libraries
```json
{
  "aos": "^2.3.4"
}
```

### Core Dependencies (Already Documented)
- `swiper`: ^11.0.0 - For carousels
- `react-share`: ^5.0.0 - Social sharing
- `react-markdown`: ^9.0.0 - Content rendering
- `date-fns`: ^3.0.0 - Date formatting
- `zustand`: ^4.4.0 - State management
- `@tanstack/react-query`: ^5.8.0 - Server state
- `axios`: ^1.6.0 - HTTP client

### Installation Command
```bash
npm install aos@^2.3.4 swiper@^11.0.0 react-share@^5.0.0 react-markdown@^9.0.0 date-fns@^3.0.0
```

---

*Documentación generada para Homez Real Estate NextJS Template - Blog List V1*
*Última actualización: Abril 2025*
