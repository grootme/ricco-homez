# Banner Search v1 - Property Listing Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/banner-search-v1
- **Page Title:** Banner Search V1 || Homez - Real Estate NextJS Template
- **Template Type:** Property List Page
- **Layout Style:** Hero Banner with Search and Right Sidebar (Mortgage Calculator)

---

## 2. Page Overview

### Layout Type
The Banner Search v1 page presents a hero banner with search functionality at the top, followed by property listings with a right sidebar containing a mortgage calculator and recently viewed properties. This layout is ideal for users who want to search and calculate affordability simultaneously.

### Purpose
- Provide prominent hero banner with search functionality
- Display property listings in a grid format
- Offer mortgage calculator for affordability planning
- Show recently viewed properties for quick access

### Page Structure Overview
```
┌────────────────────────────────────────────────────────────┐
│ HEADER - Navigation with Login/Register, Add Property     │
├────────────────────────────────────────────────────────────┤
│ HERO BANNER                                                 │
│ - Background Image                                          │
│ - Title: "Find Your Dream Home"                            │
│ - Search Bar (Buy/Rent/Sold tabs + Input + Buttons)        │
├────────────────────────────────────────────────────────────┤
│ PAGE HEADER - Title: "New York Homes for Sale"            │
│              Breadcrumb: Home / For Rent                   │
├───────────────────────────────────────┬────────────────────┤
│                                       │                    │
│   PROPERTY LIST (Grid Layout)         │   RIGHT SIDEBAR    │
│                                       │                    │
│   Sort Dropdown                       │   MORTGAGE         │
│   ┌──────┐ ┌──────┐ ┌──────┐         │   CALCULATOR       │
│   │Card  │ │Card  │ │Card  │         │   - Total Amount   │
│   └──────┘ └──────┘ └──────┘         │   - Down Payment   │
│   ┌──────┐ ┌──────┐ ┌──────┐         │   - Interest Rate  │
│   │Card  │ │Card  │ │Card  │         │   - Loan Terms     │
│   └──────┘ └──────┘ └──────┘         │   - [SEARCH]       │
│                                       │                    │
│   PAGINATION                          │   RECENTLY VIEWED  │
│                                       │   - Property 1     │
│                                       │   - Property 2     │
│                                       │   - Property 3     │
├───────────────────────────────────────┴────────────────────┤
│ FOOTER - Contact, Apps, Newsletter, Links                  │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Layout Configuration

### Grid Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Hero banner + Grid with right sidebar |
| **Hero Banner Height** | ~400px |
| **Property Grid** | 3 columns |
| **Right Sidebar Width** | ~280px |
| **Card Style** | Compact property card |

### Grid CSS Configuration
```css
/* Hero Banner */
.hero-banner-search {
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main Layout */
.banner-search-layout {
  display: flex;
  gap: 30px;
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Property Grid */
.property-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Right Sidebar */
.sidebar-right {
  width: 280px;
  flex-shrink: 0;
}

@media (max-width: 1199px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 991px) {
  .banner-search-layout {
    flex-direction: column;
  }
  
  .sidebar-right {
    width: 100%;
  }
}

@media (max-width: 575px) {
  .property-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Hero Banner Data

```typescript
interface HeroBanner {
  title: string; // "Find Your Dream Home"
  background: {
    type: 'image' | 'gradient';
    src: string;
    overlay: boolean;
    overlayOpacity: number;
  };
  search: {
    tabs: Array<{
      id: 'buy' | 'rent' | 'sold';
      label: string;
      active: boolean;
    }>;
    input: {
      placeholder: string;
      value: string;
    };
    advancedButton: boolean;
    searchButton: boolean;
  };
}

// Example
const heroBanner: HeroBanner = {
  title: "Find Your Dream Home",
  background: {
    type: "image",
    src: "/images/hero/real-estate-bg.jpg",
    overlay: true,
    overlayOpacity: 0.5
  },
  search: {
    tabs: [
      { id: 'buy', label: 'Buy', active: true },
      { id: 'rent', label: 'Rent', active: false },
      { id: 'sold', label: 'Sold', active: false }
    ],
    input: {
      placeholder: "Enter an address, neighborhood, city, or ZIP code for Buy",
      value: ""
    },
    advancedButton: true,
    searchButton: true
  }
};
```

### 4.2 Mortgage Calculator Data

```typescript
interface MortgageCalculator {
  heading: string;
  fields: Array<{
    id: string;
    label: string;
    type: 'text' | 'number' | 'select';
    placeholder?: string;
    required: boolean;
    value: string | number;
  }>;
  calculateButton: {
    label: string;
    icon: string;
  };
  result?: {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  };
}

// Example
const mortgageCalculator: MortgageCalculator = {
  heading: "Mortgage Calculator",
  fields: [
    { id: 'totalAmount', label: 'Total Amount', type: 'number', required: true, value: '' },
    { id: 'downPayment', label: 'Down Payment', type: 'number', required: true, value: '' },
    { id: 'interestRate', label: 'Interest Rate', type: 'number', required: true, value: '' },
    { id: 'loanTerms', label: 'Loan Terms (Years)', type: 'number', required: true, value: '' }
  ],
  calculateButton: {
    label: 'Search',
    icon: 'search'
  }
};
```

### 4.3 Recently Viewed Data

```typescript
interface RecentlyViewed {
  heading: string;
  properties: Array<{
    id: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
  }>;
}

// Example
const recentlyViewed: RecentlyViewed = {
  heading: "Recently Viewed",
  properties: [
    { id: "rv-001", price: "$14,000 /mo", beds: 1, baths: 2, sqft: 1200 },
    { id: "rv-002", price: "$82,000 /mo", beds: 2, baths: 1, sqft: 1300 },
    { id: "rv-003", price: "$14,000 /mo", beds: 3, baths: 3, sqft: 1000 }
  ]
};
```

---

## 5. Component Breakdown

### 5.1 Hero Banner Component
```
HeroBannerSearch/
├── Background Container
│   ├── Background Image/Gradient
│   └── Overlay (optional)
├── Content Container
│   ├── Title: "Find Your Dream Home"
│   └── Search Component
│       ├── Tab Buttons (Buy, Rent, Sold)
│       ├── Search Input Field
│       ├── Advanced Button
│       └── Search Button
```

### 5.2 Mortgage Calculator Component
```
MortgageCalculator/
├── Heading: "Mortgage Calculator"
├── Form Fields
│   ├── Total Amount (number input, required)
│   ├── Down Payment (number input, required)
│   ├── Interest Rate (number input, required)
│   ├── Loan Terms (number input, required)
│   └── Property Type (dropdown, required)
├── Search Button
└── Results Display (optional)
    ├── Monthly Payment
    ├── Total Payment
    └── Total Interest
```

### 5.3 Recently Viewed Component
```
RecentlyViewed/
├── Heading: "Recently Viewed"
└── Property Items
    ├── Price: "$14,000 /mo"
    ├── Specs
    │   ├── Beds: 1
    │   ├── Baths: 2
    │   └── Sqft: 1200
    └── Click to View
```

---

## 6. Interactive Elements

### 6.1 Hero Search
| Element | Type | Behavior |
|---------|------|----------|
| **Buy Tab** | Button | Switch to buy properties search |
| **Rent Tab** | Button | Switch to rental properties search |
| **Sold Tab** | Button | Switch to sold properties search |
| **Search Input** | Text | Location/keyword search with autocomplete |
| **Advanced Button** | Button | Opens comprehensive filter modal |
| **Search Button** | Button | Executes search with current filters |

### 6.2 Mortgage Calculator
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Total Amount** | Number | Yes | Total property price |
| **Down Payment** | Number | Yes | Initial payment amount |
| **Interest Rate** | Number | Yes | Annual interest rate (%) |
| **Loan Terms** | Number | Yes | Loan duration in years |
| **Property Type** | Select | Yes | Type of property |

### 6.3 Mortgage Calculation Formula
```typescript
const calculateMortgage = (inputs: MortgageInputs) => {
  const { totalAmount, downPayment, interestRate, loanTerms } = inputs;
  
  const principal = totalAmount - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerms * 12;
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  
  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - principal;
  
  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100
  };
};
```

### 6.4 Recently Viewed Interactions
| Action | Behavior |
|--------|----------|
| **Click Property** | Navigate to property detail page |
| **Hover** | Show property preview tooltip |

### 6.5 Property Card Actions
| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | Heart | Toggle saved status |
| **Compare** | Scale | Add to comparison list |
| **Share** | Arrow | Navigate to detail page |

---

## 7. Responsive Breakpoints

### Breakpoint Configuration

| Breakpoint | Width | Property Grid | Sidebar Behavior | Hero Height |
|------------|-------|---------------|------------------|-------------|
| **Desktop XL** | > 1400px | 3 columns | Fixed 280px sidebar | 400px |
| **Desktop** | 1200-1399px | 3 columns | Fixed sidebar | 350px |
| **Tablet L** | 992-1199px | 2 columns | Fixed sidebar | 300px |
| **Tablet P** | 768-991px | 2 columns | Below main content | 250px |
| **Mobile** | < 576px | 1 column | Full width below | 200px |

### Responsive CSS
```css
/* Desktop Layout */
@media (min-width: 1200px) {
  .banner-search-layout {
    display: flex;
    gap: 30px;
  }
  
  .sidebar-right {
    width: 280px;
    position: sticky;
    top: 80px;
  }
  
  .property-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet Layout */
@media (min-width: 768px) and (max-width: 1199px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-banner-search {
    height: 300px;
  }
}

/* Mobile Layout */
@media (max-width: 767px) {
  .banner-search-layout {
    flex-direction: column;
  }
  
  .sidebar-right {
    width: 100%;
    order: -1;
  }
  
  .property-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-banner-search {
    height: 200px;
  }
  
  .hero-banner-search .title {
    font-size: 24px;
  }
}
```

---

## 8. Use Case Recommendations

### Ideal For
- **First-time homebuyers** planning affordability
- **Users comparing mortgage options**
- **Property search with financial planning**
- **Users needing quick property reference** (Recently Viewed)

### Advantages
- Integrated mortgage calculator
- Quick access to recently viewed properties
- Prominent search functionality
- Affordability planning tools

### Considerations
- Sidebar takes screen space
- Calculator requires input to be useful
- Best for financially-conscious buyers

---

## 9. Performance Considerations

### Hero Image Optimization
```typescript
const heroImageConfig = {
  priority: true, // Load hero image immediately
  sizes: [1920, 1600, 1200, 800],
  formats: ['webp', 'jpg'],
  placeholder: 'blur'
};
```

### Calculator Performance
- Debounce input changes (300ms)
- Client-side calculation (no API needed)
- Local storage for saved calculations

---

## 10. Accessibility

### ARIA Implementation
```html
<!-- Hero Search -->
<section aria-label="Property search">
  <h2>Find Your Dream Home</h2>
  <div role="tablist" aria-label="Search type">
    <button role="tab" aria-selected="true">Buy</button>
    <button role="tab" aria-selected="false">Rent</button>
    <button role="tab" aria-selected="false">Sold</button>
  </div>
  <input type="search" aria-label="Search properties" />
</section>

<!-- Mortgage Calculator -->
<form aria-label="Mortgage calculator">
  <input type="number" aria-label="Total amount" required />
  <input type="number" aria-label="Down payment" required />
  <input type="number" aria-label="Interest rate" required />
  <input type="number" aria-label="Loan terms in years" required />
  <button type="submit">Calculate</button>
</form>
```

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Navigate between elements |
| Enter | Submit forms, activate buttons |
| Escape | Close modals |

---

## 11. Technical Implementation

### Dependencies
- react-select: For filter dropdowns
- swiper: For property image carousels
- aos: For scroll animations

### Component Libraries
| Library | Version | Usage |
|---------|---------|-------|
| React Select | ^5.7.0 | Filter dropdowns |
| Swiper | ^11.0.0 | Image carousels |
| Bootstrap 5 | ^5.3.0 | Grid layout, forms |

### Mortgage Calculator Implementation
```typescript
// Mortgage Calculator Component
const MortgageCalculator = () => {
  const [inputs, setInputs] = useState({
    totalAmount: 0,
    downPayment: 0,
    interestRate: 5,
    loanTerms: 30
  });
  
  const calculate = () => {
    const principal = inputs.totalAmount - inputs.downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = inputs.loanTerms * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return { monthlyPayment, totalPayment: monthlyPayment * numPayments };
  };
  
  return <CalculatorForm inputs={inputs} setInputs={setInputs} />;
};
```

---


---

## 12. GSAP Animations

**GSAP Status:** NOT USED  
**Alternative:** AOS, WOW.js

### Hero Banner Animations
```css
.hero-banner { transition: opacity 0.5s ease; }
.search-form { transition: transform 0.3s ease; }
```

---

## 12.5 GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### GSAP Core Setup

```typescript
// lib/gsap-config.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

### Hero Banner Animation

```typescript
// components/HeroBanner.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const HeroBanner = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero background fade
      tl.from('.hero-bg', {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power2.out',
      });

      // Title animation
      tl.from('.hero-title', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Search bar entrance
      tl.from('.hero-search', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4');

      // Search tabs stagger
      tl.from('.search-tab', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return <div ref={heroRef}>{/* Hero content */}</div>;
};
```

### Property Grid Animation

```typescript
// components/PropertyGrid.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PropertyGrid = ({ properties }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.property-card', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return <div ref={gridRef}>{/* Grid content */}</div>;
};
```

### Mortgage Calculator Animation

```typescript
// components/MortgageCalculator.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const MortgageCalculator = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculator panel slide in
      gsap.from(calcRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Form fields stagger
      gsap.from('.calc-field', {
        opacity: 0,
        x: 20,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.5,
      });
    }, calcRef);

    return () => ctx.revert();
  }, []);

  return <div ref={calcRef}>{/* Calculator content */}</div>;
};
```

### Recently Viewed Animation

```typescript
// components/RecentlyViewed.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const RecentlyViewed = ({ properties }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.recent-item', {
        opacity: 0,
        x: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.4,
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return <div ref={listRef}>{/* Recently viewed content */}</div>;
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "react-input-range": "^1.3.0",
    "react-hook-form": "^7.48.0"
  }
}
```

---

## 13. Theme Variables

```css
:root {
  --color-primary: #e33e3e;
  --hero-overlay: rgba(0, 0, 0, 0.5);
  --input-bg: #ffffff;
}
```

---

## 14. NPM Dependencies

```json
{
  "dependencies": {
    "react-input-range": "^1.3.0",
    "react-hook-form": "^7.48.0"
  }
}
```

---

## 15. Related Pages

## 12. Related Pages

- [Banner Search v2](./banner-search-v2.md) - Similar without sidebar
- [Grid Full Width 3 Cols](./grid-full-3-col.md) - 3-column grid
- [Grid Full Width 1 Cols v2](./grid-full-1-col-v2.md) - Right sidebar layout

---

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
