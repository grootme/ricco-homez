# My Favorites

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-my-favourites
- **Page Title:** My Favourites || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-my-favourites`

---

## Page Overview

The My Favorites page displays a grid of properties that the user has saved as favorites. It provides a visual card-based layout showing property images, details, and quick actions. Users can browse their saved properties and remove items from their favorites list.

### Primary Purpose

1. Display all favorited/saved properties
2. Show property details in card format
3. Enable removal of favorites
4. Provide quick access to property details
5. Support pagination for large collections

---

## Layout Structure

### Overall Page Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HEADER NAVIGATION                          │
├───────────────┬─────────────────────────────────────────────────────┤
│               │                                                     │
│   SIDEBAR     │                  MAIN CONTENT AREA                  │
│   (Fixed)     │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│  MAIN         │  │         Dashboard Title Area                  │  │
│  ├─Dashboard  │  │         "My Favourites"                       │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │              PROPERTY CARDS GRID               │  │
│  ├─Add Prop   │  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │  │
│  ├─My Props   │  │  │Card │ │Card │ │Card │ │Card │             │  │
│  ├─Favorites ●│  │  │  1  │ │  2  │ │  3  │ │  4  │             │  │
│  ├─Saved Srch │  │  └─────┘ └─────┘ └─────┘ └─────┘             │  │
│  └─Reviews    │  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │  │
│               │  │  │Card │ │Card │ │Card │ │Card │             │  │
│  MANAGE       │  │  │  5  │ │  6  │ │  7  │ │  8  │             │  │
│  ACCOUNT      │  │  └─────┘ └─────┘ └─────┘ └─────┘             │  │
│  ├─My Package │  │                                               │  │
│  ├─My Profile │  │              PAGINATION                        │  │
│  └─Logout     │  │         "1-8 of 300+ property available"       │  │
│               │  └───────────────────────────────────────────────┘  │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│                          FOOTER                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Data Content Structure

### Dashboard Title Area

```html
<div class="dashboard_title_area">
  <h2>My Favourites</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Property Cards Grid

**Container:** Row with responsive columns

**Column Classes:** `col-md-6 col-lg-4 col-xl-3`

#### Property Card Structure

```html
<div class="listing-style1 style2">
  <div class="list-thumb">
    <img alt="listings" class="w-100 h-100 cover" src="/images/listings/g1-1.jpg">
    <button class="tag-del" title="Delete Item" data-tooltip-id="delete-1">
      <span class="fas fa-trash-can"></span>
    </button>
    <div class="list-price">$14,000 / <span>mo</span></div>
  </div>
  <div class="list-content">
    <h6 class="list-title">
      <a href="/single-v3/1">Equestrian Family Home</a>
    </h6>
    <p class="list-text">New York City, CA, USA</p>
    <div class="list-meta d-flex align-items-center">
      <a href="#"><span class="flaticon-bed"></span> 1 bed</a>
      <a href="#"><span class="flaticon-shower"></span> 2 bath</a>
      <a href="#"><span class="flaticon-expand"></span> 1200 sqft</a>
    </div>
    <hr class="mt-2 mb-2">
    <div class="list-meta2 d-flex justify-content-between align-items-center">
      <span class="for-what">For Rent</span>
      <div class="icons d-flex align-items-center">
        <a href="#"><span class="flaticon-fullscreen"></span></a>
        <a href="#"><span class="flaticon-new-tab"></span></a>
        <a href="#"><span class="flaticon-like"></span></a>
      </div>
    </div>
  </div>
</div>
```

#### Property Card Data Fields

| Field       | Example Value                  | Location          |
|-------------|--------------------------------|-------------------|
| Image       | /images/listings/g1-1.jpg      | `.list-thumb img` |
| Price       | $14,000/mo                     | `.list-price`     |
| Title       | Equestrian Family Home         | `.list-title a`   |
| Location    | New York City, CA, USA         | `.list-text`      |
| Beds        | 1                              | `.flaticon-bed`   |
| Baths       | 2                              | `.flaticon-shower`|
| Sqft        | 1200                           | `.flaticon-expand`|
| Type        | For Rent                       | `.for-what`       |
| Link        | /single-v3/1                   | `.list-title a`   |

### Sample Favorites Data

