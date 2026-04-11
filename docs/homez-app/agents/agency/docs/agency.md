# Agency - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/agency
- **Page Title:** Agency || Homez - Real Estate NextJS Template

---

## Page Overview

The Agency page is a comprehensive listing page that displays all real estate agencies registered on the Homez platform. This page serves as a directory where users can browse, search, and filter real estate agencies to find the right company for their property needs. The page features a grid layout of agency cards, each displaying essential agency information including logo, contact details, team size, and property listings count. Users can access individual agency profiles by clicking on any agency card.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Page Title/Breadcrumb Section** - Page title with navigation context
3. **Filter/Search Section** - Search and filter controls for agency discovery
4. **Agency Grid Section** - Grid layout displaying agency cards
5. **Pagination/Load More** - Navigation between agency listing pages
6. **Footer** - Multi-column layout with newsletter, links, and social media

---

## Data Content Structure

### 1. Header/Navigation Data

```
Navigation Items:
- Home (dropdown with 10 versions)
- Listing (dropdown with Grid View, Map Style, List View)
- Property (dropdown with Agents, Single Style, Dashboard)
  - Agents submenu:
    - Agents
    - Agent Single
    - Agency (current page - active)
    - Agency Single
- Blog (dropdown with Blog List V1-V3, Blog Single)
- Pages (dropdown with About, Contact, Compare, Pricing, FAQ, Login, Register, 404, Invoice)

Header Actions:
- Login / Register button (opens authentication modal)
- Add Property link with arrow icon (links to /dashboard-add-property)
- Hamburger menu (mobile - opens offcanvas sidebar)

Authentication Modal:
- Sign In Tab:
  - Email input field
  - Password input field
  - Remember me checkbox
  - Lost your password link
  - Sign in button
  - Social login options (Google, Facebook, Apple)
- New Account Tab:
  - Email input field
  - Password input field
  - Create account button
  - Social registration options
```

### 2. Filter/Search Section Data

```
Search Controls:
- Search Input: Text input for searching agencies by name or location
- Location Filter: Dropdown/select for filtering by location/area
- Sort Options: Dropdown for sorting agencies
  - Options: "Newest", "Most Properties", "Highest Rated", "Most Agents", "Name A-Z"
- Grid/List View Toggle: Switch between grid and list display modes

Filter Panel (expandable):
- Services Filter: Checkbox group for agency services
  - Residential Sales
  - Commercial Sales
  - Property Management
  - Rentals
  - Investment Services
- Size Filter: Agency size range
  - Small (1-10 agents)
  - Medium (11-50 agents)
  - Large (50+ agents)
- Rating Filter: Minimum rating selection
```

### 3. Agency Card Data Structure

```
Agency Card Components:
- Agency Logo: Company logo image
- Agency Name: Company name (linked to agency single page)
- Tagline: Short company description
- Address: Full office address with location icon
- Phone Number: Primary contact phone with call icon
- Agents Count: Number of agents in the agency
- Listings Count: Number of properties listed
- Rating: Average rating displayed as stars
- Review Count: Number of reviews received
- Services Tags: Brief service categories offered
- View Profile Button: CTA to navigate to agency single page

Agency Card Data Model:
{
  id: string,
  name: string,
  slug: string,
  logo: string,
  tagline: string,
  address: {
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string
  },
  phone: string,
  email: string,
  agentsCount: number,
  listingsCount: number,
  rating: number,
  reviewCount: number,
  services: string[],
  verified: boolean,
  featured: boolean
}
```

### 4. Sample Agency Data

