# Property Single V5

## 1. URL and Page Title

- **URL**: `https://homez-appdir.vercel.app/single-v5/1`
- **Page Title**: `Property Single V5 || Homez - Real Estate NextJS Template`
- **Template**: Homez Real Estate NextJS Template
- **Page Type**: Property Detail Page (Single Style Version 5)

---

## 2. Page Overview

Property Single V5 is a property detail page template featuring a distinctive split-screen gallery layout with a stacked content organization. This version presents the property with a split gallery on the left side and information on the right, creating a modern magazine-style presentation. The sidebar elements are distributed throughout the content in a bottom-positioned layout, offering a unique browsing experience.

### Purpose
- Provide modern split-screen property presentation
- Create magazine-style visual layout
- Offer unique browsing experience with distributed sidebar
- Maximize visual impact with split gallery

### Key Differences from Other Versions
- **Split-screen gallery** on left side
- **Bottom-positioned sidebar** elements
- **Magazine-style layout**
- Distributed information sections

---

## 3. Layout Structure

### 3.1 Overall Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  Logo | Navigation Menu | Login/Register | Add Property     │
├───────────────────────────────┬─────────────────────────────┤
│                               │                             │
│      SPLIT GALLERY            │    PROPERTY INFO            │
│      (Left Side)              │    (Right Side)             │
│                               │                             │
│   ┌─────────────────────┐    │   Title: Equestrian Family  │
│   │                     │    │   Price: $14,000            │
│   │   [Main Image]      │    │   Address: New York City    │
│   │                     │    │   Status: For Sale          │
│   └─────────────────────┘    │                             │
│   ┌───────┬───────┬─────┐    │   ┌─────────────────────┐   │
│   │[Img1] │[Img2] │[Img3]│   │   │ Overview Compact    │   │
│   └───────┴───────┴─────┘    │   │ Bed:1 Bath:2 1200sf│   │
│                               │   └─────────────────────┘   │
│                               │                             │
│                               │   Property Description...   │
│                               │                             │
├───────────────────────────────┴─────────────────────────────┤
│                                                             │
│              PROPERTY DETAILS SECTION                        │
│   Features | Floor Plans | Video | Virtual Tour             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              LOCATION & NEARBY SECTION                       │
│   Map | Nearby Places | Walk Score                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              BOTTOM SIDEBAR SECTION                          │
│   ┌─────────────┬─────────────┬─────────────┐               │
│   │ Agent Card  │ Inquiry     │ Mortgage    │               │
│   │             │ Form        │ Calculator  │               │
│   └─────────────┴─────────────┴─────────────┘               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│              SIMILAR PROPERTIES (Nearby Homes)               │
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

### 3.3 Main Content Layout (Split Screen)

**Container Structure**:
- Split-screen layout:
  - Left side: `col-lg-6` (Split Gallery)
  - Right side: `col-lg-6` (Property Info)
- Below split: Full-width content sections
- Bottom sidebar: Horizontal stacked cards

### 3.4 Split Gallery Layout

**Split Gallery Features**:
- Large main image on left
- Thumbnail strip below main image
- Side-by-side with property info
- Magazine-style presentation

---

## 4. Data Content Structure

### 4.1 Split Gallery

**Gallery Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `images` | Array[Object] | Collection of property images |
| `images[].url` | String | Image URL path |
| `images[].alt` | String | Alternative text |
| `mainImage` | Object | Currently displayed main image |
| `thumbnails` | Array[Object] | Small thumbnail images |
| `galleryLayout` | String | "split" |

**Split Gallery Features**:
- Main image takes majority of left panel
- Thumbnail strip with 3-4 images
- Click thumbnail to swap with main
- Lightbox on main image click

### 4.2 Property Header (Right Side)

**Property Header Data**:
| Field | Value | Description |
|-------|-------|-------------|
| `title` | "Equestrian Family Home" | Property listing title |
| `status` | "For sale" | Listing status |
| `price` | "$14,000" | Property price |
| `address` | "New York City, CA, USA" | Property location |
| `listedDate` | "8 years ago" | Time since listing |
| `viewCount` | 8721 | Number of views |

### 4.3 Overview Section (Compact)

**Compact Overview Data**:
Displayed horizontally below property title:

