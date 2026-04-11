# Single V9 - Property Detail Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/single-v9/1
- **Page Title:** Property Single V9 || Homez - Real Estate NextJS Template
- **Template Type:** Property Single Page
- **Layout Style:** Split-Screen Layout with Sticky Gallery

---

## 2. Page Overview

### Layout Type
Single V9 presents a property detail page with a split-screen layout. This modern design features a sticky gallery section on one side while the content scrolls on the other. This creates an immersive viewing experience where the property images remain visible while browsing property details.

### Purpose
- Create an immersive property viewing experience
- Keep property images always visible during browsing
- Display comprehensive property information
- Enable user engagement through forms
- Present agent contact information
- Showcase similar properties

### Page Structure Overview
```
+------------------------------------------------------------+
| HEADER - Navigation with Logo, Menu, Login/Register       |
+------------------------------------------------------------+
| SPLIT-SCREEN MAIN CONTENT                                  |
| +------------------------+ +-----------------------------+ |
| | STICKY GALLERY         | | SCROLLABLE CONTENT          | |
| | (Fixed on scroll)      | |                             | |
| |                        | | Property Header             | |
| | [Main Image]           | | - Title                     | |
| |                        | | - Location, Status          | |
| | [Thumbnails]           | | - Beds, Baths, Sqft        | |
| |                        | | - Price                     | |
| | [Tab Navigation]       | | - Action Buttons            | |
| | - Images               | |                             | |
| | - Map                  | | Agent Card                  | |
| | - Street View          | | - Agent Info                | |
| |                        | | - Contact Options           | |
| |                        | |                             | |
| |                        | | Inquiry Form                | |
| |                        | | - Contact Fields            | |
| |                        | | - Message                   | |
| |                        | |                             | |
| |                        | | Schedule Tour               | |
| |                        | | - Tour Options              | |
| |                        | |                             | |
| |                        | | Property Details            | |
| |                        | | - Description               | |
| |                        | | - Specifications            | |
| |                        | |                             | |
| |                        | | Features/Amenities          | |
| |                        | |                             | |
| |                        | | Floor Plans                 | |
| |                        | |                             | |
| |                        | | Location Map                | |
| |                        | |                             | |
| |                        | | Similar Properties          | |
| +------------------------+ +-----------------------------+ |
+------------------------------------------------------------+
| FOOTER - Contact, Links, Newsletter                         |
+------------------------------------------------------------+
```

---

## 3. Layout Configuration

### Main Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Split-Screen (50/50) |
| **Gallery Side** | Left, Sticky |
| **Content Side** | Right, Scrollable |
| **Gallery Width** | 50% |
| **Content Width** | 50% |
| **Sticky Position** | Fixed until footer |

### Sticky Gallery Configuration
| Setting | Value |
|---------|-------|
| **Position** | position: sticky |
| **Top Offset** | 80px (below header) |
| **Height** | calc(100vh - 80px) |
| **Overflow** | Hidden |

