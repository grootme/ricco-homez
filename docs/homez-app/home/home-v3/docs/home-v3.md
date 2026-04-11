# Home v3 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v3
- **Page Title:** Home v3 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v3 is a feature-rich landing page for the Homez Real Estate NextJS Template with a family-oriented approach. It features a hero section with property images gallery, trusted partners section immediately visible, city-based property exploration, popular properties grid, apartment type categories, a comprehensive "Why Choose Us" section with statistics, testimonials with progress indicators, a detailed real estate inquiry form, blog section, and an agent recruitment CTA. The page emphasizes trust and detailed inquiry capabilities.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Hero Section** - Compact search form with heading and property image gallery
3. **Trusted Partners Section** - Logo marquee immediately after hero
4. **Properties by Cities Section** - Grid layout of city cards (8 cities)
5. **Popular Properties Section** - Grid layout with tabbed navigation
6. **Apartment Types Section** - Horizontal scrollable category cards
7. **Why Choose Us Section** - Two-column layout with image and service features
8. **Testimonials Section** - Carousel with statistics and progress indicators
9. **Inquiry Form Section** - Comprehensive form with property image
10. **Blog Section** - Three-column blog post cards
11. **Agent CTA Section** - Full-width banner with registration prompt
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
- Login / Register button
- Add Property link with arrow icon
- Hamburger menu (mobile)
```

### 2. Hero Section Data

```
Heading: "Find The Perfect Place to Live With your Family"

Search Form:
- Tab buttons: Buy (active), Rent, Sold
- Text input placeholder: "Enter Keyword for Buy"
- Property Type Dropdown: "Apartments" (default selected)
- Advanced button (expands filters)
- Search button (magnifying glass icon)

Property Image Gallery: 4 property images displayed in grid
```

### 3. Trusted Partners Section Data

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

### 4. Properties by Cities Data

```
Section Title: "Properties by Cities"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"
Section CTA: "See All Properties →"

City Cards (8 items in grid):

Card 1:
- Image: listing image
- City Name: "New York"
- Property Count: "12 property"

Card 2:
- Image: listing image
- City Name: "Chicago"
- Property Count: "12 property"

Card 3:
- Image: listing image
- City Name: "Manhattan"
- Property Count: "12 property"

Card 4:
- Image: listing image
- City Name: "San Diego"
- Property Count: "12 property"

Card 5:
- Image: listing image
- City Name: "San Francisco"
- Property Count: "12 property"

Card 6:
- Image: listing image
- City Name: "Los Angeles"
- Property Count: "12 property"

Card 7:
- Image: listing image
- City Name: "California"
- Property Count: "12 property"

Card 8:
- Image: listing image
- City Name: "New Jersey"
- Property Count: "12 property"
```

### 5. Popular Properties Data

```
Section Title: "Discover Popular Properties"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Tab Navigation:
- For Rent (active)
- For Sale

Property Cards Grid (8 items):

Card 1:
- Image: property listing image
- Action icons: 3 buttons (favorite, compare, share)
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "1 bath"
- Sqft: "1300 sqft"

Card 2:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"
- Beds: "4 bed"
- Baths: "5 bath"
- Sqft: "1200 sqft"

Card 3:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"
- Beds: "6 bed"
- Baths: "4 bath"
- Sqft: "1200 sqft"

Card 4:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New York City, CA, USA"
- Beds: "4 bed"
- Baths: "4 bath"
- Sqft: "1200 sqft"

Card 5:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "Los Angeles City, CA, USA"
- Beds: "2 bed"
- Baths: "3 bath"
- Sqft: "1200 sqft"

Card 6:
- Image: property listing image
- Badge: "FEATURED"
- Action icons: 3 buttons
- Price: "$82,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "New Jersey City, CA, USA"
- Beds: "1 bed"
- Baths: "2 bath"
- Sqft: "1205 sqft"

Card 7:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "California City, CA, USA"
- Beds: "5 bed"
- Baths: "4 bath"
- Sqft: "1100 sqft"

