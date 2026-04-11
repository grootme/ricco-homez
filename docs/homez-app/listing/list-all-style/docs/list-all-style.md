# List All Style - Comprehensive List Card Styles Showcase

## 1. URL and Page Title

**URL:** [https://homez-appdir.vercel.app/list-all-style](https://homez-appdir.vercel.app/list-all-style)  
**Page Title:** List V1 || Homez - Real Estate NextJS Template  
**Template Type:** Property Listing Page (Style Showcase)  
**Layout Type:** Full-Width List View with Multiple Card Styles

## 2. Page Overview

### Layout Type and Purpose
List All Style is a showcase page that demonstrates all 8 different list card styles available in the Homez template. This page serves as a visual reference for developers and designers to compare different card designs and choose the most appropriate style for their implementation.

### Key Differentiators
- **8 Card Styles**: Showcases all list card variations
- **Style Labels**: Each section is clearly labeled (V1, V2, V3, etc.)
- **Full-Width Layout**: No sidebar, maximum card visibility
- **Footer Section**: Complete footer with all components

### Key Features
- Eight distinct list card style demonstrations
- Clear section headers for each style
- Same property data shown in different layouts
- No filter sidebar (showcase format)
- Comprehensive footer section

## 3. Layout Configuration

### Layout Settings
| Setting | Value |
|---------|-------|
| **Layout Type** | Full-width list |
| **Sidebar** | None |
| **Content Width** | 100% container |
| **Card Styles** | 8 variations |
| **Section Headers** | Labeled (V1-V8) |

### Layout Structure
```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER - Navigation (Fixed)                                           │
│ [Logo] [Home] [Listing▼] [Property▼] [Blog▼] [Pages▼]                │
│ [Login/Register] [Add Property →]                                     │
├──────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB                                                            │
│ "All List Style"  Home / For Rent                                     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V1                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ ┌────────────────────────────────────────────────────────────┐  │ │
│  │ │ [Image] Title | Location | Bed/Bath/Sqft | Status | Icons │  │ │
│  │ └────────────────────────────────────────────────────────────┘  │ │
│  │ (3 cards in V1 style)                                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V2                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ ┌────────────────────────────────────────────────────────────┐  │ │
│  │ │ [Image with Icons] Title | Location | Bed/Bath/Sqft | Price│  │ │
│  │ └────────────────────────────────────────────────────────────┘  │ │
│  │ (3 cards in V2 style)                                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V3                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V3 style - Minimal with price prominent)          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V4                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V4 style - FOR SALE badge, image-left)            │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V5                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V5 style - FOR SALE, price at bottom)             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V6                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V6 style - FOR SALE badge, two-column layout)     │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V7                                                   │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V7 style - With description text)                 │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ LIST STYLE V8 (List Style V)                                    │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │ (3 cards in V8 style - With agent avatar)                     │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                │
│ Contact Info | Apps | Newsletter | Popular Search | Quick Links      │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Card Style Details

### List Style V1 (Standard Grid Card)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V1                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ ★ FEATURED             │   │   ← Optional featured badge       │
│ │ └────────────────────────┘   │                                    │
│ │                              │                                    │
│ │ $14,000 / mo                 │   ← Price overlay                  │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ 🛏 1 bed   🛁 2 bath   ▢ 1200 sqft                                   │
│                                                                      │
│ ────────────────────────────────────                                │
│ For Rent     [❤] [⚖] [⋮]                                           │
│                                                                      │
│ Key Features:                                                        │
│ - Grid-style card layout                                            │
│ - Price as overlay on image                                         │
│ - Featured badge on image                                           │
│ - Status and social icons in footer                                 │
│ - No description                                                    │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V2 (Icons on Image, Price Separate)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V2                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ ★ FEATURED             │   │                                    │
│ │ └────────────────────────┘   │                                    │
│ │ [❤] [⚖] [⋮]                │   ← Social icons ON image          │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ $14,000 / mo                                                         │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ 🛏 1 bed   🛁 2 bath   ▢ 1200 sqft                                   │
│                                                                      │
│ Key Features:                                                        │
│ - Social icons on image (top right)                                 │
│ - Price BELOW image (not overlay)                                   │
│ - Title and location below price                                    │
│ - Property details at bottom                                        │
│ - No status badge in footer                                         │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V3 (Minimal with Prominent Price)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V3                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ [❤] [⚖] [⋮]                │   ← Social icons only              │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ $82,000                                                              │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ Key Features:                                                        │
│ - ULTRA minimal design                                              │
│ - Price as FIRST element (no /mo suffix)                           │
│ - Title and location only                                           │
│ - NO bed/bath/sqft info                                             │
│ - NO status badge                                                   │
│ - Social icons on image                                             │
│ - Optional featured badge on image                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V4 (FOR SALE Badge, Stats in Footer)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V4                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ ★ FEATURED             │   │                                    │
│ │ │ FOR SALE               │   │   ← Status badge on image         │
│ │ └────────────────────────┘   │                                    │
│ │ [❤] [⚖] [⋮]                │   ← Social icons on image          │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ Luxury villa in Rego Park                                           │
│                                                                      │
│ $82,000 / mo                                                         │
│                                                                      │
│ 🛏 2   🛁 1   ▢ 1300                                                 │
│                                                                      │
│ Key Features:                                                        │
│ - FOR SALE badge on image                                           │
│ - Title ABOVE price                                                  │
│ - Price as second element                                            │
│ - Property stats at bottom (minimal, no labels)                     │
│ - Social icons on image                                             │
│ - Featured badge combined with FOR SALE                             │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V5 (FOR SALE, Location Prominent, Price Bottom)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V5                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ FOR SALE                     │   ← Status badge only              │
│ │ [❤] [⚖] [⋮]                │   ← Social icons on image          │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ 🛏 1   🛁 2   ▢ 1200                                                 │
│                                                                      │
│ $14,000 / mo                                                         │
│                                                                      │
│ Key Features:                                                        │
│ - FOR SALE badge only (no featured combo)                           │
│ - Title and location FIRST                                          │
│ - Property stats in middle                                          │
│ - Price at BOTTOM                                                   │
│ - Social icons on image                                             │
│ - Minimal stats (no "bed", "bath", "sqft" labels)                   │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V6 (Two-Column Layout, Price+Title Together)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V6                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌──────────────────────────────┐                                    │
│ │ ┌──────────────────────────┐ │                                    │
│ │ │                          │ │                                    │
│ │ │   Property Image         │ │                                    │
│ │ │                          │ │                                    │
│ │ └──────────────────────────┘ │                                    │
│ │ ┌────────────────────────┐   │                                    │
│ │ │ ★ FEATURED             │   │                                    │
│ │ │ FOR SALE               │   │                                    │
│ │ └────────────────────────┘   │                                    │
│ │ [❤] [⚖] [⋮]                │                                    │
│ └──────────────────────────────┘                                    │
│                                                                      │
│ ┌────────────────────────────┐                                      │
│ │ $92,000 / mo               │   ← Price in box                    │
│ │ Luxury villa in Rego Park  │   ← Title in same box               │
│ └────────────────────────────┘                                      │
│                                                                      │
│ 🛏 1 bed   🛁 1 bath   ▢ 1000 sqft                                   │
│                                                                      │
│ Key Features:                                                        │
│ - FOR SALE + Featured badge on image                                │
│ - Price and Title in SAME container (stacked)                       │
│ - Social icons on image                                             │
│ - Full property stats with labels                                   │
│ - Distinct visual separation between image and info                 │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V7 (With Description)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V7                                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │ ┌──────────────┐                                                │  │
│ │ │              │  ┌────────────────────────┐                    │  │
│ │ │              │  │ ★ FEATURED             │                    │  │
│ │ │   Property   │  └────────────────────────┘                    │  │
│ │ │    Image     │                                                │  │
│ │ │              │  $14,000 / mo                                  │  │
│ │ │              │                                                │  │
│ │ └──────────────┘                                                │  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ 🛏 1 bed   🛁 2 bath   ▢ 1200 sqft                                   │
│                                                                      │
│ "An exceptional exclusive five bedroom apartment for sale in        │
│  this much sought after development in Knightsbridge."              │
│                                                                      │
│ ─────────────────────────────────────────────────────               │
│ For Rent     [❤] [⚖] [⋮]                                           │
│                                                                      │
│ Key Features:                                                        │
│ - HORIZONTAL layout (image left, content right)                     │
│ - Includes DESCRIPTION paragraph                                    │
│ - Status badge in footer                                            │
│ - Social icons in footer                                            │
│ - Featured badge on image                                           │
│ - Price overlay on image                                            │
│ - Similar to Map V2 list cards                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### List Style V8 / List Style V (With Agent Avatar)
```
┌─────────────────────────────────────────────────────────────────────┐
│ LIST STYLE V8 (List Style V)                                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ Structure:                                                           │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │ ┌──────────────┐                                                │  │
│ │ │              │  ┌────────────────────────┐                    │  │
│ │ │              │  │ ★ FEATURED             │                    │  │
│ │ │   Property   │  └────────────────────────┘                    │  │
│ │ │    Image     │                                                │  │
│ │ │              │  $14,000 / mo                                  │  │
│ │ │  ┌────┐      │                                                │  │
│ │ │  │Agent│     │   ← Agent avatar overlapping                  │  │
│ │ │  └────┘      │                                                │  │
│ │ └──────────────┘                                                │  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│ Equestrian Family Home                                               │
│ New York City, CA, USA                                               │
│                                                                      │
│ 🛏 1 bed   🛁 2 bath   ▢ 1200 sqft                                   │
│                                                                      │
│ ─────────────────────────────────────────────────────               │
│ For Rent     [❤] [⚖] [⋮]                                           │
│                                                                      │
│ Key Features:                                                        │
│ - Same as V7 with AGENT AVATAR                                     │
│ - Agent avatar overlaps image (bottom right)                        │
│ - Agent image visible on card                                       │
│ - Indicates listing agent                                           │
│ - Horizontal layout with description                                │
│ - Social icons in footer                                            │
└─────────────────────────────────────────────────────────────────────┘
```

## 5. Technical Implementation

### Dependencies
- react-select: For filter dropdowns
- swiper: For property image carousels
- aos: For scroll animations

### Component Libraries
| Library | Version | Usage |
|---------|---------|-------|
| React Select | ^5.7.0 | Filter dropdowns |
| Swiper | ^11.0.0 | Image carousels |
| Bootstrap 5 | ^5.3.0 | Grid layout, forms |

### Card Style Variants
```typescript
// Card Style Configuration
type CardVariant = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8';

const cardStyles: Record<CardVariant, CardStyleConfig> = {
  v1: { priceOverlay: true, socialInFooter: true },
  v2: { priceBelow: true, socialOnImage: true },
  v3: { minimal: true, showStats: false },
  v4: { statusBadge: 'FOR SALE', titleFirst: true },
  v5: { statusBadge: 'FOR SALE', priceBottom: true },
  v6: { priceTitleBox: true, twoColumn: true },
  v7: { horizontal: true, showDescription: true },
  v8: { horizontal: true, showAgent: true }
};

const PropertyCard = ({ property, variant }: Props) => {
  const style = cardStyles[variant];
  return <CardRenderer property={property} style={style} />;
};
```

---

## 6. Component Breakdown

### Header Navigation Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                                       │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Logo (Header Logo)                                              │
│ ├── Main Navigation Menu                                            │
│ │   ├── Home (dropdown)                                             │
│ │   ├── Listing (dropdown)                                          │
│ │   │   ├── Grid Variants (6 options)                              │
│ │   │   ├── Map Variants (5 options)                               │
│ │   │   └── List Variants (2 options)                              │
│ │   ├── Property (dropdown)                                         │
│ │   ├── Blog (dropdown)                                             │
│ │   └── Pages (dropdown)                                            │
│ ├── Auth Actions                                                    │
│ │   └── Login / Register Button                                     │
│ ├── CTA Button                                                      │
│ │   └── Add Property →                                              │
│ └── Mobile Menu                                                     │
│     └── Hamburger Menu Icon                                         │
└─────────────────────────────────────────────────────────────────────┘
```

### Breadcrumb Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB                                                           │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Page Title: "All List Style"                                    │
│ └── Breadcrumb Trail                                                │
│     ├── Home (link)                                                 │
│     ├── Separator: "/"                                              │
│     └── For Rent (link)                                             │
└─────────────────────────────────────────────────────────────────────┘
```

### Section Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ STYLE SECTION                                                        │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│ ├── Section Header                                                  │
│ │   └── Heading: "List Style V1", "List Style V2", etc.            │
│                                                                      │
│ └── Property Cards Grid                                             │
│     └── Property Card Components (3 per style)                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Footer Component
```
┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
├─────────────────────────────────────────────────────────────────────┤
│ Components:                                                          │
│                                                                      │
│ ├── Contact Section                                                 │
│ │   ├── Logo                                                        │
│ │   ├── Phone: "+(0) 123 050 945 02"                               │
│ │   ├── Email: "hi@homez.com"                                      │
│ │   ├── Apps Section                                                │
│ │   │   ├── Apple Store Button                                     │
│ │   │   └── Google Play Button                                     │
│ │   └── Social Links                                                │
│ │       └── Facebook, Twitter, Instagram, LinkedIn                 │
│                                                                      │
│ ├── Newsletter Section                                              │
│ │   ├── Label: "Keep Yourself Up to Date"                          │
│ │   ├── Email Input: "Your Email"                                  │
│ │   └── Subscribe Button                                            │
│                                                                      │
│ ├── Quick Links Columns                                             │
│ │   ├── Popular Search                                             │
│ │   │   └── Links: Apartment for Rent, etc.                        │
│ │   ├── Quick Links                                                │
│ │   │   └── Links: Terms of Use, Privacy Policy, etc.             │
│ │   └── Discover                                                   │
│ │       └── Links: Miami, Los Angeles, Chicago, New York          │
│                                                                      │
│ └── Copyright Bar                                                   │
│     └── "© Homez 2024 ib-themes - All rights reserved"             │
│         Privacy · Terms · Sitemap                                   │
└─────────────────────────────────────────────────────────────────────┘
```

## 6. Data Content Structure

### Property Card Data (All Styles)
```typescript
interface PropertyCard {
  // Primary Identification
  id: string;
  slug: string;
  
  // Basic Information
  title: string;                 // "Equestrian Family Home"
  location: string;              // "New York City, CA, USA"
  description?: string;          // Only for V7, V8
  
  // Pricing
  price: number;
  priceFormatted: string;        // "$14,000 / mo" or "$82,000"
  
  // Property Details
  beds: number;
  baths: number;
  sqft: number;
  
  // Status
  status: 'sale' | 'rent' | 'sold';
  isFeatured: boolean;
  
  // Media
  featuredImage: string;
  
  // Agent (V8 only)
  agent?: {
    name: string;
    avatar: string;
  };
  
  // User Interactions
  isFavorite: boolean;
  isCompared: boolean;
}
```

## 7. Interactive Elements

### Property Card Interactions (All Styles)
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Card Container | Click | Navigates to property details |
| Property Title | Click | Navigates to property details |
| Heart Icon | Click | Adds/removes from favorites |
| Compare Icon | Click | Adds/removes from comparison |
| More Options | Click | Opens context menu |

### Footer Interactions
| Element | Interaction | Behavior |
|---------|-------------|----------|
| Newsletter Input | Type | Enter email |
| Subscribe Button | Click | Submits email |
| Social Links | Click | Opens social media |
| Quick Links | Click | Navigates to page |

## 8. Style Comparison Matrix

| Feature | V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 |
|---------|----|----|----|----|----|----|----|----|
| Layout | Grid | Grid | Grid | Grid | Grid | Grid | Horizontal | Horizontal |
| Price Position | Overlay | Below image | Below image | Middle | Bottom | Box | Overlay | Overlay |
| Featured Badge | On image | On image | Optional | On image | - | On image | On image | On image |
| FOR SALE Badge | - | - | - | On image | On image | On image | - | - |
| Social Icons | Footer | On image | On image | On image | On image | On image | Footer | Footer |
| Description | No | No | No | No | No | No | Yes | Yes |
| Location | Yes | Yes | Yes | No | Yes | No | Yes | Yes |
| Stats Labels | Full | Full | None | None | None | Full | Full | Full |
| Agent Avatar | No | No | No | No | No | No | No | Yes |
| Status Footer | Yes | No | No | No | No | No | Yes | Yes |

## 9. Responsive Breakpoints

### Card Responsive Behavior
| Breakpoint | V1-V6 Cards | V7-V8 Cards |
|------------|-------------|-------------|
| > 1200px | 3 per row | Horizontal layout |
| 992-1200px | 2 per row | Horizontal (compact) |
| 768-991px | 2 per row | Vertical stack |
| < 768px | 1 per row | Vertical stack |

### CSS for Responsive Cards
```css
/* V1-V6 Grid Styles */
.style-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1200px) {
  .style-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .style-section {
    grid-template-columns: 1fr;
  }
}

