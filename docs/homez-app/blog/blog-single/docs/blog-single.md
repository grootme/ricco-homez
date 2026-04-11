# Blog Single - Documentation

## 1. Identificación

- **Nombre de la Página:** Blog Single
- **URL:** `https://homez-appdir.vercel.app/blogs/[id]`
- **Ejemplo:** `https://homez-appdir.vercel.app/blogs/2`
- **Título de Página:** `[Post Title] || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Blog Detail Page
- **Ruta Dinámica:** `/blogs/[id]`

---

## 2. Descripción General

La página Blog Single muestra el contenido completo de un artículo individual del blog. Incluye el post con su contenido completo, imágenes, autor, categoría, etiquetas, sección de comentarios, posts relacionados y una barra lateral con widgets.

### Propósito
- Mostrar el contenido completo de un artículo
- Facilitar la lectura y engagement
- Permitir interacción mediante comentarios
- Mostrar contenido relacionado
- Mejorar SEO con contenido de calidad

---

## 3. Estructura de la Página

### 3.1 Layout General

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌────────────────────────────────────────┬──────────────────────────────┐   │
│  │                                        │                              │   │
│  │        BLOG POST CONTENT               │      RIGHT SIDEBAR           │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │   • Author Widget            │   │
│  │   │     Featured Image              │ │   • Categories               │   │
│  │   └─────────────────────────────────┘ │   • Recent Posts             │   │
│  │                                        │   • Tags                     │   │
│  │   Title: Post Title                   │   • Ad Banner                │   │
│  │   Category Badge                      │                              │   │
│  │   Author Info | Date | Read Time      │                              │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │     Post Content (HTML)         │ │                              │   │
│  │   │     - Paragraphs                │ │                              │   │
│  │   │     - Headings                  │ │                              │   │
│  │   │     - Images                    │ │                              │   │
│  │   │     - Blockquotes               │ │                              │   │
│  │   │     - Lists                     │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  │   Tags: [Tag1] [Tag2] [Tag3]         │                              │   │
│  │   Share: [FB] [TW] [LN] [Email]       │                              │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │     Author Bio Box              │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │     Comments Section            │ │                              │   │
│  │   │     - Comment Form              │ │                              │   │
│  │   │     - Comment List              │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  │   ┌─────────────────────────────────┐ │                              │   │
│  │   │     Related Posts               │ │                              │   │
│  │   └─────────────────────────────────┘ │                              │   │
│  │                                        │                              │   │
│  └────────────────────────────────────────┴──────────────────────────────┘   │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Blog Post Data Structure

```typescript
interface BlogPostSingle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  featuredImage: {
    url: string;
    alt: string;
    caption?: string;
  };
  author: AuthorFull;
  category: BlogCategory;
  tags: BlogTag[];
  publishedAt: Date;
  updatedAt?: Date;
  readingTime: number;
  commentsCount: number;
  views?: number;
  relatedPosts?: RelatedPost[];
}

interface AuthorFull {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  jobTitle: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  postsCount: number;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  publishedAt: string;
}
```

### 4.2 Sample Blog Post Data

```
Post ID: 2
- Title: "The Ultimate Guide to Property Investment"
- Slug: "ultimate-guide-property-investment"
- Featured Image: /images/blog/blog-2.jpg
- Category: Investment
- Author: Ali Tufan
  - Avatar: /images/team/agent-1.jpg
  - Bio: "Real estate expert with 15+ years of experience..."
  - Job Title: "Senior Real Estate Consultant"
