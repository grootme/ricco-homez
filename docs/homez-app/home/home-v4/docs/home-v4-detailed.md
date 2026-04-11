# Home v4 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v4-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home v4 - Engineering Specification

## 1. Identification

| Property | Value |
|----------|-------|
| **Name** | Home v4 - Agent-Focused Design |
| **URL** | `https://homez-appdir.vercel.app/home-v4` |
| **Route** | `/home-v4` |
| **Version** | 4 |
| **Template Type** | Homepage |
| **Page Title** | `Home v4 \|\| Homez - Real Estate NextJS Template` |
| **Framework** | Next.js 14+ (App Router) |
| **Component Path** | `app/(home)/home-v4/page.tsx` |

---

## 2. Page Structure

### Main Sections Order
```
1. Header (light-header menu-home4)
2. Hero Section with Agent Focus
3. Featured Agents Section
4. Agent Properties Grid
5. Services/Features Section
6. Testimonials Section
7. Agent CTA Section
8. Footer
```

### Layout Configuration

```typescript
interface PageLayoutV4 {
  wrapper: {
    className: "wrapper ovh";
  };
  header: {
    className: "header-nav nav-homepage-style light-header menu-home4 main-menu";
    sticky: true;
    transparent: false;
    variant: "light";
  };
  hero: {
    focus: "agent";
    ctaButton: {
      variant: "white";
      className: "btn-white";
    };
  };
}
```

### Key Differences from Previous Versions

| Feature | Home v3 | Home v4 |
|---------|---------|---------|
| Header Class | at-home3 | light-header menu-home4 |
| Primary Focus | Property | Agent |
| CTA Button | Primary color | White (btn-white) |
| Navigation Icon | Dark variant | Dark variant |
| Logo | Light variant | Light variant |
| Content Emphasis | Properties | Agent profiles |

---

## 3. Detailed Data Content

### 3.1 Header Navigation Data (Agent-Focused)

```typescript
interface HeaderNavigationV4 extends HeaderNavigation {
  theme: "light";
  agentDirectory: boolean;
  propertySubmit: {
    label: string;
    variant: "white";
  };
}

// Home v4 Header Configuration
const headerV4Data: HeaderNavigationV4 = {
  logo: {
    light: "/images/header-logo2.svg",
    dark: "/images/header-logo2.svg",
    width: 138,
    height: 44,
    alt: "Header Logo"
  },
  theme: "light",
  agentDirectory: true,
  navigationIcon: "/images/dark-nav-icon.svg", // Both states use dark
  menuItems: [
    {
      id: "home",
      label: "Home",
      href: "#",
      isActive: true,
      children: [
        { id: "home-1", label: "Home v1", href: "/", isActive: false },
        { id: "home-2", label: "Home v2", href: "/home-v2", isActive: false },
        { id: "home-3", label: "Home v3", href: "/home-v3", isActive: false },
        { id: "home-4", label: "Home v4", href: "/home-v4", isActive: true },
        // ... other variants
      ]
    },
    // Property submenu includes Agents section prominently
    {
      id: "property",
      label: "Property",
      href: "#",
      isActive: false,
      children: [
        {
          id: "agents",
          label: "Agents",
          href: "#",
          children: [
            { id: "agents-list", label: "Agents", href: "/agents" },
            { id: "agent-single", label: "Agent Single", href: "/agent-single/1" },
            { id: "agency", label: "Agency", href: "/agency" },
            { id: "agency-single", label: "Agency Single", href: "/agency-single/1" }
          ]
        },
        // ... other property submenu items
      ]
    }
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
      variant: "white",
      className: "ud-btn btn-white add-property bdrs60 mx-2 mx-xl-4",
      icon: "fal fa-arrow-right-long"
    },
    sidebar: {
      target: "#SidebarPanel",
      iconLight: "/images/dark-nav-icon.svg",
      iconDark: "/images/dark-nav-icon.svg"
    }
  }
};
```

### 3.2 Hero Section Data (Agent-Focused)

