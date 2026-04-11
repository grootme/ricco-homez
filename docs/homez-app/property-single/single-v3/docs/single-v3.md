# Property Single V3

## 1. URL and Page Title

- **URL**: `https://homez-appdir.vercel.app/single-v3/1`
- **Page Title**: `Property Single V3 || Homez - Real Estate NextJS Template`
- **Template**: Homez Real Estate NextJS Template
- **Page Type**: Property Detail Page (Single Style Version 3)

---

## 2. Page Overview

Property Single V3 is a property detail page template that closely resembles V1 but maintains consistent layout patterns. This version features the standard grid-based overview section and includes all interactive elements like the Schedule a Tour feature. V3 serves as a reliable alternative for property listings with proven UI patterns.

### Purpose
- Display comprehensive property information with proven layout
- Provide all interactive features including tour scheduling
- Maintain consistency with the primary template design
- Offer reliable user experience with familiar navigation

### Key Differences from V1 and V2
- Similar to V1 with grid overview section
- Includes Schedule a Tour in sidebar (like V1)
- Standard layout positioning
- Complete feature set

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
│  ┌──────────────────────────────────────────────────────┐   │
│  │              PROPERTY HEADER                          │   │
│  │  Title | Price | Address | Status | View Count       │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              OVERVIEW GRID                            │   │
│  │  [Bed] [Bath] [Year] [Garage] [Sqft] [Type]          │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────┬────────────────────────┐  │
│  │                              │                        │  │
│  │     MAIN CONTENT AREA        │      RIGHT SIDEBAR     │  │
│  │                              │                        │  │
│  │   • Overview (Grid)          │   • Agent Card         │  │
│  │   • Property Description     │   • Inquiry Form       │  │
│  │   • Property Details         │   • Schedule Tour      │  │
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

**Header Elements**:
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

**Gallery Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `images` | Array[Object] | Collection of property images |
| `images[].url` | String | Image URL path |
| `images[].alt` | String | Alternative text for image |
| `mainImage` | Object | Currently displayed main image |
| `thumbnailImages` | Array[Object] | Thumbnail navigation images |

### 4.2 Property Header

**Property Header Data**:
| Field | Value | Description |
|-------|-------|-------------|
| `title` | "Equestrian Family Home" | Property listing title |
| `status` | "For sale" | Listing status |
| `price` | "$14,000" | Property price |
| `address` | "New York City, CA, USA" | Property location |
| `listedDate` | "8 years ago" | Time since listing |
| `viewCount` | 8721 | Number of views |

### 4.3 Overview Section (Grid Layout)

**Overview Grid Data**:
| Label | Value | Icon |
|-------|-------|------|
| Bedroom | 1 | Bed icon |
| Bath | 2 | Bath icon |
| Year Built | 2018 | Calendar icon |
| Garage | 2 | Car icon |
| Sqft | 1200 | Ruler icon |
| Property Type | Houses | Building icon |

**Grid Layout**:
```
┌────────────┬────────────┬────────────┐
│   Bedroom  │    Bath    │ Year Built │
│     1      │     2      │    2018    │
├────────────┼────────────┼────────────┤
│   Garage   │    Sqft    │   Type     │
│     2      │   1200     │   Houses   │
└────────────┴────────────┴────────────┘
```

### 4.4 Property Description

**Description Content**:
```
"This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. 
From the open floor plan to the abundance of light from the windows, this home is perfect 
for entertaining. The living room and dining room have vaulted ceilings and a beautiful 
fireplace. You will love spending time on the deck taking in the beautiful views. In the 
kitchen, you'll find stainless steel appliances and a tile backsplash, as well as a 
breakfast bar."
```

### 4.5 Property Details Section

**Property Details Data**:
| Field | Value |
|-------|-------|
| Property ID | Auto-generated |
| Property Size | 1200 sqft |
| Garage Size | 400 sqft |
| Property Type | Houses |
| Property Status | For Sale |
| State/County | Los Angeles |

### 4.6 Features & Amenities

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

