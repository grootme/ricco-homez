# Property Single V1

## 1. URL and Page Title

- **URL**: `https://homez-appdir.vercel.app/single-v1/1`
- **Page Title**: `Property Single V1 || Homez - Real Estate NextJS Template`
- **Template**: Homez Real Estate NextJS Template
- **Page Type**: Property Detail Page (Single Style Version 1)

---

## 2. Page Overview

Property Single V1 is the primary property detail page template in the Homez Real Estate template. It displays comprehensive information about a specific property listing, including images, specifications, features, location, agent information, and interactive elements for user engagement. This version features a standard layout with a top image gallery followed by property details in a vertical flow with a right sidebar for additional information and actions.

### Purpose
- Display complete property information to prospective buyers/renters
- Provide tools for property inquiry and scheduling tours
- Showcase property through multiple media formats (images, videos, virtual tours)
- Connect potential clients with listing agents
- Display similar properties for user exploration

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
│  ┌──────────────────────────────┬────────────────────────┐  │
│  │                              │                        │  │
│  │     MAIN CONTENT AREA        │      RIGHT SIDEBAR     │  │
│  │     (Property Details)       │                        │  │
│  │                              │   • Agent Card         │  │
│  │   • Title & Price            │   • Inquiry Form       │  │
│  │   • Overview                 │   • Schedule Tour      │  │
│  │   • Description              │   • Mortgage Calc      │  │
│  │   • Features                 │   • Property Stats     │  │
│  │   • Floor Plans              │                        │  │
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
│     Footer Widgets | Copyright | Social Links               │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Header Component

**Header Classes**: `header-nav nav-homepage-style light-header menu-home4 main-menu`

**Header Elements**:
- Logo: Links to homepage (`/`)
- Navigation Menu with dropdowns:
  - Home (10 versions: Home v1-v10)
  - Listing (Grid, Map, List views)
  - Property (Agents, Single Style, Dashboard submenus)
  - Blog (List V1-V3, Blog Single)
  - Pages (About, Contact, Compare, Pricing, FAQ, Login, Register, 404, Invoice)
- User Actions:
  - Login/Register button (triggers modal)
  - Add Property button (`/dashboard-add-property`)
  - Hamburger menu for mobile

### 3.3 Main Content Layout

**Container Structure**:
- Main container: `<div class="container">`
- Two-column layout using Bootstrap grid:
  - Left column: `col-lg-8` (Main property content)
  - Right column: `col-lg-4` (Sidebar)

### 3.4 Footer Component

**Footer Sections**:
- Contact Information
- Quick Links
- Property Categories
- Newsletter Subscription
- Social Media Links
- Copyright Information

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
- Image count indicator
- Full-screen lightbox mode
- Zoom functionality

**Sample Gallery Images**:
- Main property exterior view
- Living room
- Kitchen
- Bedrooms
- Bathrooms
- Backyard/Outdoor area
- Garage

### 4.2 Property Header

**Property Header Data**:
| Field | Value | Description |
|-------|-------|-------------|
| `title` | "Equestrian Family Home" | Property listing title |
| `status` | "For sale" | Listing status (For Sale/For Rent) |
| `price` | "$14,000" | Property price (monthly if rental) |
| `address` | "New York City, CA, USA" | Property location |
| `fullAddress` | "10425 Tabor St Los Angeles CA 90034 USA" | Complete address |
| `listedDate` | "8 years ago" | Time since listing posted |
| `viewCount` | 8721 | Number of property views |
| `favoriteCount` | Number | Saved/favorited count |

**Status Badge Types**:
- For Sale
- For Rent
- Sold
- Pending
- Featured

### 4.3 Property Overview (Quick Specs)

**Overview Grid Data**:
| Label | Value | Icon |
|-------|-------|------|
| Bedroom | 1 | Bed icon |
| Bath | 2 | Bath icon |
| Year Built | 2018 | Calendar icon |
| Garage | 2 | Car icon |
| Sqft | 1200 | Ruler icon |
| Property Type | Houses | Building icon |

**Additional Overview Fields**:
| Field | Value |
|-------|-------|
| Property ID | String (auto-generated) |
| Property Size | Numeric (sqft) |
| Garage Size | Numeric (sqft) |
| Property Status | For Sale/For Rent |
| State/County | Los Angeles |

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