```typescript
interface HeroSectionV4 {
  background: {
    type: "image";
    src: string;
    overlay: boolean;
    overlayColor: string;
  };
  content: AgentHeroContent;
  searchForm?: SearchFormData; // Optional, may be simplified
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
}

interface AgentHeroContent {
  title: string;
  subtitle: string;
  description: string;
  highlights: AgentHighlight[];
}

interface AgentHighlight {
  icon: string;
  value: string;
  label: string;
}

// Home v4 Hero Data
const heroV4Data: HeroSectionV4 = {
  background: {
    type: "image",
    src: "/images/hero/hero-agent-bg.jpg",
    overlay: true,
    overlayColor: "rgba(15, 23, 42, 0.7)"
  },
  content: {
    title: "Find Your Perfect Agent",
    subtitle: "Connect with Top Real Estate Professionals",
    description: "Our network of experienced agents is ready to help you find your dream property. Browse agent profiles, read reviews, and connect directly.",
    highlights: [
      { icon: "flaticon-agent", value: "100+", label: "Expert Agents" },
      { icon: "flaticon-home", value: "5,000+", label: "Properties Sold" },
      { icon: "flaticon-star", value: "4.9", label: "Avg Rating" }
    ]
  },
  cta: {
    primary: {
      label: "Find an Agent",
      href: "/agents",
      className: "ud-btn btn-white add-property bdrs60",
      icon: "fal fa-search"
    },
    secondary: {
      label: "Become an Agent",
      href: "/register?role=agent",
      className: "ud-btn btn-outline-white bdrs60",
      icon: "fal fa-user-plus"
    }
  }
};
```

### 3.3 Featured Agents Section Data

```typescript
interface FeaturedAgentSection {
  title: string;
  subtitle: string;
  agents: AgentCard[];
  layout: "grid" | "carousel";
  showFilters: boolean;
  filters: AgentFilter[];
}

interface AgentFilter {
  name: string;
  label: string;
  options: FilterOption[];
}

// Featured Agents Data
const featuredAgentsSection: FeaturedAgentSection = {
  title: "Featured Agents",
  subtitle: "Meet our top-rated real estate professionals",
  layout: "grid",
  showFilters: true,
  filters: [
    {
      name: "specialization",
      label: "Specialization",
      options: [
        { value: "all", label: "All Specializations" },
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "luxury", label: "Luxury Properties" },
        { value: "investment", label: "Investment Properties" }
      ]
    },
    {
      name: "area",
      label: "Area",
      options: [
        { value: "all", label: "All Areas" },
        { value: "los-angeles", label: "Los Angeles" },
        { value: "new-york", label: "New York" },
        { value: "miami", label: "Miami" }
      ]
    }
  ],
  agents: [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/agents/sarah-johnson.jpg",
      title: "Senior Real Estate Agent",
      agency: "Homez Realty",
      phone: "+1 (555) 234-5678",
      email: "sarah@homez.com",
      rating: 4.9,
      reviewCount: 127,
      propertyCount: 45,
      specializations: ["Luxury Homes", "Commercial", "Investment"],
      socialLinks: [
        { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
        { platform: "twitter", url: "#", icon: "fab fa-twitter" },
        { platform: "instagram", url: "#", icon: "fab fa-instagram" },
        { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" }
      ],
      bio: "With over 15 years of experience, Sarah specializes in luxury properties and has helped hundreds of clients find their dream homes."
    },
    // ... more agents
  ]
};
```

### 3.4 Agent Properties Grid Data

```typescript
interface AgentPropertiesSection {
  title: string;
  subtitle: string;
  properties: PropertyCard[];
  showAgent: boolean;
  layout: "grid-3" | "grid-4";
}

// Agent Properties Data
const agentPropertiesSection: AgentPropertiesSection = {
  title: "Agent Properties",
  subtitle: "Explore properties from our top agents",
  properties: [], // Array of PropertyCard
  showAgent: true,
  layout: "grid-3"
};
```

### 3.5 Services/Features Section Data

