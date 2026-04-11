# Agent Single - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/agent-single/1
- **Page Title:** Agent Single || Homez - Real Estate NextJS Template

---

## Page Overview

The Agent Single page is a detailed profile page for individual real estate agents. It provides comprehensive information about the agent including their professional background, contact details, property listings, client reviews, and a contact form for direct communication. This page serves as the primary touchpoint for users to evaluate and connect with specific agents they found through the Agents listing page or property listings.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Agent Profile Header** - Large hero section with agent photo, name, title, and key stats
3. **Two-Column Layout**:
   - **Left Column (Main Content)**:
     - About Section
     - Specialties Section
     - Property Listings Section
     - Reviews Section
   - **Right Column (Sidebar)**:
     - Contact Information Card
     - Contact Form
     - Social Media Links
     - Quick Stats Card
4. **Similar Agents Section** - Horizontal carousel of related agents
5. **Footer** - Multi-column layout with newsletter, links, and social media

---

## Data Content Structure

### 1. Header/Navigation Data

```
Navigation Items:
- Home (dropdown with 10 versions)
- Listing (dropdown with Grid View, Map Style, List View)
- Property (dropdown with Agents, Single Style, Dashboard)
  - Agents submenu:
    - Agents (listing page)
    - Agent Single (current page - active)
    - Agency
    - Agency Single
- Blog (dropdown with Blog List V1-V3, Blog Single)
- Pages (dropdown with About, Contact, Compare, Pricing, FAQ, Login, Register, 404, Invoice)

Header Actions:
- Login / Register button (opens authentication modal)
- Add Property link with arrow icon (links to /dashboard-add-property)
- Hamburger menu (mobile - opens offcanvas sidebar)
```

### 2. Agent Profile Header Data

```
Agent Header Information:
- Profile Photo: Large circular/bordered agent photo
- Agent Name: Full name (e.g., "Arlene McCoy")
- Professional Title: Job title (e.g., "Real Estate Agent", "Senior Broker")
- Location: City, State (e.g., "New York City, NY")
- Verification Badge: If agent is verified

Quick Stats (displayed prominently):
- Total Listings: Number of properties (e.g., "24 Properties")
- Sales: Number of sales completed (e.g., "156 Sales")
- Rating: Average rating (e.g., "4.9 Rating")
- Experience: Years in industry (e.g., "8 Years Experience")
```

### 3. About Section Data

```
About Section:
- Section Title: "About Me"
- Biography: Full professional biography
  - Background and experience
  - Areas of expertise
  - Professional philosophy
  - Personal interests (optional)

Sample Biography:
"Arlene McCoy is a dedicated real estate professional with over 8 years of experience 
in the New York City market. Specializing in luxury residential properties and 
investment opportunities, Arlene has helped hundreds of clients find their perfect 
home or investment property. Her deep knowledge of the local market, combined with 
her commitment to client satisfaction, has earned her recognition as one of the 
top-performing agents in the region."

Key Highlights:
- Years of Experience: 8
- Areas Served: New York City, Manhattan, Brooklyn
- Languages Spoken: English, Spanish
- License Number: NY-RE-12345
```

### 4. Specialties Section Data

```
Specialties Section:
- Section Title: "Specialties"
- Specialty Tags/Chips:
  - "Luxury Properties"
  - "Residential Sales"
  - "First-Time Buyers"
  - "Investment Properties"
  - "Relocation Services"
  - "Condominiums"
  - "Single Family Homes"
  - "Commercial Real Estate"

Displayed as:
- Colored tags or pills
- Clickable to filter properties
- Grouped by category (optional)
```

### 5. Property Listings Section Data