**Description Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `fullDescription` | String | Complete property description text |
| `highlights` | Array[String] | Key property highlights |
| `formattedDescription` | HTML | Rich text description with formatting |

### 4.5 Property Details Section

**Property Details Data Structure**:
| Field | Value | Description |
|-------|-------|-------------|
| Property ID | Auto-generated | Unique identifier |
| Property Size | 1200 sqft | Total property area |
| Garage Size | 400 sqft | Garage area |
| Property Type | Houses | Category type |
| Property Status | For Sale | Listing status |
| State/County | Los Angeles | Administrative region |

**Additional Property Details**:
| Category | Details |
|----------|---------|
| Interior Features | Fireplace, Vaulted Ceilings, Open Floor Plan |
| Exterior Features | Deck, Gated Community |
| Kitchen Features | Stainless Steel Appliances, Tile Backsplash, Breakfast Bar |
| Community | The Hideout |

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
- Sprinkler System

#### Community Features
- Pool
- Fitness Center
- Clubhouse
- Tennis Courts
- Playground
- Security System
- HOA

**Features Data Structure**:
```javascript
{
  "features": {
    "interior": ["Air Conditioning", "Heating", "Laundry Room", ...],
    "kitchen": ["Dishwasher", "Garbage Disposal", "Microwave", ...],
    "exterior": ["Balcony/Deck", "Patio", "Fenced Yard", ...],
    "community": ["Pool", "Fitness Center", "Clubhouse", ...]
  }
}
```

### 4.7 Energy Class

**Energy Performance Data**:
| Field | Value | Description |
|-------|-------|-------------|
| Global Energy Performance Index | Rating | Energy efficiency rating |
| Renewable Energy Performance Index | Rating | Renewable energy score |
| Energy Class | A-G | EU energy classification |

### 4.8 Floor Plans

**Floor Plans Data Structure**:
| Field | Type | Description |
|-------|------|-------------|
| `floorPlans` | Array[Object] | Collection of floor plans |
| `floorPlans[].name` | String | Floor plan name (e.g., "First Floor") |
| `floorPlans[].size` | String | Floor area in sqft |
| `floorPlans[].bedrooms` | Number | Number of bedrooms on floor |
| `floorPlans[].bathrooms` | Number | Number of bathrooms on floor |
| `floorPlans[].image` | String | Floor plan image URL |
| `floorPlans[].description` | String | Floor plan description |

**Floor Plan Accordion**:
- Expandable/collapsible sections
- Each floor plan shows:
  - Floor name
  - Size
  - Room count
  - Interactive floor plan image

### 4.9 Video Section

**Video Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `videoUrl` | String | Video URL (YouTube, Vimeo, or MP4) |
| `videoType` | String | Video provider type |
| `videoThumbnail` | String | Video preview image |
| `videoTitle` | String | Video title |

**Video Features**:
- Embedded video player
- Play/Pause controls
- Fullscreen option
- Video thumbnail preview

### 4.10 360° Virtual Tour

**Virtual Tour Data Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `virtualTourUrl` | String | 360° tour URL |
| `virtualTourProvider` | String | Tour platform (Matterport, etc.) |
| `virtualTourThumbnail` | String | Tour preview image |

**Virtual Tour Features**:
- Full 360° navigation
- Room-by-room exploration
- Zoom controls
- Mobile-compatible viewer

### 4.11 Location & Nearby

**Address Details**:
| Field | Value |
|-------|-------|
| Street Address | 10425 Tabor St |
| City | Los Angeles |
| State | CA |
| ZIP Code | 90034 |
| Country | USA |

**What's Nearby Categories**:

#### Education (Schools)
| Place Type | Distance | Travel Time |
|------------|----------|-------------|
| Elementary School | X mi | X min |
| Middle School | X mi | X min |
| High School | X mi | X min |
| University | X mi | X min |

#### Health & Medical
| Place Type | Distance | Travel Time |
|------------|----------|-------------|
| Hospital | X mi | X min |
| Pharmacy | X mi | X min |
| Urgent Care | X mi | X min |
| Dental | X mi | X min |

#### Transportation
| Place Type | Distance | Travel Time |
|------------|----------|-------------|
| Bus Stop | X mi | X min |
| Metro Station | X mi | X min |
| Airport | X mi | X min |
| Train Station | X mi | X min |

