# Home v5 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v5
- **Page Title:** Home v5 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v5 is a slider-centric landing page for the Homez Real Estate NextJS Template. The page features a prominent hero section with property slides and thumbnail navigation, an advanced search form with multiple filter fields, featured listings carousel, city exploration grid, services section, buy/sell CTA banner, testimonials carousel, best deals grid with filtering, blog section, and newsletter subscription. The design emphasizes property showcases with interactive slider elements.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Hero Section** - Full-width property slider with thumbnails and search form
3. **Featured Listings Section** - Horizontal carousel
4. **Apartment Types/Cities Section** - Grid layout of city cards
5. **Services Section** - Three-column layout for Buy/Sell/Rent
6. **Properties by Cities Section** - Horizontal carousel
7. **Buy or Sell CTA Section** - Full-width banner
8. **Testimonials Section** - Horizontal carousel
9. **Best Deals Section** - Grid layout with tabbed filtering
10. **Blog Section** - Three-column blog post cards
11. **Trusted Partners Section** - Logo marquee
12. **Newsletter Section** - Full-width subscription banner
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
Property Slides (4 items):

Slide 1:
- Price: "$986,00"
- Title: "Studio on Grand Avenue"
- Specs: "32 Beds - 91 Baths - 1500 sq ft"
- CTA: "View Details →"

Slide 2:
- Price: "$986,00"
- Title: "Studio on Grand Avenue"
- Specs: "32 Beds - 91 Baths - 1500 sq ft"
- CTA: "View Details →"

Slide 3:
- Price: "$986,00"
- Title: "Studio on Grand Avenue"
- Specs: "32 Beds - 91 Baths - 1500 sq ft"
- CTA: "View Details →"

Slide 4:
- Price: "$986,00"
- Title: "Studio on Grand Avenue"
- Specs: "32 Beds - 91 Baths - 1500 sq ft"
- CTA: "View Details →"

Thumbnail Navigation (4 clickable images):
- thumb image 1
- thumb image 2
- thumb image 3
- thumb image 4

Search Form:
- Tab buttons: Buy (active), Rent, Sold
- Search field:
  - Label: "Search"
  - Placeholder: "Enter Keyword for Buy"
- Looking For field:
  - Label: "Loking For" (note: typo in original)
  - Default Value: "Apartments" (dropdown)
- Location field:
  - Label: "Location"
  - Default Value: "New York" (dropdown)
- Price field:
  - Label: "Price"
  - Default Value: "$2000 - $45000" (dropdown)
- Advanced button (expands filters)
- Search button (magnifying glass icon)
```

### 3. Featured Listings Data

```
Section Title: "Discover Our Featured Listings"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Properties →"

Property Cards (4 items):

Card 1:
- Image: property listing image
- Status Badge: "FOR SALE"
- Action icons: 3 buttons (favorite, compare, share)
- Title: "Equestrian Family Home"
- Price: "$14,000 / mo"
- Beds: "1"
- Baths: "2"
- Sqft: "1200"

Card 2:
- Image: property listing image
- Status Badge: "FOR SALE"
- Featured Badge: "FEATURED"
- Action icons: 3 buttons
- Title: "Luxury villa in Rego Park"
- Price: "$82,000 / mo"
- Beds: "2"
- Baths: "1"
- Sqft: "1300"

Card 3:
- Image: property listing image
- Status Badge: "FOR SALE"
- Action icons: 3 buttons
- Title: "Equestrian Family Home"
- Price: "$14,000 / mo"
- Beds: "3"
- Baths: "3"
- Sqft: "1000"

Card 4:
- Image: property listing image
- Status Badge: "FOR SALE"
- Featured Badge: "FEATURED"
- Action icons: 3 buttons
- Title: "Luxury villa in Rego Park"
- Price: "$82,000 / mo"
- Beds: "4"
- Baths: "5"
- Sqft: "1200"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 4. Apartment Types/Cities Data

```
Section Title: "Explore Apartment Types"
Section Subtitle: "Get some Inspirations from 1800+ skills"

City Cards (6 items in grid):

Card 1:
- Image: city listing image
- City Name: "Los Angeles"
- Property Count: "12 Properties"
- CTA: "See All Cities →"

Card 2:
- Image: city listing image
- City Name: "Miami"
- Property Count: "12 Properties"
- CTA: "See All Cities →"

Card 3:
- Image: city listing image
- City Name: "New York"
- Property Count: "12 Properties"
- CTA: "See All Cities →"

Card 4:
- Image: city listing image
- City Name: "Chicago"
- Property Count: "12 Properties"
- CTA: "See All Cities →"

Card 5:
- Image: city listing image
- City Name: "Chicago"
- Property Count: "12 Properties"
- CTA: "See All Cities →"

Card 6:
- Image: city listing image
- City Name: "Chicago"
- Property Count: "12 Properties"
- CTA: "See All Cities →"
```

