# FAQ Page - Documentation

## 1. Identificación

- **Nombre de la Página:** FAQ
- **URL:** `https://homez-appdir.vercel.app/faq`
- **Título de Página:** `Faq || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Help/Support Page

---

## 2. Descripción General

La página FAQ (Preguntas Frecuentes) proporciona respuestas a las preguntas más comunes de los usuarios sobre la plataforma, procesos de compra/venta, cuentas, pagos y más. Está organizada por categorías con búsqueda integrada.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        FAQ HEADER                                    │    │
│  │   Title: "Frequently Asked Questions" | Subtitle                    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        SEARCH BAR                                    │    │
│  │   [Search Icon] | [Input: "Search questions..."] | [Search Button] │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    CATEGORY TABS                                     │    │
│  │   [General] | [Account] | [Payments] | [Properties] | [Support]    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    FAQ ACCORDION                                     │    │
│  │                                                                       │    │
│  │   ┌─────────────────────────────────────────────────────────────┐   │    │
│  │   │ Q: How do I list a property?                         [+]   │   │    │
│  │   └─────────────────────────────────────────────────────────────┘   │    │
│  │   ┌─────────────────────────────────────────────────────────────┐   │    │
│  │   │ Q: What payment methods do you accept?                [+]   │   │    │
│  │   │ A: We accept credit cards, PayPal, and bank transfers...     │   │    │
│  │   └─────────────────────────────────────────────────────────────┘   │    │
│  │   ┌─────────────────────────────────────────────────────────────┐   │    │
│  │   │ Q: How do I contact support?                          [+]   │   │    │
│  │   └─────────────────────────────────────────────────────────────┘   │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    STILL HAVE QUESTIONS?                             │    │
│  │   "Can't find what you're looking for?" | [Contact Us]             │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 FAQ Item Data Structure

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string; // HTML content
  category: string;
  tags: string[];
  helpful: {
    yes: number;
    no: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### 4.2 FAQ Categories

```typescript
interface FAQCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  itemCount: number;
}