- Published: December 10, 2024
- Reading Time: 12 min
- Tags: Investment, Property, Guide, Real Estate
- Comments: 24
```

---

## 5. Componentes UI

### 5.1 Post Header Component

```typescript
interface PostHeaderProps {
  title: string;
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
.post-header { /* Container */ }
.post-category-badge { /* Category badge */ }
.post-title { /* h1 title */ }
.post-meta { /* Meta info row */ }
.post-author-avatar { /* Author avatar */ }
.post-date { /* Publish date */ }
.post-reading-time { /* Reading time */ }
```

### 5.2 Post Content Component

```typescript
interface PostContentProps {
  content: string; // HTML string
}
```

**Content Elements:**
- Headings (h2, h3, h4)
- Paragraphs
- Images with captions
- Blockquotes
- Ordered/Unordered lists
- Code blocks
- Embedded videos
- Galleries

### 5.3 Tags & Share Component

```typescript
interface TagsShareProps {
  tags: BlogTag[];
  shareUrl: string;
  title: string;
}

interface ShareButtons {
  facebook: string;
  twitter: string;
  linkedin: string;
  email: string;
  whatsapp: string;
}
```

### 5.4 Author Bio Box Component

```typescript
interface AuthorBioProps {
  author: AuthorFull;
}
```

**CSS Classes:**
```css
.author-bio-box { /* Container */ }
.author-avatar { /* Author image */ }
.author-name { /* Author name h4 */ }
.author-title { /* Job title */ }
.author-bio { /* Bio text */ }
.author-social { /* Social links */ }
```

### 5.5 Comments Section Component

```typescript
interface Comment {
  id: string;
  author: string;
  email: string;
  avatar?: string;
  content: string;
  publishedAt: Date;
  replies?: Comment[];
}

interface CommentsSectionProps {
  postId: string;
  comments: Comment[];
  commentsCount: number;
}
```

### 5.6 Comment Form Component

```typescript
interface CommentFormData {
  author: string;
  email: string;
  website?: string;
  content: string;
  saveInfo: boolean;
}

interface CommentFormProps {
  postId: string;
  onSubmit: (data: CommentFormData) => void;
}
```

**Form Fields:**
| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Name | text | Sí | Min 2 caracteres |
| Email | email | Sí | Formato email válido |
| Website | url | No | URL válida |
| Comment | textarea | Sí | Min 10 caracteres |
| Save my info | checkbox | No | Boolean |

### 5.7 Related Posts Component

```typescript
interface RelatedPostsProps {
  posts: RelatedPost[];
  limit: number; // default: 3
}
```

---

## 6. API Endpoints

### 6.1 Get Single Blog Post

```
Endpoint: /api/blog/posts/:id
Method: GET
URL Parameters:
  - id: string (post ID or slug)

Response:
{
  "post": BlogPostSingle,
  "relatedPosts": RelatedPost[],
  "comments": Comment[]
}
```

### 6.2 Get Comments

```
Endpoint: /api/blog/posts/:id/comments
Method: GET
Query Parameters:
  - page: number
  - limit: number

Response:
{
  "comments": Comment[],
  "pagination": PaginationState
}
```

### 6.3 Submit Comment

```
Endpoint: /api/blog/posts/:id/comments
Method: POST
Request Body:
{
  "author": string,
  "email": string,
  "website": string (optional),
  "content": string
}

Response:
{
  "success": true,
  "comment": Comment
}
```

### 6.4 Get Related Posts

```
Endpoint: /api/blog/posts/:id/related
Method: GET
Query Parameters:
  - limit: number (default: 3)

Response:
{
  "posts": RelatedPost[]
}
```

---

## 7. Estructuras TypeScript

### 7.1 Page State

```typescript
interface BlogSinglePageState {
  post: BlogPostSingle | null;
  relatedPosts: RelatedPost[];
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
  commentForm: CommentFormData;
}

interface BlogSinglePageProps {
  params: {
    id: string;
  };
}
```

---

## 8. Elementos Interactivos

### 8.1 Social Share

| Plataforma | Action | URL Format |
|------------|--------|------------|
| Facebook | Share dialog | `https://facebook.com/sharer/sharer.php?u=[url]` |
| Twitter | Tweet dialog | `https://twitter.com/intent/tweet?url=[url]&text=[title]` |
| LinkedIn | Share dialog | `https://linkedin.com/shareArticle?mini=true&url=[url]` |
| WhatsApp | Send message | `https://wa.me/?text=[title]+[url]` |
| Email | Compose email | `mailto:?subject=[title]&body=[url]` |

### 8.2 Comments Actions

| Action | Handler |
|--------|---------|
| Submit Comment | `onSubmitComment(formData)` |
| Reply to Comment | `onReply(commentId)` |
| Report Comment | `onReport(commentId)` |

---

## 9. SEO y Meta Information

```html
<title>[Post Title] || Homez - Real Estate NextJS Template</title>
<meta name="description" content="[Post Excerpt]">
<meta name="keywords" content="[Tags]">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:title" content="[Post Title]">
<meta property="og:description" content="[Post Excerpt]">
<meta property="og:image" content="[Featured Image URL]">
<meta property="og:url" content="[Post URL]">
<meta property="article:published_time" content="[Published Date]">
<meta property="article:author" content="[Author Name]">
<meta property="article:section" content="[Category Name]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Post Title]">
<meta name="twitter:description" content="[Post Excerpt]">
<meta name="twitter:image" content="[Featured Image URL]">

<!-- Article Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "image": "[Featured Image URL]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Homez",
    "logo": {
      "@type": "ImageObject",
      "url": "[Logo URL]"
    }
  },
  "datePublished": "[Published Date]",
  "dateModified": "[Updated Date]"
}
</script>
```

---

## 10. Comportamiento Responsivo

### 10.1 Breakpoints

| Breakpoint | Layout | Sidebar |
|------------|--------|---------|
| Mobile (< 576px) | Single column | Debajo del contenido |
| Tablet (≥ 768px) | Single column | Debajo del contenido |
| Desktop (≥ 992px) | Two columns | Derecha |

---

## 11. Notas Técnicas

- Contenido HTML sanitizado antes de renderizar
- Imágenes con lazy loading
- Comments paginación del lado del servidor
- View count incrementado en cada visita
- Related posts basados en tags y categoría
- Comentarios con threading (respuestas anidadas)
- Email notification para respuestas a comentarios

---

## Technical Implementation

### Blog Components
- Swiper: ^11.0.0 for related posts
- Category navigation
- Comment system with threading
- Social sharing (Facebook, Twitter, LinkedIn, WhatsApp)

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Content Rendering
- react-markdown: ^9.0.0 for markdown content
- remark-gfm: ^4.0.0 for GitHub Flavored Markdown
- rehype-sanitize: ^6.0.0 for HTML sanitization

### Key Dependencies
- react-share: ^5.0.0 for social sharing
- react-syntax-highlighter: ^15.5.0 for code blocks
- date-fns: ^3.0.0 for date formatting
- react-hook-form: ^7.48.0 for comment form

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 5 | Content sections, related posts |
| `aos-delay="0"` | 1 | First element (no delay) |
| `aos-delay="100"` | 1 | Second element |
| `aos-delay="300"` | 2 | Staggered elements |
| `aos-delay="500"` | 1 | Last element |

### AOS Configuration
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});
```

### Animation Pattern
- Sequential fade-up animations with staggered delays
- Content sections animate in order from top to bottom
- Related posts section has cascade animation

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

### Post Header Animation

```javascript
// Post header entrance
gsap.from('.post-header', {
  opacity: 0,
  y: -30,
  duration: 0.8,
  ease: 'power3.out'
});