### 4.7 Energy Class

**Energy Performance Data**:
| Field | Description |
|-------|-------------|
| Global Energy Performance Index | Energy efficiency rating |
| Renewable Energy Performance Index | Renewable energy score |
| Energy Class | EU energy classification |

### 4.8 Floor Plans

**Floor Plans Data Structure**:
| Field | Type | Description |
|-------|------|-------------|
| `floorPlans` | Array[Object] | Collection of floor plans |
| `floorPlans[].name` | String | Floor plan name |
| `floorPlans[].size` | String | Floor area in sqft |
| `floorPlans[].image` | String | Floor plan image URL |

### 4.9 Video Section

**Video Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `videoUrl` | String | Video URL |
| `videoType` | String | Video provider type |
| `videoThumbnail` | String | Video preview image |

### 4.10 360° Virtual Tour

**Virtual Tour Data**:
| Field | Type | Description |
|-------|------|-------------|
| `virtualTourUrl` | String | 360° tour URL |
| `virtualTourProvider` | String | Tour platform |

### 4.11 Location & Nearby

**Address Details**:
| Field | Value |
|-------|-------|
| Street Address | 10425 Tabor St |
| City | Los Angeles |
| State | CA |
| ZIP Code | 90034 |
| Country | USA |

**Nearby Categories**:
- Education (Schools)
- Health & Medical
- Transportation

**Walk Score**:
- Score value
- Walkability description

### 4.12 Mortgage Calculator

**Calculator Fields**:
| Field | Default Value |
|-------|---------------|
| Home Price | $14,000 |
| Down Payment | $250 |
| Interest Rate | 3.5% |
| Loan Term | 12 years |

**Outputs**:
- Monthly Payment: $1000
- Total Payment: $2304

### 4.13 Property Views Statistics

**Statistics Data**:
| Metric | Value |
|--------|-------|
| Total Views | 8721 |
| View Trend | Graph |

### 4.14 Home Value

**Value Data**:
- Estimated Value
- Value Trend
- Comparable Sales

### 4.15 Agent Information

**Agent Card Data**:
| Field | Value |
|-------|-------|
| Agent Name | "Arlene McCoy" |
| Agent Photo | Image URL |
| Phone | Phone number |
| Email | Email address |
| Rating | Star rating |

**Multiple Agents**:
- Arlene McCoy
- Bessie Cooper
- Darrell Steward

### 4.16 Inquiry Form

**Form Fields**:
| Field | Type | Placeholder |
|-------|------|-------------|
| Name | Text | "Ali Tufan" |
| Phone | Tel | "Enter your phone" |
| Email | Email | "ibthemes21@gmail.com" |
| Message | Textarea | "Hello, I am interested in..." |

### 4.17 Schedule a Tour

**Tour Type Options**:
| Type | Description |
|------|-------------|
| In Person | Physical property visit |
| Video Chat | Virtual property tour |

**Schedule Form Fields**:
| Field | Type |
|-------|------|
| Tour Type | Radio |
| Date | Date picker |
| Time | Select |

### 4.18 Leave a Review

**Review Form Fields**:
| Field | Type |
|-------|------|
| Rating | Stars |
| Review Title | Text |
| Review Text | Textarea |

### 4.19 Similar Properties

**Section Title**: "Discover Our Featured Listings"

**Property Card Data**:
- Title
- Price
- Address
- Image
- Beds/Baths/Sqft
- Status

---

## 5. Component Breakdown

### 5.1 UI Components List