const faqCategories: FAQCategory[] = [
  { id: 'general', name: 'General', slug: 'general', icon: 'flaticon-info', itemCount: 8 },
  { id: 'account', name: 'Account', slug: 'account', icon: 'flaticon-user', itemCount: 6 },
  { id: 'payments', name: 'Payments', slug: 'payments', icon: 'flaticon-credit-card', itemCount: 5 },
  { id: 'properties', name: 'Properties', slug: 'properties', icon: 'flaticon-home', itemCount: 10 },
  { id: 'support', name: 'Support', slug: 'support', icon: 'flaticon-support', itemCount: 4 },
];
```

### 4.3 Sample FAQ Items

```typescript
const sampleFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'How do I list a property on Homez?',
    answer: `<p>To list a property on Homez:</p>
      <ol>
        <li>Create an account or log in</li>
        <li>Navigate to "Add Property" from your dashboard</li>
        <li>Fill in the property details, upload photos, and set your price</li>
        <li>Submit for review</li>
      </ol>
      <p>Your listing will be live within 24 hours after approval.</p>`,
    category: 'properties',
    tags: ['listing', 'property', 'how-to'],
    helpful: { yes: 45, no: 3 }
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: `<p>We accept the following payment methods:</p>
      <ul>
        <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
        <li>PayPal</li>
        <li>Bank Transfer</li>
        <li>Apple Pay / Google Pay</li>
      </ul>`,
    category: 'payments',
    tags: ['payment', 'billing', 'methods'],
    helpful: { yes: 32, no: 1 }
  },
  {
    id: '3',
    question: 'How do I reset my password?',
    answer: `<p>To reset your password:</p>
      <ol>
        <li>Click "Login" in the header</li>
        <li>Click "Lost your password?"</li>
        <li>Enter your email address</li>
        <li>Check your inbox for the reset link</li>
      </ol>`,
    category: 'account',
    tags: ['password', 'account', 'reset'],
    helpful: { yes: 28, no: 2 }
  },
  {
    id: '4',
    question: 'Is there a mobile app available?',
    answer: `<p>Yes! Homez is available on both iOS and Android platforms.</p>
      <p>Download from:</p>
      <ul>
        <li>Apple App Store</li>
        <li>Google Play Store</li>
      </ul>`,
    category: 'general',
    tags: ['mobile', 'app', 'download'],
    helpful: { yes: 56, no: 4 }
  }
];
```

---

## 5. Componentes UI

### 5.1 Search Component

```typescript
interface FAQSearchProps {
  placeholder: string;
  onSearch: (query: string) => void;
  suggestions?: string[];
}
```

### 5.2 Category Tabs

```typescript
interface CategoryTabsProps {
  categories: FAQCategory[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}
```

### 5.3 FAQ Accordion

```typescript
interface FAQAccordionProps {
  items: FAQItem[];
  onToggle: (itemId: string) => void;
  onHelpful: (itemId: string, helpful: boolean) => void;
}
```

**CSS Classes:**
```css
.faq-accordion { /* Accordion container */ }
.faq-item { /* Individual item */ }
.faq-question { /* Question header */ }
.faq-answer { /* Answer content */ }
.faq-toggle { /* Expand/collapse icon */ }
.faq-helpful { /* Was this helpful section */ }
.faq-helpful-btn { /* Yes/No buttons */ }
```

### 5.4 Helpful Feedback

```typescript
interface HelpfulFeedbackProps {
  itemId: string;
  yesCount: number;
  noCount: number;
  onFeedback: (helpful: boolean) => void;
}
```

---

## 6. API Endpoints

### 6.1 Get FAQ Items

```
Endpoint: /api/faq
Method: GET
Query Parameters:
  - category: string (optional)
  - search: string (optional)
  - limit: number
  - offset: number

Response:
{
  "items": FAQItem[],
  "categories": FAQCategory[],
  "total": number
}
```

### 6.2 Search FAQ

```
Endpoint: /api/faq/search
Method: GET
Query Parameters:
  - q: string (required)

Response:
{
  "items": FAQItem[],
  "suggestions": string[]
}
```

### 6.3 Submit Feedback

```
Endpoint: /api/faq/:id/feedback
Method: POST
Request Body:
{
  "helpful": boolean
}

Response:
{
  "success": true,
  "helpful": { yes: number, no: number }
}
```

---

## 7. Estructuras TypeScript

```typescript
interface FAQPageState {
  items: FAQItem[];
  categories: FAQCategory[];
  activeCategory: string | null;
  searchQuery: string;
  expandedItems: string[];
  isLoading: boolean;
}
```

---

## 8. Elementos Interactivos

### 8.1 Accordion Behavior

| Action | Effect |
|--------|--------|
| Click question | Toggle answer visibility |
| Click another question | Close previous, open new (optional: allow multiple) |

### 8.2 Search

| Action | Effect |
|--------|--------|
| Type in search | Filter items in real-time (debounced) |
| Clear search | Show all items |

### 8.3 Feedback

| Action | Effect |
|--------|--------|
| Click "Yes" | Increment yes count, show thank you message |
| Click "No" | Increment no count, show feedback form |

---

## 9. Comportamiento Responsivo

| Breakpoint | Layout |
|------------|--------|
| Mobile | Accordion full width, tabs scrollable |
| Tablet | Same as mobile |
| Desktop | Two columns optional, tabs inline |

---

## 10. SEO y Meta Information

```html
<title>Faq || Homez - Real Estate NextJS Template</title>
<meta name="description" content="Find answers to frequently asked questions about Homez real estate platform.">

<!-- FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I list a property on Homez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To list a property on Homez: Create an account..."
      }
    }
  ]
}
</script>
```

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Search Features
- Debounced search with 300ms delay
- Fuzzy matching for better results
- Category filtering

### Key Dependencies
- fuse.js: ^7.0.0 for fuzzy search
- react-hot-toast: ^2.4.0 for notifications
- framer-motion: ^10.16.0 for accordion animations

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-left` | 1 | Search/categories |
| `fade-right` | 1 | FAQ accordion |

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

### Dependencies to Add

```json
{
  "gsap": "^3.12.0"
}
```

### Page-Specific GSAP Animations

The FAQ page animations focus on smooth accordion interactions and search/category transitions.

#### 1. FAQ Accordion Animation

