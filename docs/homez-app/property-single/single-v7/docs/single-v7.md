# Single V7 - Property Detail Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/single-v7/1
- **Page Title:** Property Single V7 || Homez - Real Estate NextJS Template
- **Template Type:** Property Single Page
- **Layout Style:** Horizontal Gallery with Full-Width Header

---

## 2. Page Overview

### Layout Type
Single V7 presents a property detail page with a horizontal gallery layout. This variant features a full-width header image section at the top, followed by property details in a traditional two-column layout. The design emphasizes the hero image while maintaining easy access to all property information.

### Purpose
- Create a striking first impression with full-width hero imagery
- Display comprehensive property information in an organized manner
- Provide interactive gallery and map functionality
- Enable user engagement through inquiry forms and scheduling
- Present agent contact information prominently
- Showcase similar properties for increased engagement

### Page Structure Overview
```
+------------------------------------------------------------+
| HEADER - Navigation with Logo, Menu, Login/Register       |
+------------------------------------------------------------+
| HERO SECTION - Full-Width Property Image                   |
| - Large hero image as background                           |
| - Property title overlay                                    |
| - Quick stats overlay                                       |
| - Price badge                                               |
+------------------------------------------------------------+
| PROPERTY QUICK INFO STRIP                                   |
| - Title, Location, Status, Time, Views                     |
| - Beds, Baths, Sqft summary                                |
| - Action Buttons: Like, Share, Print                       |
| - Price display                                             |
+------------------------------------------------------------+
| MAIN CONTENT AREA                                           |
| +------------------------+ +-----------------------------+ |
| | GALLERY SECTION        | | SIDEBAR                     | |
| | - Horizontal Gallery   | | - Agent Info                | |
| | - Tab Navigation       | | - Inquiry Form              | |
| | - Image/Map/StreetView | | - Schedule Tour             | |
| |                        | | - Property Quick Details    | |
| +------------------------+ +-----------------------------+ |
+------------------------------------------------------------+
| PROPERTY DETAILS SECTION                                   |
| - Full Description                                          |
| - Property Specifications                                   |
| - Features/Amenities                                        |
+------------------------------------------------------------+
| FLOOR PLANS SECTION                                         |
| - Accordion with floor details                             |
| - Floor plan images                                         |
+------------------------------------------------------------+
| LOCATION SECTION                                            |
| - Interactive Map                                           |
| - Nearby Places                                             |
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
| **Layout Type** | Hero Header + Two-column Content |
| **Hero Section** | Full-width, fixed height |
| **Main Content Width** | 8 columns (col-lg-8) |
| **Sidebar Width** | 4 columns (col-lg-4) |
| **Gallery Type** | Horizontal Slider |
| **Container Width** | Container with max-width |

### Hero Section Configuration
| Setting | Value |
|---------|-------|
| **Height** | 500px-600px |
| **Background** | Property hero image |
| **Overlay** | Gradient overlay (bottom) |
| **Content Position** | Bottom-left |

### CSS Configuration
```css
/* Hero Section */
.hero-property-section {
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
}

.hero-property-section::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
}

/* Hero Content */
.hero-content {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 40px;
}

.hero-title {
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
}

.hero-price {
  position: absolute;
  top: 40px;
  right: 40px;
  background: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
}
```

---

## 4. Data Content Structure

### 4.1 Hero Section Data

| Field | Type | Example Value |
|-------|------|---------------|
| **Hero Image** | URL | `/images/listings/hero-property-7.jpg` |
| **Title** | String | "Equestrian Family Home" |
| **Location** | String | "New York City, CA, USA" |
| **Status** | String | "For Sale" |
| **Price** | Number | $14,000 |
| **Beds** | Number | 1 |
| **Baths** | Number | 2 |
| **Sqft** | Number | 1200 |

### Hero Data Model
```typescript
interface HeroSection {
  heroImage: {
    url: string;
    alt: string;
    blurPlaceholder?: string;
  };
  title: string;
  location: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  price: number;
  priceUnit: 'total' | 'mo';
  quickStats: {
    beds: number;
    baths: number;
    sqft: number;
  };
}
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

### 4.3 Gallery Data Structure