// Category badge animation
gsap.from('.post-category-badge', {
  opacity: 0,
  scale: 0.8,
  duration: 0.4,
  delay: 0.2,
  ease: 'back.out(1.5)'
});

// Post title reveal
gsap.from('.post-title', {
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.3,
  ease: 'power2.out'
});

// Post meta stagger
gsap.from('.post-meta > *', {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
  delay: 0.5,
  ease: 'power2.out'
});
```

### Featured Image Animation

```javascript
// Featured image reveal
gsap.from('.post-featured-image', {
  scrollTrigger: {
    trigger: '.post-featured-image',
    start: 'top 80%',
  },
  opacity: 0,
  scale: 1.1,
  duration: 1,
  ease: 'power2.out'
});

// Featured image parallax
gsap.to('.post-featured-image img', {
  scrollTrigger: {
    trigger: '.post-featured-image',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: 50,
  ease: 'none'
});
```

### Post Content Reveal Animations

```javascript
// Post content paragraphs reveal
gsap.utils.toArray('.post-content p, .post-content h2, .post-content h3').forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out'
  });
});

// Blockquote animation
gsap.from('.post-content blockquote', {
  scrollTrigger: {
    trigger: '.post-content blockquote',
    start: 'top 80%',
  },
  opacity: 0,
  x: -30,
  borderLeftWidth: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Post images animation
gsap.utils.toArray('.post-content img').forEach(img => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: 'top 85%',
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    ease: 'power2.out'
  });
});

