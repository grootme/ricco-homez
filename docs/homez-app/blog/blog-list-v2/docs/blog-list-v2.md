# Blog List V2 - Documentation

## 1. Identificación

- **Nombre de la Página:** Blog List V2
- **URL:** `https://homez-appdir.vercel.app/blog-list-v2`
- **Título de Página:** `Blog List v2 || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Blog Listing Page
- **Versión:** V2 (List Layout with Featured Image Left)

---

## 2. Descripción General

La página Blog List V2 presenta los artículos del blog en un formato de lista horizontal con imagen destacada a la izquierda. Este diseño es más adecuado para sitios que priorizan el contenido textual sobre las imágenes y permite mostrar más información por artículo en la vista de listado.

### Diferencias con V1
| Característica | V1 | V2 |
|---------------|----|----|
| Layout | Grid 4 columnas | Lista horizontal |
| Imagen | Encima del contenido | Izquierda del contenido |
| Excerpt | Corto | Más extenso |
| Posts por fila | 4 | 1 |
| Sidebar | Derecha | Derecha |

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
│  ┌────────────────────────────────────────┬──────────────────────────────┐   │
│  │                                        │                              │   │
│  │        BLOG POSTS LIST                 │      RIGHT SIDEBAR           │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │   • Search Widget            │   │
│  │   │ [IMG] │ Title & Excerpt        │ │   • Categories               │   │
│  │   │       │ Author, Date, Meta     │ │   • Recent Posts             │   │
│  │   └─────────────────────────────────┘ │   • Tags Cloud               │   │
│  │                                        │   • Ad Banner                │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │ [IMG] │ Title & Excerpt        │ │                              │   │
│  │   │       │ Author, Date, Meta     │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │ [IMG] │ Title & Excerpt        │ │                              │   │
│  │   │       │ Author, Date, Meta     │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  │           PAGINATION                    │                              │   │
│  │                                        │                              │   │
│  └────────────────────────────────────────┴──────────────────────────────┘   │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Blog List Item Data Structure

```typescript
interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    avatar: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
  publishedAt: string;
  readingTime: number;
  commentsCount: number;
}
```

### 4.2 Sample Blog List Items

```
Post 1:
- Image: /images/blog/blog-10.jpg
- Title: "The Ultimate Guide to Property Investment in 2024"
- Category: Investment
- Author: Ali Tufan
- Date: Dec 14, 2024
- Reading Time: 8 min
- Comments: 12

Post 2:
- Image: /images/blog/blog-11.jpg
- Title: "How to Stage Your Home for a Quick Sale"
- Category: Selling Tips
- Author: Kathryn Murphy
- Date: Dec 11, 2024
- Reading Time: 6 min
- Comments: 8

Post 3:
- Image: /images/blog/blog-12.jpg
- Title: "Understanding Property Taxes: A Complete Guide"
- Category: Finance
- Author: Leslie Alexander
- Date: Dec 9, 2024
- Reading Time: 10 min
- Comments: 15

Post 4:
- Image: /images/blog/blog-13.jpg
- Title: "Best Renovations to Increase Property Value"
- Category: Renovation
- Author: Bessie Cooper
- Date: Dec 7, 2024
- Reading Time: 7 min
- Comments: 6

Post 5:
- Image: /images/blog/blog-14.jpg
- Title: "First-Time Buyer Mistakes to Avoid"
- Category: Buying Guide
- Author: Arlene McCoy
- Date: Dec 5, 2024
- Reading Time: 5 min
- Comments: 20

