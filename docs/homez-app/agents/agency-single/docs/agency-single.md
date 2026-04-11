# Agency Single - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/agency-single/1
- **Page Title:** Agency Single || Homez - Real Estate NextJS Template

---

## Page Overview

The Agency Single page is a detailed profile page for individual real estate agencies. It provides comprehensive information about the agency including company background, team members, property portfolio, client reviews, and a contact form for direct communication. This page serves as the primary touchpoint for users to evaluate and connect with specific agencies they found through the Agency listing page or property listings.

---

## Layout Structure

### Visual Layout Hierarchy

1. **Header/Navigation Bar** - Fixed top navigation with logo, menu items, login/register button, and add property CTA
2. **Agency Profile Header** - Large hero section with agency logo, name, tagline, and key stats
3. **Two-Column Layout**:
   - **Left Column (Main Content)**:
     - About Section
     - Our Services Section
     - Team Members Section
     - Property Listings Section
     - Reviews Section
   - **Right Column (Sidebar)**:
     - Contact Information Card
     - Contact Form
     - Office Hours Card
     - Quick Stats Card
     - Service Areas Card
4. **Similar Agencies Section** - Horizontal carousel of related agencies
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
    - Agents
    - Agent Single
    - Agency
    - Agency Single (current page - active)
- Blog (dropdown with Blog List V1-V3, Blog Single)
- Pages (dropdown with About, Contact, Compare, Pricing, FAQ, Login, Register, 404, Invoice)

Header Actions:
- Login / Register button (opens authentication modal)
- Add Property link with arrow icon (links to /dashboard-add-property)
- Hamburger menu (mobile - opens offcanvas sidebar)
```

### 2. Agency Profile Header Data

```
Agency Header Information:
- Agency Logo: Large company logo
- Agency Name: Full company name (e.g., "Homez Real Estate")
- Tagline: Company slogan (e.g., "Your Trusted Partner in Real Estate")
- Verification Badge: If agency is verified
- Rating Display: Overall rating with stars

Quick Stats (displayed prominently):
- Total Agents: Number of agents (e.g., "45 Agents")
- Total Listings: Number of properties (e.g., "234 Listings")
- Years in Business: Company age (e.g., "15 Years")
- Sales Volume: Total sales (e.g., "$2.5B+ Sales")
- Client Satisfaction: Rating percentage (e.g., "98% Satisfaction")
- Locations: Number of offices (e.g., "8 Locations")

Header Actions:
- "Contact Agency" button
- "View All Listings" button
- "Follow Agency" button (if logged in)
- Share button (social sharing)
```

### 3. About Section Data

```
About Section:
- Section Title: "About Us"
- Company Description: Full company background
  - Company history
  - Mission statement
  - Values and philosophy
  - Market position
  - Achievements and awards

Sample Description:
"Homez Real Estate has been a leader in the real estate industry for over 15 years. 
Founded in 2009, we have grown from a small local agency to a full-service real 
estate company with 8 offices across the country. Our team of 45 dedicated 
professionals is committed to providing exceptional service to buyers, sellers, 
and investors alike.

Our mission is to make the real estate experience seamless and rewarding for 
every client. We combine cutting-edge technology with personalized service to 
deliver results that exceed expectations. Whether you're a first-time homebuyer 
or a seasoned investor, our team has the expertise to guide you through every 
step of the process."

Key Highlights:
- Founded: 2009
- Headquarters: New York City, NY
- Offices: 8 locations nationwide
- Team Size: 45 licensed agents
- Languages Spoken: English, Spanish, Chinese, French
- Service Area: 50+ cities
```

### 4. Our Services Section Data

```
Services Section:
- Section Title: "Our Services"
- Section Subtitle: "Comprehensive real estate solutions for every need"

Service Cards (Grid layout):

Service 1:
- Icon: House icon
- Title: "Residential Sales"
- Description: "Expert guidance for buying or selling your home with market-leading results"
- Link: View residential listings

Service 2:
- Icon: Building icon
- Title: "Commercial Real Estate"
- Description: "Full-service commercial property sales and leasing for businesses of all sizes"
- Link: View commercial listings

Service 3:
- Icon: Key icon
- Title: "Property Management"
- Description: "Comprehensive property management services to maximize your investment returns"
- Link: Learn more

Service 4:
- Icon: Rent icon
- Title: "Rental Services"
- Description: "Extensive rental listings and tenant placement services for landlords and tenants"
- Link: View rentals

Service 5:
- Icon: Chart icon
- Title: "Investment Advisory"
- Description: "Strategic investment guidance to help build and diversify your real estate portfolio"
- Link: Schedule consultation