| Field | Type | Description |
|-------|------|-------------|
| **Main Images** | Array[URL] | Full-size gallery images |
| **Thumbnails** | Array[URL] | Thumbnail versions |
| **Videos** | Array (optional) | Property video links |
| **Virtual Tour** | URL (optional) | 360° tour link |

### Gallery Images (Example Paths)
```
/images/listings/listing-single-7-1.jpg
/images/listings/listing-single-7-2.jpg
/images/listings/listing-single-7-3.jpg
/images/listings/listing-single-7-4.jpg
```

### 4.4 Gallery Tabs

| Tab | Icon | Content |
|-----|------|---------|
| **Images** | flaticon-images | Photo gallery |
| **Map** | flaticon-map | Google Maps |
| **Street View** | flaticon-maps-1 | Street panorama |

### 4.5 Agent Information Data

| Field | Type | Example |
|-------|------|---------|
| **Name** | String | "Ali Tufan" |
| **Role** | String | "General Manager" |
| **Photo** | URL | Agent avatar URL |
| **Phone** | String | "+(0) 123 050 945 02" |
| **Email** | String | "ali@homez.com" |
| **Listings** | Number | 25 |
| **Rating** | Number | 4.5 |
| **Reviews** | Number | 128 |

### Agent Data Model
```typescript
interface AgentInfo {
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

### Inquiry Form Model
```typescript
interface InquiryFormData {
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
| **Time** | Select | Yes | Time slots |
| **Name** | Text | Yes | User name |
| **Phone** | Tel | Yes | Phone |
| **Email** | Email | Yes | Email |
| **Message** | Textarea | No | Notes |

### Schedule Tour Model
```typescript
interface ScheduleTourData {
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
| **Property ID** | String | "RL-2024-007" |
| **Property Type** | String | "House" |
| **Status** | String | "For Sale" |
| **Year Built** | Number | 2020 |
| **Lot Size** | Number | 5000 sqft |
| **Garage** | Number | 2 cars |
| **Pool** | Boolean | Yes |
| **Stories** | Number | 2 |

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
  architecturalStyle: string;
}
```

### 4.9 Features/Amenities Data

| Category | Features |
|----------|----------|
| **Interior** | Air Conditioning, Central Heating, Washer/Dryer, Dishwasher, Microwave, Refrigerator, Walk-in Closets, High Ceilings |
| **Exterior** | Private Pool, Landscaped Garden, BBQ Area, Outdoor Shower, Patio/Deck, Sprinkler System |
| **Security** | Alarm System, 24/7 Security, Video Surveillance, Gated Community, Smart Locks |
| **Community** | Swimming Pool, Fitness Center, Tennis Court, Clubhouse, Playground, Walking Trails |

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

### 4.10 Floor Plans Data

| Floor | Name | Size | Rooms | Image |
|-------|------|------|-------|-------|
| Ground Floor | Main Living Area | 800 sqft | Living, Kitchen, Dining, Half Bath | floor-plan-7-1.jpg |
| First Floor | Bedroom Suite | 400 sqft | 1 Master Bed, 1 Bath, Walk-in Closet | floor-plan-7-2.jpg |

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
    size?: number;
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
| Gym | Fitness First | 0.3 mi |
| Grocery | Whole Foods | 0.5 mi |

### Nearby Places Model
```typescript
interface NearbyPlace {
  id: string;
  name: string;
  type: 'school' | 'hospital' | 'shopping' | 'restaurant' | 'park' | 'transit' | 'gym' | 'grocery';
  distance: number;
  distanceUnit: 'mi' | 'km';
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating?: number;
  reviewCount?: number;
}
```

### 4.12 Similar Properties Data

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
  agent?: {
    name: string;
    avatar: string;
  };
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
│   ├── Home Dropdown
│   ├── Listing Megamenu
│   │   ├── Grid View Column
│   │   ├── Map Style Column
│   │   └── List View Column
│   ├── Property Dropdown
│   │   ├── Agents Section
│   │   ├── Single Styles (V1-V10)
│   │   └── Dashboard Section
│   ├── Blog Dropdown
│   └── Pages Dropdown
├── User Actions
│   ├── Login/Register Button
│   ├── Add Property Button
│   └── Hamburger Menu
```

### 5.2 Hero Section
```
HeroSection/
├── Background Image
│   └── Property Hero Image
├── Gradient Overlay
├── Content Container
│   ├── Property Title (h1)
│   ├── Location Badge
│   ├── Status Badge
│   └── Quick Stats Row
│       ├── Beds Count
│       ├── Baths Count
│       └── Sqft Count
└── Price Badge (floating)
    ├── Price Value
    └── Price Unit
```

### 5.3 Property Quick Info Strip
```
QuickInfoStrip/
├── Left Section
│   ├── Title
│   ├── Meta Information
│   │   ├── Location
│   │   ├── Status Badge
│   │   ├── Time Posted
│   │   └── Views Count
│   └── Property Specs
│       ├── Beds Icon + Count
│       ├── Baths Icon + Count
│       └── Sqft Icon + Count
└── Right Section
    ├── Action Buttons
    │   ├── Favorite Button
    │   ├── Share Button
    │   ├── Print Button
    │   └── New Tab Button
    └── Price Display
        ├── Main Price
        └── Price per Sqft
```

### 5.4 Gallery Section
```
GallerySection/
├── Tab Navigation
│   ├── Images Tab Button (active)
│   ├── Map Tab Button
│   └── Street View Tab Button
├── Tab Content
│   ├── Images Panel
│   │   ├── Horizontal Slider
│   │   │   └── Image Slides
│   │   ├── Navigation Arrows
│   │   └── Pagination Dots
│   ├── Map Panel
│   │   └── Google Maps Embed
│   └── Street View Panel
│       └── Street View Panorama
└── Gallery Lightbox (on click)
    ├── Full-size Image
    ├── Navigation Arrows
    └── Close Button
```

### 5.5 Sidebar Component
```
Sidebar/
├── Agent Card Widget
│   ├── Agent Avatar
│   ├── Agent Name
│   ├── Agent Role
│   ├── Contact Buttons
│   │   ├── Phone Link
│   │   └── Email Link
│   └── View Listings Button
├── Inquiry Form Widget
│   ├── Form Title
│   ├── Name Input
│   ├── Phone Input
│   ├── Email Input
│   ├── Message Textarea
│   └── Submit Button
├── Schedule Tour Widget
│   ├── Widget Title
│   ├── Tour Type Selection
│   ├── Date Picker
│   ├── Time Selector
│   ├── Contact Inputs
│   └── Submit Button
└── Quick Details Widget
    ├── Property ID
    ├── Property Type
    ├── Year Built
    ├── Lot Size
    └── More Details Link
```

### 5.6 Property Details Section
```
PropertyDetails/
├── Section Header
│   └── h4: "Property Details"
├── Description Block
│   └── Full Property Description
├── Specifications Grid
│   ├── Property ID
│   ├── Property Type
│   ├── Status
│   ├── Year Built
│   ├── Price
│   ├── Lot Size
│   ├── Garage
│   ├── Pool
│   ├── Stories
│   ├── Heating
│   └── Cooling
└── Features Section
    ├── Interior Features List
    ├── Exterior Features List
    ├── Security Features List
    └── Community Features List
```

### 5.7 Floor Plans Section
```
FloorPlans/
├── Section Header
│   └── h4: "Floor Plans"
├── Floor Plan Accordion
│   ├── Floor Card
│   │   ├── Floor Name
│   │   ├── Size Badge
│   │   ├── Rooms Summary
│   │   ├── Expand Button
│   │   └── Expanded Content
│   │       ├── Floor Plan Image
│   │       └── Room Details
│   └── Additional Floors...
└── Total Area Summary
```

### 5.8 Location Section
```
LocationSection/
├── Section Header
│   └── h4: "Location"
├── Address Display
│   └── Full Address
├── Google Maps Container
│   ├── Map Embed
│   ├── Property Marker
│   └── Zoom Controls
└── Nearby Places List
    ├── Category Headers
    └── Place Items
        ├── Place Icon
        ├── Place Name
        └── Distance
```

### 5.9 Similar Properties Section
```
SimilarProperties/
├── Section Header
│   ├── h4: "Similar Properties"
│   └── View All Link
├── Property Cards Grid
│   ├── Property Card 1
│   │   ├── Image Container
│   │   │   ├── Status Badge
│   │   │   └── Featured Badge
│   │   ├── Price Tag
│   │   ├── Property Title
│   │   ├── Location
│   │   ├── Specs Row
│   │   └── Action Buttons
│   └── Property Cards 2-N...
└── Carousel Navigation (optional)
    ├── Prev Button
    └── Next Button
```

### 5.10 Footer Component
```
Footer/
├── Main Footer
│   ├── Column 1: Contact Info
│   │   ├── Phone Number
│   │   ├── Email Address
│   │   └── Address
│   ├── Column 2: App Downloads
│   │   ├── Apple Store Badge
│   │   └── Google Play Badge
│   ├── Column 3: Social Links
│   │   ├── Facebook
│   │   ├── Twitter
│   │   ├── Instagram
│   │   └── LinkedIn
│   ├── Column 4: Newsletter
│   │   ├── Input Field
│   │   └── Subscribe Button
│   ├── Column 5: Quick Links
│   └── Column 6: Discover Links
└── Bottom Footer
    ├── Copyright Text
    ├── Privacy Link
    ├── Terms Link
    └── Sitemap Link
```

---

## 6. Interactive Elements

### 6.1 Hero Section Interactions

| Element | Action | Behavior |
|---------|--------|----------|
| **Hero Image** | Parallax scroll | Subtle movement on scroll |
| **Price Badge** | Sticky scroll | Follows on scroll (optional) |
| **Quick Stats** | Click | Navigate to details section |

### 6.2 Gallery Interactions

| Action | Behavior |
|--------|----------|
| **Click Image** | Open lightbox |
| **Swipe Left/Right** | Navigate images |
| **Click Navigation Arrow** | Next/Previous image |
| **Press Escape** | Close lightbox |
| **Click Thumbnail** | Jump to specific image |

### 6.3 Map Interactions

| Action | Behavior |
|--------|----------|
| **Zoom In/Out** | Adjust map zoom |
| **Pan** | Move map view |
| **Click Marker** | Show info popup |
| **Click Nearby Place** | Navigate on map |

### 6.4 Form Interactions

#### Inquiry Form
| Field | Validation | Error Message |
|-------|------------|---------------|
| **Name** | Required, min 2 chars | "Please enter your name" |
| **Phone** | Required, phone format | "Please enter a valid phone" |
| **Email** | Required, email format | "Please enter a valid email" |
| **Message** | Required, min 10 chars | "Message must be at least 10 characters" |

#### Schedule Tour Form
| Field | Validation | Behavior |
|-------|------------|----------|
| **Tour Type** | Required | Radio selection |
| **Date** | Required, future date | Date picker, past disabled |
| **Time** | Required | Dropdown with slots |
| **Name** | Required | Text input |
| **Phone** | Required, phone format | Format validation |
| **Email** | Required, email format | Email validation |

### 6.5 Action Buttons

| Button | Icon | Behavior | Requirements |
|--------|------|----------|--------------|
| **Favorite** | Heart | Toggle saved | Login required |
| **Share** | Share | Open share modal | - |
| **Print** | Print | Print dialog | - |
| **New Tab** | External | Open in new tab | - |

### 6.6 Floor Plans Accordion

| Action | Behavior |
|--------|----------|
| **Click Header** | Expand/Collapse |
| **Click Image** | Open full-size view |
| **Download Button** | Download PDF |

---

## 7. Responsive Behavior

### Breakpoint Configuration

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| **Desktop XL** | > 1400px | Full hero, 2-column content |
| **Desktop** | 1200-1399px | Standard layout |
| **Tablet** | 992-1199px | Stacked layout |
| **Mobile Large** | 768-991px | Single column |
| **Mobile** | < 768px | Compact, hero scaled |

### Layout Transformations

```css
/* Desktop (1200px+) */
.hero-property-section {
  height: 500px;
}

.content-wrapper {
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
  .hero-property-section {
    height: 400px;
  }
  
  .col-lg-8,
  .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* Mobile (768px-) */
@media (max-width: 767px) {
  .hero-property-section {
    height: 300px;
  }
  
  .hero-title {
    font-size: 24px;
  }
  
  .hero-price {
    position: static;
    margin-top: 20px;
    display: inline-block;
  }
  
  .quick-info-strip {
    flex-direction: column;
  }
}
```

### Hero Responsive Behavior

| Breakpoint | Hero Height | Title Size | Price Position |
|------------|-------------|------------|----------------|
| Desktop XL | 500px | 36px | Top-right |
| Desktop | 500px | 32px | Top-right |
| Tablet | 400px | 28px | Below title |
| Mobile | 300px | 24px | Below title |

---

## 8. Component Props and Data Flow

### Property Page Props

```typescript
interface PropertyPageProps {
  params: {
    id: string;
  };
}

interface PropertyDataV7 {
  hero: HeroSection;
  header: PropertyHeader;
  gallery: PropertyGallery;
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

### Gallery Component Props

```typescript
interface GalleryPropsV7 {
  images: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
  videos?: Video[];
  virtualTour?: VirtualTour;
  showLightbox: boolean;
  enableNavigation: boolean;
  onImageClick: (index: number) => void;
}
```

### Sidebar Component Props

```typescript
interface SidebarPropsV7 {
  agent: Agent;
  propertyId: string;
  propertyDetails: {
    id: string;
    type: string;
    yearBuilt: number;
    lotSize: number;
  };
  onInquirySubmit: (data: InquiryFormData) => Promise<void>;
  onScheduleSubmit: (data: ScheduleTourData) => Promise<void>;
}
```

---

## 9. State Management

### Page State Structure

```typescript
interface PropertyPageStateV7 {
  property: PropertyDataV7 | null;
  loading: boolean;
  error: string | null;
  
  // Hero State
  heroLoaded: boolean;
  heroParallax: number;
  
  // Gallery State
  activeGalleryTab: 'images' | 'map' | 'street-view';
  currentImageIndex: number;
  lightboxOpen: boolean;
  expandedFloorPlans: string[];
  
  // Form State
  inquiryForm: FormState<InquiryFormData>;
  scheduleForm: FormState<ScheduleTourData>;
  
  // User Actions State
  isFavorited: boolean;
  isCompared: boolean;
}

interface FormState<T> {
  data: T;
  submitting: boolean;
  success: boolean;
  error: string | null;
  touched: Record<string, boolean>;
  errors: Record<string, string>;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Get Property Details
GET /api/properties/:id
Response: {
  data: PropertyDataV7;
  meta: {
    views: number;
    favorites: number;
    inquiries: number;
  };
}

// Submit Inquiry
POST /api/inquiries
Body: InquiryFormData
Response: {
  success: boolean;
  message: string;
  inquiryId: string;
}

// Schedule Tour
POST /api/tours
Body: ScheduleTourData
Response: {
  success: boolean;
  message: string;
  tourId: string;
  confirmation: {
    date: string;
    time: string;
    agentName: string;
  };
}

// Toggle Favorite
POST /api/favorites/toggle
Body: { propertyId: string }
Response: {
  success: boolean;
  isFavorited: boolean;
  favoritesCount: number;
}

// Get Similar Properties
GET /api/properties/:id/similar
Query: { limit?: number }
Response: {
  data: SimilarProperty[];
  meta: {
    total: number;
    page: number;
  };
}
```

---

## 11. Accessibility Considerations

### ARIA Labels

```html
<!-- Hero Section -->
<section role="banner" aria-label="Property hero image">
  <h1>Equestrian Family Home</h1>
  <p aria-label="Property location">New York City, CA, USA</p>
</section>

<!-- Gallery -->
<div role="region" aria-label="Property gallery">
  <div role="tablist" aria-label="Gallery views">
    <button role="tab" aria-selected="true" aria-controls="images-panel">Images</button>
    <button role="tab" aria-selected="false" aria-controls="map-panel">Map</button>
    <button role="tab" aria-selected="false" aria-controls="street-view-panel">Street View</button>
  </div>
</div>

<!-- Lightbox -->
<div role="dialog" aria-modal="true" aria-label="Image gallery">
  <button aria-label="Previous image">Previous</button>
  <img alt="Property image 1 of 4" />
  <button aria-label="Next image">Next</button>
  <button aria-label="Close gallery">Close</button>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Navigate through elements |
| **Enter/Space** | Activate buttons, expand accordion |
| **Arrow Left/Right** | Navigate gallery images |
| **Arrow Up/Down** | Navigate accordion items |
| **Escape** | Close lightbox, close modals |
| **Home/End** | First/last gallery image |

---

## 12. Performance Optimizations

### Image Optimization

```typescript
const imageConfig = {
  heroImage: {
    sizes: [1920, 1600, 1366, 1024, 768, 640],
    formats: ['webp', 'jpg'],
    loading: 'eager',
    priority: true,
    fetchPriority: 'high',
  },
  galleryImages: {
    sizes: [1200, 992, 768, 576],
    formats: ['webp', 'jpg'],
    loading: 'lazy',
    priority: false,
  },
  thumbnails: {
    sizes: [256, 128, 96],
    formats: ['webp', 'jpg'],
    loading: 'lazy',
  },
};
```

### Lazy Loading Strategy

| Component | Loading Strategy |
|-----------|------------------|
| Hero Image | Eager, high priority |
| Gallery Images | Lazy, on scroll |
| Map | Lazy, on tab click |
| Floor Plans | Lazy, on expand |
| Similar Properties | Lazy, intersection observer |
| Footer | Lazy |

### Caching Strategy

```typescript
const cacheConfig = {
  propertyDetails: {
    ttl: 300,
    staleWhileRevalidate: 3600,
  },
  similarProperties: {
    ttl: 600,
    staleWhileRevalidate: 1800,
  },
  nearbyPlaces: {
    ttl: 86400,
    staleWhileRevalidate: 604800,
  },
};
```

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Equestrian Family Home - New York City | Homez Real Estate</title>
<meta name="description" content="1 bed, 2 bath property for sale at $14,000 in New York City, CA. View photos, floor plans, and schedule a tour today." />
<meta name="keywords" content="property for sale, New York City real estate, family home, 1 bedroom house" />

<!-- Open Graph -->
<meta property="og:title" content="Equestrian Family Home - New York City" />
<meta property="og:description" content="Beautiful family home for sale in New York City." />
<meta property="og:image" content="https://homez-appdir.vercel.app/images/listings/hero-property-7.jpg" />
<meta property="og:url" content="https://homez-appdir.vercel.app/single-v7/1" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Equestrian Family Home" />
<meta name="twitter:description" content="1 bed, 2 bath property for sale" />
<meta name="twitter:image" content="https://homez-appdir.vercel.app/images/listings/hero-property-7.jpg" />

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "description": "Beautiful family home for sale",
  "image": "https://homez-appdir.vercel.app/images/listings/hero-property-7.jpg",
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
  }
}
</script>
```

---

## 14. Unique Features (V7 Specific)

### Hero Section
- **Full-Width Hero Image**: Creates a striking first impression
- **Overlay Gradient**: Enhances text readability
- **Floating Price Badge**: Highlights pricing prominently
- **Quick Stats Overlay**: Shows key property stats at a glance

### Layout Advantages
- **Visual Impact**: Hero image creates emotional connection
- **Quick Assessment**: Key info visible without scrolling
- **Mobile Optimized**: Hero scales gracefully on mobile

---

## 15. Related Pages

- [Single V6](./single-v6.md) - Vertical slider variant
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

### V7-Specific Animations (Hero Header)

```javascript
// Hero parallax effect
const heroParallax = {
  translateY: {
    target: '.hero-property-section',
    speed: 0.5
  }
};

// Hero entrance animation
const heroEntrance = {
  elements: {
    title: { animation: 'fade-up', delay: 0, duration: 800 },
    price: { animation: 'fade-up', delay: 200, duration: 600 },
    stats: { animation: 'fade-up', delay: 400, duration: 600 }
  }
};
```

### Hero Section Animations

```css
/* Hero gradient overlay animation */
.hero-property-section::before {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  transition: opacity 0.5s ease;
}

/* Hero content entrance */
.hero-content {
  animation: slideUpFade 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Price badge float animation */
.hero-price {
  animation: floatIn 0.6s ease forwards;
  animation-delay: 0.5s;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Quick Info Strip Animation

```css
.quick-info-strip {
  animation: slideDown 0.5s ease forwards;
  animation-delay: 0.8s;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  --hero-height: 500px;
  --hero-gradient-start: transparent;
  --hero-gradient-end: rgba(0, 0, 0, 0.7);
  --border-radius: 12px;
}

/* Hero section */
.hero-property-section {
  position: relative;
  height: var(--hero-height);
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 10;
}

.hero-price {
  position: absolute;
  top: 40px;
  right: 40px;
  background: var(--color-primary);
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
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

### Page Load Animations (V7 Hero Header)

```javascript
// components/PropertySingleV7.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV7 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V7-specific: Hero section entrance
      gsap.from('.hero-property-section', {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power3.out'
      });

      // Hero content
      gsap.from('.hero-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
      });

      // V7-specific: Price badge
      gsap.from('.hero-price', {
        opacity: 0,
        scale: 0.8,
        y: -20,
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(1.7)'
      });

      // Quick info strip
      gsap.from('.quick-info-strip', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.7,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Hero Section Animation (V7 Unique)

```javascript
// Hero background parallax
gsap.to('.hero-property-section', {
  scrollTrigger: {
    trigger: '.hero-property-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  backgroundPositionY: '50%',
  ease: 'none'
});

// Hero gradient overlay
gsap.from('.hero-property-section::before', {
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// Hero title
gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  delay: 0.3,
  ease: 'power3.out'
});

// Hero meta
gsap.from('.hero-meta', {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6,
  delay: 0.5,
  ease: 'power2.out'
});

// Price badge floating
gsap.from('.hero-price', {
  opacity: 0,
  scale: 0,
  rotation: -10,
  duration: 0.6,
  delay: 0.6,
  ease: 'back.out(1.7)'
});
```

### Quick Info Strip Animation

```javascript
// Quick info strip entrance
gsap.from('.quick-info-strip', {
  scrollTrigger: {
    trigger: '.hero-property-section',
    start: 'bottom 80%'
  },
  opacity: 0,
  y: -30,
  duration: 0.6,
  ease: 'power2.out'
});

// Action buttons
gsap.from('.action-buttons button', {
  opacity: 0,
  scale: 0.9,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.8,
  ease: 'back.out(1.2)'
});
```

### Horizontal Gallery Animation

```javascript
// Gallery section
gsap.from('.gallery-section', {
  scrollTrigger: {
    trigger: '.gallery-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.7,
  ease: 'power3.out'
});

// Gallery tabs
gsap.from('.gallery-tab', {
  opacity: 0,
  y: -15,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});

// Gallery images
gsap.from('.gallery-image', {
  scrollTrigger: {
    trigger: '.gallery-section',
    start: 'top 80%'
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.5,
  ease: 'power2.out'
});
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

// Features grid
gsap.from('.features-category', {
  scrollTrigger: {
    trigger: '.features-section',
    start: 'top 80%'
  },
  opacity: 0,
  x: -30,
  stagger: 0.15,
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
// Hero price badge hover
const heroPrice = document.querySelector('.hero-price');
heroPrice.addEventListener('mouseenter', () => {
  gsap.to(heroPrice, {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(235, 103, 83, 0.3)',
    duration: 0.3
  });
});
heroPrice.addEventListener('mouseleave', () => {
  gsap.to(heroPrice, {
    scale: 1,
    boxShadow: 'none',
    duration: 0.3
  });
});

// Quick info action buttons
const setupActionButtonHovers = () => {
  const buttons = document.querySelectorAll('.action-buttons button');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.1,
        backgroundColor: 'rgba(235, 103, 83, 0.1)',
        duration: 0.2
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.2
      });
    });
  });
};
```

### Timeline Animation

```javascript
// V7 hero timeline
const v7Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v7Timeline
  .from('.hero-property-section', { opacity: 0, scale: 1.1, duration: 1 })
  .from('.hero-title', { opacity: 0, y: 50, duration: 0.6 }, '-=0.5')
  .from('.hero-meta > *', { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 }, '-=0.3')
  .from('.hero-price', { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
  .from('.quick-info-strip', { opacity: 0, y: -20, duration: 0.5 }, '-=0.2');
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
