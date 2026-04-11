# Home v5 - Engineering Specification

## Visual Reference

**Full Page Screenshot:** `../screenshots/home-pages/home-v5-full.png`

> 📷 Screenshot captured with `agent-browser screenshot --full` - Full page capture.

---

# Home v5 - Engineering Specification

## 1. Identification

| Property | Value |
|----------|-------|
| **Name** | Home v5 - Agency Showcase Layout |
| **URL** | `https://homez-appdir.vercel.app/home-v5` |
| **Route** | `/home-v5` |
| **Version** | 5 |
| **Template Type** | Homepage |
| **Page Title** | `Home v5 \|\| Homez - Real Estate NextJS Template` |
| **Framework** | Next.js 14+ (App Router) |
| **Component Path** | `app/(home)/home-v5/page.tsx` |

---

## 2. Page Structure

### Main Sections Order
```
1. Header (nav-homepage-style at-home5)
2. Hero Section with Agency Branding
3. About/Company Section
4. Services Grid Section
5. Team/Staff Showcase Section
6. Statistics Section
7. Featured Properties Section
8. Partners/Brands Section
9. Testimonials Section
10. Footer
```

### Layout Configuration

```typescript
interface PageLayoutV5 {
  wrapper: {
    className: "wrapper ovh";
  };
  header: {
    className: "header-nav nav-homepage-style at-home5 main-menu";
    sticky: true;
    transparent: true;
  };
  button: {
    borderRadius: "12px"; // bdrs12 vs bdrs60 in other versions
  };
}
```

### Key Differences from Previous Versions

| Feature | Home v4 | Home v5 |
|---------|---------|---------|
| Header Class | light-header menu-home4 | at-home5 |
| Focus | Individual Agent | Agency Brand |
| Button Border Radius | 60px (pill) | 12px (rounded square) |
| Content Emphasis | Agent profiles | Company services & team |
| Unique Sections | Agent showcase | Partners, Company stats |

---

## 3. Detailed Data Content

### 3.1 Header Navigation Data (Agency-Focused)

```typescript
interface HeaderNavigationV5 extends HeaderNavigation {
  servicesMenu: boolean;
  aboutMenu: boolean;
}

// Home v5 Header Configuration
const headerV5Data: HeaderNavigationV5 = {
  logo: {
    light: "/images/header-logo.svg",
    dark: "/images/header-logo2.svg",
    width: 138,
    height: 44,
    alt: "Header Logo"
  },
  servicesMenu: true,
  aboutMenu: true,
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
        { id: "home-4", label: "Home v4", href: "/home-v4", isActive: false },
        { id: "home-5", label: "Home v5", href: "/home-v5", isActive: true },
        // ... other variants
      ]
    },
    {
      id: "listing",
      label: "Listing",
      href: "#",
      isActive: false,
      children: [/* Same as other versions */]
    },
    {
      id: "property",
      label: "Property",
      href: "#",
      isActive: false,
      children: [/* Same as other versions */]
    },
    {
      id: "blog",
      label: "Blog",
      href: "#",
      isActive: false,
      children: [/* Same as other versions */]
    },
    {
      id: "pages",
      label: "Pages",
      href: "#",
      isActive: false,
      children: [
        { id: "about", label: "About", href: "/about", isActive: false },
        { id: "contact", label: "Contact", href: "/contact", isActive: false },
        { id: "compare", label: "Compare", href: "/compare", isActive: false },
        { id: "pricing", label: "Pricing", href: "/pricing", isActive: false },
        { id: "faq", label: "Faq", href: "/faq", isActive: false },
        { id: "login", label: "Login", href: "/login", isActive: false },
        { id: "register", label: "Register", href: "/register", isActive: false },
        { id: "not-found", label: "404", href: "/not-found", isActive: false },
        { id: "invoice", label: "Invoice", href: "/invoice", isActive: false }
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
      // Key difference: bdrs12 instead of bdrs60
      className: "ud-btn add-property menu-btn bdrs12 mx-2 mx-xl-4",
      icon: "fal fa-arrow-right-long"
    },
    sidebar: {
      target: "#SidebarPanel",
      iconLight: "/images/icon/nav-icon-white.svg",
      iconDark: "/images/icon/nav-icon-dark.svg"
    }
  }
};
```