**Walk Score**:
| Score | Description |
|-------|-------------|
| 90-100 | Walker's Paradise |
| 70-89 | Very Walkable |
| 50-69 | Somewhat Walkable |
| 25-49 | Car-Dependent |
| 0-24 | Almost All Errands Require a Car |

### 4.12 Mortgage Calculator

**Calculator Fields**:
| Field | Type | Default Value | Description |
|-------|------|---------------|-------------|
| Home Price | Input | $14,000 | Property price |
| Down Payment | Input | $250 | Initial payment |
| Interest Rate | Input | 3.5% | Annual interest rate |
| Loan Term | Select | 12 years | Mortgage duration |

**Calculator Outputs**:
| Field | Description |
|-------|-------------|
| Monthly Payment | Calculated EMI |
| Total Payment | Total loan amount |
| Total Interest | Interest paid over term |
| Principal & Interest | Breakdown of payment |

**Calculator Data Structure**:
```javascript
{
  "homePrice": 14000,
  "downPayment": 250,
  "interestRate": 3.5,
  "loanTerm": 12,
  "monthlyPayment": 1000,
  "totalPayment": 2304,
  "totalInterest": null
}
```

### 4.13 Property Views Statistics

**Statistics Data**:
| Metric | Value | Description |
|--------|-------|-------------|
| Total Views | 8721 | All-time views |
| Views This Week | Number | Weekly view count |
| Views This Month | Number | Monthly view count |
| View Trend | Chart | Graph showing view history |

### 4.14 Home Value

**Value Data**:
| Field | Description |
|-------|-------------|
| Estimated Value | AI-predicted property value |
| Value Trend | Price appreciation/depreciation |
| Comparable Sales | Similar property prices |

### 4.15 Agent Information

**Agent Card Data**:
| Field | Value | Description |
|-------|-------|-------------|
| Agent Name | "Arlene McCoy" | Full name |
| Agent Photo | Image URL | Profile photo |
| Agent Title | "Real Estate Agent" | Professional title |
| Phone | Phone number | Contact phone |
| Email | Email address | Contact email |
| Agency | Agency name | Associated agency |
| Rating | Star rating | Agent rating (1-5) |
| Review Count | Number | Total reviews |
| Listed Properties | Number | Active listings |

**Agent Social Links**:
- Facebook
- Twitter
- Instagram
- LinkedIn

**Multiple Agents Display**:
The page may show multiple agents:
- Arlene McCoy
- Bessie Cooper
- Darrell Steward

### 4.16 Inquiry Form (Get More Information)

**Form Fields**:
| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| Name | Text | Yes | "Ali Tufan" |
| Phone | Tel | Yes | "Enter your phone" |
| Email | Email | Yes | "ibthemes21@gmail.com" |
| Message | Textarea | Yes | "Hello, I am interested in [Renovated apartment at last floor]" |

**Form Actions**:
| Action | Description |
|--------|-------------|
| Submit | Send inquiry to agent |
| Reset | Clear form fields |

### 4.17 Schedule a Tour

**Tour Type Options**:
| Type | Description |
|------|-------------|
| In Person | Physical property visit |
| Video Chat | Virtual property tour via video call |

**Schedule Form Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Tour Type | Radio | Yes | In Person/Video Chat |
| Date | Date | Yes | Preferred date |
| Time | Select | Yes | Preferred time slot |

**Time Slots**:
- Morning (9:00 AM - 12:00 PM)
- Afternoon (12:00 PM - 5:00 PM)
- Evening (5:00 PM - 8:00 PM)

### 4.18 Leave a Review

**Review Form Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Rating | Stars | Yes | 1-5 star rating |
| Review Title | Text | Yes | "Enter Title" |
| Review Text | Textarea | Yes | "Write a Review" |
| Reviewer Name | Text | Yes | Reviewer's name |
| Reviewer Email | Email | Yes | Reviewer's email |

**Review Display**:
| Element | Description |
|---------|-------------|
| Reviewer Avatar | Profile image |
| Reviewer Name | Display name |
| Rating | Star display |
| Date | Review date |
| Review Text | Full review content |

### 4.19 Similar Properties

**Similar Properties Data Structure**:
| Field | Type | Description |
|-------|------|-------------|
| `similarProperties` | Array[Object] | Collection of similar listings |
| `similarProperties[].id` | String | Property ID |
| `similarProperties[].title` | String | Property title |
| `similarProperties[].price` | String | Property price |
| `similarProperties[].address` | String | Property location |
| `similarProperties[].image` | String | Main image URL |
| `similarProperties[].beds` | Number | Bedroom count |
| `similarProperties[].baths` | Number | Bathroom count |
| `similarProperties[].sqft` | Number | Square footage |
| `similarProperties[].status` | String | Listing status |

