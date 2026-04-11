# Home v3 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v3-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home v3 - Engineering Specification

## 1. Identification

| Property | Value |
|----------|-------|
| **Name** | Home v3 - Modern Property Focus |
| **URL** | `https://homez-appdir.vercel.app/home-v3` |
| **Route** | `/home-v3` |
| **Version** | 3 |
| **Template Type** | Homepage |
| **Page Title** | `Home v3 \|\| Homez - Real Estate NextJS Template` |
| **Framework** | Next.js 14+ (App Router) |
| **Component Path** | `app/(home)/home-v3/page.tsx` |

---

## 2. Page Structure

### Main Sections Order
```
1. Header (nav-homepage-style at-home3)
2. Hero Section with Advanced Search
3. Why Choose Us Section
4. Featured Properties Grid
5. Categories Section
6. CTA Member Section
7. Testimonials Section
8. Footer
```

### Layout Configuration

```typescript
interface PageLayoutV3 {
  wrapper: {
    className: "wrapper ovh";
  };
  header: {
    className: "header-nav nav-homepage-style at-home3 main-menu";
    sticky: true;
    transparent: false; // Light header
    logoVariant: "light"; // Uses header-logo2.svg
  };
  preloads: {
    images: [
      "/images/about/why-chose-1.png",
      "/images/about/cta-member-1.png"
    ];
    priority: "high";
  };
}
```

### Key Differences from Previous Versions

| Feature | Home v1 | Home v2 | Home v3 |
|---------|---------|---------|---------|
| Header Theme | Transparent | Transparent | Light (at-home3) |
| Logo Variant | Standard | Standard | Light (header-logo2.svg) |
| Preload Images | Basic | Basic | Advanced (hero images) |
| Search Form | Standard | Compact | Multi-select enhanced |
| Filter Type | Single select | Single select | Multi-select |

---

## 3. Detailed Data Content

### 3.1 Header Navigation Data (Light Theme)

```typescript
interface HeaderNavigationV3 extends HeaderNavigation {
  logoVariant: "light";
  headerTheme: "light";
  navigationIcon: "dark";
}

// Home v3 Specific Header Configuration
const headerV3Data: HeaderNavigationV3 = {
  logo: {
    // Both logos use the light variant for visibility on light background
    light: "/images/header-logo2.svg",
    dark: "/images/header-logo2.svg",
    width: 138,
    height: 44,
    alt: "Header Logo"
  },
  logoVariant: "light",
  headerTheme: "light",
  navigationIcon: "dark", // Dark nav icon for light header
  menuItems: [
    {
      id: "home",
      label: "Home",
      href: "#",
      isActive: true,
      children: [
        { id: "home-1", label: "Home v1", href: "/", isActive: false },
        { id: "home-2", label: "Home v2", href: "/home-v2", isActive: false },
        { id: "home-3", label: "Home v3", href: "/home-v3", isActive: true },
        // ... other variants
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
      className: "ud-btn add-property menu-btn bdrs60",
      icon: "fal fa-arrow-right-long"
    },
    sidebar: {
      target: "#SidebarPanel",
      // Dark variant icons for light header
      iconLight: "/images/icon/nav-icon-white.svg",
      iconDark: "/images/icon/nav-icon-dark.svg"
    }
  }
};
```

### 3.2 Preloaded Images Configuration

```typescript
interface PreloadConfig {
  images: PreloadedImage[];
  fetchPriority: "high" | "low";
}

interface PreloadedImage {
  url: string;
  srcset: string;
  sizes: number[];
  quality: number;
}

// Home v3 Preload Configuration
const preloadConfig: PreloadConfig = {
  images: [
    {
      url: "/images/about/why-chose-1.png",
      srcset: "/images/about/why-chose-1.png?w=640&q=75 1x, /images/about/why-chose-1.png?w=1200&q=75 2x",
      sizes: [640, 1200],
      quality: 75
    },
    {
      url: "/images/about/cta-member-1.png",
      srcset: "/images/about/cta-member-1.png?w=256&q=75 1x, /images/about/cta-member-1.png?w=640&q=75 2x",
      sizes: [256, 640],
      quality: 75
    }
  ],
  fetchPriority: "high"
};

// Implementation in HTML
const preloadLinks = `
<link rel="preload" as="image" 
      imagesrcset="/images/about/why-chose-1.png?w=640&q=75 1x, /images/about/why-chose-1.png?w=1200&q=75 2x" 
      fetchpriority="high">
