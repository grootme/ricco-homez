# Home 7 - Featured Listings Focus

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v7](https://homez-appdir.vercel.app/home-v7)  
**Template Type:** Homepage  
**Version:** 7

Home 7 puts featured property listings at the forefront, designed for real estate platforms that want to immediately showcase their best properties. This variant prioritizes property visibility and conversion through prominent listing displays.

## Layout Components

### Hero Section
- **Property-First Hero**: Featured listing integration
- **Quick Search Access**: Prominent search functionality
- **Featured Property Highlight**: Showcase top listings
- **Conversion Focus**: Lead generation emphasis

### Featured Listings
- **Prominent Display**: Large property cards
- **Multiple Showcases**: Various property categories
- **Quick Actions**: Save, compare, contact
- **Status Badges**: Featured, New, Hot deals

### Property Categories
- **Categorized Listings**: Property type sections
- **Quick Filters**: Fast category navigation
- **Count Displays**: Properties per category
- **Visual Navigation**: Image-based categories

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Layout Priority** | Featured listings first |
| **Card Design** | Large, detailed property cards |
| **Visual Hierarchy** | Properties > Navigation > Content |
| **Conversion Elements** | Multiple CTAs per property |
| **Image Focus** | High-quality property photos |

### Featured Property Card
```
Enhanced card includes:
- Large image carousel
- Prominent price display
- Detailed specifications
- Agent quick contact
- Status indicators
- Multiple action buttons
```

## Key Features

### Featured Listing Showcase
- Hero property spotlights
- Curated property collections
- Premium listing displays
- Video tour integration
- Virtual tour badges

### Quick Property Actions
- Save to favorites
- Add to compare
- Schedule viewing
- Contact agent
- Share property

### Category Navigation
- Property type icons
- Quick filter buttons
- Count indicators
- Visual category cards

## Sections Breakdown

| Section | Description | Listing Focus |
|---------|-------------|---------------|
| **Header** | Standard navigation | Listing categories |
| **Hero** | Featured property | Hero listing display |
| **Featured** | Top listings | Large property cards |
| **Categories** | Property types | Category navigation |
| **Recent** | Latest listings | Grid display |
| **Popular** | Trending properties | Popular section |
| **Agents** | Featured agents | Agent attribution |
| **CTA** | Lead generation | Contact/Inquiry |
| **Footer** | Site information | Standard footer |

## Responsive Behavior

| Breakpoint | Listing Display |
|------------|-----------------|
| **Desktop** | Large cards, 3-4 columns |
| **Tablet** | Medium cards, 2 columns |
| **Mobile** | Single column, swipeable |

### Mobile Listing Experience
- Swipeable property galleries
- Touch-friendly actions
- Quick contact buttons
- Simplified information

## Technical Specifications

### Page Structure
```
app/(home)/home-v7/
├── page.tsx
└── components/
    ├── FeaturedHero.tsx
    ├── FeaturedListings.tsx
    ├── PropertyCategories.tsx
    ├── RecentListings.tsx
    └── PopularProperties.tsx
```

### Component Features
```javascript
// Featured property card props
interface FeaturedCardProps {
  images: string[];
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  agent: AgentInfo;
  status: 'featured' | 'new' | 'hot';
  virtualTour?: boolean;
  videoTour?: boolean;
}
```

## Use Case Recommendations

### Ideal For
- **Property Portals**: High listing volume
- **Marketplaces**: Multiple agents/owners
- **Investment Platforms**: Featured deals
- **Luxury Real Estate**: Premium showcases

### Featured Listing Strategy
1. Premium placement for featured properties
2. Multiple showcase opportunities
3. Category-based browsing
4. Quick conversion paths
5. Agent visibility

### Customization Points
- Featured listing criteria
- Category configuration
- Card layout options
- Action button selection
- Status badge styling

## Featured Property Elements

### Status Badges
```
- Featured (Star icon)
- New (Green badge)
- Hot Deal (Red badge)
- Price Reduced (Orange)
- Open House (Blue)
- Virtual Tour (Purple)
```

### Quick Actions
```
Each property includes:
- Heart icon (Save/Favorite)
- Compare icon (Add to compare)
- Share icon (Social sharing)
- Phone icon (Contact agent)
- Calendar icon (Schedule tour)
```

## Conversion Optimization

### Lead Generation
- Prominent contact buttons
- Schedule viewing CTAs
- Agent contact forms
- Newsletter signup
- Property alerts

### User Engagement
- Save favorites
- Compare properties
- Share listings
- Property alerts
- Recently viewed

## Comparison Table

| Feature | Home 6 | Home 7 |
|---------|--------|--------|
| Design Style | Minimal | Feature-rich |
| Property Display | Basic cards | Enhanced cards |
| Actions | Limited | Multiple per card |
| Categories | Text list | Visual navigation |
| Focus | Simplicity | Conversion |

## Related Pages

- [Home 6](./home-6.md) - Minimal design
- [Home 8](./home-8.md) - Map integration focus
- [Property List](../property-list-pages/grid-default.md) - Full listings

---

*Homez - Modern Designed Real Estate React NextJS Template*
