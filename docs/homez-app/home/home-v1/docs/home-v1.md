# Home v1 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/
- **Page Title:** Home v1 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v1 is the primary landing page for the Homez Real Estate NextJS Template. It serves as the main entry point for users searching for properties, offering a comprehensive hero section with search functionality, property type exploration, featured listings, city-based property discovery, testimonials, and blog content. The page is designed to convert visitors into leads through prominent calls-to-action and intuitive property discovery mechanisms.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Hero Section** - Full-width banner with search functionality
3. **Property Types Section** - Horizontal scrollable category cards
4. **Services Section** - Three-column layout for Buy/Sell/Rent services
5. **Featured Listings Section** - Horizontal scrollable property cards
6. **Cities Section** - Horizontal scrollable city cards with property counts
7. **Selling Options CTA Section** - Two-column layout with image gallery
8. **Popular Properties Section** - Grid layout with tabbed navigation
9. **Testimonials Section** - Horizontal scrollable testimonial cards
10. **Blog Section** - Three-column blog post cards
11. **Trusted Partners Section** - Logo marquee
12. **CTA/Contact Section** - Two-column layout with contact information
13. **Footer** - Multi-column layout with newsletter, links, and social media

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
Pre-heading: "THE BEST WAY TO"
Main Heading: "Find Your Dream Home"
Subtext: "We've more than 745,000 apartments, place & plot."

Search Form:
- Tab buttons: Buy (active), Rent, Sold
- Text input placeholder: "Enter an address, neighborhood, city, or ZIP code for Buy"
- Advanced button (expands filters)
- Search button (magnifying glass icon)

Background: Full-width hero image with scroll indicator
```

### 3. Property Types/Categories Data

```
Section Title: "Explore Apartment Types"
Section Subtitle: "Get some Inspirations from 1800+ skills"

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

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 4. Services Section Data

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
```

### 5. Featured Listings Data

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
- Action icons: 3 action buttons (favorite, compare, share)

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
- Action icons: 3 action buttons (favorite, compare, share)

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
- Action icons: 3 action buttons (favorite, compare, share)

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 6. Properties by Cities Data

```
Section Title: "Properties by Cities"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Cities →"

City Cards (6 items in carousel):

Card 1:
- Image: city image
- City Name: "Los Angeles"
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Card 2:
- Image: city image
- City Name: "Miami"
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Card 3:
- Image: city image
- City Name: "New York"
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Card 4:
- Image: city image
- City Name: "Chicago"
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Card 5:
- Image: city image
- City Name: "Los Angeles" (duplicate for carousel)
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Card 6:
- Image: city image
- City Name: "Miami" (duplicate for carousel)
- Property Count: "12 Properties"
- CTA Link: "See All Cities →"

Navigation: Left/Right pagination buttons
```

### 7. Selling Options CTA Section Data

```
Section Title: "Let's find the right selling option for you"
Section Subtitle: "As the complexity of buildings to increase, the field of architecture"

Feature List:
- "✓ Find excellent deals"
- "✓ Friendly host & Fast support"
- "✓ List your own property"

CTA Button: "Learn More →"

Image Gallery: 4 property-related images in grid layout
```

### 8. Popular Properties Section Data

```
Section Title: "Discover Popular Properties"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Tab Navigation:
- For Rent (active)
- For Sale

Property Cards Grid (8 items):

Card 1:
- Image: property listing image
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "1 bath"
- Sqft: "1300 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 2:
- Image: property listing image
- Badge: "FEATURED"
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"
- Beds: "4 bed"
- Baths: "5 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 3:
- Image: property listing image
- Badge: "FEATURED"
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"
- Beds: "6 bed"
- Baths: "4 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 4:
- Image: property listing image
- Badge: "FEATURED"
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New York City, CA, USA"
- Beds: "4 bed"
- Baths: "4 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 5:
- Image: property listing image
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "3 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 6:
- Image: property listing image
- Badge: "FEATURED"
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"
- Beds: "1 bed"
- Baths: "2 bath"
- Sqft: "1205 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 7:
- Image: property listing image
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"
- Beds: "5 bed"
- Baths: "4 bath"
- Sqft: "1100 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

Card 8:
- Image: property listing image
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "San Diego City, CA, USA"
- Beds: "6 bed"
- Baths: "7 bath"
- Sqft: "1400 sqft"
- Status: "For Rent"
- Action icons: 3 action buttons

CTA: "See All Properties →"
```

### 9. Testimonials Section Data

```
Section Title: "People Love Living with Realton"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Testimonial Cards (4 items):

Card 1:
- Quote: """
- Title: "Great Work"
- Testimonial Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user avatar image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"

Card 2:
- Quote: """
- Title: "Great Work"
- Testimonial Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user avatar image
- Author Name: "Floyd Miles"
- Company: "Bank of America"

Card 3:
- Quote: """
- Title: "Great Work"
- Testimonial Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user avatar image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"

Card 4:
- Quote: """
- Title: "Great Work"
- Testimonial Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."
- Rating: 6 stars (⭐⭐⭐⭐⭐⭐)
- Avatar: user avatar image
- Author Name: "Floyd Miles"
- Company: "Bank of America"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 10. Blog Section Data

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