```typescript
interface AgentService {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

// Agent-Focused Services
const agentServicesData: AgentService[] = [
  {
    id: 1,
    icon: "flaticon-consulting",
    title: "Property Consultation",
    description: "Get expert advice on buying, selling, or investing in real estate from our experienced agents.",
    link: "/services/consultation"
  },
  {
    id: 2,
    icon: "flaticon-apartment",
    title: "Property Management",
    description: "Our agents provide comprehensive property management services for landlords and investors.",
    link: "/services/management"
  },
  {
    id: 3,
    icon: "flaticon-money",
    title: "Market Analysis",
    description: "Receive detailed market reports and property valuations from local experts.",
    link: "/services/analysis"
  },
  {
    id: 4,
    icon: "flaticon-negotiation",
    title: "Negotiation Support",
    description: "Benefit from professional negotiation skills to get the best deal on your property.",
    link: "/services/negotiation"
  },
  {
    id: 5,
    icon: "flaticon-legal",
    title: "Legal Assistance",
    description: "Navigate complex real estate laws with guidance from our knowledgeable agents.",
    link: "/services/legal"
  },
  {
    id: 6,
    icon: "flaticon-support",
    title: "24/7 Support",
    description: "Our agents are available around the clock to answer your questions and address concerns.",
    link: "/contact"
  }
];
```

### 3.6 Agent CTA Section Data

```typescript
interface AgentCTASection {
  background: {
    image: string;
    overlay: boolean;
  };
  title: string;
  description: string;
  benefits: string[];
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

// Agent CTA Data
const agentCTAData: AgentCTASection = {
  background: {
    image: "/images/cta/agent-cta-bg.jpg",
    overlay: true
  },
  title: "Ready to Work with an Expert?",
  description: "Connect with one of our professional agents today and start your property journey with confidence.",
  benefits: [
    "Free consultation session",
    "Access to exclusive listings",
    "Professional market insights",
    "Negotiation expertise"
  ],
  primaryCTA: {
    label: "Contact an Agent",
    href: "/agents",
    className: "ud-btn btn-white bdrs60",
    icon: "fal fa-phone"
  },
  secondaryCTA: {
    label: "Schedule Call",
    href: "/contact",
    className: "ud-btn btn-outline-white bdrs60",
    icon: "fal fa-calendar"
  }
};
```

---

## 4. UI Components

### 4.1 Agent Card Component

```typescript
interface AgentCardProps {
  agent: AgentCard;
  variant?: "default" | "compact" | "horizontal" | "featured";
  showRating?: boolean;
  showPropertyCount?: boolean;
  showSocialLinks?: boolean;
  showContactButton?: boolean;
  onContact?: (agentId: string | number) => void;
  className?: string;
}

// Usage Examples
<AgentCard
  agent={agentData}
  variant="default"
  showRating={true}
  showPropertyCount={true}
  showSocialLinks={true}
  showContactButton={true}
  onContact={(id) => handleContactAgent(id)}
  className="col-md-4"
/>

<AgentCard
  agent={agentData}
  variant="compact"
  showRating={true}
  className="col-md-3"
/>
```

### 4.2 Agent Filter Component

```typescript
interface AgentFilterProps {
  filters: AgentFilter[];
  onFilterChange: (filterName: string, value: string) => void;
  layout?: "horizontal" | "vertical" | "dropdown";
  className?: string;
}
```

### 4.3 Agent Service Card Component

```typescript
interface AgentServiceCardProps {
  service: AgentService;
  variant?: "icon-top" | "icon-left";
  showLink?: boolean;
  className?: string;
}
```

---

## 5. API Endpoints

### 5.1 Agents API

```typescript
// GET /api/agents
interface GetAgentsRequest {
  page?: number;
  limit?: number;
  specialization?: string;
  area?: string;
  minRating?: number;
  featured?: boolean;
  sort?: "rating" | "propertyCount" | "reviewCount";
}

interface GetAgentsResponse {
  data: AgentCard[];
  pagination: PaginationInfo;
}

// GET /api/agents/featured
interface GetFeaturedAgentsResponse {
  data: AgentCard[];
}

// GET /api/agents/:id
interface GetAgentResponse {
  data: AgentCard & {
    fullBio: string;
    certifications: string[];
    languages: string[];
    education: string[];
    awards: Award[];
  };
}

// GET /api/agents/:id/properties
interface GetAgentPropertiesResponse {
  data: PropertyCard[];
  pagination: PaginationInfo;
}

// POST /api/agents/:id/contact
interface ContactAgentRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest?: string;
}
```

### 5.2 Services API

```typescript
// GET /api/services/agents
interface GetAgentServicesResponse {
  data: AgentService[];
}
```

---

## 6. Configuration

### 6.1 Home v4 Theme

