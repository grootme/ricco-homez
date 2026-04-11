# Single V8 - Property Detail Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/single-v8/1
- **Page Title:** Property Single V8 || Homez - Real Estate NextJS Template
- **Template Type:** Property Single Page
- **Layout Style:** Full-Width Image Gallery with Masonry Grid

---

## 2. Page Overview

### Layout Type
Single V8 presents a property detail page with a full-width image gallery using a masonry-style grid layout. This variant emphasizes visual storytelling with a large gallery section at the top, followed by property details in a clean, modern layout. The design prioritizes image presentation while maintaining comprehensive property information.

### Purpose
- Showcase property through an immersive image gallery
- Display comprehensive property information in organized sections
- Enable user engagement through inquiry forms and scheduling
- Provide detailed property specifications and features
- Present agent contact information
- Show similar properties for cross-selling

### Page Structure Overview
```
+------------------------------------------------------------+
| HEADER - Navigation with Logo, Menu, Login/Register       |
+------------------------------------------------------------+
| FULL-WIDTH GALLERY SECTION                                 |
| +--------------+ +--------------+ +----------------------+ |
| | Image 1      | | Image 2      | | Image 3 (large)      | |
| | (medium)     | | (medium)     | | (full height)        | |
| +--------------+ +--------------+ +----------------------+ |
| +--------------+ +--------------+ +--------------+        |
| | Image 4      | | Image 5      | | Image 6      |        |
| +--------------+ +--------------+ +--------------+        |
+------------------------------------------------------------+
| PROPERTY HEADER SECTION                                    |
| - Title: "Equestrian Family Home"                          |
| - Location, Status, Time, Views                           |
| - Beds, Baths, Sqft summary                               |
| - Action Buttons: Like, Share, Print                      |
| - Price Display                                            |
+------------------------------------------------------------+
| MAIN CONTENT AREA                                          |
| +------------------------+ +-----------------------------+ |
| | PROPERTY DETAILS       | | SIDEBAR                     | |
| | - Description          | | - Agent Card                | |
| | - Specifications       | | - Inquiry Form              | |
| | - Features/Amenities   | | - Schedule Tour             | |
| | - Floor Plans          | | - Mortgage Calculator       | |
| | - Location Map         | | - Quick Details             | |
| +------------------------+ +-----------------------------+ |
+------------------------------------------------------------+
| SIMILAR PROPERTIES SECTION                                  |
| - Property Cards Grid                                       |
+------------------------------------------------------------+
| FOOTER - Contact, Links, Newsletter                         |
+------------------------------------------------------------+
```

---

## 3. Layout Configuration

### Main Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Full-Width Gallery + Two-column Content |
| **Gallery Style** | Masonry Grid |
| **Gallery Columns** | 3 columns (responsive) |
| **Main Content Width** | 8 columns (col-lg-8) |
| **Sidebar Width** | 4 columns (col-lg-4) |
| **Container Width** | Full-width gallery, contained content |

### Gallery Configuration
| Setting | Value |
|---------|-------|
| **Layout** | Masonry Grid |
| **Gap** | 15px |
| **Image Heights** | Variable (masonry) |
| **Hover Effect** | Zoom + Overlay |
| **Click Action** | Open lightbox |

