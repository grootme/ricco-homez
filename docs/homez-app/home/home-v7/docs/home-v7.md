# Home v7 - Documentation

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/home-v7
- **Page Title:** Home v7 || Homez - Real Estate NextJS Template

---

## Page Overview

Home v7 is a property listing-focused home page variant that combines a search banner with a comprehensive property grid display. Unlike other home page variants, this version prioritizes property discovery with a prominent search banner, advanced filtering options, and a full-width property grid layout. The page is designed for users who want to quickly browse and filter available properties without navigating through multiple sections.

---

## Layout Structure

### Overall Layout Architecture

The page follows a search-focused layout with these main sections:

1. **Fixed Header/Navigation** - Persistent top navigation with logo, menu items, login button, and add property CTA
2. **Search Banner** - Full-width banner with title, breadcrumb, and search dropdown
3. **Filter Bar** - Horizontal filter bar with dropdowns for property type, price, beds/baths, and more filters
4. **Sorting & View Toggle** - Sort dropdown and grid/list view toggle
5. **Property Grid** - Responsive grid of property cards (4-column layout)
6. **Pagination** - Page navigation controls
7. **Footer** - Multi-column layout with contact info, newsletter, and navigation

---

## Data Content Structure

### 1. Header/Navigation Data

#### Logo
```typescript
interface HeaderLogo {
  src: string;
  alt: string;
  link: string; // Homepage
}
```

#### Navigation Menu Items
```typescript
interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: NavDropdownItem[];
}

interface NavDropdownItem {
  label: string;
  href: string;
}

// Main Navigation Structure
const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    hasDropdown: true
  },
  {
    label: "Listing",
    href: "/listing",
    hasDropdown: true,
    dropdownItems: [
      // Grid Styles
      { label: "Grid Default", href: "/listing/grid-default" },
      { label: "Grid Full Width 3 Cols", href: "/listing/grid-full-width-3-cols" },
      { label: "Grid Full Width 4 Cols", href: "/listing/grid-full-width-4-cols" },
      { label: "Grid Full Width 2 Cols", href: "/listing/grid-full-width-2-cols" },
      { label: "Grid Full Width 1 Cols v1", href: "/listing/grid-full-width-1-cols-v1" },
      { label: "Grid Full Width 1 Cols v2", href: "/listing/grid-full-width-1-cols-v2" },
      { label: "Banner Search v1", href: "/listing/banner-search-v1" },
      { label: "Banner Search v2", href: "/listing/banner-search-v2" },
      // Map Styles
      { label: "Header Map Style", href: "/listing/header-map-style" },
      { label: "Map V1", href: "/listing/map-v1" },
      { label: "Map V2", href: "/listing/map-v2" },
      { label: "Map V3", href: "/listing/map-v3" },
      { label: "Map V4", href: "/listing/map-v4" },
      // List Styles
      { label: "List v1", href: "/listing/list-v1" },
      { label: "List All Style", href: "/listing/list-all-style" }
    ]
  },
  {
    label: "Property",
    href: "/property",
    hasDropdown: true
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: true
  },
  {
    label: "Pages",
    href: "/pages",
    hasDropdown: true
  }
];
```

#### Header Actions
```typescript
interface HeaderActions {
  loginButton: {
    label: string;
    icon: string;
    href: string;
  };
  addPropertyButton: {
    label: string;
    icon: string;
    href: string;
  };
  hamburgerMenu: {
    icon: string;
    ariaLabel: string;
  };
}

const headerActions: HeaderActions = {
  loginButton: {
    label: "Login / Register",
    icon: "user-icon",
    href: "/login"
  },
  addPropertyButton: {
    label: "Add Property",
    icon: "arrow-right",
    href: "/add-property"
  },
  hamburgerMenu: {
    icon: "menu-icon",
    ariaLabel: "hamburger menu"
  }
};
```

---

### 2. Search Banner Section Data