### CSS Configuration
```css
/* Split-Screen Container */
.split-screen-container {
  display: flex;
  min-height: 100vh;
}

/* Sticky Gallery Side */
.sticky-gallery {
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);
  width: 50%;
  overflow: hidden;
}

.sticky-gallery .gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Scrollable Content Side */
.scrollable-content {
  width: 50%;
  padding: 40px;
  overflow-y: auto;
}

/* Responsive Behavior */
@media (max-width: 991px) {
  .split-screen-container {
    flex-direction: column;
  }
  
  .sticky-gallery,
  .scrollable-content {
    width: 100%;
    position: relative;
    top: auto;
    height: auto;
  }
  
  .sticky-gallery {
    height: 400px;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Property Header Data

| Field | Type | Example |
|-------|------|---------|
| **Title** | String | "Equestrian Family Home" |
| **Location** | String | "New York City, CA, USA" |
| **Status** | String | "For Sale" |
| **Time Posted** | String | "8 years ago" |
| **Views** | Number | 8721 |
| **Beds** | Number | 1 |
| **Baths** | Number | 2 |
| **Sqft** | Number | 1200 |
| **Price** | Number | $14,000 |
| **Price per Sqft** | Number | $11.67 |

### Property Header Model
```typescript
interface PropertyHeader {
  id: string;
  title: string;
  slug: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    coordinates: { lat: number; lng: number };
  };
  status: 'for-sale' | 'for-rent' | 'sold';
  postedDate: Date;
  views: number;
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  pricing: {
    price: number;
    priceUnit: 'total' | 'mo';
    pricePerSqft: number;
    currency: string;
  };
}
```

### 4.2 Gallery Data Structure

| Field | Type | Description |
|-------|------|-------------|
| **Main Image** | URL | Currently displayed large image |
| **Thumbnails** | Array[URL] | Navigation thumbnails |
| **Tab State** | String | 'images' | 'map' | 'street-view' |
| **Image Count** | Number | Total images |

### Gallery Images (Example)
```
/images/listings/listing-single-9-1.jpg (hero image, 1920px wide)
/images/listings/listing-single-9-2.jpg
/images/listings/listing-single-9-3.jpg
/images/listings/listing-single-9-4.jpg
```

### Gallery Model
```typescript
interface SplitScreenGallery {
  images: Array<{
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
  }>;
  videos?: Array<{
    url: string;
    type: 'youtube' | 'vimeo';
    thumbnail: string;
  }>;
  virtualTour?: {
    url: string;
    type: 'matterport' | 'custom';
  };
  activeIndex: number;
  activeTab: 'images' | 'map' | 'street-view';
  mapCoordinates?: { lat: number; lng: number };
}
```

### 4.3 Agent Information Data

| Field | Type | Example |
|-------|------|---------|
| **Name** | String | "Ali Tufan" |
| **Role** | String | "General Manager" |
| **Photo** | URL | Agent avatar URL |
| **Phone** | String | "+(0) 123 050 945 02" |
| **Email** | String | "ali@homez.com" |
| **Listings Count** | Number | 25 |
| **Rating** | Number | 4.5 |
| **Reviews** | Number | 128 |

### Agent Model
```typescript
interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  phone: string;
  email: string;
  listingsCount: number;
  rating: number;
  reviewsCount: number;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  verified: boolean;
}
```

### 4.4 Inquiry Form Fields

| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| **Name** | Text | Yes | "Your Name" |
| **Phone** | Tel | Yes | "Phone Number" |
| **Email** | Email | Yes | "Email Address" |
| **Message** | Textarea | Yes | "Write your message" |
| **Submit** | Button | - | "Send Message" |

### Inquiry Model
```typescript
interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  propertyId: string;
  agentId: string;
  consent: boolean;
  submittedAt: Date;
}
```

### 4.5 Schedule Tour Form Fields

| Field | Type | Required | Options |
|-------|------|----------|---------|
| **Tour Type** | Radio | Yes | In Person, Video Tour |
| **Date** | Date | Yes | Date picker |
| **Time** | Select | Yes | Time slots |
| **Name** | Text | Yes | User name |
| **Phone** | Tel | Yes | Phone |
| **Email** | Email | Yes | Email |
| **Message** | Textarea | No | Notes |

### Schedule Tour Model
```typescript
interface ScheduleTour {
  tourType: 'in-person' | 'video';
  preferredDate: Date;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  propertyId: string;
  agentId: string;
}
```

### 4.6 Property Details Data

| Field | Type | Example |
|-------|------|---------|
| **Property ID** | String | "RL-2024-009" |
| **Property Type** | String | "House" |
| **Status** | String | "For Sale" |
| **Year Built** | Number | 2020 |
| **Lot Size** | Number | 5000 sqft |
| **Garage** | Number | 2 cars |
| **Pool** | Boolean | Yes |

### Property Details Model
```typescript
interface PropertyDetails {
  propertyId: string;
  propertyType: 'house' | 'apartment' | 'condo' | 'villa' | 'townhouse';
  status: 'for-sale' | 'for-rent' | 'sold';
  yearBuilt: number;
  lotSize: number;
  lotSizeUnit: 'sqft' | 'sqm' | 'acres';
  garage: number;
  garageType: 'attached' | 'detached' | 'carport' | 'none';
  pool: boolean;
  poolType?: 'in-ground' | 'above-ground' | 'indoor';
  stories: number;
  heating: string;
  cooling: string;
  flooring: string[];
  roofType: string;
}
```

### 4.7 Features/Amenities Data

| Category | Features |
|----------|----------|
| **Interior** | Air Conditioning, Central Heating, Washer/Dryer, Dishwasher |
| **Exterior** | Private Pool, Landscaped Garden, BBQ Area |
| **Security** | Alarm System, 24/7 Security, Video Surveillance |
| **Community** | Swimming Pool, Fitness Center, Tennis Court |

### Features Model
```typescript
interface PropertyFeatures {
  categories: Array<{
    name: string;
    icon: string;
    features: Array<{
      name: string;
      available: boolean;
      note?: string;
    }>;
  }>;
}
```

### 4.8 Floor Plans Data

| Floor | Name | Size | Rooms | Image |
|-------|------|------|-------|-------|
| Ground Floor | Main Living | 800 sqft | Living, Kitchen | floor-plan-9-1.jpg |
| First Floor | Bedrooms | 400 sqft | 1 Bed, 1 Bath | floor-plan-9-2.jpg |

### Floor Plan Model
```typescript
interface FloorPlan {
  id: string;
  name: string;
  floor: number;
  size: number;
  sizeUnit: 'sqft' | 'sqm';
  rooms: Array<{
    name: string;
    type: 'bedroom' | 'bathroom' | 'kitchen' | 'living' | 'other';
  }>;
  image: string;
  description?: string;
}
```

### 4.9 Location/Nearby Places Data

| Place Type | Name | Distance |
|------------|------|----------|
| School | Lincoln Elementary | 0.5 mi |
| Hospital | City Medical | 1.2 mi |
| Shopping | Westfield Mall | 0.8 mi |
| Restaurant | Downtown Dining | 0.3 mi |
| Park | Central Park | 0.2 mi |
| Transit | Metro Station | 0.4 mi |

### Nearby Places Model
```typescript
interface NearbyPlace {
  id: string;
  name: string;
  type: 'school' | 'hospital' | 'shopping' | 'restaurant' | 'park' | 'transit';
  distance: number;
  distanceUnit: 'mi' | 'km';
  address: string;
  coordinates: { lat: number; lng: number };
}
```

### 4.10 Similar Properties Data

| Property | Price | Beds | Baths | Sqft |
|----------|-------|------|-------|------|
| Modern Villa | $18,000 | 3 | 2 | 1800 |
| City Apartment | $12,000 | 2 | 1 | 1000 |
| Suburban Home | $15,000 | 3 | 2 | 1500 |

### Similar Property Model
```typescript
interface SimilarProperty {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceUnit: 'total' | 'mo';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  location: string;
}
```

---

## 5. Component Breakdown

### 5.1 Header Component
```
Header/
├── Logo Container
├── Navigation Menu
│   ├── Home Dropdown
│   ├── Listing Megamenu
│   ├── Property Dropdown
│   ├── Blog Dropdown
│   └── Pages Dropdown
├── User Actions
│   ├── Login/Register
│   ├── Add Property
│   └── Hamburger Menu
```

### 5.2 Split-Screen Container
```
SplitScreenContainer/
├── StickyGallerySide (Left)
│   ├── Main Image Container
│   │   └── Large Property Image
│   ├── Thumbnail Navigation
│   │   └── Thumbnail Images Grid
│   ├── Tab Navigation
│   │   ├── Images Tab
│   │   ├── Map Tab
│   │   └── Street View Tab
│   └── Navigation Controls
│       ├── Prev Button
│       └── Next Button
└── ScrollableContentSide (Right)
    ├── Property Header
    ├── Agent Card
    ├── Inquiry Form
    ├── Schedule Tour
    ├── Property Details
    ├── Features Section
    ├── Floor Plans
    ├── Location Section
    └── Similar Properties
