# Home v4 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v4
- **Page Title:** Home v4 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v4 is a modern landing page for the Homez Real Estate NextJS Template featuring a video-centric hero section with property type quick links. The page includes city exploration, popular properties with category filtering, a selling options section with statistics, apartment type carousel, exclusive agents showcase, testimonials, and a blog section. The design emphasizes visual elements with video integration and decorative shape elements throughout.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Hero Section** - Split layout with video and search form
3. **Quick Category Links** - Horizontal property type buttons
4. **Properties by Cities Section** - Carousel with city cards
5. **Popular Properties Section** - Grid layout with category tabs
6. **Selling Options Section** - Two-column layout with features and statistics
7. **Apartment Types Section** - Horizontal scrollable category cards with images
8. **Exclusive Agents Section** - Two-column layout with agent profiles and decorative elements
9. **Selling CTA Section** - Two-column layout with feature list
10. **Testimonials Section** - Horizontal carousel
11. **Trusted Partners Section** - Logo marquee
12. **Blog Section** - Three-column blog post cards
13. **Dream House CTA Section** - Full-width banner with registration
14. **Footer** - Multi-column layout with newsletter, links, and social media

---

## Data Content Structure

### 1. Header/Navigation Data

```
Navigation Items:
- Home (dropdown)
- Listing (dropdown with submenu items)
  - Grid Default
  - Grid Full Width 3 Cols
  - Grid Full Width 4 Cols
  - Grid Full Width 2 Cols
  - Grid Full Width 1 Cols v1
  - Grid Full Width 1 Cols v2
  - Banner Search v1
  - Banner Search v2
  - Header Map Style
  - Map V1
  - Map V2
  - Map V3
  - Map V4
  - List v1
  - List All Style
- Property (dropdown)
- Blog (dropdown)
- Pages (dropdown)

Header Actions:
- Login / Register button
- Add Property link with arrow icon
- Hamburger menu (mobile)
```

### 2. Hero Section Data

```
Heading: "Easy Way to Find a Perfect Property"
Subtext: "From as low as $10 per day with limited time offer discounts"

Video Section:
- Thumbnail images: 2 property images
- Watch Video button with play icon

Search Form:
- Tab buttons: Buy (active), Rent, Sold
- Text input placeholder: "Search Products for Buy"
- Advanced button (expands filters)
- Search button (magnifying glass icon)
```

### 3. Quick Category Links Data

```
Property Type Links (4 items):
- Houses (with icon)
- Apartments (with icon)
- Office (with icon)
- Villa (with icon)
```

### 4. Properties by Cities Data

```
Section Title: "Properties by Cities"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Cities →"

City Cards (9 items in carousel):

Card 1:
- Image: city image
- City Name: "Manhattan" (link)
- Property Count: "12 Properties"

Card 2:
- Image: city image
- City Name: "San Diego" (link)
- Property Count: "12 Properties"

Card 3:
- Image: city image
- City Name: "San Francisco" (link)
- Property Count: "12 Properties"

Card 4:
- Image: city image
- City Name: "Los Angeles" (link)
- Property Count: "12 Properties"

Card 5:
- Image: city image
- City Name: "California" (link)
- Property Count: "12 Properties"

Card 6:
- Image: city image
- City Name: "New Jersey" (link)
- Property Count: "12 Properties"

Card 7:
- Image: city image
- City Name: "Manhattan" (link)
- Property Count: "12 Properties"

Card 8:
- Image: city image
- City Name: "San Diego" (link)
- Property Count: "12 Properties"

Card 9:
- Image: city image
- City Name: "San Francisco" (link)
- Property Count: "12 Properties"

Navigation: Left/Right pagination buttons (〈 〉) - left disabled at start
```

### 5. Popular Properties Data

```
Section Title: "Discover Popular Properties"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Category Tabs (4 items):
- House (active)
- Villa
- Office
- Apartments

Property Cards Grid (6 items):

Card 1:
- Image: property listing image
- Action icons: 3 buttons (favorite, compare, share)
- Price: "$82,000"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"

Card 2:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$14,000"
- Title: "Equestrian Family Home"
- Location: "Texas City, CA, USA"

Card 3:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$82,000"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"

Card 4:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$82,000"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"

Card 5:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$14,000"
- Title: "Equestrian Family Home"
- Location: "San Francisco City, CA, USA"

Card 6:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$82,000"
- Title: "Luxury villa in Rego Park"
- Location: "New York City, CA, USA"
```

