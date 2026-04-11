# Single V6 - Property Detail Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/single-v6/1
- **Page Title:** Property Single V6 || Homez - Real Estate NextJS Template
- **Template Type:** Property Single Page
- **Layout Style:** Vertical Slider Gallery with Sidebar

---

## 2. Page Overview

### Layout Type
Single V6 presents a property detail page with a vertical image slider gallery layout. The page features a modern design with the main property gallery on the left side and property information/actions on the right. It uses a tab-based navigation system to switch between images, map, and street view.

### Purpose
- Display comprehensive property information for potential buyers/renters
- Showcase property through high-quality image gallery
- Provide interactive map and street view integration
- Enable user engagement through inquiry forms and scheduling
- Present agent contact information
- Display similar properties for cross-selling

### Page Structure Overview
```
+------------------------------------------------------------+
| HEADER - Navigation with Logo, Menu, Login/Register       |
+------------------------------------------------------------+
| PROPERTY HEADER SECTION                                    |
| - Title: "Equestrian Family Home"                          |
| - Location: "New York City, CA, USA"                       |
| - Status Badge: "For Sale"                                 |
| - Time Posted: "8 years ago"                               |
| - Views Count: "8721"                                      |
| - Beds: 1, Baths: 2, Sqft: 1200                           |
| - Action Buttons: Like, Share, Print, New Tab             |
| - Price: $14,000                                           |
+------------------------------------------------------------+
| MAIN CONTENT AREA                                          |
| +------------------------+ +-----------------------------+ |
| | GALLERY/MAP TABS       | | SIDEBAR                     | |
| | - Images Tab           | | - Agent Info                | |
| | - Map Tab              | | - Inquiry Form              | |
| | - Street View Tab      | | - Schedule Tour             | |
| |                        | | - Mortgage Calculator       | |
| | VERTICAL SLIDER        | | - Property Details          | |
| | - Main Image           | | - Features/Amenities        | |
| | - Thumbnail Navigation | | - Floor Plans               | |
| +------------------------+ +-----------------------------+ |
+------------------------------------------------------------+
| PROPERTY DETAILS SECTION                                   |
| - Description                                              |
| - Property Features                                        |
| - Amenities List                                           |
| - Floor Plans                                              |
+------------------------------------------------------------+
| LOCATION SECTION                                           |
| - Interactive Map                                          |
| - Nearby Places                                            |
+------------------------------------------------------------+
| SIMILAR PROPERTIES SECTION                                 |
| - Property Cards Grid                                      |
+------------------------------------------------------------+
| FOOTER - Contact, Links, Newsletter                        |
+------------------------------------------------------------+
```

---

## 3. Layout Configuration

### Main Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Two-column with Gallery + Sidebar |
| **Main Content Width** | 8 columns (col-lg-8) |
| **Sidebar Width** | 4 columns (col-lg-4) |
| **Gallery Type** | Vertical Slider with Thumbnails |
| **Container Width** | Full-width with padding |
| **Background Color** | #f7f7f7 (bgc-f7) |

### Gallery Configuration
| Setting | Value |
|---------|-------|
| **Gallery Style** | Vertical Slider (Swiper) |
| **Main Image Height** | Auto with aspect ratio |
| **Thumbnail Count** | 4 visible thumbnails |
| **Navigation** | None (nav_none class) |
| **Autoplay** | Disabled by default |
| **Infinite Loop** | Enabled |

### CSS Configuration
```css
/* Main Container */
.single-property-content {
  margin-bottom: 30px;
}

/* Gallery Container */
.ps-v6-slider {
  position: relative;
  overflow: hidden;
}

/* Gallery Tabs */
.ps-v4-hero-tab {
  position: relative;
}

.ps-v4-hero-tab .nav-pills {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}

/* Main Image */
.ps-v6-slider .swiper-slide img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

/* Thumbnail Navigation */
.mySwiper .swiper-slide {
  width: calc(25% - 10px);
  margin-right: 10px;
}

.mySwiper .swiper-slide img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
}
```

---

## 4. Data Content Structure

### 4.1 Property Header Data