// Code blocks animation
gsap.utils.toArray('.post-content pre, .post-content code').forEach(code => {
  gsap.from(code, {
    scrollTrigger: {
      trigger: code,
      start: 'top 85%',
    },
    opacity: 0,
    x: -20,
    duration: 0.5,
    ease: 'power2.out'
  });
});
```

### Tags and Share Animation

```javascript
// Tags entrance
gsap.from('.post-tags .tag', {
  scrollTrigger: {
    trigger: '.post-tags',
    start: 'top 90%',
  },
  opacity: 0,
  scale: 0,
  stagger: 0.05,
  duration: 0.3,
  ease: 'back.out(1.7)'
});

// Tag hover effect
const tags = document.querySelectorAll('.post-tags .tag');
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

// Share buttons entrance
gsap.from('.share-buttons .share-btn', {
  scrollTrigger: {
    trigger: '.share-buttons',
    start: 'top 90%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});

// Share button hover
const shareBtns = document.querySelectorAll('.share-btn');
shareBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, { 
      y: -5, 
      scale: 1.1,
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { 
      y: 0, 
      scale: 1,
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
});
```

### Author Bio Box Animation

```javascript
// Author bio entrance
gsap.from('.author-bio-box', {
  scrollTrigger: {
    trigger: '.author-bio-box',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: 'power2.out'
});

// Author avatar animation
gsap.from('.author-avatar', {
  scrollTrigger: {
    trigger: '.author-bio-box',
    start: 'top 80%',
  },
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  delay: 0.2,
  ease: 'back.out(1.5)'
});

// Author social links hover
const socialLinks = document.querySelectorAll('.author-social a');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, { 
      y: -3, 
      rotation: 5,
      duration: 0.2 
    });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, { 
      y: 0, 
      rotation: 0,
      duration: 0.2 
    });
  });
});
```

### Comments Section Animation

```javascript
// Comments section header
gsap.from('.comments-header', {
  scrollTrigger: {
    trigger: '.comments-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});

// Comment items stagger
gsap.from('.comment-item', {
  scrollTrigger: {
    trigger: '.comments-section',
    start: 'top 75%',
  },
  opacity: 0,
  x: -30,
  stagger: 0.12,
  duration: 0.5,
  ease: 'power2.out'
});

// Nested replies animation
gsap.utils.toArray('.comment-reply').forEach((reply, index) => {
  gsap.from(reply, {
    scrollTrigger: {
      trigger: reply,
      start: 'top 90%',
    },
    opacity: 0,
    x: -20,
    duration: 0.4,
    delay: 0.1,
    ease: 'power1.out'
  });
});

// Comment avatar hover
const commentAvatars = document.querySelectorAll('.comment-avatar');
commentAvatars.forEach(avatar => {
  avatar.addEventListener('mouseenter', () => {
    gsap.to(avatar, { 
      scale: 1.1, 
      duration: 0.2 
    });
  });
  avatar.addEventListener('mouseleave', () => {
    gsap.to(avatar, { 
      scale: 1, 
      duration: 0.2 
    });
  });
});
```

### Comment Form Animation

```javascript
// Comment form entrance
gsap.from('.comment-form', {
  scrollTrigger: {
    trigger: '.comment-form',
    start: 'top 85%',
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  ease: 'power2.out'
});

// Form fields stagger
gsap.from('.comment-form .form-group', {
  scrollTrigger: {
    trigger: '.comment-form',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});

// Input focus animation
const formInputs = document.querySelectorAll('.comment-form input, .comment-form textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    gsap.to(input, { 
      boxShadow: '0 0 0 3px rgba(255, 90, 95, 0.2)', 
      duration: 0.3 
    });
  });
  input.addEventListener('blur', () => {
    gsap.to(input, { 
      boxShadow: 'none', 
      duration: 0.3 
    });
  });
});