### 5. Services Section Data

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

### 6. Properties by Cities Data

```
Section Title: "Properties by Cities"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Cities →"

City Cards (6 items in carousel):

Card 1:
- Image: city image
- City Name: "California"
- Property Count: "12 Properties"

Card 2:
- Image: city image
- City Name: "New Jersey"
- Property Count: "12 Properties"

Card 3:
- Image: city image
- City Name: "Manhattan"
- Property Count: "12 Properties"

Card 4:
- Image: city image
- City Name: "San Diego"
- Property Count: "12 Properties"

Card 5:
- Image: city image
- City Name: "San Francisco"
- Property Count: "12 Properties"

Card 6:
- Image: city image
- City Name: "San Diego"
- Property Count: "12 Properties"

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 7. Buy or Sell CTA Section Data

```
Pre-heading: "BUY OR SELL"
Main Heading: "Looking to Buy a new property or sell an existing one? Realton provides an awesome solution!"

CTA Buttons:
- "Submit Property →"
- "Browse Properties →"
```

### 8. Testimonials Section Data

```
Section Title: "People Love Living with Realton"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Testimonial Cards (4 items):

Card 1:
- Quote: """
- Avatar: user image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."

Card 2:
- Quote: """
- Avatar: user image
- Author Name: "Floyd Miles"
- Company: "Bank of America"
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."

Card 3:
- Quote: """
- Avatar: user image
- Author Name: "Leslie Alexander"
- Company: "Nintendo"
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."

Card 4:
- Quote: """
- Avatar: user image
- Author Name: "Floyd Miles"
- Company: "Bank of America"
- Text: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs."

Navigation: Left/Right arrow buttons (left disabled at start)
```

### 9. Best Deals Section Data

```
Section Title: "Discover Our Best Deals"
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
- Action icons: 3 buttons

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
- Action icons: 3 buttons

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
- Action icons: 3 buttons

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
- Action icons: 3 buttons

Card 5:
- Image: property listing image
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "3 bath"
- Sqft: "1200 sqft"
- Status: "For Rent"
- Action icons: 3 buttons

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
- Action icons: 3 buttons

Card 7:
- Image: property listing image
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"
- Beds: "5 bed"
- Baths: "4 bath"
- Sqft: "1100 sqft"
- Status: "For Rent"
- Action icons: 3 buttons

Card 8:
- Image: property listing image
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "San Diego City, CA, USA"
- Beds: "6 bed"
- Baths: "7 bath"
- Sqft: "1400 sqft"
- Status: "For Rent"
- Action icons: 3 buttons
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

### 12. Newsletter Section Data

```
Section Title: "Subscribe Our Newsletter"
Section Subtitle: "We don't send spam so don't worry."

Form:
- Email Input: placeholder "Your Email" (required)
- Subscribe Button: "Subscribe"
```

### 13. Footer Data