Card 8:
- Image: property listing image
- Action icons: 3 buttons
- Price: "$92,000 / mo"
- Title: "Luxury villa in Rego Park"
- Location: "San Diego City, CA, USA"
- Beds: "6 bed"
- Baths: "7 bath"
- Sqft: "1400 sqft"
```

### 6. Apartment Types Data

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

### 7. Why Choose Us Section Data

```
Image: "why chosse" (note: typo in original)

Statistics Badge:
- Icon: building icon
- Label: "Total Rent"
- Value: "4,382 Unit"

Section Title: "Why Choose Us"
Section Subtitle: "As the complexity of buildings to increase, the field of architecture."

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
```

### 8. Testimonials Section Data

```
Section Title: "People Love Living with Realton"
Section Subtitle: "Aliquam lacinia diam quis lacus euismod"

Progress Statistics:
- Stat 1:
  - Value: "0%"
  - Label: "Completed Property"
- Stat 2:
  - Value: "0%"
  - Label: "Satisfied Customers"
- Stat 3:
  - Value: "0%"
  - Label: "Home ownership"

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

### 9. Real Estate Inquiry Form Data

```
Section Title: "Real Estate Inquiry Form"
Section Subtitle: "As the complexity of buildings to increase"

Form Fields:

1. Inquiry Type
   - Type: Dropdown with removable tag
   - Default Value: "Apartments"
   - Remove button available

2. Personnel Role
   - Type: Dropdown with removable tag
   - Default Value: "Mr."
   - Remove button available

3. Personnel Name
   - Type: Text input
   - Placeholder: "Your Name"

4. Email
   - Type: Email input
   - Default Value: "ibthemes21@gmail.com"

5. How to address you
   - Type: Dropdown with removable tag
   - Default Value: "Mr."
   - Remove button available

6. Max Price
   - Type: Text input
   - Default Value: "$90"

7. Min Size (Sq ft)
   - Type: Number input
   - Default Value: "20"

Submit Button: "Submit →"

Decorative Image: About image beside form
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

### 11. Agent CTA Section Data

```
Section Title: "Become a Real Estate Agent"
Section Subtitle: "We only work with the best companies around the globe to survey"

CTA Button: "Register Now →"

Background Image: "cta memeber" (note: typo in original)
```

### 12. Footer Data

```
Contact Info Block:
- Icon: contact icon
- Label: "Total Free Customer Care"
- Phone: "+(0) 123 050 945 02" (link)

- Label: "Need Live Support?"
- Email: "hi@homez.com" (link)

Newsletter Section:
- Title: "Keep Yourself Up to Date"
- Email Input: placeholder "Your Email"
- Subscribe Button: "Subscribe"

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
- Social Links:
  - Facebook (icon)
  - Twitter (icon)
  - Instagram (icon)
  - LinkedIn (icon)

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
| HeroHeading | Main promotional text | Hero section |
| SearchFormContainer | Search wrapper | Hero section |
| SearchTabs | Buy/Rent/Sold toggle buttons | Search form |
| SearchInput | Keyword input field | Search form |
| PropertyTypeDropdown | Property type selector | Search form |
| AdvancedButton | Filter expansion trigger | Search form |
| SearchButton | Form submit button | Search form |
| PropertyImageGallery | Grid of property images | Hero section |

### Property Components

| Component | Description | Location |
|-----------|-------------|----------|
| PropertyCard | Individual listing card | Popular section |
| PropertyImage | Main listing photo | PropertyCard |
| PropertyBadge | "FEATURED" label overlay | PropertyCard |
| PropertyPrice | Monthly/total price display | PropertyCard |
| PropertyTitle | Listing name/link | PropertyCard |
| PropertyLocation | City, State, Country | PropertyCard |
| PropertySpecs | Beds/Baths/Sqft row | PropertyCard |
| PropertyActions | Favorite/Compare/Share icons | PropertyCard |

### City Components

| Component | Description | Location |
|-----------|-------------|----------|
| CityCard | City listing card | Cities section |
| CityImage | City photo | CityCard |
| CityName | City label | CityCard |
| CityCount | Property count | CityCard |

### Category Components