### 6. Selling Options Section Data

```
Section Title: "Let's Find The Right Selling Option For You"

Service Features (3 items):

1. Property Management
   - Icon: property icon
   - Title: "Property Management"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."

2. Mortgage Services
   - Icon: mortgage icon
   - Title: "Mortgage Services"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."

3. Currency Services
   - Icon: currency icon
   - Title: "Currency Services"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."

CTA Link: "Learn More →"

Statistics (3 items):
- Counter 1: "0"
  - Label: "Stores around the world"
- Counter 2: "0"
  - Label: "Stores around the world"
- Counter 3: "0"
  - Label: "Stores around the world"
```

### 7. Apartment Types Data

```
Section Title: "Explore Apartment Types"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Category Cards (7 items in carousel):

Card 1:
- Image: apartment city image
- Name: "House"
- Count: "22 Properties"

Card 2:
- Image: apartment city image
- Name: "Apartments"
- Count: "22 Properties"

Card 3:
- Image: apartment city image
- Name: "Office"
- Count: "22 Properties"

Card 4:
- Image: apartment city image
- Name: "Villa"
- Count: "22 Properties"

Card 5:
- Image: apartment city image
- Name: "House" (duplicate for carousel)
- Count: "22 Properties"

Card 6:
- Image: apartment city image
- Name: "Apartments" (duplicate for carousel)
- Count: "22 Properties"

Card 7:
- Image: apartment city image
- Name: "Office" (duplicate for carousel)
- Count: "22 Properties"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 8. Exclusive Agents Section Data

```
Agent Showcase Block:

Header: "4+ Exclusive Agents"

Agent Cards (5 items):

Card 1:
- Image: team photo
- Name: "Marvin McKinney"
- Role: "Designer"

Card 2:
- Image: team photo
- Name: "Ralph Edwards"
- Role: "Designer"

Card 3:
- Image: team photo
- Name: "Annette Black"
- Role: "Designer"

Card 4:
- Image: team photo
- Name: "Jane Cooper"
- Role: "Designer"

Card 5:
- Image: team photo
- Name: "Marvin McKinney"
- Role: "Designer"

Decorative Elements: 5 shape images
```

### 9. Selling CTA Section Data

```
Section Title: "Let's find the right selling option for you"
Section Subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

Feature List:
- "✓ Find excellent deals"
- "✓ Friendly host & Fast support"
- "✓ List your own property"

CTA Link: "See More →"
```

### 10. Testimonials Section Data

```
Section Title: "People Love Living with Realton"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Testimonial Cards (4 items):

Card 1:
- Title: "Great Work"
- Quote: """
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"

Card 2:
- Title: "Great Work"
- Quote: """
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user image
- Author Name: "Floyd Miles"
- Company: "Bank of America"

Card 3:
- Title: "Great Work"
- Quote: """
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"

Card 4:
- Title: "Great Work"
- Quote: """
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user image
- Author Name: "Floyd Miles"
- Company: "Bank of America"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 11. Trusted Partners Section Data

```
Section Title: "Trusted by the world's best"

Partner Logos (18 items in infinite scroll marquee):
- 1.png
- 2.png
- 3.png
- 4.png
- 5.png
- 6.png
- 1.png (duplicate)
- 2.png (duplicate)
- 3.png (duplicate)
- 4.png (duplicate)
- 5.png (duplicate)
- 6.png (duplicate)
- 1.png (duplicate)
- 2.png (duplicate)
- 3.png (duplicate)
- 4.png (duplicate)
- 5.png (duplicate)
- 6.png (duplicate)
```

### 12. Blog Section Data