```typescript
interface SearchBanner {
  title: string;
  breadcrumb: Breadcrumb;
  locationDropdown: DropdownConfig;
}

interface Breadcrumb {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface DropdownConfig {
  placeholder: string;
  options: DropdownOption[];
  required: boolean;
}

interface DropdownOption {
  value: string;
  label: string;
}

const searchBanner: SearchBanner = {
  title: "New York Homes for Sale",
  breadcrumb: {
    items: [
      { label: "Home", href: "/" },
      { label: "For Rent", href: "/for-rent", isActive: true }
    ]
  },
  locationDropdown: {
    placeholder: "Select location",
    options: [
      { value: "new-york", label: "New York" },
      { value: "los-angeles", label: "Los Angeles" },
      { value: "miami", label: "Miami" },
      { value: "chicago", label: "Chicago" }
    ],
    required: true
  }
};
```

---

### 3. Filter Bar Data

```typescript
interface FilterBar {
  filters: FilterItem[];
}

interface FilterItem {
  label: string;
  type: "dropdown" | "button";
  icon?: string;
  options?: FilterOption[];
}

interface FilterOption {
  value: string;
  label: string;
}

const filterBar: FilterBar = {
  filters: [
    {
      label: "For Sale",
      type: "dropdown",
      options: [
        { value: "for-sale", label: "For Sale" },
        { value: "for-rent", label: "For Rent" },
        { value: "sold", label: "Sold" }
      ]
    },
    {
      label: "Property Type",
      type: "dropdown",
      options: [
        { value: "apartments", label: "Apartments" },
        { value: "houses", label: "Houses" },
        { value: "villa", label: "Villa" },
        { value: "office", label: "Office" },
        { value: "townhome", label: "Townhome" },
        { value: "bungalow", label: "Bungalow" },
        { value: "loft", label: "Loft" }
      ]
    },
    {
      label: "Price",
      type: "dropdown",
      options: [
        { value: "0-50000", label: "$0 - $50,000" },
        { value: "50000-100000", label: "$50,000 - $100,000" },
        { value: "100000-250000", label: "$100,000 - $250,000" },
        { value: "250000-500000", label: "$250,000 - $500,000" },
        { value: "500000+", label: "$500,000+" }
      ]
    },
    {
      label: "Beds / Baths",
      type: "dropdown",
      options: [
        { value: "1-1", label: "1 Bed / 1 Bath" },
        { value: "2-1", label: "2 Beds / 1 Bath" },
        { value: "2-2", label: "2 Beds / 2 Baths" },
        { value: "3-2", label: "3 Beds / 2 Baths" },
        { value: "3-3", label: "3 Beds / 3 Baths" },
        { value: "4-3", label: "4 Beds / 3 Baths" },
        { value: "4-4", label: "4 Beds / 4 Baths" },
        { value: "5+", label: "5+ Beds" }
      ]
    },
    {
      label: "More Filter",
      type: "button",
      icon: "filter-icon"
    }
  ]
};
```

---

### 4. Sorting & View Toggle Data

```typescript
interface SortAndView {
  sortBy: SortDropdown;
  viewToggle: ViewToggle;
}

interface SortDropdown {
  label: string;
  current: string;
  options: SortOption[];
}

interface SortOption {
  value: string;
  label: string;
  isSelected?: boolean;
}

interface ViewToggle {
  options: ViewOption[];
}

interface ViewOption {
  type: "grid" | "list";
  isActive: boolean;
}

const sortAndView: SortAndView = {
  sortBy: {
    label: "Sort by",
    current: "Newest",
    options: [
      { value: "newest", label: "Newest", isSelected: true },
      { value: "best-seller", label: "Best Seller" },
      { value: "best-match", label: "Best Match" },
      { value: "price-low", label: "Price Low" },
      { value: "price-high", label: "Price High" }
    ]
  },
  viewToggle: {
    options: [
      { type: "grid", isActive: true },
      { type: "list", isActive: false }
    ]
  }
};
```

---

### 5. Property Grid Data