Post 6:
- Image: /images/blog/blog-15.jpg
- Title: "Real Estate Market Predictions for 2025"
- Category: Market Trends
- Author: Darrell Steward
- Date: Dec 3, 2024
- Reading Time: 9 min
- Comments: 18
```

---

## 5. Componentes UI

### 5.1 Blog List Item Component

```typescript
interface BlogListItemProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: ImageData;
  author: AuthorData;
  category: CategoryData;
  publishedAt: string;
  readingTime: number;
  commentsCount: number;
}
```

**CSS Classes:**
```css
.blog-list-item { /* Container principal - flex row */ }
.blog-list-item-image { /* Imagen destacada - col-4 */ }
.blog-list-item-content { /* Contenido - col-8 */ }
.blog-list-item-category { /* Badge de categoría */ }
.blog-list-item-title { /* Título h3 */ }
.blog-list-item-excerpt { /* Resumen del post */ }
.blog-list-item-meta { /* Metadatos */ }
.blog-list-item-author { /* Info del autor */ }
```

### 5.2 Image Dimensions

| Viewport | Ancho de Imagen | Alto de Imagen |
|----------|-----------------|----------------|
| Desktop | 300px | 200px |
| Tablet | 250px | 170px |
| Mobile | 100% width | 200px |

---

## 6. API Endpoints

### 6.1 Get Blog Posts (List Format)

```
Endpoint: /api/blog/posts
Method: GET
Query Parameters:
  - page: number (default: 1)
  - limit: number (default: 6)
  - view: 'list' (required for V2)
  - category: string (optional)
  - tag: string (optional)
  - search: string (optional)

Response:
{
  "posts": BlogListItem[],
  "pagination": PaginationState
}
```

---

## 7. Estructuras TypeScript

### 7.1 Blog List Page Props

```typescript
interface BlogListV2Props {
  posts: BlogListItem[];
  categories: BlogCategory[];
  recentPosts: RecentPost[];
  tags: BlogTag[];
  pagination: PaginationState;
}

interface ImageData {
  url: string;
  alt: string;
  width: number;
  height: number;
}
```

---

## 8. Comportamiento Responsivo

### 8.1 Breakpoints

| Breakpoint | Layout | Imagen |
|------------|--------|--------|
| Mobile (< 576px) | Stack vertical | Encima del contenido |
| Tablet (≥ 576px) | Horizontal | Izquierda, 30% |
| Desktop (≥ 992px) | Horizontal | Izquierda, 25% |

---

## 9. Notas Técnicas

- Imágenes con lazy loading
- Excerpt truncado a 150 caracteres
- "Read More" link al final de cada item
- Hover effect en imagen (zoom suave)
- Posts ordenados por fecha descendente

---

## Technical Implementation

### Blog Components
- Swiper: ^11.0.0 for featured posts
- Category filtering with URL params
- Infinite scroll or pagination
- Social sharing integration

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Key Dependencies
- swiper: ^11.0.0 for carousels
- react-share: ^5.0.0 for social sharing
- react-intersection-observer: ^9.5.0 for infinite scroll
- date-fns: ^3.0.0 for date formatting

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 1 | Main blog list container |
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

### Blog List Item Entrance Animations

```javascript
// Blog list items stagger entrance
gsap.from('.blog-list-item', {
  opacity: 0,
  x: -40,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power3.out',
  delay: 0.3
});

// Blog list item with ScrollTrigger
gsap.utils.toArray('.blog-list-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -30,
    duration: 0.5,
    ease: 'power2.out'
  });
});
```

### Blog List Item Hover Animations

```javascript
// Blog list item hover effects
const blogListItems = document.querySelectorAll('.blog-list-item');

blogListItems.forEach(item => {
  const image = item.querySelector('.blog-list-item-image img');
  const title = item.querySelector('.blog-list-item-title');
  const excerpt = item.querySelector('.blog-list-item-excerpt');
  const readMore = item.querySelector('.read-more-link');
  
  // Mouse enter animation
  item.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1.1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(title, { 
      color: '#ff5a5f', 
      x: 5,
      duration: 0.3 
    });
    gsap.to(excerpt, { 
      opacity: 0.8, 
      duration: 0.3 
    });
    gsap.to(readMore, { 
      x: 10, 
      duration: 0.3, 
      ease: 'power1.out' 
    });
  });
  
  // Mouse leave animation
  item.addEventListener('mouseleave', () => {
    gsap.to(image, { 
      scale: 1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(title, { 
      color: 'inherit', 
      x: 0,
      duration: 0.3 
    });
    gsap.to(excerpt, { 
      opacity: 1, 
      duration: 0.3 
    });
    gsap.to(readMore, { 
      x: 0, 
      duration: 0.3, 
      ease: 'power1.out' 
    });
  });
});
```

### Image Reveal Animation

```javascript
// Image reveal on scroll
gsap.utils.toArray('.blog-list-item-image').forEach(imgContainer => {
  const img = imgContainer.querySelector('img');
  
  gsap.from(img, {
    scrollTrigger: {
      trigger: imgContainer,
      start: 'top 85%',
    },
    scale: 1.2,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });
});
```

### Sidebar Widget Animations

```javascript
// Sidebar widgets entrance with slide effect
gsap.from('.blog-sidebar-widget', {
  scrollTrigger: {
    trigger: '.blog-sidebar',
    start: 'top 80%',
  },
  opacity: 0,
  x: 40,
  stagger: 0.12,
  duration: 0.5,
  ease: 'power2.out'
});

