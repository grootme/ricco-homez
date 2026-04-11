# Property Single V4

## 1. URL and Page Title

- **URL**: `https://homez-appdir.vercel.app/single-v4/1`
- **Page Title**: `Property Single V4 || Homez - Real Estate NextJS Template`
- **Template**: Homez Real Estate NextJS Template
- **Page Type**: Property Detail Page (Single Style Version 4)

---

## 2. Page Overview

Property Single V4 is a property detail page template featuring a distinctive full-width gallery layout with the sidebar positioned on the left side. This version offers a more immersive visual experience with the gallery spanning the full width of the page. The left sidebar placement creates a unique navigation pattern while maintaining all essential property information and interactive features.

### Purpose
- Provide immersive visual-first property browsing experience
- Offer alternative layout with left sidebar positioning
- Maintain complete property information access
- Enable full-width gallery impact

### Key Differences from Other Versions
- **Full-width gallery** spanning entire page width
- **Left sidebar** position (unique among versions)
- **Card-based overview** section
- Immersive visual presentation

---

## 3. Layout Structure

### 3.1 Overall Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  Logo | Navigation Menu | Login/Register | Add Property     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                FULL-WIDTH PROPERTY GALLERY                  │
│         [Large Image Display with Full Width]               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │              PROPERTY HEADER                          │   │
│  │  Title | Price | Address | Status | View Count       │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌────────────────┬────────────────┬────────────────────┐   │
│  │   Bed: 1       │   Bath: 2      │   Sqft: 1200       │   │
│  │   Icon + Card  │   Icon + Card  │   Icon + Card      │   │
│  ├────────────────┼────────────────┼────────────────────┤   │
│  │   Year: 2018   │   Garage: 2    │   Type: Houses     │   │
│  │   Icon + Card  │   Icon + Card  │   Icon + Card      │   │
│  └────────────────┴────────────────┴────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────────────────┬──────────────────────────────┐  │
│  │                        │                              │  │
│  │     LEFT SIDEBAR       │      MAIN CONTENT AREA       │  │
│  │                        │                              │  │
│  │   • Agent Card         │   • Property Description     │  │
│  │   • Inquiry Form       │   • Property Details         │  │
│  │   • Schedule Tour      │   • Features                 │  │
│  │   • Mortgage Calc      │   • Floor Plans              │  │
│  │   • Property Stats     │   • Video/Virtual Tour       │  │
│  │                        │   • Nearby Locations         │  │
│  │                        │   • Location Map             │  │
│  │                        │                              │  │
│  └────────────────────────┴──────────────────────────────┘  │
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
- Two-column layout with **reversed columns**:
  - Left column: `col-lg-4` (Sidebar - unique to V4)
  - Right column: `col-lg-8` (Main property content)

### 3.4 Gallery Layout (Full-Width)

**Full-Width Gallery Features**:
- Spans entire viewport width
- Larger image display
- Enhanced visual impact
- Full-width navigation strip

---

## 4. Data Content Structure

### 4.1 Property Gallery (Full-Width)

**Gallery Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `images` | Array[Object] | Collection of property images |
| `images[].url` | String | Image URL path |
| `images[].alt` | String | Alternative text |
| `mainImage` | Object | Currently displayed main image |
| `galleryLayout` | String | "full-width" |

**Full-Width Gallery Features**:
- Full viewport width display
- Large format images
- Navigation arrows on sides
- Dots indicator below
- Lightbox on click

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

### 4.3 Overview Section (Card-Based)

**Overview Cards Data**:
Each spec displayed in individual card format:

| Card | Icon | Label | Value |
|------|------|-------|-------|
| Card 1 | Bed | Bedroom | 1 |
| Card 2 | Bath | Bath | 2 |
| Card 3 | Calendar | Year Built | 2018 |
| Card 4 | Car | Garage | 2 |
| Card 5 | Ruler | Sqft | 1200 |
| Card 6 | Building | Property Type | Houses |

**Card Layout**:
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    [Icon]    │ │    [Icon]    │ │    [Icon]    │
│   Bedroom    │ │    Bath      │ │  Year Built  │
│      1       │ │      2       │ │     2018     │
└──────────────┘ └──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    [Icon]    │ │    [Icon]    │ │    [Icon]    │
│   Garage     │ │    Sqft      │ │  Property    │
│      2       │ │    1200      │ │   Houses     │
└──────────────┘ └──────────────┘ └──────────────┘
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
| `floorPlans[].size` | String | Floor area |
| `floorPlans[].image` | String | Floor plan image URL |

### 4.9 Video Section