<link rel="preload" as="image" 
      imagesrcset="/images/about/cta-member-1.png?w=256&q=75 1x, /images/about/cta-member-1.png?w=640&q=75 2x" 
      fetchpriority="high">
`;
```

### 3.3 Multi-Select Search Form Data

```typescript
interface MultiSelectSearchForm {
  fields: MultiSelectField[];
  submitButton: ButtonConfig;
}

interface MultiSelectField extends SearchField {
  type: "multiselect";
  isMulti: true;
  selectedValues: SelectOption[];
  allowCreate: boolean;
  closeMenuOnSelect: boolean;
}

// Home v3 Enhanced Search Form
const multiSelectSearchData: MultiSelectSearchForm = {
  fields: [
    {
      name: "location",
      label: "Location",
      type: "multiselect",
      placeholder: "Select locations",
      isMulti: true,
      selectedValues: [],
      allowCreate: false,
      closeMenuOnSelect: false,
      options: [
        { value: "los-angeles", label: "Los Angeles" },
        { value: "new-york", label: "New York" },
        { value: "miami", label: "Miami" },
        { value: "san-francisco", label: "San Francisco" },
        { value: "chicago", label: "Chicago" }
      ],
      required: false
    },
    {
      name: "propertyType",
      label: "Property Type",
      type: "multiselect",
      placeholder: "Select types",
      isMulti: true,
      selectedValues: [],
      allowCreate: false,
      closeMenuOnSelect: false,
      options: [
        { value: "house", label: "House" },
        { value: "apartment", label: "Apartment" },
        { value: "villa", label: "Villa" },
        { value: "condo", label: "Condo" },
        { value: "townhouse", label: "Townhouse" }
      ],
      required: false
    },
    {
      name: "status",
      label: "Status",
      type: "multiselect",
      placeholder: "Select status",
      isMulti: true,
      selectedValues: [],
      allowCreate: false,
      closeMenuOnSelect: false,
      options: [
        { value: "for-sale", label: "For Sale" },
        { value: "for-rent", label: "For Rent" },
        { value: "featured", label: "Featured" },
        { value: "new", label: "New" }
      ],
      required: false
    },
    {
      name: "priceRange",
      label: "Price Range",
      type: "select",
      placeholder: "Select range",
      isMulti: false,
      selectedValues: [],
      options: [
        { value: "0-100000", label: "$0 - $100,000" },
        { value: "100000-250000", label: "$100,000 - $250,000" },
        { value: "250000-500000", label: "$250,000 - $500,000" },
        { value: "500000-1000000", label: "$500,000 - $1,000,000" },
        { value: "1000000+", label: "$1,000,000+" }
      ],
      required: false
    },
    {
      name: "bedrooms",
      label: "Bedrooms",
      type: "multiselect",
      placeholder: "Select bedrooms",
      isMulti: true,
      selectedValues: [],
      allowCreate: false,
      closeMenuOnSelect: false,
      options: [
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" },
        { value: "5", label: "5+" }
      ],
      required: false
    },
    {
      name: "bathrooms",
      label: "Bathrooms",
      type: "multiselect",
      placeholder: "Select bathrooms",
      isMulti: true,
      selectedValues: [],
      allowCreate: false,
      closeMenuOnSelect: false,
      options: [
        { value: "1", label: "1+" },
        { value: "2", label: "2+" },
        { value: "3", label: "3+" },
        { value: "4", label: "4+" }
      ],
      required: false
    }
  ],
  submitButton: {
    label: "Search",
    icon: "fal fa-search",
    className: "ud-btn btn-thm"
  }
};
```