### CSS Configuration
```css
/* Full-Width Gallery */
.gallery-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 0;
  margin: 0;
  width: 100%;
}

.gallery-masonry .gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.gallery-masonry .gallery-item.large {
  grid-row: span 2;
}

.gallery-masonry .gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-masonry .gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-masonry .gallery-item .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-masonry .gallery-item:hover .overlay {
  opacity: 1;
}

/* Responsive Gallery */
@media (max-width: 991px) {
  .gallery-masonry {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .gallery-masonry {
    grid-template-columns: 1fr;
  }
  
  .gallery-masonry .gallery-item.large {
    grid-row: span 1;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Gallery Data Structure

| Field | Type | Description |
|-------|------|-------------|
| **Images** | Array[Object] | Gallery image objects |
| **Image Size** | String | 'medium', 'large', 'small' |
| **Aspect Ratio** | Varies | Masonry layout |
| **Lightbox** | Boolean | Enable fullscreen view |

### Gallery Image Object
```typescript
interface GalleryImage {
  id: string;
  url: string;
  thumbnail: string;
  alt: string;
  caption?: string;
  size: 'small' | 'medium' | 'large';
  order: number;
}
```

### Gallery Images (Example Paths)
```
/images/listings/listing-single-8-1.jpg (large)
/images/listings/listing-single-8-2.jpg (medium)
/images/listings/listing-single-8-3.jpg (medium)
/images/listings/listing-single-8-4.jpg (small)
/images/listings/listing-single-8-5.jpg (small)
/images/listings/listing-single-8-6.jpg (small)
```

### 4.2 Property Header Data

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
    coordinates: {
      lat: number;
      lng: number;
    };
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

### Agent Data Model
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
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  verified: boolean;
  responseTime?: string;
  languages?: string[];
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

### Inquiry Form Model
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
| **Property ID** | String | "RL-2024-008" |
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
  foundation: string;
  lastRenovated?: number;
}
```

### 4.7 Features/Amenities Data

| Category | Features |
|----------|----------|
| **Interior** | Air Conditioning, Central Heating, Washer/Dryer, Dishwasher, Microwave, Refrigerator, Walk-in Closets |
| **Exterior** | Private Pool, Landscaped Garden, BBQ Area, Outdoor Shower, Patio/Deck |
| **Security** | Alarm System, 24/7 Security, Video Surveillance, Gated Community |
| **Community** | Swimming Pool, Fitness Center, Tennis Court, Clubhouse, Playground |

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
| Ground Floor | Main Living Area | 800 sqft | Living, Kitchen, Dining | floor-plan-8-1.jpg |
| First Floor | Bedroom Suite | 400 sqft | 1 Bed, 1 Bath | floor-plan-8-2.jpg |

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
| Hospital | City Medical Center | 1.2 mi |
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
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

### 4.10 Similar Properties Data

| Property | Price | Beds | Baths | Sqft | Status |
|----------|-------|------|-------|------|--------|
| Modern Villa | $18,000 | 3 | 2 | 1800 | For Sale |
| City Apartment | $12,000 | 2 | 1 | 1000 | For Rent |
| Suburban Home | $15,000 | 3 | 2 | 1500 | For Sale |

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
  featured: boolean;
}
```

---

## 5. Component Breakdown

### 5.1 Header Component
```
Header/
├── Logo Container
│   └── Logo Link (to home)
├── Navigation Menu
│   ├── Home Dropdown (V1-V10)
│   ├── Listing Megamenu
│   ├── Property Dropdown
│   │   ├── Agents Section
│   │   ├── Single Styles
│   │   └── Dashboard
│   ├── Blog Dropdown
│   └── Pages Dropdown
├── User Actions
│   ├── Login/Register Button
│   ├── Add Property Button
│   └── Hamburger Menu
```

### 5.2 Full-Width Gallery Section
```
FullWidthGallery/
├── Masonry Grid Container
│   ├── Gallery Item (Large)
│   │   ├── Image
│   │   ├── Hover Overlay
│   │   └── Expand Icon
│   ├── Gallery Item (Medium) x2
│   │   ├── Image
│   │   └── Hover Overlay
│   └── Gallery Item (Small) x3
│       ├── Image
│       └── Hover Overlay
├── View All Photos Button
└── Lightbox Modal
    ├── Full-size Image
    ├── Navigation Arrows
    ├── Image Counter
    └── Close Button
```

### 5.3 Property Header Section
```
PropertyHeader/
├── Title Component
│   └── h2.sp-lg-title: Property Title
├── Meta Information
│   ├── Location Badge
│   ├── Status Badge
│   ├── Time Posted Badge
│   └── Views Count Badge
├── Property Specs
│   ├── Beds Count
│   ├── Baths Count
│   └── Sqft Count
└── Price Section
    ├── Main Price
    ├── Price per Sqft
    └── Action Buttons
        ├── Favorite Button
        ├── Share Button
        ├── Print Button
        └── New Tab Button