```typescript
interface PropertyCard {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string;
  beds: number;
  baths: number;
  sqft: number;
  status: string;
  isFeatured: boolean;
  images: string[];
  href: string;
  actions: PropertyAction[];
}

interface PropertyAction {
  type: "favorite" | "share" | "compare";
  icon: string;
  href: string;
}

const propertyListings: PropertyCard[] = [
  {
    id: "property-1",
    title: "Equestrian Family Home",
    location: "San Diego City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 5,
    baths: 4,
    sqft: 900,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/property-1.jpg"],
    href: "/property/equestrian-family-home",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-2",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 4,
    baths: 4,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-2.jpg"],
    href: "/property/luxury-villa-rego-park",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-3",
    title: "Luxury villa in Rego Park",
    location: "California City, CA, USA",
    price: 92000,
    priceUnit: "/ mo",
    beds: 1,
    baths: 1,
    sqft: 1000,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-3.jpg"],
    href: "/property/luxury-villa-rego-park-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-4",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 2,
    baths: 1,
    sqft: 1300,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-4.jpg"],
    href: "/property/luxury-villa-rego-park-3",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-5",
    title: "Luxury villa in Rego Park",
    location: "New Jersey City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 4,
    baths: 5,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-5.jpg"],
    href: "/property/luxury-villa-rego-park-4",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-6",
    title: "Luxury villa in Rego Park",
    location: "California City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 6,
    baths: 4,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-6.jpg"],
    href: "/property/luxury-villa-rego-park-5",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-7",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 2,
    baths: 3,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-7.jpg"],
    href: "/property/luxury-villa-rego-park-6",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-8",
    title: "Luxury villa in Rego Park",
    location: "New Jersey City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 3,
    sqft: 1200,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/property-8.jpg"],
    href: "/property/luxury-villa-rego-park-7",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-9",
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: 14000,
    priceUnit: "/ mo",
    beds: 1,
    baths: 2,
    sqft: 1200,
    status: "For Rent",
    isFeatured: true,
    images: ["/images/properties/property-9.jpg"],
    href: "/property/equestrian-family-home-2",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-10",
    title: "Luxury villa in Rego Park",
    location: "New York City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-10.jpg"],
    href: "/property/luxury-villa-rego-park-8",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-11",
    title: "Luxury villa in Rego Park",
    location: "Texas City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 3,
    baths: 4,
    sqft: 1200,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-11.jpg"],
    href: "/property/luxury-villa-rego-park-9",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  },
  {
    id: "property-12",
    title: "Luxury villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: 82000,
    priceUnit: "/ mo",
    beds: 5,
    baths: 4,
    sqft: 1350,
    status: "For Rent",
    isFeatured: false,
    images: ["/images/properties/property-12.jpg"],
    href: "/property/luxury-villa-rego-park-10",
    actions: [
      { type: "favorite", icon: "heart", href: "#" },
      { type: "share", icon: "share", href: "#" },
      { type: "compare", icon: "compare", href: "#" }
    ]
  }
];

interface PropertyGridSection {
  items: PropertyCard[];
  totalResults: string;
}

const propertyGridSection: PropertyGridSection = {
  items: propertyListings,
  totalResults: "1-8 of 25+ property available"
};
```

---

### 6. Pagination Data

```typescript
interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  pages: PageItem[];
}

interface PageItem {
  number: number;
  isActive: boolean;
}

const pagination: Pagination = {
  currentPage: 1,
  totalPages: 3,
  hasNext: true,
  hasPrev: false,
  pages: [
    { number: 1, isActive: true },
    { number: 2, isActive: false },
    { number: 3, isActive: false }
  ]
};
```

---

### 7. Footer Section Data