### 3.2 Hero Section Data (Agency Branding)

```typescript
interface HeroSectionV5 {
  background: {
    type: "image" | "video";
    src: string;
    overlay: boolean;
  };
  content: AgencyHeroContent;
  branding: AgencyBranding;
}

interface AgencyHeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: CTAButton[];
}

interface AgencyBranding {
  logo: string;
  tagline: string;
  established: number;
  awards: number;
}

// Home v5 Hero Data
const heroV5Data: HeroSectionV5 = {
  background: {
    type: "image",
    src: "/images/hero/hero-agency-bg.jpg",
    overlay: true
  },
  content: {
    tagline: "Trusted Real Estate Partner",
    title: "Your Dream Home Awaits",
    subtitle: "Professional Real Estate Services Since 2005",
    description: "Homez Realty is your trusted partner in finding the perfect property. With decades of experience, we've helped thousands of families achieve their homeownership dreams.",
    ctaButtons: [
      {
        label: "Explore Properties",
        href: "/properties",
        className: "ud-btn btn-thm bdrs12",
        icon: "fal fa-search"
      },
      {
        label: "About Us",
        href: "/about",
        className: "ud-btn btn-white bdrs12",
        icon: "fal fa-info-circle"
      }
    ]
  },
  branding: {
    logo: "/images/agency-logo.png",
    tagline: "Excellence in Real Estate",
    established: 2005,
    awards: 25
  }
};
```

### 3.3 About/Company Section Data

```typescript
interface AboutSection {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  features: CompanyFeature[];
  statistics: CompanyStatistic[];
}

interface CompanyFeature {
  icon: string;
  title: string;
  description: string;
}

// About Section Data
const aboutSectionData: AboutSection = {
  title: "About Homez Realty",
  subtitle: "Your Trusted Real Estate Partner",
  content: "Founded in 2005, Homez Realty has grown to become one of the most trusted names in real estate. Our team of experienced professionals is dedicated to providing exceptional service and helping clients navigate the complex world of property transactions.",
  image: "/images/about/company-image.jpg",
  features: [
    {
      icon: "flaticon-trust",
      title: "Trusted Expertise",
      description: "Over 15 years of experience in the real estate industry."
    },
    {
      icon: "flaticon-agent",
      title: "Professional Team",
      description: "A dedicated team of certified real estate professionals."
    },
    {
      icon: "flaticon-support",
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your property needs."
    }
  ],
  statistics: [
    { value: "15+", label: "Years Experience" },
    { value: "10,000+", label: "Properties Sold" },
    { value: "50+", label: "Expert Agents" }
  ]
};
```

### 3.4 Services Grid Section Data

