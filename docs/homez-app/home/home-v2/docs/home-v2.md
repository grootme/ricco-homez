# Home v2 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v2
- **Page Title:** Home v2 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v2 is an alternative landing page design for the Homez Real Estate NextJS Template. It features a compact hero section with integrated search functionality, property type categories, featured listings carousel, city exploration section, services overview with video feature, statistics counter, testimonials with tabbed navigation, and an exclusive agents showcase. The page emphasizes visual storytelling with video integration and agent profiles.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, phone number, login/register button, and add property CTA
2. **Compact Hero Section** - Search form with heading below
3. **Property Types Section** - Horizontal scrollable category cards
4. **Featured Listings Section** - Horizontal scrollable property cards with pagination
5. **Cities Section** - Horizontal scrollable city cards
6. **Services Section** - Three-column layout for Buy/Sell/Rent with video and property preview
7. **Statistics Section** - Counter display with CTA
8. **Testimonials Section** - Tabbed testimonial display
9. **Agents Section** - Horizontal scrollable agent cards
10. **Trusted Partners Section** - Logo marquee
11. **CTA/Contact Section** - Two-column layout with contact information
12. **Footer** - Multi-column layout with newsletter, links, and social media

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
- Phone Number: "📞 2 911 098 7654" (link)
- Login / Register button
- Add Property link with arrow icon
- Hamburger menu (mobile)
```

### 2. Hero Section Data

```
Search Form:
- Tab buttons: Buy (active), Rent, Sold
- Text input placeholder: "Enter Keyword for Buy"
- Property Type Dropdown: "Apartments" (default selected)
  - Options: Multiple property types
- Advanced button (expands filters)
- Search button (magnifying glass icon)

Heading: "Find Your Dream Home"
Subtext: "Let's find a home that's perfect for you"

Note: Hero has compact design with search at top, heading below
```

### 3. Property Types/Categories Data

```
Category Cards (7 items):
1. Houses
   - Icon: house icon
   - Name: "Houses"
   - Count: "22 Properties"
   
2. Apartments
   - Icon: apartment icon
   - Name: "Apartments"
   - Count: "22 Properties"
   
3. Office
   - Icon: office icon
   - Name: "Office"
   - Count: "22 Properties"
   
4. Villa
   - Icon: villa icon
   - Name: "Villa"
   - Count: "22 Properties"
   
5. Townhome
   - Icon: townhome icon
   - Name: "Townhome"
   - Count: "22 Properties"
   
6. Bungalow
   - Icon: bungalow icon
   - Name: "Bungalow"
   - Count: "22 Properties"
   
7. Loft
   - Icon: loft icon
   - Name: "Loft"
   - Count: "22 Properties"
```

### 4. Featured Listings Data

```
Section Title: "Discover Our Featured Listings"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Properties →"

Property Cards (4 visible):

Card 1:
- Image: property listing image
- Badge: "FEATURED" (highlighted)
- Price: "$14,000 / mo"
- Title: "Equestrian Family Home"
- Location: "New York City, CA, USA"
- Beds: "1 bed"
- Baths: "2 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons (favorite, compare, share)

Card 2:
- Image: property listing image
- Badge: None
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "1 bath"
- Sqft: "1300 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 3:
- Image: property listing image
- Badge: "FEATURED" (highlighted)
- Price: "$14,000 / mo"
- Title: "Equestrian Family Home"
- Location: "Texas City, CA, USA"
- Beds: "3 bed"
- Baths: "3 bath"
- Sqft: "1000 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 4:
- Image: property listing image
- Badge: None
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"
- Beds: "4 bed"
- Baths: "5 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Navigation: Left/Right pagination buttons (〈 〉) - left disabled at start
```

### 5. Cities Section Data

```
Section Title: "Explore Cities"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

City Cards (6 items in carousel):

Card 1:
- Image: city listing image
- City Name: "Los Angeles"
- Property Count: "12 Properties"

Card 2:
- Image: city listing image
- City Name: "Miami"
- Property Count: "8 Properties"

Card 3:
- Image: city listing image
- City Name: "New York"
- Property Count: "15 Properties"

Card 4:
- Image: city listing image
- City Name: "Chicago"
- Property Count: "10 Properties"

