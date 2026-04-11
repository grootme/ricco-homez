# Compare Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Compare
- **URL:** `https://homez-appdir.vercel.app/compare`
- **Título de Página:** `Compare || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Property Comparison Tool

---

## 2. Descripción General

La página Compare permite a los usuarios comparar múltiples propiedades lado a lado. Muestra una tabla de comparación con las características clave de cada propiedad, facilitando la toma de decisiones de compra o alquiler.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        PAGE HEADER                                   │    │
│  │   Title: "Compare Properties" | Description                         │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    PROPERTY SELECTORS                                │    │
│  │   [+ Add Property] | [+ Add Property] | [+ Add Property] | [+ Add] │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    COMPARISON TABLE                                  │    │
│  │                                                                       │    │
│  │   ┌────────────┬──────────┬──────────┬──────────┬──────────┐       │    │
│  │   │ Feature    │ Prop 1   │ Prop 2   │ Prop 3   │ Prop 4   │       │    │
│  │   ├────────────┼──────────┼──────────┼──────────┼──────────┤       │    │
│  │   │ Image      │ [img]    │ [img]    │ [img]    │ [img]    │       │    │
│  │   │ Price      │ $500,000 │ $450,000 │ $520,000 │ $480,000 │       │    │
│  │   │ Location   │ NY       │ LA       │ Miami    │ Chicago  │       │    │
│  │   │ Beds       │ 4        │ 3        │ 4        │ 3        │       │    │
│  │   │ Baths      │ 3        │ 2        │ 3        │ 2        │       │    │
│  │   │ Sqft       │ 2500     │ 2000     │ 2800     │ 2200     │       │    │
│  │   │ Garage     │ 2        │ 1        │ 2        │ 1        │       │    │
│  │   │ Year Built │ 2020     │ 2018     │ 2021     │ 2019     │       │    │
│  │   │ ...        │ ...      │ ...      │ ...      │ ...      │       │    │
│  │   └────────────┴──────────┴──────────┴──────────┴──────────┘       │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    FEATURES COMPARISON                               │    │
│  │   [Amenities Grid with Checkmarks]                                  │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Compare Property Data Structure

```typescript
interface CompareProperty {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number;
  priceFormatted: string;
  status: 'for-sale' | 'for-rent';
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  specs: {
    beds: number;
    baths: number;
    sqft: number;
    garage: number;
    yearBuilt: number;
    lotSize?: number;
  };
  features: {
    id: string;
    name: string;
    category: string;
  }[];
  agent: {
    id: string;
    name: string;
    photo: string;
  };
  listedDate: string;
}
```

### 4.2 Comparison Table Fields

```typescript
interface ComparisonField {
  key: string;
  label: string;
  type: 'text' | 'number' | 'currency' | 'boolean' | 'list';
  highlight?: boolean; // Highlight differences
}

const comparisonFields: ComparisonField[] = [
  { key: 'image', label: 'Photo', type: 'text' },
  { key: 'price', label: 'Price', type: 'currency', highlight: true },
  { key: 'location.city', label: 'Location', type: 'text', highlight: true },
  { key: 'specs.beds', label: 'Bedrooms', type: 'number', highlight: true },
  { key: 'specs.baths', label: 'Bathrooms', type: 'number', highlight: true },
  { key: 'specs.sqft', label: 'Square Feet', type: 'number', highlight: true },
  { key: 'specs.garage', label: 'Garage', type: 'number' },
  { key: 'specs.yearBuilt', label: 'Year Built', type: 'number' },
  { key: 'specs.lotSize', label: 'Lot Size', type: 'number' },
  { key: 'status', label: 'Status', type: 'text' },
  { key: 'listedDate', label: 'Listed', type: 'text' },
];
```

### 4.3 Features Comparison Categories

```typescript
interface FeatureCategory {
  id: string;
  name: string;
  features: Feature[];
}

interface Feature {
  id: string;
  name: string;
}
```

**Feature Categories:**
| Categoría | Features |
|-----------|----------|
| Interior | Air Conditioning, Heating, Laundry, Walk-in Closets, Fireplace |
| Kitchen | Dishwasher, Microwave, Refrigerator, Stove, Disposal |
| Exterior | Balcony, Patio, Pool, Garden, Fence |
| Community | Gym, Tennis, Security, Clubhouse, Playground |
| Parking | Garage, Carport, Driveway, Street Parking |

---

## 5. Componentes UI

### 5.1 Property Selector

```typescript
interface PropertySelectorProps {
  slot: number;
  selectedProperty: CompareProperty | null;
  onSelect: (propertyId: string) => void;
  onRemove: () => void;
}
```

### 5.2 Comparison Table

```typescript
interface ComparisonTableProps {
  properties: CompareProperty[];
  fields: ComparisonField[];
  onRemoveProperty: (id: string) => void;
}
```

### 5.3 Feature Comparison Grid

```typescript
interface FeatureComparisonGridProps {
  properties: CompareProperty[];
  categories: FeatureCategory[];
}
```

**CSS Classes:**
```css
.comparison-table { /* Table container */ }
.comparison-header { /* Header row */ }
.comparison-row { /* Data row */ }
.comparison-cell { /* Table cell */ }
.highlight-diff { /* Highlight different values */ }
.feature-check { /* Check icon for features */ }
.feature-cross { /* Cross icon for missing features */ }
```

---

## 6. API Endpoints

### 6.1 Get Properties for Comparison

```
Endpoint: /api/properties/compare
Method: POST
Request Body:
{
  "propertyIds": string[]
}