Service 6:
- Icon: Plane icon
- Title: "Relocation Services"
- Description: "Complete relocation assistance for individuals and corporate transfers"
- Link: Learn more
```

### 5. Team Members Section Data

```
Team Section:
- Section Title: "Meet Our Team"
- Section Subtitle: "Our experienced professionals are here to help you"
- View All Link: "/agency/1/team"

Team Member Cards (Horizontal carousel):

Team Member 1:
- Photo: Agent photo
- Name: "Arlene McCoy"
- Title: "Senior Real Estate Agent"
- Phone: "(920) 012-3421"
- Email: "arlene@homez.com"
- Rating: 5.0 (24 reviews)
- Listings: 18 properties
- Specialties: ["Luxury Homes", "First-Time Buyers"]
- Social: LinkedIn
- "View Profile" button

Team Member 2:
- Photo: Agent photo
- Name: "Kathryn Murphy"
- Title: "Senior Broker"
- Phone: "(920) 012-3422"
- Email: "kathryn@homez.com"
- Rating: 4.9 (31 reviews)
- Listings: 24 properties
- Specialties: ["Commercial", "Investment"]
- Social: LinkedIn
- "View Profile" button

Team Member 3:
- Photo: Agent photo
- Name: "Leslie Alexander"
- Title: "Real Estate Agent"
- Phone: "(920) 012-3423"
- Email: "leslie@homez.com"
- Rating: 4.8 (19 reviews)
- Listings: 15 properties
- Specialties: ["Residential", "Condominiums"]
- Social: LinkedIn
- "View Profile" button

Team Member 4:
- Photo: Agent photo
- Name: "Floyd Miles"
- Title: "Property Consultant"
- Phone: "(920) 012-3424"
- Email: "floyd@homez.com"
- Rating: 5.0 (28 reviews)
- Listings: 22 properties
- Specialties: ["Land Sales", "New Development"]
- Social: LinkedIn
- "View Profile" button

Team Member 5:
- Photo: Agent photo
- Name: "Bessie Cooper"
- Title: "Senior Agent"
- Phone: "(920) 012-3425"
- Email: "bessie@homez.com"
- Rating: 4.7 (15 reviews)
- Listings: 12 properties
- Specialties: ["Rentals", "Property Management"]
- Social: LinkedIn
- "View Profile" button

Carousel Navigation:
- Left/Right arrow buttons
- Dots pagination
- Total count display (e.g., "45 Agents")
```

### 6. Property Listings Section Data

```
Property Listings Section:
- Section Title: "Our Listings"
- View All Link: Link to filtered property search
- Filter Tabs: "All", "For Sale", "For Rent", "Sold"

Property Cards (Grid layout):

Property Card 1:
- Image: Property listing photo
- Badge: "FOR SALE"
- Price: "$1,250,000"
- Title: "Modern Downtown Apartment"
- Location: "New York City, NY"
- Beds: "3 bed"
- Baths: "2 bath"
- Sqft: "1,500 sqft"
- Agent: "Arlene McCoy"
- Status: Active

Property Card 2:
- Image: Property listing photo
- Badge: "FEATURED"
- Price: "$2,100,000"
- Title: "Luxury Penthouse Suite"
- Location: "Manhattan, NY"
- Beds: "4 bed"
- Baths: "3 bath"
- Sqft: "2,200 sqft"
- Agent: "Kathryn Murphy"
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
- Agent: "Leslie Alexander"
- Status: Active

Property Card 4:
- Image: Property listing photo
- Badge: "SOLD"
- Price: "$875,000"
- Title: "Charming Studio Loft"
- Location: "Queens, NY"
- Beds: "1 bed"
- Baths: "1 bath"
- Sqft: "750 sqft"
- Agent: "Floyd Miles"
- Status: Sold

Property Card 5:
- Image: Property listing photo
- Badge: "FOR SALE"
- Price: "$3,500,000"
- Title: "Waterfront Estate"
- Location: "Staten Island, NY"
- Beds: "6 bed"
- Baths: "5 bath"
- Sqft: "4,500 sqft"
- Agent: "Arlene McCoy"
- Status: Active

Property Card 6:
- Image: Property listing photo
- Badge: "FOR RENT"
- Price: "$2,200/mo"
- Title: "Cozy Urban Apartment"
- Location: "Bronx, NY"
- Beds: "2 bed"
- Baths: "1 bath"
- Sqft: "900 sqft"
- Agent: "Bessie Cooper"
- Status: Active