Card 5:
- Image: city listing image
- City Name: "Los Angeles" (duplicate for carousel)
- Property Count: "12 Properties"

Card 6:
- Image: city listing image
- City Name: "Miami" (duplicate for carousel)
- Property Count: "8 Properties"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 6. Services Section Data

```
Section Title: "See How Realton Can Help"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Service Cards (3 items):
1. Buy a property
   - Icon: buy icon
   - Title: "Buy a property"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
   - CTA Link: "Find a home →"
   
2. Sell a property
   - Icon: sell icon
   - Title: "Sell a property"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
   - CTA Link: "Place an ad →"
   
3. Rent a property
   - Icon: rent icon
   - Title: "Rent a property"
   - Description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."
   - CTA Link: "Find a rental →"

Video Feature Section:
- Images: 2 about images
- Play Button: Large play icon
- Label: "Watch Video"
- Featured Property Card:
  - Title: "Equestrian Family Home"
  - Location: "New York City, CA, USA"
  - Beds: "1 bed"
  - Baths: "2 bath"
  - Sqft: "1200 sqft"
  - CTA: "View House →"
```

### 7. Statistics Section Data

```
Section Title: "With Us Help You Find Your Dream Home"
Section Subtitle: "As the complexity of buildings to increase, the field of architecture."

Statistics (3 items):
- Counter 1: "0" (animated counter)
  - Label: "Stores around the world"
- Counter 2: "0" (animated counter)
  - Label: "Stores around the world"
- Counter 3: "0" (animated counter)
  - Label: "Stores around the world"

CTA Button: "See More →"
```

### 8. Testimonials Section Data

```
Section Title: "Testimonials"
Section Subtitle: "10,000+ unique online course list designs"

Testimonial Display:
- Quote Mark: """
- Testimonial Text: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity."
- Author Name: "Ella Johnson"
- Author Title: "UX Designer, Google"

Tab Navigation (5 tabs):
- Tab 1 (default)
- Tab 2 (selected)
- Tab 3
- Tab 4
- Tab 5
```

### 9. Agents Section Data

```
Section Title: "Our Exclusive Agetns" (Note: typo in original)
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Agent Cards (7 items in carousel):

Card 1:
- Image: agent team photo
- Name: "Arlene McCoy"
- Role: "Broker"

Card 2:
- Image: agent team photo
- Name: "Esther Howard"
- Role: "Broker"

Card 3:
- Image: agent team photo
- Name: "Cody Fisher"
- Role: "Broker"

Card 4:
- Image: agent team photo
- Name: "Bessie Cooper"
- Role: "Broker"

Card 5:
- Image: agent team photo
- Name: "Guy Hawkins"
- Role: "Broker"

Card 6:
- Image: agent team photo
- Name: "Arlene McCoy" (duplicate for carousel)
- Role: "Broker"

Card 7:
- Image: agent team photo
- Name: "Esther Howard" (duplicate for carousel)
- Role: "Broker"

Navigation: Left/Right arrow buttons
```

### 10. Trusted Partners Section Data

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

### 11. CTA/Contact Section Data

```
Decorative Elements: 3 element/spinner images

Main CTA Block:
- Heading: "Start Listing or Buying a Property With Realton"
- Subtitle: "Talk to our experts or Browse through more properties."
- CTA Button: "Learn More →"

Contact Info Block:
- Icon: contact icon
- Label: "Total Free Customer Care"
- Phone: "+(0) 123 050 945 02" (link)

- Label: "Need Live Support?"
- Email: "hi@homez.com" (link)

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

Social Media Section:
- Title: "Follow us on social media"
- Social Links:
  - Facebook (icon)
  - Twitter (icon)
  - Instagram (icon)
  - LinkedIn (icon)
```

### 12. Footer Data

```
Newsletter Section:
- Title: "Keep Yourself Up to Date"
- Email Input: placeholder "Your Email"
- Subscribe Button: "Subscribe"

Popular Search Links:
- Title: "Popular Search"
- Links:
  - "Apartment for Rent"
  - "Apartment Low to Hide"
  - "Offices for Buy"
  - "Offices for Rent"

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

Discover Links:
- Title: "Discover"
- Links:
  - "Miami"
  - "Los Angeles"
  - "Chicago"
  - "New York"

Copyright Section:
- Text: "© Homez 2024"
- Author Link: "ib-themes"
- Text: "- All rights reserved"

Legal Links:
- "Privacy"
- "Terms"
- "Sitemap"
```