```typescript
interface FooterSection {
  contact: FooterContact;
  apps: FooterApps;
  social: FooterSocial;
  newsletter: FooterNewsletter;
  popularSearch: FooterLinks;
  quickLinks: FooterLinks;
  discover: FooterLinks;
  copyright: FooterCopyright;
}

interface FooterContact {
  phone: {
    label: string;
    number: string;
    href: string;
  };
  supportLabel: string;
  email: {
    address: string;
    href: string;
  };
  logo: string;
}

interface FooterApps {
  title: string;
  apps: AppLink[];
}

interface AppLink {
  name: string;
  store: string;
  icon: string;
  href: string;
}

interface FooterSocial {
  title: string;
  links: SocialLink[];
}

interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

interface FooterNewsletter {
  title: string;
  inputPlaceholder: string;
  buttonLabel: string;
}

interface FooterLinks {
  title: string;
  links: NavLink[];
}

interface NavLink {
  label: string;
  href: string;
}

interface FooterCopyright {
  text: string;
  year: number;
  brandLink: {
    label: string;
    href: string;
  };
  legalLinks: NavLink[];
}

const footerSection: FooterSection = {
  contact: {
    phone: {
      label: "Total Free Customer Care",
      number: "+(0) 123 050 945 02",
      href: "tel:+012305094502"
    },
    supportLabel: "Need Live Support?",
    email: {
      address: "hi@homez.com",
      href: "mailto:hi@homez.com"
    },
    logo: "/images/logo-footer.png"
  },
  apps: {
    title: "Apps",
    apps: [
      {
        name: "Apple Store",
        store: "Download on the",
        icon: "apple-icon",
        href: "https://apps.apple.com"
      },
      {
        name: "Google Play",
        store: "Get it on",
        icon: "google-icon",
        href: "https://play.google.com"
      }
    ]
  },
  social: {
    title: "Follow us on social media",
    links: [
      { platform: "Facebook", icon: "facebook-icon", href: "https://facebook.com" },
      { platform: "Twitter", icon: "twitter-icon", href: "https://twitter.com" },
      { platform: "Instagram", icon: "instagram-icon", href: "https://instagram.com" },
      { platform: "LinkedIn", icon: "linkedin-icon", href: "https://linkedin.com" }
    ]
  },
  newsletter: {
    title: "Keep Yourself Up to Date",
    inputPlaceholder: "Your Email",
    buttonLabel: "Subscribe"
  },
  popularSearch: {
    title: "Popular Search",
    links: [
      { label: "Apartment for Rent", href: "/search?apartment-rent" },
      { label: "Apartment Low to Hide", href: "/search?apartment-low-hide" },
      { label: "Offices for Buy", href: "/search?offices-buy" },
      { label: "Offices for Rent", href: "/search?offices-rent" }
    ]
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Our Services", href: "/services" },
      { label: "Contact Support", href: "/support" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faq" }
    ]
  },
  discover: {
    title: "Discover",
    links: [
      { label: "Miami", href: "/cities/miami" },
      { label: "Los Angeles", href: "/cities/los-angeles" },
      { label: "Chicago", href: "/cities/chicago" },
      { label: "New York", href: "/cities/new-york" }
    ]
  },
  copyright: {
    text: "© Homez 2024",
    year: 2024,
    brandLink: {
      label: "ib-themes",
      href: "https://ib-themes.com"
    },
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" }
    ]
  }
};
```

---

## Component Breakdown

### 1. Header Component

```
Header/
├── Logo
├── Navigation
│   ├── NavItem (Home)
│   ├── NavItem (Listing)
│   │   └── DropdownMenu
│   │       ├── GridStyles
│   │       ├── MapStyles
│   │       └── ListStyles
│   ├── NavItem (Property)
│   ├── NavItem (Blog)
│   └── NavItem (Pages)
├── LoginButton
├── AddPropertyButton
└── HamburgerMenu (Mobile)
```

### 2. Search Banner Components

```
SearchBanner/
├── BannerContent
│   ├── Title (h2)
│   ├── Breadcrumb
│   │   ├── HomeLink
│   │   └── CurrentPage
│   └── LocationDropdown
```

### 3. Filter Bar Components