```

### 5.3 Sticky Gallery Component
```
StickyGallery/
├── Gallery Container
│   ├── Main Image
│   │   └── Full-height Image
│   ├── Overlay Controls
│   │   ├── Expand Button
│   │   └── Image Counter
│   └── Thumbnail Strip
│       ├── Thumbnail 1 (active)
│       ├── Thumbnail 2
│       ├── Thumbnail 3
│       └── More Thumbnails...
├── Tab Content
│   ├── Images Panel
│   ├── Map Panel
│   │   └── Google Maps
│   └── Street View Panel
│       └── Street View Panorama
└── Navigation Arrows
```

### 5.4 Scrollable Content Component
```
ScrollableContent/
├── Property Header Section
│   ├── Title
│   ├── Meta Info
│   ├── Specs Row
│   ├── Price Display
│   └── Action Buttons
├── Agent Card Section
│   ├── Agent Avatar
│   ├── Agent Info
│   └── Contact Buttons
├── Inquiry Form Section
│   ├── Form Fields
│   └── Submit Button
├── Schedule Tour Section
│   ├── Tour Options
│   ├── Date/Time Selection
│   └── Submit Button
├── Property Details Section
│   ├── Description
│   └── Specifications Grid
├── Features Section
│   └── Features Lists
├── Floor Plans Section
│   └── Floor Plan Cards
├── Location Section
│   ├── Mini Map
│   └── Nearby Places
└── Similar Properties Section
    └── Property Cards