```
Section Title: "From Our Blog"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Blog Post Cards (3 items):

Card 1:
- Image: blog post image
- Date Display:
  - Month: "July"
  - Day: "28"
- Category: "Living Room" (link)
- Title: "Private Contemporary Home Balancing Openness" (link)

Card 2:
- Image: blog post image
- Date Display:
  - Month: "July"
  - Day: "28"
- Category: "Living Room" (link)
- Title: "Contemporary Home Private Balancing Openness" (link)

Card 3:
- Image: blog post image
- Date Display:
  - Month: "July"
  - Day: "28"
- Category: "Living Room" (link)
- Title: "Balancing Private Contemporary Home Openness" (link)
```

### 13. Dream House CTA Section Data

```
Decorative Elements: 2 shape images

Section Title: "Get Your Dream House"
Section Subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

CTA Button: "Register Now →"
```

### 14. Footer Data

```
Contact Info Block:
- Label: "Address"
- Address: "329 Queensberry Street, North Melbourne VIC 3051, Australia." (link)
- Label: "Total Free Customer Care"
- Phone: "+(0) 123 050 945 02" (link)
- Label: "Need Live Support?"
- Email: "hi@homez.com" (link)

Newsletter Section:
- Title: "Keep Yourself Up to Date"
- Email Input: placeholder "Your Email"
- Subscribe Button: arrow icon

Apps Section:
- Title: "Apps"
- Apple Store Link:
  - Icon: Apple logo
  - Text: "Download on the"
  - Label: "Apple Store"
- Google Play Link:
  - Icon: Google Play logo
  - Text: "Get it on"
  - Label: "Google Play"

Popular Search Links:
- Title: "Popular Search"
- Links:
  - "Apartment for Rent"
  - "Apartment Low to Hide"
  - "Offices for Buy"
  - "Offices for Rent"

Discover Links:
- Title: "Discover"
- Links:
  - "Miami"
  - "Los Angeles"
  - "Chicago"
  - "New York"

Quick Links:
- Title: "Quick Links"
- Links:
  - "Terms of Use"
  - "Privacy Policy"
  - "Pricing Plans"
  - "Our Services"
  - "Contact Support"
  - "Careers"
  - "FAQs"

Copyright Section:
- Text: "© Homez 2024"
- Author Link: "ib-themes"
- Text: "- All rights reserved"

Social Links:
- Label: "Follow us"
- Facebook (icon)
- Twitter (icon)
- Instagram (icon)
- LinkedIn (icon)
```

---

## Component Breakdown

### Navigation Components

| Component | Description | Location |
|-----------|-------------|----------|
| HeaderLogo | Site logo linking to homepage | Top-left of header |
| MainNavigation | Primary navigation menu | Center of header |
| DropdownMenu | Expandable submenu container | Within navigation items |
| LoginButton | Authentication trigger button | Right side of header |
| AddPropertyButton | CTA for property submission | Right side of header |
| HamburgerMenu | Mobile menu toggle | Right side (mobile) |

### Hero Components

| Component | Description | Location |
|-----------|-------------|----------|
| HeroHeading | Main promotional text | Hero section |
| HeroSubtext | Supporting description | Hero section |
| VideoThumbnail | Video preview container | Hero section |
| WatchVideoButton | Play button overlay | Video section |
| SearchFormContainer | Search wrapper | Hero section |
| SearchTabs | Buy/Rent/Sold toggle buttons | Search form |
| SearchInput | Search query input | Search form |
| AdvancedButton | Filter expansion trigger | Search form |
| SearchButton | Form submit button | Search form |

### Quick Category Components

| Component | Description | Location |
|-----------|-------------|----------|
| CategoryLink | Property type quick link | Below hero |
| CategoryIcon | Type-specific icon | CategoryLink |
| CategoryLabel | Type name | CategoryLink |

### Property Components

| Component | Description | Location |
|-----------|-------------|----------|
| PropertyCard | Individual listing card | Popular section |
| PropertyImage | Main listing photo | PropertyCard |
| PropertyBadge | "FEATURED" label overlay | PropertyCard |
| PropertyPrice | Price display | PropertyCard |
| PropertyTitle | Listing name/link | PropertyCard |
| PropertyLocation | City, State, Country | PropertyCard |
| PropertyActions | Favorite/Compare/Share icons | PropertyCard |

### City Components