```

### 5.4 Sidebar Component
```
Sidebar/
├── Agent Card Widget
│   ├── Agent Avatar
│   ├── Agent Name
│   ├── Agent Role
│   ├── Contact Buttons
│   └── View Listings Link
├── Inquiry Form Widget
│   ├── Form Title
│   ├── Name Input
│   ├── Phone Input
│   ├── Email Input
│   ├── Message Textarea
│   └── Submit Button
├── Schedule Tour Widget
│   ├── Tour Type Selection
│   ├── Date Picker
│   ├── Time Selector
│   ├── Contact Inputs
│   └── Submit Button
└── Mortgage Calculator Widget
    ├── Home Price Input
    ├── Down Payment Input
    ├── Interest Rate Input
    ├── Loan Term Input
    └── Calculate Button
```

### 5.5 Property Details Section
```
PropertyDetails/
├── Section Header
├── Description Block
├── Specifications Grid
│   ├── Property ID
│   ├── Property Type
│   ├── Status
│   ├── Year Built
│   ├── Lot Size
│   ├── Garage
│   └── Pool
├── Features Section
│   ├── Interior Features
│   ├── Exterior Features
│   ├── Security Features
│   └── Community Features
└── Video Section (optional)
```

### 5.6 Floor Plans Section
```
FloorPlans/
├── Section Header
├── Floor Plan Accordion
│   ├── Floor Card
│   │   ├── Floor Name
│   │   ├── Size Badge
│   │   ├── Expand Button
│   │   └── Expanded Content
│   │       ├── Floor Plan Image
│   │       └── Room Details
│   └── Additional Floors...
└── Total Area Summary
```

### 5.7 Location Section
```
LocationSection/
├── Section Header
├── Address Display
├── Google Maps Container
│   ├── Map Embed
│   ├── Property Marker
│   └── Zoom Controls
└── Nearby Places List
    ├── Category Headers
    └── Place Items
```

### 5.8 Similar Properties Section
```
SimilarProperties/
├── Section Header
│   ├── Title
│   └── View All Link
├── Property Cards Grid
│   ├── Property Card 1
│   │   ├── Image Container
│   │   ├── Price Tag
│   │   ├── Title
│   │   ├── Location
│   │   ├── Specs Row
│   │   └── Action Buttons
│   └── More Cards...
└── Carousel Navigation
```

### 5.9 Footer Component
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
    ├── Privacy Link
    ├── Terms Link
    └── Sitemap Link
```

---

## 6. Interactive Elements

### 6.1 Gallery Interactions

| Action | Behavior |
|--------|----------|
| **Hover Image** | Show overlay with expand icon |
| **Click Image** | Open lightbox at that image |
| **Swipe Lightbox** | Navigate between images |
| **Click Overlay** | Close lightbox |
| **Press Escape** | Close lightbox |

### 6.2 Lightbox Features

| Feature | Behavior |
|---------|----------|
| **Image Counter** | Shows "1 of 6" |
| **Navigation Arrows** | Previous/Next buttons |
| **Keyboard Navigation** | Arrow keys, Escape |
| **Image Zoom** | Pinch/scroll to zoom |
| **Fullscreen** | Toggle fullscreen mode |

### 6.3 Form Interactions

#### Inquiry Form
| Field | Validation | Error Message |
|-------|------------|---------------|
| **Name** | Required, min 2 chars | "Please enter your name" |
| **Phone** | Required, phone format | "Please enter valid phone" |
| **Email** | Required, email format | "Please enter valid email" |
| **Message** | Required, min 10 chars | "Message too short" |

#### Schedule Tour Form
| Field | Validation | Behavior |
|-------|------------|----------|
| **Tour Type** | Required | Radio selection |
| **Date** | Required, future | Date picker |
| **Time** | Required | Dropdown |
| **Contact Fields** | Required | Validation |

### 6.4 Action Buttons