```
Property Listings Section:
- Section Title: "My Listings"
- View All Link: Link to filtered property search

Property Cards (Horizontal carousel or grid):

Property Card 1:
- Image: Property listing photo
- Badge: "FOR SALE" or "FOR RENT"
- Price: "$1,250,000" or "$3,500/mo"
- Title: "Modern Downtown Apartment"
- Location: "New York City, NY"
- Beds: "3 bed"
- Baths: "2 bath"
- Sqft: "1,500 sqft"
- Status: Active/Sold/Pending

Property Card 2:
- Image: Property listing photo
- Badge: "FEATURED"
- Price: "$2,100,000"
- Title: "Luxury Penthouse Suite"
- Location: "Manhattan, NY"
- Beds: "4 bed"
- Baths: "3 bath"
- Sqft: "2,200 sqft"
- Status: Active

Property Card 3:
- Image: Property listing photo
- Badge: "FOR RENT"
- Price: "$4,800/mo"
- Title: "Spacious Family Home"
- Location: "Brooklyn, NY"
- Beds: "5 bed"
- Baths: "3 bath"
- Sqft: "2,800 sqft"
- Status: Active

Property Card Navigation:
- Left/Right arrows for carousel
- "View All Listings" button
- Total count display (e.g., "24 Properties")
```

### 6. Reviews Section Data

```
Reviews Section:
- Section Title: "Client Reviews"
- Overall Rating: "4.9 out of 5"
- Total Reviews: "47 Reviews"
- Rating Breakdown:
  - 5 Stars: 38 reviews
  - 4 Stars: 7 reviews
  - 3 Stars: 2 reviews
  - 2 Stars: 0 reviews
  - 1 Star: 0 reviews

Individual Review Cards:

Review 1:
- Author Photo: User avatar
- Author Name: "Bessie Cooper"
- Rating: 5 stars (★★★★★)
- Date: "March 12, 2022"
- Review Text: "Arlene was exceptional throughout our home buying process. 
  Her knowledge of the market and attention to our needs made finding our 
  dream home a breeze. Highly recommend!"
- Helpful Count: "12 people found this helpful"
- Response: Agent response (optional)

Review 2:
- Author Photo: User avatar
- Author Name: "Darrell Steward"
- Rating: 5 stars (★★★★★)
- Date: "February 28, 2022"
- Review Text: "Professional, responsive, and truly cares about her clients. 
  Arlene helped us sell our home quickly and at a great price. Couldn't 
  have asked for a better experience."
- Helpful Count: "8 people found this helpful"

Review Actions:
- "Helpful" button (thumbs up)
- "Not Helpful" button (thumbs down)
- "Report Review" link
- "Show All Reviews" button
```

### 7. Contact Information Card Data (Sidebar)

```
Contact Card:
- Agent Photo: Smaller profile photo
- Agent Name: "Arlene McCoy"
- Title: "Real Estate Agent"

Contact Methods:
- Phone (Primary): (920) 012-3421 (clickable tel: link)
- Phone (Secondary): (920) 012-4390
- Email: arlene@homez.com (clickable mailto: link)
- WhatsApp: "Message on WhatsApp" button

Office Information:
- Agency: "Homez Real Estate"
- Office Address: "123 Property Lane, New York, NY 10001"
- Office Hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"

Quick Actions:
- "Call Now" button
- "Send Email" button
- "Schedule Meeting" button
```

### 8. Contact Form Data (Sidebar)

```
Contact Form:
- Section Title: "Send a Message"

Form Fields:
- Name: Text input (required)
  - Placeholder: "Your Name"
- Email: Email input (required)
  - Placeholder: "Your Email"
- Phone: Tel input (optional)
  - Placeholder: "Your Phone Number"
- I'm a: Dropdown select (optional)
  - Options: "Buyer", "Seller", "Renter", "Investor", "Other"
- Message: Textarea (required)
  - Placeholder: "I'm interested in learning more about..."
- Agreement: Checkbox
  - Text: "I agree to the Terms of Use and Privacy Policy"

Submit Button:
- Text: "Send Message"
- Icon: Arrow right
- Loading state: "Sending..."
- Success state: "Message Sent!"
```

### 9. Social Media Links Data

```
Social Media Section:
- Section Title: "Follow Me"

Social Links:
- Facebook: Profile URL with icon
- Twitter: Profile URL with icon
- Instagram: Profile URL with icon
- LinkedIn: Profile URL with icon
- YouTube: Channel URL with icon (optional)
- Pinterest: Profile URL with icon (optional)

Link Style:
- Icon buttons with hover effects
- Opens in new tab
- Shows follower count (optional)
```