| Field | Type | Example Value | Description |
|-------|------|---------------|-------------|
| **Title** | String | "Equestrian Family Home" | Property name/title |
| **Location** | String | "New York City, CA, USA" | Full address |
| **Status** | String | "For Sale" | Listing status |
| **Time Posted** | String | "8 years ago" | Relative time |
| **Views** | Number | 8721 | View count |
| **Beds** | Number | 1 | Bedroom count |
| **Baths** | Number | 2 | Bathroom count |
| **Sqft** | Number | 1200 | Square footage |
| **Price** | Number | 14000 | Total price |
| **Price per Sqft** | Number | 11.67 | Calculated rate |

### Property Header Data Model (TypeScript)
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

### 4.2 Property Gallery Data Structure

| Field | Type | Description |
|-------|------|-------------|
| **Images** | Array[URL] | Property image URLs |
| **Main Image** | URL | Currently displayed image |
| **Thumbnails** | Array[URL] | Gallery thumbnail images |
| **Virtual Tour** | URL (optional) | 360° virtual tour link |
| **Video** | URL (optional) | Property video link |

### Gallery Image Paths (Example)
```
/images/listings/listing-single-6-1.jpg
/images/listings/listing-single-6-2.jpg
/images/listings/listing-single-6-3.jpg
/images/listings/listing-single-6-4.jpg
```

### Gallery Data Model
```typescript
interface PropertyGallery {
  images: Array<{
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
    caption?: string;
    order: number;
  }>;
  videos?: Array<{
    id: string;
    url: string;
    type: 'youtube' | 'vimeo' | 'upload';
    thumbnail: string;
  }>;
  virtualTour?: {
    type: 'matterport' | 'custom';
    url: string;
  };
}
```

### 4.3 Gallery Tabs Configuration

| Tab | Icon | Content |
|-----|------|---------|
| **Images** | flaticon-images | Photo gallery slider |
| **Map** | flaticon-map | Google Maps integration |
| **Street View** | flaticon-maps-1 | Street view panorama |

### 4.4 Action Buttons Data

| Action | Icon | Behavior |
|--------|------|----------|
| **Favorite** | flaticon-like | Toggle saved status |
| **New Tab** | flaticon-new-tab | Open property in new tab |
| **Share** | flaticon-share-1 | Open share modal |
| **Print** | flaticon-printer | Print property details |

### 4.5 Agent Information Data

| Field | Type | Example |
|-------|------|---------|
| **Name** | String | "Ali Tufan" |
| **Role** | String | "General Manager" |
| **Photo** | URL | Agent profile image |
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
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  verified: boolean;
}
```

### 4.6 Inquiry Form Fields

| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| **Name** | Text | Yes | "Your Name" |
| **Phone** | Tel | Yes | "Phone Number" |
| **Email** | Email | Yes | "Email Address" |
| **Message** | Textarea | Yes | "Write your message" |
| **Submit** | Button | - | "Send Message" |

### Inquiry Form Data Model
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

### 4.7 Schedule Tour Form Fields

| Field | Type | Required | Options |
|-------|------|----------|---------|
| **Tour Type** | Radio | Yes | In Person, Video Tour |
| **Date** | Date | Yes | Date picker |
| **Time** | Select | Yes | Available time slots |
| **Name** | Text | Yes | User name |
| **Phone** | Tel | Yes | Phone number |
| **Email** | Email | Yes | Email address |
| **Message** | Textarea | No | Additional notes |

### Schedule Tour Data Model
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

### 4.8 Property Details Data

| Field | Type | Example |
|-------|------|---------|
| **Property ID** | String | "RL-2024-001" |
| **Property Type** | String | "House" |
| **Status** | String | "For Sale" |
| **Year Built** | Number | 2020 |
| **Lot Size** | Number | 5000 sqft |
| **Garage** | Number | 2 cars |
| **Pool** | Boolean | Yes |

### Property Details Data Model
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
}
```

### 4.9 Features/Amenities Data

| Category | Features |
|----------|----------|
| **Interior** | Air Conditioning, Central Heating, Washer/Dryer, Dishwasher, Microwave, Refrigerator |
| **Exterior** | Private Pool, Landscaped Garden, BBQ Area, Outdoor Shower, Patio |
| **Security** | Alarm System, 24/7 Security, Video Surveillance, Gated Community |
| **Community** | Swimming Pool, Fitness Center, Tennis Court, Clubhouse, Playground |

