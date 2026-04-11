# Home 3 - Modern Property Focus Layout

## Overview

**URL:** [https://homez-appdir.vercel.app/home-v3](https://homez-appdir.vercel.app/home-v3)  
**Template Type:** Homepage  
**Version:** 3

Home 3 presents a modern, property-focused design with a light-colored logo variant and enhanced visual elements. This version emphasizes property showcases and includes preload optimizations for faster image loading.

## Layout Components

### Hero Section
- **Light Theme Header**: White/light background header variant
- **Property-Focused Hero**: Emphasis on property imagery
- **Preloaded Images**: Optimized image loading with priority hints
- **Modern Aesthetics**: Clean, contemporary design language

### Navigation
- **Light Header Style**: menu-home4 class with light background
- **White Logo Variant**: header-logo2.svg for light backgrounds
- **Full Navigation Menu**: Complete dropdown structure
- **User Actions**: Login and property submission buttons

### Property Showcase
- **Enhanced Property Cards**: Larger images, more details
- **Featured Listings**: Prominent property displays
- **Category Navigation**: Property type browsing
- **Quick Actions**: Save, compare, share options

## Design Characteristics

| Aspect | Details |
|--------|---------|
| **Header Style** | Light theme (light-header menu-home4) |
| **Logo Variant** | Light background logo (header-logo2.svg) |
| **Preload Strategy** | Hero images preloaded for performance |
| **Typography** | DM Sans with varied weights |
| **Visual Style** | Modern, clean, image-focused |

### Image Optimization
```html
<link rel="preload" as="image" imagesrcset="why-chose-1.png">
<link rel="preload" as="image" imagesrcset="cta-member-1.png">
```

### Color Scheme
- Light background header
- Dark text on light surfaces
- Accent colors for CTAs
- Property images as visual anchors

## Key Features

### Performance Optimizations
- Image preloading for critical assets
- Responsive image srcset
- Lazy loading for below-fold images
- Optimized font loading (woff2)

### Search Functionality
- Multi-select dropdowns
- Tag-based filtering
- Range sliders for price
- Saved search options

### Property Features
- Image galleries with navigation
- Status indicators (Featured, New)
- Virtual tour badges
- Floor plan previews

## Sections Breakdown

| Section | Description | Notes |
|---------|-------------|-------|
| **Header** | Light theme navigation | White logo variant |
| **Hero** | Property-focused banner | Preloaded images |
| **Why Choose Us** | Features/benefits | Trust building |
| **Properties** | Featured listings | Enhanced cards |
| **Categories** | Property types | Icon-based navigation |
| **CTA Member** | Call to action | Membership/registration |
| **Testimonials** | Client reviews | Social proof |
| **Footer** | Site information | Comprehensive links |

## Responsive Behavior

| Breakpoint | Adaptations |
|------------|-------------|
| **Desktop (>1200px)** | Full navigation, multi-column grids |
| **Tablet (768-1199px)** | Light header adapts, touch-friendly |
| **Mobile (<768px)** | Dark mobile navigation, stacked content |

### Mobile-Specific Features
- Dark navigation icon for visibility
- Condensed property information
- Swipeable image galleries
- Touch-optimized interactions

## Technical Specifications

### Page Structure
```
app/(home)/home-v3/
├── page.tsx
└── components/
    ├── Hero.tsx
    ├── WhyChoose.tsx
    ├── PropertiesGrid.tsx
    └── CTAMember.tsx
```

### CSS Classes Used
```css
.header-nav.nav-homepage-style.at-home3
.header-logo.logo2  /* Light variant */
```

### JavaScript Chunks
- `home-v3/page-193d7bde54da0d85.js`
- Shared component chunks
- React-select for dropdowns

### Multi-Select Components
Enhanced filter components with multi-select capability:
```javascript
// Select components with multi-value support
.css-1p3m7a8-multiValue { /* Tag styling */ }
.css-9jq23d { /* Multi-value label */ }
.css-v7duua { /* Remove button */ }
```

## Use Case Recommendations

### Ideal For
- **Modern Brokerages**: Contemporary brand image
- **Luxury Properties**: Premium visual presentation
- **Tech-Forward Agencies**: Performance-optimized experience
- **Image-Rich Portfolios**: Photography-focused listings

### Design Philosophy
1. Properties as visual centerpieces
2. Clean, uncluttered layouts
3. Performance-first approach
4. Modern user expectations

### Customization Points
- Hero imagery selection
- Logo variant for branding
- Feature highlights section
- CTA messaging and design

## Unique Elements

### Preload Configuration
```javascript
// Critical image preloading
<link rel="preload" as="image" 
      imagesrcset="/images/about/why-chose-1.png?w=640&q=75 1x, 
                   /images/about/why-chose-1.png?w=1200&q=75 2x" 
      fetchpriority="high">
```

### Multi-Select Filtering
Enhanced property filtering with React Select:
- Multiple selections per filter
- Tag-based visual feedback
- Easy removal of selections
- Search within dropdowns

## Comparison Table

| Aspect | Home 1 | Home 2 | Home 3 |
|--------|--------|--------|--------|
| Header Theme | Transparent | Transparent | Light |
| Logo Style | Standard | Standard | Light variant |
| Image Focus | Moderate | Moderate | High |
| Preload | Basic | Basic | Advanced |
| Filter Type | Single select | Single select | Multi-select |

## Related Pages

- [Home 2](./home-2.md) - Alternative hero design
- [Home 4](./home-4.md) - Agent-focused design
- [Property Single V3](../property-single-pages/single-v3.md) - Property detail

---

*Homez - Modern Designed Real Estate React NextJS Template*