```
FilterBar/
└── FilterList
    ├── FilterDropdown (For Sale)
    ├── FilterDropdown (Property Type)
    ├── FilterDropdown (Price)
    ├── FilterDropdown (Beds / Baths)
    └── MoreFilterButton
```

### 4. Sort & View Toggle Components

```
SortAndViewToggle/
├── SortLabel
├── SortDropdown
│   └── SortOptions[]
└── ViewToggle
    ├── GridViewButton
    └── ListViewButton
```

### 5. Property Grid Components

```
PropertyGrid/
└── PropertyCard[]
    ├── Image
    ├── FeaturedBadge
    ├── PriceTag
    ├── Title (h6)
    ├── Location (p)
    ├── PropertySpecs
    │   ├── Beds
    │   ├── Baths
    │   └── Sqft
    ├── StatusBadge
    └── ActionButtons
        ├── FavoriteButton
        ├── ShareButton
        └── CompareButton
```

### 6. Pagination Components

```
Pagination/
├── PrevButton
├── PageNumbers
│   └── PageButton[]
├── NextButton
└── ResultsCount
```

### 7. Footer Components

```
Footer/
├── FooterTop
│   ├── ContactColumn
│   │   ├── Logo
│   │   ├── PhoneLabel
│   │   ├── PhoneNumber
│   │   ├── SupportLabel
│   │   └── Email
│   ├── AppsColumn
│   │   ├── Title (h5)
│   │   └── AppLinks[]
│   └── SocialColumn
│       ├── Title (h6)
│       └── SocialLinks[]
├── FooterMain
│   ├── NewsletterColumn
│   │   ├── Title (h6)
│   │   ├── EmailInput
│   │   └── SubscribeButton
│   ├── PopularSearchColumn
│   │   ├── Title (h6)
│   │   └── Links[]
│   ├── QuickLinksColumn
│   │   ├── Title (h6)
│   │   └── Links[]
│   └── DiscoverColumn
│       ├── Title (h6)
│       └── Links[]
└── FooterBottom
    ├── CopyrightText
    ├── BrandLink
    └── LegalLinks[]
```

---

## Interactive Elements

### 1. Navigation Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Logo | Click | Navigate to homepage |
| Nav Items | Hover | Show dropdown menu (for items with dropdowns) |
| Nav Items | Click | Navigate to corresponding page |
| Login Button | Click | Open login/register modal |
| Add Property | Click | Navigate to add property page |
| Hamburger Menu | Click | Toggle mobile navigation menu |

### 2. Search Banner Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Location Dropdown | Click | Open location selection dropdown |
| Breadcrumb Links | Click | Navigate to corresponding page |

### 3. Filter Bar Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Filter Dropdowns | Click | Open dropdown with filter options |
| Filter Options | Click | Select filter option, apply filter |
| More Filter Button | Click | Open advanced filter modal/panel |

### 4. Sort & View Toggle Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Sort Dropdown | Click | Open sort options dropdown |
| Sort Options | Click | Select sort option, reorder listings |
| Grid View Button | Click | Switch to grid view layout |
| List View Button | Click | Switch to list view layout |

### 5. Property Card Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Card | Hover | Show shadow/elevation effect |
| Image | Hover | Zoom effect |
| Title | Click | Navigate to property detail page |
| Favorite Button | Click | Toggle favorite status (requires login) |
| Share Button | Click | Open share modal/options |
| Compare Button | Click | Add to comparison list |

### 6. Pagination Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| Page Numbers | Click | Navigate to selected page |
| Prev Button | Click | Go to previous page |
| Next Button | Click | Go to next page |

### 7. Footer Interactions

| Element | Interaction | Behavior |
|---------|------------|----------|
| All Links | Click | Navigate to corresponding page |
| Social Icons | Click | Open social media in new tab |
| App Store Links | Click | Navigate to app store page |
| Newsletter Form | Submit | Subscribe email to newsletter |

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column layout, hamburger menu |
| Tablet | 768px - 1024px | Two column layout, condensed navigation |
| Desktop | > 1024px | Full layout with all sections |

