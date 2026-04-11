# Home v2 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v2-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home v2 - Engineering Specification

## 1. Identification

| Property | Value |
|----------|-------|
| **Name** | Home v2 - Alternative Hero Design |
| **URL** | `https://homez-appdir.vercel.app/home-v2` |
| **Route** | `/home-v2` |
| **Version** | 2 |
| **Template Type** | Homepage |
| **Page Title** | `Home v2 \|\| Homez - Real Estate NextJS Template` |
| **Framework** | Next.js 14+ (App Router) |
| **Component Path** | `app/(home)/home-v2/page.tsx` |

---

## 2. Page Structure

### Main Sections Order
```
1. Header (nav-homepage-style at-home2)
2. Hero Section with Split Layout
3. Featured Properties Grid
4. Services Section
5. Popular Areas Section
6. Featured Agents Section
7. Blog Preview Section
8. CTA Section
9. Footer
```

### Layout Configuration

```typescript
interface PageLayout {
  wrapper: {
    className: "wrapper ovh";
  };
  header: {
    className: "header-nav nav-homepage-style at-home2 main-menu";
    sticky: true;
    transparent: true;
    containerMaxWidth: "maxw1600"; // Key difference from v1
  };
  hero: {
    variant: "split-layout";
    containerMaxWidth: "maxw1600";
  };
}
```

### Key Differences from Home v1

| Feature | Home v1 | Home v2 |
|---------|---------|---------|
| Header Container | Standard | maxw1600 constraint |
| Header Class | nav-homepage-style | nav-homepage-style at-home2 |
| Phone Display | Not in header | Visible in header |
| Hero Layout | Full-width overlay | Split layout variant |
| Button Style | Standard | Same |
| Search Form | Full-width integrated | Compact inline |

---

## 3. Detailed Data Content

### 3.1 Header Navigation Data (Enhanced)

```typescript
interface HeaderNavigationV2 extends HeaderNavigation {
  // Inherits from v1, with additions:
  contactPhone: {
    number: string;
    display: string;
    icon: string;
    href: string;
  };
}

// Home v2 Specific Header Data
const headerV2Data: HeaderNavigationV2 = {
  logo: {
    light: "/images/header-logo.svg",
    dark: "/images/header-logo2.svg",
    width: 138,
    height: 44,
    alt: "Header Logo"
  },
  contactPhone: {
    number: "+012305094502",
    display: "2 911 098 7654",
    icon: "far fa-phone fz16 me-2",
    href: "tel:+012305094502"
  },
  menuItems: [
    // Same structure as v1, with active state for v2
    {
      id: "home",
      label: "Home",
      href: "#",
      isActive: true,
      children: [
        { id: "home-1", label: "Home v1", href: "/", isActive: false },
        { id: "home-2", label: "Home v2", href: "/home-v2", isActive: true },
        // ... other home variants
      ]
    }
    // ... other menu items
  ],
  userActions: {
    login: {
      label: "Login / Register",
      icon: "far fa-user-circle fz16 me-2",
      modalTarget: "#loginSignupModal"
    },
    addProperty: {
      label: "Add Property",
      href: "/dashboard-add-property",
      className: "ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4",
      icon: "fal fa-arrow-right-long"
    },
    sidebar: {
      target: "#SidebarPanel",
      icon: "/images/icon/nav-icon-white.svg"
    }
  }
};
```

### 3.2 Hero Section Data (Split Layout)

```typescript
interface HeroSectionV2 {
  variant: "split-layout";
  container: {
    className: "container maxw1600";
  };
  leftContent: {
    title: string;
    subtitle: string;
    description: string;
    statistics: HeroStatistic[];
  };
  rightContent: {
    backgroundImage: string;
    overlay: boolean;
  };
  searchForm: SearchFormData;
}

interface HeroStatistic {
  value: string | number;
  label: string;
  icon?: string;
}

// Example Hero V2 Data
const heroV2Data: HeroSectionV2 = {
  variant: "split-layout",
  container: {
    className: "container maxw1600"
  },
  leftContent: {
    title: "Find Your Perfect Home",
    subtitle: "Discover Your Dream Property",
    description: "We help you find the perfect home that matches your lifestyle and budget.",
    statistics: [
      { value: "15K+", label: "Active Listings", icon: "flaticon-home" },
      { value: "50K+", label: "Happy Customers", icon: "flaticon-user" },
      { value: "100+", label: "Expert Agents", icon: "flaticon-agent" }
    ]
  },
  rightContent: {
    backgroundImage: "/images/hero/hero-v2-bg.jpg",
    overlay: true
  },
  searchForm: {
    fields: [
      {
        name: "location",
        label: "Location",
        type: "text",
        placeholder: "Enter city, area or zip",
        required: false
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        placeholder: "All Types",
        options: [
          { value: "all", label: "All Types" },
          { value: "house", label: "House" },
          { value: "apartment", label: "Apartment" },
          { value: "villa", label: "Villa" },
          { value: "condo", label: "Condo" }
        ],
        required: false
      },
      {
        name: "priceRange",
        label: "Price Range",
        type: "select",
        placeholder: "Any Price",
        options: [
          { value: "any", label: "Any Price" },
          { value: "0-100000", label: "$0 - $100K" },
          { value: "100000-300000", label: "$100K - $300K" },
          { value: "300000-500000", label: "$300K - $500K" },
          { value: "500000+", label: "$500K+" }
        ],
        required: false
      },
      {
        name: "bedrooms",
        label: "Bedrooms",
        type: "select",
        placeholder: "Any",
        options: [
          { value: "any", label: "Any" },
          { value: "1", label: "1+" },
          { value: "2", label: "2+" },
          { value: "3", label: "3+" },
          { value: "4", label: "4+" },
          { value: "5", label: "5+" }
        ],
        required: false
      }
    ],
    submitButton: {
      label: "Search",
      icon: "fal fa-search",
      className: "ud-btn btn-thm"
    }
  }
};
```