// Widget title underline animation
gsap.utils.toArray('.widget-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 90%',
    },
    opacity: 0,
    y: -10,
    duration: 0.4,
    ease: 'power2.out'
  });
  
  // Add underline animation
  const underline = document.createElement('div');
  underline.className = 'title-underline';
  title.appendChild(underline);
  
  gsap.from(underline, {
    scrollTrigger: {
      trigger: title,
      start: 'top 90%',
    },
    width: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.2
  });
});
```

### Category and Tag Animations

```javascript
// Categories slide in
gsap.from('.categories-widget li', {
  scrollTrigger: {
    trigger: '.categories-widget',
    start: 'top 85%',
  },
  opacity: 0,
  x: -20,
  stagger: 0.06,
  duration: 0.3,
  ease: 'power1.out'
});

// Recent posts thumbnail scale
gsap.utils.toArray('.recent-post-item').forEach(post => {
  const thumb = post.querySelector('img');
  
  post.addEventListener('mouseenter', () => {
    gsap.to(thumb, { 
      scale: 1.1, 
      duration: 0.3 
    });
  });
  
  post.addEventListener('mouseleave', () => {
    gsap.to(thumb, { 
      scale: 1, 
      duration: 0.3 
    });
  });
});

// Tags pop in
gsap.from('.tags-widget .tag', {
  scrollTrigger: {
    trigger: '.tags-widget',
    start: 'top 85%',
  },
  opacity: 0,
  scale: 0,
  stagger: 0.04,
  duration: 0.4,
  ease: 'back.out(1.7)'
});
```

### Pagination Animation

```javascript
// Pagination entrance
gsap.from('.pagination-wrapper', {
  scrollTrigger: {
    trigger: '.pagination-wrapper',
    start: 'top 90%',
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});

// Page number animations
const pageNumbers = document.querySelectorAll('.page-number');
pageNumbers.forEach(num => {
  num.addEventListener('mouseenter', () => {
    gsap.to(num, { 
      y: -3, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
  num.addEventListener('mouseleave', () => {
    gsap.to(num, { 
      y: 0, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
});
```

### Master Timeline for List Page

```javascript
// Master timeline for page entrance
const listPageTimeline = gsap.timeline({ delay: 0.4 });

listPageTimeline
  .from('.page-breadcrumb', { 
    opacity: 0, 
    y: -20, 
    duration: 0.4 
  })
  .from('.blog-list-item', { 
    opacity: 0, 
    x: -30, 
    stagger: 0.12, 
    duration: 0.5 
  }, '-=0.2')
  .from('.blog-sidebar-widget', { 
    opacity: 0, 
    x: 30, 
    stagger: 0.1, 
    duration: 0.4 
  }, '-=0.4');
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

### Spacing Utilities
| Prefix | Property | Examples |
|--------|----------|----------|
| `mb` | margin-bottom | `mb0`, `mb10`, `mb20`, `mb30` |
| `mt` | margin-top | `mt10`, `mt20` |
| `pl` | padding-left | `pl30` |
| `pt` | padding-top | `pt30`, `pt60` |
| `pb` | padding-bottom | `pb20`, `pb30` |

### Font Size Utilities
| Class | Size |
|-------|------|
| `fz13` | 13px |
| `fz14` | 14px |
| `fz15` | 15px |
| `fz30` | 30px |

---

## CSS Styling Approach

### Component Classes
```css
.blog-style1 { /* List item container */ }
.blog-img { /* Featured image */ }
.blog-content { /* Text content */ }
.sidebar-widget { /* Sidebar widget */ }
.widget-title { /* Widget heading */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "swiper": "^11.0.0",
  "react-share": "^5.0.0",
  "date-fns": "^3.0.0",
  "zustand": "^4.4.0",
  "@tanstack/react-query": "^5.8.0",
  "axios": "^1.6.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Blog List V2*
*Última actualización: Abril 2025*
