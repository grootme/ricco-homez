# Property Single V2

## 1. URL and Page Title

- **URL**: `https://homez-appdir.vercel.app/single-v2/1`
- **Page Title**: `Property Single V2 || Homez - Real Estate NextJS Template`
- **Template**: Homez Real Estate NextJS Template
- **Page Type**: Property Detail Page (Single Style Version 2)

---

## 2. Page Overview

Property Single V2 is an alternative property detail page template featuring a more compact header design with inline property specifications. This version offers a streamlined layout that emphasizes visual content while maintaining all essential property information. The key difference from V1 is the inline overview section and slightly different content organization.

### Purpose
- Display complete property information in a more visual-centric layout
- Provide streamlined user experience with compact specs display
- Offer quick access to inquiry and tour scheduling features
- Showcase property through multiple media formats
- Enable easy comparison with similar properties

### Key Differences from V1
- Inline overview section (not grid-based)
- More compact header with integrated specs
- Slightly different section ordering
- No "Schedule a tour" section in sidebar (moved to different location)

---

## 3. Layout Structure

### 3.1 Overall Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  Logo | Navigation Menu | Login/Register | Add Property     │
├─────────────────────────────────────────────────────────────┤
│                   PROPERTY GALLERY                           │
│         [Main Image with Navigation Thumbnails]              │
├─────────────────────────────────────────────────────────────┤
│              PROPERTY TITLE & INLINE SPECS                   │
│  Title | Price | Address | Beds | Baths | Sqft | Status     │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────┬────────────────────────┐  │
│  │                              │                        │  │
│  │     MAIN CONTENT AREA        │      RIGHT SIDEBAR     │  │
│  │                              │                        │  │
│  │   • Property Description     │   • Agent Card         │  │
│  │   • Property Details         │   • Inquiry Form       │  │
│  │   • Features                 │   • Mortgage Calc      │  │
│  │   • Floor Plans              │   • Property Stats     │  │
│  │   • Video/Virtual Tour       │                        │  │
│  │   • Nearby Locations         │                        │  │
│  │   • Location Map             │                        │  │
│  │                              │                        │  │
│  └──────────────────────────────┴────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                  SIMILAR PROPERTIES                          │
│              [Property Cards Grid]                           │
├─────────────────────────────────────────────────────────────┤
│                        FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Header Component

**Header Classes**: `header-nav nav-homepage-style light-header menu-home4 main-menu`

**Header Elements** (Same as V1):
- Logo: Links to homepage (`/`)
- Navigation Menu with dropdowns
- User Actions (Login/Register, Add Property)
- Mobile hamburger menu

### 3.3 Main Content Layout

**Container Structure**:
- Main container: `<div class="container">`
- Two-column layout using Bootstrap grid:
  - Left column: `col-lg-8` (Main property content)
  - Right column: `col-lg-4` (Sidebar)

---

## 4. Data Content Structure

### 4.1 Property Gallery

**Gallery Type**: Image Slider/Carousel with thumbnails

**Gallery Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `images` | Array[Object] | Collection of property images |
| `images[].url` | String | Image URL path |
| `images[].alt` | String | Alternative text for image |
| `images[].caption` | String | Optional image caption |
| `mainImage` | Object | Currently displayed main image |
| `thumbnailImages` | Array[Object] | Thumbnail navigation images |

**Gallery Features**:
- Main large image display
- Thumbnail navigation strip
- Previous/Next navigation arrows
- Full-screen lightbox mode

### 4.2 Property Header (Inline Style)

**Property Header Data**:
| Field | Value | Description |
|-------|-------|-------------|
| `title` | "Equestrian Family Home" | Property listing title |
| `status` | "For sale" | Listing status |
| `price` | "$14,000" | Property price |
| `address` | "New York City, CA, USA" | Property location |
| `listedDate` | "8 years ago" | Time since listing |
| `viewCount` | 8721 | Number of views |

**Inline Specs Display**:
| Spec | Value | Display Format |
|------|-------|----------------|
| Bedroom | 1 | Icon + Number |
| Bath | 2 | Icon + Number |
| Year Built | 2018 | Label + Value |
| Garage | 2 | Icon + Number |
| Sqft | 1200 | Icon + Number |
| Property Type | Houses | Label + Value |