**Video Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `videoUrl` | String | Video URL |
| `videoType` | String | Video provider |
| `videoThumbnail` | String | Preview image |

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
| PropertyGalleryFull | Full-width carousel | After header |
| PropertyHeader | Title and price | Below gallery |
| OverviewCards | Card-based specs | After header |
| PropertyDescription | Rich text | Main content |
| PropertyDetails | Specifications | Main content |
| FeatureList | Amenities | Main content |
| FloorPlanAccordion | Floor plans | Main content |
| VideoPlayer | Video embed | Main content |
| VirtualTourViewer | 360° tour | Main content |
| NearbyMap | Location map | Main content |
| NearbyPlaces | Places list | Main content |
| WalkScoreWidget | Walkability | Main content |
| MortgageCalculator | Calculator | **Left Sidebar** |
| PropertyStats | Statistics | **Left Sidebar** |
| HomeValueWidget | Valuation | **Left Sidebar** |
| AgentCard | Agent info | **Left Sidebar** |
| InquiryForm | Contact form | **Left Sidebar** |
| ScheduleTour | Tour booking | **Left Sidebar** |
| ReviewForm | Review form | Sidebar |
| SimilarProperties | Property grid | Before footer |
| Footer | Page footer | Page bottom |

### 5.2 V4 Specific Components

**Full-Width Gallery Component**:
```javascript
// Component: PropertyGalleryFull
Props:
  - images: Array[Object]
  - height: String ("full" | "large")
  - showNav: boolean

Features:
  - Full viewport width
  - Large image display
  - Side navigation arrows
  - Dot indicators
```

**Overview Cards Component**:
```javascript
// Component: OverviewCards
Props:
  - specs: Array[Object]
  - columns: Number (default: 3)

Features:
  - Individual card styling
  - Icon + Label + Value
  - Hover effects
  - Responsive grid
```

---

## 6. Interactive Elements

### 6.1 Full-Width Gallery Interactions

| Interaction | Response |
|-------------|----------|
| Click side arrow | Navigate images |
| Click dot indicator | Jump to image |
| Click main image | Open lightbox |
| Hover sides | Show arrows |
| Swipe (mobile) | Navigate images |

### 6.2 Overview Card Interactions

| Interaction | Response |
|-------------|----------|
| Hover card | Lift effect |
| Click card | Scroll to section |

### 6.3 Tab/Accordion Interactions

**Floor Plan Accordion**:
- Click to expand/collapse
- Image zoom available

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
| Desktop | > 768px | Two columns (sidebar left) |

### 7.2 Mobile Layout Changes

**Gallery Changes**:
- Full-width maintained
- Touch swipe enabled
- Arrows smaller

**Sidebar Changes**:
- Moves below content
- Full width on mobile

**Overview Cards**:
- Stack 2 per row
- Smaller padding

### 7.3 Left Sidebar Specific Behavior

- Desktop: Fixed left position
- Tablet: Collapsible drawer
- Mobile: Stacks below content

---

## 8. Styling & CSS Classes

### 8.1 Full-Width Gallery Classes (V4 Specific)

```css
.gallery-full-width { /* Full-width container */ }
.gallery-full-main { /* Main image area */ }
.gallery-full-nav { /* Navigation */ }
.gallery-full-dots { /* Dot indicators */ }
```

### 8.2 Overview Cards Classes (V4 Specific)

```css
.overview-cards { /* Cards grid container */ }
.overview-card { /* Individual card */ }
.overview-card-icon { /* Card icon */ }
.overview-card-label { /* Card label */ }
.overview-card-value { /* Card value */ }
```

### 8.3 Left Sidebar Classes (V4 Specific)

```css
.sidebar-left { /* Left positioned sidebar */ }
.sidebar-left-sticky { /* Sticky behavior */ }
.sidebar-left-content { /* Content wrapper */ }
```

### 8.4 Main Container Classes

```css
.wrapper { /* Main page wrapper */ }
.container { /* Bootstrap container */ }
.single-property-content { /* Main content */ }
.main-content-right { /* Right content area */ }
```

---

## 9. Version-Specific Features (V4)

### 9.1 V4 Unique Characteristics

| Feature | V4 Implementation |
|---------|-------------------|
| Gallery Style | Full-width spanning viewport |
| Sidebar Position | **Left side** (unique) |
| Overview Display | Card-based grid |
| Visual Impact | Maximum emphasis on images |

### 9.2 Differences from Other Versions

| Feature | V1 | V2 | V3 | V4 | V5 |
|---------|----|----|----|----|----|
| Gallery Width | Container | Container | Container | **Full-width** | Split |
| Sidebar Position | Right | Right | Right | **Left** | Bottom |
| Overview Style | Grid | Inline | Grid | **Cards** | Compact |
| Layout Flow | Standard | Standard | Standard | **Reversed** | Stacked |

### 9.3 Design Philosophy