```typescript
interface ServiceGridSection {
  title: string;
  subtitle: string;
  services: AgencyService[];
  layout: "grid-3" | "grid-4";
  showCTA: boolean;
}

interface AgencyService {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  link: string;
  propertiesCount?: number;
  featured?: boolean;
}

// Services Grid Data
const servicesGridData: ServiceGridSection = {
  title: "Our Services",
  subtitle: "Comprehensive Real Estate Solutions",
  layout: "grid-3",
  showCTA: true,
  services: [
    {
      id: 1,
      icon: "flaticon-home",
      title: "Residential Sales",
      description: "Expert guidance for buying or selling residential properties. From first-time buyers to luxury home seekers, we've got you covered.",
      link: "/services/residential",
      propertiesCount: 2450,
      featured: true
    },
    {
      id: 2,
      icon: "flaticon-building",
      title: "Commercial Real Estate",
      description: "Comprehensive commercial property services including office spaces, retail locations, and industrial properties.",
      link: "/services/commercial",
      propertiesCount: 680,
      featured: false
    },
    {
      id: 3,
      icon: "flaticon-key",
      title: "Property Management",
      description: "Full-service property management including tenant screening, rent collection, and maintenance coordination.",
      link: "/services/management",
      propertiesCount: 320,
      featured: false
    },
    {
      id: 4,
      icon: "flaticon-chart",
      title: "Investment Advisory",
      description: "Strategic investment guidance to help you build and manage your real estate portfolio for maximum returns.",
      link: "/services/investment",
      propertiesCount: 150,
      featured: false
    },
    {
      id: 5,
      icon: "flaticon-moving",
      title: "Relocation Services",
      description: "Complete relocation assistance for individuals and corporations, making your move seamless and stress-free.",
      link: "/services/relocation",
      propertiesCount: 90,
      featured: false
    },
    {
      id: 6,
      icon: "flaticon-calculator",
      title: "Property Valuation",
      description: "Accurate property valuations based on market analysis and comparable sales to help you make informed decisions.",
      link: "/services/valuation",
      propertiesCount: null,
      featured: false
    }
  ]
};
```

### 3.5 Team Section Data

```typescript
interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
  layout: "carousel" | "grid";
  showAllLink: string;
}

interface TeamMember {
  id: string | number;
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
  socialLinks: SocialLink[];
  email: string;
  phone: string;
  certifications: string[];
}

// Team Section Data
const teamSectionData: TeamSection = {
  title: "Meet Our Team",
  subtitle: "Experienced Professionals Dedicated to Your Success",
  layout: "carousel",
  showAllLink: "/team",
  members: [
    {
      id: 1,
      name: "Michael Anderson",
      title: "CEO & Founder",
      department: "Executive",
      image: "/images/team/michael-anderson.jpg",
      bio: "With over 25 years in real estate, Michael founded Homez Realty with a vision to revolutionize property services.",
      socialLinks: [
        { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" },
        { platform: "twitter", url: "#", icon: "fab fa-twitter" }
      ],
      email: "michael@homez.com",
      phone: "+1 (555) 100-0001",
      certifications: ["Licensed Broker", "CRS", "GRI"]
    },
    {
      id: 2,
      name: "Jennifer Williams",
      title: "Head of Sales",
      department: "Sales",
      image: "/images/team/jennifer-williams.jpg",
      bio: "Jennifer leads our sales team with expertise in both residential and commercial properties.",
      socialLinks: [
        { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" }
      ],
      email: "jennifer@homez.com",
      phone: "+1 (555) 100-0002",
      certifications: ["Licensed Agent", "ABR", "SRES"]
    },
    {
      id: 3,
      name: "David Chen",
      title: "Property Manager",
      department: "Property Management",
      image: "/images/team/david-chen.jpg",
      bio: "David oversees all property management operations, ensuring smooth experiences for both landlords and tenants.",
      socialLinks: [
        { platform: "linkedin", url: "#", icon: "fab fa-linkedin-in" }
      ],
      email: "david@homez.com",
      phone: "+1 (555) 100-0003",
      certifications: ["CPM", "ARM"]
    }
    // ... more team members
  ]
};
```

### 3.6 Statistics Section Data

```typescript
interface StatisticsSection {
  title: string;
  subtitle: string;
  statistics: CompanyStatistic[];
  layout: "horizontal" | "grid";
  animated: boolean;
}

interface CompanyStatistic {
  icon: string;
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

// Statistics Data
const statisticsData: StatisticsSection = {
  title: "Our Achievements",
  subtitle: "Numbers That Speak For Themselves",
  layout: "horizontal",
  animated: true,
  statistics: [
    {
      icon: "flaticon-home",
      value: 10000,
      suffix: "+",
      label: "Properties Sold",
      description: "Successfully closed transactions"
    },
    {
      icon: "flaticon-user",
      value: 50000,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers served"
    },
    {
      icon: "flaticon-agent",
      value: 50,
      suffix: "+",
      label: "Expert Agents",
      description: "Professional team members"
    },
    {
      icon: "flaticon-trophy",
      value: 25,
      suffix: "",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: "flaticon-medal",
      value: 100,
      suffix: "+",
      label: "Awards Won",
      description: "Industry recognition"
    }
  ]
};
```