Response:
{
  "properties": CompareProperty[],
  "categories": FeatureCategory[]
}
```

### 6.2 Search Properties for Comparison

```
Endpoint: /api/properties/search
Method: GET
Query Parameters:
  - q: string
  - limit: number (default: 10)

Response:
{
  "properties": SearchResult[]
}
```

---

## 7. Estructuras TypeScript

```typescript
interface ComparePageState {
  properties: CompareProperty[];
  selectedPropertyIds: string[];
  maxProperties: number; // default: 4
  isLoading: boolean;
  error: string | null;
}

interface ComparePageProps {
  initialPropertyIds?: string[];
}
```

---

## 8. Elementos Interactivos

### 8.1 Property Selection

| Action | Handler |
|--------|---------|
| Add Property | `onAddProperty(propertyId)` |
| Remove Property | `onRemoveProperty(propertyId)` |
| Search Properties | `onSearch(query)` |

### 8.2 Table Actions

| Action | Handler |
|--------|---------|
| View Property | `navigateTo('/single-v1/[id]')` |
| Contact Agent | `openContactModal(agentId)` |
| Print Comparison | `window.print()` |
| Share Comparison | `shareComparison()` |

---

## 9. Comportamiento Responsivo

| Breakpoint | Layout | Max Properties |
|------------|--------|----------------|
| Mobile | Horizontal scroll | 2 |
| Tablet | Horizontal scroll | 3 |
| Desktop | Full width table | 4 |

---

## 10. Notas Técnicas

- LocalStorage para persistir propiedades seleccionadas
- URL parameters para compartir comparación
- Print stylesheet para imprimir comparación
- Highlight automático de diferencias
- Scroll horizontal en mobile

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Comparison Features
- LocalStorage for persisting selected properties
- URL parameters for shareable comparisons
- Print-specific CSS for printing

### Key Dependencies
- react-diff-viewer-continued: ^4.0.0 for highlighting differences
- react-hot-toast: ^2.4.0 for notifications
- html2canvas: ^1.4.0 for screenshot/export

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-left` | 1 | Property selectors |
| `fade-right` | 1 | Comparison table |

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

The Compare page animations focus on property cards entrance and comparison table animations to highlight differences effectively.

#### 1. Property Selector Cards Animation