| Button | Behavior | Requirements |
|--------|----------|--------------|
| **Favorite** | Toggle saved | Login required |
| **Share** | Open share modal | - |
| **Print** | Print dialog | - |
| **New Tab** | Open in new tab | - |

---

## 7. Responsive Behavior

### Breakpoint Configuration

| Breakpoint | Width | Gallery Columns | Layout Changes |
|------------|-------|-----------------|----------------|
| **Desktop XL** | > 1400px | 3 columns | Full masonry |
| **Desktop** | 1200-1399px | 3 columns | Standard layout |
| **Tablet** | 992-1199px | 2 columns | Reduced grid |
| **Mobile** | < 991px | 1-2 columns | Stacked |

### Gallery Responsive Transformations

```css
/* Desktop (1200px+) */
.gallery-masonry {
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet (992-1199px) */
@media (max-width: 1199px) {
  .gallery-masonry {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-masonry .gallery-item.large {
    grid-row: span 1;
  }
}

/* Mobile (< 992px) */
@media (max-width: 991px) {
  .gallery-masonry {
    grid-template-columns: 1fr;
  }
  
  .gallery-masonry .gallery-item {
    grid-row: span 1 !important;
  }
}
```

---

## 8. Component Props and Data Flow

### Gallery Component Props

```typescript
interface FullWidthGalleryProps {
  images: GalleryImage[];
  enableLightbox: boolean;
  onImageClick?: (index: number) => void;
  columns: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  gap: number;
  loadingStrategy: 'eager' | 'lazy';
}
```

### Property Page Props

```typescript
interface PropertyPagePropsV8 {
  params: {
    id: string;
  };
}

interface PropertyDataV8 {
  gallery: GalleryImage[];
  header: PropertyHeader;
  details: PropertyDetails;
  features: PropertyFeatures;
  floorPlans: FloorPlan[];
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
    nearbyPlaces: NearbyPlace[];
  };
  agent: Agent;
  similarProperties: SimilarProperty[];
}
```

---

## 9. State Management

### Gallery State

```typescript
interface GalleryState {
  images: GalleryImage[];
  lightboxOpen: boolean;
  currentIndex: number;
  isZoomed: boolean;
  isFullscreen: boolean;
}
```

### Page State

```typescript
interface PropertyPageStateV8 {
  property: PropertyDataV8 | null;
  loading: boolean;
  error: string | null;
  
  // Gallery State
  gallery: GalleryState;
  
  // Form State
  inquiryForm: FormState<InquiryForm>;
  scheduleForm: FormState<ScheduleTour>;
  
  // User Actions
  isFavorited: boolean;
  isCompared: boolean;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Get Property Details
GET /api/properties/:id
Response: {
  data: PropertyDataV8;
  meta: {
    views: number;
    favorites: number;
  };
}

// Get Gallery Images
GET /api/properties/:id/gallery
Response: {
  data: GalleryImage[];
}

// Submit Inquiry
POST /api/inquiries
Body: InquiryForm
Response: {
  success: boolean;
  message: string;
  inquiryId: string;
}

// Schedule Tour
POST /api/tours
Body: ScheduleTour
Response: {
  success: boolean;
  tourId: string;
}

// Get Similar Properties
GET /api/properties/:id/similar
Response: {
  data: SimilarProperty[];
}
```

---

## 11. Accessibility Considerations

### ARIA Labels