| Spec | Value |
|------|-------|
| Bedroom | 1 |
| Bath | 2 |
| Sqft | 1200 |
| Year Built | 2018 |
| Garage | 2 |
| Type | Houses |

**Compact Layout**:
```
[🛏️ 1] [🛁 2] [📏 1200 sqft] [📅 2018] [🚗 2] [🏠 Houses]
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

**Floor Plans Data**:
| Field | Type | Description |
|-------|------|-------------|
| `floorPlans` | Array[Object] | Collection of floor plans |
| `floorPlans[].name` | String | Floor plan name |
| `floorPlans[].size` | String | Floor area |
| `floorPlans[].image` | String | Floor plan image |

### 4.9 Video Section

**Video Data**:
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
- Score value with indicator
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
- Monthly Payment
- Total Payment

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
| Name | Text | Enter name |
| Phone | Tel | Enter phone |
| Email | Email | Enter email |
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

**Section Title**: "Nearby Similar Homes"

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
| SplitGallery | Split-screen gallery | **Left panel** |
| PropertyInfoPanel | Title and details | **Right panel** |
| OverviewCompact | Horizontal specs | Below title |
| PropertyDescription | Rich text | Right panel |
| PropertyDetails | Specifications | Content section |
| FeatureList | Amenities | Content section |
| FloorPlanAccordion | Floor plans | Content section |
| VideoPlayer | Video embed | Content section |
| VirtualTourViewer | 360° tour | Content section |
| NearbyMap | Location map | Location section |
| NearbyPlaces | Places list | Location section |
| WalkScoreWidget | Walkability | Location section |
| MortgageCalculator | Calculator | **Bottom sidebar** |
| PropertyStats | Statistics | **Bottom sidebar** |
| HomeValueWidget | Valuation | **Bottom sidebar** |
| AgentCard | Agent info | **Bottom sidebar** |
| InquiryForm | Contact form | **Bottom sidebar** |
| ScheduleTour | Tour booking | Content area |
| ReviewForm | Review form | Content area |
| SimilarProperties | Property grid | Before footer |
| Footer | Page footer | Page bottom |

### 5.2 V5 Specific Components

**Split Gallery Component**:
```javascript
// Component: SplitGallery
Props:
  - images: Array[Object]
  - mainImageRatio: String ("4:3" | "16:9")
  - thumbnailCount: Number (default: 3)

Features:
  - Main image display
  - Thumbnail navigation
  - Click to swap
  - Lightbox support
```

**Compact Overview Component**:
```javascript
// Component: OverviewCompact
Props:
  - specs: Array[Object]
  - showIcons: boolean

Features:
  - Horizontal layout
  - Icon + value inline
  - Responsive wrap
  - Minimal styling
```

**Bottom Sidebar Component**:
```javascript
// Component: BottomSidebar
Props:
  - agent: Object
  - calculator: Object

Features:
  - Horizontal card layout
  - Equal height cards
  - Responsive stacking
  - Background styling
