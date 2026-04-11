# My Properties

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-my-properties
- **Page Title:** My Properties || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-my-properties`

---

## Page Overview

The My Properties page displays a comprehensive list of all properties submitted by the authenticated user. It provides a table-based view with property details, publication status, views, and management actions. Users can search, sort, and manage their property listings from this central location.

### Primary Purpose

1. Display all user-submitted property listings
2. Show publication status for each property
3. Provide quick actions (edit, delete)
4. Enable search and filtering capabilities
5. Allow navigation to add new property

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
│  ├─Dashboard  │  │         "My Properties"                       │  │
│  └─Message    │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌───────────────────────────────────────────────┐  │
│  LISTINGS     │  │  Search │ Sort Dropdown │ Add New Property    │  │
│  ├─Add Prop   │  └───────────────────────────────────────────────┘  │
│  ├─My Props ● │                                                     │
│  ├─Favorites  │  ┌───────────────────────────────────────────────┐  │
│  ├─Saved Srch │  │              PROPERTIES TABLE                  │  │
│  └─Reviews    │  │  ┌─────────────────────────────────────────┐  │  │
│               │  │  │ Listing │ Date │ Status │ View │ Action│  │  │
│  MANAGE       │  │  ├─────────────────────────────────────────┤  │  │
│  ACCOUNT      │  │  │ [Property Card 1]                       │  │  │
│  ├─My Package │  │  │ [Property Card 2]                       │  │  │
│  ├─My Profile │  │  │ [Property Card 3]                       │  │  │
│  └─Logout     │  │  │ ...                                     │  │  │
│               │  │  └─────────────────────────────────────────┘  │  │
│               │  │                                               │  │
│               │  │              PAGINATION                        │  │
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
  <h2>My Properties</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Search and Filter Bar

**Container:** `.dashboard_search_meta`

#### Search Input

```html
<div class="item1 mb15-sm">
  <div class="search_area">
    <input type="text" class="form-control bdrs12" placeholder="Search" required="">
    <label>
      <span class="flaticon-search"></span>
    </label>
  </div>
</div>
```

#### Sort Dropdown

```html
<div class="page_control_shorting bdr1 bdrs12 py-2 ps-3 pe-2 mx-1 mx-xxl-3 bgc-white mb15-sm maxw160">
  <div class="pcs_dropdown d-flex align-items-center">
    <span style="min-width:50px" class="title-color">Sort by:</span>
    <select class="form-select show-tick">
      <option>Best Seller</option>
      <option>Best Match</option>
      <option>Price Low</option>
      <option>Price High</option>
    </select>
  </div>
</div>
```

**Sort Options:**
| Option       | Description                    |
|--------------|--------------------------------|
| Best Seller  | Sort by popularity             |
| Best Match   | Sort by relevance              |
| Price Low    | Sort by price ascending        |
| Price High   | Sort by price descending       |

#### Add New Property Button

```html
<a href="#" class="ud-btn btn-thm">
  Add New Property
  <i class="fal fa-arrow-right-long"></i>
</a>
```

### Properties Table

**Container:** `.packages_table` with `.table-responsive`

#### Table Header

```html
<thead class="t-head">
  <tr>
    <th scope="col">Listing title</th>
    <th scope="col">Date Published</th>
    <th scope="col">Status</th>
    <th scope="col">View</th>
    <th scope="col">Action</th>
  </tr>
</thead>
```

#### Table Columns

| Column          | Width    | Content                        |
|-----------------|----------|--------------------------------|
| Listing Title   | Flexible | Property card with image       |
| Date Published  | Auto     | Publication date               |
| Status          | Auto     | Status badge                   |
| View            | Auto     | View date/count                |
| Action          | Auto     | Edit & Delete buttons          |

#### Property Card (Table Cell)

```html
<th scope="row">
  <div class="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
    <div class="list-thumb">
      <img alt="property" class="w-100" src="/images/listings/list-1.jpg">
    </div>
    <div class="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
      <div class="h6 list-title">
        <a href="/single-v1/1">Equestrian Family Home</a>
      </div>
      <p class="list-text mb-0">California City, CA, USA</p>
      <div class="list-price">
        <a href="#">$14,000/mo</a>
      </div>
    </div>
  </div>