Grid Navigation:
- Pagination or Load More button
- Filter tabs for property status
- Total count display (e.g., "234 Properties")
```

### 7. Reviews Section Data

```
Reviews Section:
- Section Title: "Client Reviews"
- Overall Rating: "4.9 out of 5"
- Total Reviews: "156 Reviews"
- Rating Breakdown:
  - 5 Stars: 128 reviews (82%)
  - 4 Stars: 21 reviews (13%)
  - 3 Stars: 5 reviews (3%)
  - 2 Stars: 2 reviews (1%)
  - 1 Star: 0 reviews (0%)

Individual Review Cards:

Review 1:
- Author Photo: User avatar
- Author Name: "Darrell Steward"
- Rating: 5 stars (★★★★★)
- Date: "March 15, 2024"
- Transaction Type: "Home Purchase"
- Review Text: "Outstanding service from start to finish. The Homez team made our 
  home buying experience incredibly smooth. They were knowledgeable, responsive, 
  and truly had our best interests at heart. Highly recommend!"
- Agent Mentioned: "Kathryn Murphy"
- Helpful Count: "24 people found this helpful"

Review 2:
- Author Photo: User avatar
- Author Name: "Ralph Edwards"
- Rating: 5 stars (★★★★★)
- Date: "February 28, 2024"
- Transaction Type: "Property Sale"
- Review Text: "Sold our house in just 2 weeks! The marketing strategy was excellent, 
  and we received multiple offers above asking price. Professional team that knows 
  the market inside and out."
- Agent Mentioned: "Arlene McCoy"
- Helpful Count: "18 people found this helpful"

Review 3:
- Author Photo: User avatar
- Author Name: "Eleanor Pena"
- Rating: 4 stars (★★★★☆)
- Date: "February 10, 2024"
- Transaction Type: "Rental"
- Review Text: "Great experience renting through Homez. The process was efficient 
  and the team was helpful throughout. Minor communication delays but overall 
  very satisfied with the outcome."
- Agent Mentioned: "Bessie Cooper"
- Helpful Count: "12 people found this helpful"

Review Actions:
- "Helpful" button (thumbs up)
- "Not Helpful" button (thumbs down)
- "Report Review" link
- Agent Response (if applicable)
- "Show All Reviews" button
```

### 8. Contact Information Card Data (Sidebar)

```
Contact Card:
- Agency Logo: Smaller logo
- Agency Name: "Homez Real Estate"

Contact Methods:
- Main Phone: (920) 123-4567 (clickable tel: link)
- Toll Free: (800) 555-HOME
- Email: info@homez.com (clickable mailto: link)
- Website: www.homez.com

Office Locations:
- Headquarters:
  - Address: "123 Property Lane, Suite 500"
  - City: "New York, NY 10001"
  - Phone: "(920) 123-4567"
- Branch Office 1:
  - Address: "456 Real Estate Ave"
  - City: "Los Angeles, CA 90001"
- Branch Office 2:
  - Address: "789 Broker Blvd"
  - City: "Chicago, IL 60601"

Quick Actions:
- "Call Now" button
- "Send Email" button
- "Schedule Consultation" button
- "Get Directions" button (map link)
```

### 9. Contact Form Data (Sidebar)

```
Contact Form:
- Section Title: "Send a Message"
- Subtitle: "We'll get back to you within 24 hours"

Form Fields:
- Name: Text input (required)
  - Placeholder: "Your Name"
- Email: Email input (required)
  - Placeholder: "Your Email"
- Phone: Tel input (optional)
  - Placeholder: "Your Phone Number"
- Inquiry Type: Dropdown select (required)
  - Options: "Buying", "Selling", "Renting", "Property Management", "Investment", "Other"
- Preferred Agent: Dropdown select (optional)
  - Options: List of agency agents
- Property Interest: Text input (optional)
  - Placeholder: "Property type or address"
- Message: Textarea (required)
  - Placeholder: "Tell us about your real estate needs..."
- Agreement: Checkbox (required)
  - Text: "I agree to the Terms of Use and Privacy Policy"

Submit Button:
- Text: "Send Message"
- Icon: Arrow right
- Loading state: "Sending..."
- Success state: "Message Sent!"
```

### 10. Office Hours Card Data (Sidebar)

```
Office Hours Card:
- Section Title: "Office Hours"

Hours:
- Monday: "9:00 AM - 6:00 PM"
- Tuesday: "9:00 AM - 6:00 PM"
- Wednesday: "9:00 AM - 6:00 PM"
- Thursday: "9:00 AM - 6:00 PM"
- Friday: "9:00 AM - 6:00 PM"
- Saturday: "10:00 AM - 4:00 PM"
- Sunday: "Closed"

Status Indicator:
- "Open Now" (green) or "Closed" (gray) based on current time
- Next available time display
```

### 11. Quick Stats Card Data (Sidebar)

```
Quick Stats Card:
- Section Title: "Agency Statistics"