```

---

## 6. Interactive Elements

### 6.1 Split Gallery Interactions

| Interaction | Response |
|-------------|----------|
| Click thumbnail | Swap with main image |
| Click main image | Open lightbox |
| Hover main image | Show zoom cursor |
| Swipe (mobile) | Navigate images |

### 6.2 Compact Overview Interactions

| Interaction | Response |
|-------------|----------|
| Hover spec | Subtle highlight |
| Long press (mobile) | Copy value |

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
| Mobile | < 576px | Single column (stacked) |
| Tablet | 576px - 768px | Single column |
| Desktop | 992px - 1200px | Split screen |
| Large Desktop | > 1200px | Split screen (50/50) |

### 7.2 Mobile Layout Changes

**Split Gallery Changes**:
- Becomes full-width top gallery
- Thumbnails move below
- Swipe navigation only

**Property Info Changes**:
- Stacks below gallery
- Full-width content

**Bottom Sidebar Changes**:
- Stacks vertically
- Full-width cards

### 7.3 Tablet Layout Changes

- Split ratio adjusts (40/60)
- Gallery slightly smaller
- Content gets more space

---

## 8. Styling & CSS Classes

### 8.1 Split Gallery Classes (V5 Specific)

```css
.split-gallery { /* Split gallery container */ }
.split-gallery-main { /* Main image area */ }
.split-gallery-thumbs { /* Thumbnail strip */ }
.split-gallery-thumb { /* Individual thumbnail */ }
```

### 8.2 Compact Overview Classes (V5 Specific)

```css
.overview-compact { /* Compact container */ }
.overview-compact-item { /* Individual item */ }
.overview-compact-icon { /* Icon */ }
.overview-compact-value { /* Value display */ }
```

### 8.3 Bottom Sidebar Classes (V5 Specific)

```css
.bottom-sidebar { /* Bottom sidebar container */ }
.bottom-sidebar-grid { /* Grid layout */ }
.bottom-sidebar-card { /* Individual card */ }
```

### 8.4 Main Container Classes

```css
.wrapper { /* Main page wrapper */ }
.split-layout { /* Split container */ }
.split-left { /* Left panel */ }
.split-right { /* Right panel */ }
```

---

## 9. Version-Specific Features (V5)

### 9.1 V5 Unique Characteristics

| Feature | V5 Implementation |
|---------|-------------------|
| Gallery Style | **Split-screen** |
| Sidebar Position | **Bottom** (distributed) |
| Overview Display | **Compact horizontal** |
| Layout Style | **Magazine-style** |

### 9.2 Differences from Other Versions

| Feature | V1 | V2 | V3 | V4 | V5 |
|---------|----|----|----|----|----|
| Gallery Style | Top | Top | Top | Full-width | **Split** |
| Sidebar Position | Right | Right | Right | Left | **Bottom** |
| Overview Style | Grid | Inline | Grid | Cards | **Compact** |
| Layout Type | Standard | Standard | Standard | Reversed | **Split** |

### 9.3 Design Philosophy

V5 focuses on:
1. **Magazine Aesthetic**: Split-screen creates editorial feel
2. **Information Distribution**: Sidebar elements spread throughout
3. **Compact Efficiency**: Minimal space for quick specs
4. **Modern Presentation**: Unique among all versions

### 9.4 Use Cases

V5 is ideal for:
- Luxury property listings
- High-end real estate presentations
- Properties with strong visual appeal
- Modern/contemporary home showcases
- Editorial-style property marketing

---

## 10. Content Flow (V5 Specific)

### 10.1 Above-the-Fold

The split-screen layout ensures:
- Gallery visible on left (50% of viewport)
- Property title and key info on right (50% of viewport)
- Immediate visual impact
- Quick access to essential information

### 10.2 Content Progression

1. **Split View**: Gallery + Property Info
2. **Full Width**: Property Details & Features
3. **Full Width**: Video & Virtual Tour
4. **Full Width**: Location & Nearby
5. **Bottom Section**: Agent & Inquiry Cards
6. **Full Width**: Similar Properties

### 10.3 User Journey

```
Gallery → Title → Overview → Description → Details → Features 
→ Floor Plans → Video → Virtual Tour → Location → Agent/Inquiry 
→ Similar Properties
```

---

## 11. Performance Considerations (V5)

### 11.1 Split Gallery Optimization

- Main image loads first
- Thumbnails lazy-loaded
- Progressive image loading
- Responsive image sizing

### 11.2 Content Organization

- Critical content above fold
- Non-critical sections lazy-loaded
- Smooth scroll behavior
- Intersection observer for animations

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

### V5-Specific Animations (Split-Screen)

```javascript
// Split gallery configuration
const splitGalleryConfig = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'slide',
  speed: 600,
  thumbs: {
    swiper: thumbsSwiper
  }
};
```

### Split-Screen Layout Animation

```css
/* Split screen entrance */
.split-gallery {
  animation: slideInFromLeft 0.8s ease forwards;
}

.split-content {
  animation: slideInFromRight 0.8s ease forwards;
}

@keyframes slideInFromLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInFromRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Compact Overview Animation