---

## Component Breakdown

### Navigation Components

| Component | Description | Location |
|-----------|-------------|----------|
| HeaderLogo | Site logo linking to homepage | Top-left of header |
| MainNavigation | Primary navigation menu | Center of header |
| DropdownMenu | Expandable submenu container | Within navigation items |
| PhoneNumber | Click-to-call phone link | Right side of header |
| LoginButton | Authentication trigger button | Right side of header |
| AddPropertyButton | CTA for property submission | Right side of header |
| HamburgerMenu | Mobile menu toggle | Right side (mobile) |

### Hero Components

| Component | Description | Location |
|-----------|-------------|----------|
| SearchFormContainer | Compact search wrapper | Top of hero |
| SearchTabs | Buy/Rent/Sold toggle buttons | Search form |
| SearchInput | Keyword input field | Search form |
| PropertyTypeDropdown | Property type selector | Search form |
| AdvancedButton | Filter expansion trigger | Search form |
| SearchButton | Form submit button | Search form |
| HeroHeading | Main promotional text | Below search |
| HeroSubtext | Supporting description | Below heading |

### Property Components

| Component | Description | Location |
|-----------|-------------|----------|
| PropertyCard | Individual listing card | Multiple sections |
| PropertyImage | Main listing photo | PropertyCard |
| PropertyBadge | "FEATURED" label overlay | PropertyCard |
| PropertyPrice | Monthly/total price display | PropertyCard |
| PropertyTitle | Listing name/link | PropertyCard |
| PropertyLocation | City, State, Country | PropertyCard |
| PropertySpecs | Beds/Baths/Sqft row | PropertyCard |
| PropertyStatus | "For Rent"/"For Sale" label | PropertyCard |
| PropertyActions | Favorite/Compare/Share icons | PropertyCard |

### Category Components

| Component | Description | Location |
|-----------|-------------|----------|
| CategoryCard | Property type card | Categories section |
| CategoryIcon | Type-specific icon | CategoryCard |
| CategoryName | Type label | CategoryCard |
| CategoryCount | Property count | CategoryCard |

### City Components

| Component | Description | Location |
|-----------|-------------|----------|
| CityCard | City listing card | Cities section |
| CityImage | City photo background | CityCard |
| CityName | City label | CityCard |
| CityCount | Property count | CityCard |

### Service Components

| Component | Description | Location |
|-----------|-------------|----------|
| ServiceCard | Buy/Sell/Rent card | Services section |
| ServiceIcon | Action-specific icon | ServiceCard |
| ServiceTitle | Action label | ServiceCard |
| ServiceDescription | Brief explanation | ServiceCard |
| ServiceLink | CTA link | ServiceCard |
| VideoPlayer | Video play button and overlay | Services section |
| VideoThumbnail | Preview image for video | VideoPlayer |
| FeaturedPropertyCard | Property preview in services | Services section |

### Statistics Components

| Component | Description | Location |
|-----------|-------------|----------|
| StatCounter | Animated number counter | Statistics section |
| StatLabel | Counter description | StatCounter |

### Testimonial Components

| Component | Description | Location |
|-----------|-------------|----------|
| TestimonialContainer | Review wrapper | Testimonials section |
| TestimonialQuote | Opening quote mark | TestimonialContainer |
| TestimonialText | Full review text | TestimonialContainer |
| AuthorName | Reviewer name | TestimonialContainer |
| AuthorTitle | Reviewer role/company | TestimonialContainer |
| TestimonialTabs | Tab navigation for multiple reviews | TestimonialContainer |

### Agent Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgentCard | Agent profile card | Agents section |
| AgentImage | Agent profile photo | AgentCard |
| AgentName | Agent full name | AgentCard |
| AgentRole | Agent job title | AgentCard |

### Footer Components

| Component | Description | Location |
|-----------|-------------|----------|
| NewsletterForm | Email subscription | Footer left |
| FooterLinkGroup | Link category group | Footer columns |
| SocialLinks | Social media icons | Footer contact |
| AppStoreLinks | App download badges | Footer contact |
| Copyright | Legal text | Footer bottom |

---

## Interactive Elements