**Similar Properties Section Title**: "Discover Our Featured Listings"

**Property Card Display**:
- Property image with status badge
- Price
- Title
- Location
- Quick specs (beds, baths, sqft)
- Favorite button
- View details link

---

## 5. Component Breakdown

### 5.1 UI Components List

| Component | Description | Location |
|-----------|-------------|----------|
| HeaderNav | Main navigation bar | Page top |
| PropertyGallery | Image carousel/slider | After header |
| PropertyTitle | Title and price display | Below gallery |
| PropertyOverview | Quick specs grid | After title |
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
| ScheduleTour | Tour booking | Sidebar |
| ReviewForm | Review submission | Sidebar |
| SimilarProperties | Property carousel | Before footer |
| Footer | Page footer | Page bottom |

### 5.2 Interactive Components

**Gallery Component**:
```javascript
// Component: PropertyGallery
Props:
  - images: Array[Object]
  - autoPlay: boolean
  - showThumbnails: boolean
  - showNavigation: boolean

Features:
  - Swipe gestures (mobile)
  - Keyboard navigation
  - Touch-friendly
  - Lazy loading
  - Lightbox mode
```

**Mortgage Calculator Component**:
```javascript
// Component: MortgageCalculator
Props:
  - propertyPrice: number
  - defaultDownPayment: number
  - defaultInterestRate: number

Events:
  - onCalculate(results)
  - onReset()
```

**Schedule Tour Component**:
```javascript
// Component: ScheduleTour
Props:
  - tourTypes: Array[string]
  - availableDates: Array[date]
  - timeSlots: Array[object]

Events:
  - onSchedule(tourDetails)
  - onCancel()
```

---

## 6. Interactive Elements

### 6.1 Gallery Interactions

| Interaction | Action | Response |
|-------------|--------|----------|
| Click thumbnail | Select image | Main image updates |
| Click arrows | Navigate | Previous/Next image |
| Click main image | Open lightbox | Fullscreen view |
| Swipe (mobile) | Navigate | Previous/Next image |
| Press ESC | Close lightbox | Return to page |
| Press Left/Right | Navigate | Previous/Next image |

### 6.2 Tab/Accordion Interactions

**Floor Plan Accordion**:
| Interaction | Action |
|-------------|--------|
| Click floor name | Expand/Collapse |
| Only one open | Auto-close others |
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

**Form States**:
- Default: Empty fields with placeholders
- Focused: Field highlight
- Error: Red border, error message
- Success: Confirmation message, form reset

### 6.4 Map Interactions

**Location Map Features**:
| Action | Result |
|--------|--------|
| Click marker | Property info popup |
| Scroll | Zoom in/out |
| Drag | Pan map |
| Click nearby place | Show details |
| Toggle categories | Filter places |

### 6.5 Favorite/Save Actions

| Action | Icon State | Result |
|--------|------------|--------|
| Click heart (empty) | Fill red | Add to favorites |
| Click heart (filled) | Empty outline | Remove from favorites |
| Not logged in | Redirect | Login modal |

---

## 7. Responsive Behavior

### 7.1 Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 576px | Single column |
| Tablet | 576px - 768px | Single column |
| Small Desktop | 768px - 992px | Two columns (narrow sidebar) |
| Desktop | 992px - 1200px | Two columns |
| Large Desktop | > 1200px | Two columns (wide) |

### 7.2 Mobile Layout Changes

**Header Changes**:
- Desktop: Full navigation visible
- Mobile: Hamburger menu, slide-out navigation

**Gallery Changes**:
- Desktop: Thumbnails below main image
- Mobile: Swipe carousel with dots indicator

**Content Changes**:
- Desktop: Two-column layout (8/4 split)
- Mobile: Single column, sidebar moves below content

**Agent Card Changes**:
- Desktop: Full card with all info
- Mobile: Compact card, collapsible sections

### 7.3 Touch Optimizations

| Element | Touch Behavior |
|---------|----------------|
| Gallery | Swipe gestures enabled |
| Accordion | Tap to expand |
| Map | Pinch to zoom |
| Forms | Native inputs |
| Buttons | Larger tap targets |

