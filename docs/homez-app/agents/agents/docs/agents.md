# Agents - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/agents
- **Page Title:** Agents || Homez - Real Estate NextJS Template

---

## Page Overview

The Agents page is a comprehensive listing page that displays all real estate agents registered on the Homez platform. This page serves as a directory where users can browse, search, and filter agents to find the right professional for their property needs. The page features a grid layout of agent cards, each displaying essential agent information including contact details, property listings count, and ratings. Users can access individual agent profiles by clicking on any agent card.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Page Title/Breadcrumb Section** - Page title with navigation context
3. **Filter/Search Section** - Search and filter controls for agent discovery
4. **Agent Grid Section** - Grid layout displaying agent cards
5. **Pagination/Load More** - Navigation between agent listing pages
6. **Footer** - Multi-column layout with newsletter, links, and social media

---

## Data Content Structure

### 1. Header/Navigation Data

```
Navigation Items:
- Home (dropdown with 10 versions)
- Listing (dropdown with Grid View, Map Style, List View)
- Property (dropdown with Agents, Single Style, Dashboard)
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
- Search Input: Text input for searching agents by name or location
- Location Filter: Dropdown/select for filtering by location/area
- Sort Options: Dropdown for sorting agents (Newest, Best Seller, Best Match, etc.)
- Grid/List View Toggle: Switch between grid and list display modes
```

### 3. Agent Card Data Structure

```
Agent Card Components:
- Profile Photo: Circular avatar image of the agent
- Agent Name: Full name of the agent (linked to agent single page)
- Job Title: Professional title/role (e.g., "Real Estate Agent", "Broker")
- Phone Number: Primary contact phone with call icon
- Email Address: Agent's email with mail icon
- Listings Count: Number of properties listed by agent
- Star Rating: Agent rating displayed as stars (1-5 scale)
- Review Count: Number of reviews received
- Social Media Links: Icons for Facebook, Twitter, Instagram, LinkedIn
- View Profile Button: CTA to navigate to agent single page

Agent Card Data Model:
{
  id: string,
  name: string,
  slug: string,
  photo: string,
  title: string,
  phone: string,
  email: string,
  listingsCount: number,
  rating: number,
  reviewCount: number,
  socialLinks: {
    facebook: string,
    twitter: string,
    instagram: string,
    linkedin: string
  }
}
```

### 4. Sample Agent Data

```
Agent 1:
- Name: "Arlene McCoy"
- Photo: "/images/team/agent-1.jpg"
- Title: "Real Estate Agent"
- Phone: "(920) 012-3421"
- Email: "arlene@homez.com"
- Listings: 12 Properties
- Rating: 5.0 (3 reviews)
- Social: Facebook, Twitter, Instagram, LinkedIn

Agent 2:
- Name: "Ali Tufan"
- Photo: "/images/team/agent-2.jpg"
- Title: "Property Consultant"
- Phone: "(920) 012-3422"
- Email: "ali@homez.com"
- Listings: 8 Properties
- Rating: 4.8 (5 reviews)
- Social: Facebook, Twitter, Instagram, LinkedIn

Agent 3:
- Name: "Kathryn Murphy"
- Photo: "/images/team/agent-3.jpg"
- Title: "Senior Broker"
- Phone: "(920) 012-3423"
- Email: "kathryn@homez.com"
- Listings: 15 Properties
- Rating: 4.9 (7 reviews)
- Social: Facebook, Twitter, Instagram, LinkedIn

Agent 4:
- Name: "Leslie Alexander"
- Photo: "/images/team/agent-4.jpg"
- Title: "Real Estate Broker"
- Phone: "(920) 012-3424"
- Email: "leslie@homez.com"
- Listings: 20 Properties
- Rating: 5.0 (12 reviews)
- Social: Facebook, Twitter, Instagram, LinkedIn
```

### 5. Pagination Data

```
Pagination Controls:
- Previous Button: Navigate to previous page (disabled on first page)
- Page Numbers: 1, 2, 3, 4, 5, etc.
- Next Button: Navigate to next page
- Items Per Page: Typically 8-12 agents per page
- Total Results: Display of total agents found
```

### 6. Mobile Menu Sidebar Data

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

### 7. Footer Data

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
- Facebook
- Twitter
- Instagram
- LinkedIn

Copyright:
- Text: "© Homez 2026"
- Link: "ib-themes"
- Text: "- All rights reserved"
- Links: Privacy, Terms, Sitemap
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
| SearchInput | Text field for agent search | Filter section |
| LocationDropdown | Location filter selector | Filter section |
| SortDropdown | Sorting options selector | Filter section |
| ViewToggle | Grid/List view switcher | Filter section |
| FilterPanel | Expandable filter container | Filter section |

