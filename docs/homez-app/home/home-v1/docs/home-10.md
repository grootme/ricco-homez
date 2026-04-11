# Home 10 - Full-Width Design

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v10](https://homez-appdir.vercel.app/home-v10)  
**Template Type:** Homepage  
**Version:** 10

Home 10 utilizes a full-width design approach, maximizing screen real estate for property displays and content sections. This variant creates an immersive, edge-to-edge visual experience with no container constraints.

## Layout Components

### Hero Section
- **Full-Width Hero**: Edge-to-edge content
- **No Container Constraints**: Full viewport width
- **Immersive Imagery**: Large background visuals
- **Full-Screen Options**: Viewport-height sections

### Full-Width Sections
- **Property Carousels**: Full-width sliders
- **Image Galleries**: Edge-to-edge images
- **Statistics Displays**: Full-width stats
- **Feature Sections**: Wide content areas

### Layout Structure
- **No Sidebars**: Full content width
- **Wide Grids**: More columns visible
- **Large Cards**: Expanded property cards
- **Horizontal Navigation**: Extended menu

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Container Width** | None (full-width) |
| **Grid System** | Wide column layouts |
| **Spacing** | Generous horizontal padding |
| **Visual Impact** | Bold, immersive |
| **Typography** | Large, impactful |

### Full-Width CSS
```css
/* Full-width sections */
.full-width-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0 40px;
}

/* Wide container */
.container-fluid {
  max-width: none;
  padding: 0;
}
```

### Grid Configuration
```
Wide Grid Options:
- 5-6 columns for property grid
- 4-5 columns for featured listings
- Full-width carousels
- Edge-to-edge galleries
```

## Key Features

### Immersive Property Display
- Large property images
- Full-width carousels
- Expanded property details
- More visible listings

### Content Sections
- Wide feature displays
- Horizontal statistics
- Full-width testimonials
- Edge-to-edge CTAs

### Visual Hierarchy
- Bold headlines
- Large typography
- Generous spacing
- High-impact imagery

## Sections Breakdown

| Section | Description | Full-Width Treatment |
|---------|-------------|----------------------|
| **Header** | Full-width navigation | Edge-to-edge header |
| **Hero** | Full-screen hero | Viewport height |
| **Properties** | Wide property grid | 5-6 columns |
| **Carousel** | Property slider | Full-width slides |
| **Features** | Platform benefits | Wide cards |
| **Stats** | Company metrics | Full-width bar |
| **Testimonials** | Client reviews | Wide carousel |
| **CTA** | Lead generation | Full-width banner |
| **Footer** | Site information | Full-width footer |

## Responsive Behavior

| Breakpoint | Full-Width Adaptation |
|------------|----------------------|
| **Desktop (>1400px)** | Full 5-6 columns, edge content |
| **Desktop (1200-1400px)** | 4-5 columns, full-width feel |
| **Tablet (768-1199px)** | 2-3 columns, container reapplies |
| **Mobile (<768px)** | Single column, standard mobile |

### Full-Width on Different Screens
```
Ultra-wide (2560px+):
- Maximum visual impact
- 6+ column grids
- Generous spacing

Standard (1920px):
- 5-6 columns
- Balanced spacing

Laptop (1366px):
- 4-5 columns
- Maintained full-width feel

Tablet/Mobile:
- Reverts to container
- Standard responsive behavior
```

## Technical Specifications

### Page Structure
```
app/(home)/home-v10/
├── page.tsx
└── components/
    ├── FullWidthHero.tsx
    ├── WidePropertyGrid.tsx
    ├── FullWidthCarousel.tsx
    ├── WideFeatureSection.tsx
    └── FullWidthCTA.tsx
```

### CSS Implementation
```css
/* Full-width section mixin */
.full-width {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}

/* Wide container */
.wide-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Ultra-wide support */
@media (min-width: 1920px) {
  .wide-container {
    padding: 0 80px;
  }
}
```

## Use Case Recommendations

### Ideal For
- **Luxury Real Estate**: Premium visual showcase
- **Property Portfolios**: Maximum property visibility
- **Image-Rich Platforms**: Photography focus
- **High-End Brands**: Bold brand presence

### Full-Width Benefits
1. Maximum property visibility
2. Immersive user experience
3. Bold visual statement
4. Modern design aesthetic
5. Better use of wide screens

### Customization Points
- Section padding values
- Grid column counts
- Container max-widths
- Breakpoint configurations

## Property Grid Options

### Wide Grid Configuration
```
5-Column Grid:
|  Card  |  Card  |  Card  |  Card  |  Card  |

6-Column Grid:
| Card | Card | Card | Card | Card | Card |

Benefits:
- More properties visible
- Better screen utilization
- Modern aesthetic
- Less scrolling
```

### Carousel Configuration
```javascript
carouselSettings: {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,  // 4-5 on wide screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
}
```

## Performance Considerations

### Full-Width Optimization
```
1. Lazy load below-fold images
2. Optimize for wide images
3. Efficient carousel rendering
4. CSS containment for sections
5. Reduced animation complexity
```

### Image Sizing
```
Recommended Image Sizes:
- Hero: 2560px wide
- Property cards: 800px wide
- Carousels: 1200px wide
- Backgrounds: 2560px wide
```

## Comparison Table

| Feature | Home 9 | Home 10 |
|---------|--------|---------|
| Hero Type | Video background | Full-width image |
| Container | Standard/contained | No container |
| Grid Columns | 3-4 | 5-6 |
| Visual Style | Cinematic | Bold/expansive |
| Screen Usage | Optimized | Maximized |

## Full-Width Section Examples

### Hero Section
```
┌────────────────────────────────────────────────────────────┐
│  [Full-width Hero Background Image]                        │
│                                                            │
│        Find Your Dream Home                                │
│        [Search Form - Full Width]                          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Property Grid
```
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│ Prop 1  │ Prop 2  │ Prop 3  │ Prop 4  │ Prop 5  │
├─────────┼─────────┼─────────┼─────────┼─────────┤
│ Prop 6  │ Prop 7  │ Prop 8  │ Prop 9  │ Prop 10 │
└─────────┴─────────┴─────────┴─────────┴─────────┘
```

## Related Pages

- [Home 9](./home-9.md) - Video hero section
- [Home 1](./home-1.md) - Default layout
- [Grid Full 4 Col](../property-list-pages/grid-full-4-col.md) - Wide grid listing

---

*Homez - Modern Designed Real Estate React NextJS Template*