### 3.3 Services Section Data

```typescript
interface Service {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

// Services Data for Home v2
const servicesData: Service[] = [
  {
    id: 1,
    icon: "flaticon-home",
    title: "Wide Range of Properties",
    description: "Explore our extensive collection of properties including apartments, houses, villas, and commercial spaces.",
    href: "/properties",
    className: ""
  },
  {
    id: 2,
    icon: "flaticon-agent",
    title: "Expert Agents",
    description: "Work with our experienced real estate agents who have in-depth knowledge of local markets.",
    href: "/agents",
    className: ""
  },
  {
    id: 3,
    icon: "flaticon-trust",
    title: "Trusted by Thousands",
    description: "Join thousands of satisfied customers who found their dream homes through our platform.",
    href: "/testimonials",
    className: ""
  },
  {
    id: 4,
    icon: "flaticon-support",
    title: "24/7 Customer Support",
    description: "Get assistance anytime with our dedicated customer support team available around the clock.",
    href: "/contact",
    className: ""
  }
];
```

### 3.4 Popular Areas Section Data

```typescript
interface PopularArea {
  id: string | number;
  name: string;
  image: string;
  propertyCount: number;
  href: string;
  description?: string;
  featured?: boolean;
}

// Popular Areas Data
const popularAreasData: PopularArea[] = [
  {
    id: 1,
    name: "Los Angeles",
    image: "/images/areas/los-angeles.jpg",
    propertyCount: 245,
    href: "/properties?location=los-angeles",
    description: "The entertainment capital of the world",
    featured: true
  },
  {
    id: 2,
    name: "New York",
    image: "/images/areas/new-york.jpg",
    propertyCount: 312,
    href: "/properties?location=new-york",
    description: "The city that never sleeps",
    featured: true
  },
  {
    id: 3,
    name: "Miami",
    image: "/images/areas/miami.jpg",
    propertyCount: 178,
    href: "/properties?location=miami",
    description: "Beautiful beaches and vibrant culture",
    featured: false
  },
  {
    id: 4,
    name: "San Francisco",
    image: "/images/areas/san-francisco.jpg",
    propertyCount: 156,
    href: "/properties?location=san-francisco",
    description: "Tech hub with stunning views",
    featured: false
  },
  {
    id: 5,
    name: "Chicago",
    image: "/images/areas/chicago.jpg",
    propertyCount: 189,
    href: "/properties?location=chicago",
    description: "Architecture and deep-dish pizza",
    featured: false
  },
  {
    id: 6,
    name: "Seattle",
    image: "/images/areas/seattle.jpg",
    propertyCount: 134,
    href: "/properties?location=seattle",
    description: "Emerald City with coffee culture",
    featured: false
  }
];
```

### 3.5 CTA Section Data

```typescript
interface CTASection {
  background: {
    image: string;
    overlay: boolean;
    overlayColor?: string;
  };
  title: string;
  description: string;
  buttons: CTAButton[];
  statistics?: CTAS tatistic[];
}

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "white" | "outline";
  icon?: string;
  className: string;
}

interface CTAS tatistic {
  value: string;
  label: string;
}

// CTA Section Data
const ctaData: CTASection = {
  background: {
    image: "/images/cta/cta-bg.jpg",
    overlay: true,
    overlayColor: "rgba(0,0,0,0.6)"
  },
  title: "Ready to Find Your Dream Home?",
  description: "Join thousands of happy homeowners who found their perfect property with Homez.",
  buttons: [
    {
      label: "Browse Properties",
      href: "/properties",
      variant: "white",
      icon: "fal fa-arrow-right",
      className: "ud-btn btn-white bdrs60"
    },
    {
      label: "Contact Us",
      href: "/contact",
      variant: "outline",
      icon: "fal fa-phone",
      className: "ud-btn btn-outline-light bdrs60"
    }
  ],
  statistics: [
    { value: "15K+", label: "Properties" },
    { value: "50K+", label: "Happy Clients" },
    { value: "100+", label: "Cities" }
  ]
};
```