### Agent Card Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgentCard | Individual agent container | Agent grid |
| AgentPhoto | Circular profile image | AgentCard top |
| AgentName | Linked agent name | AgentCard |
| AgentTitle | Professional title | AgentCard |
| AgentPhone | Phone number with icon | AgentCard |
| AgentEmail | Email with icon | AgentCard |
| ListingsCount | Property count badge | AgentCard |
| StarRating | Star rating display | AgentCard |
| ReviewCount | Number of reviews | AgentCard |
| SocialLinks | Social media icons | AgentCard |
| ViewProfileButton | CTA button | AgentCard bottom |

### Pagination Components

| Component | Description | Location |
|-----------|-------------|----------|
| PaginationContainer | Wrapper for pagination | Bottom of grid |
| PageNumber | Individual page buttons | PaginationContainer |
| PreviousButton | Previous page navigation | PaginationContainer |
| NextButton | Next page navigation | PaginationContainer |
| ResultsCount | Total results display | PaginationContainer |

### Modal Components

| Component | Description | Location |
|-----------|-------------|----------|
| LoginSignupModal | Authentication modal | Overlay |
| SignInForm | Login form fields | Modal tab |
| RegisterForm | Registration form fields | Modal tab |
| SocialLoginButtons | Google/Facebook/Apple buttons | Modal |
| ModalCloseButton | Close modal trigger | Modal header |

### Sidebar Components

| Component | Description | Location |
|-----------|-------------|----------|
| MobileMenuSidebar | Offcanvas mobile menu | Left side |
| PropertyTypeMenu | Property categories | Sidebar |
| SidebarFooter | Contact and social info | Sidebar bottom |
| SidebarCloseButton | Close sidebar trigger | Sidebar header |

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
| Search | Filters agents based on criteria | Filter section |
| View Profile | Navigates to agent single page | Agent cards |
| Subscribe | Submits newsletter form | Footer |
| Load More | Loads additional agents | Pagination |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Search Input | text | "Search agents..." | None visible |
| Location Filter | select | "Select location" | None |
| Sort Dropdown | select | "Newest" | None |
| Email Input (Newsletter) | email | "Your Email" | Email format |
| Email Input (Login) | email | "Enter Email" | Required |
| Password Input (Login) | password | "Enter Password" | Required |

### Links

| Link Type | Count | Locations |
|-----------|-------|-----------|
| Navigation Links | 5 main + 40+ submenu | Header |
| Agent Profile Links | 8+ | Agent cards |
| Footer Links | 15+ | Footer columns |
| Social Links | 4+ | Header sidebar, Footer |
| App Store Links | 2 | Footer contact |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | 10 home versions | Header navigation |
| Listing Menu | 15 layout options | Header navigation |
| Property Menu | Agents + Single + Dashboard | Header navigation |
| Blog Menu | 4 blog layouts | Header navigation |
| Pages Menu | 9 page options | Header navigation |
| Sort Dropdown | Newest, Best Seller, Best Match, etc. | Filter section |
| Location Filter | Various locations | Filter section |

### View Toggles

| Toggle | Options | Default |
|--------|---------|---------|
| Grid/List View | Grid, List | Grid |
| Items Per Page | 8, 12, 16 | 12 |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible, hamburger menu hidden
- **Filter Section:** Full width with all controls visible inline
- **Agent Grid:** 4-column grid layout (4 agents per row)
- **Pagination:** Full page numbers visible
- **Footer:** Multi-column layout with all sections visible

### Tablet (768px - 1199px)

- **Header:** Partial navigation, hamburger menu becomes visible
- **Filter Section:** Controls may stack or wrap
- **Agent Grid:** 3-column or 2-column grid
- **Pagination:** Simplified with fewer page numbers
- **Footer:** Reduced columns, some sections stacked

### Mobile (< 768px)

- **Header:** Hamburger menu only, logo and login visible
- **Filter Section:** Stacked vertically, collapsible
- **Agent Grid:** Single column (1 agent per row) or 2-column
- **Pagination:** Previous/Next buttons only
- **Agent Card:** Full width, stacked content
- **Footer:** Single column stacked, all sections collapsed

### Agent Card Adjustments

| Viewport | Photo Size | Layout | Visible Info |
|----------|------------|--------|--------------|
| Desktop | 120x120px | Card with all fields | All fields visible |
| Tablet | 100x100px | Compact card | Essential fields |
| Mobile | 80x80px | Stacked layout | Name, Title, Phone, Rating |