### Buttons

| Button | Action | Location |
|--------|--------|----------|
| Login / Register | Opens authentication modal | Header |
| Add Property | Navigates to property submission | Header |
| Buy | Switches search to Buy mode | Hero search |
| Rent | Switches search to Rent mode | Hero search |
| Sold | Switches search to Sold mode | Hero search |
| Advanced | Expands filter options | Hero search |
| Search (icon) | Submits search query | Hero search |
| Play Video | Opens video modal | Services section |
| View House | Navigates to property detail | Featured property |
| Subscribe | Submits newsletter form | Footer |
| Learn More | Navigates to more info | CTA section |
| See More | Navigates to more content | Statistics section |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Search Input | text | "Enter Keyword for Buy" | None visible |
| Property Type | select/dropdown | "Apartments" (default) | Required |
| Email Input | email | "Your Email" | Email format |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | Multiple home versions | Header navigation |
| Listing Menu | Grid, Map, List options | Header navigation |
| Property Menu | Property pages | Header navigation |
| Blog Menu | Blog layouts | Header navigation |
| Pages Menu | Additional pages | Header navigation |
| Property Type | Multiple property types | Hero search |

### Tabs

| Tab Group | Options | Default |
|-----------|---------|---------|
| Search Type | Buy, Rent, Sold | Buy |
| Testimonials | 5 tabs (individual reviews) | Tab 2 |

### Carousel Controls

| Carousel | Navigation Type |
|----------|-----------------|
| Categories | Arrow buttons (left disabled at start) |
| Featured Listings | Pagination buttons (〈 〉) |
| Cities | Arrow buttons (left disabled at start) |
| Agents | Arrow buttons |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, phone number visible, hamburger menu hidden
- **Hero:** Compact design with search at top, heading below
- **Categories:** Horizontal scroll carousel
- **Featured Listings:** Horizontal carousel, 4 cards visible
- **Cities:** Horizontal carousel, 4 cards visible
- **Services:** Three-column grid + video section side-by-side
- **Statistics:** Three-column counters
- **Testimonials:** Full-width with tab navigation
- **Agents:** Horizontal carousel, 5+ cards visible
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Hero:** Stacked layout
- **Categories:** Carousel with fewer visible cards
- **Featured Listings:** Fewer visible cards
- **Cities:** 2-3 cards visible
- **Services:** Stacked layout, video below cards
- **Statistics:** Reduced columns or stacked
- **Testimonials:** Full-width display
- **Agents:** 2-3 cards visible
- **Footer:** Reduced columns, stacked sections

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Hero:** Full-width, stacked content
- **Categories:** Single card visible, horizontal scroll
- **Featured Listings:** Single card visible, horizontal scroll
- **Cities:** Single card visible, horizontal scroll
- **Services:** Single column stacked
- **Statistics:** Single column stacked
- **Testimonials:** Full-width display
- **Agents:** Single card visible, horizontal scroll
- **Footer:** Single column stacked, all sections collapsed

---

## Data Models

### Property Data Model

```typescript
interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceUnit: 'mo' | 'total';
  location: {
    city: string;
    state: string;
    country: string;
  };
  beds: number;
  baths: number;
  sqft: number;
  status: 'For Rent' | 'For Sale' | 'Sold';
  featured: boolean;
  images: string[];
  actions: {
    favorite: boolean;
    compare: boolean;
    share: boolean;
  };
}
```

### Agent Data Model

