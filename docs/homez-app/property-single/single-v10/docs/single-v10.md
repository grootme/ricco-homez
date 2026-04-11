# Single V10 - Property Detail Page

## 1. URL and Page Title

- **URL:** https://homez-appdir.vercel.app/single-v10/1
- **Page Title:** Property Single V10 || Homez - Real Estate NextJS Template
- **Template Type:** Property Single Page
- **Layout Style:** Modern Card-Based Layout with Hero Banner

---

## 2. Page Overview

### Layout Type
Single V10 presents a property detail page with a modern card-based design featuring a prominent hero banner. This variant uses a contemporary aesthetic with clean lines, generous white space, and card-based content sections. The design emphasizes readability and visual hierarchy with a premium, modern feel.

### Purpose
- Create a premium, modern property presentation
- Display property information in organized card sections
- Provide immersive hero image experience
- Enable user engagement through modern forms
- Present agent contact in elegant design
- Showcase similar properties in refined grid

### Page Structure Overview
```
+------------------------------------------------------------+
| HEADER - Navigation with Logo, Menu, Login/Register       |
+------------------------------------------------------------+
| HERO BANNER SECTION                                        |
| - Full-width hero image                                    |
| - Gradient overlay                                          |
| - Property title overlay                                    |
| - Quick stats badges                                        |
| - Price tag                                                 |
+------------------------------------------------------------+
| PROPERTY QUICK INFO BAR                                    |
| - Title, Location, Status                                  |
| - Beds, Baths, Sqft                                        |
| - Action Buttons                                           |
+------------------------------------------------------------+
| CONTENT GRID                                               |
| +------------------------+ +-----------------------------+ |
| | MAIN CONTENT CARDS     | | SIDEBAR CARDS               | |
| |                        | |                             | |
| | [Gallery Card]         | | [Agent Card]                | |
| | - Image slider         | | - Agent info                | |
| | - Lightbox             | | - Contact form              | |
| |                        | |                             | |
| | [Overview Card]        | | [Inquiry Card]              | |
| | - Description          | | - Contact fields            | |
| | - Quick specs          | | - Send button               | |
| |                        | |                             | |
| | [Details Card]         | | [Schedule Card]             | |
| | - Specifications       | | - Tour options              | |
| | - Property info        | | - Date/time picker          | |
| |                        | |                             | |
| | [Features Card]        | | [Mortgage Card]             | |
| | - Amenities list       | | - Calculator                | |
| |                        | |                             | |
| | [Floor Plans Card]     | | [Details Card]              | |
| | - Accordion            | | - Quick info                | |
| |                        | |                             | |
| | [Location Card]        | |                             | |
| | - Map                  | |                             | |
| | - Nearby               | |                             | |
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
| **Layout Type** | Card-Based with Hero Banner |
| **Hero Banner** | Full-width, fixed height |
| **Content Grid** | CSS Grid |
| **Main Column** | 8 columns (col-lg-8) |
| **Sidebar** | 4 columns (col-lg-4) |
| **Card Style** | Rounded corners, shadow |

### Hero Banner Configuration
| Setting | Value |
|---------|-------|
| **Height** | 400px-500px |
| **Background** | Cover image |
| **Overlay** | Gradient overlay |
| **Content Position** | Bottom-left |

### Card Design System
| Property | Value |
|----------|-------|
| **Border Radius** | 12px (bdrs12) |
| **Shadow** | 0 4px 20px rgba(0,0,0,0.08) |
| **Padding** | 30px (p30) |
| **Background** | White |
| **Margin Bottom** | 30px (mb30) |

### CSS Configuration
```css
/* Hero Banner */
.hero-banner-v10 {
  position: relative;
  height: 450px;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}

.hero-banner-v10::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.6) 100%
  );
}

.hero-content-v10 {
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 10;
}