| Component | Description | Location |
|-----------|-------------|----------|
| CityCard | City listing card | Cities section |
| CityImage | City photo | CityCard |
| CityName | City label (link) | CityCard |
| CityCount | Property count | CityCard |

### Service Components

| Component | Description | Location |
|-----------|-------------|----------|
| ServiceFeature | Service description card | Selling section |
| ServiceIcon | Feature icon | ServiceFeature |
| ServiceTitle | Feature name | ServiceFeature |
| ServiceDescription | Feature explanation | ServiceFeature |
| StatCounter | Animated number counter | Selling section |

### Apartment Type Components

| Component | Description | Location |
|-----------|-------------|----------|
| ApartmentCard | Category card with image | Apartment Types section |
| ApartmentImage | Category photo | ApartmentCard |
| ApartmentName | Category name | ApartmentCard |
| ApartmentCount | Property count | ApartmentCard |

### Agent Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgentShowcaseHeader | Section header | Agents section |
| AgentCard | Agent profile card | Agents section |
| AgentImage | Agent photo | AgentCard |
| AgentName | Agent name | AgentCard |
| AgentRole | Agent job title | AgentCard |
| DecorativeShape | Visual element | Agents section |

### Testimonial Components

| Component | Description | Location |
|-----------|-------------|----------|
| TestimonialCard | Review container | Testimonials section |
| TestimonialQuote | Opening quote mark | TestimonialCard |
| TestimonialTitle | "Great Work" heading | TestimonialCard |
| TestimonialText | Full review text | TestimonialCard |
| StarRating | 6-star rating display | TestimonialCard |
| AuthorAvatar | User profile photo | TestimonialCard |
| AuthorName | Reviewer name | TestimonialCard |
| AuthorCompany | Reviewer company | TestimonialCard |

### CTA Components

| Component | Description | Location |
|-----------|-------------|----------|
| CTABanner | Full-width container | Selling CTA section |
| CTAHeading | Main CTA text | CTABanner |
| CTASubtext | Supporting description | CTABanner |
| FeatureListItem | Checkbox feature | CTABanner |
| CTALink | Action link | CTABanner |

### Blog Components

| Component | Description | Location |
|-----------|-------------|----------|
| BlogCard | Post preview card | Blog section |
| BlogImage | Post featured image | BlogCard |
| BlogDate | Month/Day display | BlogCard |
| BlogCategory | Category tag/link | BlogCard |
| BlogTitle | Post title/link | BlogCard |

### Footer Components

| Component | Description | Location |
|-----------|-------------|----------|
| ContactInfo | Address/phone/email block | Footer |
| NewsletterForm | Email subscription | Footer |
| AppStoreLinks | App download badges | Footer |
| FooterLinkGroup | Link category group | Footer columns |
| SocialLinks | Social media icons | Footer |
| Copyright | Legal text | Footer bottom |

---

## Interactive Elements

### Buttons

| Button | Action | Location |
|--------|--------|----------|
| Login / Register | Opens authentication modal | Header |
| Add Property | Navigates to property submission | Header |
| Watch Video | Opens video modal/player | Hero section |
| Buy | Switches search to Buy mode | Hero search |
| Rent | Switches search to Rent mode | Hero search |
| Sold | Switches search to Sold mode | Hero search |
| Advanced | Expands filter options | Hero search |
| Search (icon) | Submits search query | Hero search |
| House | Filters popular properties | Popular section |
| Villa | Filters popular properties | Popular section |
| Office | Filters popular properties | Popular section |
| Apartments | Filters popular properties | Popular section |
| Learn More | Navigates to more info | Selling section |
| See More | Navigates to more content | Selling CTA section |
| Subscribe (icon) | Submits newsletter form | Footer |
| Register Now | Navigates to registration | Dream House CTA |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Search Input | text | "Search Products for Buy" | None visible |
| Newsletter Email | email | "Your Email" | Email format |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | Multiple home versions | Header navigation |
| Listing Menu | Grid, Map, List options | Header navigation |
| Property Menu | Property pages | Header navigation |
| Blog Menu | Blog layouts | Header navigation |
| Pages Menu | Additional pages | Header navigation |

### Tabs

| Tab Group | Options | Default |
|-----------|---------|---------|
| Search Type | Buy, Rent, Sold | Buy |
| Property Category | House, Villa, Office, Apartments | House |