```
Agency 1:
- Name: "Homez Real Estate"
- Logo: "/images/agencies/agency-1.png"
- Tagline: "Your Trusted Partner in Real Estate"
- Address: "123 Property Lane, New York, NY 10001, USA"
- Phone: "(920) 123-4567"
- Email: "info@homez.com"
- Agents: 45
- Listings: 234
- Rating: 4.9 (156 reviews)
- Services: ["Residential Sales", "Rentals", "Property Management"]
- Verified: Yes
- Featured: Yes

Agency 2:
- Name: "Dream Properties Inc."
- Logo: "/images/agencies/agency-2.png"
- Tagline: "Making Dreams Come True"
- Address: "456 Luxury Ave, Los Angeles, CA 90001, USA"
- Phone: "(310) 234-5678"
- Email: "contact@dreamproperties.com"
- Agents: 28
- Listings: 189
- Rating: 4.8 (98 reviews)
- Services: ["Luxury Properties", "Commercial", "Investment"]
- Verified: Yes
- Featured: No

Agency 3:
- Name: "Metropolitan Realty"
- Logo: "/images/agencies/agency-3.png"
- Tagline: "Excellence in Every Transaction"
- Address: "789 Downtown Blvd, Chicago, IL 60601, USA"
- Phone: "(312) 345-6789"
- Email: "hello@metropolitanrealty.com"
- Agents: 62
- Listings: 312
- Rating: 4.7 (203 reviews)
- Services: ["Residential", "Commercial", "Property Management", "Relocation"]
- Verified: Yes
- Featured: Yes

Agency 4:
- Name: "Sunset Homes"
- Logo: "/images/agencies/agency-4.png"
- Tagline: "Where Sunset Meets Your Dream Home"
- Address: "321 Beach Drive, Miami, FL 33101, USA"
- Phone: "(305) 456-7890"
- Email: "info@sunsethomes.com"
- Agents: 18
- Listings: 87
- Rating: 4.6 (67 reviews)
- Services: ["Luxury Waterfront", "Vacation Rentals", "Condominiums"]
- Verified: No
- Featured: No

Agency 5:
- Name: "Mountain View Properties"
- Logo: "/images/agencies/agency-5.png"
- Tagline: "Elevate Your Living Experience"
- Address: "555 Summit Road, Denver, CO 80201, USA"
- Phone: "(720) 567-8901"
- Email: "sales@mountainviewprops.com"
- Agents: 35
- Listings: 145
- Rating: 4.9 (112 reviews)
- Services: ["Mountain Properties", "Ski Homes", "Land Sales"]
- Verified: Yes
- Featured: No

Agency 6:
- Name: "Urban Living Group"
- Logo: "/images/agencies/agency-6.png"
- Tagline: "City Living at Its Best"
- Address: "888 Metropolitan Ave, San Francisco, CA 94101, USA"
- Phone: "(415) 678-9012"
- Email: "info@urbanlivinggroup.com"
- Agents: 52
- Listings: 278
- Rating: 4.8 (189 reviews)
- Services: ["Urban Properties", "Lofts", "New Development"]
- Verified: Yes
- Featured: Yes
```

### 5. Featured Agencies Section

```
Featured Section (Above main grid):
- Section Title: "Featured Agencies"
- Featured Badge: "FEATURED" label on cards
- Larger Card Size: More prominent display
- Additional Information: Extended description visible

Featured Agency Card:
- Larger logo display
- Extended description
- Key highlights:
  - Years in business
  - Total sales volume
  - Awards/recognitions
- Quick contact button
- "Featured" badge overlay
```

### 6. Pagination Data

```
Pagination Controls:
- Previous Button: Navigate to previous page (disabled on first page)
- Page Numbers: 1, 2, 3, 4, 5, etc.
- Next Button: Navigate to next page
- Items Per Page Selector: 8, 12, 16, 24
- Total Results: Display of total agencies found (e.g., "Showing 1-12 of 48 agencies")
```

### 7. Mobile Menu Sidebar Data

```
Mobile Navigation Categories:
- Home (expandable)
- Listings (expandable with Grid View, Map Style, Listing View)
- Property (expandable with Agents, Single Style)
- Dashboard (expandable)
- Blog (expandable)
- Pages (expandable)

Mobile Sidebar Footer:
- Customer Care: +(0) 123 050 945 02
- Email Support: hi@homez.com
- Social Media: Facebook, Twitter, Instagram, LinkedIn
```

### 8. Footer Data