---

## 4. UI Components

### 4.1 ServiceCard Component

```typescript
interface ServiceCardProps {
  service: Service;
  variant?: "default" | "icon-top" | "icon-left";
  showLink?: boolean;
  className?: string;
}

// Usage
<ServiceCard
  service={serviceData}
  variant="icon-top"
  showLink={true}
  className="col-md-3"
/>
```

### 4.2 PopularAreaCard Component

```typescript
interface PopularAreaCardProps {
  area: PopularArea;
  variant?: "default" | "overlay" | "card";
  showCount?: boolean;
  showDescription?: boolean;
  className?: string;
}

// Usage
<PopularAreaCard
  area={areaData}
  variant="overlay"
  showCount={true}
  showDescription={false}
  className="col-md-4"
/>
```

### 4.3 CTASection Component

```typescript
interface CTASectionProps {
  data: CTASection;
  layout?: "centered" | "left-aligned" | "split";
  showStatistics?: boolean;
  className?: string;
}
```

---

## 5. CSS Classes Reference (Home v2 Specific)

```css
/* Header V2 Specific */
.header-nav.nav-homepage-style.at-home2 {
  /* Modified header styles for v2 */
}
.container.maxw1600 {
  max-width: 1600px;
}

/* Hero V2 */
.home2-hero {
  /* Split layout hero */
}
.home2-hero-left {
  /* Left content area */
}
.home2-hero-right {
  /* Right image/overlay area */
}

/* Services Section */
.services-section {
  /* Services container */
}
.service-card {
  /* Individual service card */
}

/* Popular Areas */
.popular-areas-grid {
  /* Grid layout for areas */
}
.area-card {
  /* Individual area card */
}
.area-card-overlay {
  /* Overlay variant */
}

/* CTA Section */
.cta-section {
  /* Call to action container */
}
.cta-overlay {
  /* Background overlay */
}
.cta-content {
  /* Content wrapper */
}
.cta-buttons {
  /* Buttons container */
}
```

---

## 6. API Endpoints (Same as v1)

### Additional Endpoint for Services

```typescript
// GET /api/services
interface GetServicesResponse {
  data: Service[];
}

// GET /api/areas/popular
interface GetPopularAreasResponse {
  data: PopularArea[];
}
```

---

## 7. Configuration

### 7.1 Home v2 Specific Theme

```typescript
interface HomeV2Theme extends ThemeColors {
  // Inherits base colors
  hero: {
    splitRatio: [0.5, 0.5]; // Left/Right split
    contentAlignment: "left";
  };
  services: {
    iconSize: "3rem";
    cardPadding: "2rem";
    cardBorderRadius: "1rem";
  };
  areas: {
    cardHeight: "300px";
    overlayGradient: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)";
  };
}
```

### 7.2 Container Constraints

```css
/* Home v2 uses constrained width for hero */
.container.maxw1600 {
  max-width: 1600px;
  margin: 0 auto;
}

/* Compared to v1's fluid container */
.hero-v1 .container {
  max-width: 100%;
}
```

---

## 8. Responsive Behavior

| Breakpoint | Hero Split | Services Grid | Areas Grid |
|------------|------------|---------------|------------|
| **Desktop (>1200px)** | 50/50 split | 4 columns | 3 columns |
| **Tablet (768-1199px)** | Stacked | 2 columns | 2 columns |
| **Mobile (<768px)** | Full stacked | 1 column | 1 column |

### Mobile Adaptations

```css
/* Mobile hero adjustments */
@media (max-width: 768px) {
  .home2-hero {
    flex-direction: column;
  }
  .home2-hero-right {
    min-height: 300px;
  }
  .home2-hero-left {
    padding: 2rem 1rem;
  }
  .container.maxw1600 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
```

---

## 9. Performance Optimizations

### 9.1 Lazy Loading

```typescript
const lazyComponents = {
  ServicesSection: dynamic(() => import('@/components/Services/ServicesSection')),
  PopularAreas: dynamic(() => import('@/components/Areas/PopularAreas')),
  CTASection: dynamic(() => import('@/components/CTA/CTASection')),
};
```

### 9.2 Image Optimization

```typescript
// Area card images
const areaImageSizes = {
  mobile: { width: 400, height: 300 },
  tablet: { width: 600, height: 400 },
  desktop: { width: 800, height: 500 },
};
```

---

## 10. Related Pages

- [Home v1](./home-v1-detailed.md) - Default homepage
- [Home v3](./home-v3-detailed.md) - Modern property focus
- [Home v4](./home-v4-detailed.md) - Agent-focused design
- [Home v5](./home-v5-detailed.md) - Agency showcase

---

*Document Version: 1.0 | Last Updated: 2024 | Homez - Real Estate NextJS Template*