Statistics:
- Total Agents: "45"
- Active Listings: "234"
- Properties Sold (YTD): "156"
- Average Days on Market: "21"
- Client Satisfaction: "98%"
- Response Time: "< 2 hours"
- Years in Business: "15"
- Total Sales Volume: "$2.5B+"
```

### 12. Service Areas Card Data (Sidebar)

```
Service Areas Card:
- Section Title: "Service Areas"

Areas List:
- New York City, NY
- Manhattan, NY
- Brooklyn, NY
- Queens, NY
- Bronx, NY
- Staten Island, NY
- Long Island, NY
- Westchester, NY

Map Preview:
- Interactive map showing service area coverage
- Click to expand full map
```

### 13. Social Media Links Data

```
Social Media Section:
- Section Title: "Follow Us"

Social Links:
- Facebook: Company page URL
- Twitter: Company profile URL
- Instagram: Company profile URL
- LinkedIn: Company page URL
- YouTube: Channel URL
- Pinterest: Company board URL

Link Style:
- Icon buttons with hover effects
- Opens in new tab
- Follower count display (optional)
```

### 14. Similar Agencies Section Data

```
Similar Agencies Section:
- Section Title: "Similar Agencies"
- Section Subtitle: "Other agencies you might be interested in"

Agency Cards (Horizontal carousel):

Agency Card 1:
- Logo: Agency logo
- Name: "Dream Properties Inc."
- Location: "Los Angeles, CA"
- Rating: 4.8 (98 reviews)
- Agents: 28
- "View Profile" button

Agency Card 2:
- Logo: Agency logo
- Name: "Metropolitan Realty"
- Location: "Chicago, IL"
- Rating: 4.7 (203 reviews)
- Agents: 62
- "View Profile" button

Agency Card 3:
- Logo: Agency logo
- Name: "Urban Living Group"
- Location: "San Francisco, CA"
- Rating: 4.8 (189 reviews)
- Agents: 52
- "View Profile" button