### Features Data Model
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

### 4.10 Floor Plans Data

| Floor | Name | Size | Rooms | Image |
|-------|------|------|-------|-------|
| Ground Floor | Main Living Area | 800 sqft | Living, Kitchen, Dining | floor-plan-1.jpg |
| First Floor | Bedroom Suite | 400 sqft | 1 Bed, 1 Bath | floor-plan-2.jpg |

### Floor Plan Data Model
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

### 4.11 Location/Nearby Places Data

| Place Type | Name | Distance |
|------------|------|----------|
| School | Lincoln Elementary | 0.5 mi |
| Hospital | City Medical Center | 1.2 mi |
| Shopping | Westfield Mall | 0.8 mi |
| Restaurant | Downtown Dining | 0.3 mi |
| Park | Central Park | 0.2 mi |
| Transit | Metro Station | 0.4 mi |

### Nearby Places Data Model
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

### 4.12 Similar Properties Data

| Property | Price | Beds | Baths | Sqft | Image |
|----------|-------|------|-------|------|-------|
| Modern Villa | $18,000 | 3 | 2 | 1800 | similar-1.jpg |
| City Apartment | $12,000 | 2 | 1 | 1000 | similar-2.jpg |
| Suburban Home | $15,000 | 3 | 2 | 1500 | similar-3.jpg |

### Similar Property Card Data Model
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
├── Logo (link to home)
├── Navigation Menu
│   ├── Home (dropdown with 10 versions)
│   ├── Listing (megamenu)
│   │   ├── Grid View
│   │   ├── Map Style
│   │   └── List View
│   ├── Property (dropdown)
│   │   ├── Agents
│   │   │   ├── Agents List
│   │   │   ├── Agent Single
│   │   │   ├── Agency
│   │   │   └── Agency Single
│   │   ├── Single Style (V1-V10)
│   │   └── Dashboard
│   ├── Blog
│   └── Pages
├── Login/Register Button (modal trigger)
├── Add Property Button
└── Hamburger Menu (mobile)
```

### 5.2 Property Header Section
```
PropertyHeader/
├── Title Component
│   └── h2.sp-lg-title: Property Title
├── Meta Information
│   ├── Location Badge
│   ├── Status Badge (For Sale/Rent)
│   ├── Time Posted Badge
│   └── Views Count Badge
├── Property Specs
│   ├── Beds Count (with icon)
│   ├── Baths Count (with icon)
│   └── Sqft Count (with icon)
└── Price Section
    ├── Main Price
    ├── Price per Sqft
    └── Action Buttons
        ├── Favorite Button
        ├── New Tab Button
        ├── Share Button
        └── Print Button
```

### 5.3 Gallery Section
```
GallerySection/
├── Tab Navigation
│   ├── Images Tab Button
│   ├── Map Tab Button
│   └── Street View Tab Button
├── Tab Content
│   ├── Images Tab
│   │   ├── Main Image Container (Swiper)
│   │   │   └── Image Slides
│   │   └── Thumbnail Navigation (Swiper)
│   │       └── Thumbnail Images
│   ├── Map Tab
│   │   └── Google Maps Component
│   └── Street View Tab
│       └── Street View Panorama
└── Navigation Controls (hidden on this variant)
```

### 5.4 Sidebar Component
```
Sidebar/
├── Agent Card
│   ├── Agent Avatar
│   ├── Agent Name
│   ├── Agent Role
│   ├── Agent Phone
│   ├── Agent Email
│   └── View Listings Button
├── Inquiry Form
│   ├── Name Input
│   ├── Phone Input
│   ├── Email Input
│   ├── Message Textarea
│   └── Submit Button
├── Schedule Tour Form
│   ├── Tour Type Selection
│   ├── Date Picker
│   ├── Time Selector
│   ├── Contact Fields
│   └── Submit Button
└── Mortgage Calculator
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
│   └── h4: "Property Details"
├── Details Grid
│   ├── Property ID
│   ├── Property Type
│   ├── Status
│   ├── Year Built
│   ├── Lot Size
│   ├── Garage
│   └── Pool
├── Description
│   └── Full Property Description Text
└── Features/Amenities
    ├── Interior Features List
    ├── Exterior Features List
    ├── Security Features List
    └── Community Features List