### 10. Quick Stats Card Data (Sidebar)

```
Quick Stats Card:
- Section Title: "Agent Statistics"

Statistics:
- Properties Listed: "24"
- Properties Sold: "156"
- Active Listings: "12"
- Pending Sales: "3"
- Average Days on Market: "21"
- Client Satisfaction: "98%"
- Response Time: "< 1 hour"
- Member Since: "January 2016"
```

### 11. Similar Agents Section Data

```
Similar Agents Section:
- Section Title: "Similar Agents"
- Section Subtitle: "Other agents you might like"

Agent Cards (Horizontal carousel):

Agent Card 1:
- Photo: Agent avatar
- Name: "Kathryn Murphy"
- Title: "Senior Broker"
- Rating: 4.8 (5 reviews)
- Listings: 18
- "View Profile" button

Agent Card 2:
- Photo: Agent avatar
- Name: "Leslie Alexander"
- Title: "Real Estate Broker"
- Rating: 5.0 (12 reviews)
- Listings: 20
- "View Profile" button

Agent Card 3:
- Photo: Agent avatar
- Name: "Floyd Miles"
- Title: "Property Consultant"
- Rating: 4.7 (8 reviews)
- Listings: 15
- "View Profile" button

Carousel Navigation:
- Left/Right arrow buttons
- Dots pagination
```

### 12. Footer Data

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
| BreadcrumbNav | Breadcrumb navigation | Below header |
| LoginButton | Authentication trigger button | Right side of header |
| AddPropertyButton | CTA for property submission | Right side of header |
| HamburgerMenu | Mobile menu toggle | Right side (mobile) |

### Agent Profile Header Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgentPhotoLarge | Large profile image | Profile header |
| AgentName | Agent name heading | Profile header |
| AgentTitle | Professional title | Profile header |
| AgentLocation | Location display | Profile header |
| VerificationBadge | Verified status badge | Profile header |
| QuickStatsRow | Key statistics display | Profile header |
| ShareButton | Share profile trigger | Profile header |
| SaveAgentButton | Save/favorite agent | Profile header |

### Main Content Components

| Component | Description | Location |
|-----------|-------------|----------|
| AboutSection | Biography container | Left column |
| BiographyText | Full agent biography | About section |
| SpecialtiesSection | Specialties container | Left column |
| SpecialtyTag | Individual specialty chip | Specialties section |
| ListingsSection | Property listings container | Left column |
| PropertyCard | Individual property card | Listings section |
| ReviewsSection | Client reviews container | Left column |
| ReviewCard | Individual review card | Reviews section |
| RatingSummary | Overall rating display | Reviews section |

### Sidebar Components

| Component | Description | Location |
|-----------|-------------|----------|
| ContactCard | Contact info container | Right sidebar |
| PhoneLink | Clickable phone number | Contact card |
| EmailLink | Clickable email address | Contact card |
| WhatsAppButton | WhatsApp message trigger | Contact card |
| ContactForm | Message form container | Right sidebar |
| FormInput | Text/email/tel inputs | Contact form |
| FormTextarea | Message input | Contact form |
| FormSubmitButton | Send message button | Contact form |
| SocialLinksCard | Social media container | Right sidebar |
| SocialLinkButton | Individual social link | Social card |
| StatsCard | Statistics container | Right sidebar |
| StatItem | Individual statistic | Stats card |

### Similar Agents Components