| Component | Description | Location |
|-----------|-------------|----------|
| CategoryCard | Property type card | Categories section |
| CategoryIcon | Type-specific icon | CategoryCard |
| CategoryName | Type label | CategoryCard |
| CategoryCount | Property count | CategoryCard |

### Why Choose Us Components

| Component | Description | Location |
|-----------|-------------|----------|
| FeatureImage | Section image | Why Choose Us |
| StatsBadge | Rental unit counter | Why Choose Us |
| ServiceFeature | Service description card | Why Choose Us |
| ServiceIcon | Feature icon | ServiceFeature |
| ServiceTitle | Feature name | ServiceFeature |
| ServiceDescription | Feature explanation | ServiceFeature |

### Testimonial Components

| Component | Description | Location |
|-----------|-------------|----------|
| ProgressStat | Animated progress counter | Testimonials section |
| ProgressValue | Percentage value | ProgressStat |
| ProgressLabel | Stat description | ProgressStat |
| TestimonialCard | Review container | Testimonials section |
| TestimonialQuote | Opening quote mark | TestimonialCard |
| TestimonialTitle | "Great Work" heading | TestimonialCard |
| TestimonialText | Full review text | TestimonialCard |
| StarRating | 6-star rating display | TestimonialCard |
| AuthorAvatar | User profile photo | TestimonialCard |
| AuthorName | Reviewer name | TestimonialCard |
| AuthorCompany | Reviewer company | TestimonialCard |

### Inquiry Form Components

| Component | Description | Location |
|-----------|-------------|----------|
| FormContainer | Form wrapper | Inquiry section |
| FormField | Input wrapper | Form |
| DropdownField | Select with removable tag | Form |
| TextInput | Text/email input | Form |
| NumberInput | Numeric input | Form |
| RemoveButton | Tag removal button | Dropdown fields |
| SubmitButton | Form submission | Form |
| FormImage | Decorative image | Inquiry section |

### Blog Components

| Component | Description | Location |
|-----------|-------------|----------|
| BlogCard | Post preview card | Blog section |
| BlogImage | Post featured image | BlogCard |
| BlogDate | Month/Day display | BlogCard |
| BlogCategory | Category tag/link | BlogCard |
| BlogTitle | Post title/link | BlogCard |

### CTA Components

| Component | Description | Location |
|-----------|-------------|----------|
| CTABanner | Full-width banner | Agent CTA section |
| CTAHeading | Main CTA text | CTABanner |
| CTASubtext | Supporting description | CTABanner |
| CTAButton | Action button | CTABanner |
| CTABackgroundImage | Banner background | CTABanner |

### Footer Components

| Component | Description | Location |
|-----------|-------------|----------|
| ContactInfo | Phone/email block | Footer |
| NewsletterForm | Email subscription | Footer |
| AppStoreLinks | App download badges | Footer |
| SocialLinks | Social media icons | Footer |
| FooterLinkGroup | Link category group | Footer columns |
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
| Remove Apartments | Clears inquiry type selection | Inquiry form |
| Remove Mr. | Clears role selection | Inquiry form |
| Submit | Submits inquiry form | Inquiry form |
| Subscribe | Submits newsletter form | Footer |
| Register Now | Navigates to registration | Agent CTA |

### Form Inputs

| Input | Type | Placeholder/Default | Validation |
|-------|------|---------------------|------------|
| Search Input | text | "Enter Keyword for Buy" | None visible |
| Property Type | select/dropdown | "Apartments" | Required |
| Inquiry Type | select/dropdown | "Apartments" | Required |
| Personnel Role | select/dropdown | "Mr." | Required |
| Personnel Name | text | "Your Name" | None visible |
| Email | email | "ibthemes21@gmail.com" | Email format |
| How to address you | select/dropdown | "Mr." | Required |
| Max Price | text | "$90" | None visible |
| Min Size | number | "20" | Numeric |
| Newsletter Email | email | "Your Email" | Email format |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | Multiple home versions | Header navigation |
| Listing Menu | Grid, Map, List options | Header navigation |
| Property Menu | Property pages | Header navigation |
| Blog Menu | Blog layouts | Header navigation |
| Pages Menu | Additional pages | Header navigation |
| Property Type | Multiple property types | Hero search |
| Inquiry Type | Property type options | Inquiry form |
| Personnel Role | Mr., Mrs., etc. | Inquiry form |
| Address Title | Mr., Mrs., etc. | Inquiry form |

