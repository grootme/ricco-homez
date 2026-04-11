# Pricing Page - Documentation

## 1. Identificación

- **Nombre de la Página:** Pricing
- **URL:** `https://homez-appdir.vercel.app/pricing`
- **Título de Página:** `Pricing || Homez - Real Estate NextJS Template`
- **Tipo de Página:** Pricing Plans Page

---

## 2. Descripción General

La página Pricing muestra los planes de suscripción disponibles para usuarios (agentes, agencias) que desean listar propiedades en la plataforma. Incluye una comparación de planes, características incluidas, precios y un FAQ de precios.

---

## 3. Estructura de la Página

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HEADER NAVIGATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        PRICING HEADER                                │    │
│  │   Title | Subtitle | Toggle: Monthly / Yearly                        │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    PRICING CARDS                                     │    │
│  │                                                                       │    │
│  │   ┌──────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────┐       │    │
│  │   │  FREE    │  │   BASIC      │  │  PRO     │  │ PREMIUM  │       │    │
│  │   │  $0/mo   │  │   $29/mo     │  │  $59/mo  │  │ $99/mo   │       │    │
│  │   │          │  │  [Popular]   │  │          │  │          │       │    │
│  │   │ Features │  │  Features    │  │ Features │  │ Features │       │    │
│  │   │ [Get]    │  │  [Subscribe] │  │ [Get]    │  │ [Get]    │       │    │
│  │   └──────────┘  └──────────────┘  └──────────┘  └──────────┘       │    │
│  │                                                                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    FEATURES COMPARISON TABLE                         │    │
│  │   Detailed feature comparison across all plans                       │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    TESTIMONIALS                                      │    │
│  │   Customer testimonials about the pricing plans                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    PRICING FAQ                                       │    │
│  │   Frequently asked questions about pricing                           │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    CALL TO ACTION                                    │    │
│  │   "Ready to get started?" | CTA Button                              │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                FOOTER                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Contenido de Datos Detallado

### 4.1 Pricing Plan Data Structure

```typescript
interface PricingPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  currency: string;
  period: 'monthly' | 'yearly';
  isPopular: boolean;
  features: PricingFeature[];
  limitations: string[];
  cta: {
    text: string;
    link: string;
  };
}
```

### 4.2 Sample Pricing Plans

```typescript
const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    slug: 'free',
    description: 'Perfect for getting started',
    price: { monthly: 0, yearly: 0 },
    currency: 'USD',
    isPopular: false,
    features: [
      { id: '1', name: '1 Property Listing', included: true },
      { id: '2', name: 'Basic Profile', included: true },
      { id: '3', name: 'Email Support', included: true },
      { id: '4', name: 'Standard Visibility', included: true },
      { id: '5', name: 'Analytics Dashboard', included: false },
      { id: '6', name: 'Featured Listings', included: false },
    ],
    limitations: ['Limited to 1 active listing'],
    cta: { text: 'Get Started', link: '/register' }
  },
  {
    id: 'basic',
    name: 'Basic',
    slug: 'basic',
    description: 'Great for individual agents',
    price: { monthly: 29, yearly: 290 },
    currency: 'USD',
    isPopular: true,
    features: [
      { id: '1', name: '5 Property Listings', included: true },
      { id: '2', name: 'Enhanced Profile', included: true },
      { id: '3', name: 'Priority Email Support', included: true },
      { id: '4', name: 'High Visibility', included: true },
      { id: '5', name: 'Analytics Dashboard', included: true },
      { id: '6', name: 'Featured Listings', included: false },
    ],
    limitations: ['5 active listings max'],
    cta: { text: 'Subscribe Now', link: '/checkout?plan=basic' }
  },
  {
    id: 'pro',
    name: 'Professional',
    slug: 'pro',
    description: 'Ideal for serious agents',
    price: { monthly: 59, yearly: 590 },
    currency: 'USD',
    isPopular: false,
    features: [
      { id: '1', name: '25 Property Listings', included: true },
      { id: '2', name: 'Premium Profile', included: true },
      { id: '3', name: 'Phone & Email Support', included: true },
      { id: '4', name: 'Maximum Visibility', included: true },
      { id: '5', name: 'Advanced Analytics', included: true },
      { id: '6', name: '5 Featured Listings', included: true },
    ],
    limitations: [],
    cta: { text: 'Get Pro', link: '/checkout?plan=pro' }
  },
  {
    id: 'premium',
    name: 'Premium',
    slug: 'premium',
    description: 'For agencies and teams',
    price: { monthly: 99, yearly: 990 },
    currency: 'USD',
    isPopular: false,
    features: [
      { id: '1', name: 'Unlimited Listings', included: true },
      { id: '2', name: 'Agency Profile', included: true },
      { id: '3', name: '24/7 Priority Support', included: true },
      { id: '4', name: 'Premium Placement', included: true },
      { id: '5', name: 'Custom Analytics', included: true },
      { id: '6', name: 'Unlimited Featured', included: true },
    ],
    limitations: [],
    cta: { text: 'Go Premium', link: '/checkout?plan=premium' }
  }
];
```