| Component | Description | Location |
|-----------|-------------|----------|
| SimilarAgentsSection | Related agents container | Below main content |
| SimilarAgentCard | Agent preview card | Similar agents section |
| CarouselControls | Navigation arrows | Similar agents section |

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
| Call Now | Initiates phone call (tel:) | Contact card |
| Send Email | Opens email client (mailto:) | Contact card |
| WhatsApp | Opens WhatsApp chat | Contact card |
| Send Message | Submits contact form | Contact form |
| View All Listings | Navigates to filtered property search | Listings section |
| Show All Reviews | Expands review list | Reviews section |
| Helpful | Marks review as helpful | Review cards |
| View Profile | Navigates to similar agent profile | Similar agents |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Name | text | "Your Name" | Required |
| Email | email | "Your Email" | Required, email format |
| Phone | tel | "Your Phone Number" | Optional, phone format |
| I'm a | select | "Select type" | Optional |
| Message | textarea | "I'm interested in..." | Required, min 10 chars |
| Agreement | checkbox | Terms agreement | Required |
| Newsletter Email | email | "Your Email" | Email format |

### Links

| Link Type | Count | Locations |
|-----------|-------|-----------|
| Navigation Links | 5 main + 40+ submenu | Header |
| Property Links | 3-6 | Listings section |
| Similar Agent Links | 3 | Similar agents section |
| Footer Links | 15+ | Footer columns |
| Social Links | 4-6 | Sidebar, Footer |
| Phone Links | 2 | Contact card |
| Email Links | 1 | Contact card |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | 10 home versions | Header navigation |
| Listing Menu | 15 layout options | Header navigation |
| Property Menu | Agents + Single + Dashboard | Header navigation |
| Blog Menu | 4 blog layouts | Header navigation |
| Pages Menu | 9 page options | Header navigation |
| I'm a Dropdown | Buyer, Seller, Renter, Investor, Other | Contact form |

### Interactive States

| Element | Hover State | Active State | Focus State |
|---------|-------------|--------------|-------------|
| Property Card | Elevation shadow | Border highlight | Outline |
| Agent Photo | Slight zoom | - | - |
| Social Links | Color change | - | Outline |
| Form Submit | Darker shade | Loading spinner | Outline |
| Specialty Tags | Color change | - | Outline |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible
- **Layout:** Two-column layout (70% left / 30% right)
- **Agent Photo:** Large (200x200px)
- **Property Listings:** 3-column grid or carousel
- **Sidebar:** Fixed position while scrolling
- **Similar Agents:** Horizontal carousel, 3-4 visible
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Hamburger menu visible
- **Layout:** Two-column layout (60% left / 40% right) or stacked
- **Agent Photo:** Medium (150x150px)
- **Property Listings:** 2-column grid
- **Sidebar:** Stacked below main content
- **Similar Agents:** 2-3 visible cards
- **Footer:** Reduced columns

### Mobile (< 768px)

- **Header:** Hamburger menu only
- **Layout:** Single column stacked
- **Agent Photo:** Small (100x100px), centered
- **Property Listings:** Single column
- **Sidebar:** Full width, stacked below content
- **Contact Form:** Full width inputs
- **Similar Agents:** Single card visible, horizontal scroll
- **Footer:** Single column stacked

### Contact Form Adjustments

| Viewport | Layout | Input Size | Button Width |
|----------|--------|------------|--------------|
| Desktop | Stacked | Full width | Full width |
| Tablet | Stacked | Full width | Full width |
| Mobile | Stacked | Full width | Full width |

### Agent Header Adjustments

| Viewport | Photo Position | Stats Layout | Action Buttons |
|----------|----------------|--------------|----------------|
| Desktop | Left of text | Horizontal row | Inline |
| Tablet | Left of text | 2-column grid | Wrapped |
| Mobile | Above text | 2-column grid | Stacked |

---

## Data Models

### Agent Profile Data Model

```typescript
interface AgentProfile {
  id: string;
  name: string;
  slug: string;
  photo: string;
  title: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  bio: string;
  specialties: string[];
  phone: {
    primary: string;
    secondary?: string;
  };
  email: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  rating: number;
  reviewCount: number;
  listingsCount: number;
  salesCount: number;
  experience: number;
  verified: boolean;
  languages: string[];
  licenseNumber: string;
  agency: {
    id: string;
    name: string;
    logo: string;
  };
  officeAddress: string;
  officeHours: string;
  memberSince: string;
  responseTime: string;
  clientSatisfaction: number;
}
```