```
Newsletter Section:
- Title: "Keep Yourself Up to Date"
- Email Input: placeholder "Your Email"
- Subscribe Button

Popular Search Links:
- "Apartment for Rent"
- "Apartment Low to Hide"
- "Offices for Buy"
- "Offices for Rent"

Quick Links:
- "Terms of Use"
- "Privacy Policy"
- "Pricing Plans"
- "Our Services"
- "Contact Support"
- "Careers"
- "FAQs"

Discover Links:
- "Miami"
- "Los Angeles"
- "Chicago"
- "New York"

Contact Information:
- Customer Care: +(0) 123 050 945 02
- Email: hi@homez.com

App Downloads:
- Apple Store Badge
- Google Play Badge

Social Media:
- Facebook, Twitter, Instagram, LinkedIn

Copyright:
- "© Homez 2026"
- "ib-themes - All rights reserved"
- Privacy, Terms, Sitemap links
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

### Filter Components

| Component | Description | Location |
|-----------|-------------|----------|
| SearchInput | Text field for agency search | Filter section |
| LocationDropdown | Location filter selector | Filter section |
| SortDropdown | Sorting options selector | Filter section |
| ViewToggle | Grid/List view switcher | Filter section |
| FilterPanel | Expandable filter container | Filter section |
| ServiceFilter | Service category checkboxes | Filter panel |
| SizeFilter | Agency size range selector | Filter panel |
| RatingFilter | Minimum rating selector | Filter panel |
| ClearFiltersButton | Reset all filters | Filter section |

### Agency Card Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgencyCard | Individual agency container | Agency grid |
| AgencyLogo | Company logo image | AgencyCard top |
| FeaturedBadge | "FEATURED" label | AgencyCard |
| VerifiedBadge | Verification indicator | AgencyCard |
| AgencyName | Linked agency name | AgencyCard |
| AgencyTagline | Short description | AgencyCard |
| AgencyAddress | Office address with icon | AgencyCard |
| AgencyPhone | Phone number with icon | AgencyCard |
| AgentsCount | Agent count badge | AgencyCard |
| ListingsCount | Property count badge | AgencyCard |
| StarRating | Star rating display | AgencyCard |
| ReviewCount | Number of reviews | AgencyCard |
| ServiceTags | Service category tags | AgencyCard |
| ViewProfileButton | CTA button | AgencyCard bottom |

### List View Components (Alternative)

| Component | Description | Location |
|-----------|-------------|----------|
| AgencyListItem | Full-width agency row | List view |
| AgencyListLogo | Smaller logo | List item left |
| AgencyListInfo | Name, tagline, address | List item center |
| AgencyListStats | Agents, listings, rating | List item right |
| AgencyListActions | Contact, view profile buttons | List item right |

### Pagination Components

| Component | Description | Location |
|-----------|-------------|----------|
| PaginationContainer | Wrapper for pagination | Bottom of grid |
| PageNumber | Individual page buttons | PaginationContainer |
| PreviousButton | Previous page navigation | PaginationContainer |
| NextButton | Next page navigation | PaginationContainer |
| ItemsPerPageSelector | Items count dropdown | PaginationContainer |
| ResultsCount | Total results display | PaginationContainer |

### Modal Components

| Component | Description | Location |
|-----------|-------------|----------|
| LoginSignupModal | Authentication modal | Overlay |
| SignInForm | Login form fields | Modal tab |
| RegisterForm | Registration form fields | Modal tab |
| SocialLoginButtons | Google/Facebook/Apple buttons | Modal |
| ModalCloseButton | Close modal trigger | Modal header |

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
| Search | Filters agencies based on criteria | Filter section |
| View Profile | Navigates to agency single page | Agency cards |
| Contact Agency | Opens contact modal/form | Agency cards |
| Load More | Loads additional agencies | Pagination |
| Clear Filters | Resets all filter values | Filter section |
| Subscribe | Submits newsletter form | Footer |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Search Input | text | "Search agencies..." | None visible |
| Location Filter | select | "Select location" | None |
| Sort Dropdown | select | "Newest" | None |
| Service Checkboxes | checkbox | Various | None |
| Size Filter | radio/select | Size range | None |
| Rating Filter | select | Minimum rating | None |
| Email Input (Newsletter) | email | "Your Email" | Email format |
| Email Input (Login) | email | "Enter Email" | Required |
| Password Input (Login) | password | "Enter Password" | Required |

### Links

| Link Type | Count | Locations |
|-----------|-------|-----------|
| Navigation Links | 5 main + 40+ submenu | Header |
| Agency Profile Links | 6+ | Agency cards |
| Footer Links | 15+ | Footer columns |
| Social Links | 4+ | Header sidebar, Footer |
| App Store Links | 2 | Footer contact |
| Phone Links | 1 per card | Agency cards |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | 10 home versions | Header navigation |
| Listing Menu | 15 layout options | Header navigation |
| Property Menu | Agents + Single + Dashboard | Header navigation |
| Blog Menu | 4 blog layouts | Header navigation |
| Pages Menu | 9 page options | Header navigation |
| Sort Dropdown | Newest, Most Properties, Highest Rated, etc. | Filter section |
| Location Filter | Various locations | Filter section |
| Items Per Page | 8, 12, 16, 24 | Pagination |

### View Toggles

| Toggle | Options | Default |
|--------|---------|---------|
| Grid/List View | Grid, List | Grid |
| Items Per Page | 8, 12, 16, 24 | 12 |

### Filter Interactions

| Filter | Type | Behavior |
|--------|------|----------|
| Search | Text input | Real-time filtering (debounced) |
| Location | Dropdown | Immediate filter on select |
| Sort | Dropdown | Immediate sort on select |
| Services | Checkboxes | Filter updates on change |
| Size | Radio buttons | Filter updates on change |
| Rating | Dropdown | Immediate filter on select |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Filter Section:** Full width with all controls visible inline
- **Agency Grid:** 3-column grid layout (3 agencies per row)
- **Card Size:** Large cards with full information
- **Pagination:** Full page numbers visible
- **Footer:** Multi-column layout with all sections visible

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Filter Section:** Controls may stack or wrap
- **Agency Grid:** 2-column grid
- **Card Size:** Medium cards with essential information
- **Pagination:** Simplified with fewer page numbers
- **Footer:** Reduced columns, some sections stacked

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Filter Section:** Stacked vertically, collapsible into "Filters" button
- **Agency Grid:** Single column (1 agency per row)
- **Card Size:** Compact cards with stacked content
- **Pagination:** Previous/Next buttons only
- **Footer:** Single column stacked, all sections collapsed

### Agency Card Adjustments

| Viewport | Logo Size | Layout | Visible Info |
|----------|-----------|--------|--------------|
| Desktop | 80x80px | Card with all fields | All fields visible |
| Tablet | 60x60px | Compact card | Essential fields |
| Mobile | 50x50px | Stacked layout | Name, Address, Stats, Button |

### Grid Adjustments

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Agency Grid | 3 cols | 2 cols | 1 col |
| Filter Controls | Inline | Stacked | Collapsed |
| Pagination | Full | Compact | Minimal |

### Filter Section Adjustments

| Viewport | Layout | Visible Controls |
|----------|--------|------------------|
| Desktop | Horizontal bar | All controls inline |
| Tablet | Wrapped rows | Search, Location, Sort visible |
| Mobile | Collapsible panel | Search only, expand for more |

---

## Data Models

### Agency Data Model

```typescript
interface Agency {
  id: string;
  name: string;
  slug: string;
  logo: string;
  tagline: string;
  description?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  website?: string;
  agentsCount: number;
  listingsCount: number;
  rating: number;
  reviewCount: number;
  services: AgencyService[];
  verified: boolean;
  featured: boolean;
  established?: number;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  officeHours?: string;
  languages?: string[];
  areas?: string[];
}