### 4.3 Feature Comparison Table

```typescript
interface ComparisonFeature {
  name: string;
  category: string;
  plans: {
    [planId: string]: boolean | string | number;
  };
}

interface FeatureComparisonTable {
  categories: {
    name: string;
    features: ComparisonFeature[];
  }[];
}
```

---

## 5. Componentes UI

### 5.1 Pricing Card

```typescript
interface PricingCardProps {
  plan: PricingPlan;
  period: 'monthly' | 'yearly';
  onSelect: (planId: string) => void;
}
```

**CSS Classes:**
```css
.pricing-card { /* Card container */ }
.pricing-card-popular { /* Popular plan highlight */ }
.pricing-header { /* Plan name & price */ }
.pricing-price { /* Price display */ }
.pricing-period { /* Monthly/Yearly label */ }
.pricing-features { /* Features list */ }
.pricing-feature { /* Individual feature */ }
.pricing-feature-included { /* Check icon */ }
.pricing-feature-excluded { /* Cross icon */ }
.pricing-cta { /* CTA button */ }
```

### 5.2 Period Toggle

```typescript
interface PeriodToggleProps {
  period: 'monthly' | 'yearly';
  onChange: (period: 'monthly' | 'yearly') => void;
  yearlyDiscount?: number; // e.g., 17% discount
}
```

---

## 6. API Endpoints

### 6.1 Get Pricing Plans

```
Endpoint: /api/pricing/plans
Method: GET

Response:
{
  "plans": PricingPlan[],
  "featureComparison": FeatureComparisonTable,
  "testimonials": Testimonial[],
  "faq": FAQ[]
}
```

### 6.2 Subscribe to Plan

```
Endpoint: /api/subscriptions
Method: POST
Request Body:
{
  "planId": string,
  "period": 'monthly' | 'yearly',
  "paymentMethodId": string
}

Response:
{
  "success": true,
  "subscription": Subscription,
  "redirectUrl": string
}
```

---

## 7. Estructuras TypeScript

```typescript
interface PricingPageState {
  plans: PricingPlan[];
  selectedPeriod: 'monthly' | 'yearly';
  featureComparison: FeatureComparisonTable;
  isLoading: boolean;
}

interface PricingFeature {
  id: string;
  name: string;
  included: boolean;
  value?: string;
}
```

---

## 8. Elementos Interactivos

### 8.1 Period Toggle

| Estado | Mensaje |
|--------|---------|
| Monthly | "Billed monthly" |
| Yearly | "Save 17% with yearly billing" |

### 8.2 CTA Actions

| Plan | Action |
|------|--------|
| Free | Redirect to Register |
| Paid | Redirect to Checkout |

---

## 9. Notas Técnicas

- Descuento anual mostrado en toggle
- Plan "Popular" destacado visualmente
- Animación de precio al cambiar período
- Stripe integration para pagos
- Trial period de 14 días para planes de pago

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Payment Integration
- Stripe for subscription billing
- Period toggle with discount calculation
- Trial period support

### Key Dependencies
- @stripe/stripe-js: ^2.2.0 for Stripe
- @stripe/react-stripe-js: ^2.4.0 for payment UI
- react-hot-toast: ^2.4.0 for notifications
- framer-motion: ^10.16.0 for animations

---

---

## GSAP Animations Analysis