### Tabs

| Tab Group | Options | Default |
|-----------|---------|---------|
| Search Type | Buy, Rent, Sold | Buy |
| Popular Properties | For Rent, For Sale | For Rent |

### Carousel Controls

| Carousel | Navigation Type |
|----------|-----------------|
| Categories | Arrow buttons (left disabled at start) |
| Testimonials | Arrow buttons (left disabled at start) |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Hero:** Search form with image gallery beside
- **Cities:** 4-column grid (8 cities)
- **Popular Properties:** 4-column grid (8 cards)
- **Categories:** Horizontal carousel
- **Why Choose Us:** Two-column layout
- **Testimonials:** Grid with progress stats above
- **Inquiry Form:** Two-column layout (form + image)
- **Blog:** Three-column grid
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Hero:** Stacked layout
- **Cities:** 2-3 column grid
- **Popular Properties:** 2-3 column grid
- **Categories:** Carousel with fewer visible cards
- **Why Choose Us:** Stacked layout
- **Testimonials:** Stacked layout
- **Inquiry Form:** Stacked layout
- **Blog:** 2-column grid
- **Footer:** Reduced columns, stacked sections

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Hero:** Full-width, stacked content
- **Cities:** Single column grid
- **Popular Properties:** Single column grid
- **Categories:** Single card visible, horizontal scroll
- **Why Choose Us:** Single column stacked
- **Testimonials:** Single card visible, horizontal scroll
- **Inquiry Form:** Single column stacked
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

### Inquiry Form Data Model

```typescript
interface InquiryForm {
  inquiryType: string;
  personnelRole: string;
  personnelName: string;
  email: string;
  addressTitle: string;
  maxPrice: number;
  minSize: number;
}
```

### Service Feature Data Model

```typescript
interface ServiceFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}
```

### Progress Stat Data Model

```typescript
interface ProgressStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
```

---

## Key Differences from Home v1 & v2

| Feature | Home v1 | Home v2 | Home v3 |
|---------|---------|---------|---------|
| Hero Layout | Full-width background | Compact search + heading | Search + image gallery |
| Trusted Partners | Near footer | Near footer | Immediately after hero |
| Cities Section | Carousel | Carousel | Static grid (8 cities) |
| Services Section | Three cards only | Three cards + video | Image + stats + features |
| Inquiry Form | Not present | Not present | Detailed multi-field form |
| Agent Section | Not present | Agent cards | Agent CTA banner |
| Statistics | Not present | Counter section | Progress stats in testimonials |
| Blog Section | Present | Not present | Present |

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images
- Screen reader compatible carousel navigation
- Form labels properly associated with inputs
- Progress bars with accessible values

---

## Performance Considerations

- Lazy loading for below-the-fold images
- Optimized carousel rendering
- Form validation on client-side before submission
- Debounced search input
- Memoized property cards for re-render optimization
- Image placeholder/skeleton during load
- Infinite scroll for logo marquee (CSS animation)

---

## Screenshot Reference

![Home v3 Screenshot](./home-v3-screenshot.png)

---

## Notes

- Inquiry form has pre-filled default values
- Remove buttons on dropdowns allow clearing selections
- Progress statistics show "0%" (likely animated on scroll)
- Property actions are positioned on image overlay
- Cities are displayed in static grid, not carousel
- Agent section uses CTA banner instead of agent cards
- Blog posts have consistent date format

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

- Family-oriented hero with property image gallery
- Trusted partners immediately after hero
- Static 8-city grid (not carousel)
- Comprehensive inquiry form with removable tags
- Progress statistics in testimonials
- Agent CTA banner
- Blog section present


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

**Total AOS Animations:** 14

**Animation Types:** fade-up: 9, fade-left: 2, fade-right: 2, fade: 1

**Delays Used:** 0, 100, 300ms

### AOS Configuration