```css
.overview-compact-item {
  transition: all 0.3s ease;
}

.overview-compact-item:hover {
  background-color: rgba(235, 103, 83, 0.07);
  transform: scale(1.02);
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
  --split-ratio: 50%;
  --border-radius: 12px;
}

/* Split layout */
.split-layout {
  display: flex;
  min-height: 100vh;
}

.split-left {
  width: 50%;
  position: sticky;
  top: 0;
  height: 100vh;
}

.split-right {
  width: 50%;
  padding: 40px;
  overflow-y: auto;
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

### Page Load Animations (V5 Split-Screen)

```javascript
// components/PropertySingleV5.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV5 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V5-specific: Split gallery from left
      gsap.from('.split-gallery', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Property info panel from right
      gsap.from('.split-content', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // V5-specific: Compact overview
      gsap.from('.overview-compact .overview-item', {
        opacity: 0,
        y: 20,
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

### Split-Screen Animation (V5 Unique)

```javascript
// Split gallery main image
gsap.from('.split-gallery .main-image', {
  scale: 1.2,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Thumbnail strip
gsap.from('.split-gallery-thumbs .thumb', {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.6,
  ease: 'power2.out'
});

// Property info panel content
gsap.from('.split-content > *', {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.3,
  ease: 'power2.out'
});

// Sticky gallery behavior
gsap.to('.split-left', {
  scrollTrigger: {
    trigger: '.split-layout',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.split-gallery',
    pinSpacing: false
  }
});
```

### Compact Overview Animation (V5 Horizontal)

```javascript
// Horizontal compact overview
gsap.from('.overview-compact', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.5,
  ease: 'power2.out'
});

// Individual items with icon animation
gsap.from('.overview-compact-item', {
  opacity: 0,
  x: -15,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power2.out',
  delay: 0.6
});

// Compact icons scale
gsap.from('.overview-compact-icon', {
  scale: 0,
  stagger: 0.05,
  duration: 0.4,
  ease: 'back.out(1.7)',
  delay: 0.7
});
```

### Bottom Sidebar Animation (V5 Unique)

```javascript
// Bottom sidebar horizontal cards
gsap.from('.bottom-sidebar', {
  scrollTrigger: {
    trigger: '.bottom-sidebar',
    start: 'top 80%'
  },
  opacity: 0,
  y: 60,
  duration: 0.8,
  ease: 'power3.out'
});

// Bottom sidebar cards
gsap.from('.bottom-sidebar-card', {
  scrollTrigger: {
    trigger: '.bottom-sidebar',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  stagger: 0.12,
  duration: 0.6,
  ease: 'back.out(1.2)'
});
```

### Magazine-Style Animations

```javascript
// Magazine-style section transitions
gsap.from('.content-section', {
  scrollTrigger: {
    trigger: '.content-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: 'power3.out'
});

// Feature list magazine style
gsap.from('.feature-item', {
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 80%'
  },
  opacity: 0,
  x: -20,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Hover Animations

```javascript
// Thumbnail swap animation
const setupThumbSwap = () => {
  const thumbs = document.querySelectorAll('.split-gallery-thumb');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      gsap.to(thumb, {
        borderColor: '#eb6753',
        duration: 0.3
      });
      
      // Animate main image swap
      gsap.to('.main-image', {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          // Update image source here
          gsap.to('.main-image', { opacity: 1, duration: 0.3 });
        }
      });
    });
  });
};

// Compact overview item hover
const setupCompactHovers = () => {
  const items = document.querySelectorAll('.overview-compact-item');
  
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        backgroundColor: 'rgba(235, 103, 83, 0.07)',
        scale: 1.02,
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        backgroundColor: 'transparent',
        scale: 1,
        duration: 0.3
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V5 split-screen timeline
const v5Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v5Timeline
  .from('.split-gallery', { x: -100, opacity: 0, duration: 0.8 })
  .from('.split-content', { x: 100, opacity: 0, duration: 0.8 }, '-=0.6')
  .from('.property-title', { y: 20, opacity: 0, duration: 0.5 }, '-=0.4')
  .from('.overview-compact-item', { 
    y: 15, 
    opacity: 0, 
    stagger: 0.05, 
    duration: 0.4 
  }, '-=0.2')
  .from('.split-gallery-thumb', { 
    y: 20, 
    opacity: 0, 
    stagger: 0.08, 
    duration: 0.4 
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

*Documentation generated for Homez Real Estate NextJS Template - Property Single V5*
*Last updated: April 2025*