### Carousel Controls

| Carousel | Navigation Type |
|----------|-----------------|
| Cities | Pagination buttons (〈 〉) |
| Apartment Types | Arrow buttons |
| Testimonials | Arrow buttons |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Hero:** Split layout (video left, search right)
- **Quick Categories:** Horizontal button row
- **Cities:** Carousel with 4+ cards visible
- **Popular Properties:** 3-column grid (6 cards)
- **Selling Options:** Two-column layout
- **Apartment Types:** Horizontal carousel with images
- **Agents:** Two-column layout with decorative elements
- **Testimonials:** Horizontal carousel, 4 cards visible
- **Blog:** Three-column grid
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Hero:** Stacked layout
- **Quick Categories:** Wrapped button row
- **Cities:** Fewer visible cards
- **Popular Properties:** 2-column grid
- **Selling Options:** Stacked layout
- **Apartment Types:** Carousel with fewer visible cards
- **Agents:** Stacked layout
- **Testimonials:** 2-3 cards visible
- **Blog:** 2-column grid
- **Footer:** Reduced columns, stacked sections

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Hero:** Full-width, stacked content
- **Quick Categories:** Wrapped or stacked
- **Cities:** Single card visible, horizontal scroll
- **Popular Properties:** Single column grid
- **Selling Options:** Single column stacked
- **Apartment Types:** Single card visible, horizontal scroll
- **Agents:** Single column stacked
- **Testimonials:** Single card visible, horizontal scroll
- **Blog:** Single column stacked
- **Footer:** Single column stacked

---

## Data Models

### Property Data Model

```typescript
interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
  featured: boolean;
  images: string[];
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
  category: 'House' | 'Villa' | 'Office' | 'Apartments';
}
```

### Agent Data Model

```typescript
interface Agent {
  id: string;
  name: string;
  image: string;
  role: string;
}
```

### City Data Model

```typescript
interface City {
  id: string;
  name: string;
  slug: string;
  image: string;
  propertyCount: number;
}
```

### Apartment Type Data Model

```typescript
interface ApartmentType {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
}
```

---

## Key Differences from Other Home Pages

| Feature | Home v1 | Home v2 | Home v3 | Home v4 |
|---------|---------|---------|---------|---------|
| Hero Design | Full-width background | Compact search | Image gallery | Video + search |
| Quick Categories | Not present | Not present | Not present | Present (below hero) |
| Property Filter | For Rent/Sale tabs | Not present | For Rent/Sale tabs | Category tabs |
| Apartment Types | Icon cards | Icon cards | Icon cards | Image cards |
| Agents Section | Not present | Agent carousel | Agent CTA banner | Agent showcase |
| Selling CTA | Image gallery | Statistics | Inquiry form | Feature list |
| Footer Design | Standard | Standard | Standard | With social links |

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images
- Screen reader compatible carousel navigation
- Video button accessible via keyboard

---

## Performance Considerations

- Lazy loading for below-the-fold images
- Video thumbnail optimization
- Optimized carousel rendering
- Counter animation with requestAnimationFrame
- Debounced search input
- Memoized property cards for re-render optimization
- Image placeholder/skeleton during load
- Infinite scroll for logo marquee (CSS animation)

---

## Screenshot Reference

![Home v4 Screenshot](./home-v4-screenshot.png)

---

## Notes

- Video section uses thumbnail images with play button overlay
- Quick category links provide instant navigation to property types
- Property cards show price without "/mo" suffix
- Apartment type cards use images instead of icons
- Agents section includes decorative shape elements
- Multiple "selling option" sections with different layouts
- Footer includes full physical address
- Social links positioned separately from copyright

---

## Technical Implementation