| Component | Description | Location |
|-----------|-------------|----------|
| HeaderNav | Main navigation | Page top |
| PropertyGallery | Image carousel | After header |
| PropertyHeader | Title and price | Below gallery |
| OverviewGrid | Quick specs grid | After header |
| PropertyDescription | Rich text | Main content |
| PropertyDetails | Specifications | Main content |
| FeatureList | Amenities | Main content |
| FloorPlanAccordion | Floor plans | Main content |
| VideoPlayer | Video embed | Main content |
| VirtualTourViewer | 360° tour | Main content |
| NearbyMap | Location map | Main content |
| NearbyPlaces | Places list | Main content |
| WalkScoreWidget | Walkability | Main content |
| MortgageCalculator | Calculator | Sidebar |
| PropertyStats | Statistics | Sidebar |
| HomeValueWidget | Valuation | Sidebar |
| AgentCard | Agent info | Sidebar |
| InquiryForm | Contact form | Sidebar |
| ScheduleTour | Tour booking | Sidebar |
| ReviewForm | Review form | Sidebar |
| SimilarProperties | Property grid | Before footer |
| Footer | Page footer | Page bottom |

---

## 6. Interactive Elements

### 6.1 Gallery Interactions

| Interaction | Response |
|-------------|----------|
| Click thumbnail | Main image updates |
| Click arrows | Navigate images |
| Click main image | Open lightbox |
| Swipe (mobile) | Navigate images |

### 6.2 Overview Grid Interactions

| Interaction | Response |
|-------------|----------|
| Hover item | Highlight effect |
| Click item | Scroll to relevant section |

### 6.3 Tab/Accordion Interactions

**Floor Plan Accordion**:
- Click to expand/collapse
- Image zoom on click

**Feature Categories**:
- "Show more" expands list
- "Show less" collapses list

### 6.4 Form Interactions

**Inquiry Form Validation**:
| Field | Validation |
|-------|------------|
| Name | Required |
| Email | Valid email required |
| Phone | Required |
| Message | Required |

### 6.5 Schedule Tour Interactions

| Action | Response |
|--------|----------|
| Select tour type | Show available times |
| Select date | Update time slots |
| Submit | Confirmation message |

---

## 7. Responsive Behavior

### 7.1 Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 576px | Single column |
| Tablet | 576px - 768px | Single column |
| Desktop | > 768px | Two columns |

### 7.2 Mobile Layout Changes

- Hamburger menu
- Gallery becomes swipe carousel
- Overview grid becomes 2x3
- Sidebar moves below content

---

## 8. Styling & CSS Classes

### 8.1 Overview Grid Classes (V3)

```css
.overview-grid { /* Grid container */ }
.overview-item { /* Grid item */ }
.overview-icon { /* Icon container */ }
.overview-label { /* Label text */ }
.overview-value { /* Value text */ }
```

### 8.2 Main Container Classes

```css
.wrapper { /* Main page wrapper */ }
.container { /* Bootstrap container */ }
.single-property-content { /* Main content */ }
```

### 8.3 Sidebar Classes

```css
.agen-personal-info { /* Agent card */ }
.inquiry-form { /* Contact form */ }
.schedule-tour { /* Tour booking */ }
.mortgage-calculator { /* Calculator */ }
```

---

## 9. Version-Specific Features (V3)

### 9.1 V3 Unique Characteristics

| Feature | V3 Implementation |
|---------|-------------------|
| Overview Display | Grid layout (2x3) |
| Schedule Tour | Present in sidebar |
| Layout Position | Standard two-column |
| Feature Set | Complete (all features) |

### 9.2 Comparison with Other Versions

| Feature | V1 | V2 | V3 | V4 | V5 |
|---------|----|----|----|----|----|
| Overview Style | Grid | Inline | Grid | Cards | Compact |
| Schedule Tour | Yes | No | Yes | Yes | Yes |
| Sidebar Position | Right | Right | Right | Left | Bottom |
| Gallery Position | Top | Top | Top | Full | Split |

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
  "version": "^2.3.4"
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

### V3-Specific Animations

| Element | Animation | Description |
|---------|-----------|-------------|
| Overview Grid | fade-up | Grid items animate in sequence |
| Property Details | fade-up | Content sections |
| Sidebar Widgets | fade-left | Right sidebar entrance |
| Floor Plan Accordion | fade-up | On expand |

### Grid Overview Animation