### Animation Library Used
**Note:** This template uses **AOS (Animate on Scroll)** instead of GSAP for scroll-based animations.

### AOS Animations Detected

| Animation Type | Count | Elements |
|---------------|-------|----------|
| `fade-up` | 3 | Header, pricing cards, FAQ |
| `fade-left` | 1 | Feature comparison |
| `fade-right` | 1 | Testimonials |
| `aos-delay="100"` | 1 | First stagger |
| `aos-delay="200"` | 1 | Second stagger |
| `aos-delay="300"` | 1 | Third stagger |

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

The Pricing page animations focus on card reveals, price transitions, and interactive hover effects.

#### 1. Pricing Cards Entrance Animation

Staggered reveal animation for pricing plan cards.

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Pricing cards entrance
gsap.from('.pricing-card', {
  scrollTrigger: {
    trigger: '.pricing-cards-container',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  y: 60,
  scale: 0.9,
  stagger: {
    each: 0.15,
    from: 'center'
  },
  duration: 0.7,
  ease: 'back.out(1.4)'
});
```

#### 2. Popular Plan Highlight Animation

Special attention animation for the recommended plan.

```javascript
// Popular plan highlight
const popularCard = document.querySelector('.pricing-card-popular');

if (popularCard) {
  gsap.to(popularCard, {
    boxShadow: '0 20px 50px rgba(74, 144, 217, 0.25)',
    y: -10,
    duration: 0.5,
    ease: 'power3.out'
  });
  
  // Subtle pulse for "Popular" badge
  const badge = popularCard.querySelector('.popular-badge');
  gsap.to(badge, {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}
```

#### 3. Price Toggle Animation

Smooth transition between monthly and yearly prices.

```javascript
// Price transition animation
const animatePriceChange = (card, newPrice, period) => {
  const priceEl = card.querySelector('.pricing-price');
  const periodEl = card.querySelector('.pricing-period');
  
  const tl = gsap.timeline();
  
  tl.to(priceEl, {
    opacity: 0,
    y: -10,
    scale: 0.9,
    duration: 0.2,
    ease: 'power2.in'
  })
  .call(() => {
    priceEl.textContent = newPrice;
    periodEl.textContent = period;
  })
  .to(priceEl, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.3,
    ease: 'back.out(1.7)'
  });
  
  return tl;
};

// Toggle switch animation
const toggle = document.querySelector('.period-toggle');
let isYearly = false;

toggle.addEventListener('click', () => {
  isYearly = !isYearly;
  
  gsap.to(toggle, {
    x: isYearly ? 30 : 0,
    duration: 0.3,
    ease: 'power2.out'
  });
  
  // Animate all prices
  document.querySelectorAll('.pricing-card').forEach((card, index) => {
    setTimeout(() => {
      const newPrice = isYearly ? card.dataset.yearlyPrice : card.dataset.monthlyPrice;
      const period = isYearly ? '/year' : '/month';
      animatePriceChange(card, newPrice, period);
    }, index * 100);
  });
});
```

#### 4. Feature List Animation

Sequential reveal for feature items.

```javascript
// Feature checkmarks animation
gsap.from('.pricing-feature', {
  scrollTrigger: {
    trigger: '.pricing-card',
    start: 'top 60%',
    once: true
  },
  opacity: 0,
  x: -20,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power3.out'
});

// Check icon pop animation
gsap.from('.pricing-feature-included .check-icon', {
  scrollTrigger: {
    trigger: '.pricing-features',
    start: 'top 70%',
    once: true
  },
  scale: 0,
  stagger: 0.03,
  duration: 0.3,
  ease: 'back.out(2)'
});
```

#### 5. CTA Button Animation

Interactive hover and click animations.

```javascript
// CTA button hover effect
document.querySelectorAll('.pricing-cta-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.05,
      y: -2,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      duration: 0.2,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      y: 0,
      boxShadow: 'none',
      duration: 0.2,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('click', () => {
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.in',
      yoyo: true,
      repeat: 1
    });
  });
});
```

#### 6. Comparison Table Animation

Animated reveal for feature comparison table.

```javascript
// Comparison table animation
const comparisonTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.features-comparison-table',
    start: 'top 75%',
    once: true
  }
});