type AgencyService = 
  | 'residential-sales'
  | 'commercial-sales'
  | 'property-management'
  | 'rentals'
  | 'investment-services'
  | 'relocation'
  | 'new-development'
  | 'luxury-properties';
```

### Filter State Model

```typescript
interface AgencyFilterState {
  search: string;
  location: string;
  sortBy: 'newest' | 'most-properties' | 'highest-rated' | 'most-agents' | 'name-asc';
  services: AgencyService[];
  size: 'small' | 'medium' | 'large' | 'all';
  minRating: number;
  viewMode: 'grid' | 'list';
  page: number;
  itemsPerPage: number;
}
```

### Pagination Model

```typescript
interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
```

### Agency Size Model

```typescript
interface AgencySize {
  id: string;
  label: string;
  minAgents: number;
  maxAgents: number | null;
}

const AGENCY_SIZES: AgencySize[] = [
  { id: 'small', label: 'Small (1-10 agents)', minAgents: 1, maxAgents: 10 },
  { id: 'medium', label: 'Medium (11-50 agents)', minAgents: 11, maxAgents: 50 },
  { id: 'large', label: 'Large (50+ agents)', minAgents: 51, maxAgents: null },
];
```

---

## API Integration Points

### Get Agencies List

```
Endpoint: /api/agencies
Method: GET
Query Parameters:
  - search: string (optional)
  - location: string (optional)
  - sort: string (optional)
  - services: string[] (optional)
  - size: string (optional)
  - minRating: number (optional)
  - page: number (default: 1)
  - limit: number (default: 12)