### 4.3 Property Description

**Description Content**:
```
"This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. 
From the open floor plan to the abundance of light from the windows, this home is perfect 
for entertaining. The living room and dining room have vaulted ceilings and a beautiful 
fireplace. You will love spending time on the deck taking in the beautiful views. In the 
kitchen, you'll find stainless steel appliances and a tile backsplash, as well as a 
breakfast bar."
```

### 4.4 Property Details Section

**Property Details Data Structure**:
| Field | Value | Description |
|-------|-------|-------------|
| Property ID | Auto-generated | Unique identifier |
| Property Size | 1200 sqft | Total property area |
| Garage Size | 400 sqft | Garage area |
| Property Type | Houses | Category type |
| Property Status | For Sale | Listing status |
| State/County | Los Angeles | Administrative region |

### 4.5 Features & Amenities

**Features Categories**:

#### Interior Features
- Air Conditioning
- Heating System
- Laundry Room
- Walk-in Closets
- Hardwood Floors
- Carpet
- Tile Flooring
- Ceiling Fans
- Fireplace

#### Kitchen Features
- Dishwasher
- Garbage Disposal
- Microwave
- Range/Oven
- Refrigerator
- Stainless Steel Appliances
- Breakfast Bar
- Tile Backsplash

#### Exterior Features
- Balcony/Deck
- Patio
- Fenced Yard
- Garage - Attached
- Off-Street Parking
- Gated Community

#### Community Features
- Pool
- Fitness Center
- Clubhouse
- Tennis Courts
- Playground
- Security System
- HOA

### 4.6 Energy Class

**Energy Performance Data**:
| Field | Value | Description |
|-------|-------|-------------|
| Global Energy Performance Index | Rating | Energy efficiency rating |
| Renewable Energy Performance Index | Rating | Renewable energy score |
| Energy Class | A-G | EU energy classification |

### 4.7 Floor Plans

**Floor Plans Data Structure**:
| Field | Type | Description |
|-------|------|-------------|
| `floorPlans` | Array[Object] | Collection of floor plans |
| `floorPlans[].name` | String | Floor plan name |
| `floorPlans[].size` | String | Floor area in sqft |
| `floorPlans[].bedrooms` | Number | Number of bedrooms |
| `floorPlans[].bathrooms` | Number | Number of bathrooms |
| `floorPlans[].image` | String | Floor plan image URL |
| `floorPlans[].description` | String | Floor plan description |

### 4.8 Video Section

**Video Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `videoUrl` | String | Video URL |
| `videoType` | String | Video provider type |
| `videoThumbnail` | String | Video preview image |
| `videoTitle` | String | Video title |

### 4.9 360° Virtual Tour

**Virtual Tour Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `virtualTourUrl` | String | 360° tour URL |
| `virtualTourProvider` | String | Tour platform |
| `virtualTourThumbnail` | String | Tour preview image |

### 4.10 Location & Nearby

**Address Details**:
| Field | Value |
|-------|-------|
| Street Address | 10425 Tabor St |
| City | Los Angeles |
| State | CA |
| ZIP Code | 90034 |
| Country | USA |

**What's Nearby Categories**:
- Education (Schools)
- Health & Medical
- Transportation

**Walk Score Display**:
- Score value with visual indicator
- Walkability description

### 4.11 Mortgage Calculator

**Calculator Fields**:
| Field | Type | Default Value |
|-------|------|---------------|
| Home Price | Input | $14,000 |
| Down Payment | Input | $250 |
| Interest Rate | Input | 3.5% |
| Loan Term | Select | 12 years |

**Calculator Outputs**:
- Monthly Payment
- Total Payment
- Principal & Interest breakdown

### 4.12 Property Views Statistics

**Statistics Data**:
| Metric | Value |
|--------|-------|
| Total Views | 8721 |
| Views This Week | Number |
| Views This Month | Number |
| View Trend Chart | Graph |

### 4.13 Home Value