```html
<!-- Gallery -->
<div role="region" aria-label="Property photo gallery">
  <div role="grid" aria-label="Image grid">
    <div role="gridcell" aria-label="Property photo 1">
      <img alt="Property exterior view" />
      <button aria-label="View full-size image">Expand</button>
    </div>
  </div>
</div>

<!-- Lightbox -->
<div role="dialog" aria-modal="true" aria-label="Image viewer">
  <img alt="Property photo 1 of 6" />
  <button aria-label="Previous image">Previous</button>
  <button aria-label="Next image">Next</button>
  <button aria-label="Close viewer">Close</button>
  <span aria-live="polite">1 of 6</span>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Navigate elements |
| **Enter/Space** | Activate buttons |
| **Arrow Left/Right** | Navigate lightbox |
| **Escape** | Close lightbox/modal |
| **Home/End** | First/last image |

---

## 12. Performance Optimizations

### Image Optimization

```typescript
const galleryImageConfig = {
  sizes: [1920, 1200, 800, 400],
  formats: ['webp', 'jpg'],
  lazyLoading: true,
  placeholder: 'blur',
};
```

### Loading Strategy

| Image Position | Loading |
|----------------|---------|
| Above fold (2-3) | Eager |
| Below fold | Lazy |
| Lightbox images | Lazy |

### Caching

```typescript
const cacheConfig = {
  propertyGallery: {
    ttl: 600,
    staleWhileRevalidate: 3600,
  },
  propertyDetails: {
    ttl: 300,
    staleWhileRevalidate: 1800,
  },
};
```

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Equestrian Family Home - New York City | Homez</title>
<meta name="description" content="1 bed, 2 bath property for sale at $14,000. View photos, floor plans, and schedule a tour." />

<!-- Open Graph -->
<meta property="og:image" content="https://homez-appdir.vercel.app/images/listings/listing-single-8-1.jpg" />
<meta property="og:image:alt" content="Equestrian Family Home exterior" />

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "image": [
    "https://homez-appdir.vercel.app/images/listings/listing-single-8-1.jpg",
    "https://homez-appdir.vercel.app/images/listings/listing-single-8-2.jpg"
  ]
}
</script>
```

---

## 14. Unique Features (V8 Specific)

### Masonry Gallery
- **Variable Image Heights**: Creates visual interest
- **Large Feature Image**: Highlights best property photo
- **Full-Width Layout**: Maximizes visual impact
- **Hover Effects**: Engaging interactions

### Layout Advantages
- **Visual Storytelling**: Gallery tells property story
- **Immersive Experience**: Full-width creates impact
- **Flexible Layout**: Adapts to image orientations

---

## 15. Related Pages

- [Single V6](./single-v6.md) - Vertical slider variant
- [Single V7](./single-v7.md) - Hero header variant
- [Single V9](./single-v9.md) - Split screen variant
- [Single V10](./single-v10.md) - Modern card variant
- [Grid Default](../listing-pages/grid-default.md) - Property listings

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

### V8-Specific Animations (Masonry Gallery)

```javascript
// Masonry grid configuration
const masonryConfig = {
  columns: 3,
  gap: 15,
  animation: {
    type: 'fade-up',
    stagger: 100 // ms between each item
  }
};

// Lightbox configuration
const lightboxConfig = {
  animation: 'fade',
  speed: 300,
  keyboardNav: true,
  counter: true
};
```

### Masonry Gallery Animations

```css
/* Gallery item entrance */
.gallery-masonry .gallery-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.gallery-masonry .gallery-item.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation */
.gallery-item:nth-child(1) { transition-delay: 0ms; }
.gallery-item:nth-child(2) { transition-delay: 100ms; }
.gallery-item:nth-child(3) { transition-delay: 200ms; }
.gallery-item:nth-child(4) { transition-delay: 300ms; }
.gallery-item:nth-child(5) { transition-delay: 400ms; }
.gallery-item:nth-child(6) { transition-delay: 500ms; }

/* Hover zoom effect */
.gallery-item img {
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Overlay fade in */
.gallery-item .overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
}
```

### Lightbox Animation