### 3.4 Why Choose Us Section Data

```typescript
interface WhyChooseFeature {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

// Why Choose Us Data
const whyChooseData: WhyChooseFeature[] = [
  {
    id: 1,
    icon: "flaticon-home",
    title: "Wide Range of Properties",
    description: "With over 50,000+ properties listed, we offer the largest selection of real estate options in the market. From cozy apartments to luxurious villas, find your perfect match.",
    image: "/images/about/why-chose-1.png",
    link: "/properties"
  },
  {
    id: 2,
    icon: "flaticon-agent",
    title: "Expert Real Estate Agents",
    description: "Our network of certified agents brings years of local market expertise. Get professional guidance throughout your property journey.",
    link: "/agents"
  },
  {
    id: 3,
    icon: "flaticon-trust",
    title: "Trusted by Thousands",
    description: "Join over 10,000 satisfied customers who found their dream homes. Our track record speaks for itself.",
    link: "/testimonials"
  },
  {
    id: 4,
    icon: "flaticon-calculator",
    title: "Easy Financing Options",
    description: "Take advantage of our mortgage calculator and financing partnerships to make homeownership affordable.",
    link: "/mortgage-calculator"
  }
];
```

### 3.5 CTA Member Section Data

```typescript
interface CTAMemberSection {
  background: {
    image: string;
    overlay: boolean;
    overlayColor: string;
  };
  image: string;
  title: string;
  description: string;
  statistics: MemberStatistic[];
  cta: CTAButton;
}

interface MemberStatistic {
  value: string;
  label: string;
}

// CTA Member Data
const ctaMemberData: CTAMemberSection = {
  background: {
    image: "/images/about/cta-member-bg.jpg",
    overlay: true,
    overlayColor: "rgba(15, 23, 42, 0.9)"
  },
  image: "/images/about/cta-member-1.png",
  title: "Join Our Network of Agents",
  description: "Become part of our growing network of real estate professionals. Get access to exclusive listings, marketing tools, and dedicated support.",
  statistics: [
    { value: "10,000+", label: "Active Agents" },
    { value: "50,000+", label: "Properties Listed" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support" }
  ],
  cta: {
    label: "Become an Agent",
    href: "/register?role=agent",
    className: "ud-btn btn-thm",
    icon: "fal fa-arrow-right"
  }
};
```

---

## 4. UI Components

### 4.1 Multi-Select Dropdown Component

```typescript
interface MultiSelectProps {
  name: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  value: SelectOption[];
  onChange: (values: SelectOption[]) => void;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  className?: string;
  styles?: Record<string, unknown>;
}

// CSS Styles for Multi-Select
const multiSelectStyles = {
  container: "css-b62m3t-container",
  control: "css-13cymwt-control",
  valueContainer: "css-1dyz3mf",
  multiValue: "css-1p3m7a8-multiValue",
  multiValueLabel: "css-9jq23d",
  multiValueRemove: "css-v7duua",
  placeholder: "css-1hac4vs-dummyInput"
};
```

### 4.2 Why Choose Card Component

```typescript
interface WhyChooseCardProps {
  feature: WhyChooseFeature;
  variant?: "default" | "image";
  index: number;
  className?: string;
}
```

### 4.3 CTA Member Component

```typescript
interface CTAMemberProps {
  data: CTAMemberSection;
  className?: string;
}
```

---

## 5. API Endpoints

### 5.1 Why Choose Features

```typescript
// GET /api/why-choose
interface GetWhyChooseResponse {
  data: WhyChooseFeature[];
}
```

### 5.2 CTA Member Statistics

```typescript
// GET /api/statistics/members
interface GetMemberStatsResponse {
  data: {
    activeAgents: number;
    propertiesListed: number;
    successRate: number;
    supportHours: string;
  };
}
```

---

## 6. Configuration

### 6.1 Home v3 Theme