/* V7-V8 Horizontal Styles */
.property-card-horizontal {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

@media (max-width: 768px) {
  .property-card-horizontal {
    flex-direction: column;
  }
  
  .property-card-horizontal .image {
    width: 100%;
    height: 200px;
  }
  
  .property-card-horizontal .description {
    display: none;
  }
}
```

## 10. Use Case Recommendations

### When to Use Each Style

| Style | Best For |
|-------|----------|
| **V1** | Standard grid layouts, featured properties |
| **V2** | Clean designs, minimal footer |
| **V3** | Price-focused listings, luxury properties |
| **V4** | Sales-focused listings, commercial real estate |
| **V5** | Location-focused listings, area guides |
| **V6** | Premium listings, high-value properties |
| **V7** | Detailed comparisons, rental listings |
| **V8** | Agent showcase, broker pages |

## 11. Accessibility Considerations

### ARIA Labels
- Property cards: `role="article"`
- Social icons: `aria-label` for each action
- Status badges: `aria-label` for screen readers

### Keyboard Navigation
- Tab: Navigate through cards
- Enter: Activate card link
- Focus indicators on all interactive elements


---

## 13. GSAP Animations

### Animation Library Analysis

**GSAP Status:** NOT USED  
**Alternative Animation Libraries:** AOS (Animate On Scroll), WOW.js, CSS Transitions

### AOS Animation Configuration
```typescript
AOS.init({
  duration: 1200,
  easing: 'ease',
  once: true,
  offset: 120
});
```

### CSS Transition Animations
```css
.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
.btn:hover {
  transform: translateY(-2px);
}
```

---

## 13.5 GSAP Animation Implementation

### Installation Requirements

```bash
npm install gsap@^3.12.0
```

### GSAP Core Setup

```typescript
// lib/gsap-config.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

### Style Section Animation (8 Card Styles)

```typescript
// components/ListAllStyle.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ListAllStyle = ({ styleSections }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Each style section reveal
      gsap.from('.style-section', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      // Cards within each section
      styleSections.forEach((section, index) => {
        gsap.from(`.style-section-${index} .property-card`, {
          opacity: 0,
          y: 25,
          stagger: 0.08,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: `.style-section-${index}`,
            start: 'top 75%',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{/* Style sections */}</div>;
};
```

### Card Variant Hover Animations

```typescript
// components/PropertyCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const PropertyCard = ({ property, variant }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // Card hover animation
    gsap.to(cardRef.current, {
      y: -5,
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Image zoom
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Action buttons reveal
    gsap.fromTo('.card-actions',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={imageRef}>{/* Image */}</div>
    </div>
  );
};
```

### Horizontal Card Animation (V7, V8)

```typescript
// components/HorizontalCard.tsx
import { gsap } from 'gsap';
import { useRef } from 'react';

const HorizontalCard = ({ property }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -3,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
      duration: 0.3,
      ease: 'power2.out',
    });

    // Description expand animation
    if (descriptionRef.current) {
      gsap.to(descriptionRef.current, {
        maxHeight: 100,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      duration: 0.3,
      ease: 'power2.out',
    });

    if (descriptionRef.current) {
      gsap.to(descriptionRef.current, {
        maxHeight: 60,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p ref={descriptionRef}>{property.description}</p>
    </div>
  );
};
```

### NPM Dependencies Update

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "next": "^14.0.0",
    "react": "^18.2.0"
  }
}
```

---

## 14. Theme Variables

### CSS Custom Properties
```css
:root {
  --color-primary: #e33e3e;
  --color-secondary: #041e42;
  --color-dark: #0f172a;
  --color-gray-300: #efefef;
  --radius-lg: 12px;
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

---

## 15. NPM Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "bootstrap": "^5.3.0",
    "swiper": "^11.0.0",
    "react-select": "^5.7.0",
    "aos": "^2.3.4"
  }
}
```

---

## 16. Related Pages

## 12. Related Pages

- [Header Map Style](./header-map-style.md) - Home page with map-style search
- [Map V1](./map-v1.md) - Map with grid-style cards (uses V1)
- [Map V2](./map-v2.md) - Map with list-style cards (uses V7)
- [Map V3](./map-v3.md) - Compact map cards (similar to V3)
- [Map V4](./map-v4.md) - Minimal map cards (similar to V3)
- [List v1](./list-v1.md) - Full list view (uses V7)

---

*Homez - Modern Designed Real Estate React NextJS Template*