| # | Property Name              | Location                  | Price       | Beds | Baths | Sqft  | Type     |
|---|---------------------------|---------------------------|-------------|------|-------|-------|----------|
| 1 | Equestrian Family Home    | New York City, CA, USA    | $14,000/mo  | 1    | 2     | 1200  | For Rent |
| 2 | Luxury villa in Rego Park | Los Angeles City, CA, USA | $82,000/mo  | 2    | 1     | 1300  | For Rent |
| 3 | Equestrian Family Home    | Texas City, CA, USA       | $14,000/mo  | 3    | 3     | 1000  | For Rent |
| 4 | Luxury villa in Rego Park | New Jersey City, CA, USA  | $82,000/mo  | 4    | 5     | 1200  | For Rent |
| 5 | Equestrian Family Home    | San Diego City, CA, USA   | $14,000/mo  | 5    | 4     | 900   | For Rent |
| 6 | Luxury villa in Rego Park | California City, CA, USA  | $82,000/mo  | 6    | 4     | 1200  | For Rent |
| 7 | Equestrian Family Home    | San Francisco City, CA    | $14,000/mo  | 3    | 2     | 1212  | For Rent |
| 8 | Luxury villa in Rego Park | New York City, CA, USA    | $82,000/mo  | 4    | 4     | 1200  | For Rent |

### Pagination

```html
<div class="mbp_pagination text-center">
  <ul class="page_navigation">
    <li class="page-item">
      <span class="page-link pointer"><span class="fas fa-angle-left"></span></span>
    </li>
    <li class="page-item"><span class="page-link pointer">1</span></li>
    <li class="page-item active"><span class="page-link pointer">2</span></li>
    <li class="page-item"><span class="page-link pointer">3</span></li>
    <li class="page-item"><span class="page-link pointer">4</span></li>
    <li class="page-item"><span class="page-link pointer">5</span></li>
    <li class="page-item pointer">
      <span class="page-link"><span class="fas fa-angle-right"></span></span>
    </li>
  </ul>
  <p class="mt10 pagination_page_count text-center">1-8 of 300+ property available</p>
</div>
```

---

## Component Breakdown

### 1. Property Card Component

**CSS Classes:** `.listing-style1`, `.style2`

**Props:**
```typescript
interface FavoritePropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: 'mo' | 'night' | 'week';
  beds: number;
  baths: number;
  sqft: number;
  type: 'For Rent' | 'For Sale';
  imageUrl: string;
  link: string;
  onRemove: () => void;
}
```

### 2. Delete Button Component

**CSS Classes:** `.tag-del`

**Props:**
```typescript
interface DeleteButtonProps {
  propertyId: string;
  onRemove: () => void;
  confirmMessage?: string;
}
```

**Features:**
- Trash can icon
- Tooltip on hover
- Confirmation before delete

### 3. Quick Action Icons Component

**CSS Classes:** `.icons`

**Actions:**
| Icon Class              | Action              |
|------------------------|---------------------|
| flaticon-fullscreen    | View fullscreen     |
| flaticon-new-tab       | Open in new tab     |
| flaticon-like          | Like/favorite       |

---

## Interactive Elements

### Remove from Favorites

**Trigger:** Click delete button (trash icon)

**Behavior:**
- Show confirmation modal
- Remove card from grid
- Update pagination count
- Show success notification

### View Property Details

**Trigger:** Click property title or image

**Behavior:**
- Navigate to property single page
- Open in same tab

### Quick Actions

**Fullscreen:**
- Open property in fullscreen/lightbox mode

**New Tab:**
- Open property details in new browser tab

**Like:**
- Toggle favorite status (already favorited)

### Pagination

**Trigger:** Click page number or arrows

**Behavior:**
- Load next/previous page of favorites
- Animate card entrance
- Update current page indicator

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Grid Columns |
|------------|------------|--------------|
| xs         | < 576px    | 1 column     |
| sm-md      | 576-767px  | 1 column     |
| md         | ≥ 768px    | 2 columns    |
| lg         | ≥ 992px    | 3 columns    |
| xl         | ≥ 1200px   | 4 columns    |

### Grid Layout

```css
.col-md-6    /* 2 columns on md */
.col-lg-4    /* 3 columns on lg */
.col-xl-3    /* 4 columns on xl */
```

### Mobile Behavior

1. **Card Layout:**
   - Full-width cards
   - Stacked information
   - Larger touch targets

2. **Pagination:**
   - Simplified controls
   - Page count text wraps

---

## CSS Classes Reference

### Card Classes