**Value Data**:
| Field | Description |
|-------|-------------|
| Estimated Value | AI-predicted property value |
| Value Trend | Price trend |
| Comparable Sales | Similar property prices |

### 4.14 Agent Information

**Agent Card Data**:
| Field | Value | Description |
|-------|-------|-------------|
| Agent Name | "Arlene McCoy" | Full name |
| Agent Photo | Image URL | Profile photo |
| Agent Title | "Real Estate Agent" | Professional title |
| Phone | Phone number | Contact phone |
| Email | Email address | Contact email |
| Agency | Agency name | Associated agency |
| Rating | Star rating | Agent rating |
| Review Count | Number | Total reviews |
| Listed Properties | Number | Active listings |

**Multiple Agents Display**:
- Arlene McCoy
- Bessie Cooper
- Darrell Steward

### 4.15 Inquiry Form

**Form Fields**:
| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| Name | Text | Yes | "Ali Tufan" |
| Phone | Tel | Yes | "Enter your phone" |
| Email | Email | Yes | "ibthemes21@gmail.com" |
| Message | Textarea | Yes | "Hello, I am interested in [Renovated apartment at last floor]" |

### 4.16 Leave a Review

**Review Form Fields**:
| Field | Type | Required |
|-------|------|----------|
| Rating | Stars | Yes |
| Review Title | Text | Yes |
| Review Text | Textarea | Yes |
| Reviewer Name | Text | Yes |
| Reviewer Email | Email | Yes |

### 4.17 Similar Properties

**Similar Properties Section Title**: "Discover Our Featured Listings"

**Property Card Data**:
- Property ID
- Title
- Price
- Address
- Image
- Beds/Baths/Sqft
- Status badge

---

## 5. Component Breakdown

### 5.1 UI Components List

| Component | Description | Location |
|-----------|-------------|----------|
| HeaderNav | Main navigation bar | Page top |
| PropertyGallery | Image carousel | After header |
| PropertyHeaderInline | Title + inline specs | Below gallery |
| PropertyDescription | Rich text content | Main content |
| PropertyDetails | Detailed specifications | Main content |
| FeatureList | Amenities checklist | Main content |
| FloorPlanAccordion | Expandable floor plans | Main content |
| VideoPlayer | Embedded video | Main content |
| VirtualTourViewer | 360° tour viewer | Main content |
| NearbyMap | Location map | Main content |
| NearbyPlaces | Places list | Main content |
| WalkScoreWidget | Walkability score | Main content |
| MortgageCalculator | Payment calculator | Sidebar |
| PropertyStats | View statistics | Sidebar |
| HomeValueWidget | Property valuation | Sidebar |
| AgentCard | Agent info card | Sidebar |
| InquiryForm | Contact form | Sidebar |
| ReviewForm | Review submission | Sidebar |
| SimilarProperties | Property carousel | Before footer |
| Footer | Page footer | Page bottom |

### 5.2 V2 Specific Components

**Inline Property Specs**:
- Horizontal layout for quick stats
- Compact display with icons
- No separate "Overview" section

---

## 6. Interactive Elements

### 6.1 Gallery Interactions

| Interaction | Action | Response |
|-------------|--------|----------|
| Click thumbnail | Select image | Main image updates |
| Click arrows | Navigate | Previous/Next image |
| Click main image | Open lightbox | Fullscreen view |
| Swipe (mobile) | Navigate | Previous/Next image |

### 6.2 Tab/Accordion Interactions

**Floor Plan Accordion**:
| Interaction | Action |
|-------------|--------|
| Click floor name | Expand/Collapse |
| Click image | Zoom view |

**Feature Categories**:
| Interaction | Action |
|-------------|--------|
| Click "Show more" | Expand list |
| Click "Show less" | Collapse list |

### 6.3 Form Interactions

**Inquiry Form Validation**:
| Field | Validation |
|-------|------------|
| Name | Required, min 2 characters |
| Email | Required, valid email format |
| Phone | Required, valid phone format |
| Message | Required, min 10 characters |

---

## 7. Responsive Behavior