```

### 5.5 Footer Component
```
Footer/
├── Main Footer
│   ├── Contact Info
│   ├── App Downloads
│   ├── Social Links
│   ├── Newsletter
│   └── Quick Links
└── Bottom Footer
    ├── Copyright
    └── Policy Links
```

---

## 6. Interactive Elements

### 6.1 Sticky Gallery Interactions

| Action | Behavior |
|--------|----------|
| **Scroll Page** | Gallery stays fixed |
| **Click Thumbnail** | Change main image |
| **Click Tab** | Switch gallery/map/street-view |
| **Click Image** | Open fullscreen |
| **Swipe** | Navigate images (touch) |

### 6.2 Map Interactions

| Action | Behavior |
|--------|----------|
| **Click Map Tab** | Switch to map view |
| **Zoom** | Adjust map level |
| **Pan** | Move map |
| **Click Marker** | Show property info |

### 6.3 Form Interactions

| Form | Validation | Behavior |
|------|------------|----------|
| **Inquiry** | All fields required | Submit to agent |
| **Schedule Tour** | Date/Time required | Book tour slot |

### 6.4 Action Buttons

| Button | Behavior |
|--------|----------|
| **Favorite** | Save property |
| **Share** | Share modal |
| **Print** | Print dialog |
| **New Tab** | Open in new tab |

---

## 7. Responsive Behavior

### Breakpoint Configuration

| Breakpoint | Width | Layout |
|------------|-------|--------|
| **Desktop** | > 992px | Split-screen 50/50 |
| **Tablet** | 768-991px | Stacked layout |
| **Mobile** | < 768px | Single column |

### Layout Transformations

```css
/* Desktop (> 992px) */
.split-screen-container {
  display: flex;
}

.sticky-gallery {
  position: sticky;
  width: 50%;
}

.scrollable-content {
  width: 50%;
}