```css
.listing-style1            /* Base card styling */
.style2                    /* Variant styling */
.list-thumb                /* Image container */
.list-content              /* Content container */
.list-title                /* Title styling */
.list-text                 /* Location text */
.list-price                /* Price badge */
.list-meta                 /* Meta info row */
.list-meta2                /* Secondary meta row */
```

### Action Classes

```css
.tag-del                   /* Delete button */
.icons                     /* Icon container */
.for-what                  /* Property type badge */
```

### Image Classes

```css
.w-100                     /* Width 100% */
.h-100                     /* Height 100% */
.cover                     /* Object-fit cover */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get Favorites:**
   ```
   GET /api/user/favorites
   Query: ?page=1&limit=8
   ```
   Returns: Paginated list of favorite properties

   ```json
   {
     "favorites": [
       {
         "id": "1",
         "propertyId": "prop-123",
         "title": "Equestrian Family Home",
         "location": "New York City, CA, USA",
         "price": 14000,
         "priceUnit": "mo",
         "beds": 1,
         "baths": 2,
         "sqft": 1200,
         "type": "For Rent",
         "imageUrl": "/images/listings/g1-1.jpg"
       }
     ],
     "pagination": {
       "currentPage": 1,
       "totalPages": 38,
       "totalItems": 300
     }
   }
   ```

2. **Remove from Favorites:**
   ```
   DELETE /api/user/favorites/:propertyId
   ```
   Returns: Success confirmation

---

## State Management

### Page State

```typescript
interface FavoritesState {
  favorites: FavoriteProperty[];
  isLoading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

interface FavoriteProperty {
  id: string;
  propertyId: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  imageUrl: string;
  addedAt: Date;
}
```

---

## Accessibility Considerations

1. **Card Links:**
   - Descriptive link text
   - Focus states visible

2. **Delete Button:**
   - Aria-label for action
   - Confirmation dialog
   - Keyboard accessible

3. **Pagination:**
   - Current page announced
   - Navigation labels

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-my-favourites/page.tsx` - Page component
- `/components/dashboard/FavoriteCard.tsx` - Favorite property card
- `/components/common/Pagination.tsx` - Pagination component
- `/components/property/PropertyCard.tsx` - Shared property card

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Favorites Features
- Add/remove favorites with optimistic updates
- Grid layout with responsive columns
- Quick actions (fullscreen, new tab, share)
- Pagination for large collections

### Key Dependencies
- react-masonry-css: ^1.0.16 for grid layout
- react-hot-toast: ^2.4.0 for notifications
- framer-motion: ^10.16.0 for animations

---

## GSAP Animations Used

**Note**: This template uses **AOS (Animate On Scroll)** library, NOT GSAP.

### Animation Library
```json
{
  "aos": "^2.3.4"
}
```

### AOS Animation Types Used:
| Animation | Description | Usage |
|-----------|-------------|-------|
| `fade-up` | Fade in from bottom | Property cards |
| `zoom-in` | Scale from 0.6 to 1 | Card images |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Property Cards | transform, box-shadow | 300ms | ease |
| Delete Button | opacity | 200ms | ease |
| Quick Actions | opacity | 200ms | ease |
| Pagination | all | 300ms | ease |

---

## Theme Variables

### Card Styling:
```css
.listing-style1      /* Property card base */
.style2              /* Variant styling */
.list-thumb          /* Image container */
.list-content        /* Content container */
.list-price          /* Price badge */
```

### Action Classes:
```css
.tag-del             /* Delete button on image */
.icons               /* Icon container */
.for-what            /* Property type badge */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Responsive grid (4 cols desktop, 3 cols lg, 2 cols md, 1 col mobile)

### Grid Classes:
```css
.col-md-6            /* 2 columns on md */
.col-lg-4            /* 3 columns on lg */
.col-xl-3            /* 4 columns on xl */
```

---

## NPM Libraries Required

### Animation:
```json
{
  "aos": "^2.3.4",
  "framer-motion": "^10.16.0"
}
```

### Grid Layout:
```json
{
  "react-masonry-css": "^1.0.16"
}
```

### Notifications:
```json
{
  "react-hot-toast": "^2.4.0"
}
```

---

## GSAP Animation Implementation

### NPM Dependencies

```json
{
  "gsap": "^3.12.0"
}
```

### Installation

```bash
npm install gsap
```

### GSAP Plugin Registration

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Property Card Grid Animation

```javascript
// Staggered entrance for property cards
const animatePropertyCards = () => {
  const cards = document.querySelectorAll('.listing-style1.style2');

  gsap.from(cards, {
    opacity: 0,
    y: 40,
    scale: 0.95,
    stagger: {
      each: 0.1,
      from: 'start'
    },
    duration: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.listing-style1',
      start: 'top 85%'
    }
  });
};