### 3.7 Partners Section Data

```typescript
interface PartnersSection {
  title: string;
  subtitle: string;
  partners: Partner[];
  layout: "carousel" | "grid";
  autoplay: boolean;
}

interface Partner {
  id: string | number;
  name: string;
  logo: string;
  logoWhite?: string; // For dark backgrounds
  link: string;
  category: string;
}

// Partners Data
const partnersData: PartnersSection = {
  title: "Our Partners",
  subtitle: "Trusted by Leading Brands",
  layout: "carousel",
  autoplay: true,
  partners: [
    {
      id: 1,
      name: "National Bank",
      logo: "/images/partners/national-bank.png",
      logoWhite: "/images/partners/national-bank-white.png",
      link: "#",
      category: "Financial"
    },
    {
      id: 2,
      name: "Home Insurance Co",
      logo: "/images/partners/home-insurance.png",
      logoWhite: "/images/partners/home-insurance-white.png",
      link: "#",
      category: "Insurance"
    },
    {
      id: 3,
      name: "Construction Plus",
      logo: "/images/partners/construction-plus.png",
      logoWhite: "/images/partners/construction-plus-white.png",
      link: "#",
      category: "Construction"
    },
    {
      id: 4,
      name: "Legal Partners",
      logo: "/images/partners/legal-partners.png",
      logoWhite: "/images/partners/legal-partners-white.png",
      link: "#",
      category: "Legal"
    },
    {
      id: 5,
      name: "Property Inspect",
      logo: "/images/partners/property-inspect.png",
      logoWhite: "/images/partners/property-inspect-white.png",
      link: "#",
      category: "Inspection"
    }
  ]
};
```

---

## 4. UI Components

### 4.1 Service Card Component

```typescript
interface ServiceCardProps {
  service: AgencyService;
  variant?: "default" | "compact" | "featured";
  showPropertiesCount?: boolean;
  showLink?: boolean;
  className?: string;
}
```

### 4.2 Team Member Card Component

```typescript
interface TeamMemberCardProps {
  member: TeamMember;
  variant?: "default" | "compact" | "overlay";
  showSocialLinks?: boolean;
  showContact?: boolean;
  className?: string;
}
```

### 4.3 Statistics Counter Component

```typescript
interface StatisticsCounterProps {
  statistic: CompanyStatistic;
  animated?: boolean;
  duration?: number;
  className?: string;
}
```

### 4.4 Partner Logo Component

```typescript
interface PartnerLogoProps {
  partner: Partner;
  variant?: "default" | "grayscale";
  size?: "small" | "medium" | "large";
  className?: string;
}
```

---

## 5. API Endpoints

### 5.1 Services API

```typescript
// GET /api/services
interface GetServicesResponse {
  data: AgencyService[];
}

// GET /api/services/:id
interface GetServiceResponse {
  data: AgencyService & {
    relatedProperties: PropertyCard[];
    testimonials: Testimonial[];
  };
}
```

### 5.2 Team API

```typescript
// GET /api/team
interface GetTeamRequest {
  department?: string;
  limit?: number;
}

interface GetTeamResponse {
  data: TeamMember[];
}

// GET /api/team/:id
interface GetTeamMemberResponse {
  data: TeamMember & {
    properties: PropertyCard[];
    reviews: Review[];
  };
}
```

### 5.3 Statistics API

```typescript
// GET /api/statistics
interface GetStatisticsResponse {
  data: {
    propertiesSold: number;
    happyClients: number;
    expertAgents: number;
    yearsExperience: number;
    awardsWon: number;
  };
}
```

### 5.4 Partners API

```typescript
// GET /api/partners
interface GetPartnersResponse {
  data: Partner[];
}
```