### 12. CTA/Contact Section Data

```
Main CTA Block:
- Spinner/decorative images: 2
- Heading: "Need help? Talk to our expert."
- Subtitle: "Talk to our experts or Browse through more properties."
- CTA Button: "Contact Us →"
- Phone Link: "📞 920 851 9087"

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

### 13. Footer Data

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
| LoginButton | Authentication trigger button | Right side of header |
| AddPropertyButton | CTA for property submission | Right side of header |
| HamburgerMenu | Mobile menu toggle | Right side (mobile) |

### Hero Components

| Component | Description | Location |
|-----------|-------------|----------|
| HeroBanner | Full-width background container | Top of page |
| HeroHeading | Main promotional text | Center of hero |
| SearchTabs | Buy/Rent/Sold toggle buttons | Search form |
| SearchInput | Address/location input field | Search form |
| AdvancedButton | Filter expansion trigger | Search form |
| SearchButton | Form submit button | Search form |
| ScrollIndicator | Down arrow animation | Bottom of hero |

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
| CityLink | "See All Cities" CTA | CityCard |

### Service Components

| Component | Description | Location |
|-----------|-------------|----------|
| ServiceCard | Buy/Sell/Rent card | Services section |
| ServiceIcon | Action-specific icon | ServiceCard |
| ServiceTitle | Action label | ServiceCard |
| ServiceDescription | Brief explanation | ServiceCard |
| ServiceLink | CTA link | ServiceCard |

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

### Blog Components

| Component | Description | Location |
|-----------|-------------|----------|
| BlogCard | Post preview card | Blog section |
| BlogImage | Post featured image | BlogCard |
| BlogDate | Month/Day display | BlogCard |
| BlogCategory | Category tag/link | BlogCard |
| BlogTitle | Post title/link | BlogCard |

### Carousel Components

| Component | Description | Location |
|-----------|-------------|----------|
| CarouselContainer | Scrollable wrapper | Multiple sections |
| CarouselTrack | Horizontal scroll area | CarouselContainer |
| CarouselArrow | Navigation button | Carousel sides |
| CarouselDots | Pagination indicators | CarouselContainer |

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
| For Rent | Filters popular properties | Popular section |
| For Sale | Filters popular properties | Popular section |
| Subscribe | Submits newsletter form | Footer |
| Contact Us | Navigates to contact page | CTA section |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Search Input | text | "Enter an address, neighborhood, city, or ZIP code" | None visible |
| Email Input | email | "Your Email" | Email format |

### Links

| Link Type | Count | Locations |
|-----------|-------|-----------|
| Navigation Links | 5 main + 15+ submenu | Header |
| Category Links | 7 | Categories section |
| Property Links | 12+ | Property cards |
| City Links | 6 | Cities section |
| Service Links | 3 | Services section |
| Blog Links | 3 | Blog section |
| Footer Links | 15+ | Footer columns |
| Social Links | 4 | Footer |

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
| Popular Properties | For Rent, For Sale | For Rent |

### Carousel Controls

| Carousel | Navigation Type |
|----------|-----------------|
| Categories | Arrow buttons (left disabled at start) |
| Featured Listings | Arrow buttons (left disabled at start) |
| Cities | Arrow buttons (left disabled at start) |
| Testimonials | Arrow buttons (left disabled at start) |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Hero:** Full-width with centered content
- **Categories:** Horizontal scroll carousel with visible arrows
- **Services:** Three-column grid layout
- **Featured Listings:** Horizontal carousel, 4 cards visible
- **Cities:** Horizontal carousel, 4 cards visible
- **Popular Properties:** 4-column grid (8 cards total)
- **Testimonials:** Horizontal carousel, 4 cards visible
- **Blog:** Three-column grid
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Hero:** Reduced width, search form adjusts
- **Categories:** Carousel with fewer visible cards
- **Services:** Three-column or stacked layout
- **Featured Listings:** Fewer visible cards
- **Cities:** 2-3 cards visible
- **Popular Properties:** 2-3 column grid
- **Testimonials:** 2-3 cards visible
- **Blog:** 2-column grid or stacked
- **Footer:** Reduced columns, stacked sections

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Hero:** Full-width, stacked content, simplified search
- **Categories:** Single card visible, horizontal scroll
- **Services:** Single column stacked
- **Featured Listings:** Single card visible, horizontal scroll
- **Cities:** Single card visible, horizontal scroll
- **Popular Properties:** Single column grid
- **Testimonials:** Single card visible, horizontal scroll
- **Blog:** Single column stacked
- **CTA Section:** Stacked layout
- **Footer:** Single column stacked, all sections collapsed

### Carousel Behavior

- **Arrows:** Hide when content fits container
- **Touch Support:** Swipe gestures for mobile
- **Pagination:** Dots may replace arrows on mobile
- **Infinite Scroll:** Logo marquee runs continuously

### Grid Adjustments

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Services | 3 cols | 3 cols / 1 col | 1 col |
| Popular Properties | 4 cols | 2-3 cols | 1 col |
| Blog | 3 cols | 2 cols | 1 col |
| Footer Links | 4 cols | 2 cols | 1 col |

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

### Category Data Model

```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  propertyCount: number;
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
  title: string;
  text: string;
  rating: number;
  author: {
    name: string;
    avatar: string;
    company: string;
  };
}
```

### Blog Post Data Model

```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: {
    month: string;
    day: number;
  };
  category: {
    name: string;
    slug: string;
  };
}
```

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images
- Screen reader compatible carousel navigation
- High contrast text on image backgrounds

---

## Performance Considerations

- Lazy loading for below-the-fold images
- Optimized carousel rendering (virtualization possible)
- Debounced search input
- Memoized property cards for re-render optimization
- Image placeholder/skeleton during load
- Infinite scroll for logo marquee (CSS animation)

---

## Screenshot Reference

![Home v1 Screenshot](./home-v1-screenshot.png)

---

## Notes

- All property cards have consistent hover effects
- Carousel navigation arrows disable appropriately at boundaries
- Search form mode switching preserves placeholder context
- Footer newsletter has client-side validation
- Social media links open in new tabs
- Property action icons have tooltip states
- Badge styling differs between "FEATURED" and regular listings

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

- Full-width hero banner with background image
- Location-based search input
- Horizontal carousel for categories and featured listings
- 8-property grid with For Rent/For Sale tabs
- Trusted partners logo marquee
- Comprehensive footer with newsletter subscription


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

**Total AOS Animations:** 22

**Animation Types:** fade-up: 18, fade-left: 2, fade-right: 2

**Delays Used:** 0, 100, 200, 300, 400ms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 18 elements
data-aos="fade-left"  // 2 elements
data-aos="fade-right" // 2 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 171 |
| Swiper Slides | 95 |

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
// Hero section timeline
const heroTL = gsap.timeline();

heroTL
  .from('.hero-title', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-subtitle', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.hero-search', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3')
  .from('.hero-cta', { 
    opacity: 0, 
    scale: 0.9, 
    duration: 0.5 
  }, '-=0.2')
  .from('.scroll-indicator', { 
    opacity: 0, 
    y: -20, 
    duration: 0.4 
  }, '-=0.2');
```