Response:
{
  agencies: Agency[],
  pagination: PaginationState,
  filters: {
    locations: string[],
    services: AgencyService[],
    sortOptions: string[]
  }
}
```

### Get Featured Agencies

```
Endpoint: /api/agencies/featured
Method: GET
Query Parameters:
  - limit: number (default: 3)

Response:
{
  agencies: Agency[]
}
```

### Search Agencies

```
Endpoint: /api/agencies/search
Method: GET
Query Parameters:
  - query: string (required)
  - location: string (optional)

Response:
{
  agencies: Agency[],
  totalResults: number
}
```

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for all interactive elements
- Keyboard navigation support throughout
- Focus states on all interactive elements
- Alt text for all agency logos
- Screen reader compatible rating displays
- Accessible dropdown menus with proper focus management
- Form labels properly associated with inputs
- Skip links for main content
- Accessible grid navigation
- High contrast text on all backgrounds
- Responsive text sizing

---

## Performance Considerations

- Lazy loading for agency logos (below the fold)
- Pagination to limit initial data load
- Debounced search input to reduce API calls
- Memoized agency cards for re-render optimization
- Image placeholder/skeleton during load
- Cached filter options
- Virtual scrolling potential for large datasets
- Optimistic UI updates for filters
- Preloaded featured agencies
- Service worker caching for repeat visits

---

## SEO Considerations

- Page title: "Agency || Homez - Real Estate NextJS Template"
- Meta description for agency directory
- Structured data for Organization and RealEstateAgent schemas
- Breadcrumb navigation with schema markup
- Canonical URL for pagination
- Open Graph tags for social sharing
- Sitemap inclusion for all agency pages
- H1 tag for main page heading
- Alt text for all agency logos

---

## State Management

### Local Component State

```
AgencyListPage State:
- agencies: Agency[]
- featuredAgencies: Agency[]
- filters: AgencyFilterState
- pagination: PaginationState
- isLoading: boolean
- error: string | null
- viewMode: 'grid' | 'list'
- filterPanelOpen: boolean
```

### URL State

```
Query Parameters:
- ?search=string
- ?location=string
- ?sort=string
- ?services=string
- ?size=string
- ?minRating=number
- ?page=number
- ?view=grid|list
```

### Filter Presets

```
Saved Filter States (localStorage):
- Recent searches
- Preferred view mode
- Last used filters
```

---

## User Flows

### Browse Agencies Flow

1. User lands on Agency page
2. System displays featured agencies (if any) at top
3. Main grid shows agencies with default sorting (newest)
4. User scrolls through agency cards
5. User can click on any agency card to view full profile
6. Agency Single page opens with detailed information

### Search/Filter Agencies Flow

1. User enters search term in search input
2. System filters agencies in real-time (debounced)
3. User can select location from dropdown
4. User can select sort option
5. User can open filter panel for advanced filters
6. User selects service types, agency size, minimum rating
7. Results update automatically based on all filters
8. User clicks on desired agency card

### View Toggle Flow

1. User sees default grid view
2. User clicks list view toggle button
3. Layout switches to full-width list view
4. View preference saved to localStorage
5. User can toggle back to grid view

### Contact Agency Flow

1. User clicks "Contact Agency" button on card
2. Contact modal opens OR user is redirected to agency single page
3. Contact form is pre-populated if user is logged in
4. User fills out and submits form

---

## Error Handling

### API Error States

```
Error Types:
- Network Error: "Unable to connect. Please check your connection."
- Server Error: "Something went wrong. Please try again later."
- No Results: "No agencies found matching your criteria. Try adjusting your filters."
- Timeout Error: "Request timed out. Please try again."