Staggered reveal animation for property selection slots.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Property selectors entrance
gsap.from('.property-selector', {
  scrollTrigger: {
    trigger: '.property-selectors-container',
    start: 'top 85%',
    once: true
  },
  opacity: 0,
  y: 50,
  scale: 0.9,
  stagger: {
    each: 0.15,
    from: 'start'
  },
  duration: 0.6,
  ease: 'back.out(1.4)'
});
```

#### 2. Comparison Table Row Animation

Sequential reveal for comparison table rows.

```javascript
// Comparison table rows
gsap.from('.comparison-row', {
  scrollTrigger: {
    trigger: '.comparison-table',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  x: -30,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power3.out'
});

// Header cells special animation
gsap.from('.comparison-header th', {
  scrollTrigger: {
    trigger: '.comparison-table',
    start: 'top 85%',
    once: true
  },
  opacity: 0,
  y: -20,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out'
});
```

#### 3. Highlight Differences Animation

Animated highlight effect for cells with different values.

```javascript
// Highlight different values animation
const highlightDifferences = () => {
  const diffCells = document.querySelectorAll('.highlight-diff');
  
  diffCells.forEach((cell, index) => {
    gsap.from(cell, {
      backgroundColor: 'rgba(255, 193, 7, 0.3)',
      scrollTrigger: {
        trigger: cell,
        start: 'top 90%',
        once: true
      },
      duration: 0.5,
      delay: index * 0.05,
      ease: 'power2.out'
    });
    
    gsap.to(cell, {
      backgroundColor: 'transparent',
      duration: 0.3,
      delay: 0.5 + index * 0.05
    });
  });
};
```

#### 4. Feature Check/Cross Icons Animation

Animated appearance for checkmarks and crosses.

```javascript
// Feature icons animation
gsap.from('.feature-check, .feature-cross', {
  scrollTrigger: {
    trigger: '.features-comparison',
    start: 'top 80%',
    once: true
  },
  scale: 0,
  opacity: 0,
  stagger: {
    each: 0.03,
    grid: [7, 4], // Adjust based on grid size
    from: 'start'
  },
  duration: 0.3,
  ease: 'back.out(2)'
});
```

#### 5. Add Property Button Animation

Interactive animation for adding new properties to comparison.

```javascript
// Add property button pulse
const addPropertyBtn = document.querySelector('.add-property-btn');

gsap.to(addPropertyBtn, {
  boxShadow: '0 0 20px rgba(74, 144, 217, 0.4)',
  scale: 1.02,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// Button hover state
addPropertyBtn.addEventListener('mouseenter', () => {
  gsap.to(addPropertyBtn, {
    scale: 1.08,
    duration: 0.2,
    ease: 'power2.out'
  });
});

addPropertyBtn.addEventListener('mouseleave', () => {
  gsap.to(addPropertyBtn, {
    scale: 1.02,
    duration: 0.2,
    ease: 'power2.out'
  });
});
```

#### 6. Remove Property Animation

Smooth exit animation when removing a property from comparison.

```javascript
// Remove property animation
const animateRemoveProperty = (selectorId) => {
  const selector = document.querySelector(`[data-selector-id="${selectorId}"]`);
  
  gsap.to(selector, {
    opacity: 0,
    scale: 0.8,
    x: 50,
    duration: 0.4,
    ease: 'power3.in',
    onComplete: () => {
      // Remove from DOM after animation
      selector.remove();
      // Animate remaining selectors to fill gap
      gsap.from('.property-selector', {
        x: 20,
        duration: 0.3,
        stagger: 0.05
      });
    }
  });
};
```

#### 7. Property Added Animation

Entrance animation when a new property is added.

```javascript
// Property added animation
const animateAddProperty = (selector) => {
  gsap.fromTo(selector, 
    {
      opacity: 0,
      scale: 0.5,
      y: -30
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }
  );
  
  // Image load animation
  gsap.from(selector.querySelector('.property-image'), {
    scale: 1.2,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'power3.out'
  });
};
```

### Complete Implementation Example

```javascript
// compare-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initCompareAnimations = () => {
  // Property selectors
  gsap.from('.property-selector', {
    scrollTrigger: { trigger: '.property-selectors-container', start: 'top 85%', once: true },
    opacity: 0, y: 50, scale: 0.9, stagger: 0.15, duration: 0.6, ease: 'back.out(1.4)'
  });

  // Comparison table header
  gsap.from('.comparison-header th', {
    scrollTrigger: { trigger: '.comparison-table', start: 'top 85%', once: true },
    opacity: 0, y: -20, stagger: 0.1, duration: 0.5, ease: 'power3.out'
  });

  // Comparison rows
  gsap.from('.comparison-row', {
    scrollTrigger: { trigger: '.comparison-table', start: 'top 80%', once: true },
    opacity: 0, x: -30, stagger: 0.05, duration: 0.4, ease: 'power3.out'
  });

  // Feature icons
  gsap.from('.feature-check, .feature-cross', {
    scrollTrigger: { trigger: '.features-comparison', start: 'top 80%', once: true },
    scale: 0, opacity: 0, stagger: 0.03, duration: 0.3, ease: 'back.out(2)'
  });

  // Add button pulse
  const addBtn = document.querySelector('.add-property-btn');
  if (addBtn) {
    gsap.to(addBtn, {
      boxShadow: '0 0 20px rgba(74, 144, 217, 0.4)',
      scale: 1.02,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
};

export const animateAddProperty = (selector) => {
  gsap.fromTo(selector,
    { opacity: 0, scale: 0.5, y: -30 },
    { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
  );
};

export const animateRemoveProperty = (selectorId) => {
  const selector = document.querySelector(`[data-selector-id="${selectorId}"]`);
  if (selector) {
    gsap.to(selector, {
      opacity: 0, scale: 0.8, x: 50, duration: 0.4, ease: 'power3.in',
      onComplete: () => selector.remove()
    });
  }
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
.property-selector { /* Property slot */ }
.comparison-table { /* Table container */ }
.comparison-header { /* Header row */ }
.comparison-row { /* Data row */ }
.comparison-cell { /* Table cell */ }
.highlight-diff { /* Highlight differences */ }
.feature-check { /* Check icon */ }
.feature-cross { /* Cross icon */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "react-diff-viewer-continued": "^4.0.0",
  "react-hot-toast": "^2.4.0",
  "html2canvas": "^1.4.0",
  "zustand": "^4.4.0",
  "@tanstack/react-query": "^5.8.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Compare Page*
*Última actualización: Abril 2025*