### Dependencies Required

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "bootstrap": "^5.3.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "aos": "^2.3.4",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0"
  }
}
```

### Animation Specifications

| Animation Type | Duration | Easing | Usage |
|----------------|----------|--------|-------|
| fade-up | 1200ms | ease | Hero sections, cards |
| fade-left | 1200ms | ease | Side content |
| fade-right | 1200ms | ease | Side content |
| zoom-in | 500ms | ease | Image hover |

### CSS Classes Reference

| Class | Purpose | CSS Properties |
|-------|---------|----------------|
| .aos-init | AOS initialization | opacity: 0 |
| .aos-animate | AOS animated | opacity: 1, transform: none |
| .swiper | Carousel container | overflow: hidden |
| .btn-thm | Theme button | bg: rgb(235, 103, 83), radius: 12px |

### Theme Colors

```css
--color-primary: #e33e3e;
--color-primary-computed: rgb(235, 103, 83);
--color-dark: #041e42;
--color-white: #ffffff;
```

### Responsive Behavior

| Breakpoint | Grid Columns | Header Style |
|------------|--------------|--------------|
| > 1200px | 3-4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Video-centric hero with thumbnail preview
- Quick category links below hero
- Category tabs (House/Villa/Office/Apartments)
- Apartment types with images (not icons)
- Exclusive agents showcase with decorative shapes
- Multiple selling option sections
- Footer with full physical address


---

## GSAP Animation Analysis

### Library Detection

| Library | Detected | Usage |
|---------|----------|-------|
| GSAP | ❌ No | Not present |
| AOS (Animate On Scroll) | ✅ Yes | Scroll animations |
| Swiper | ✅ Yes | Carousels |
| Emotion CSS | ✅ Yes | CSS-in-JS |

### AOS Animation Statistics

**Total AOS Animations:** 15

**Animation Types:** fade-up: 11, fade-left: 2, fade-right: 1, fade: 1

**Delays Used:** 0, 100, 200, 300ms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 11 elements
data-aos="fade-left"  // 2 elements
data-aos="fade-right" // 1 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 40 |
| Swiper Slides | Multiple |

### GSAP Implementation Recommendations

If GSAP were to be implemented for this page, recommended use cases:

1. **Hero Section**: Timeline animation for staggered text reveal
2. **Property Cards**: ScrollTrigger for sequential card entrance
3. **Statistics**: Animated number counters (CounterUp alternative)
4. **Parallax**: Background parallax on scroll
5. **SVG Icons**: Morphing animations for property type icons

```javascript
// Example GSAP Implementation
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.timeline()
  .from('.hero-title', { y: 50, opacity: 0, duration: 1 })
  .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5');

// Property cards stagger
gsap.utils.toArray('.property-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1
  });
});
```

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### Package.json Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.12.0"
  }
}
```

### GSAP Registration and Setup

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Hero Section with Video Animations

```javascript
// Hero section timeline - video-centric design
const heroTL = gsap.timeline();

heroTL
  .from('.hero-heading', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-subtext', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.video-thumbnail', { 
    opacity: 0, 
    scale: 0.9, 
    duration: 0.6 
  }, '-=0.3');

// Video play button pulse
gsap.to('.video-play-button', {
  scale: 1.1,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});
```

### Quick Category Links Animations