</th>
```

**Property Card Data:**

| Field       | Example Value                  |
|-------------|--------------------------------|
| Image       | /images/listings/list-1.jpg    |
| Title       | Equestrian Family Home         |
| Location    | California City, CA, USA       |
| Price       | $14,000/mo                     |
| Link        | /single-v1/1                   |

#### Status Badges

```html
<span class="pending-style style1">Pending</span>
<span class="pending-style style2">Published</span>
<span class="pending-style style3">Processing</span>
```

**Status Types:**

| Status     | CSS Class              | Color      |
|------------|------------------------|------------|
| Pending    | .pending-style.style1  | Yellow/Orange |
| Published  | .pending-style.style2  | Green      |
| Processing | .pending-style.style3  | Blue       |

#### Action Buttons

```html
<td class="vam">
  <div class="d-flex">
    <button class="icon" style="border:none" data-tooltip-id="edit-1">
      <span class="fas fa-pen fa"></span>
    </button>
    <button class="icon" style="border:none" data-tooltip-id="delete-1">
      <span class="flaticon-bin"></span>
    </button>
  </div>
</td>
```

**Action Types:**

| Action  | Icon Class       | Tooltip ID  | Function          |
|---------|------------------|-------------|-------------------|
| Edit    | fas fa-pen       | edit-{id}   | Edit property     |
| Delete  | flaticon-bin     | delete-{id} | Delete property   |

### Sample Properties Data

| # | Property Name              | Location                  | Price       | Status     | Date         |
|---|---------------------------|---------------------------|-------------|------------|--------------|
| 1 | Equestrian Family Home    | California City, CA, USA  | $14,000/mo  | Pending    | Dec 31, 2022 |
| 2 | Luxury villa in Rego Park | California City, CA, USA  | $14,000/mo  | Published  | Dec 31, 2022 |
| 3 | Villa on Hollywood Blvd   | California City, CA, USA  | $14,000/mo  | Processing | Dec 31, 2022 |
| 4 | Equestrian Family Home    | California City, CA, USA  | $14,000/mo  | Pending    | Dec 31, 2022 |
| 5 | Luxury villa in Rego Park | California City, CA, USA  | $14,000/mo  | Published  | Dec 31, 2022 |

---

## Component Breakdown

### 1. Search Component

**CSS Classes:** `.search_area`, `.form-control`

**Props:**
```typescript
interface SearchProps {
  placeholder: string;
  onSearch: (query: string) => void;
  debounce?: number;
}
```

**Features:**
- Search icon
- Debounced input
- Clear button

### 2. Sort Dropdown Component

**CSS Classes:** `.page_control_shorting`, `.pcs_dropdown`

**Props:**
```typescript
interface SortDropdownProps {
  label: string;
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

interface SortOption {
  value: string;
  label: string;
}
```

### 3. Properties Table Component

**CSS Classes:** `.packages_table`, `.table-style3`

**Props:**
```typescript
interface PropertiesTableProps {
  properties: Property[];
  onEdit: (propertyId: string) => void;
  onDelete: (propertyId: string) => void;
  isLoading?: boolean;
}

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  status: 'pending' | 'published' | 'processing';
  publishedDate: string;
  imageUrl: string;
  views: number;
}
```

### 4. Property Card Component

**CSS Classes:** `.listing-style1`, `.dashboard-style`

**Props:**
```typescript
interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  link: string;
  variant?: 'table' | 'card';
}
```

### 5. Status Badge Component

**CSS Classes:** `.pending-style`

**Props:**
```typescript
interface StatusBadgeProps {
  status: 'pending' | 'published' | 'processing';
}