### Grid Adjustments

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Agent Grid | 4 cols | 2-3 cols | 1-2 cols |
| Filter Controls | Inline | Stacked | Collapsed |
| Pagination | Full | Compact | Minimal |

---

## Data Models

### Agent Data Model

```typescript
interface Agent {
  id: string;
  name: string;
  slug: string;
  photo: string;
  title: string;
  phone: string;
  email: string;
  listingsCount: number;
  rating: number;
  reviewCount: number;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  bio?: string;
  specialties?: string[];
  location?: {
    city: string;
    state: string;
    country: string;
  };
  languages?: string[];
  experience?: number;
  verified: boolean;
}
```

### Filter State Model

```typescript
interface AgentFilterState {
  search: string;
  location: string;
  sortBy: 'newest' | 'rating' | 'listings' | 'name';
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

---

## API Integration Points

### Get Agents List

```
Endpoint: /api/agents
Method: GET
Query Parameters:
  - search: string (optional)
  - location: string (optional)
  - sort: string (optional)
  - page: number (default: 1)
  - limit: number (default: 12)

Response:
{
  agents: Agent[],
  pagination: PaginationState,
  filters: {
    locations: string[],
    sortOptions: string[]
  }
}
```

### Search Agents

```
Endpoint: /api/agents/search
Method: GET
Query Parameters:
  - query: string (required)
  - location: string (optional)

Response:
{
  agents: Agent[],
  totalResults: number
}
```

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy (h1, h2, h3)
- ARIA labels for all interactive elements
- Keyboard navigation support for all controls
- Focus states on all interactive elements
- Alt text for all images including agent photos
- Screen reader compatible grid navigation
- High contrast text on all backgrounds
- Skip links for main content
- Accessible dropdown menus with proper focus management
- Form labels properly associated with inputs

---

## Performance Considerations

- Lazy loading for agent photos (below the fold)
- Pagination to limit initial data load
- Debounced search input to reduce API calls
- Memoized agent cards for re-render optimization
- Image placeholder/skeleton during load
- Virtual scrolling potential for large datasets
- Cached filter options
- Optimistic UI updates for favorites/actions

---

## SEO Considerations

- Page title: "Agents || Homez - Real Estate NextJS Template"
- Meta description for agent directory
- Structured data for agent profiles (Person schema)
- Breadcrumb navigation with schema markup
- Canonical URL for pagination
- Open Graph tags for social sharing
- Sitemap inclusion for all agent pages

---

## State Management

### Local Component State

```
AgentListPage State:
- agents: Agent[]
- filters: AgentFilterState
- pagination: PaginationState
- isLoading: boolean
- error: string | null
- viewMode: 'grid' | 'list'
```

### URL State

```
Query Parameters:
- ?search=string
- ?location=string
- ?sort=string
- ?page=number
- ?view=grid|list
```

---

## User Flows

### Browse Agents Flow

1. User lands on Agents page
2. System displays grid of agents with default sorting
3. User scrolls through agent cards
4. User can click on any agent card to view full profile
5. Agent Single page opens with detailed information

### Search/Filter Agents Flow

1. User enters search term in search input
2. System filters agents in real-time (debounced)
3. User can select location from dropdown
4. User can select sort option
5. Results update automatically
6. User clicks on desired agent card

### Authentication Flow

1. User clicks "Login / Register" button
2. Modal opens with Sign In / New Account tabs
3. User enters credentials or social login
4. On success, modal closes and user state updates
5. Login button changes to user profile menu

---

## Error Handling

### API Error States

```
Error Types:
- Network Error: "Unable to connect. Please check your connection."
- Server Error: "Something went wrong. Please try again later."
- No Results: "No agents found matching your criteria."
- Timeout Error: "Request timed out. Please try again."

Error Display:
- Inline error messages in filter section
- Toast notifications for transient errors
- Error boundary for component failures
```

### Form Validation Errors

```
Validation Messages:
- Email: "Please enter a valid email address"
- Required: "This field is required"
- Password: "Password must be at least 8 characters"
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
| `fade-up` | Agent grid cards | 1200ms | 100ms | ease |
| CSS Transitions | Hover effects | 300ms | 0ms | ease |

### CSS Transition Animations

```css
/* Card hover animation */
.agent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Button hover animation */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
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

### Agent Cards Grid Animation

```javascript
// components/AgentsGrid.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgentCardsAnimation() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.agent-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return gridRef;
}