V4 focuses on:
1. **Visual Immersion**: Full-width gallery dominates above-fold
2. **Alternative Navigation**: Left sidebar creates unique UX
3. **Card-Based UI**: Modern card design for overview
4. **Content Hierarchy**: Sidebar leads attention

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

### V4-Specific Animations (Full-Width Gallery)

```javascript
// Full-width gallery configuration
const fullwidthGallery = {
  effect: 'fade',
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
```

### Card-Based Overview Animation

```css
.overview-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}
```

### Left Sidebar Animation

```css
.sidebar-left {
  animation: slideInLeft 0.6s ease forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## Theme Variables

```css
:root {
  --color-primary: #eb6753;
  --color-secondary: #041e42;
  --color-dark: #0f172a;
  --color-gray-200: #f7f7f7;
  --border-radius-card: 12px;
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 10px 30px rgba(0, 0, 0, 0.12);
}

/* Card design system */
.property-card-v4 {
  background: white;
  border-radius: var(--border-radius-card);
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
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
  "@react-google-maps/api": "^2.19.0"
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

### Page Load Animations (V4 Full-Width Gallery)

```javascript
// components/PropertySingleV4.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV4 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V4-specific: Full-width gallery entrance
      gsap.from('.gallery-full-width', {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power3.out'
      });

      // Property header
      gsap.from('.property-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out'
      });

      // V4-specific: Card-based overview
      gsap.from('.overview-card', {
        opacity: 0,
        y: 40,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.5,
        ease: 'back.out(1.4)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Full-Width Gallery Animation (V4 Unique)

```javascript
// Full-width gallery slide animation
gsap.from('.gallery-full-width .slide', {
  opacity: 0,
  scale: 1.2,
  duration: 1.2,
  ease: 'power3.out'
});

// Gallery navigation fade
gsap.from('.gallery-full-nav', {
  opacity: 0,
  duration: 0.5,
  delay: 0.8
});

// Gallery dots indicator
gsap.from('.gallery-full-dots', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1
});

// Parallax effect on scroll
gsap.to('.gallery-full-width .slide img', {
  scrollTrigger: {
    trigger: '.gallery-full-width',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: 100,
  ease: 'none'
});
```

### Overview Cards Animation (V4 Card-Based)

```javascript
// Card grid entrance
gsap.from('.overview-cards .overview-card', {
  opacity: 0,
  y: 50,
  scale: 0.9,
  stagger: {
    each: 0.1,
    grid: 'auto'
  },
  duration: 0.6,
  ease: 'back.out(1.4)',
  delay: 0.5
});

// Card icon rotation
gsap.from('.overview-card-icon', {
  rotation: -90,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out',
  delay: 0.7
});
```

### Left Sidebar Animation (V4 Unique - Left Position)

```javascript
// Left sidebar entrance from left
gsap.from('.sidebar-left', {
  x: -100,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  delay: 0.3
});

// Sidebar widgets
gsap.from('.sidebar-left .sidebar-widget', {
  scrollTrigger: {
    trigger: '.sidebar-left',
    start: 'top 80%'
  },
  opacity: 0,
  x: -40,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out'
});

// Sticky sidebar behavior
ScrollTrigger.create({
  trigger: '.sidebar-left',
  start: 'top 80px',
  endTrigger: '.main-content',
  end: 'bottom bottom',
  pin: true,
  pinSpacing: false
});
```

### Main Content Animation (Right Side)

```javascript
// Main content entrance from right
gsap.from('.main-content-right', {
  x: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  delay: 0.4
});

// Content sections
gsap.from('.main-content-right section', {
  scrollTrigger: {
    trigger: '.main-content-right',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Hover Animations

```javascript
// Overview card hover
const setupCardHovers = () => {
  const cards = document.querySelectorAll('.overview-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(card.querySelector('.overview-card-icon'), {
        scale: 1.2,
        rotation: 10,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        duration: 0.3
      });
      gsap.to(card.querySelector('.overview-card-icon'), {
        scale: 1,
        rotation: 0,
        duration: 0.3
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V4 full-width entrance timeline
const v4Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v4Timeline
  .from('.gallery-full-width', { opacity: 0, scale: 1.1, duration: 1 })
  .from('.property-header', { opacity: 0, y: 30, duration: 0.5 }, '-=0.5')
  .from('.sidebar-left', { x: -80, opacity: 0, duration: 0.7 }, '-=0.3')
  .from('.main-content-right', { x: 50, opacity: 0, duration: 0.6 }, '-=0.5')
  .from('.overview-card', { 
    opacity: 0, 
    y: 30, 
    stagger: 0.08, 
    duration: 0.5 
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

*Documentation generated for Homez Real Estate NextJS Template - Property Single V4*
*Last updated: April 2025*