### 7.4 Mobile Navigation

**Off-canvas Menu**:
- Slide from left
- Accordion submenus
- Close on selection
- Close button (X)

---

## 8. SEO & Meta Information

### 8.1 Page Meta Tags

```html
<title>Property Single V1 || Homez - Real Estate NextJS Template</title>
<meta name="description" content="Equestrian Family Home - Property details, features, and contact information">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 8.2 Structured Data (Schema.org)

**Property Listing Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Equestrian Family Home",
  "description": "Property description...",
  "offers": {
    "@type": "Offer",
    "price": "14000",
    "priceCurrency": "USD"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10425 Tabor St",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90034",
    "addressCountry": "USA"
  }
}
```

---

## 9. API Integration Points

### 9.1 Data Fetching Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/properties/:id` | GET | Fetch property details |
| `/api/properties/:id/similar` | GET | Fetch similar properties |
| `/api/agents/:id` | GET | Fetch agent information |
| `/api/inquiries` | POST | Submit property inquiry |
| `/api/tours` | POST | Schedule property tour |
| `/api/reviews` | POST | Submit property review |
| `/api/favorites` | POST/DELETE | Add/remove favorite |

### 9.2 Dynamic Route Parameter

- Route pattern: `/single-v1/[id]`
- Example: `/single-v1/1`
- `id` parameter fetches specific property data

---

## 10. Styling & CSS Classes

### 10.1 Main Container Classes

```css
.wrapper { /* Main page wrapper */ }
.container { /* Bootstrap container */ }
.single-property-content { /* Main content wrapper */ }
```

### 10.2 Gallery Classes

```css
.property-gallery { /* Gallery container */ }
.gallery-main { /* Main image container */ }
.gallery-thumbnails { /* Thumbnail strip */ }
```

### 10.3 Content Classes

```css
.property-header { /* Title section */ }
.property-meta { /* Quick specs */ }
.property-description { /* Description text */ }
.property-details { /* Details section */ }
.features-list { /* Amenities list */ }
```

### 10.4 Sidebar Classes

```css
.agen-personal-info { /* Agent card */ }
.inquiry-form { /* Contact form */ }
.schedule-tour { /* Tour booking */ }
.mortgage-calculator { /* Calculator widget */ }
```

### 10.5 Utility Classes

```css
.bdrs12 { /* Border radius 12px */ }
.bdrb1 { /* Border bottom 1px */ }
.p30 { /* Padding 30px */ }
.mb30 { /* Margin bottom 30px */ }
.bgc-white { /* Background white */ }
.default-box-shadow1 { /* Box shadow style */ }
```

---

## 11. Accessibility Features

### 11.1 ARIA Labels

| Element | ARIA Attribute |
|---------|----------------|
| Navigation | `role="navigation"` |
| Main content | `role="main"` |
| Gallery | `role="region" aria-label="Property Gallery"` |
| Forms | `aria-label="Contact Form"` |
| Buttons | `aria-label="Add to favorites"` |

### 11.2 Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Navigate through elements |
| Enter | Activate button/link |
| Escape | Close modal/lightbox |
| Arrow keys | Navigate gallery |

### 11.3 Screen Reader Support

- Semantic HTML structure
- Alt text for all images
- Form labels properly associated
- Heading hierarchy maintained
- Skip links available

---

## 12. Performance Considerations

### 12.1 Image Optimization

- Lazy loading for below-fold images
- Responsive image srcset
- WebP format with fallbacks
- Compressed thumbnails

### 12.2 Code Splitting

- Gallery component lazy loaded
- Map component loaded on demand
- Virtual tour loaded on interaction

### 12.3 Caching Strategy

- Property data cached
- Images cached with long TTL
- Agent info cached separately

---

## 13. Error Handling

### 13.1 Error States

| Error Type | User Feedback |
|------------|---------------|
| Property not found | 404 page redirect |
| API failure | Error message, retry button |
| Form validation | Inline error messages |
| Image load failure | Placeholder image |

### 13.2 Loading States

| Component | Loading Indicator |
|-----------|-------------------|
| Gallery | Skeleton loader |
| Property data | Content placeholder |
| Map | Gray box with spinner |
| Similar properties | Card skeletons |

---

## 14. Third-Party Integrations

### 14.1 Google Maps