Carousel Navigation:
- Left/Right arrow buttons
- Dots pagination
```

### 15. Footer Data

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

### Agency Profile Header Components

| Component | Description | Location |
|-----------|-------------|----------|
| AgencyLogoLarge | Large company logo | Profile header |
| AgencyName | Agency name heading | Profile header |
| AgencyTagline | Company slogan | Profile header |
| VerificationBadge | Verified status badge | Profile header |
| RatingDisplay | Overall rating with stars | Profile header |
| QuickStatsRow | Key statistics display | Profile header |
| ShareButton | Share profile trigger | Profile header |
| FollowButton | Follow agency trigger | Profile header |
| ContactButton | Contact agency trigger | Profile header |
| ViewListingsButton | View all listings | Profile header |

### Main Content Components

| Component | Description | Location |
|-----------|-------------|----------|
| AboutSection | Company description container | Left column |
| DescriptionText | Full company description | About section |
| ServicesSection | Services container | Left column |
| ServiceCard | Individual service card | Services section |
| TeamSection | Team members container | Left column |
| TeamMemberCard | Individual team member card | Team section |
| ListingsSection | Property listings container | Left column |
| PropertyCard | Individual property card | Listings section |
| ReviewsSection | Client reviews container | Left column |
| ReviewCard | Individual review card | Reviews section |
| RatingSummary | Overall rating display | Reviews section |
| FilterTabs | Property status filters | Listings section |

### Sidebar Components

| Component | Description | Location |
|-----------|-------------|----------|
| ContactCard | Contact info container | Right sidebar |
| PhoneLink | Clickable phone number | Contact card |
| EmailLink | Clickable email address | Contact card |
| OfficeLocationsCard | Office locations | Right sidebar |
| ContactForm | Message form container | Right sidebar |
| FormInput | Text/email/tel inputs | Contact form |
| FormTextarea | Message input | Contact form |
| FormSubmitButton | Send message button | Contact form |
| OfficeHoursCard | Operating hours | Right sidebar |
| HoursRow | Individual day hours | Office hours card |
| StatsCard | Statistics container | Right sidebar |
| StatItem | Individual statistic | Stats card |
| ServiceAreasCard | Areas served | Right sidebar |
| ServiceAreaList | List of service areas | Service areas card |
| SocialLinksCard | Social media container | Right sidebar |
| SocialLinkButton | Individual social link | Social card |

### Similar Agencies Components

| Component | Description | Location |
|-----------|-------------|----------|
| SimilarAgenciesSection | Related agencies container | Below main content |
| SimilarAgencyCard | Agency preview card | Similar agencies section |
| CarouselControls | Navigation arrows | Similar agencies section |

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
| Contact Agency | Scrolls to contact form or opens modal | Profile header |
| View All Listings | Navigates to filtered property search | Profile header, Listings section |
| Follow Agency | Follows agency (if logged in) | Profile header |
| Share | Opens share modal | Profile header |
| Call Now | Initiates phone call (tel:) | Contact card |
| Send Email | Opens email client (mailto:) | Contact card |
| Schedule Consultation | Opens scheduling modal | Contact card |
| Send Message | Submits contact form | Contact form |
| View Profile | Navigates to agent profile | Team member cards |
| Show All Reviews | Expands review list | Reviews section |
| Helpful | Marks review as helpful | Review cards |
| Get Directions | Opens map with directions | Contact card |

### Form Inputs

| Input | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Name | text | "Your Name" | Required |
| Email | email | "Your Email" | Required, email format |
| Phone | tel | "Your Phone Number" | Optional, phone format |
| Inquiry Type | select | "Select inquiry type" | Required |
| Preferred Agent | select | "Select agent" | Optional |
| Property Interest | text | "Property type or address" | Optional |
| Message | textarea | "Tell us about..." | Required, min 20 chars |
| Agreement | checkbox | Terms agreement | Required |
| Newsletter Email | email | "Your Email" | Email format |

### Links

| Link Type | Count | Locations |
|-----------|-------|-----------|
| Navigation Links | 5 main + 40+ submenu | Header |
| Property Links | 6+ | Listings section |
| Agent Profile Links | 5+ | Team section |
| Similar Agency Links | 3 | Similar agencies section |
| Footer Links | 15+ | Footer columns |
| Social Links | 6 | Sidebar, Footer |
| Phone Links | 2+ | Contact card |
| Email Links | 1 | Contact card |
| Service Links | 6 | Services section |

### Dropdowns

| Dropdown | Items | Location |
|----------|-------|----------|
| Home Menu | 10 home versions | Header navigation |
| Listing Menu | 15 layout options | Header navigation |
| Property Menu | Agents + Single + Dashboard | Header navigation |
| Blog Menu | 4 blog layouts | Header navigation |
| Pages Menu | 9 page options | Header navigation |
| Inquiry Type | Buying, Selling, Renting, etc. | Contact form |
| Preferred Agent | List of agency agents | Contact form |

### Tabs

| Tab Group | Options | Default |
|-----------|---------|---------|
| Property Filters | All, For Sale, For Rent, Sold | All |

### Interactive States

| Element | Hover State | Active State | Focus State |
|---------|-------------|--------------|-------------|
| Property Card | Elevation shadow | Border highlight | Outline |
| Team Member Card | Slight elevation | - | Outline |
| Service Card | Color change | - | Outline |
| Social Links | Color change | - | Outline |
| Form Submit | Darker shade | Loading spinner | Outline |
| Service Area Tag | Color change | - | Outline |

---

## Responsive Behavior

### Desktop (1200px+)

- **Header:** Full horizontal navigation visible
- **Layout:** Two-column layout (70% left / 30% right)
- **Agency Logo:** Large (150x150px)
- **Services:** 3-column grid
- **Team Members:** Horizontal carousel, 4 visible
- **Property Listings:** 3-column grid
- **Sidebar:** Fixed position while scrolling
- **Similar Agencies:** Horizontal carousel, 3 visible
- **Footer:** Multi-column layout

### Tablet (768px - 1199px)

- **Header:** Hamburger menu visible
- **Layout:** Two-column layout (60% left / 40% right) or stacked
- **Agency Logo:** Medium (120x120px)
- **Services:** 2-column grid
- **Team Members:** 3 visible cards
- **Property Listings:** 2-column grid
- **Sidebar:** Stacked below main content
- **Similar Agencies:** 2 visible cards
- **Footer:** Reduced columns

### Mobile (< 768px)

- **Header:** Hamburger menu only
- **Layout:** Single column stacked
- **Agency Logo:** Small (80x80px), centered
- **Services:** Single column
- **Team Members:** Single card visible, horizontal scroll
- **Property Listings:** Single column
- **Sidebar:** Full width, stacked below content
- **Contact Form:** Full width inputs
- **Similar Agencies:** Single card visible, horizontal scroll
- **Footer:** Single column stacked

### Contact Form Adjustments

| Viewport | Layout | Input Size | Button Width |
|----------|--------|------------|--------------|
| Desktop | Stacked | Full width | Full width |
| Tablet | Stacked | Full width | Full width |
| Mobile | Stacked | Full width | Full width |

### Agency Header Adjustments

| Viewport | Logo Position | Stats Layout | Action Buttons |
|----------|---------------|--------------|----------------|
| Desktop | Left of text | Horizontal row | Inline |
| Tablet | Left of text | 2-column grid | Wrapped |
| Mobile | Above text | 2-column grid | Stacked full width |

---

## Data Models

### Agency Profile Data Model

```typescript
interface AgencyProfile {
  id: string;
  name: string;
  slug: string;
  logo: string;
  tagline: string;
  description: string;
  founded: number;
  headquarters: Address;
  branchOffices: Address[];
  phone: {
    main: string;
    tollFree?: string;
  };
  email: string;
  website: string;
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
  agentsCount: number;
  listingsCount: number;
  salesVolume: number;
  yearsInBusiness: number;
  clientSatisfaction: number;
  responseTime: string;
  verified: boolean;
  featured: boolean;
  services: AgencyService[];
  serviceAreas: string[];
  officeHours: OfficeHours;
  languages: string[];
  awards: Award[];
}
```

### Team Member Data Model

```typescript
interface TeamMember {
  id: string;
  name: string;
  slug: string;
  photo: string;
  title: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  listingsCount: number;
  specialties: string[];
  socialLinks: {
    linkedin?: string;
  };
  languages: string[];
  experience: number;
}
```

### Review Data Model

```typescript
interface AgencyReview {
  id: string;
  author: {
    name: string;
    photo: string;
  };
  rating: number;
  date: string;
  transactionType: 'purchase' | 'sale' | 'rental' | 'other';
  text: string;
  agentMentioned?: {
    id: string;
    name: string;
  };
  helpfulCount: number;
  agencyResponse?: {
    text: string;
    date: string;
  };
}
```

### Contact Form Data Model

```typescript
interface AgencyContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: 'buying' | 'selling' | 'renting' | 'property-management' | 'investment' | 'other';
  preferredAgent?: string;
  propertyInterest?: string;
  message: string;
  agreedToTerms: boolean;
}
```

### Office Hours Data Model

```typescript
interface OfficeHours {
  monday: { open: string; close: string };
  tuesday: { open: string; close: string };
  wednesday: { open: string; close: string };
  thursday: { open: string; close: string };
  friday: { open: string; close: string };
  saturday: { open: string; close: string } | null;
  sunday: { open: string; close: string } | null;
}
```

---

## API Integration Points

### Get Agency Profile

```
Endpoint: /api/agencies/:id
Method: GET