### Header Responsive Behavior

```
Desktop (> 1024px):
- Full navigation visible
- Logo on left
- All nav items visible
- Login and Add Property buttons visible

Tablet (768px - 1024px):
- Condensed navigation
- Some nav items hidden in "More" dropdown
- Login and Add Property buttons visible

Mobile (< 768px):
- Hamburger menu replaces navigation
- Full-screen mobile menu on tap
- Login button in mobile menu
- Add Property button may be hidden or moved
```

### Search Banner Responsive Behavior

```
Desktop:
- Full banner with title and breadcrumb
- Location dropdown visible

Tablet:
- Reduced padding
- Condensed layout

Mobile:
- Stacked layout
- Location dropdown may be hidden or moved to filters
```

### Filter Bar Responsive Behavior

```
Desktop:
- All filter dropdowns visible in horizontal row
- More Filter button at end

Tablet:
- Some filters may be hidden
- More options in "More Filter" button

Mobile:
- Filters collapsed into "Filters" button
- Slide-out or modal filter panel
```

### Property Grid Responsive Behavior

```
Desktop:
- 4 cards per row
- Full card details visible

Tablet:
- 3 cards per row
- Slightly condensed cards

Mobile:
- 1-2 cards per row
- Condensed card layout
- May switch to list view by default
```

### Pagination Responsive Behavior

```
Desktop:
- All page numbers visible
- Prev/Next buttons visible
- Results count visible

Tablet:
- Fewer page numbers visible
- Prev/Next buttons visible

Mobile:
- Only current page and adjacent pages visible
- Results count may be hidden
```

### Footer Responsive Behavior

```
Desktop:
- Multi-column layout (5 columns)
- All footer sections visible

Tablet:
- 3 columns
- Some sections merged

Mobile:
- Single column
- Accordion-style expandable sections
- Essential links only
```

---

## Image Assets

### Header
- Logo image

### Properties
- Property listing images (12+)
- Featured badge overlay

### Footer
- App store badges (2)
- Social media icons (4)
- Footer logo

---

## CSS Classes (Estimated)

```css
/* Search Banner */
.search-banner
.search-banner-title
.search-breadcrumb
.location-dropdown

/* Filter Bar */
.filter-bar
.filter-list
.filter-dropdown
.filter-option
.more-filter-button

/* Sort & View */
.sort-container
.sort-dropdown
.view-toggle
.grid-view-button
.list-view-button

/* Property Grid */
.property-grid
.property-card
.property-image
.property-badge
.property-price
.property-title
.property-location
.property-specs
.property-action-buttons

/* Pagination */
.pagination
.pagination-numbers
.pagination-prev
.pagination-next
.results-count

/* Footer */
.footer
.footer-top
.footer-main
.footer-bottom
.footer-column
.footer-title
.footer-links
.footer-newsletter
```

---

## Data Flow Summary

1. **Static Data**: Navigation items, footer links, sort options
2. **Dynamic Data**: Property listings, total count, pagination state
3. **User Input**: Filter selections, sort choice, view mode, page navigation
4. **API Endpoints** (suggested):
   - `GET /api/properties?location=&status=&type=&price=&beds=&sort=&page=` - Property listings with filters
   - `GET /api/locations` - Location dropdown options
   - `GET /api/property-types` - Property type filter options

---

## State Management

### Filter State
```typescript
interface FilterState {
  location: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  propertyType: string[];
  priceRange: { min: number; max: number };
  beds: number;
  baths: number;
  sortBy: 'newest' | 'best-seller' | 'best-match' | 'price-low' | 'price-high';
  viewMode: 'grid' | 'list';
  page: number;
}
```

### URL Parameters
The page likely uses URL parameters to maintain filter state:
- `?location=new-york`
- `?status=for-rent`
- `?type=apartments`
- `?price=50000-100000`
- `?beds=2-2`
- `?sort=newest`
- `?view=grid`
- `?page=1`

