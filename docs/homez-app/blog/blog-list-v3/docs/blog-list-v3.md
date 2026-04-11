# Blog List V3 - Documentation

## 1. Identificación

- **Nombre de la Página:** Blog List V3
- **URL:** `https://homez-appdir.vercel.app/blog-list-v3`
- **Título de Página:** `Blog List v3 || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Blog Listing Page
- **Versión:** V3 (Full-width Grid Layout)

---

## 2. Descripción General

La página Blog List V3 presenta un diseño de ancho completo sin sidebar lateral. Este diseño maximiza el espacio para mostrar contenido y es ideal para sitios de blog que priorizan la lectura y el contenido visual sobre la navegación por categorías.

### Diferencias con V1 y V2
| Característica | V1 | V2 | V3 |
|---------------|----|----|----|
| Layout | Grid con sidebar | Lista con sidebar | Full-width grid |
| Sidebar | Sí | Sí | No |
| Ancho | Contenedor | Contenedor | Full-width |
| Columnas | 4 | 1 | 3-4 |

---

## 3. Estructura de la Página

### 3.1 Layout General

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                              PAGE BREADCRUMB                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        FEATURED POST (Full Width)                    │    │
│  │   [Large Background Image with Overlay Title & Excerpt]             │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        BLOG POSTS GRID (3-4 cols)                    │    │
│  │                                                                       │    │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │    │
│  │   │  Blog 1  │  │  Blog 2  │  │  Blog 3  │  │  Blog 4  │          │    │
│  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘          │    │
│  │                                                                       │    │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │    │
│  │   │  Blog 5  │  │  Blog 6  │  │  Blog 7  │  │  Blog 8  │          │    │
│  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘          │    │
│  │                                                                       │    │
│  │                        PAGINATION                                     │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Featured Post Data Structure

```typescript
interface FeaturedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: AuthorData;
  category: CategoryData;
  publishedAt: string;
  readingTime: number;
}
```

### 4.2 Grid Post Data Structure

```typescript
interface GridPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: AuthorData;
  category: CategoryData;
  publishedAt: string;
  readingTime: number;
}
```

---

## 5. Componentes UI

### 5.1 Featured Post Component

**CSS Classes:**
```css
.featured-post { /* Container full-width */ }
.featured-post-image { /* Background image */ }
.featured-post-overlay { /* Dark overlay */ }
.featured-post-content { /* Text content over image */ }
.featured-post-category { /* Category badge */ }
.featured-post-title { /* Large title h2 */ }
.featured-post-excerpt { /* Excerpt text */ }
.featured-post-meta { /* Author, date, read time */ }
```

### 5.2 Grid Post Card Component

**CSS Classes:**
```css
.grid-post-card { /* Card container */ }
.grid-post-image { /* Featured image */ }
.grid-post-content { /* Text content */ }
.grid-post-category { /* Category badge */ }
.grid-post-title { /* Title h4 */ }
.grid-post-meta { /* Metadata */ }
```

---

## 6. API Endpoints

### 6.1 Get Blog Posts with Featured

```
Endpoint: /api/blog/posts
Method: GET
Query Parameters:
  - view: 'fullwidth' (required for V3)
  - page: number
  - limit: number (default: 8)
  - featured: boolean (to get featured post)

Response:
{
  "featured": FeaturedPost | null,
  "posts": GridPost[],
  "pagination": PaginationState
}
```

---

## 7. Estructuras TypeScript

```typescript
interface BlogListV3Props {
  featured: FeaturedPost | null;
  posts: GridPost[];
  pagination: PaginationState;
}

interface BlogListV3State {
  featured: FeaturedPost | null;
  posts: GridPost[];
  isLoading: boolean;
  error: string | null;
  page: number;
}
```

---

## 8. Comportamiento Responsivo

### 8.1 Breakpoints

| Breakpoint | Featured Post | Grid Columns |
|------------|---------------|--------------|
| Mobile (< 576px) | Full height | 1 columna |
| Tablet (≥ 576px) | Compact | 2 columnas |
| Desktop (≥ 992px) | Full | 3 columnas |
| Large (≥ 1200px) | Full | 4 columnas |

---

## 9. Notas Técnicas

- Featured post opcional (primer post destacado)
- Grid masonry opcional
- Hover effects en cards
- Lazy loading para imágenes del grid
- Featured image con parallax scroll

---

## Technical Implementation

### Blog Components
- Swiper: ^11.0.0 for featured posts hero
- Category filtering
- Infinite scroll or pagination
- Social sharing

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Key Dependencies
- swiper: ^11.0.0 for featured post carousel
- react-share: ^5.0.0 for social sharing
- framer-motion: ^10.16.0 for animations
- react-masonry-css: ^1.0.16 for grid layout

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 1 | Featured post section |
| `aos-delay="300"` | 1 | Staggered animation delay |

### AOS Configuration
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});
```

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

### Featured Post Animation