Error Display:
- Inline error messages in filter section
- Empty state with illustration for no results
- Toast notifications for transient errors
- Error boundary for component failures
- Retry buttons for recoverable errors
```

### Empty States

```
No Agencies Found:
- Icon: Building/search illustration
- Title: "No agencies found"
- Description: "Try adjusting your search or filter criteria"
- Action: "Clear all filters" button

No Featured Agencies:
- Section hidden if no featured agencies available
- Graceful fallback to main grid
```

---

## Technical Implementation

### Agent Components
- Agent card with rating system
- Contact form integration
- Property listings by agent

### Agency Features
- Team member grid
- Agency statistics
- Contact information display

---

## GSAP Animations Used

**Note:** This template uses AOS (Animate On Scroll) library instead of GSAP for scroll-based animations.

### AOS Animation Configuration

```javascript
// AOS Global Configuration
AOS.init({
  easing: 'ease',
  duration: 1200,
  delay: 0,
  once: true,        // Only animate once
  offset: 120        // Trigger offset
});
```

### Animations Used on This Page

| Animation Type | Elements | Duration | Delay | Easing |
|----------------|----------|----------|-------|--------|
| `fade-up` | Agency grid cards | 1200ms | 100ms | ease |
| CSS Transitions | Hover effects | 300ms | 0ms | ease |
| CSS Transitions | Card elevation on hover | 300ms | 0ms | ease |

### CSS Transition Animations

```css
/* Agency card hover animation */
.agency-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Featured agency badge pulse */
.featured-badge {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

---

## GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

```json
{
  "dependencies": {
    "gsap": "^3.12.0"
  }
}
```

### Core Setup

```javascript
// lib/gsap-init.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

### Agency Cards Grid Animation

```javascript
// components/AgencyGrid.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgencyCardsAnimation() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.agency-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return gridRef;
}

// Agency card hover animation
export function useAgencyCardHover(cardRef: HTMLElement | null) {
  useEffect(() => {
    if (!cardRef) return;

    const logo = cardRef.querySelector('.agency-logo');
    
    const handleEnter = () => {
      gsap.to(cardRef, {
        y: -10,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
        duration: 0.35,
        ease: 'power2.out'
      });
      
      if (logo) {
        gsap.to(logo, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleLeave = () => {
      gsap.to(cardRef, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        duration: 0.35,
        ease: 'power2.out'
      });
      
      if (logo) {
        gsap.to(logo, { scale: 1, duration: 0.3, ease: 'power2.out' });
      }
    };

    cardRef.addEventListener('mouseenter', handleEnter);
    cardRef.addEventListener('mouseleave', handleLeave);

    return () => {
      cardRef.removeEventListener('mouseenter', handleEnter);
      cardRef.removeEventListener('mouseleave', handleLeave);
    };
  }, [cardRef]);
}
```

### Featured Agencies Animation

```javascript
// components/FeaturedAgencies.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useFeaturedAgenciesAnimation() {
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!featuredRef.current) return;

    const cards = featuredRef.current.querySelectorAll('.featured-agency-card');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: featuredRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Featured badge pulse animation
    const badges = featuredRef.current.querySelectorAll('.featured-badge');
    badges.forEach(badge => {
      gsap.to(badge, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(badges);
    };
  }, []);

  return featuredRef;
}
```

### Filter Section Animation

```javascript
// components/AgencyFilters.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export function useAgencyFilterAnimation() {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterRef.current) return;

    const filterItems = filterRef.current.querySelectorAll('.filter-item');
    
    // Staggered entrance
    gsap.from(filterItems, {
      opacity: 0,
      y: 25,
      stagger: 0.06,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Filter count animation
    const countEl = filterRef.current.querySelector('.filter-count');
    if (countEl) {
      gsap.from(countEl, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.out(1.5)'
      });
    }

    return () => {
      gsap.killTweensOf(filterItems);
    };
  }, []);

  return filterRef;
}