```css
.overview-grid .overview-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.overview-grid .overview-item.aos-animate {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Theme Variables

```css
:root {
  --color-primary: #eb6753;
  --color-primary-hover: #c53535;
  --color-secondary: #041e42;
  --color-dark: #0f172a;
  --color-gray-200: #f7f7f7;
  --color-gray-300: #efefef;
  --color-gray-500: #64748b;
  --border-radius: 12px;
  --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.08);
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

### Page Load Animations

```javascript
// components/PropertySingleV3.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV3 = () => {
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

      // Property header
      gsap.from('.property-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out'
      });

      // V3-specific: Grid overview items
      gsap.from('.overview-grid .overview-item', {
        opacity: 0,
        scale: 0.8,
        stagger: {
          each: 0.1,
          grid: [2, 3] // 2x3 grid layout
        },
        duration: 0.5,
        delay: 0.4,
        ease: 'back.out(1.4)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Grid Overview Animation (V3 Specific)

```javascript
// 2x3 Grid stagger animation
gsap.from('.overview-item', {
  opacity: 0,
  y: 30,
  scale: 0.9,
  stagger: {
    each: 0.1,
    from: 'start'
  },
  duration: 0.5,
  ease: 'power2.out',
  delay: 0.5
});

// Grid icon bounce
gsap.from('.overview-icon', {
  scale: 0,
  rotation: 180,
  stagger: 0.08,
  duration: 0.6,
  ease: 'back.out(1.7)',
  delay: 0.7
});

// Grid values fade in
gsap.from('.overview-value', {
  opacity: 0,
  y: 10,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.9
});
```

### ScrollTrigger Animations

```javascript
// Property details section
gsap.from('.property-details', {
  scrollTrigger: {
    trigger: '.property-details',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: 'power3.out'
});

// Features with category reveal
gsap.from('.features-category', {
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 80%'
  },
  opacity: 0,
  x: -30,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});

// Floor plans accordion
gsap.from('.floor-plan-item', {
  scrollTrigger: {
    trigger: '.floor-plans',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Schedule Tour Section (V3 Includes)

```javascript
// Schedule tour widget
gsap.from('.schedule-tour', {
  scrollTrigger: {
    trigger: '.schedule-tour',
    start: 'top 85%'
  },
  opacity: 0,
  x: 30,
  duration: 0.6,
  ease: 'power2.out'
});

// Tour type radio buttons
gsap.from('.tour-type-option', {
  scrollTrigger: {
    trigger: '.schedule-tour',
    start: 'top 85%'
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.1,
  duration: 0.4,
  ease: 'back.out(1.2)'
});

// Date picker animation
gsap.from('.date-picker-container', {
  scrollTrigger: {
    trigger: '.schedule-tour',
    start: 'top 85%'
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.3
});
```

### Sidebar Animations

```javascript
// Sidebar widgets
gsap.from('.sidebar-widget', {
  scrollTrigger: {
    trigger: '.sidebar',
    start: 'top 80%'
  },
  opacity: 0,
  x: 50,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Hover Animations

```javascript
// Overview grid item hover
const setupOverviewHovers = () => {
  const items = document.querySelectorAll('.overview-item');
  
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(item.querySelector('.overview-icon'), {
        scale: 1.15,
        color: '#eb6753',
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        boxShadow: 'none',
        duration: 0.3
      });
      gsap.to(item.querySelector('.overview-icon'), {
        scale: 1,
        color: 'inherit',
        duration: 0.3
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V3 entrance timeline
const v3Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v3Timeline
  .from('.property-gallery', { opacity: 0, y: 60, duration: 0.8 })
  .from('.property-header', { opacity: 0, y: 30, duration: 0.5 }, '-=0.4')
  .from('.overview-grid', { opacity: 0, scale: 0.95, duration: 0.5 }, '-=0.2')
  .from('.overview-item', { 
    opacity: 0, 
    scale: 0.8, 
    stagger: 0.08, 
    duration: 0.4 
  }, '-=0.2');
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

*Documentation generated for Homez Real Estate NextJS Template - Property Single V3*
*Last updated: April 2025*