- Property location marker
- Nearby places display
- Directions link
- Street View option

### 14.2 Social Sharing

| Platform | Share Type |
|----------|------------|
| Facebook | Open Graph |
| Twitter | Twitter Card |
| LinkedIn | Article share |
| WhatsApp | Direct link |
| Email | Mailto link |

### 14.3 Analytics Events

| Event | Category | Action |
|-------|----------|--------|
| Property view | Property | View |
| Gallery interaction | Gallery | Navigate |
| Inquiry submit | Form | Submit |
| Tour schedule | Tour | Schedule |
| Favorite add | User | Favorite |

---

## 15. Version-Specific Features (V1)

### 15.1 V1 Unique Characteristics

- **Layout**: Traditional two-column layout with sidebar on right
- **Gallery**: Standard horizontal gallery with thumbnails below
- **Overview**: Grid layout for quick specs
- **Agent Display**: Single or multiple agents in sidebar
- **Tour Scheduling**: In Person and Video Chat options

### 15.2 Differences from Other Versions

| Feature | V1 | V2 | V3 | V4 | V5 |
|---------|----|----|----|----|----|
| Gallery Position | Top | Left | Top | Full | Split |
| Sidebar Position | Right | Right | Right | Left | Bottom |
| Overview Style | Grid | Inline | Grid | Cards | Compact |
| Map Position | Content | Content | Content | Sidebar | Full |

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

**Detection Evidence**:
```html
<body data-aos-easing="ease" data-aos-duration="1200" data-aos-delay="0">
```

### Animation Types Used

| Animation | CSS Transform | Usage |
|-----------|---------------|-------|
| `fade-up` | `translateY(100px) → translateY(0)` | Property cards, sections |
| `fade-down` | `translateY(-100px) → translateY(0)` | Navigation elements |
| `fade-left` | `translateX(100px) → translateX(0)` | Sidebar content |
| `fade-right` | `translateX(-100px) → translateX(0)` | Main content |
| `zoom-in` | `scale(0.6) → scale(1)` | Images on hover |

### Element-Level Animation

```html
<div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
  <div class="property-card">...</div>
</div>
```

### CSS Transitions

```css
/* Card hover effects */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Button hover */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Image zoom */
.property-image:hover img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
```

### Swiper Gallery Animations

```javascript
const galleryConfig = {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: true,
  pagination: {
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  effect: 'slide',
  speed: 500
};
```

---

## Theme Variables

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-primary: #eb6753;           /* Coral/salmon - Main brand color */
  --color-primary-hover: #c53535;     /* Darker coral for hover */
  --color-primary-light: rgba(227, 62, 62, 0.07);
  
  /* Secondary Colors */
  --color-secondary: #041e42;         /* Dark blue */
  --color-dark: #0f172a;              /* Dark text */
  --color-dark-2: #181a20;            /* Dark backgrounds */
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-100: #f8fafc;
  --color-gray-200: #f7f7f7;          /* Page background */
  --color-gray-300: #efefef;          /* Borders */
  --color-gray-400: #eeeeee;
  --color-gray-500: #64748b;          /* Secondary text */
  --color-gray-600: #94a3b8;          /* Muted text */
  
  /* Status Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Social Colors */
  --color-facebook: #1877f2;
  --color-google: #4285f4;
  --color-apple: #000000;
}
```

### Button Styles

```css
/* Primary Theme Button */
.btn-thm {
  background-color: rgb(235, 103, 83);
  color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 13px 30px;
  font-size: 15px;
  font-weight: 500;
}