```
Contact Info Block:
- Label: "Address"
- Address: "329 Queensberry Street, North Melbourne VIC 3051, Australia." (link)
- Label: "Total Free Customer Care"
- Phone: "+(0) 123 050 945 02" (link)
- Label: "Need Live Support?"
- Email: "hi@homez.com" (link)

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

Copyright Section:
- Text: "© Homez 2024"
- Author Link: "ib-themes"
- Text: "- All rights reserved"

Social Links:
- Title: "Foolow Us" (note: typo in original)
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
| PropertySlider | Main hero carousel | Hero section |
| PropertySlide | Individual slide content | PropertySlider |
| SlidePrice | Property price display | PropertySlide |
| SlideTitle | Property name | PropertySlide |
| SlideSpecs | Beds/Baths/Sqft | PropertySlide |
| ViewDetailsButton | CTA link | PropertySlide |
| ThumbnailNav | Clickable thumbnail images | Hero section |
| ThumbnailImage | Individual thumbnail | ThumbnailNav |
| SearchForm | Advanced search form | Hero section |
| SearchTabs | Buy/Rent/Sold toggle | SearchForm |
| SearchField | Keyword input | SearchForm |
| LookingForDropdown | Property type selector | SearchForm |
| LocationDropdown | Location selector | SearchForm |
| PriceDropdown | Price range selector | SearchForm |

### Property Components

| Component | Description | Location |
|-----------|-------------|----------|
| PropertyCard | Individual listing card | Multiple sections |
| PropertyImage | Main listing photo | PropertyCard |
| StatusBadge | "FOR SALE" label | PropertyCard |
| FeaturedBadge | "FEATURED" label | PropertyCard |
| PropertyPrice | Monthly/total price | PropertyCard |
| PropertyTitle | Listing name/link | PropertyCard |
| PropertyLocation | City, State, Country | PropertyCard |
| PropertySpecs | Beds/Baths/Sqft row | PropertyCard |
| PropertyStatus | "For Rent"/"For Sale" | PropertyCard |
| PropertyActions | Favorite/Compare/Share | PropertyCard |

### City Components

| Component | Description | Location |
|-----------|-------------|----------|
| CityCard | City listing card | Cities sections |
| CityImage | City photo | CityCard |
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
| AuthorAvatar | User profile photo | TestimonialCard |
| AuthorName | Reviewer name | TestimonialCard |
| AuthorCompany | Reviewer company | TestimonialCard |
| TestimonialText | Full review text | TestimonialCard |

### CTA Components

| Component | Description | Location |
|-----------|-------------|----------|
| CTABanner | Full-width container | Buy/Sell CTA section |
| CTAPreHeading | "BUY OR SELL" label | CTABanner |
| CTAHeading | Main CTA text | CTABanner |
| CTAButton | Action button | CTABanner |

### Blog Components

| Component | Description | Location |
|-----------|-------------|----------|
| BlogCard | Post preview card | Blog section |
| BlogImage | Post featured image | BlogCard |
| BlogDate | Month/Day display | BlogCard |
| BlogCategory | Category tag/link | BlogCard |
| BlogTitle | Post title/link | BlogCard |

### Newsletter Components

| Component | Description | Location |
|-----------|-------------|----------|
| NewsletterBanner | Full-width container | Newsletter section |
| NewsletterHeading | Main title | NewsletterBanner |
| NewsletterSubtext | Supporting text | NewsletterBanner |
| NewsletterForm | Email subscription | NewsletterBanner |
| EmailInput | Email field | NewsletterForm |
| SubscribeButton | Submit button | NewsletterForm |

### Footer Components

| Component | Description | Location |
|-----------|-------------|----------|
| ContactInfo | Address/phone/email block | Footer |
| FooterLinkGroup | Link category group | Footer columns |
| AppStoreLinks | App download badges | Footer |
| SocialLinks | Social media icons | Footer |
| Copyright | Legal text | Footer bottom |

---

## Interactive Elements

### Buttons

| Button | Action | Location |
|--------|--------|----------|
| Login / Register | Opens authentication modal | Header |
| Add Property | Navigates to property submission | Header |
| View Details | Navigates to property detail | Hero slider |
| Buy | Switches search to Buy mode | Hero search |
| Rent | Switches search to Rent mode | Hero search |
| Sold | Switches search to Sold mode | Hero search |
| Advanced | Expands filter options | Hero search |
| Search (icon) | Submits search query | Hero search |
| For Rent | Filters best deals | Best Deals section |
| For Sale | Filters best deals | Best Deals section |
| Subscribe | Submits newsletter form | Newsletter section |
| Submit Property | Navigates to property submission | Buy/Sell CTA |
| Browse Properties | Navigates to listings | Buy/Sell CTA |

### Form Inputs

| Input | Type | Placeholder/Default | Validation |
|-------|------|---------------------|------------|
| Search | text | "Enter Keyword for Buy" | None visible |
| Looking For | select/dropdown | "Apartments" | Required |
| Location | select/dropdown | "New York" | Required |
| Price | select/dropdown | "$2000 - $45000" | None visible |
| Newsletter Email | email | "Your Email" | Required |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | Multiple home versions | Header navigation |
| Listing Menu | Grid, Map, List options | Header navigation |
| Property Menu | Property pages | Header navigation |
| Blog Menu | Blog layouts | Header navigation |
| Pages Menu | Additional pages | Header navigation |
| Looking For | Property type options | Hero search |
| Location | City options | Hero search |
| Price | Price range options | Hero search |

### Tabs

| Tab Group | Options | Default |
|-----------|---------|---------|
| Search Type | Buy, Rent, Sold | Buy |
| Best Deals | For Rent, For Sale | For Rent |

### Carousel Controls

| Carousel | Navigation Type |
|----------|-----------------|
| Hero Slider | Thumbnail navigation |
| Featured Listings | Arrow buttons |
| Properties by Cities | Arrow buttons |
| Testimonials | Arrow buttons |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Hero:** Full-width slider with thumbnail navigation
- **Search Form:** All fields visible with labels
- **Featured Listings:** Horizontal carousel, 4 cards visible
- **Cities Grid:** 3-column grid
- **Services:** Three-column layout
- **Properties by Cities:** Horizontal carousel
- **Testimonials:** Horizontal carousel, 4 cards visible
- **Best Deals:** 4-column grid (8 cards)
- **Blog:** Three-column grid
- **Newsletter:** Full-width banner
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Hero:** Slider with reduced thumbnail size
- **Search Form:** Stacked layout
- **Featured Listings:** Fewer visible cards
- **Cities Grid:** 2-column grid
- **Services:** Three-column or stacked layout
- **Properties by Cities:** Fewer visible cards
- **Testimonials:** 2-3 cards visible
- **Best Deals:** 2-3 column grid
- **Blog:** 2-column grid
- **Newsletter:** Full-width
- **Footer:** Reduced columns

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Hero:** Slider with hidden thumbnails or dots
- **Search Form:** Single column stacked
- **Featured Listings:** Single card visible, horizontal scroll
- **Cities Grid:** Single column
- **Services:** Single column stacked
- **Properties by Cities:** Single card visible
- **Testimonials:** Single card visible
- **Best Deals:** Single column grid
- **Blog:** Single column stacked
- **Newsletter:** Full-width stacked
- **Footer:** Single column stacked

---

## Data Models

### Property Slide Data Model

```typescript
interface PropertySlide {
  id: string;
  price: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  thumbnail: string;
}
```

### Search Form Data Model

```typescript
interface SearchFormData {
  searchType: 'Buy' | 'Rent' | 'Sold';
  keyword: string;
  lookingFor: string;
  location: string;
  priceRange: {
    min: number;
    max: number;
  };
}
```

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

---

## Key Differences from Other Home Pages

| Feature | Home v1 | Home v2 | Home v3 | Home v4 | Home v5 |
|---------|---------|---------|---------|---------|---------|
| Hero Design | Background image | Compact search | Image gallery | Video + search | Property slider |
| Search Form | Basic | With dropdown | Basic | Basic | Advanced (4 fields) |
| Thumbnail Nav | Not present | Not present | Not present | Not present | Present |
| Cities Section | Carousel | Carousel | Grid | Carousel | Grid + Carousel |
| Services | Cards | Cards + video | Image + features | Cards | Cards |
| Testimonials | Carousel with ratings | Tabbed | With progress | Carousel | Carousel (simplified) |
| Newsletter | In footer | In footer | In footer | In footer | Full-width banner |
| Status Badge | Not present | Not present | Not present | Not present | "FOR SALE" label |

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images
- Screen reader compatible carousel navigation
- Thumbnail navigation accessible via keyboard
- Form labels properly associated with inputs
- Required field indicators

---

## Performance Considerations

- Lazy loading for below-the-fold images
- Slider preloading for smooth transitions
- Optimized carousel rendering
- Debounced search input
- Memoized property cards for re-render optimization
- Image placeholder/skeleton during load
- Infinite scroll for logo marquee (CSS animation)
- Thumbnail lazy loading

---

## Screenshot Reference

![Home v5 Screenshot](./home-v5-screenshot.png)

---

## Notes

- Hero uses property slider with clickable thumbnail navigation
- Search form includes 4 filter fields (Search, Looking For, Location, Price)
- Property cards show "FOR SALE" status badge prominently
- Testimonials display without star ratings (simplified version)
- Newsletter section is full-width banner, not in footer
- Two separate cities sections with different layouts
- "Loking For" and "Foolow Us" typos present in original
- Best Deals section uses same layout as Popular Properties in other pages

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
| > 1200px | 4 columns | Full horizontal |
| 768-1199px | 2-3 columns | Condensed |
| < 768px | 1 column | Hamburger menu |

### Variant-Specific Features

- Property slider hero with thumbnail navigation
- Advanced search with 4 filter fields
- "FOR SALE" status badge on property cards
- Two separate cities sections (grid + carousel)
- Simplified testimonials without star ratings
- Full-width newsletter banner (not in footer)


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

**Animation Types:** fade-up: 17, fade-in: 1

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
data-aos="fade-up"    // 17 elements
data-aos="fade-left"  // 0 elements
data-aos="fade-right" // 0 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 177 |
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

### Hero Slider with Thumbnails Animations

```javascript
// Hero slider animations
const heroTL = gsap.timeline();

heroTL
  .from('.hero-slide-content', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-thumbnails', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.search-form', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3');

// Thumbnail active state animation
gsap.to('.thumbnail-active', {
  scale: 1.05,
  duration: 0.3,
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

### Newsletter Banner Animations

```javascript
// Newsletter section reveal (full-width banner)
gsap.from('.newsletter-banner', {
  scrollTrigger: {
    trigger: '.newsletter-section',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: 'power2.out'
});

// Form fields stagger
gsap.from('.newsletter-form-field', {
  scrollTrigger: {
    trigger: '.newsletter-section',
    start: 'top 65%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
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
    // Hero slider animation
    const heroTL = gsap.timeline();
    heroTL
      .from('.hero-slide-content', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.hero-thumbnails', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.search-form', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

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

    // Newsletter banner
    gsap.from('.newsletter-banner', {
      scrollTrigger: {
        trigger: '.newsletter-section',
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

**Total Emotion Blocks:** 90

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
