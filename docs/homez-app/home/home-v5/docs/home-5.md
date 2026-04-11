# Home 5 - Agency Showcase Layout

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v5](https://homez-appdir.vercel.app/home-v5)  
**Template Type:** Homepage  
**Version:** 5

Home 5 is designed for real estate agencies looking to showcase their brand, services, and team. It emphasizes agency identity, service offerings, and institutional credibility over individual properties.

## Layout Components

### Hero Section
- **Agency Branding**: Prominent agency identity
- **Service Highlights**: Key service offerings
- **Brand Messaging**: Agency value proposition
- **Professional Imagery**: Corporate-quality visuals

### Navigation
- **Standard Dark Header**: nav-homepage-style at-home5
- **Full Menu Structure**: Complete navigation
- **Agency Services**: Services dropdown
- **About Section**: Company information

### Agency Features
- **Services Grid**: Service offerings display
- **Team Section**: Staff showcase
- **Statistics**: Company metrics
- **Partners/Brands**: Affiliate logos

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Header Style** | Standard transparent (at-home5) |
| **Button Style** | Rounded square (bdrs12) |
| **Layout Focus** | Agency identity and services |
| **Visual Style** | Corporate, professional |
| **Content Priority** | Services, team, credibility |

### Design Elements
```css
/* Header configuration */
.header-nav.nav-homepage-style.at-home5

/* Rounded square button */
.ud-btn.add-property.menu-btn.bdrs12

/* Different border radius approach */
bdrs12 vs bdrs60 (rounded vs pill)
```

## Key Features

### Agency Services Section
- Service categories
- Service descriptions
- Icon representations
- CTA for each service

### Team Display
- Team member cards
- Role descriptions
- Contact information
- Social links

### Company Statistics
- Properties sold
- Happy clients
- Years of experience
- Agent count

### Brand Partners
- Partner logos
- Certification badges
- Association memberships

## Sections Breakdown

| Section | Description | Agency Focus |
|---------|-------------|--------------|
| **Header** | Standard navigation | Services menu |
| **Hero** | Agency banner | Brand messaging |
| **About** | Company story | Mission/vision |
| **Services** | What we offer | Service cards |
| **Team** | Meet the team | Team profiles |
| **Stats** | Our achievements | Numbers showcase |
| **Properties** | Featured listings | Agency listings |
| **Partners** | Trusted brands | Logo carousel |
| **Testimonials** | Client reviews | Social proof |
| **Footer** | Contact & info | Agency details |

## Responsive Behavior

| Breakpoint | Agency Layout |
|------------|---------------|
| **Desktop** | Full services grid, team carousel |
| **Tablet** | 2-column services, condensed team |
| **Mobile** | Stacked services, scrollable team |

### Mobile Adaptations
- Service cards stack vertically
- Team members in horizontal scroll
- Statistics in grid format
- Partner logos carousel

## Technical Specifications

### Page Structure
```
app/(home)/home-v5/
├── page.tsx
└── components/
    ├── AgencyHero.tsx
    ├── ServicesGrid.tsx
    ├── TeamSection.tsx
    ├── StatsSection.tsx
    └── PartnersSection.tsx
```

### CSS Classes
```css
/* Header class */
.header-nav.nav-homepage-style.at-home5

/* Square-rounded button variant */
.ud-btn.add-property.menu-btn.bdrs12
```

### Unique Components
- Service card with icons
- Team member carousel
- Statistics counter
- Partner logo slider

## Use Case Recommendations

### Ideal For
- **Real Estate Agencies**: Company branding
- **Brokerage Firms**: Institutional identity
- **Property Management**: Service-focused businesses
- **Franchise Operations**: Multi-location companies

### Agency-Focused Features
1. Service showcase
2. Team presentation
3. Company statistics
4. Brand partnerships
5. Corporate testimonials

### Customization Points
- Agency logo and branding
- Service descriptions
- Team member information
- Statistics configuration
- Partner logos

## Service Card Structure

### Service Components
```
Service Card contains:
- Service icon
- Service title
- Description text
- Learn more link
- Related properties count
```

### Service Categories
- Residential Sales
- Property Management
- Investment Advisory
- Commercial Real Estate
- Relocation Services
- Property Valuation

## Team Section Features

### Team Member Card
- Professional headshot
- Name and title
- Specialization
- Contact options
- Social media links
- Property count

### Team Organization
- Leadership team
- Sales agents
- Support staff
- Department filtering

## Comparison Table

| Feature | Home 4 | Home 5 |
|---------|--------|--------|
| Focus | Individual agent | Agency brand |
| Button Style | Rounded (bdrs60) | Square-rounded (bdrs12) |
| Header Class | light-header | at-home5 |
| Team Display | Agent cards | Team carousel |
| Statistics | Agent metrics | Company metrics |

## Related Pages

- [Home 4](./home-4.md) - Agent-focused design
- [Home 6](./home-6.md) - Minimal design
- [About Page](../other-pages/about.md) - Company information
- [Agency Page](../other-pages/agency.md) - Agency directory

---

*Homez - Modern Designed Real Estate React NextJS Template*