### Review Data Model

```typescript
interface Review {
  id: string;
  author: {
    name: string;
    photo: string;
  };
  rating: number;
  date: string;
  text: string;
  helpfulCount: number;
  agentResponse?: {
    text: string;
    date: string;
  };
}
```

### Contact Form Data Model

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  userType: 'buyer' | 'seller' | 'renter' | 'investor' | 'other';
  message: string;
  agreedToTerms: boolean;
}
```

### Property Listing Preview Model

```typescript
interface PropertyPreview {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number;
  priceUnit: 'total' | 'mo';
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'for-sale' | 'for-rent' | 'sold' | 'pending';
  featured: boolean;
}
```

---

## API Integration Points

### Get Agent Profile

```
Endpoint: /api/agents/:id
Method: GET

Response:
{
  agent: AgentProfile,
  listings: PropertyPreview[],
  reviews: {
    items: Review[],
    summary: {
      average: number,
      total: number,
      breakdown: {
        5: number,
        4: number,
        3: number,
        2: number,
        1: number
      }
    }
  },
  similarAgents: AgentProfile[]
}
```

### Submit Contact Form

```
Endpoint: /api/agents/:id/contact
Method: POST
Body: ContactFormData

Response:
{
  success: boolean,
  message: "Your message has been sent successfully"
}
```

### Get Agent Listings

```
Endpoint: /api/agents/:id/listings
Method: GET
Query Parameters:
  - page: number
  - limit: number
  - status: string (optional)

Response:
{
  listings: PropertyPreview[],
  pagination: PaginationState
}
```

### Get Agent Reviews

```
Endpoint: /api/agents/:id/reviews
Method: GET
Query Parameters:
  - page: number
  - limit: number
  - sort: 'newest' | 'highest' | 'lowest'

Response:
{
  reviews: Review[],
  pagination: PaginationState,
  summary: RatingSummary
}
```

### Mark Review Helpful

```
Endpoint: /api/reviews/:reviewId/helpful
Method: POST

Response:
{
  success: boolean,
  helpfulCount: number
}
```

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for all interactive elements
- Keyboard navigation support throughout
- Focus states on all interactive elements
- Alt text for all images including agent photos and property images
- Screen reader compatible rating displays
- Form labels properly associated with inputs
- Error messages linked to form fields
- Skip links for main content areas
- Accessible carousel controls
- High contrast text on all backgrounds

---

## Performance Considerations

- Lazy loading for property images and agent photos
- Infinite scroll or pagination for reviews
- Debounced form validation
- Optimistic UI updates for helpful button
- Cached agent profile data
- Preloaded similar agents
- Image placeholder during load
- Skeleton loading states
- Memoized review cards
- Virtual scrolling for long review lists

---

## SEO Considerations

- Page title: "{Agent Name} - Agent Profile || Homez"
- Meta description from agent bio
- Structured data for Person and RealEstateAgent schemas
- Open Graph tags with agent photo
- Canonical URL for agent profile
- Breadcrumb navigation with schema markup
- Reviews schema markup
- Sitemap inclusion for agent profiles

---

## State Management

### Page State

```
AgentSinglePage State:
- agent: AgentProfile | null
- listings: PropertyPreview[]
- reviews: Review[]
- reviewSummary: RatingSummary | null
- similarAgents: AgentProfile[]
- isLoading: boolean
- error: string | null
- contactFormState: {
    data: ContactFormData,
    isSubmitting: boolean,
    isSuccess: boolean,
    errors: Record<string, string>
  }