// Maps to CSS classes
const statusClasses = {
  pending: 'pending-style style1',
  published: 'pending-style style2',
  processing: 'pending-style style3'
};
```

### 6. Action Buttons Component

**Props:**
```typescript
interface ActionButtonsProps {
  propertyId: string;
  onEdit: () => void;
  onDelete: () => void;
}
```

### 7. Pagination Component

**CSS Classes:** `.mbp_pagination`, `.page_navigation`

**Props:**
```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showCount?: boolean;
  totalItems?: number;
}
```

---

## Interactive Elements

### Search Functionality

**Trigger:** Type in search input

**Behavior:**
- Debounced search (typically 300ms)
- Filter properties by title/location
- Update table results
- Clear results count

### Sort Functionality

**Trigger:** Select option from dropdown

**Behavior:**
- Reorder properties list
- Update table display
- Persist sort preference (optional)

### Edit Property

**Trigger:** Click edit button (pen icon)

**Behavior:**
- Navigate to edit property page
- Pre-populate form with property data
- Return to list after save

### Delete Property

**Trigger:** Click delete button (bin icon)

**Behavior:**
- Show confirmation modal
- Delete property on confirm
- Remove from list
- Show success notification

### Add New Property

**Trigger:** Click "Add New Property" button

**Behavior:**
- Navigate to add property form
- Start new property wizard

### Pagination Navigation

**Trigger:** Click page number or arrows

**Behavior:**
- Load next/previous page
- Scroll to top of table
- Update current page indicator

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Stack title and actions vertically          |
| sm         | ≥ 576px    | Improved spacing                             |
| md         | ≥ 768px    | Two-column header layout                     |
| lg         | ≥ 992px    | Sidebar visible                              |
| xl         | ≥ 1200px   | Full table layout                            |
| xxl        | ≥ 1400px   | Optimized header with all elements           |

### Mobile Behavior

1. **Table Display:**
   - Horizontal scroll for table
   - Sticky first column
   - Compact cell padding

2. **Header:**
   - Stack search, sort, button
   - Full-width search
   - Condensed sort dropdown

3. **Property Card:**
   - Stack image above details
   - Full-width layout

---

## CSS Classes Reference

### Table Classes

```css
.packages_table            /* Table container */
.table-responsive          /* Responsive wrapper */
.table-style3              /* Table styling */
.table                     /* Bootstrap table */
.at-savesearch             /* Additional styling */
.t-head                    /* Table header */
.t-body                    /* Table body */
.vam                       /* Vertical align middle */
```

### Property Card Classes

```css
.listing-style1            /* Property card styling */
.dashboard-style           /* Dashboard variant */
.d-xxl-flex                /* Flex on xxl breakpoint */
.list-thumb                /* Image container */
.list-content              /* Content container */
.list-title                /* Title styling */
.list-text                 /* Location text */
.list-price                /* Price styling */
```

### Status Classes

```css
.pending-style             /* Base status badge */
.pending-style.style1      /* Pending status */
.pending-style.style2      /* Published status */
.pending-style.style3      /* Processing status */
```

### Action Classes

```css
.icon                      /* Icon button */
.d-flex                    /* Flex container */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get User Properties:**
   ```
   GET /api/user/properties
   Query: ?page=1&limit=10&sort=price_low&search=query
   ```
   Returns: Paginated list of user properties

   ```json
   {
     "properties": [...],
     "pagination": {
       "currentPage": 1,
       "totalPages": 5,
       "totalItems": 48
     }
   }
   ```

2. **Delete Property:**
   ```
   DELETE /api/properties/:id
   ```
   Returns: Success confirmation

3. **Search Properties:**
   ```
   GET /api/user/properties/search?q=query
   ```
   Returns: Filtered property list

---

## State Management

### Page State

```typescript
interface MyPropertiesState {
  properties: Property[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: string;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
```

### Actions

- `loadProperties(page, sort, search)`
- `searchProperties(query)`
- `sortProperties(sortBy)`
- `deleteProperty(propertyId)`
- `changePage(page)`

---

## Accessibility Considerations

1. **Table Headers:**
   - Proper `<th>` elements with scope
   - Column headers are descriptive

2. **Action Buttons:**
   - Tooltip for icon buttons
   - Aria-label for screen readers
   - Keyboard accessible