```javascript
// Featured post parallax background
gsap.to('.featured-post-image', {
  scrollTrigger: {
    trigger: '.featured-post',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: 100,
  ease: 'none'
});

// Featured post content reveal
gsap.from('.featured-post-content', {
  scrollTrigger: {
    trigger: '.featured-post',
    start: 'top 70%',
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out'
});

// Featured post title animation
gsap.from('.featured-post-title', {
  scrollTrigger: {
    trigger: '.featured-post',
    start: 'top 60%',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out'
});

// Featured post meta stagger
gsap.from('.featured-post-meta > *', {
  scrollTrigger: {
    trigger: '.featured-post',
    start: 'top 60%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.4,
  ease: 'power2.out'
});
```

### Grid Post Cards Animation

```javascript
// Grid cards stagger entrance
gsap.from('.grid-post-card', {
  scrollTrigger: {
    trigger: '.blog-posts-grid',
    start: 'top 80%',
  },
  opacity: 0,
  y: 60,
  stagger: {
    each: 0.1,
    from: 'start'
  },
  duration: 0.6,
  ease: 'power3.out'
});

// Grid card with individual ScrollTrigger
gsap.utils.toArray('.grid-post-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.95,
    y: 30,
    duration: 0.5,
    delay: (index % 4) * 0.08,
    ease: 'power2.out'
  });
});
```

### Grid Card Hover Animations

```javascript
// Grid card hover effects
const gridCards = document.querySelectorAll('.grid-post-card');

gridCards.forEach(card => {
  const image = card.querySelector('.grid-post-image img');
  const title = card.querySelector('.grid-post-title');
  const category = card.querySelector('.grid-post-category');
  const overlay = card.querySelector('.grid-post-overlay');
  
  // Mouse enter animation
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1.1, 
      duration: 0.5, 
      ease: 'power2.out' 
    });
    gsap.to(overlay, { 
      opacity: 0.3, 
      duration: 0.3 
    });
    gsap.to(title, { 
      y: -5, 
      color: '#ff5a5f',
      duration: 0.3 
    });
    gsap.to(category, { 
      y: -3, 
      duration: 0.3 
    });
  });
  
  // Mouse leave animation
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { 
      scale: 1, 
      duration: 0.5, 
      ease: 'power2.out' 
    });
    gsap.to(overlay, { 
      opacity: 0, 
      duration: 0.3 
    });
    gsap.to(title, { 
      y: 0, 
      color: 'inherit',
      duration: 0.3 
    });
    gsap.to(category, { 
      y: 0, 
      duration: 0.3 
    });
  });
});
```

### Masonry Grid Animation (Optional)

```javascript
// Masonry grid items with random delays
gsap.utils.toArray('.masonry-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
    },
    opacity: 0,
    y: 40,
    rotation: index % 2 === 0 ? 3 : -3,
    duration: 0.6,
    ease: 'power2.out'
  });
});
```

### Full-Width Section Divider Animation

```javascript
// Section divider line animation
gsap.from('.section-divider', {
  scrollTrigger: {
    trigger: '.section-divider',
    start: 'top 90%',
  },
  scaleX: 0,
  transformOrigin: 'left center',
  duration: 1,
  ease: 'power2.inOut'
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
  y: 30,
  duration: 0.5,
  ease: 'power2.out'
});

// Pagination button hover
const paginationBtns = document.querySelectorAll('.pagination-btn');
paginationBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { 
      scale: 1.1, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { 
      scale: 1, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
});
```

### Master Timeline for Full-Width Page

```javascript
// Master timeline for V3 page entrance
const v3PageTimeline = gsap.timeline({ delay: 0.3 });

v3PageTimeline
  .from('.featured-post', { 
    opacity: 0, 
    duration: 0.8 
  })
  .from('.featured-post-title', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.4')
  .from('.featured-post-meta > *', { 
    opacity: 0, 
    y: 20, 
    stagger: 0.1, 
    duration: 0.4 
  }, '-=0.3')
  .from('.grid-post-card', { 
    opacity: 0, 
    y: 40, 
    stagger: 0.08, 
    duration: 0.5 
  }, '-=0.2')
  .from('.pagination', { 
    opacity: 0, 
    y: 20, 
    duration: 0.4 
  }, '-=0.2');
```

### Scroll Progress Indicator

```javascript
// Scroll progress bar for full-width layout
gsap.to('.scroll-progress-bar', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  },
  scaleX: 1,
  ease: 'none'
});
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `bgc-f7` | Background | Light gray background |
| `text-white` | Text | White text color |
| `text-gray` | Text | Gray text color |

### Component Classes
```css
.featured-post { /* Full-width featured post */ }
.featured-post-image { /* Background image */ }
.featured-post-overlay { /* Dark overlay */ }
.featured-post-content { /* Text content */ }
.grid-post-card { /* Grid card */ }
.grid-post-image { /* Card image */ }
.grid-post-content { /* Card content */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "swiper": "^11.0.0",
  "react-share": "^5.0.0",
  "framer-motion": "^10.16.0",
  "react-masonry-css": "^1.0.16",
  "zustand": "^4.4.0",
  "@tanstack/react-query": "^5.8.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Blog List V3*
*Última actualización: Abril 2025*