```javascript
// Category links stagger
gsap.from('.quick-category-link', {
  scrollTrigger: {
    trigger: '.quick-categories',
    start: 'top 85%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Featured Listings Section Animations

```javascript
// Property cards stagger animation
gsap.from('.property-card', {
  scrollTrigger: {
    trigger: '.featured-listings',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 60,
  stagger: 0.1,
  duration: 0.7,
  ease: 'power3.out'
});

// Property card hover effects
gsap.utils.toArray('.property-card').forEach(card => {
  const image = card.querySelector('.property-image');
  const actions = card.querySelector('.property-actions');
  
  gsap.set(actions, { opacity: 0, y: 10 });
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.05, duration: 0.3 });
    gsap.to(actions, { opacity: 1, y: 0, duration: 0.3 });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.3 });
    gsap.to(actions, { opacity: 0, y: 10, duration: 0.3 });
  });
});
```

### Apartment Types with Images Animations

```javascript
// Apartment type cards entrance (with images)
gsap.from('.apartment-card', {
  scrollTrigger: {
    trigger: '.apartment-types',
    start: 'top 80%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power3.out'
});

// Image zoom on hover
gsap.utils.toArray('.apartment-card').forEach(card => {
  const image = card.querySelector('.apartment-image');
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.1, duration: 0.3 });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.3 });
  });
});
```

### Exclusive Agents Section Animations

```javascript
// Agent cards stagger entrance
gsap.from('.agent-card', {
  scrollTrigger: {
    trigger: '.agents-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power3.out'
});

// Decorative shapes animation
gsap.to('.decorative-shape', {
  scrollTrigger: {
    trigger: '.agents-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  },
  rotation: 360,
  ease: 'none'
});
```

### Complete Implementation Example

```javascript
// components/animations/GSAPAnimations.tsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    // Hero animation
    const heroTL = gsap.timeline();
    heroTL
      .from('.hero-heading', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.hero-subtext', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.video-thumbnail', { opacity: 0, scale: 0.9, duration: 0.6 }, '-=0.3');

    // Quick category links
    gsap.from('.quick-category-link', {
      scrollTrigger: {
        trigger: '.quick-categories',
        start: 'top 85%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Featured listings
    gsap.from('.property-card', {
      scrollTrigger: {
        trigger: '.featured-listings',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Apartment types
    gsap.from('.apartment-card', {
      scrollTrigger: {
        trigger: '.apartment-types',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    });

    // Agents
    gsap.from('.agent-card', {
      scrollTrigger: {
        trigger: '.agents-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
```


---

## Theme Variables & Styling

### Primary Color Palette

```css
/* Theme Colors */
--color-primary: #e33e3e;
--color-primary-computed: rgb(235, 103, 83);
--color-dark: #041e42;
--color-white: #ffffff;
--color-light-bg: #f3f3f3;
--color-border: #efefef;

/* HSL Values */
--hsl-white: hsl(0, 0%, 100%);
--hsl-gray-light: hsl(0, 0%, 80%);
--hsl-gray-hover: hsl(0, 0%, 70%);
--hsl-text-dark: hsl(0, 0%, 20%);
--hsl-text-muted: hsl(0, 0%, 60%);
```

### Emotion CSS Blocks

**Total Emotion Blocks:** 30

### Header Configuration

```css
/* Header Classes */
.header-nav.nav-homepage-style.main-menu

/* Logo Variants */
.header-logo.logo1 { /* Light version */ }
.header-logo.logo2 { /* Dark version */ }
```

### Button Styling

```css
/* Theme Button */
.btn-thm {
  background-color: rgb(235, 103, 83);
  border-radius: 12px;
  color: #ffffff;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-thm:hover {
  background-color: rgb(220, 90, 70);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(235, 103, 83, 0.3);
}
```

**Theme Button Count:** 4

### Bootstrap Grid Usage

```css
/* Layout Classes */
.container { max-width: 1200px; }
.row { display: flex; flex-wrap: wrap; }
.col-* { flex: 1; padding: 0 15px; }

/* Flex Utilities */
.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-between { justify-content: space-between; }
```

### Responsive Breakpoints

| Breakpoint | Grid Columns | Header Style |
|------------|--------------|--------------|
| > 1200px | 4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Typography

```css
/* Font Families */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

/* Preloaded Fonts */
- 376dd8dc38524313-s.p.woff2
- 3e3cf2ee9aa3f174-s.p.woff2
- 7777133e901cd5ed-s.p.woff2
- 916d3686010a8de2-s.p.woff2
- 9a881e2ac07d406b-s.p.woff2
- c04551857776278f-s.p.woff2
- d869208648ca5469-s.p.woff2
```

### Spacing System

```css
/* Margin */
.mb10 { margin-bottom: 10px; }
.mb15 { margin-bottom: 15px; }
.mb20 { margin-bottom: 20px; }
.mb25 { margin-bottom: 25px; }
.mr40 { margin-right: 40px; }

/* Padding */
.pl30 { padding-left: 30px; }
.pt30 { padding-top: 30px; }
.pt45 { padding-top: 45px; }
.pb30 { padding-bottom: 30px; }
```

### Component-Specific Styles

```css
/* Property Cards */
.property-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* Featured Badge */
.featured-badge {
  background: rgb(235, 103, 83);
  color: white;
  font-size: 10px;
  padding: 4px 12px;
  border-radius: 4px;
}

/* Section Headers */
.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #041e42;
  margin-bottom: 10px;
}
```