```

### 5.6 Floor Plans Section
```
FloorPlans/
├── Section Header
│   └── h4: "Floor Plans"
├── Floor Plan Cards
│   ├── Floor Name
│   ├── Floor Size
│   ├── Room Count
│   ├── Expand/Collapse Button
│   └── Floor Plan Image
└── Accordion Navigation
```

### 5.7 Location Section
```
LocationSection/
├── Section Header
│   └── h4: "Location"
├── Google Maps Component
│   ├── Map Container
│   ├── Property Marker
│   └── Zoom Controls
└── Nearby Places List
    ├── Place Category Icon
    ├── Place Name
    └── Distance
```

### 5.8 Similar Properties Section
```
SimilarProperties/
├── Section Header
│   ├── h4: "Similar Properties"
│   └── "View All" Link
└── Property Cards Grid
    ├── Property Card
    │   ├── Image with Badges
    │   ├── Price Tag
    │   ├── Title
    │   ├── Location
    │   ├── Specs Row
    │   └── Action Buttons
    └── Carousel Navigation (optional)
```

### 5.9 Footer Component
```
Footer/
├── Main Footer
│   ├── Contact Section
│   ├── App Download Links
│   ├── Social Media Links
│   ├── Newsletter Signup
│   ├── Popular Search Links
│   ├── Quick Links
│   └── Discover Links
└── Bottom Footer
    ├── Copyright
    ├── Privacy Link
    ├── Terms Link
    └── Sitemap Link
```

---

## 6. Interactive Elements

### 6.1 Gallery Interactions

#### Main Slider
| Action | Behavior |
|--------|----------|
| **Swipe Left/Right** | Navigate between images |
| **Click Thumbnail** | Jump to specific image |
| **Hover Thumbnail** | Highlight thumbnail |

#### Tab Navigation
| Tab | Action |
|-----|--------|
| **Images Tab** | Display photo gallery |
| **Map Tab** | Display Google Maps |
| **Street View Tab** | Display street panorama |

### 6.2 Map Interactions

| Action | Behavior |
|--------|----------|
| **Zoom In/Out** | Adjust map zoom level |
| **Pan** | Move map view |
| **Click Marker** | Show property info window |
| **Street View** | Enter street view mode |

### 6.3 Form Interactions

#### Inquiry Form
| Field | Validation | Behavior |
|-------|------------|----------|
| **Name** | Required, min 2 chars | Error message on invalid |
| **Phone** | Required, phone format | Format validation |
| **Email** | Required, email format | Email validation |
| **Message** | Required, min 10 chars | Character counter |

#### Schedule Tour Form
| Field | Validation | Behavior |
|-------|------------|----------|
| **Tour Type** | Required | Radio selection |
| **Date** | Required, future date | Date picker, past dates disabled |
| **Time** | Required | Dropdown with available slots |
| **Name** | Required | Text input |
| **Phone** | Required | Phone format |
| **Email** | Required | Email validation |

### 6.4 Action Buttons

| Button | Behavior | Requirements |
|--------|----------|--------------|
| **Favorite** | Toggle saved status | Login required |
| **Share** | Open share modal | - |
| **Print** | Open print dialog | - |
| **New Tab** | Open in new browser tab | - |

### 6.5 Floor Plans Accordion

| Action | Behavior |
|--------|----------|
| **Click Header** | Expand/Collapse floor plan |
| **View Image** | Show full floor plan image |
| **Download** | Download floor plan PDF |

---

## 7. Responsive Behavior

### Breakpoint Configuration

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Desktop XL** | > 1400px | Full 2-column layout |
| **Desktop** | 1200-1399px | Standard layout |
| **Tablet** | 992-1199px | Stacked layout starts |
| **Mobile Large** | 768-991px | Single column |
| **Mobile** | < 768px | Compact layout |

### Layout Transformations

```css
/* Desktop (1200px+) */
.single-property-content {
  display: flex;
  flex-wrap: wrap;
}