```typescript
interface HomeV4Theme extends ThemeColors {
  header: {
    background: "light";
    variant: "light-header menu-home4";
  };
  buttons: {
    primary: {
      variant: "white"; // Key difference
      className: "btn-white";
      borderRadius: "60px"; // bdrs60
    };
  };
  agent: {
    card: {
      defaultPadding: "1.5rem";
      avatarSize: "120px";
      ratingStarColor: "#f59e0b";
    };
  };
}
```

### 6.2 Agent Card Styling

```css
/* Agent Card Base Styles */
.agent-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.agent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.agent-card-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.agent-card-rating {
  color: #f59e0b;
}

.agent-card-specialization {
  display: inline-block;
  padding: 4px 12px;
  background: #f1f5f9;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 4px;
  margin-bottom: 4px;
}

/* Agent Card Variants */
.agent-card-compact {
  padding: 16px;
}

.agent-card-compact .agent-card-avatar {
  width: 80px;
  height: 80px;
}

.agent-card-horizontal {
  display: flex;
  align-items: center;
  gap: 24px;
}

.agent-card-featured {
  border: 2px solid #e33e3e;
  position: relative;
}

.agent-card-featured::before {
  content: "Featured";
  position: absolute;
  top: -10px;
  right: 20px;
  background: #e33e3e;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
}
```

---

## 7. CSS Classes Reference (Home v4 Specific)

```css
/* Home v4 Header */
.header-nav.nav-homepage-style.light-header.menu-home4 {
  background-color: #ffffff;
  border-bottom: 1px solid #efefef;
}

/* White Button Variant */
.ud-btn.btn-white {
  background-color: #ffffff;
  color: #0f172a;
  border: 1px solid transparent;
}

.ud-btn.btn-white:hover {
  background-color: #f8fafc;
  border-color: #efefef;
}

/* Dark Navigation Icon */
.dark-nav-icon {
  filter: brightness(0);
}

/* Agent Section */
.agents-section {
  padding: 80px 0;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.agent-filters {
  margin-bottom: 32px;
}

.agent-filter-select {
  min-width: 200px;
}

/* Agent Services */
.agent-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* Agent CTA */
.agent-cta-section {
  position: relative;
  padding: 100px 0;
}

.agent-cta-benefits {
  list-style: none;
  padding: 0;
}

.agent-cta-benefits li {
  padding: 8px 0;
  padding-left: 30px;
  position: relative;
}

.agent-cta-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #22c55e;
}
```

---

## 8. Responsive Behavior

| Breakpoint | Header | Agent Grid | Services | CTA |
|------------|--------|------------|----------|-----|
| **Desktop (>1200px)** | Light, full nav | 3-4 columns | 3 columns | Side by side |
| **Tablet (768-1199px)** | Light, condensed | 2-3 columns | 2 columns | Stacked |
| **Mobile (<768px)** | Hamburger | 1 column | 1 column | Full stacked |

### Mobile Agent Experience

```css
/* Mobile Agent Card */
@media (max-width: 768px) {
  .agent-card {
    padding: 16px;
  }
  
  .agent-card-avatar {
    width: 80px;
    height: 80px;
  }
  
  .agent-card-horizontal {
    flex-direction: column;
    text-align: center;
  }
  
  .agent-filters {
    flex-direction: column;
    gap: 12px;
  }
  
  .agent-filter-select {
    width: 100%;
  }
}
```

---

## 9. Performance Optimizations

### 9.1 Agent Image Optimization

```typescript
const agentImageConfig = {
  sizes: {
    avatar: { width: 120, height: 120 },
    avatarLarge: { width: 200, height: 200 },
    avatarThumbnail: { width: 60, height: 60 }
  },
  format: ["webp", "jpg"],
  quality: 85
};
```

### 9.2 Lazy Loading Agents

```typescript
import dynamic from 'next/dynamic';

const AgentCard = dynamic(
  () => import('@/components/Agent/AgentCard'),
  { 
    loading: () => <AgentCardSkeleton />,
    ssr: true 
  }
);
```

---

## 10. Related Pages

- [Home v3](./home-v3-detailed.md) - Modern property focus
- [Home v5](./home-v5-detailed.md) - Agency showcase
- [Agents Page](../header-pages/agent-pages/agents.md) - Agent directory
- [Agent Single](../header-pages/agent-pages/agent-single.md) - Individual agent profile

---

*Document Version: 1.0 | Last Updated: 2024 | Homez - Real Estate NextJS Template*