```

### Form Validation Rules

```
Validation Rules:
- name: required, min 2 characters
- email: required, valid email format
- phone: optional, valid phone format
- message: required, min 10 characters, max 1000 characters
- agreedToTerms: must be true
```

---

## User Flows

### View Agent Profile Flow

1. User navigates to agent single page from:
   - Agents listing page
   - Property listing (agent attribution)
   - Search results
   - Direct URL
2. Page loads with agent profile data
3. User scrolls through sections
4. User can interact with any section

### Contact Agent Flow

1. User scrolls to contact form in sidebar
2. User fills out form fields
3. User checks agreement checkbox
4. User clicks "Send Message"
5. Form validates and submits
6. Success message displayed
7. Agent receives notification

### View Agent Listings Flow

1. User scrolls to listings section
2. User browses property cards
3. User clicks on property card
4. Property single page opens

### Leave Review Flow

1. User clicks "Write a Review" button (if logged in)
2. Review form modal opens
3. User selects rating (1-5 stars)
4. User writes review text
5. User submits review
6. Review appears in reviews section

---

## Error Handling

### API Error States

```
Error Types:
- Agent Not Found: "This agent profile could not be found."
- Network Error: "Unable to load agent data. Please try again."
- Server Error: "Something went wrong. Please try again later."
- Form Submission Error: "Failed to send message. Please try again."

Error Display:
- Full page error for agent not found
- Inline error messages for form validation
- Toast notifications for submission errors
- Retry buttons for recoverable errors
```

### Form Validation Errors

```
Validation Messages:
- name: "Please enter your name"
- email: "Please enter a valid email address"
- phone: "Please enter a valid phone number"
- message: "Please enter a message (minimum 10 characters)"
- agreedToTerms: "You must agree to the terms"
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
| `fade-up` | Main content sections | 1200ms | 300ms | ease |
| CSS Transitions | Hover effects, buttons | 300ms | 0ms | ease |
| CSS Transitions | Property cards hover | 300ms | 0ms | ease |

### CSS Transition Animations