```typescript
interface Agent {
  id: string;
  name: string;
  slug: string;
  role: string;
  image: string;
  contact?: {
    phone?: string;
    email?: string;
  };
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

### Testimonial Data Model

```typescript
interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}
```

### Statistics Data Model

```typescript
interface Statistic {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}
```

---

## Key Differences from Home v1

| Feature | Home v1 | Home v2 |
|---------|---------|---------|
| Hero Design | Full-width with background image | Compact with search above heading |
| Search Input | Location-based placeholder | Keyword-based placeholder |
| Property Type Filter | Not in hero | Dropdown in hero |
| Phone in Header | Not present | "📞 2 911 098 7654" visible |
| Video Feature | Not present | Video player with featured property |
| Statistics Section | Not present | Counter display |
| Testimonials | Carousel with cards | Tabbed single display |
| Agents Section | Not present | Agent cards carousel |
| Blog Section | Present | Not present |
| Selling Options CTA | Image gallery with feature list | Statistics with counters |

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images
- Screen reader compatible carousel navigation
- Tab panel accessibility for testimonials

---

## Performance Considerations

- Lazy loading for below-the-fold images
- Optimized carousel rendering
- Video thumbnail optimization
- Counter animation with requestAnimationFrame
- Debounced search input
- Memoized property cards for re-render optimization

---

## Screenshot Reference

![Home v2 Screenshot](./home-v2-screenshot.png)

---

## Notes

- Video play button triggers modal or inline video playback
- Testimonials use tab navigation instead of carousel
- Agent cards link to agent profile pages
- Statistics counters animate on scroll into view
- Property type dropdown in hero provides quick filtering
- Phone number in header is click-to-call enabled

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
| > 1200px | 3-4 columns | Full horizontal + phone |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Compact hero with search above heading
- Keyword-based search (not location-based)
- Property type dropdown in hero search
- Video player with featured property preview
- Animated statistics counters
- Tabbed testimonials (vs carousel)
- Agent cards carousel
- Phone number visible in header


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

**Total AOS Animations:** 18

**Animation Types:** fade-up: 16, fade-left: 1, fade: 1

**Delays Used:** 100, 150, 200, 250, 300, 500ms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 16 elements
data-aos="fade-left"  // 1 elements
data-aos="fade-right" // 0 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 46 |
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

### Hero Section Entrance Animations

```javascript
// Hero section timeline - compact design
const heroTL = gsap.timeline();

heroTL
  .from('.hero-search-form', { 
    opacity: 0, 
    y: -30, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-heading', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.hero-subtext', { 
    opacity: 0, 
    y: 20, 
    duration: 0.5 
  }, '-=0.3');
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

### Video Section Animations

```javascript
// Video thumbnail entrance
gsap.from('.video-thumbnail', {
  scrollTrigger: {
    trigger: '.video-section',
    start: 'top 75%',
  },
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  ease: 'power2.out'
});

// Play button pulse
gsap.to('.video-play-button', {
  scale: 1.1,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});

// Featured property reveal
gsap.from('.featured-property-card', {
  scrollTrigger: {
    trigger: '.video-section',
    start: 'top 70%',
  },
  opacity: 0,
  x: 50,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Statistics Counter Animations

```javascript
// Animated counters for statistics
gsap.utils.toArray('.stat-counter').forEach(counter => {
  const target = parseInt(counter.dataset.value);
  
  gsap.from(counter, {
    scrollTrigger: {
      trigger: counter,
      start: 'top 85%',
    },
    textContent: 0,
    duration: 2,
    ease: 'power2.out',
    snap: { textContent: 1 },
    onUpdate: function() {
      counter.textContent = Math.floor(this.targets()[0].textContent).toLocaleString();
    }
  });
});

// Statistics section reveal
gsap.from('.statistics-section', {
  scrollTrigger: {
    trigger: '.statistics-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power2.out'
});
```

### Agent Cards Animations

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

// Agent card hover effect
gsap.utils.toArray('.agent-card').forEach(card => {
  const image = card.querySelector('.agent-image');
  
  card.addEventListener('mouseenter', () => {
    gsap.to(image, { 
      scale: 1.1, 
      duration: 0.3, 
      ease: 'power2.out' 
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.3 });
  });
});
```

### CTA Section Animations

```javascript
// CTA section reveal
gsap.from('.cta-content', {
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power2.out'
});

// Decorative elements parallax
gsap.to('.cta-spinner', {
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.5
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
      .from('.hero-search-form', { opacity: 0, y: -30, duration: 0.8, ease: 'power3.out' })
      .from('.hero-heading', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.hero-subtext', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3');

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

    // Video section
    gsap.from('.video-thumbnail', {
      scrollTrigger: {
        trigger: '.video-section',
        start: 'top 75%',
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Statistics counters
    gsap.utils.toArray('.stat-counter').forEach(counter => {
      gsap.from(counter, {
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
        },
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          counter.textContent = Math.floor(this.targets()[0].textContent).toLocaleString();
        }
      });
    });

    // Agent cards
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

**Total Emotion Blocks:** 60

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

**Theme Button Count:** 5

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