// Advanced filter panel animation
export function animateAdvancedFilters(isOpen: boolean, panelRef: HTMLElement) {
  if (isOpen) {
    gsap.fromTo(panelRef,
      { height: 0, opacity: 0 },
      { 
        height: 'auto', 
        opacity: 1, 
        duration: 0.5, 
        ease: 'power2.out',
        onStart: () => {
          gsap.from(panelRef.querySelectorAll('.filter-option'), {
            opacity: 0,
            x: -20,
            stagger: 0.05,
            duration: 0.3,
            delay: 0.2
          });
        }
      }
    );
  } else {
    gsap.to(panelRef, {
      height: 0,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in'
    });
  }
}
```

### View Toggle Animation

```javascript
// components/ViewToggle.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export function useViewToggleAnimation() {
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!toggleRef.current) return;

    gsap.from(toggleRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: 'back.out(1.5)'
    });
  }, []);

  return toggleRef;
}

// Animate layout change between grid and list
export function animateViewTransition(
  containerRef: HTMLElement, 
  viewMode: 'grid' | 'list'
) {
  const cards = containerRef.querySelectorAll('.agency-card');
  
  gsap.to(cards, {
    opacity: 0,
    scale: 0.9,
    duration: 0.25,
    ease: 'power2.in',
    onComplete: () => {
      // Layout change happens here
      gsap.fromTo(cards,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.35, 
          stagger: 0.05,
          ease: 'power2.out' 
        }
      );
    }
  });
}
```

### Service Tags Animation

```javascript
// components/AgencyServiceTags.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useServiceTagsAnimation() {
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tagsRef.current) return;

    const tags = tagsRef.current.querySelectorAll('.service-tag');

    gsap.from(tags, {
      opacity: 0,
      y: 10,
      stagger: 0.03,
      duration: 0.25,
      ease: 'power2.out'
    });

    return () => {
      gsap.killTweensOf(tags);
    };
  }, []);

  return tagsRef;
}
```

### Stats Counter Animation

```javascript
// components/AgencyStats.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useStatsAnimation() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const statValues = statsRef.current.querySelectorAll('.stat-value');

    statValues.forEach(stat => {
      const targetValue = parseInt(stat.getAttribute('data-value') || '0', 10);
      
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%',
          once: true
        },
        textContent: 0,
        duration: 1.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          stat.textContent = Math.round(this.targets()[0].textContent).toLocaleString();
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return statsRef;
}
```

### Loading State Animation

```javascript
// components/AgencyCardSkeleton.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useSkeletonAnimation() {
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skeletonRef.current) return;

    const shimmer = skeletonRef.current.querySelectorAll('.skeleton-shimmer');
    
    shimmer.forEach(el => {
      gsap.to(el, {
        x: '100%',
        duration: 1.5,
        repeat: -1,
        ease: 'power2.inOut'
      });
    });

    return () => {
      gsap.killTweensOf(shimmer);
    };
  }, []);

  return skeletonRef;
}
```

### Complete Agency Page Animation Hook

```javascript
// hooks/useAgencyPageAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAgencyPageAnimations() {
  useEffect(() => {
    const masterTl = gsap.timeline();

    // Page title animation
    masterTl.from('.page-title', {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: 'power3.out'
    })
    // Filter section
    .from('.filter-section', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.4');

    // Scroll-triggered batch animation for agency cards
    ScrollTrigger.batch('.agency-card', {
      start: 'top 85%',
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
```

---

## Theme Variables

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-primary: #e33e3e;          /* Main brand color - Red/Coral */
  --color-primary-hover: #c53535;    /* Hover state */
  --color-primary-light: rgba(227, 62, 62, 0.07);
  
  /* Computed Primary: rgb(235, 103, 83) - #eb6753 */
  
  /* Secondary Colors */
  --color-secondary: #041e42;        /* Dark blue */
  --color-dark: #0f172a;             /* Dark text */
  --color-dark-2: #181a20;           /* Dark backgrounds */
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-100: #f8fafc;
  --color-gray-200: #f7f7f7;
  --color-gray-300: #efefef;         /* Borders */
  --color-gray-400: #eeeeee;
  --color-gray-500: #64748b;         /* Secondary text */
  --color-gray-600: #94a3b8;         /* Muted text */
  
  /* Status Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Featured Badge */
  --featured-badge-bg: #e33e3e;
  --featured-badge-text: #ffffff;
}
```

### Typography Variables

```css
:root {
  --title-font-family: "Poppins", sans-serif;
  --body-font-family: "DM Sans", sans-serif;
}

/* Font Sizes */
.fz13 { font-size: 13px; }
.fz14 { font-size: 14px; }
.fz15 { font-size: 15px; }
.fz16 { font-size: 16px; }
.fz17 { font-size: 17px; }
.fz18 { font-size: 18px; }
.fz30 { font-size: 30px; }
```

### Border & Shadow Variables

```css
/* Border radius */
.bdrs6 { border-radius: 6px; }
.bdrs12 { border-radius: 12px; }
.bdrs60 { border-radius: 60px; }  /* Pill buttons */

/* Borders */
.bdr1 { border: 1px solid #efefef; }
.bdrt1 { border-top: 1px solid #efefef; }
.bdrb1 { border-bottom: 1px solid #efefef; }

/* Shadows */
.default-box-shadow1 { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
```

---

## CSS/Styling Approach

### Framework Stack

1. **Bootstrap 5** - Grid system, components (modals, offcanvas, tabs, dropdowns)
2. **Emotion CSS-in-JS** - Dynamic styling with `css-*` classes
3. **SCSS** - Custom styles with variables and mixins

### CSS Class Patterns

```css
/* Agency specific */
.agency-card { /* Agency card container */ }
.agency-logo { /* Agency logo image */ }
.agency-tagline { /* Agency description */ }
.featured-badge { /* Featured agency indicator */ }
.verified-badge { /* Verification indicator */ }

/* Service tags */
.service-tags { /* Container for service tags */ }
.service-tag { /* Individual service category tag */ }

/* Stats display */
.agents-count { /* Number of agents */ }
.listings-count { /* Number of listings */ }
```

### Responsive Breakpoints

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

---

## NPM Libraries Required

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    
    "bootstrap": "^5.3.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    
    "aos": "^2.3.4",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "react-pro-sidebar": "^1.1.0",
    
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
    "@fortawesome/free-brands-svg-icons": "^6.4.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    
    "zustand": "^4.4.0",
    "axios": "^1.6.0",
    "@tanstack/react-query": "^5.8.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/aos": "^3.0.0",
    "typescript": "^5.3.0",
    "sass": "^1.69.0"
  }
}
```

---

## Notes

- Agency cards have consistent hover effects with shadow elevation
- Featured agencies have prominent "FEATURED" badge overlay
- Verified agencies have checkmark badge next to name
- Rating stars use filled/empty icon states
- Phone numbers are clickable (tel: protocol)
- Grid/List view preference persists in localStorage
- Pagination preserves filter state in URL
- Agency logo placeholder shown during image load
- Service tags are clickable to filter by service type
- Listings count links to filtered property results
- Agents count links to agency team page
- Featured section hidden on mobile or shown as carousel
- Filter panel slides in from side on mobile
- Clear filters button appears when any filter is active
- Total results count updates in real-time with filters
