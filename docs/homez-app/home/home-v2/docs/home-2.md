# Home 2 - Alternative Hero Design with Different Layout

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v2](https://homez-appdir.vercel.app/home-v2)  
**Template Type:** Homepage  
**Version:** 2

Home 2 offers an alternative approach to the homepage design with a different hero section layout and modified visual hierarchy. This version focuses on a cleaner, more spacious design while maintaining all essential real estate functionality.

## Layout Components

### Hero Section
- **Split Layout Hero**: Different arrangement of content and imagery
- **Compact Search Form**: Streamlined property search interface
- **Background Variation**: Alternative hero background treatment
- **Phone Number Display**: Contact number prominently featured in header
- **Animated Elements**: Subtle entrance animations

### Navigation
- **Dark Logo Option**: Different logo treatment
- **Phone Contact**: Direct contact number in header
- **Navigation Structure**: Same comprehensive menu system
- **User Authentication**: Login/Register functionality

### Featured Content
- **Property Showcases**: Curated property displays
- **Service Highlights**: Real estate services overview
- **Location Features**: Area spotlights
- **Agent Profiles**: Team member showcases

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Layout Style** | Container max-width 1600px (maxw1600) |
| **Header Class** | nav-homepage-style at-home2 |
| **Primary Colors** | Consistent with theme palette |
| **Typography** | DM Sans font family |
| **Visual Weight** | Balanced, clean aesthetic |

### Key Design Differences from Home 1
1. **Hero Layout**: Different content arrangement
2. **Header Style**: Modified header class (at-home2)
3. **Container Width**: Max width constraint on hero area
4. **Search Form**: More compact presentation
5. **Phone Display**: Added contact number in header

## Key Features

### Header Enhancements
```
- Phone contact: 2 911 098 7654
- Login/Register with icon
- Add Property button
- Sidebar panel toggle
```

### Search Capabilities
- Location-based search
- Property type filtering
- Price range selection
- Bedrooms and bathrooms filters
- Quick search suggestions

### Property Display
- Card-based grid layout
- Image galleries
- Quick view options
- Save to favorites
- Compare functionality

## Sections Breakdown

| Section | Description | Unique Features |
|---------|-------------|-----------------|
| **Header** | Navigation + phone number | Contact prominence |
| **Hero** | Split layout hero | Different visual treatment |
| **Properties** | Featured listings | Curated selection |
| **Services** | What we offer | Service highlights |
| **Areas** | Popular locations | Location cards |
| **Agents** | Featured agents | Team showcase |
| **Blog** | Latest articles | News preview |
| **CTA** | Call to action | Conversion focus |
| **Footer** | Links and info | Comprehensive footer |

## Responsive Behavior

| Breakpoint | Layout Changes |
|------------|----------------|
| **Desktop** | Full navigation, max-width container |
| **Tablet** | Condensed header, touch-friendly |
| **Mobile** | Hamburger menu, stacked hero content |

### Mobile Adaptations
- Collapsible navigation
- Stacked hero content
- Touch-optimized search
- Simplified property cards
- Bottom-anchored elements

## Technical Specifications

### Component Structure
```
app/(home)/home-v2/
├── page.tsx
├── components/
│   ├── HeroSection.tsx
│   ├── SearchForm.tsx
│   ├── FeaturedProperties.tsx
│   └── ServicesSection.tsx
```

### CSS Classes
```css
.header-nav.nav-homepage-style.at-home2
.container.maxw1600  /* Constrained width container */
```

### Script Files
- `home-v2/page-03ba4ceee206054b.js` - Page-specific JavaScript
- Standard Next.js chunk loading

## Use Case Recommendations

### Ideal For
- **Modern Agencies**: Clean, contemporary look
- **Boutique Brokerages**: Professional presentation
- **Regional Portals**: Location-focused platforms
- **Service-Oriented Sites**: Emphasis on agency services

### When to Choose Home 2
1. Prefer a cleaner hero section
2. Want to highlight contact information
3. Focus on service offerings
4. Target sophisticated buyers
5. Emphasize local expertise

### Customization Options
- Hero background customization
- Contact number configuration
- Search form field selection
- Property display preferences
- Service section content

## Comparison with Home 1

| Feature | Home 1 | Home 2 |
|---------|--------|--------|
| Hero Style | Full-width with search overlay | Split layout |
| Contact Display | Footer/Header | Header prominent |
| Container Width | Full fluid | Max-width constraint |
| Visual Focus | Property search | Balanced content |
| Header Class | nav-homepage-style | nav-homepage-style at-home2 |

## Related Pages

- [Home 1](./home-1.md) - Default homepage
- [Home 3](./home-3.md) - Modern property focus
- [Property List](../property-list-pages/grid-default.md) - Listings page

---

*Homez - Modern Designed Real Estate React NextJS Template*