comparisonTl
  .from('.comparison-table-header', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power3.out'
  })
  .from('.comparison-table-row', {
    opacity: 0,
    x: -30,
    stagger: 0.05,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.2');
```

#### 7. Testimonials Slider Animation

Animated testimonial carousel.

```javascript
// Testimonial card animation
gsap.from('.testimonial-card', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 80%',
    once: true
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  stagger: 0.2,
  duration: 0.6,
  ease: 'power3.out'
});

// Quote icon animation
gsap.from('.quote-icon', {
  scrollTrigger: {
    trigger: '.testimonial-card',
    start: 'top 70%',
    once: true
  },
  scale: 0,
  rotation: -45,
  duration: 0.5,
  ease: 'back.out(2)'
});
```

### Complete Implementation Example

```javascript
// pricing-animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initPricingAnimations = () => {
  // Pricing cards entrance
  gsap.from('.pricing-card', {
    scrollTrigger: { trigger: '.pricing-cards-container', start: 'top 80%', once: true },
    opacity: 0, y: 60, scale: 0.9, stagger: { each: 0.15, from: 'center' }, duration: 0.7, ease: 'back.out(1.4)'
  });

  // Popular plan highlight
  const popularCard = document.querySelector('.pricing-card-popular');
  if (popularCard) {
    gsap.to(popularCard, { boxShadow: '0 20px 50px rgba(74, 144, 217, 0.25)', y: -10, duration: 0.5 });
    const badge = popularCard.querySelector('.popular-badge');
    if (badge) {
      gsap.to(badge, { scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }
  }

  // Feature checkmarks
  gsap.from('.pricing-feature-included .check-icon', {
    scrollTrigger: { trigger: '.pricing-features', start: 'top 70%', once: true },
    scale: 0, stagger: 0.03, duration: 0.3, ease: 'back.out(2)'
  });

  // Comparison table
  const compTl = gsap.timeline({ scrollTrigger: { trigger: '.features-comparison-table', start: 'top 75%', once: true } });
  compTl
    .from('.comparison-table-header', { opacity: 0, y: -20, duration: 0.5 })
    .from('.comparison-table-row', { opacity: 0, x: -30, stagger: 0.05, duration: 0.4 }, '-=0.2');

  // Initialize interactions
  initPricingInteractions();
};

const initPricingInteractions = () => {
  // CTA buttons
  document.querySelectorAll('.pricing-cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, y: -2, duration: 0.2 }));
    btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, y: 0, duration: 0.2 }));
  });

  // Toggle switch
  const toggle = document.querySelector('.period-toggle');
  toggle?.addEventListener('click', () => {
    gsap.to(toggle, { x: toggle.classList.toggle('yearly') ? 30 : 0, duration: 0.3, ease: 'power2.out' });
  });
};

export const animatePriceChange = (card, newPrice, period) => {
  const priceEl = card.querySelector('.pricing-price');
  const periodEl = card.querySelector('.pricing-period');
  
  const tl = gsap.timeline();
  tl.to(priceEl, { opacity: 0, y: -10, scale: 0.9, duration: 0.2, ease: 'power2.in' })
    .call(() => { priceEl.textContent = newPrice; periodEl.textContent = period; })
    .to(priceEl, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
  return tl;
};
```

---

## Theme Variables & CSS Analysis

### Color System (Utility Classes)
| Class | Usage | Description |
|-------|-------|-------------|
| `bgc-white` | Background | White background |
| `text-white` | Text | White text color |
| `btn-thm` | Button | Primary theme button |

### Component Classes
```css
.pricing-card { /* Card container */ }
.pricing-card-popular { /* Popular plan highlight */ }
.pricing-header { /* Plan name & price */ }
.pricing-features { /* Features list */ }
.pricing-cta { /* CTA button */ }
.period-toggle { /* Monthly/Yearly switch */ }
```

---

## NPM Libraries Required

```json
{
  "aos": "^2.3.4",
  "@stripe/stripe-js": "^2.2.0",
  "@stripe/react-stripe-js": "^2.4.0",
  "framer-motion": "^10.16.0",
  "react-hot-toast": "^2.4.0",
  "zustand": "^4.4.0"
}
```

---

*Documentación generada para Homez Real Estate NextJS Template - Pricing Page*
*Última actualización: Abril 2025*