// Agent card hover animation
export function useAgentCardHover(cardRef: HTMLElement | null) {
  useEffect(() => {
    if (!cardRef) return;

    const handleEnter = () => {
      gsap.to(cardRef, {
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleLeave = () => {
      gsap.to(cardRef, {
        y: 0,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        duration: 0.3,
        ease: 'power2.out'
      });
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

### Filter Section Animation

```javascript
// components/AgentFilters.tsx
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

export function useFilterAnimation() {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterRef.current) return;

    const filterItems = filterRef.current.querySelectorAll('.filter-item');
    
    gsap.from(filterItems, {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return filterRef;
}

// Filter panel slide animation
export function animateFilterPanel(isOpen: boolean, panelRef: HTMLElement) {
  if (isOpen) {
    gsap.fromTo(panelRef, 
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  } else {
    gsap.to(panelRef, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    });
  }
}
```

### Pagination Animation

```javascript
// components/Pagination.tsx
import { gsap } from 'gsap';

export function usePaginationAnimation() {
  const animatePageTransition = (gridElement: HTMLElement) => {
    // Fade out current content
    gsap.to(gridElement, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Content would be updated here
        // Then fade in new content
        gsap.fromTo(gridElement,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      }
    });
  };

  return { animatePageTransition };
}
```

### Search Results Animation

```javascript
// components/AgentSearch.tsx
import { gsap } from 'gsap';

export function useSearchAnimation() {
  const animateSearchResults = (containerRef: HTMLElement, hasResults: boolean) => {
    if (hasResults) {
      gsap.from(containerRef.querySelectorAll('.agent-card'), {
        opacity: 0,
        scale: 0.95,
        stagger: 0.05,
        duration: 0.4,
        ease: 'back.out(1.2)'
      });
    } else {
      // No results state animation
      gsap.from('.no-results-message', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  return { animateSearchResults };
}
```

### Loading Skeleton Animation

```javascript
// components/AgentCardSkeleton.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useSkeletonAnimation() {
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skeletonRef.current) return;

    const skeletons = skeletonRef.current.querySelectorAll('.skeleton-item');
    
    gsap.from(skeletons, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    });
  }, []);

  return skeletonRef;
}
```

### Complete Animation Hook

```javascript
// hooks/useAgentPageAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAgentPageAnimations() {
  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.from('.page-title', {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from('.filter-section', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3');

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
```

### Performance Tips

1. **Use `will-change` CSS property** for animated elements to enable GPU acceleration
2. **Implement `ScrollTrigger` cleanup** in React `useEffect` return functions
3. **Use `gsap.quickSetter()`** for frequently updated values
4. **Batch DOM queries** before animations to minimize layout thrashing
5. **Use `stagger`** for sequential animations instead of individual tweens

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
}
```

### Typography Variables

```css
:root {
  --title-font-family: "Poppins", sans-serif;
  --body-font-family: "DM Sans", sans-serif;
}

/* Font Sizes */
.fz12 { font-size: 12px; }
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

1. **Bootstrap 5** - Grid system, components (modals, offcanvas, tabs)
2. **Emotion CSS-in-JS** - Dynamic styling with `css-*` classes
3. **SCSS** - Custom styles with variables and mixins

### CSS Class Patterns

```css
/* Utility classes */
.p30 { padding: 30px; }
.pr40 { padding-right: 40px; }
.pr20-lg { padding-right: 20px; } /* Responsive */
.mb10 { margin-bottom: 10px; }
.mb15 { margin-bottom: 15px; }
.mb20 { margin-bottom: 20px; }
.mb25 { margin-bottom: 25px; }
.mb30 { margin-bottom: 30px; }
.mr10 { margin-right: 10px; }
.ml20 { margin-left: 20px; }
.mt20 { margin-top: 20px; }
.mt30 { margin-top: 30px; }
.mt60 { margin-top: 60px; }
.pt30 { padding-top: 30px; }
.pb30 { padding-bottom: 30px; }

/* Flex utilities */
.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-between { justify-content: space-between; }
.justify-content-center { justify-content: center; }

/* Text utilities */
.text-center { text-align: center; }
.text-white { color: #ffffff; }
.text-gray { color: #64748b; }
.fw600 { font-weight: 600; }
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

- Agent cards have consistent hover effects with shadow elevation
- Rating stars use filled/star icons based on rating value
- Social links open in new tabs
- Phone numbers are clickable (tel: protocol)
- Email addresses are clickable (mailto: protocol)
- Grid/List view preference persists in localStorage
- Pagination preserves filter state in URL
- Agent photo placeholder shown during image load
- Verified agents may have badge indicator
- Listings count links to filtered property results
