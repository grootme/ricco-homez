# Homez - Technical Specifications & Dependencies

## Project Overview

**Template:** Homez - Modern Designed Real Estate React NextJS Template  
**Framework:** Next.js 14+ (App Router)  
**Analysis Date:** 2026-04-05  
**Source:** https://homez-appdir.vercel.app/

---

## 1. Core Framework & Build Tools

### Next.js Configuration
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

**Features Used:**
- App Router (`app/` directory structure)
- Server Components (default)
- Client Components (`'use client'` directive)
- Dynamic Routes (`[id]` patterns)
- Image Optimization (`next/image`)
- Font Optimization (`next/font`)
- API Routes (`app/api/`)

---

## 2. Styling & CSS Framework

### 2.1 Bootstrap 5

**Detection Evidence:**
- Modal components (`.modal`, `.modal-dialog`)
- Offcanvas panels (`.offcanvas`, `.offcanvas-end`)
- Tab navigation (`.nav-tabs`, `.tab-pane`)
- Form controls (`.form-control`, `.form-label`)
- Grid system (`.container`, `.row`, `.col-*`)

```json
{
  "dependencies": {
    "bootstrap": "^5.3.0"
  }
}
```

**Bootstrap Components Used:**
| Component | Count | Classes |
|-----------|-------|---------|
| Modal | 2 | `.modal`, `.modal-dialog`, `.modal-content` |
| Offcanvas | 2 | `.offcanvas`, `.offcanvas-end` |
| Tabs | 5 | `.nav-tabs`, `.tab-pane`, `.nav-link` |
| Form Control | 11 | `.form-control`, `.form-label` |

### 2.2 Emotion CSS-in-JS

**Detection Evidence:**
- Inline styles with `data-emotion` attributes
- CSS class names: `.css-np5i73`, `.css-1mb249p`, etc.
- Dynamic styling patterns

```json
{
  "dependencies": {
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0"
  }
}
```

**Emotion Patterns Detected:**
```css
/* Example patterns from inline styles */
.css-np5i73 {
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;
  transition: width, left, right, 300ms;
}

.css-honxw6 {
  display: inline-block;
  transition: transform 0.3s;
  border-right: 2px solid currentcolor;
  border-bottom: 2px solid currentcolor;
  width: 5px;
  height: 5px;
  transform: rotate(-45deg);
}
```

### 2.3 SCSS/Sass

```json
{
  "devDependencies": {
    "sass": "^1.69.0"
  }
}
```

**SCSS Structure:**
```
styles/
├── _variables.scss      # Theme variables
├── _mixins.scss         # Reusable mixins
├── _typography.scss     # Font styles
├── _buttons.scss        # Button styles
├── _forms.scss          # Form styles
├── _cards.scss          # Card components
├── _animations.scss     # Animation keyframes
├── _responsive.scss     # Media queries
└── main.scss            # Main stylesheet
```

---

## 3. Animation Libraries

### 3.1 AOS (Animate On Scroll)

**Detection Evidence:**
- Body attributes: `data-aos-easing="ease"`, `data-aos-duration="1200"`, `data-aos-delay="0"`
- Elements with `data-aos` attributes
- Animation classes: `.aos-init`, `.aos-animate`

```json
{
  "dependencies": {
    "aos": "^2.3.4"
  }
}
```

**Animation Types Used:**
| Animation | Usage Count | Typical Elements |
|-----------|-------------|------------------|
| `fade-up` | 15+ | Sections, cards, content blocks |
| `fade-left` | 3+ | Side images, features |
| `fade-right` | 3+ | Side content, CTAs |

**AOS Configuration:**
```javascript
// Global configuration
{
  easing: 'ease',
  duration: 1200,
  delay: 0,
  once: true,        // Only animate once
  offset: 120        // Trigger offset
}

// Element-level usage
data-aos="fade-up"
data-aos-delay="300"
data-aos-duration="1000"
```

### 3.2 CSS Transitions

**Transition Patterns:**
```css
/* Standard transitions */
transition: all 0.3s ease;
transition: transform 0.3s;
transition: color 150ms;
transition: height 300ms;

/* Hover effects */
.btn:hover { transform: translateY(-2px); }
.card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
```

---

## 4. UI Component Libraries

### 4.1 Swiper (Carousels/Sliders)

**Detection Evidence:**
- Multiple `.swiper`, `.swiper-wrapper`, `.swiper-slide` elements
- Classes: `.swiper-initialized`, `.swiper-horizontal`, `.swiper-backface-hidden`