```css
/* Property card hover animation */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Review card hover */
.review-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}

/* Sidebar card hover */
.contact-card:hover {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
}

/* Button hover animation */
.btn-thm:hover {
  background-color: #c53535;
  transform: translateY(-2px);
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

### Agent Profile Header Animation

```javascript
// components/AgentProfileHeader.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useAgentProfileAnimation() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();
    
    // Profile photo animation
    tl.from('.agent-profile-photo', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'power3.out'
    })
    // Name and title slide in
    .from('.agent-name', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.agent-title', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    // Stats counter animation
    .from('.stat-item', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')
    // Action buttons
    .from('.header-actions button', {
      opacity: 0,
      y: 15,
      stagger: 0.08,
      duration: 0.4,
      ease: 'back.out(1.4)'
    }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return headerRef;
}
```

### Contact Form Entrance Animation

```javascript
// components/AgentContactForm.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useContactFormAnimation() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const formGroups = formRef.current.querySelectorAll('.form-group');
    const submitBtn = formRef.current.querySelector('button[type="submit"]');

    gsap.from(formGroups, {
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 30,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.from(submitBtn, {
      scrollTrigger: {
        trigger: submitBtn,
        start: 'top 90%',
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'back.out(1.4)',
      delay: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return formRef;
}

// Form submission animation
export function animateFormSubmission(formRef: HTMLElement, isSuccess: boolean) {
  if (isSuccess) {
    gsap.to(formRef, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Show success message
        gsap.fromTo('.success-message',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)' }
        );
      }
    });
  }
}
```

### Property Listings Animation

```javascript
// components/AgentListings.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgentListingsAnimation() {
  const listingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listingsRef.current) return;

    const propertyCards = listingsRef.current.querySelectorAll('.property-card');

    gsap.from(propertyCards, {
      scrollTrigger: {
        trigger: listingsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return listingsRef;
}
```

### Reviews Section Animation

```javascript
// components/AgentReviews.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useReviewsAnimation() {
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reviewsRef.current) return;

    // Rating summary animation
    gsap.from('.rating-summary', {
      scrollTrigger: {
        trigger: reviewsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Review cards stagger animation
    const reviewCards = reviewsRef.current.querySelectorAll('.review-card');
    
    gsap.from(reviewCards, {
      scrollTrigger: {
        trigger: reviewsRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -40,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Star rating animation
    const stars = reviewsRef.current.querySelectorAll('.star-filled');
    gsap.from(stars, {
      scale: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(2)',
      delay: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return reviewsRef;
}
```

### Sidebar Animation

```javascript
// components/AgentSidebar.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useSidebarAnimation() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    const sidebarCards = sidebarRef.current.querySelectorAll('.sidebar-card');

    gsap.from(sidebarCards, {
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return sidebarRef;
}
```

### Similar Agents Carousel Animation

```javascript
// components/SimilarAgents.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useSimilarAgentsAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const agentCards = sectionRef.current.querySelectorAll('.similar-agent-card');

    gsap.from(agentCards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.5,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return sectionRef;
}

// Carousel slide animation
export function animateCarousel(direction: 'prev' | 'next', carouselRef: HTMLElement) {
  const cards = carouselRef.querySelectorAll('.similar-agent-card');
  
  gsap.to(cards, {
    opacity: 0,
    x: direction === 'next' ? -50 : 50,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      // Content update would happen here
      gsap.fromTo(cards,
        { opacity: 0, x: direction === 'next' ? 50 : -50 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }
  });
}
```

### Specialties Tags Animation

```javascript
// components/AgentSpecialties.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useSpecialtiesAnimation() {
  const specialtiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!specialtiesRef.current) return;

    const tags = specialtiesRef.current.querySelectorAll('.specialty-tag');

    gsap.from(tags, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(1.4)'
    });

    // Hover animation for each tag
    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        gsap.to(tag, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
      });
      tag.addEventListener('mouseleave', () => {
        gsap.to(tag, { scale: 1, duration: 0.2, ease: 'power2.out' });
      });
    });

    return () => {
      gsap.killTweensOf(tags);
    };
  }, []);

  return specialtiesRef;
}
```

### Complete Page Animation Hook

```javascript
// hooks/useAgentSingleAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAgentSingleAnimations() {
  useEffect(() => {
    // Master timeline for page load
    const masterTl = gsap.timeline();

    // Initial header animation
    masterTl.from('.agent-profile-header', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Scroll-triggered animations
    ScrollTrigger.batch('.animate-on-scroll', {
      start: 'top 85%',
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 30,
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
  
  /* Review Colors */
  --review-star-color: #f59e0b;      /* Gold for stars */
}
```

### Typography Variables

```css
:root {
  --title-font-family: "Poppins", sans-serif;
  --body-font-family: "DM Sans", sans-serif;
}

/* Font Sizes */
.fz10 { font-size: 10px; }  /* Review stars */
.fz12 { font-size: 12px; }
.fz14 { font-size: 14px; }
.fz15 { font-size: 15px; }
.fz16 { font-size: 16px; }
.fz17 { font-size: 17px; }
.fz18 { font-size: 18px; }
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

1. **Bootstrap 5** - Grid system, components (modals, offcanvas, tabs, accordion)
2. **Emotion CSS-in-JS** - Dynamic styling with `css-*` classes
3. **SCSS** - Custom styles with variables and mixins

### CSS Class Patterns

```css
/* Agent profile specific */
.agent-single-details { /* Agent info section */ }
.agent-single-form { /* Contact form container */ }
.agent-single-accordion { /* FAQ accordion */ }

/* Review specific */
.mbp_pagination_comments { /* Reviews container */ }
.blog-single-review { /* Star rating display */ }
.review_cansel_btns { /* Helpful/Not helpful buttons */ }
.review-color2 { color: #f59e0b; }  /* Star color */

/* Personal info card */
.agen-personal-info { /* Agent details card */ }
.list-news-style { /* Info list row */ }
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

- Agent photos have consistent circular/bordered styling
- Rating stars use filled/empty icon states
- Social links open in new tabs
- Phone numbers are clickable (tel: protocol)
- Email addresses are clickable (mailto: protocol)
- Contact form has client-side and server-side validation
- Reviews show relative dates (e.g., "2 days ago")
- Similar agents are based on location and specialties
- Sidebar can be sticky on desktop for easy access
- Agent can respond to reviews (if logged in as agent)
- WhatsApp integration requires WhatsApp Business API
- Form submission sends email notification to agent
- Agent statistics update in real-time
- Listings carousel shows most recent first