// Submit button animation
const submitBtn = document.querySelector('.comment-form button[type="submit"]');
submitBtn.addEventListener('mouseenter', () => {
  gsap.to(submitBtn, { 
    scale: 1.02, 
    duration: 0.2 
  });
});
submitBtn.addEventListener('mouseleave', () => {
  gsap.to(submitBtn, { 
    scale: 1, 
    duration: 0.2 
  });
});
```

### Related Posts Animation

```javascript
// Related posts section header
gsap.from('.related-posts-header', {
  scrollTrigger: {
    trigger: '.related-posts',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});

// Related posts cards
gsap.from('.related-post-card', {
  scrollTrigger: {
    trigger: '.related-posts',
    start: 'top 75%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.12,
  duration: 0.5,
  ease: 'power2.out'
});

// Related card hover
const relatedCards = document.querySelectorAll('.related-post-card');
relatedCards.forEach(card => {
  const image = card.querySelector('img');
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1.1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(card.querySelector('.related-post-title'), { 
      color: '#ff5a5f', 
      duration: 0.3 
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { 
      scale: 1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
    gsap.to(card.querySelector('.related-post-title'), { 
      color: 'inherit', 
      duration: 0.3 
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
    start: 'top 75%',
  },
  opacity: 0,
  x: 30,
  stagger: 0.15,
  duration: 0.5,
  ease: 'power2.out'
});

// Widget items hover
gsap.utils.toArray('.sidebar-widget-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, { 
      x: 5, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(item, { 
      x: 0, 
      duration: 0.2, 
      ease: 'power1.out' 
    });
  });
});
```

### Master Timeline for Single Post Page

```javascript
// Master timeline for blog single page
const singlePostTimeline = gsap.timeline({ delay: 0.3 });

singlePostTimeline
  .from('.post-header', { 
    opacity: 0, 
    y: -20, 
    duration: 0.5 
  })
  .from('.post-title', { 
    opacity: 0, 
    y: 20, 
    duration: 0.4 
  }, '-=0.3')
  .from('.post-meta > *', { 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.3 
  }, '-=0.2')
  .from('.post-featured-image', { 
    opacity: 0, 
    scale: 1.05, 
    duration: 0.6 
  }, '-=0.2')
  .from('.post-content > *:nth-child(-n+3)', { 
    opacity: 0, 
    y: 20, 
    stagger: 0.1, 
    duration: 0.4 
  }, '-=0.3');
```

### Reading Progress Bar

```javascript
// Reading progress indicator
gsap.to('.reading-progress-bar', {
  scrollTrigger: {
    trigger: '.post-content',
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
| `text-white` | Text | White text color |
| `text-gray` | Text | Gray text color |

### Component Classes
```css
.post-header { /* Article header */ }
.post-category-badge { /* Category badge */ }
.post-title { /* h1 title */ }
.post-meta { /* Meta info */ }
.post-content { /* Article body */ }
.author-bio-box { /* Author section */ }
.comments-section { /* Comments */ }
.comment-form { /* Comment form */ }
.related-posts { /* Related articles */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "swiper": "^11.0.0",
  "react-share": "^5.0.0",
  "react-markdown": "^9.0.0",
  "remark-gfm": "^4.0.0",
  "rehype-sanitize": "^6.0.0",
  "react-syntax-highlighter": "^15.5.0",
  "react-hook-form": "^7.48.0",
  "date-fns": "^3.0.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Blog Single*
*Última actualización: Abril 2025*