```javascript
// Global Settings
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0
});

// Animation Classes Applied
data-aos="fade-up"    // 9 elements
data-aos="fade-left"  // 2 elements
data-aos="fade-right" // 2 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 112 |
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

### Hero Section with Image Gallery Animations

```javascript
// Hero section timeline - family-oriented with image gallery
const heroTL = gsap.timeline();

heroTL
  .from('.hero-heading', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.hero-search', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.hero-gallery', { 
    opacity: 0, 
    scale: 0.9, 
    duration: 0.6 
  }, '-=0.3');

// Hero image gallery stagger
gsap.from('.hero-gallery-image', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.1,
  duration: 0.5,
  ease: 'back.out(1.7)'
});
```

### Trusted Partners Section Animations

```javascript
// Partners logo entrance
gsap.from('.partner-logo', {
  scrollTrigger: {
    trigger: '.trusted-partners',
    start: 'top 85%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Popular Properties Section Animations

```javascript
// Property cards stagger animation
gsap.from('.property-card', {
  scrollTrigger: {
    trigger: '.popular-properties',
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

### Why Choose Us Section Animations

```javascript
// Image reveal with badge
gsap.from('.why-choose-image', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 75%',
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: 'power3.out'
});

// Stats badge animation
gsap.from('.stats-badge', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0,
  duration: 0.5,
  ease: 'back.out(1.7)'
});

// Service features stagger
gsap.from('.service-feature', {
  scrollTrigger: {
    trigger: '.why-choose-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.5,
  ease: 'power2.out'
});
```

### Cities Grid Animations

```javascript
// City cards grid entrance (static grid - 8 cities)
gsap.from('.city-card', {
  scrollTrigger: {
    trigger: '.cities-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 40,
  stagger: {
    grid: [2, 4],
    from: 'start',
    amount: 0.5
  },
  duration: 0.5,
  ease: 'power2.out'
});
```

### Inquiry Form Animations

```javascript
// Form section reveal
gsap.from('.inquiry-form', {
  scrollTrigger: {
    trigger: '.inquiry-section',
    start: 'top 70%',
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: 'power3.out'
});

// Form fields stagger
gsap.from('.form-field', {
  scrollTrigger: {
    trigger: '.inquiry-form',
    start: 'top 60%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.4,
  ease: 'power2.out'
});

// Decorative image parallax
gsap.to('.form-decorative-image', {
  scrollTrigger: {
    trigger: '.inquiry-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  },
  y: -30,
  ease: 'none'
});
```

### Testimonials with Progress Stats Animations

```javascript
// Progress stats animation
gsap.from('.progress-stat', {
  scrollTrigger: {
    trigger: '.testimonials-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power2.out'
});

// Progress bar animation
gsap.utils.toArray('.progress-bar').forEach(bar => {
  const value = parseInt(bar.dataset.progress);
  gsap.from(bar, {
    scrollTrigger: {
      trigger: bar,
      start: 'top 85%',
    },
    width: '0%',
    duration: 1.5,
    ease: 'power2.out'
  });
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
```

### Agent CTA Section Animations

```javascript
// CTA section reveal
gsap.from('.agent-cta-content', {
  scrollTrigger: {
    trigger: '.agent-cta-section',
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
      .from('.hero-search', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.hero-gallery', { opacity: 0, scale: 0.9, duration: 0.6 }, '-=0.3');

    // Popular properties
    gsap.from('.property-card', {
      scrollTrigger: {
        trigger: '.popular-properties',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Why choose us
    gsap.from('.service-feature', {
      scrollTrigger: {
        trigger: '.why-choose-section',
        start: 'top 75%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Cities grid
    gsap.from('.city-card', {
      scrollTrigger: {
        trigger: '.cities-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: {
        grid: [2, 4],
        from: 'start',
        amount: 0.5
      },
      duration: 0.5,
      ease: 'power2.out'
    });

    // Inquiry form
    gsap.from('.form-field', {
      scrollTrigger: {
        trigger: '.inquiry-form',
        start: 'top 60%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Testimonials with progress
    gsap.from('.progress-bar', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 75%',
      },
      width: '0%',
      duration: 1.5,
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

**Total Emotion Blocks:** 96

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

**Theme Button Count:** 6

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