---

## Accessibility Considerations

1. **Semantic HTML**: Proper heading hierarchy, semantic elements
2. **ARIA Labels**: For dropdowns, filter buttons, and interactive elements
3. **Keyboard Navigation**: All filters and navigation accessible via keyboard
4. **Focus States**: Visible focus indicators on all focusable elements
5. **Color Contrast**: Sufficient contrast ratios for text content
6. **Alt Text**: Descriptive alt text for property images
7. **Screen Reader Support**: Announcements for filter changes and results updates

---

## Performance Considerations

1. **Lazy Loading**: Property images lazy loaded
2. **Virtual Scrolling**: For large property sets
3. **Debounced Filtering**: Filter changes debounced before API calls
4. **Caching Strategy**: API response caching for filter options
5. **Pagination**: Server-side pagination to limit data transfer

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

- Property listing-focused design (not landing page style)
- Advanced filter bar with multiple dropdowns
- Sort and view toggle (grid/list)
- Pagination controls
- Search banner with location dropdown
- URL parameter state management

*Documentation generated for Home v7 - Homez Real Estate NextJS Template*


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

**Animation Types:** fade-up: 12, fade-left: 1, fade-right: 1, fade: 1

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
data-aos="fade-up"    // 12 elements
data-aos="fade-left"  // 1 elements
data-aos="fade-right" // 1 elements
```

### Swiper Carousel Usage

| Metric | Count |
|--------|-------|
| Swiper References | 36 |
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

### Search Banner Section Animations

```javascript
// Search banner entrance
const searchBannerTL = gsap.timeline();

searchBannerTL
  .from('.search-banner-title', { 
    opacity: 0, 
    y: 60, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .from('.search-breadcrumb', { 
    opacity: 0, 
    y: 40, 
    duration: 0.6 
  }, '-=0.4')
  .from('.location-dropdown', { 
    opacity: 0, 
    y: 30, 
    duration: 0.6 
  }, '-=0.3');
```

### Filter Bar Section Animations

```javascript
// Filter bar entrance
gsap.from('.filter-bar', {
  scrollTrigger: {
    trigger: '.filter-section',
    start: 'top 85%',
  },
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: 'power2.out'
});

// Filter dropdowns stagger
gsap.from('.filter-dropdown', {
  scrollTrigger: {
    trigger: '.filter-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 20,
  stagger: 0.08,
  duration: 0.4,
  ease: 'power2.out'
});
```

### Property Grid Section Animations

```javascript
// Property cards stagger animation
gsap.from('.property-card', {
  scrollTrigger: {
    trigger: '.property-grid-section',
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

### Pagination Animations

```javascript
// Pagination reveal
gsap.from('.pagination', {
  scrollTrigger: {
    trigger: '.pagination-section',
    start: 'top 85%',
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});

// Page numbers stagger
gsap.from('.page-number', {
  scrollTrigger: {
    trigger: '.pagination-section',
    start: 'top 80%',
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.05,
  duration: 0.3,
  ease: 'back.out(1.7)'
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
    // Search banner animation
    const searchBannerTL = gsap.timeline();
    searchBannerTL
      .from('.search-banner-title', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
      .from('.search-breadcrumb', { opacity: 0, y: 40, duration: 0.6 }, '-=0.4')
      .from('.location-dropdown', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3');

    // Filter bar
    gsap.from('.filter-dropdown', {
      scrollTrigger: {
        trigger: '.filter-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Property grid
    gsap.from('.property-card', {
      scrollTrigger: {
        trigger: '.property-grid-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    });

    // Pagination
    gsap.from('.page-number', {
      scrollTrigger: {
        trigger: '.pagination-section',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.05,
      duration: 0.3,
      ease: 'back.out(1.7)'
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

**Total Emotion Blocks:** 66

### Header Configuration

```css
/* Header Classes */
.header-nav.nav-homepage-style.light-header.menu-home4.main-menu

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