---

## 6. Configuration

### 6.1 Home v5 Theme

```typescript
interface HomeV5Theme extends ThemeColors {
  buttons: {
    borderRadius: "12px"; // Key difference
  };
  serviceCard: {
    padding: "2rem";
    borderRadius: "1rem";
    iconSize: "3rem";
  };
  teamCard: {
    avatarSize: "150px";
    socialIconSize: "1.5rem";
  };
  partnerLogo: {
    height: "60px";
    grayscale: false;
  };
}
```

### 6.2 Button Styling

```css
/* Home v5 uses square-rounded buttons */
.ud-btn.bdrs12 {
  border-radius: 12px;
}

/* Compared to other versions */
.ud-btn.bdrs60 {
  border-radius: 60px; /* Pill shape */
}
```

---

## 7. CSS Classes Reference (Home v5 Specific)

```css
/* Home v5 Header */
.header-nav.nav-homepage-style.at-home5 {
  /* Standard transparent header */
}

/* Service Card */
.service-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.service-card-icon {
  font-size: 3rem;
  color: #e33e3e;
  margin-bottom: 1rem;
}

.service-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.service-card-description {
  color: #64748b;
  margin-bottom: 1rem;
}

.service-card-link {
  display: inline-flex;
  align-items: center;
  color: #e33e3e;
  font-weight: 500;
}

.service-card-link:hover {
  color: #c53535;
}

/* Team Member Card */
.team-member-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.team-member-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.team-member-content {
  padding: 24px;
  text-align: center;
}

.team-member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.team-member-title {
  color: #e33e3e;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.team-member-social {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.team-member-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.3s ease;
}

.team-member-social a:hover {
  background: #e33e3e;
  color: white;
}

/* Statistics Section */
.statistics-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.statistic-item {
  text-align: center;
  padding: 2rem;
}

.statistic-value {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.statistic-label {
  color: #94a3b8;
  font-size: 1rem;
}

/* Partners Section */
.partners-carousel {
  padding: 40px 0;
}

.partner-logo {
  height: 60px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

---

## 8. Responsive Behavior

| Breakpoint | Services Grid | Team Carousel | Statistics | Partners |
|------------|---------------|---------------|------------|----------|
| **Desktop (>1200px)** | 3 columns | 4 visible | 5 items horizontal | 5 visible |
| **Tablet (768-1199px)** | 2 columns | 3 visible | 3 items grid | 4 visible |
| **Mobile (<768px)** | 1 column | 1 visible | 2 items grid | 2 visible |

### Mobile Adaptations

```css
@media (max-width: 768px) {
  .service-card {
    padding: 24px;
  }
  
  .service-card-icon {
    font-size: 2rem;
  }
  
  .team-member-card {
    margin-bottom: 24px;
  }
  
  .team-member-image {
    height: 250px;
  }
  
  .statistics-section {
    padding: 40px 0;
  }
  
  .statistic-item {
    padding: 1rem;
  }
  
  .statistic-value {
    font-size: 2rem;
  }
  
  .partners-carousel {
    padding: 24px 0;
  }
  
  .partner-logo {
    height: 40px;
  }
}
```

---

## 9. Performance Optimizations

### 9.1 Team Member Images

```typescript
const teamImageConfig = {
  sizes: {
    card: { width: 400, height: 500 },
    thumbnail: { width: 100, height: 125 }
  },
  format: ["webp", "jpg"],
  quality: 85,
  lazy: true
};
```

### 9.2 Partners Carousel

```typescript
const partnersCarouselConfig = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};
```

---

## 10. Related Pages

- [Home v4](./home-v4-detailed.md) - Agent-focused design
- [Home v6](./home-6.md) - Minimal design
- [About Page](../other-pages/about.md) - Company information
- [Agency Page](../header-pages/agent-pages/agency.md) - Agency directory

---

*Document Version: 1.0 | Last Updated: 2024 | Homez - Real Estate NextJS Template*