3. **Pagination:**
   - Current page announced
   - Navigation via keyboard
   - Clear focus states

---

## Performance Considerations

1. **Pagination:**
   - Load limited results per page
   - Cache previous pages
   - Infinite scroll option

2. **Search:**
   - Debounce input
   - Server-side search
   - Cancel pending requests

3. **Table Rendering:**
   - Virtual scrolling for large lists
   - Lazy load images
   - Memoize table rows

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-my-properties/page.tsx` - Page component
- `/components/dashboard/PropertiesTable.tsx` - Table component
- `/components/dashboard/PropertyRow.tsx` - Table row component
- `/components/dashboard/StatusBadge.tsx` - Status indicator
- `/components/common/Pagination.tsx` - Pagination component
- `/components/common/SearchInput.tsx` - Search component
- `/components/common/SortDropdown.tsx` - Sort dropdown

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Property Management Features
- Property listing CRUD operations
- Status management (pending, published, processing)
- Search and filter functionality
- Pagination with server-side rendering

### Key Dependencies
- @tanstack/react-table: ^8.11.0 for data tables
- react-hot-toast: ^2.4.0 for notifications
- react-tooltip: ^5.25.0 for action tooltips

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
| `fade-up` | Fade in from bottom | Table rows |
| `fade-in` | Fade in without movement | Property cards |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Table Rows | background-color | 200ms | ease |
| Status Badges | opacity | 200ms | ease |
| Action Buttons | color, background | 200ms | ease |
| Pagination | all | 300ms | ease |

---

## Theme Variables

### Status Badge Colors:
```css
.pending-style.style1   /* Pending: Yellow/Orange */
.pending-style.style2   /* Published: Green */
.pending-style.style3   /* Processing: Blue */
```

### Table Styling:
```css
.packages_table      /* Table container */
.table-style3        /* Table styling */
.t-head              /* Table header */
.t-body              /* Table body */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Responsive table with horizontal scroll
- Flexbox for header layout

### Property Card in Table:
```css
.listing-style1      /* Property card base */
.dashboard-style     /* Dashboard variant */
.list-thumb          /* Image container */
.list-content        /* Content container */
```

---

## NPM Libraries Required

### Data Table:
```json
{
  "@tanstack/react-table": "^8.11.0"
}
```

### Notifications:
```json
{
  "react-hot-toast": "^2.4.0"
}
```

### Tooltips:
```json
{
  "react-tooltip": "^5.25.0"
}
```

### Animation:
```json
{
  "aos": "^2.3.4"
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

### Table Row Animations

```javascript
// Staggered entrance for table rows
const animateTableRows = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  gsap.from(rows, {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.4,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.packages_table',
      start: 'top 80%'
    }
  });
};

// Row hover effect
const initTableRowHover = () => {
  const rows = document.querySelectorAll('.packages_table tbody tr');

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      gsap.to(row, {
        backgroundColor: 'rgba(227, 57, 97, 0.05)',
        duration: 0.2,
        ease: 'power1.out'
      });
    });

    row.addEventListener('mouseleave', () => {
      gsap.to(row, {
        backgroundColor: 'transparent',
        duration: 0.2,
        ease: 'power1.out'
      });
    });
  });
};
```

### Property Card in Table Animation

```javascript
// Property card image scale on hover
const initPropertyCardAnimations = () => {
  const propertyCards = document.querySelectorAll('.listing-style1.dashboard-style');

  propertyCards.forEach((card) => {
    const image = card.querySelector('.list-thumb img');
    const title = card.querySelector('.list-title');

    card.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(title, {
        color: '#e33961',
        duration: 0.2
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(title, {
        color: '',
        duration: 0.2
      });
    });
  });
};
```

### Status Badge Animation

```javascript
// Status badge entrance with pulse
const animateStatusBadges = () => {
  const badges = document.querySelectorAll('.pending-style');

  gsap.from(badges, {
    scale: 0,
    opacity: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.packages_table',
      start: 'top 80%'
    }
  });
};