/* Tablet & Mobile (< 992px) */
@media (max-width: 991px) {
  .split-screen-container {
    flex-direction: column;
  }
  
  .sticky-gallery {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .scrollable-content {
    width: 100%;
  }
}

/* Mobile (< 576px) */
@media (max-width: 575px) {
  .sticky-gallery {
    height: 300px;
  }
  
  .scrollable-content {
    padding: 20px;
  }
}
```

---

## 8. Component Props and Data Flow

### Split Screen Props

```typescript
interface SplitScreenProps {
  gallery: SplitScreenGallery;
  content: PropertyDataV9;
  headerHeight: number;
}

interface PropertyDataV9 {
  header: PropertyHeader;
  details: PropertyDetails;
  features: PropertyFeatures;
  floorPlans: FloorPlan[];
  location: {
    coordinates: { lat: number; lng: number };
    nearbyPlaces: NearbyPlace[];
  };
  agent: Agent;
  similarProperties: SimilarProperty[];
}
```

### Sticky Gallery Props

```typescript
interface StickyGalleryProps {
  images: GalleryImage[];
  activeIndex: number;
  onImageChange: (index: number) => void;
  showMap: boolean;
  mapCoordinates: { lat: number; lng: number };
  showStreetView: boolean;
  streetViewKey?: string;
}
```

---

## 9. State Management

### Page State

```typescript
interface PropertyPageStateV9 {
  property: PropertyDataV9 | null;
  loading: boolean;
  error: string | null;
  
  // Gallery State
  gallery: {
    activeIndex: number;
    activeTab: 'images' | 'map' | 'street-view';
    isFullscreen: boolean;
  };
  
  // Scroll State
  scrollPosition: number;
  isGallerySticky: boolean;
  
  // Form State
  inquiryForm: FormState<InquiryForm>;
  scheduleForm: FormState<ScheduleTour>;
  
  // User Actions
  isFavorited: boolean;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Get Property
GET /api/properties/:id
Response: { data: PropertyDataV9 }

// Submit Inquiry
POST /api/inquiries
Body: InquiryForm
Response: { success: boolean; inquiryId: string }

// Schedule Tour
POST /api/tours
Body: ScheduleTour
Response: { success: boolean; tourId: string }

// Toggle Favorite
POST /api/favorites/toggle
Body: { propertyId: string }
Response: { success: boolean; isFavorited: boolean }

// Get Similar Properties
GET /api/properties/:id/similar
Response: { data: SimilarProperty[] }
```

---

## 11. Accessibility Considerations

### ARIA Labels

```html
<!-- Split Screen -->
<div role="region" aria-label="Property gallery and details">
  <aside role="complementary" aria-label="Property photos">
    <img alt="Equestrian Family Home - Photo 1" />
  </aside>
  
  <main role="main" aria-label="Property information">
    <article aria-label="Property details">
      <h1>Equestrian Family Home</h1>
    </article>
  </main>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Navigate elements |
| **Enter** | Activate buttons |
| **Arrow Keys** | Navigate gallery |
| **Escape** | Close fullscreen |

---

## 12. Performance Optimizations

### Image Loading

```typescript
const imageConfig = {
  mainImage: {
    priority: true,
    loading: 'eager',
    sizes: ['1920w', '1200w', '800w'],
  },
  thumbnails: {
    priority: false,
    loading: 'lazy',
    sizes: ['256w', '128w'],
  },
};
```

### Scroll Performance

- Use `position: sticky` instead of JS scroll handlers
- Throttle scroll events
- Lazy load below-fold content

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Equestrian Family Home - New York City | Homez</title>
<meta property="og:image" content="https://homez-appdir.vercel.app/images/listings/listing-single-9-1.jpg" />
```

### Structured Data
```json
{
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "image": "https://homez-appdir.vercel.app/images/listings/listing-single-9-1.jpg"
}
```

---

## 14. Unique Features (V9 Specific)

### Split-Screen Layout
- **Sticky Gallery**: Images remain visible while scrolling
- **50/50 Split**: Balanced visual/content experience
- **Immersive Viewing**: Focus on property visuals
- **Efficient Navigation**: Quick access to all sections

### Layout Advantages
- **Always Visible Gallery**: No need to scroll back to images
- **Modern Design**: Contemporary split-screen aesthetic
- **Efficient Use of Space**: Maximizes screen real estate

---

## 15. Related Pages

- [Single V6](./single-v6.md) - Vertical slider variant
- [Single V7](./single-v7.md) - Hero header variant
- [Single V8](./single-v8.md) - Masonry gallery variant
- [Single V10](./single-v10.md) - Modern card variant

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

### V9-Specific Animations (Sticky Gallery)

```javascript
// Sticky scroll effect (CSS-based, no JS library needed)
const stickyGalleryConfig = {
  position: 'sticky',
  top: '80px', // Below header
  height: 'calc(100vh - 80px)'
};

// Gallery configuration
const galleryConfig = {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 600
};
```

### Sticky Gallery Animation

```css
/* Sticky gallery positioning */
.sticky-gallery {
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);
  transition: all 0.3s ease;
}

/* Image change animation */
.sticky-gallery .gallery-image {
  animation: crossFade 0.6s ease forwards;
}

@keyframes crossFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Thumbnail selection animation */
.thumbnail-item {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail-item.active,
.thumbnail-item:hover {
  border-color: #eb6753;
  transform: scale(1.02);
}
```

### Tab Navigation Animation

```css
/* Tab content transition */
.tab-content {
  transition: opacity 0.3s ease;
}

/* Tab button animation */
.tab-button {
  transition: all 0.3s ease;
}

.tab-button.active {
  background-color: #eb6753;
  color: white;
}
```

### Scrollable Content Animation

```css
/* Content sections fade in on scroll */
.scrollable-content section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scrollable-content section.aos-animate {
  opacity: 1;
  transform: translateY(0);
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
  --header-height: 80px;
  --border-radius: 12px;
}

/* Split screen layout */
.split-screen-container {
  display: flex;
  min-height: 100vh;
}

.sticky-gallery {
  position: sticky;
  top: var(--header-height);
  height: calc(100vh - var(--header-height));
  width: 50%;
  overflow: hidden;
}

.scrollable-content {
  width: 50%;
  padding: 40px;
  overflow-y: auto;
}

/* Responsive behavior */
@media (max-width: 991px) {
  .split-screen-container {
    flex-direction: column;
  }
  
  .sticky-gallery,
  .scrollable-content {
    width: 100%;
    position: relative;
    top: auto;
    height: auto;
  }
  
  .sticky-gallery {
    height: 400px;
  }
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

### Page Load Animations (V9 Split-Screen)

```javascript
// components/PropertySingleV9.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV9 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V9-specific: Split-screen entrance
      gsap.from('.sticky-gallery', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.scrollable-content', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Gallery tabs
      gsap.from('.tab-button', {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Content sections
      gsap.from('.scrollable-content > *', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Sticky Gallery Animation (V9 Unique)

```javascript
// Sticky gallery setup with ScrollTrigger
ScrollTrigger.create({
  trigger: '.split-screen-container',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.sticky-gallery',
  pinSpacing: false
});

// Gallery image crossfade
gsap.from('.sticky-gallery .gallery-image', {
  opacity: 0,
  scale: 1.1,
  duration: 0.8,
  ease: 'power3.out'
});

// Thumbnail navigation
gsap.from('.thumbnail-item', {
  opacity: 0,
  y: 20,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.6,
  ease: 'power2.out'
});

// Active thumbnail indicator
const updateActiveThumbnail = (index) => {
  gsap.to('.thumbnail-item', {
    borderColor: '#efefef',
    duration: 0.2
  });
  gsap.to(`.thumbnail-item:nth-child(${index + 1})`, {
    borderColor: '#eb6753',
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out'
  });
};
```

### Tab Navigation Animation

```javascript
// Tab buttons entrance
gsap.from('.tab-button', {
  opacity: 0,
  y: -15,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});

// Tab content switch
const switchTab = (tabId) => {
  const tl = gsap.timeline();
  
  tl.to('.tab-content.active', {
    opacity: 0,
    y: -20,
    duration: 0.2
  })
  .set('.tab-content', { className: '-=active' })
  .set(`#${tabId}`, { className: '+=active' })
  .from(`#${tabId}`, {
    opacity: 0,
    y: 20,
    duration: 0.3
  });
  
  return tl;
};

// Active tab button
gsap.to('.tab-button.active', {
  backgroundColor: '#eb6753',
  color: '#ffffff',
  scale: 1.05,
  duration: 0.3
});
```

### Scrollable Content Animation

```javascript
// Content sections with scroll trigger
gsap.from('.scrollable-content section', {
  scrollTrigger: {
    trigger: '.scrollable-content',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});

// Agent card
gsap.from('.agent-card', {
  scrollTrigger: {
    trigger: '.agent-card',
    start: 'top 90%'
  },
  opacity: 0,
  scale: 0.95,
  y: 20,
  duration: 0.5,
  ease: 'back.out(1.2)'
});

// Form fields
gsap.from('.form-field', {
  scrollTrigger: {
    trigger: '.inquiry-form',
    start: 'top 85%'
  },
  opacity: 0,
  y: 15,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Image Change Animation

```javascript
// Main image change with crossfade
const changeImage = (newIndex) => {
  const mainImage = document.querySelector('.gallery-image');
  
  gsap.timeline()
    .to(mainImage, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3
    })
    .call(() => {
      // Update image source
      mainImage.src = images[newIndex].url;
    })
    .to(mainImage, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    });
};

// Thumbnail click handler
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    changeImage(index);
    updateActiveThumbnail(index);
  });
});
```

### Hover Animations

```javascript
// Thumbnail hover
const setupThumbnailHovers = () => {
  const thumbs = document.querySelectorAll('.thumbnail-item');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
      if (!thumb.classList.contains('active')) {
        gsap.to(thumb, {
          borderColor: '#eb6753',
          scale: 1.02,
          duration: 0.2
        });
      }
    });
    
    thumb.addEventListener('mouseleave', () => {
      if (!thumb.classList.contains('active')) {
        gsap.to(thumb, {
          borderColor: '#efefef',
          scale: 1,
          duration: 0.2
        });
      }
    });
  });
};

// Tab button hover
const setupTabHovers = () => {
  const tabs = document.querySelectorAll('.tab-button');
  
  tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
      gsap.to(tab, {
        scale: 1.05,
        duration: 0.2
      });
    });
    
    tab.addEventListener('mouseleave', () => {
      gsap.to(tab, {
        scale: 1,
        duration: 0.2
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V9 split-screen timeline
const v9Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v9Timeline
  .from('.sticky-gallery', { x: -100, opacity: 0, duration: 0.8 })
  .from('.scrollable-content', { x: 100, opacity: 0, duration: 0.8 }, '-=0.6')
  .from('.tab-button', { y: -15, opacity: 0, stagger: 0.08, duration: 0.3 }, '-=0.4')
  .from('.gallery-image', { scale: 1.1, opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.thumbnail-item', { y: 15, opacity: 0, stagger: 0.05, duration: 0.3 }, '-=0.2');
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

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