// Card hover effects
const initCardHoverAnimations = () => {
  const cards = document.querySelectorAll('.listing-style1.style2');

  cards.forEach((card) => {
    const image = card.querySelector('.list-thumb img');
    const title = card.querySelector('.list-title');
    const icons = card.querySelectorAll('.icons a');

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(image, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(title, {
        color: '#e33961',
        duration: 0.2
      });

      gsap.to(icons, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.2
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '',
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(title, {
        color: '',
        duration: 0.2
      });

      gsap.to(icons, {
        opacity: 0.7,
        y: 5,
        duration: 0.2
      });
    });
  });
};
```

### Delete Button Animation

```javascript
// Delete button animation on card
const initDeleteButtonAnimation = () => {
  const deleteButtons = document.querySelectorAll('.tag-del');

  deleteButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.1,
        backgroundColor: '#ef4444',
        duration: 0.2
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: '',
        duration: 0.2
      });
    });

    btn.addEventListener('click', () => {
      const card = btn.closest('.listing-style1');

      gsap.to(card, {
        opacity: 0,
        scale: 0.8,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          // Remove card and re-animate remaining cards
          card.remove();
        }
      });
    });
  });
};
```

### Quick Action Icons Animation

```javascript
// Quick action icons hover effects
const initQuickActionIcons = () => {
  const iconButtons = document.querySelectorAll('.icons a');

  iconButtons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.2,
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.2
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        backgroundColor: '',
        color: '',
        duration: 0.2
      });
    });
  });
};
```

### Price Badge Animation

```javascript
// Price badge entrance
const animatePriceBadges = () => {
  const priceBadges = document.querySelectorAll('.list-price');

  gsap.from(priceBadges, {
    opacity: 0,
    x: 20,
    stagger: 0.08,
    duration: 0.4,
    ease: 'power2.out',
    delay: 0.3
  });
};
```

### Property Type Badge Animation

```javascript
// "For Rent/For Sale" badge animation
const animateTypeBadges = () => {
  const typeBadges = document.querySelectorAll('.for-what');

  gsap.from(typeBadges, {
    scale: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: 'back.out(1.7)',
    delay: 0.5
  });
};
```

### Pagination Animation

```javascript
// Pagination entrance
const animatePagination = () => {
  const pagination = document.querySelector('.mbp_pagination');

  if (pagination) {
    gsap.from(pagination, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pagination,
        start: 'top 90%'
      }
    });
  }
};

// Page link hover animation
const initPaginationHover = () => {
  const pageLinks = document.querySelectorAll('.page_navigation .page-link');

  pageLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.05,
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.2
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        backgroundColor: '',
        color: '',
        duration: 0.2
      });
    });
  });
};
```

### Grid Re-flow Animation

```javascript
// Animate remaining cards after deletion
const animateGridReflow = () => {
  const cards = document.querySelectorAll('.listing-style1.style2');

  cards.forEach((card, index) => {
    gsap.to(card, {
      x: index % 4 === 0 ? 0 : 0, // Adjust based on new position
      duration: 0.3,
      ease: 'power2.out'
    });
  });
};
```

### Complete My Favourites Animation Init

```javascript
// Initialize all animations
const initMyFavouritesAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animatePropertyCards();
  initCardHoverAnimations();
  initDeleteButtonAnimation();
  initQuickActionIcons();
  animatePriceBadges();
  animateTypeBadges();
  animatePagination();
  initPaginationHover();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initMyFavouritesAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useFavouritesAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useFavouritesAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Card grid stagger
    gsap.from('.listing-style1.style2', {
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.listing-style1',
        start: 'top 85%'
      }
    });

    // Card hover effects
    const cards = document.querySelectorAll('.listing-style1.style2');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', duration: 0.3 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: '', duration: 0.3 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
```

---

## Notes

- This template uses AOS (Animate On Scroll) for animations, not GSAP
- Grid layout uses 4 columns on desktop
- Delete requires confirmation to prevent accidents
- Cards show property type badge (For Rent/For Sale)
- Price displayed with period unit (mo/night/week)
- Pagination shows total count with "+" for large numbers
- Framer Motion used for card entrance animations