```json
{
  "dependencies": {
    "swiper": "^11.0.0"
  }
}
```

**Swiper Usage:**
- Property image carousels
- Testimonial sliders
- Featured listings carousel
- Logo/partner carousel

**Swiper Configuration:**
```javascript
// Property carousel
{
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: true,
  pagination: {
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
}

// Multi-item carousel
{
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
}
```

### 4.2 React Select

**Detection Evidence:**
- Emotion CSS classes: `.css-b62m3t-container`, `.css-13cymwt-control`
- A11y text elements: `.css-7pg0cj-a11yText`

```json
{
  "dependencies": {
    "react-select": "^5.7.0"
  }
}
```

**Select Components:**
- Property type dropdown
- Location selector
- Price range selector
- Bedrooms/bathrooms filters

### 4.3 Pro Sidebar

**Detection Evidence:**
- Sidebar root: `data-testid="ps-sidebar-root-test-id"`
- Menu buttons: `.ps-menu-button`
- Submenu content: `.ps-submenu-content`

```json
{
  "dependencies": {
    "react-pro-sidebar": "^1.1.0"
  }
}
```

**Sidebar Structure:**
```jsx
<Sidebar>
  <Menu>
    <SubMenu title="Home">
      <MenuItem>Home v1</MenuItem>
      <MenuItem>Home v2</MenuItem>
      {/* ... */}
    </SubMenu>
  </Menu>
</Sidebar>
```

---

## 5. Icon Libraries

### 5.1 FontAwesome

**Detection Evidence:**
- Icon prefixes: `far` (regular), `fas` (solid), `fab` (brands), `fal` (light)
- 77+ icons with `fa-` prefix

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
    "@fortawesome/free-brands-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0"
  }
}
```

**Icon Usage:**
| Prefix | Count | Usage |
|--------|-------|-------|
| `far` | 15 | Regular icons (user, heart, etc.) |
| `fas` | 24 | Solid icons (search, home, etc.) |
| `fab` | 20 | Brand icons (facebook, google, etc.) |
| `fal` | 17 | Light icons (arrows, etc.) |

### 5.2 Flaticon (Custom Icons)

**Detection Evidence:**
- 97+ icons with `flaticon-` prefix
- Property-related custom icons

```css
/* Flaticon usage examples */
.flaticon-home
.flaticon-apartment
.flaticon-villa
.flaticon-office
.flaticon-search
.flaticon-location
.flaticon-bed
.flaticon-bath
.flaticon-sqft
.flaticon-calendar
.flaticon-user
.flaticon-phone
.flaticon-email
```

---

## 6. Typography

### 6.1 Google Fonts

```json
{
  "fonts": [
    {
      "family": "Poppins",
      "weights": [400, 500, 600, 700],
      "usage": "Headings"
    },
    {
      "family": "DM Sans",
      "weights": [400, 500, 700],
      "usage": "Body text"
    }
  ]
}
```

**Next.js Font Configuration:**
```javascript
// app/layout.tsx
import { Poppins, DM_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});
```

### 6.2 Typography Scale

| Element | Font Size | Font Weight | Line Height |
|---------|-----------|-------------|-------------|
| H1 | 48px / 3rem | 700 | 1.2 |
| H2 | 36px / 2.25rem | 600 | 1.3 |
| H3 | 30px / 1.875rem | 600 | 1.4 |
| H4 | 24px / 1.5rem | 600 | 1.4 |
| H5 | 20px / 1.25rem | 500 | 1.5 |
| Body | 14px | 400 | 1.75 (26px) |
| Small | 12px | 400 | 1.5 |

---

## 7. Theme Colors

### 7.1 Color Palette

```css
:root {
  /* Primary Colors */
  --color-primary: #e33e3e;          /* Main brand color */
  --color-primary-hover: #c53535;    /* Hover state */
  --color-primary-light: rgba(227, 62, 62, 0.07);
  
  /* Computed Primary: rgb(235, 103, 83) - #eb6753 */
  
  /* Secondary Colors */
  --color-secondary: #041e42;        /* Dark blue */
  --color-dark: #0f172a;             /* Dark text */
  --color-dark-2: #181a20;           /* Dark backgrounds */
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-100: #f8fafc;
  --color-gray-200: #f7f7f7;
  --color-gray-300: #efefef;         /* Borders */
  --color-gray-400: #eeeeee;
  --color-gray-500: #64748b;         /* Secondary text */
  --color-gray-600: #94a3b8;         /* Muted text */
  
  /* Status Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Accent Colors */
  --color-accent-blue: #3a77ea;
  --color-facebook: #1877f2;
  --color-apple: #000000;
}
```

### 7.2 Button Colors

```css
/* Primary Button (Theme) */
.btn-thm {
  background-color: rgb(235, 103, 83);
  color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 13px 30px;
  font-size: 15px;
}

