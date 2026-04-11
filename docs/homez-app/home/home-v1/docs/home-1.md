# Home 1 - Default Layout with Hero Banner and Search Form

## Overview

**URL:** [https://homez-appdir.vercel.app/](https://homez-appdir.vercel.app/)  
**Template Type:** Homepage  
**Version:** 1 (Default)

Home 1 is the flagship homepage template of the Homez Real Estate template. It features a prominent hero section with an integrated search form, making it ideal for real estate platforms that prioritize property search functionality. The layout is designed to immediately engage visitors with property listings while providing intuitive navigation.

## Layout Components

### Hero Section
- **Full-width Hero Banner**: Large background image with overlay
- **Integrated Search Form**: Advanced property search with multiple filters
- **Headline Text**: Prominent welcome message and value proposition
- **Call-to-Action Buttons**: Primary action buttons for user engagement

### Navigation
- **Sticky Header**: Fixed navigation bar on scroll
- **Logo Area**: Brand identity placement
- **Multi-level Menu**: Dropdown navigation for all sections
- **User Actions**: Login/Register and Add Property buttons

### Featured Properties Section
- **Property Cards Grid**: Responsive grid layout
- **Property Information**: Price, location, bedrooms, bathrooms, area
- **Favorite/Save Option**: Heart icon for saving properties
- **Agent Quick View**: Agent avatar and contact option

### Additional Sections
- **Property Categories**: Browse by property type
- **Popular Locations**: Featured areas/cities
- **Featured Agents**: Showcased real estate professionals
- **Testimonials**: Customer reviews and feedback
- **Blog Preview**: Latest articles preview
- **Footer**: Contact info, links, social media

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Primary Colors** | Theme primary (#e33e3e red accent), White backgrounds |
| **Secondary Colors** | Gray tones for text and borders |
| **Typography** | DM Sans font family |
| **Spacing** | Generous padding, clean whitespace |
| **Border Radius** | Rounded corners (bdrs60 for buttons) |
| **Shadows** | Subtle box shadows for depth |

### Color Palette
```
Primary: #e33e3e (Red accent)
Background: #ffffff (White)
Text Primary: #0f172a (Dark)
Text Secondary: #64748b (Gray)
Borders: #efefef (Light gray)
```

## Key Features

### Advanced Search Form
The hero section includes a comprehensive search form with:
- **Location Input**: City/area search with autocomplete
- **Property Type Dropdown**: House, Apartment, Villa, etc.
- **Price Range**: Min/Max price filters
- **Bedrooms/Bathrooms**: Number selection
- **Search Button**: Prominent CTA to filter results

### Property Card Design
Each property card displays:
- Property image carousel
- Status badge (Featured, For Sale, For Rent)
- Price display
- Property title
- Location address
- Key features (Beds, Baths, Sqft)
- Favorite/save button
- Compare option

### Responsive Behavior
| Breakpoint | Behavior |
|------------|----------|
| **Desktop (>1200px)** | Full 3-4 column grid, all features visible |
| **Tablet (768-1199px)** | 2-3 column grid, condensed navigation |
| **Mobile (<768px)** | Single column, hamburger menu, stacked elements |

### Interactive Elements
- Hover effects on property cards
- Animated transitions
- Modal for login/register
- Off-canvas sidebar panel
- Mobile-responsive menu

## Sections Breakdown

| Section | Description |
|---------|-------------|
| **Header** | Logo, navigation, user actions, mobile menu |
| **Hero** | Background image, search form, headline |
| **Featured Properties** | Grid of property listings |
| **Categories** | Property type icons with counts |
| **Popular Areas** | Location cards with images |
| **Agents** | Agent profiles with ratings |
| **Blog** | Latest news preview |
| **Footer** | Links, contact, social, newsletter |

## Technical Specifications

### Framework
- **Next.js**: App Router architecture
- **React**: Server and client components
- **TypeScript**: Type-safe development

### Styling
- **Bootstrap 5**: Grid system and utilities
- **Custom CSS**: Theme-specific styles
- **SCSS**: Modular styling approach

### Components Used
```
components/
├── Header/
│   ├── MainMenu.tsx
│   ├── MobileMenu.tsx
│   └── SidebarPanel.tsx
├── Hero/
│   ├── HeroBanner.tsx
│   └── SearchForm.tsx
├── Property/
│   ├── PropertyCard.tsx
│   ├── PropertyGrid.tsx
│   └── PropertyFilter.tsx
├── Agent/
│   ├── AgentCard.tsx
│   └── AgentGrid.tsx
└── Footer/
    └── Footer.tsx
```

## Use Case Recommendations

### Ideal For
- **Real Estate Agencies**: Professional property showcase
- **Property Marketplaces**: Multi-vendor listing platforms
- **Rental Platforms**: Apartment and home rentals
- **Real Estate Portals**: Comprehensive property search sites

### Best Practices
1. Customize the hero image to match your brand
2. Configure search form filters based on your market
3. Update featured properties regularly
4. Add local market-specific categories
5. Integrate with your preferred MLS/API

### Customization Points
- Hero background image and text
- Search form field configuration
- Property card layout options
- Color scheme via CSS variables
- Footer content and links

## Related Pages

- [Home 2](./home-2.md) - Alternative hero design
- [Property List - Grid Default](../property-list-pages/grid-default.md) - Property listing page
- [Single Property V1](../property-single-pages/single-v1.md) - Property detail page

---

*Homez - Modern Designed Real Estate React NextJS Template*