// Status badge pulse animation
const pulseStatusBadge = (badge) => {
  gsap.to(badge, {
    scale: 1.1,
    duration: 0.15,
    yoyo: true,
    repeat: 1,
    ease: 'power1.inOut'
  });
};
```

### Action Buttons Animation

```javascript
// Action button hover and click animations
const initActionButtons = () => {
  const actionButtons = document.querySelectorAll('.packages_table .icon');

  actionButtons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.15,
        backgroundColor: '#e33961',
        color: '#ffffff',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: '',
        color: '',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('click', () => {
      gsap.to(btn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    });
  });
};
```

### Search and Filter Animation

```javascript
// Search input focus animation
const initSearchAnimation = () => {
  const searchInput = document.querySelector('.search_area input');
  const searchIcon = document.querySelector('.search_area .flaticon-search');

  searchInput?.addEventListener('focus', () => {
    gsap.to(searchInput, {
      boxShadow: '0 0 0 3px rgba(227, 57, 97, 0.2)',
      duration: 0.2
    });

    gsap.to(searchIcon, {
      color: '#e33961',
      scale: 1.1,
      duration: 0.2
    });
  });

  searchInput?.addEventListener('blur', () => {
    gsap.to(searchInput, {
      boxShadow: 'none',
      duration: 0.2
    });

    gsap.to(searchIcon, {
      color: '',
      scale: 1,
      duration: 0.2
    });
  });
};

// Sort dropdown animation
const initSortDropdown = () => {
  const dropdown = document.querySelector('.page_control_shorting');

  dropdown?.addEventListener('click', () => {
    gsap.to(dropdown, {
      borderColor: '#e33961',
      duration: 0.2
    });
  });
};
```

### Pagination Animation

```javascript
// Pagination button animations
const initPaginationAnimations = () => {
  const pageLinks = document.querySelectorAll('.page_navigation .page-link');

  pageLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        boxShadow: 'none',
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
};

// Page transition animation
const animatePageTransition = (direction) => {
  const table = document.querySelector('.packages_table');

  gsap.to(table, {
    opacity: 0,
    x: direction === 'next' ? -20 : 20,
    duration: 0.2,
    onComplete: () => {
      // Load new content then:
      gsap.from(table, {
        opacity: 0,
        x: direction === 'next' ? 20 : -20,
        duration: 0.3
      });
    }
  });
};
```

### Add Property Button Animation

```javascript
// Add property button animation
const initAddPropertyButton = () => {
  const addBtn = document.querySelector('.ud-btn.btn-thm');

  addBtn?.addEventListener('mouseenter', () => {
    gsap.to(addBtn, {
      scale: 1.02,
      boxShadow: '0 8px 25px rgba(227, 57, 97, 0.35)',
      duration: 0.25,
      ease: 'power2.out'
    });

    gsap.to(addBtn.querySelector('i'), {
      x: 5,
      duration: 0.25
    });
  });

  addBtn?.addEventListener('mouseleave', () => {
    gsap.to(addBtn, {
      scale: 1,
      boxShadow: '',
      duration: 0.25,
      ease: 'power2.out'
    });

    gsap.to(addBtn.querySelector('i'), {
      x: 0,
      duration: 0.25
    });
  });
};
```

### Complete My Properties Animation Init

```javascript
// Initialize all animations
const initMyPropertiesAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateTableRows();
  initTableRowHover();
  initPropertyCardAnimations();
  animateStatusBadges();
  initActionButtons();
  initSearchAnimation();
  initSortDropdown();
  initPaginationAnimations();
  initAddPropertyButton();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initMyPropertiesAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useMyPropertiesAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useMyPropertiesAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Table row stagger
    gsap.from('.packages_table tbody tr', {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.packages_table',
        start: 'top 80%'
      }
    });

    // Action button hover effects
    const buttons = document.querySelectorAll('.packages_table .icon');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.15, duration: 0.2 });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
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
- Table uses responsive horizontal scroll on mobile
- Status badges have distinct colors for each state
- Delete action requires confirmation
- Edit navigates to add property form with existing data
- Search filters by title and location
- Pagination shows "1-8 of 300+ property available"