### 7.1 Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 576px | Single column |
| Tablet | 576px - 768px | Single column |
| Small Desktop | 768px - 992px | Two columns |
| Desktop | 992px - 1200px | Two columns |
| Large Desktop | > 1200px | Two columns |

### 7.2 Mobile Layout Changes

**Header Changes**:
- Hamburger menu replaces full navigation
- Slide-out mobile menu

**Inline Specs Changes**:
- Stack vertically on mobile
- Smaller text/icons

**Content Changes**:
- Sidebar moves below main content
- Single column layout

---

## 8. Styling & CSS Classes

### 8.1 Main Container Classes

```css
.wrapper { /* Main page wrapper */ }
.container { /* Bootstrap container */ }
.single-property-content { /* Main content wrapper */ }
```

### 8.2 Inline Specs Classes (V2 Specific)

```css
.property-meta { /* Inline specs container */ }
.property-meta-item { /* Individual spec item */ }
.property-meta-icon { /* Icon for spec */ }
.property-meta-value { /* Value display */ }
```

### 8.3 Content Classes

```css
.property-header { /* Title section */ }
.property-description { /* Description text */ }
.property-details { /* Details section */ }
.features-list { /* Amenities list */ }
```

### 8.4 Sidebar Classes

```css
.agen-personal-info { /* Agent card */ }
.inquiry-form { /* Contact form */ }
.mortgage-calculator { /* Calculator widget */ }
```

---

## 9. Version-Specific Features (V2)

### 9.1 V2 Unique Characteristics

| Feature | V2 Implementation |
|---------|-------------------|
| Overview Display | Inline horizontal layout |
| Specs Position | Below title, single row |
| Overview Section | No separate section |
| Tour Scheduling | Not in sidebar |

### 9.2 Differences from V1

| Feature | V1 | V2 |
|---------|----|----|
| Overview Style | Grid layout | Inline horizontal |
| Overview Position | Separate section | Below title |
| Schedule Tour | In sidebar | Not present |
| Header Height | Standard | More compact |

### 9.3 Comparison with Other Versions

| Feature | V1 | V2 | V3 | V4 | V5 |
|---------|----|----|----|----|----|
| Gallery Position | Top | Top | Top | Full | Split |
| Overview Style | Grid | Inline | Grid | Cards | Compact |
| Schedule Tour | Yes | No | Yes | Yes | Yes |
| Sidebar Position | Right | Right | Right | Left | Bottom |

---

## Technical Implementation

### Gallery Dependencies
- swiper: ^11.0.0 for image galleries
- Lightbox functionality for full-screen images

### Map Integration
- @react-google-maps/api for property location
- Street View integration

### Social Sharing
- Social share buttons (fab classes)
- Copy link functionality

### Contact Form
- react-hook-form for validation
- Agent contact modal

---

## Animation System

### Primary Animation Library: AOS (Animate On Scroll)

**Note**: This template uses AOS, NOT GSAP, for scroll animations.

```json
{
  "library": "aos",
  "version": "^2.3.4",
  "documentation": "https://michalsnik.github.io/aos/"
}
```

**Global Configuration**:
```javascript
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0,
  once: true,
  offset: 120
});
```

### V2-Specific Animations

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Property Header | fade-up | 0ms | 1000ms |
| Inline Specs | fade-up | 100ms | 1000ms |
| Description | fade-up | 200ms | 1000ms |
| Sidebar | fade-left | 300ms | 1000ms |

### CSS Transitions (V2 Compact Style)

```css
/* Inline specs animation */
.inline-specs {
  transition: all 0.3s ease;
}

.inline-specs:hover {
  background-color: rgba(235, 103, 83, 0.07);
}
```

---

## Theme Variables

### Color Palette

```css
:root {
  --color-primary: #eb6753;
  --color-primary-hover: #c53535;
  --color-secondary: #041e42;
  --color-dark: #0f172a;
  --color-gray-200: #f7f7f7;
  --color-gray-300: #efefef;
  --color-gray-500: #64748b;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

### V2-Specific Styles

```css
/* Inline specs styling */
.inline-specs-container {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #efefef;
}

.inline-spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

---

## NPM Dependencies