Response:
{
  agency: AgencyProfile,
  team: TeamMember[],
  listings: PropertyPreview[],
  reviews: {
    items: AgencyReview[],
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
  similarAgencies: AgencyProfile[]
}
```

### Submit Contact Form

```
Endpoint: /api/agencies/:id/contact
Method: POST
Body: AgencyContactFormData

Response:
{
  success: boolean,
  message: "Your message has been sent successfully. We'll respond within 24 hours."
}
```

### Get Agency Team

```
Endpoint: /api/agencies/:id/team
Method: GET
Query Parameters:
  - page: number
  - limit: number

Response:
{
  team: TeamMember[],
  pagination: PaginationState
}
```

### Get Agency Listings

```
Endpoint: /api/agencies/:id/listings
Method: GET
Query Parameters:
  - page: number
  - limit: number
  - status: 'all' | 'for-sale' | 'for-rent' | 'sold'

Response:
{
  listings: PropertyPreview[],
  pagination: PaginationState
}
```

### Get Agency Reviews

```
Endpoint: /api/agencies/:id/reviews
Method: GET
Query Parameters:
  - page: number
  - limit: number
  - sort: 'newest' | 'highest' | 'lowest'

Response:
{
  reviews: AgencyReview[],
  pagination: PaginationState,
  summary: RatingSummary
}
```

### Follow Agency

```
Endpoint: /api/agencies/:id/follow
Method: POST

Response:
{
  success: boolean,
  isFollowing: boolean
}
```

---

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for all interactive elements
- Keyboard navigation support throughout
- Focus states on all interactive elements
- Alt text for all images including agency logos, agent photos, property images
- Screen reader compatible rating displays
- Form labels properly associated with inputs
- Error messages linked to form fields
- Skip links for main content areas
- Accessible carousel controls
- High contrast text on all backgrounds
- Responsive text sizing
- Accessible modal dialogs
- Color-independent information display

---

## Performance Considerations

- Lazy loading for images (agency logo, team photos, property images)
- Infinite scroll or pagination for team/listings/reviews
- Debounced form validation
- Optimistic UI updates for follow/helpful buttons
- Cached agency profile data
- Preloaded similar agencies
- Image placeholder during load
- Skeleton loading states
- Memoized cards for re-render optimization
- Virtual scrolling for long lists
- Service worker caching for repeat visits
- Compressed image formats (WebP)

---

## SEO Considerations

- Page title: "{Agency Name} - Agency Profile || Homez"
- Meta description from agency description
- Structured data for Organization and RealEstateAgent schemas
- Open Graph tags with agency logo
- Canonical URL for agency profile
- Breadcrumb navigation with schema markup
- Reviews schema markup
- Sitemap inclusion for agency profiles
- LocalBusiness schema for offices
- FAQ schema if applicable

---

## State Management

### Page State

```
AgencySinglePage State:
- agency: AgencyProfile | null
- team: TeamMember[]
- listings: PropertyPreview[]
- reviews: AgencyReview[]
- reviewSummary: RatingSummary | null
- similarAgencies: AgencyProfile[]
- isLoading: boolean
- error: string | null
- isFollowing: boolean
- contactFormState: {
    data: AgencyContactFormData,
    isSubmitting: boolean,
    isSuccess: boolean,
    errors: Record<string, string>
  }
- activeListingFilter: 'all' | 'for-sale' | 'for-rent' | 'sold'
```

### Form Validation Rules

```
Validation Rules:
- name: required, min 2 characters
- email: required, valid email format
- phone: optional, valid phone format
- inquiryType: required
- preferredAgent: optional
- propertyInterest: optional
- message: required, min 20 characters, max 2000 characters
- agreedToTerms: must be true
```

---

## User Flows

### View Agency Profile Flow

1. User navigates to agency single page from:
   - Agency listing page
   - Property listing (agency attribution)
   - Agent profile (agency affiliation)
   - Search results
   - Direct URL
2. Page loads with agency profile data
3. User scrolls through sections
4. User can interact with any section

### Contact Agency Flow

1. User clicks "Contact Agency" button or scrolls to contact form
2. User fills out form fields
3. User selects inquiry type
4. User optionally selects preferred agent
5. User checks agreement checkbox
6. User clicks "Send Message"
7. Form validates and submits
8. Success message displayed
9. Agency receives notification

### View Team Members Flow

1. User scrolls to team section
2. User browses team member cards
3. User clicks on team member card
4. Agent single page opens with detailed profile

### View Agency Listings Flow

1. User scrolls to listings section
2. User can filter by status (All, For Sale, For Rent, Sold)
3. User browses property cards
4. User clicks on property card
5. Property single page opens

### Leave Review Flow

1. User clicks "Write a Review" button (if logged in)
2. Review form modal opens
3. User selects transaction type
4. User selects rating (1-5 stars)
5. User optionally mentions specific agent
6. User writes review text
7. User submits review
8. Review appears in reviews section after moderation

### Follow Agency Flow

1. User clicks "Follow Agency" button (if logged in)
2. Button state changes to "Following"
3. Agency added to user's followed agencies
4. User receives updates from agency
5. User can unfollow by clicking again

---

## Error Handling

### API Error States

```
Error Types:
- Agency Not Found: "This agency profile could not be found."
- Network Error: "Unable to load agency data. Please try again."
- Server Error: "Something went wrong. Please try again later."
- Form Submission Error: "Failed to send message. Please try again."
- Follow Error: "Unable to follow agency. Please try again."

Error Display:
- Full page error for agency not found
- Inline error messages for form validation
- Toast notifications for submission errors
- Retry buttons for recoverable errors
- Error boundary for component failures
```

### Form Validation Errors

```
Validation Messages:
- name: "Please enter your name"
- email: "Please enter a valid email address"
- phone: "Please enter a valid phone number"
- inquiryType: "Please select an inquiry type"
- message: "Please enter a message (minimum 20 characters)"
- agreedToTerms: "You must agree to the terms"
```

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
| CSS Transitions | Team member card hover | 300ms | 0ms | ease |
| CSS Transitions | Property cards hover | 300ms | 0ms | ease |
| CSS Transitions | Service card hover | 300ms | 0ms | ease |

### CSS Transition Animations

```css
/* Team member card hover */
.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Service card hover */
.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

/* Property card hover */
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Sidebar card hover */
.contact-card:hover {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
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

### Agency Profile Header Animation

```javascript
// components/AgencyProfileHeader.tsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export function useAgencyProfileAnimation() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();
    
    // Logo animation
    tl.from('.agency-logo-large', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'power3.out'
    })
    // Name and tagline slide in
    .from('.agency-name', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.agency-tagline', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    // Stats counter animation
    .from('.quick-stat', {
      opacity: 0,
      y: 25,
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

### Services Section Animation

```javascript
// components/AgencyServices.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useServicesAnimation() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesRef.current) return;

    const serviceCards = servicesRef.current.querySelectorAll('.service-card');

    gsap.from(serviceCards, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Icon animation on hover
    serviceCards.forEach(card => {
      const icon = card.querySelector('.service-icon');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        if (icon) {
          gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'power2.out' });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        if (icon) {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return servicesRef;
}
```

### Team Members Carousel Animation

```javascript
// components/AgencyTeam.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useTeamMembersAnimation() {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!teamRef.current) return;

    const teamCards = teamRef.current.querySelectorAll('.team-member-card');

    gsap.from(teamCards, {
      scrollTrigger: {
        trigger: teamRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 50,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return teamRef;
}

// Carousel slide animation
export function animateTeamCarousel(direction: 'prev' | 'next', carouselRef: HTMLElement) {
  const cards = carouselRef.querySelectorAll('.team-member-card');
  
  gsap.to(cards, {
    opacity: 0,
    x: direction === 'next' ? -60 : 60,
    duration: 0.35,
    ease: 'power2.in',
    onComplete: () => {
      // Content update would happen here
      gsap.fromTo(cards,
        { opacity: 0, x: direction === 'next' ? 60 : -60 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }
  });
}
```

### Property Listings Animation

```javascript
// components/AgencyListings.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgencyListingsAnimation() {
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

// Filter tab animation
export function animateFilterTabs(activeTab: string, tabsRef: HTMLElement) {
  const tabs = tabsRef.querySelectorAll('.filter-tab');
  
  tabs.forEach(tab => {
    const isActive = tab.classList.contains('active');
    gsap.to(tab, {
      scale: isActive ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
}
```

### Reviews Section Animation

```javascript
// components/AgencyReviews.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgencyReviewsAnimation() {
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

    // Rating bar fill animation
    const ratingBars = reviewsRef.current.querySelectorAll('.rating-bar-fill');
    ratingBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: width,
          duration: 1,
          ease: 'power2.out',
          delay: 0.3
        }
      );
    });

    // Review cards animation
    const reviewCards = reviewsRef.current.querySelectorAll('.review-card');
    
    gsap.from(reviewCards, {
      scrollTrigger: {
        trigger: reviewsRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power2.out'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return reviewsRef;
}
```

### Contact Form Animation

```javascript
// components/AgencyContactForm.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgencyContactFormAnimation() {
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
```

### Sidebar Animation

```javascript
// components/AgencySidebar.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useAgencySidebarAnimation() {
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
      stagger: 0.12,
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

### Similar Agencies Animation

```javascript
// components/SimilarAgencies.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useSimilarAgenciesAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const agencyCards = sectionRef.current.querySelectorAll('.similar-agency-card');

    gsap.from(agencyCards, {
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
```

### Complete Page Animation Hook

```javascript
// hooks/useAgencySingleAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAgencySingleAnimations() {
  useEffect(() => {
    // Master timeline for page load
    const masterTl = gsap.timeline();

    // Initial header animation
    masterTl.from('.agency-profile-header', {
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
  
  /* Service Card Icons */
  --service-icon-color: #e33e3e;
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

1. **Bootstrap 5** - Grid system, components (modals, offcanvas, tabs, accordion)
2. **Emotion CSS-in-JS** - Dynamic styling with `css-*` classes
3. **SCSS** - Custom styles with variables and mixins

### CSS Class Patterns

```css
/* Agency single specific */
.agency-profile-header { /* Agency hero section */ }
.agency-stats-row { /* Statistics display */ }
.agency-services { /* Services grid */ }
.agency-team { /* Team members carousel */ }
.agency-listings { /* Property listings */ }
.agency-reviews { /* Client reviews */ }

/* Service cards */
.service-card { /* Service container */ }
.service-icon { /* Service icon */ }
.service-title { /* Service name */ }
.service-description { /* Service description */ }

/* Team section */
.team-member-card { /* Team member container */ }
.team-member-photo { /* Agent photo */ }
.team-member-info { /* Agent info */ }
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

- Agency logos have consistent bordered/styled display
- Rating stars use filled/empty icon states
- Social links open in new tabs
- Phone numbers are clickable (tel: protocol)
- Email addresses are clickable (mailto: protocol)
- Contact form has client-side and server-side validation
- Reviews show relative dates (e.g., "2 days ago")
- Similar agencies are based on location and services
- Sidebar can be sticky on desktop for easy access
- Agency can respond to reviews (if logged in as agency admin)
- Form submission sends email notification to agency
- Agency statistics update in real-time
- Listings carousel shows most recent first
- Team section shows top-performing agents first
- Service areas can be clicked to filter properties
- Office hours show current open/closed status
- Follow button state persists across sessions
- Property status tabs filter in real-time
- Reviews can be sorted by date/rating
- Agent mentions in reviews link to agent profiles

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