.btn-thm:hover {
  background-color: rgb(197, 53, 53);
  transform: translateY(-2px);
}
```

### Border Radius Utilities

```css
.bdrs12 { border-radius: 12px; }
.bdrs60 { border-radius: 60px; }
```

### Box Shadows

```css
.default-box-shadow1 {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-hover-shadow:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

## NPM Dependencies

### Core Framework
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Animation Libraries
```json
{
  "aos": "^2.3.4",
  "swiper": "^11.0.0"
}
```

### Styling
```json
{
  "bootstrap": "^5.3.0",
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0",
  "sass": "^1.69.0"
}
```

### UI Components
```json
{
  "react-select": "^5.7.0",
  "react-pro-sidebar": "^1.1.0"
}
```

### Icons
```json
{
  "@fortawesome/fontawesome-svg-core": "^6.4.0",
  "@fortawesome/free-solid-svg-icons": "^6.4.0",
  "@fortawesome/free-regular-svg-icons": "^6.4.0",
  "@fortawesome/free-brands-svg-icons": "^6.4.0",
  "@fortawesome/react-fontawesome": "^0.2.0"
}
```

### Forms
```json
{
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0",
  "@hookform/resolvers": "^3.3.0"
}
```

### Maps
```json
{
  "@react-google-maps/api": "^2.19.0"
}
```

### State Management
```json
{
  "zustand": "^4.4.0",
  "@tanstack/react-query": "^5.8.0"
}
```

### Typography
```javascript
// Google Fonts via Next.js
import { Poppins, DM_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});
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

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

### Page Load Animations

```javascript
// components/PropertySingleV1.js
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const PropertySingleV1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery entrance animation
      gsap.from('.property-gallery', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Property header animation
      gsap.from('.property-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out'
      });

      // Overview grid stagger
      gsap.from('.overview-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* content */}</div>;
};
```

### ScrollTrigger Animations

```javascript
// Property details section
gsap.from('.property-details', {
  scrollTrigger: {
    trigger: '.property-details',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: 'power3.out'
});

// Features list stagger
gsap.from('.features-list .feature-item', {
  scrollTrigger: {
    trigger: '.features-list',
    start: 'top 85%'
  },
  opacity: 0,
  x: -30,
  stagger: 0.05,
  duration: 0.5,
  ease: 'power2.out'
});

// Floor plans accordion
gsap.from('.floor-plan-item', {
  scrollTrigger: {
    trigger: '.floor-plans-section',
    start: 'top 80%'
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Sidebar Animations

```javascript
// Sidebar widgets animation
gsap.from('.sidebar-widget', {
  scrollTrigger: {
    trigger: '.sidebar-container',
    start: 'top 80%'
  },
  opacity: 0,
  x: 50,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});

// Agent card entrance
gsap.from('.agent-card', {
  scrollTrigger: {
    trigger: '.agent-card',
    start: 'top 90%'
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.5,
  ease: 'back.out(1.2)'
});

// Inquiry form fields
gsap.from('.inquiry-form .form-field', {
  scrollTrigger: {
    trigger: '.inquiry-form',
    start: 'top 85%'
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Hover Animations

```javascript
// Property card hover
const setupHoverAnimations = () => {
  const cards = document.querySelectorAll('.property-card');
  
  cards.forEach(card => {
    const image = card.querySelector('.property-image');
    const overlay = card.querySelector('.overlay');
    
    card.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
      });
    });
  });
};

// Favorite button animation
const animateFavorite = (button) => {
  gsap.to(button, {
    scale: 1.3,
    duration: 0.15,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  });
  
  gsap.to(button.querySelector('svg'), {
    fill: '#eb6753',
    duration: 0.3
  });
};
```

### Timeline Animations

```javascript
// Hero section timeline
const heroTimeline = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out' }
});

heroTimeline
  .from('.property-gallery', { opacity: 0, y: 60, duration: 0.8 })
  .from('.property-title', { opacity: 0, y: 30, duration: 0.5 }, '-=0.3')
  .from('.property-meta', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')
  .from('.overview-grid', { opacity: 0, scale: 0.95, duration: 0.5 }, '-=0.2')
  .from('.action-buttons', { opacity: 0, x: -20, duration: 0.4 }, '-=0.3');

// Play on mount
useEffect(() => {
  heroTimeline.play();
}, []);
```

### Similar Properties Animation

```javascript
// Similar properties grid
gsap.from('.similar-properties .property-card', {
  scrollTrigger: {
    trigger: '.similar-properties',
    start: 'top 80%'
  },
  opacity: 0,
  y: 60,
  stagger: {
    each: 0.15,
    from: 'start'
  },
  duration: 0.7,
  ease: 'power3.out'
});
```

### Gallery Lightbox Animation

```javascript
// Lightbox open animation
const openLightbox = (index) => {
  const lightbox = document.querySelector('.lightbox');
  
  gsap.timeline()
    .to(lightbox, {
      display: 'flex',
      duration: 0
    })
    .to(lightbox, {
      opacity: 1,
      duration: 0.3
    })
    .from('.lightbox-image', {
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2');
};
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

*Documentation generated for Homez Real Estate NextJS Template - Property Single V1*
*Last updated: April 2025*