### Featured Properties Section Animations

```javascript
// Property cards stagger animation
gsap.from('.property-card', {
  scrollTrigger: {
    trigger: '.featured-properties',
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

### Category Icons Animations

```javascript
// Category items reveal
gsap.from('.category-item', {
  scrollTrigger: {
    trigger: '.categories-section',
    start: 'top 85%',
  },
  opacity: 0,
  y: 40,
  stagger: 0.08,
  duration: 0.5,
  ease: 'back.out(1.7)'
});

// Category icon bounce on hover
gsap.utils.toArray('.category-item').forEach(item => {
  const icon = item.querySelector('.category-icon');
  
  item.addEventListener('mouseenter', () => {
    gsap.to(icon, { 
      scale: 1.2, 
      rotation: 5, 
      duration: 0.3, 
      ease: 'back.out(1.7)' 
    });
  });
  
  item.addEventListener('mouseleave', () => {
    gsap.to(icon, { 
      scale: 1, 
      rotation: 0, 
      duration: 0.3 
    });
  });
});
```

### Testimonial Slider Animations

```javascript
// Testimonials parallax background
gsap.to('.testimonial-bg', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  },
  y: -100,
  ease: 'none'
});

// Testimonial cards entrance
gsap.from('.testimonial-card', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 75%',
  },
  opacity: 0,
  x: 50,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out'
});

// Star rating animation
gsap.from('.star-rating', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 70%',
  },
  scale: 0,
  stagger: 0.05,
  duration: 0.3,
  ease: 'back.out(1.7)'
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

// CTA button pulse effect
gsap.to('.cta-button', {
  scale: 1.05,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
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

### Parallax Effects

```javascript
// Hero background parallax
gsap.to('.hero-background', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: 200,
  ease: 'none'
});

// Section backgrounds parallax
gsap.utils.toArray('.parallax-section').forEach(section => {
  gsap.to(section.querySelector('.parallax-bg'), {
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    y: -50,
    ease: 'none'
  });
});
```

### Scroll-Triggered Section Reveals

```javascript
// Generic section reveal utility
const revealSections = (selector, options = {}) => {
  gsap.utils.toArray(selector).forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: options.start || 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: options.y || 50,
      duration: options.duration || 0.8,
      ease: 'power2.out'
    });
  });
};

// Apply to sections
revealSections('.services-section', { y: 40 });
revealSections('.cities-section', { y: 60, duration: 1 });
revealSections('.blog-section', { y: 50 });
```

### Number Counter Animation

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
      .from('.hero-title', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.hero-subtitle', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.hero-search', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

    // Featured properties
    gsap.from('.property-card', {
      scrollTrigger: {
        trigger: '.featured-properties',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Categories
    gsap.from('.category-item', {
      scrollTrigger: {
        trigger: '.categories-section',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });

    // Testimonials parallax
    gsap.to('.testimonial-bg', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      ease: 'none'
    });

    // CTA reveal
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

**Theme Button Count:** 7

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