.col-lg-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-lg-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

/* Tablet (992-1199px) */
@media (max-width: 1199px) {
  .col-lg-8,
  .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .sidebar {
    margin-top: 30px;
  }
}

/* Mobile (768px-) */
@media (max-width: 767px) {
  .pd-meta {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .pd-meta p,
  .pd-meta a {
    margin-bottom: 10px;
    border-right: none !important;
  }
  
  .property-action {
    text-align: left !important;
  }
  
  .property-action .d-flex {
    justify-content: flex-start !important;
  }
}
```

### Gallery Responsive Behavior

| Breakpoint | Main Image | Thumbnails |
|------------|------------|------------|
| Desktop | Full width | 4 visible |
| Tablet | Full width | 3 visible |
| Mobile | Full width | 2 visible, scrollable |

---

## 8. Component Props and Data Flow

### Property Page Props

```typescript
interface PropertyPageProps {
  params: {
    id: string;
  };
}

interface PropertyData {
  header: PropertyHeader;
  gallery: PropertyGallery;
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

### Gallery Component Props

```typescript
interface GalleryProps {
  images: Array<{
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
  }>;
  videos?: Video[];
  virtualTour?: VirtualTour;
  enableZoom: boolean;
  showThumbnails: boolean;
  autoplay: boolean;
  autoplayInterval: number;
}
```

### Sidebar Component Props

```typescript
interface SidebarProps {
  agent: Agent;
  propertyId: string;
  showMortgageCalculator: boolean;
  onInquirySubmit: (data: InquiryForm) => void;
  onScheduleSubmit: (data: ScheduleTour) => void;
}
```

---

## 9. State Management

### Page State Structure

```typescript
interface PropertyPageState {
  property: PropertyData | null;
  loading: boolean;
  error: string | null;
  
  // UI State
  activeGalleryTab: 'images' | 'map' | 'street-view';
  currentImageIndex: number;
  expandedFloorPlans: string[];
  
  // Form State
  inquiryForm: {
    data: InquiryForm;
    submitting: boolean;
    success: boolean;
    error: string | null;
  };
  
  scheduleForm: {
    data: ScheduleTour;
    submitting: boolean;
    success: boolean;
    error: string | null;
  };
  
  // User Actions
  isFavorited: boolean;
  isCompared: boolean;
}
```

### Gallery State

```typescript
interface GalleryState {
  activeIndex: number;
  isZoomed: boolean;
  isFullscreen: boolean;
  isPlaying: boolean;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Get Property Details
GET /api/properties/:id
Response: {
  data: PropertyData;
  meta: {
    views: number;
    favorites: number;
  };
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
  message: string;
  tourId: string;
}

// Toggle Favorite
POST /api/favorites/toggle
Body: { propertyId: string }
Response: {
  success: boolean;
  isFavorited: boolean;
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
<div role="region" aria-label="Property gallery">
  <div role="tablist" aria-label="Gallery views">
    <button role="tab" aria-selected="true" aria-controls="images-panel">Images</button>
    <button role="tab" aria-selected="false" aria-controls="map-panel">Map</button>
    <button role="tab" aria-selected="false" aria-controls="street-view-panel">Street View</button>
  </div>
</div>

<!-- Property Details -->
<article aria-label="Property details">
  <h2>Equestrian Family Home</h2>
  <dl>
    <dt>Price</dt>
    <dd>$14,000</dd>
    <dt>Location</dt>
    <dd>New York City, CA, USA</dd>
  </dl>
</article>

<!-- Form -->
<form aria-label="Contact agent form">
  <label for="inquiry-name">Your Name (required)</label>
  <input id="inquiry-name" type="text" required aria-required="true" />
</form>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Navigate through elements |
| **Enter/Space** | Activate buttons, expand accordions |
| **Arrow Left/Right** | Navigate gallery images |
| **Escape** | Close modals, exit fullscreen |
| **Home/End** | Go to first/last gallery image |

---

## 12. Performance Optimizations

### Image Optimization

```typescript
const imageConfig = {
  mainImage: {
    sizes: [640, 828, 1080, 1200],
    formats: ['webp', 'jpg'],
    loading: 'eager',
    priority: true,
  },
  thumbnails: {
    sizes: [96, 128, 256],
    formats: ['webp', 'jpg'],
    loading: 'lazy',
    priority: false,
  },
};
```

### Lazy Loading Strategy

| Section | Loading Strategy |
|---------|------------------|
| Header | Eager |
| Gallery Main Image | Eager |
| Gallery Thumbnails | Lazy |
| Map | Lazy (on tab click) |
| Similar Properties | Lazy (intersection observer) |
| Footer | Lazy |

### Caching Strategy

```typescript
const cacheConfig = {
  propertyDetails: {
    ttl: 300, // 5 minutes
    staleWhileRevalidate: 3600,
  },
  similarProperties: {
    ttl: 600, // 10 minutes
    staleWhileRevalidate: 1800,
  },
};
```

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Equestrian Family Home - New York City | Homez Real Estate</title>
<meta name="description" content="3 bed, 2 bath property for sale at $14,000 in New York City, CA. View photos, floor plans, and schedule a tour today." />
<meta name="keywords" content="property for sale, New York City real estate, family home, 3 bedroom house" />

<!-- Open Graph -->
<meta property="og:title" content="Equestrian Family Home - New York City" />
<meta property="og:description" content="Beautiful family home for sale in New York City." />
<meta property="og:image" content="https://homez-appdir.vercel.app/images/listings/listing-single-6-1.jpg" />
<meta property="og:url" content="https://homez-appdir.vercel.app/single-v6/1" />
<meta property="og:type" content="website" />

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "description": "Beautiful family home for sale",
  "offers": {
    "@type": "Offer",
    "price": "14000",
    "priceCurrency": "USD"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York City",
    "addressRegion": "CA",
    "addressCountry": "USA"
  },
  "numberOfRooms": "3",
  "numberOfBathroomsTotal": "2",
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": "1200",
    "unitText": "sqft"
  }
}
</script>
```

---

## 14. Related Pages

- [Single V7](./single-v7.md) - Horizontal gallery variant
- [Single V8](./single-v8.md) - Full-width gallery variant
- [Single V9](./single-v9.md) - Split screen variant
- [Single V10](./single-v10.md) - Modern card layout variant
- [Agents](../agent-pages/agents.md) - Browse all agents
- [Grid Default](../listing-pages/grid-default.md) - Property listing page

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

### V6-Specific Animations (Vertical Slider Gallery)

```javascript
// Vertical slider configuration
const verticalSliderConfig = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  thumbs: {
    swiper: {
      el: '.thumbnail-swiper',
      slidesPerView: 4,
      spaceBetween: 10,
      direction: 'vertical'
    }
  }
};

// Tab navigation animation
const tabNavigationConfig = {
  animation: 'fade',
  duration: 300
};
```

### Tab Transition Animation

```css
/* Tab content fade */
.tab-pane {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.tab-pane.active {
  opacity: 1;
  transform: translateY(0);
}

/* Tab button animation */
.nav-pills .nav-link {
  transition: all 0.3s ease;
}

.nav-pills .nav-link.active {
  background-color: #eb6753;
  color: white;
  transform: scale(1.05);
}
```

### Thumbnail Navigation Animation

```css
.thumbnail-item {
  transition: all 0.3s ease;
  cursor: pointer;
}

.thumbnail-item:hover,
.thumbnail-item.active {
  border-color: #eb6753;
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
  --color-gray-300: #efefef;
  --border-radius: 12px;
  --tab-active-bg: #eb6753;
  --thumbnail-size: 90px;
}

/* Vertical slider specific */
.ps-v6-slider .swiper-slide img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.mySwiper .swiper-slide img {
  width: 100%;
  height: var(--thumbnail-size);
  object-fit: cover;
  border-radius: 12px;
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
  "react-pro-sidebar": "^1.1.0"
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

### Page Load Animations (V6 Vertical Slider)

```javascript
// components/PropertySingleV6.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV6 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V6-specific: Vertical slider gallery entrance
      gsap.from('.ps-v6-slider', {
        opacity: 0,
        x: -50,
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

      // Thumbnail navigation
      gsap.from('.mySwiper .swiper-slide', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
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

### Vertical Slider Gallery Animation (V6 Unique)

```javascript
// Vertical slider configuration
gsap.from('.ps-v6-slider', {
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power3.out'
});

// Main image fade in
gsap.from('.ps-v6-slider .swiper-slide img', {
  opacity: 0,
  scale: 1.05,
  duration: 0.6,
  ease: 'power2.out'
});

// Thumbnail strip
gsap.from('.mySwiper .swiper-slide', {
  opacity: 0,
  y: 15,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out',
  delay: 0.5
});

// Active thumbnail highlight
gsap.to('.mySwiper .swiper-slide-active', {
  borderColor: '#eb6753',
  duration: 0.3
});
```

### Tab Navigation Animation (V6 Gallery Tabs)

```javascript
// Tab buttons entrance
gsap.from('.ps-v4-hero-tab .nav-pills .nav-link', {
  opacity: 0,
  y: -20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out',
  delay: 0.3
});

// Tab content transition
const animateTabContent = (tabId) => {
  gsap.from(`#${tabId}`, {
    opacity: 0,
    y: 20,
    duration: 0.4,
    ease: 'power2.out'
  });
};

// Active tab button
gsap.to('.nav-pills .nav-link.active', {
  backgroundColor: '#eb6753',
  color: '#ffffff',
  scale: 1.05,
  duration: 0.3
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

// Features list
gsap.from('.feature-list .feature-item', {
  scrollTrigger: {
    trigger: '.feature-list',
    start: 'top 85%'
  },
  opacity: 0,
  x: -20,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power2.out'
});

// Floor plans accordion
gsap.from('.floor-plan-card', {
  scrollTrigger: {
    trigger: '.floor-plans-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  stagger: 0.12,
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
  x: 40,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out'
});

// Agent card
gsap.from('.agen-personal-info', {
  scrollTrigger: {
    trigger: '.agen-personal-info',
    start: 'top 85%'
  },
  opacity: 0,
  scale: 0.95,
  y: 20,
  duration: 0.5,
  ease: 'back.out(1.2)'
});

// Inquiry form fields
gsap.from('.inquiry-form .form-group', {
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

### Hover Animations

```javascript
// Thumbnail hover effect
const setupThumbnailHovers = () => {
  const thumbs = document.querySelectorAll('.mySwiper .swiper-slide');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
      gsap.to(thumb, {
        borderColor: '#eb6753',
        scale: 1.02,
        duration: 0.3
      });
    });
    
    thumb.addEventListener('mouseleave', () => {
      if (!thumb.classList.contains('swiper-slide-active')) {
        gsap.to(thumb, {
          borderColor: '#efefef',
          scale: 1,
          duration: 0.3
        });
      }
    });
  });
};

// Tab button hover
const setupTabHovers = () => {
  const tabs = document.querySelectorAll('.nav-pills .nav-link');
  
  tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
      if (!tab.classList.contains('active')) {
        gsap.to(tab, {
          backgroundColor: 'rgba(235, 103, 83, 0.1)',
          duration: 0.2
        });
      }
    });
    
    tab.addEventListener('mouseleave', () => {
      if (!tab.classList.contains('active')) {
        gsap.to(tab, {
          backgroundColor: 'transparent',
          duration: 0.2
        });
      }
    });
  });
};
```

### Timeline Animation

```javascript
// V6 vertical slider timeline
const v6Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v6Timeline
  .from('.ps-v6-slider', { opacity: 0, x: -50, duration: 0.8 })
  .from('.property-header', { opacity: 0, y: 30, duration: 0.5 }, '-=0.4')
  .from('.ps-v4-hero-tab .nav-link', { 
    opacity: 0, 
    y: -15, 
    stagger: 0.08, 
    duration: 0.3 
  }, '-=0.2')
  .from('.mySwiper .swiper-slide', { 
    opacity: 0, 
    y: 15, 
    stagger: 0.06, 
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

*Homez - Modern Designed Real Estate React NextJS Template*
*Documentation Version: 1.0*
*Last Updated: 2024*