/* Card System */
.property-card-v10 {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.property-card-v10:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.property-card-v10 .card-header {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

/* Responsive Grid */
@media (max-width: 991px) {
  .content-grid-v10 {
    grid-template-columns: 1fr;
  }
  
  .hero-banner-v10 {
    height: 350px;
  }
  
  .hero-content-v10 {
    padding: 20px;
  }
}
```

---

## 4. Data Content Structure

### 4.1 Hero Banner Data

| Field | Type | Example |
|-------|------|---------|
| **Hero Image** | URL | `/images/listings/listing-single-10.jpg` |
| **Title** | String | "Equestrian Family Home" |
| **Location** | String | "New York City, CA, USA" |
| **Status** | String | "For Sale" |
| **Price** | Number | $14,000 |
| **Beds** | Number | 1 |
| **Baths** | Number | 2 |
| **Sqft** | Number | 1200 |

### Hero Banner Model
```typescript
interface HeroBannerV10 {
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

### 4.3 Gallery Card Data

| Field | Type | Description |
|-------|------|-------------|
| **Images** | Array[URL] | Gallery images |
| **Main Image** | URL | Current display image |
| **Thumbnails** | Array[URL] | Navigation thumbnails |
| **Lightbox** | Boolean | Enable fullscreen |

### Gallery Images
```
/images/listings/listing-single-10-1.jpg
/images/listings/listing-single-10-2.jpg
/images/listings/listing-single-10-3.jpg
/images/listings/listing-single-10-4.jpg
```

### Gallery Model
```typescript
interface GalleryCard {
  images: Array<{
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
  }>;
  enableLightbox: boolean;
  showThumbnails: boolean;
}
```

### 4.4 Overview Card Data

| Field | Type | Example |
|-------|------|---------|
| **Description** | String | Full property description text |
| **Highlights** | Array | Key property highlights |
| **Quick Specs** | Object | Beds, Baths, Sqft summary |

### Overview Model
```typescript
interface OverviewCard {
  description: string;
  highlights: string[];
  quickSpecs: {
    beds: number;
    baths: number;
    sqft: number;
    yearBuilt: number;
    lotSize: number;
  };
}
```

### 4.5 Details Card Data

| Field | Type | Example |
|-------|------|---------|
| **Property ID** | String | "RL-2024-010" |
| **Property Type** | String | "House" |
| **Status** | String | "For Sale" |
| **Year Built** | Number | 2020 |
| **Lot Size** | Number | 5000 sqft |
| **Garage** | Number | 2 cars |
| **Pool** | Boolean | Yes |
| **Stories** | Number | 2 |
| **Heating** | String | "Central" |
| **Cooling** | String | "Central AC" |

### Details Model
```typescript
interface DetailsCard {
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

### 4.6 Features Card Data

| Category | Features |
|----------|----------|
| **Interior** | Air Conditioning, Central Heating, Washer/Dryer, Dishwasher, Walk-in Closets |
| **Exterior** | Private Pool, Landscaped Garden, BBQ Area, Patio/Deck |
| **Security** | Alarm System, 24/7 Security, Video Surveillance |
| **Community** | Swimming Pool, Fitness Center, Tennis Court |

### Features Model
```typescript
interface FeaturesCard {
  categories: Array<{
    name: string;
    icon: string;
    features: Array<{
      name: string;
      available: boolean;
    }>;
  }>;
}
```

### 4.7 Floor Plans Card Data

| Floor | Name | Size | Rooms | Image |
|-------|------|------|-------|-------|
| Ground Floor | Main Living | 800 sqft | Living, Kitchen, Dining | floor-plan-10-1.jpg |
| First Floor | Bedroom Suite | 400 sqft | 1 Bed, 1 Bath | floor-plan-10-2.jpg |

### Floor Plan Model
```typescript
interface FloorPlanCard {
  plans: Array<{
    id: string;
    name: string;
    floor: number;
    size: number;
    sizeUnit: 'sqft' | 'sqm';
    rooms: Array<{
      name: string;
      type: string;
    }>;
    image: string;
  }>;
}
```

### 4.8 Location Card Data

| Place Type | Name | Distance |
|------------|------|----------|
| School | Lincoln Elementary | 0.5 mi |
| Hospital | City Medical Center | 1.2 mi |
| Shopping | Westfield Mall | 0.8 mi |
| Restaurant | Downtown Dining | 0.3 mi |
| Park | Central Park | 0.2 mi |
| Transit | Metro Station | 0.4 mi |

### Location Model
```typescript
interface LocationCard {
  address: string;
  coordinates: { lat: number; lng: number };
  nearbyPlaces: Array<{
    id: string;
    name: string;
    type: string;
    distance: number;
    distanceUnit: 'mi' | 'km';
  }>;
}
```

### 4.9 Agent Card Data

| Field | Type | Example |
|-------|------|---------|
| **Name** | String | "Ali Tufan" |
| **Role** | String | "General Manager" |
| **Photo** | URL | Agent avatar |
| **Phone** | String | "+(0) 123 050 945 02" |
| **Email** | String | "ali@homez.com" |
| **Listings** | Number | 25 |
| **Rating** | Number | 4.5 |

### Agent Model
```typescript
interface AgentCard {
  id: string;
  name: string;
  role: string;
  avatar: string;
  phone: string;
  email: string;
  listingsCount: number;
  rating: number;
  reviewsCount: number;
  verified: boolean;
}
```

### 4.10 Inquiry Card Data

| Field | Type | Required |
|-------|------|----------|
| **Name** | Text | Yes |
| **Phone** | Tel | Yes |
| **Email** | Email | Yes |
| **Message** | Textarea | Yes |

### Inquiry Model
```typescript
interface InquiryCard {
  name: string;
  phone: string;
  email: string;
  message: string;
  propertyId: string;
  agentId: string;
  consent: boolean;
}
```

### 4.11 Schedule Tour Card Data

| Field | Type | Required |
|-------|------|----------|
| **Tour Type** | Radio | Yes |
| **Date** | Date | Yes |
| **Time** | Select | Yes |
| **Name** | Text | Yes |
| **Phone** | Tel | Yes |
| **Email** | Email | Yes |

### Schedule Tour Model
```typescript
interface ScheduleTourCard {
  tourType: 'in-person' | 'video';
  preferredDate: Date;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  propertyId: string;
}
```

### 4.12 Similar Properties Data

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

### 5.2 Hero Banner Component
```
HeroBanner/
├── Background Image
├── Gradient Overlay
├── Content Container
│   ├── Property Title (h1)
│   ├── Location Badge
│   ├── Status Badge
│   ├── Quick Stats Row
│   │   ├── Beds
│   │   ├── Baths
│   │   └── Sqft
│   └── Price Tag
```

### 5.3 Main Content Cards
```
MainContentCards/
├── Gallery Card
│   ├── Card Header
│   ├── Image Slider
│   ├── Thumbnail Strip
│   └── Lightbox Button
├── Overview Card
│   ├── Card Header
│   ├── Description
│   ├── Highlights List
│   └── Quick Specs
├── Details Card
│   ├── Card Header
│   ├── Specifications Grid
│   └── Property Info Table
├── Features Card
│   ├── Card Header
│   └── Feature Categories
│       ├── Interior Features
│       ├── Exterior Features
│       ├── Security Features
│       └── Community Features
├── Floor Plans Card
│   ├── Card Header
│   └── Accordion
│       ├── Floor Item
│       │   ├── Floor Name
│       │   ├── Size
│       │   └── Expand Button
│       └── Floor Image
└── Location Card
    ├── Card Header
    ├── Google Maps
    └── Nearby Places List
```

### 5.4 Sidebar Cards
```
SidebarCards/
├── Agent Card
│   ├── Card Header
│   ├── Agent Avatar
│   ├── Agent Info
│   │   ├── Name
│   │   ├── Role
│   │   ├── Rating
│   │   └── Listings Count
│   └── Contact Buttons
│       ├── Phone
│       └── Email
├── Inquiry Card
│   ├── Card Header
│   ├── Name Input
│   ├── Phone Input
│   ├── Email Input
│   ├── Message Textarea
│   └── Submit Button
├── Schedule Tour Card
│   ├── Card Header
│   ├── Tour Type Selection
│   ├── Date Picker
│   ├── Time Selector
│   ├── Contact Inputs
│   └── Submit Button
├── Mortgage Calculator Card
│   ├── Card Header
│   ├── Home Price
│   ├── Down Payment
│   ├── Interest Rate
│   ├── Loan Term
│   ├── Calculate Button
│   └── Result Display
└── Quick Details Card
    ├── Card Header
    ├── Property ID
    ├── Type
    ├── Year Built
    ├── Lot Size
    └── More Details Link
```

### 5.5 Similar Properties Section
```
SimilarPropertiesSection/
├── Section Header
│   ├── Title
│   └── View All Link
├── Property Cards Grid
│   ├── Property Card
│   │   ├── Image Container
│   │   ├── Badges
│   │   ├── Price Tag
│   │   ├── Title
│   │   ├── Location
│   │   ├── Specs Row
│   │   └── Action Buttons
│   └── More Cards...
└── Carousel Navigation
```

### 5.6 Footer Component
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

### 6.1 Hero Banner Interactions

| Element | Action | Behavior |
|---------|--------|----------|
| **Hero Image** | Parallax | Subtle movement on scroll |
| **Price Tag** | Click | Navigate to details |
| **Quick Stats** | Click | Navigate to specs |

### 6.2 Gallery Card Interactions

| Action | Behavior |
|--------|----------|
| **Click Image** | Open lightbox |
| **Click Thumbnail** | Change main image |
| **Swipe** | Navigate images |
| **Expand Button** | Fullscreen mode |

### 6.3 Card Interactions

| Card | Interaction | Behavior |
|------|-------------|----------|
| **Overview** | Read more | Expand description |
| **Details** | Click row | Highlight value |
| **Features** | Filter | By category |
| **Floor Plans** | Accordion | Expand/collapse |
| **Location** | Map click | Open full map |

### 6.4 Form Interactions

| Form | Validation | Behavior |
|------|------------|----------|
| **Inquiry** | Required fields | Submit to agent |
| **Schedule Tour** | Date/time required | Book tour slot |
| **Mortgage** | Numeric only | Calculate payment |

### 6.5 Action Buttons

| Button | Behavior |
|--------|----------|
| **Favorite** | Toggle saved |
| **Share** | Share modal |
| **Print** | Print dialog |
| **Compare** | Add to compare |

---

## 7. Responsive Behavior

### Breakpoint Configuration

| Breakpoint | Width | Layout |
|------------|-------|--------|
| **Desktop XL** | > 1400px | Full hero, 2 columns |
| **Desktop** | 1200-1399px | Standard layout |
| **Tablet** | 992-1199px | Stacked cards |
| **Mobile** | < 991px | Single column |

### Card Responsive Behavior

```css
/* Desktop (1200px+) */
.content-grid-v10 {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.property-card-v10 {
  padding: 30px;
}

/* Tablet (992-1199px) */
@media (max-width: 1199px) {
  .content-grid-v10 {
    grid-template-columns: 1fr;
  }
  
  .hero-banner-v10 {
    height: 350px;
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .property-card-v10 {
    padding: 20px;
    border-radius: 8px;
  }
  
  .hero-banner-v10 {
    height: 280px;
  }
  
  .hero-content-v10 {
    padding: 15px;
  }
}
```

---

## 8. Component Props and Data Flow

### Page Props

```typescript
interface PropertyPagePropsV10 {
  params: {
    id: string;
  };
}

interface PropertyDataV10 {
  hero: HeroBannerV10;
  header: PropertyHeader;
  gallery: GalleryCard;
  overview: OverviewCard;
  details: DetailsCard;
  features: FeaturesCard;
  floorPlans: FloorPlanCard;
  location: LocationCard;
  agent: AgentCard;
  similarProperties: SimilarProperty[];
}
```

### Card Component Props

```typescript
interface CardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

interface GalleryCardProps extends CardProps {
  images: GalleryImage[];
  enableLightbox: boolean;
  onImageClick: (index: number) => void;
}
```

---

## 9. State Management

### Page State

```typescript
interface PropertyPageStateV10 {
  property: PropertyDataV10 | null;
  loading: boolean;
  error: string | null;
  
  // Card States
  expandedCards: Set<string>;
  activeFloorPlan: string | null;
  
  // Gallery State
  gallery: {
    activeIndex: number;
    lightboxOpen: boolean;
  };
  
  // Form States
  inquiryForm: FormState<InquiryCard>;
  scheduleForm: FormState<ScheduleTourCard>;
  
  // User Actions
  isFavorited: boolean;
  isCompared: boolean;
}
```

---

## 10. API Integration

### Endpoints

```typescript
// Get Property
GET /api/properties/:id
Response: { data: PropertyDataV10 }

// Submit Inquiry
POST /api/inquiries
Body: InquiryCard
Response: { success: boolean; inquiryId: string }

// Schedule Tour
POST /api/tours
Body: ScheduleTourCard
Response: { success: boolean; tourId: string }

// Calculate Mortgage
POST /api/mortgage/calculate
Body: { price: number; downPayment: number; rate: number; term: number }
Response: { monthlyPayment: number; totalInterest: number }

// Toggle Favorite
POST /api/favorites/toggle
Response: { success: boolean; isFavorited: boolean }

// Get Similar Properties
GET /api/properties/:id/similar
Response: { data: SimilarProperty[] }
```

---

## 11. Accessibility Considerations

### ARIA Labels

```html
<!-- Hero Banner -->
<section role="banner" aria-label="Property hero">
  <h1>Equestrian Family Home</h1>
</section>

<!-- Cards -->
<article class="property-card-v10" role="article" aria-label="Property details">
  <h2 class="card-header">Property Details</h2>
  <dl>
    <dt>Property ID</dt>
    <dd>RL-2024-010</dd>
  </dl>
</article>

<!-- Gallery -->
<div role="region" aria-label="Property gallery">
  <button aria-label="View image 1 of 4">View Image</button>
</div>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Navigate cards |
| **Enter** | Activate buttons |
| **Arrow Keys** | Navigate gallery |
| **Space** | Expand accordion |
| **Escape** | Close lightbox |

---

## 12. Performance Optimizations

### Image Loading

```typescript
const imageConfig = {
  heroImage: {
    priority: true,
    loading: 'eager',
    sizes: ['1920w', '1200w', '800w'],
  },
  cardImages: {
    priority: false,
    loading: 'lazy',
    sizes: ['800w', '600w', '400w'],
  },
};
```

### Card Loading Strategy

| Card | Priority | Loading |
|------|----------|---------|
| Hero | High | Eager |
| Gallery | High | Eager |
| Overview | Medium | Lazy |
| Details | Medium | Lazy |
| Features | Low | Lazy |
| Floor Plans | Low | Lazy |

---

## 13. SEO Considerations

### Meta Tags

```html
<title>Equestrian Family Home - New York City | Homez</title>
<meta property="og:image" content="https://homez-appdir.vercel.app/images/listings/listing-single-10.jpg" />
```

### Structured Data

```json
{
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "image": "https://homez-appdir.vercel.app/images/listings/listing-single-10.jpg",
  "offers": {
    "@type": "Offer",
    "price": "14000"
  }
}
```

---

## 14. Unique Features (V10 Specific)

### Card-Based Design
- **Modular Layout**: Each section in its own card
- **Visual Hierarchy**: Clear separation of content
- **Modern Aesthetic**: Clean, premium feel
- **Easy Scanning**: Organized information display

### Hero Banner
- **Full-Width Impact**: Striking first impression
- **Gradient Overlay**: Enhanced text readability
- **Quick Stats**: Key info at a glance
- **Price Tag**: Prominent pricing display

### Layout Advantages
- **Organized Content**: Information grouped logically
- **Easy Navigation**: Scan through cards quickly
- **Premium Feel**: Modern, sophisticated design
- **Flexible**: Cards can be reordered or hidden

---

## 15. Related Pages

- [Single V6](./single-v6.md) - Vertical slider variant
- [Single V7](./single-v7.md) - Hero header variant
- [Single V8](./single-v8.md) - Masonry gallery variant
- [Single V9](./single-v9.md) - Split screen variant
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

### V10-Specific Animations (Card-Based Layout)

```javascript
// Hero banner animation config
const heroBannerConfig = {
  animation: 'fade-up',
  duration: 1000,
  once: true
};

// Card stagger animation
const cardAnimationConfig = {
  animation: 'fade-up',
  stagger: 150, // ms between cards
  duration: 800
};
```

### Hero Banner Animation

```css
/* Hero content entrance */
.hero-content-v10 {
  animation: heroContentFade 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes heroContentFade {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero gradient overlay */
.hero-banner-v10::before {
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  animation: gradientFade 0.8s ease;
}

@keyframes gradientFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Card Animations

```css
/* Card entrance animation */
.property-card-v10 {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.property-card-v10.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Card hover effect */
.property-card-v10 {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.property-card-v10:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Staggered card animation */
.property-card-v10:nth-child(1) { transition-delay: 0ms; }
.property-card-v10:nth-child(2) { transition-delay: 150ms; }
.property-card-v10:nth-child(3) { transition-delay: 300ms; }
.property-card-v10:nth-child(4) { transition-delay: 450ms; }
```

### Card Header Animation

```css
.property-card-v10 .card-header {
  transition: border-color 0.3s ease;
}

.property-card-v10:hover .card-header {
  border-color: #eb6753;
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
  --card-border-radius: 12px;
  --card-padding: 30px;
  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
  --hero-height: 450px;
}

/* Hero banner */
.hero-banner-v10 {
  position: relative;
  height: var(--hero-height);
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}

/* Card design system */
.property-card-v10 {
  background: white;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  margin-bottom: 30px;
}

.property-card-v10 .card-header {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

/* Responsive grid */
@media (max-width: 991px) {
  .content-grid-v10 {
    grid-template-columns: 1fr;
  }
  
  .hero-banner-v10 {
    height: 350px;
  }
}

@media (max-width: 767px) {
  .property-card-v10 {
    padding: 20px;
    border-radius: 8px;
  }
  
  .hero-banner-v10 {
    height: 280px;
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

### Page Load Animations (V10 Card-Based Layout)

```javascript
// components/PropertySingleV10.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV10 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // V10-specific: Hero banner entrance
      gsap.from('.hero-banner-v10', {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power3.out'
      });

      // Hero content
      gsap.from('.hero-content-v10', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
      });

      // V10-specific: Card-based sections
      gsap.from('.property-card-v10', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.12,
        duration: 0.6,
        delay: 0.5,
        ease: 'back.out(1.2)'
      });

      // Sidebar cards
      gsap.from('.sidebar-card', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### Hero Banner Animation (V10 Unique)

```javascript
// Hero banner parallax
gsap.to('.hero-banner-v10', {
  scrollTrigger: {
    trigger: '.hero-banner-v10',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  backgroundPositionY: '60%',
  ease: 'none'
});

// Hero content entrance
gsap.from('.hero-content-v10', {
  opacity: 0,
  y: 60,
  duration: 0.8,
  delay: 0.3,
  ease: 'power3.out'
});

// Hero title
gsap.from('.hero-title-v10', {
  opacity: 0,
  y: 40,
  duration: 0.6,
  delay: 0.4,
  ease: 'power2.out'
});

// Quick stats badges
gsap.from('.quick-stat-badge', {
  opacity: 0,
  scale: 0,
  stagger: 0.08,
  duration: 0.4,
  delay: 0.6,
  ease: 'back.out(1.7)'
});

// Price tag
gsap.from('.price-tag-v10', {
  opacity: 0,
  scale: 0.8,
  rotation: -5,
  duration: 0.5,
  delay: 0.7,
  ease: 'back.out(1.5)'
});
```

### Card-Based Content Animation (V10 Unique)

```javascript
// Main content cards
gsap.from('.main-content-cards .property-card-v10', {
  scrollTrigger: {
    trigger: '.main-content-cards',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  scale: 0.95,
  stagger: 0.15,
  duration: 0.6,
  ease: 'back.out(1.2)'
});

// Card headers
gsap.from('.property-card-v10 .card-header', {
  opacity: 0,
  x: -20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});

// Gallery card
gsap.from('.gallery-card .gallery-image', {
  scrollTrigger: {
    trigger: '.gallery-card',
    start: 'top 80%'
  },
  opacity: 0,
  scale: 1.05,
  duration: 0.5,
  ease: 'power2.out'
});

// Overview card
gsap.from('.overview-card .overview-item', {
  scrollTrigger: {
    trigger: '.overview-card',
    start: 'top 80%'
  },
  opacity: 0,
  y: 20,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});

// Details card items
gsap.from('.details-card .detail-row', {
  scrollTrigger: {
    trigger: '.details-card',
    start: 'top 80%'
  },
  opacity: 0,
  x: -15,
  stagger: 0.05,
  duration: 0.3,
  ease: 'power2.out'
});
```

### Sidebar Cards Animation

```javascript
// Sidebar cards entrance
gsap.from('.sidebar-cards .sidebar-card', {
  scrollTrigger: {
    trigger: '.sidebar-cards',
    start: 'top 80%'
  },
  opacity: 0,
  x: 50,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out'
});

// Agent card
gsap.from('.agent-card-v10', {
  scrollTrigger: {
    trigger: '.agent-card-v10',
    start: 'top 85%'
  },
  opacity: 0,
  scale: 0.95,
  y: 20,
  duration: 0.5,
  ease: 'back.out(1.2)'
});

// Inquiry form
gsap.from('.inquiry-card .form-field', {
  scrollTrigger: {
    trigger: '.inquiry-card',
    start: 'top 85%'
  },
  opacity: 0,
  y: 15,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});

// Schedule tour card
gsap.from('.schedule-card .tour-option', {
  scrollTrigger: {
    trigger: '.schedule-card',
    start: 'top 85%'
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.1,
  duration: 0.4,
  ease: 'back.out(1.2)'
});

// Mortgage calculator
gsap.from('.mortgage-card .calculator-input', {
  scrollTrigger: {
    trigger: '.mortgage-card',
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
// Card hover effect
const setupCardHovers = () => {
  const cards = document.querySelectorAll('.property-card-v10, .sidebar-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        duration: 0.3
      });
    });
  });
};

// Card header hover
const setupHeaderHovers = () => {
  const headers = document.querySelectorAll('.property-card-v10 .card-header');
  
  headers.forEach(header => {
    header.addEventListener('mouseenter', () => {
      gsap.to(header, {
        borderColor: '#eb6753',
        duration: 0.3
      });
    });
    
    header.addEventListener('mouseleave', () => {
      gsap.to(header, {
        borderColor: '#eee',
        duration: 0.3
      });
    });
  });
};

// Price tag hover
const priceTag = document.querySelector('.price-tag-v10');
priceTag.addEventListener('mouseenter', () => {
  gsap.to(priceTag, {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(235, 103, 83, 0.3)',
    duration: 0.3
  });
});
priceTag.addEventListener('mouseleave', () => {
  gsap.to(priceTag, {
    scale: 1,
    boxShadow: 'none',
    duration: 0.3
  });
});
```

### Timeline Animation

```javascript
// V10 card-based timeline
const v10Timeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

v10Timeline
  .from('.hero-banner-v10', { opacity: 0, scale: 1.1, duration: 1 })
  .from('.hero-content-v10', { opacity: 0, y: 50, duration: 0.6 }, '-=0.5')
  .from('.quick-stat-badge', { opacity: 0, scale: 0, stagger: 0.05, duration: 0.3, ease: 'back.out(1.7)' }, '-=0.3')
  .from('.price-tag-v10', { opacity: 0, scale: 0.8, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.2')
  .from('.property-card-v10', { opacity: 0, y: 40, stagger: 0.1, duration: 0.5 }, '-=0.2')
  .from('.sidebar-card', { opacity: 0, x: 40, stagger: 0.08, duration: 0.4 }, '-=0.4');
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