```css
/* Lightbox open animation */
.lightbox {
  animation: lightboxFadeIn 0.3s ease forwards;
}

@keyframes lightboxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-image {
  animation: lightboxImageScale 0.4s ease forwards;
}

@keyframes lightboxImageScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
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
  --gallery-gap: 15px;
  --gallery-columns: 3;
  --border-radius: 12px;
  --overlay-bg: rgba(0, 0, 0, 0.3);
}

/* Masonry gallery */
.gallery-masonry {
  display: grid;
  grid-template-columns: repeat(var(--gallery-columns), 1fr);
  gap: var(--gallery-gap);
}

.gallery-item.large {
  grid-row: span 2;
}

.gallery-item .overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
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

### Page Load Animations (V8 Masonry Gallery)

```javascript
// components/PropertySingleV8.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV8 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V8-specific: Masonry gallery entrance
      gsap.from('.gallery-masonry .gallery-item', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: {
          each: 0.1,
          from: 'random'
        },
        duration: 0.8,
        ease: 'back.out(1.2)'
      });

      // Property header
      gsap.from('.property-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.5,
        ease: 'power2.out'
      });

      // Hover overlays
      gsap.from('.gallery-item .overlay', {
        opacity: 0,
        duration: 0.3,
        delay: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Masonry Gallery Animation (V8 Unique)

```javascript
// Masonry grid entrance with random stagger
gsap.from('.gallery-item', {
  opacity: 0,
  y: 60,
  scale: 0.85,
  rotation: () => Math.random() * 10 - 5, // Random rotation
  stagger: {
    each: 0.08,
    from: 'random',
    grid: [2, 3]
  },
  duration: 0.7,
  ease: 'back.out(1.4)'
});

// Large item special animation
gsap.from('.gallery-item.large', {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: 'power3.out'
});

// Gallery overlay icons
gsap.from('.gallery-item .overlay-icon', {
  scale: 0,
  opacity: 0,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.8,
  ease: 'back.out(2)'
});
```

### Lightbox Animation

```javascript
// Lightbox open animation
const openLightbox = (index) => {
  const lightbox = document.querySelector('.lightbox');
  const image = lightbox.querySelector('.lightbox-image');
  const counter = lightbox.querySelector('.lightbox-counter');
  
  gsap.timeline()
    .set(lightbox, { display: 'flex' })
    .to(lightbox, {
      opacity: 1,
      duration: 0.3
    })
    .from(image, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.1')
    .from(counter, {
      y: 20,
      opacity: 0,
      duration: 0.3
    }, '-=0.2');
};

// Lightbox navigation
const navigateLightbox = (direction) => {
  const image = document.querySelector('.lightbox-image');
  
  gsap.timeline()
    .to(image, {
      opacity: 0,
      x: direction === 'next' ? -50 : 50,
      duration: 0.2
    })
    .set(image, { x: direction === 'next' ? 50 : -50 })
    .to(image, {
      opacity: 1,
      x: 0,
      duration: 0.3
    });
};

// Lightbox close
const closeLightbox = () => {
  gsap.to('.lightbox', {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      gsap.set('.lightbox', { display: 'none' });
    }
  });
};
```

### ScrollTrigger Animations

```javascript
// Property details
gsap.from('.property-details', {
  scrollTrigger: {
    trigger: '.property-details',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: 'power2.out'
});

// Features categories
gsap.from('.features-category', {
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 80%'
  },
  opacity: 0,
  x: -30,
  stagger: 0.12,
  duration: 0.5,
  ease: 'power2.out'
});

// Floor plans
gsap.from('.floor-plan-card', {
  scrollTrigger: {
    trigger: '.floor-plans-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power2.out'
});
```

### Sidebar Animations

```javascript
// Sidebar widgets
gsap.from('.sidebar .sidebar-widget', {
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
// Gallery item hover
const setupGalleryHovers = () => {
  const items = document.querySelectorAll('.gallery-item');
  
  items.forEach(item => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.overlay');
    const icon = item.querySelector('.overlay-icon');
    
    item.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3
      });
      gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)'
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
      });
      gsap.to(icon, {
        scale: 0.8,
        duration: 0.3
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V8 masonry timeline
const v8Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v8Timeline
  .from('.gallery-item', { 
    opacity: 0, 
    y: 50, 
    scale: 0.9, 
    stagger: { each: 0.08, from: 'random' },
    duration: 0.6 
  })
  .from('.property-header', { opacity: 0, y: 30, duration: 0.5 }, '-=0.3')
  .from('.property-specs', { opacity: 0, x: -20, duration: 0.4 }, '-=0.2');
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