Smooth expand/collapse animation for FAQ items.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// FAQ accordion animation
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const content = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-toggle');
  let isOpen = false;

  item.addEventListener('click', () => {
    if (isOpen) {
      // Close animation
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Open animation
      gsap.set(content, { height: 'auto', opacity: 1 });
      gsap.from(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(icon, {
        rotation: 45,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    isOpen = !isOpen;
  });
});
```

#### 2. FAQ Items Entrance Animation

Staggered reveal for FAQ items on scroll.

```javascript
// FAQ items stagger entrance
gsap.from('.faq-item', {
  scrollTrigger: {
    trigger: '.faq-accordion',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  duration: 0.5,
  ease: 'power3.out'
});
```

#### 3. Category Tabs Animation

Animated tab switching for FAQ categories.

```javascript
// Category tabs entrance
gsap.from('.category-tab', {
  scrollTrigger: {
    trigger: '.category-tabs',
    start: 'top 90%',
    once: true
  },
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power3.out'
});

// Active tab indicator animation
const animateTabSwitch = (activeTab) => {
  // Remove active from all
  document.querySelectorAll('.category-tab').forEach(tab => {
    gsap.to(tab, { color: '#666', duration: 0.2 });
  });
  
  // Highlight active
  gsap.to(activeTab, {
    color: '#4A90D9',
    duration: 0.3,
    ease: 'power2.out'
  });
  
  // Underline animation
  const underline = document.querySelector('.tab-underline');
  gsap.to(underline, {
    x: activeTab.offsetLeft,
    width: activeTab.offsetWidth,
    duration: 0.3,
    ease: 'power2.out'
  });
};
```

#### 4. Search Bar Animation

Interactive search bar animations.

```javascript
// Search bar focus animation
const searchInput = document.querySelector('.faq-search input');
const searchWrapper = document.querySelector('.faq-search');

searchInput.addEventListener('focus', () => {
  gsap.to(searchWrapper, {
    boxShadow: '0 4px 20px rgba(74, 144, 217, 0.2)',
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out'
  });
});

searchInput.addEventListener('blur', () => {
  gsap.to(searchWrapper, {
    boxShadow: 'none',
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  });
});

// Search icon animation
const searchIcon = document.querySelector('.search-icon');
gsap.from(searchIcon, {
  scale: 0,
  rotation: -180,
  duration: 0.6,
  delay: 0.3,
  ease: 'back.out(1.7)'
});
```

#### 5. Helpful Feedback Animation

Animated feedback buttons for FAQ items.

```javascript
// Helpful buttons animation
const helpfulBtns = document.querySelectorAll('.faq-helpful-btn');

helpfulBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    btn.appendChild(ripple);
    
    gsap.fromTo(ripple,
      { scale: 0, opacity: 0.5 },
      { scale: 2, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ripple.remove() }
    );
    
    // Success feedback
    gsap.to(btn, {
      scale: 1.1,
      duration: 0.2,
      ease: 'back.out(2)',
      yoyo: true,
      repeat: 1
    });
  });
});
```

#### 6. FAQ Content Transition

Smooth content replacement when filtering by category.

```javascript
// Category filter transition
const animateFilterTransition = (newItems) => {
  // Fade out current
  gsap.to('.faq-item', {
    opacity: 0,
    y: -20,
    stagger: 0.02,
    duration: 0.2,
    ease: 'power2.in',
    onComplete: () => {
      // Hide old, show new
      document.querySelectorAll('.faq-item').forEach(item => item.style.display = 'none');
      newItems.forEach(item => {
        item.style.display = 'block';
        gsap.set(item, { opacity: 0, y: 20 });
      });
      
      // Fade in new
      gsap.to(newItems, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  });
};
```

### Complete Implementation Example

```javascript
// faq-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFAQAnimations = () => {
  // Category tabs
  gsap.from('.category-tab', {
    scrollTrigger: { trigger: '.category-tabs', start: 'top 90%', once: true },
    opacity: 0, y: 20, stagger: 0.05, duration: 0.4, ease: 'power3.out'
  });

  // Search bar
  const searchWrapper = document.querySelector('.faq-search');
  gsap.from(searchWrapper, {
    scrollTrigger: { trigger: searchWrapper, start: 'top 90%', once: true },
    opacity: 0, scale: 0.95, duration: 0.5, ease: 'power3.out'
  });

  // FAQ items
  gsap.from('.faq-item', {
    scrollTrigger: { trigger: '.faq-accordion', start: 'top 80%', once: true },
    opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power3.out'
  });

  // Initialize accordion
  initAccordion();
  initSearchAnimation();
};

const initAccordion = () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const content = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-toggle');
    let isOpen = false;

    item.addEventListener('click', () => {
      if (isOpen) {
        gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(icon, { rotation: 0, duration: 0.3 });
      } else {
        gsap.set(content, { height: 'auto', opacity: 1 });
        gsap.from(content, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out' });
        gsap.to(icon, { rotation: 45, duration: 0.3 });
      }
      isOpen = !isOpen;
    });
  });
};

const initSearchAnimation = () => {
  const searchInput = document.querySelector('.faq-search input');
  const searchWrapper = document.querySelector('.faq-search');
  
  searchInput?.addEventListener('focus', () => {
    gsap.to(searchWrapper, { boxShadow: '0 4px 20px rgba(74, 144, 217, 0.2)', scale: 1.02, duration: 0.3 });
  });
  
  searchInput?.addEventListener('blur', () => {
    gsap.to(searchWrapper, { boxShadow: 'none', scale: 1, duration: 0.3 });
  });
};
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `text-gray` | Text | Gray text color |

### Component Classes
```css
.faq-accordion { /* Accordion container */ }
.faq-item { /* Individual item */ }
.faq-question { /* Question header */ }
.faq-answer { /* Answer content */ }
.faq-toggle { /* Expand/collapse icon */ }
.faq-helpful { /* Was this helpful */ }
.category-tabs { /* Category navigation */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "fuse.js": "^7.0.0",
  "framer-motion": "^10.16.0",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - FAQ Page*
*Última actualización: Abril 2025*