```typescript
interface HomeV3Theme extends ThemeColors {
  header: {
    background: "light";
    logoVariant: "light";
    navigationIcon: "dark";
  };
  hero: {
    preloadStrategy: "eager";
    imagePriority: "high";
  };
  search: {
    variant: "multiselect";
    allowMultiple: true;
  };
}
```

### 6.2 Preload Configuration

```typescript
interface PreloadStrategy {
  images: {
    strategy: "eager" | "lazy";
    fetchPriority: "high" | "low";
    sizes: {
      mobile: [640];
      desktop: [1200];
    };
    quality: 75;
  };
  fonts: {
    preload: boolean;
    display: "swap" | "block";
    formats: ["woff2", "woff"];
  };
}
```

---

## 7. CSS Classes Reference (Home v3 Specific)

```css
/* Home v3 Header */
.header-nav.nav-homepage-style.at-home3 {
  /* Light header variant */
  background-color: #ffffff;
}

.header-logo.logo2 {
  /* Light logo variant for light backgrounds */
}

/* Multi-Select Styles */
.css-1p3m7a8-multiValue {
  display: flex;
  min-width: 0;
  background-color: hsl(0, 0%, 90%);
  border-radius: 2px;
  margin: 2px;
}

.css-9jq23d {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  color: hsl(0, 0%, 20%);
  font-size: 85%;
  padding: 3px;
  padding-left: 6px;
}

.css-v7duua {
  align-items: center;
  display: flex;
  border-radius: 2px;
  padding-left: 4px;
  padding-right: 4px;
}

.css-v7duua:hover {
  background-color: #FFBDAD;
  color: #DE350B;
}

/* Why Choose Section */
.why-choose-section {
  padding: 80px 0;
}

.why-choose-card {
  transition: transform 0.3s ease;
}

.why-choose-card:hover {
  transform: translateY(-5px);
}

/* CTA Member */
.cta-member-section {
  position: relative;
  background-size: cover;
  background-position: center;
}

.cta-member-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.9);
}

.cta-member-image {
  position: relative;
  z-index: 1;
}

.cta-member-content {
  position: relative;
  z-index: 1;
}
```

---

## 8. Responsive Behavior

| Breakpoint | Header | Multi-Select | Why Choose Grid | CTA Layout |
|------------|--------|--------------|-----------------|------------|
| **Desktop (>1200px)** | Light, full nav | Full multi-select | 4 columns | Side by side |
| **Tablet (768-1199px)** | Light, condensed | Compact multi-select | 2 columns | Stacked |
| **Mobile (<768px)** | Dark hamburger | Single select fallback | 1 column | Full stacked |

### Mobile-Specific Features

- Dark navigation icon for visibility on light header
- Multi-select becomes single select for better UX
- Preloaded images optimized for mobile bandwidth
- Condensed property information

---

## 9. Performance Optimizations

### 9.1 Image Preloading

```typescript
// Next.js Image component configuration
const heroImageConfig = {
  src: "/images/about/why-chose-1.png",
  priority: true, // fetchpriority="high"
  sizes: "(max-width: 640px) 640px, 1200px",
  quality: 75,
  placeholder: "blur",
  blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
};
```

### 9.2 Component Code Splitting

```typescript
import dynamic from 'next/dynamic';

const WhyChooseSection = dynamic(
  () => import('@/components/WhyChoose/WhyChooseSection'),
  { 
    loading: () => <WhyChooseSkeleton />,
    ssr: true 
  }
);

const CTAMember = dynamic(
  () => import('@/components/CTA/CTAMember'),
  { 
    loading: () => <CTASkeleton />,
    ssr: false 
  }
);
```

---

## 10. Related Pages

- [Home v1](./home-v1-detailed.md) - Default homepage
- [Home v2](./home-v2-detailed.md) - Alternative hero design
- [Home v4](./home-v4-detailed.md) - Agent-focused design
- [Home v5](./home-v5-detailed.md) - Agency showcase
- [Property Single V3](../property-single-pages/single-v3.md) - Property detail

---

*Document Version: 1.0 | Last Updated: 2024 | Homez - Real Estate NextJS Template*