```json
{
  "aos": "^2.3.4",
  "swiper": "^11.0.0",
  "bootstrap": "^5.3.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0",
  "react-hook-form": "^7.48.0",
  "@react-google-maps/api": "^2.19.0",
  "@fortawesome/react-fontawesome": "^0.2.0"
}
```

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### GSAP Setup and Configuration

```javascript
// lib/gsap-config.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

### Page Load Animations (V2 Inline Layout)

```javascript
// components/PropertySingleV2.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery entrance
      gsap.from('.property-gallery', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Title section
      gsap.from('.property-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out'
      });

      // V2-specific: Inline specs animation
      gsap.from('.inline-specs .spec-item', {
        opacity: 0,
        x: -20,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Inline Specs Animation (V2 Unique)

```javascript
// Inline specs horizontal reveal
gsap.from('.inline-specs', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.3,
  ease: 'power2.out'
});

// Each spec item with icon animation
gsap.from('.spec-item', {
  opacity: 0,
  x: -15,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out',
  delay: 0.5
});

// Spec icons rotation
gsap.from('.spec-item .icon', {
  rotation: -180,
  opacity: 0,
  stagger: 0.08,
  duration: 0.6,
  ease: 'back.out(1.7)',
  delay: 0.6
});
```

### ScrollTrigger Animations

```javascript
// Property description
gsap.from('.property-description', {
  scrollTrigger: {
    trigger: '.property-description',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: 'power3.out'
});

// Property details grid
gsap.from('.details-grid .detail-item', {
  scrollTrigger: {
    trigger: '.details-grid',
    start: 'top 85%'
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.08,
  duration: 0.5,
  ease: 'back.out(1.2)'
});

// Features categories
gsap.from('.features-category', {
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Sidebar Animations

```javascript
// Sidebar entrance from right
gsap.from('.sidebar-widget', {
  scrollTrigger: {
    trigger: '.sidebar',
    start: 'top 80%'
  },
  opacity: 0,
  x: 60,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power3.out'
});

// Agent card with scale
gsap.from('.agent-card', {
  scrollTrigger: {
    trigger: '.agent-card',
    start: 'top 90%'
  },
  opacity: 0,
  scale: 0.9,
  y: 30,
  duration: 0.6,
  ease: 'back.out(1.4)'
});
```

### Hover Animations

```javascript
// Inline spec hover effect
const setupSpecHovers = () => {
  const specs = document.querySelectorAll('.spec-item');
  
  specs.forEach(spec => {
    spec.addEventListener('mouseenter', () => {
      gsap.to(spec, {
        backgroundColor: 'rgba(235, 103, 83, 0.07)',
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(spec.querySelector('.icon'), {
        color: '#eb6753',
        scale: 1.1,
        duration: 0.3
      });
    });
    
    spec.addEventListener('mouseleave', () => {
      gsap.to(spec, {
        backgroundColor: 'transparent',
        scale: 1,
        duration: 0.3
      });
      gsap.to(spec.querySelector('.icon'), {
        color: 'inherit',
        scale: 1,
        duration: 0.3
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V2 compact header timeline
const headerTimeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

headerTimeline
  .from('.property-gallery', { opacity: 0, y: 50, duration: 0.8 })
  .from('.property-title', { opacity: 0, y: 25, duration: 0.5 }, '-=0.4')
  .from('.inline-specs', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')
  .from('.spec-item', { 
    opacity: 0, 
    x: -10, 
    stagger: 0.05, 
    duration: 0.3 
  }, '-=0.2')
  .from('.price-badge', { 
    opacity: 0, 
    scale: 0.8, 
    duration: 0.4, 
    ease: 'back.out(1.7)' 
  }, '-=0.3');
```

### Similar Properties Animation

```javascript
gsap.from('.similar-properties .property-card', {
  scrollTrigger: {
    trigger: '.similar-properties',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power3.out'
});
```

### NPM Dependencies

```json
{
  "gsap": "^3.12.0",
  "aos": "^2.3.4",
  "swiper": "^11.0.0"
}
```

---

*Documentation generated for Homez Real Estate NextJS Template - Property Single V2*
*Last updated: April 2025*