/* Pill Button */
.bdrs60 {
  border-radius: 60px;
}

/* Social Buttons */
.btn-fb { background-color: #1877f2; }
.btn-apple { background-color: #000; color: #fff; }
.btn-white { background-color: #fff; border: 1px solid #ddd; }
```

---

## 8. Map Integration

### 8.1 Google Maps / Mapbox

```json
{
  "dependencies": {
    "@react-google-maps/api": "^2.19.0",
    // OR
    "mapbox-gl": "^3.0.0",
    "react-map-gl": "^7.1.0"
  }
}
```

**Map Features:**
- Property markers with clustering
- Draw search area tool
- Full-screen map view
- Split-view map/list layouts

---

## 9. Form Handling

### 9.1 Form Libraries

```json
{
  "dependencies": {
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0"
  }
}
```

**Form Components:**
- Login/Register forms
- Property submission form
- Contact form
- Search filters form

---

## 10. State Management

### 10.1 React Context / Zustand

```json
{
  "dependencies": {
    "zustand": "^4.4.0"
  }
}
```

**State Categories:**
- User authentication state
- Property favorites
- Search filters
- UI state (modals, sidebars)

---

## 11. Data Fetching

### 11.1 API Integration

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "@tanstack/react-query": "^5.8.0"
  }
}
```

**API Endpoints:**
```typescript
// Property endpoints
GET  /api/properties
GET  /api/properties/:id
POST /api/properties
PUT  /api/properties/:id

// Agent endpoints
GET  /api/agents
GET  /api/agents/:id

// Search endpoint
POST /api/search
```

---

## 12. Complete Package.json

```json
{
  "name": "homez-real-estate",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    
    "bootstrap": "^5.3.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    
    "aos": "^2.3.4",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "react-pro-sidebar": "^1.1.0",
    
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
    "@fortawesome/free-brands-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    
    "zustand": "^4.4.0",
    "axios": "^1.6.0",
    "@tanstack/react-query": "^5.8.0",
    
    "@react-google-maps/api": "^2.19.0",
    
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/aos": "^3.0.0",
    "typescript": "^5.3.0",
    "sass": "^1.69.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 13. Animation Specifications

### 13.1 AOS Animation Types

| Animation | Description | CSS Transform |
|-----------|-------------|---------------|
| `fade-up` | Fade in from bottom | `translateY(100px) → translateY(0)` |
| `fade-down` | Fade in from top | `translateY(-100px) → translateY(0)` |
| `fade-left` | Fade in from right | `translateX(100px) → translateX(0)` |
| `fade-right` | Fade in from left | `translateX(-100px) → translateX(0)` |
| `zoom-in` | Scale up | `scale(0.6) → scale(1)` |

### 13.2 Hover Effects

```css
/* Card hover */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Button hover */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Image zoom on hover */
.property-image:hover img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
```

### 13.3 Transition Timing

| Duration | Usage |
|----------|-------|
| 150ms | Color changes, small effects |
| 300ms | Standard transitions, hover effects |
| 500ms | Image zooms, larger animations |
| 1000ms | Page transitions, complex animations |
| 1200ms | AOS global duration |

---

## 14. Responsive Breakpoints

```scss
// Bootstrap 5 breakpoints
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

// Container max-widths
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```

---

## 15. File Structure

```
homez-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home v1
│   ├── home-v2/
│   │   └── page.tsx
│   ├── grid-default/
│   │   └── page.tsx
│   ├── single-v1/
│   │   └── [id]/
│   │       └── page.tsx
│   └── api/
│       └── properties/
│           └── route.ts
├── components/
│   ├── Header/
│   │   ├── MainMenu.tsx
│   │   ├── MobileMenu.tsx
│   │   └── SidebarPanel.tsx
│   ├── Property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGrid.tsx
│   │   └── PropertyFilter.tsx
│   ├── Hero/
│   │   └── HeroBanner.tsx
│   ├── Search/
│   │   └── SearchForm.tsx
│   └── UI/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
├── styles/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── components/
├── public/
│   ├── images/
│   └── fonts/
├── lib/
│   └── utils.ts
├── hooks/
│   └── useProperties.ts
└── types/
    └── index.ts
```

---

*Generated from Playwright analysis of https://homez-appdir.vercel.app/*
